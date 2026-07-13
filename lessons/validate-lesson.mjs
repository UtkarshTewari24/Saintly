// Structural validator for Saintly lesson modules.
// Usage: node lessons/validate-lesson.mjs lessons/chapter-1/lesson-1-2.js
const path = process.argv[2];
if (!path) { console.error('usage: node lessons/validate-lesson.mjs <lesson-file>'); process.exit(1); }

import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
const mod = await import(pathToFileURL(resolve(path)).href);
const l = mod.default;
const issues = [];
const types = new Set();

// Beats may award an identity-deck card; the id must exist in the registry.
let IDENTITY_CARDS = null;
try { ({ IDENTITY_CARDS } = await import(pathToFileURL(resolve('identity-deck.js')).href)); } catch { /* deck optional */ }
const awarded = [];

for (const key of ['id', 'title', 'kicker', 'beats']) if (l[key] === undefined) issues.push(`lesson missing ${key}`);
if (typeof l.topicIndex !== 'number' || typeof l.lessonIndex !== 'number') issues.push('lesson missing topicIndex/lessonIndex numbers');

(l.beats || []).forEach((b, i) => {
  const t = b.interaction?.type;
  types.add(t);
  if (!b.prompt) issues.push(`beat ${i}: missing prompt`);
  if (!t) return issues.push(`beat ${i}: missing interaction.type`);
  if (t === 'mcq') {
    if (!Array.isArray(b.interaction.options) || b.interaction.options.length < 2) issues.push(`beat ${i}: mcq needs options`);
    else if (!(b.interaction.correct >= 0 && b.interaction.correct < b.interaction.options.length)) issues.push(`beat ${i}: mcq correct out of range`);
  }
  if (t === 'fillin' && !b.interaction.fields?.length) issues.push(`beat ${i}: fillin needs fields`);
  if (t === 'fillin' && b.interaction.fields?.some(f => f.answer === undefined)) issues.push(`beat ${i}: fillin field missing answer`);
  // Fill-in labels are HTML-escaped by the engine, so entities render literally ("&rsquo;").
  if (t === 'fillin') for (const f of b.interaction.fields || []) {
    if (typeof f.label === 'string' && /&[a-z]+;|&#\d+;/i.test(f.label)) issues.push(`beat ${i}: fillin label contains an HTML entity ("${f.label}") — labels are escaped, write the character directly`);
  }
  if (t === 'errorhunt' && (b.interaction.lines || []).filter(x => x.wrong).length !== 1) issues.push(`beat ${i}: errorhunt needs exactly one wrong:true line`);
  if (t === 'order' && !(b.interaction.items?.length >= 3)) issues.push(`beat ${i}: order needs >=3 items (authored in correct order)`);
  if (t === 'match' && !(b.interaction.pairs?.length >= 3 && b.interaction.pairs.every(p => p.length === 2))) issues.push(`beat ${i}: match needs >=3 [left,right] pairs`);
  if (t === 'reveal' && (!b.interaction.face || !b.interaction.hidden)) issues.push(`beat ${i}: reveal needs face + hidden`);
  if (t === 'slider') {
    if (typeof b.interaction.render !== 'function') issues.push(`beat ${i}: slider needs render(n)`);
    else {
      for (let n = b.interaction.min; n <= b.interaction.max; n += (b.interaction.step || 1)) {
        const out = b.interaction.render(n);
        if (!out || typeof out.main !== 'string') { issues.push(`beat ${i}: slider render(${n}) bad output`); break; }
      }
    }
    if (!(b.interaction.min < b.interaction.max) || b.interaction.value === undefined) issues.push(`beat ${i}: slider needs min<max and value`);
  }
  if (t === 'geometry') {
    const s = b.interaction;
    const fig = s.figure;
    if (!['place', 'identify', 'drag'].includes(s.mode)) issues.push(`beat ${i}: geometry needs mode place|identify|drag`);
    if (!fig || !Array.isArray(fig.points)) issues.push(`beat ${i}: geometry needs figure.points`);
    else {
      const ids = new Set(fig.points.map(p => p.id));
      const elIds = new Set([...fig.points.map(p => p.id)]);
      const refs = [];
      for (const seg of [...(fig.segments || []), ...(fig.lines || [])]) { refs.push(seg.from, seg.to); elIds.add(seg.id); }
      for (const c of fig.circles || []) { refs.push(c.center); if (c.through) refs.push(c.through); elIds.add(c.id); }
      for (const r of fig.regions || []) { refs.push(r.from, r.to); elIds.add(r.id); }
      for (const ref of refs) if (!ids.has(ref)) issues.push(`beat ${i}: geometry references unknown point "${ref}"`);
      for (const r of fig.regions || []) if (!(fig.circles || []).some(c => c.id === r.circle)) issues.push(`beat ${i}: region "${r.id}" references unknown circle "${r.circle}"`);
      if (s.mode === 'identify') {
        const targets = Array.isArray(s.target) ? s.target : [s.target];
        if (!targets.length || targets.some(x => x === undefined)) issues.push(`beat ${i}: identify mode needs target`);
        for (const target of targets) if (!elIds.has(target)) issues.push(`beat ${i}: identify target "${target}" is not an element in the figure`);
      }
      if (s.mode === 'place' && typeof s.accept !== 'function') issues.push(`beat ${i}: place mode needs accept(x, y)`);
      if (s.mode === 'drag') {
        if (!fig.points.some(p => p.draggable)) issues.push(`beat ${i}: drag mode needs at least one draggable point`);
        if (s.goal && typeof s.goal !== 'function') issues.push(`beat ${i}: geometry goal must be a function`);
      }
      if (s.measure && typeof s.measure !== 'function') issues.push(`beat ${i}: geometry measure must be a function`);
    }
  }
  if (t === 'balance') {
    const s = b.interaction;
    if (!s.states || typeof s.states !== 'object') issues.push(`beat ${i}: balance needs states`);
    else {
      if (!s.states[s.start]) issues.push(`beat ${i}: balance start "${s.start}" not in states`);
      if (!s.states[s.goal]) issues.push(`beat ${i}: balance goal "${s.goal}" not in states`);
      for (const [id, st] of Object.entries(s.states)) if (!st.eq) issues.push(`beat ${i}: balance state "${id}" missing eq`);
      if (!(s.ops?.length >= 2)) issues.push(`beat ${i}: balance needs >=2 ops`);
      for (const op of s.ops || []) {
        if (!op.label) issues.push(`beat ${i}: balance op missing label`);
        for (const [from, to] of Object.entries(op.to || {})) {
          if (!s.states[from]) issues.push(`beat ${i}: balance op "${op.label}" maps from unknown state "${from}"`);
          if (!s.states[to]) issues.push(`beat ${i}: balance op "${op.label}" maps to unknown state "${to}"`);
        }
      }
      // goal must be reachable from start
      const seen = new Set([s.start]);
      const queue = [s.start];
      while (queue.length) {
        const cur = queue.shift();
        for (const op of s.ops || []) {
          const to = op.to?.[cur];
          if (to && s.states[to] && !seen.has(to)) { seen.add(to); queue.push(to); }
        }
      }
      if (s.states[s.goal] && !seen.has(s.goal)) issues.push(`beat ${i}: balance goal unreachable from start`);
    }
  }
  const graded = ['mcq', 'fillin', 'errorhunt', 'order'].includes(t) || (t === 'geometry' && b.interaction.mode === 'identify');
  if (graded) {
    if (!b.hint) issues.push(`beat ${i}: graded beat missing hint`);
    if (!b.explain) issues.push(`beat ${i}: graded beat missing explain`);
  }
  if (b.card !== undefined) {
    if (typeof b.card !== 'string') issues.push(`beat ${i}: card must be a card id string`);
    else if (IDENTITY_CARDS && !IDENTITY_CARDS[b.card]) issues.push(`beat ${i}: unknown identity card "${b.card}" (not in identity-deck.js)`);
    else awarded.push(b.card);
  }
  if (!['learn', 'checkpoint', 'boss', undefined].includes(b.section)) issues.push(`beat ${i}: bad section "${b.section}"`);
  // Unescaped single backslash before ( usually means a broken MathJax delimiter in source.
  for (const field of ['prompt', 'body', 'hint', 'explain', 'note', 'success']) {
    if (typeof b[field] === 'string' && /(?<!\\)\\(?=[a-zA-Z]*\s*$)/.test(b[field].slice(-3)) ) issues.push(`beat ${i}: ${field} ends mid-escape`);
  }
});

const counts = {
  total: l.beats?.length ?? 0,
  learn: (l.beats || []).filter(b => !b.section || b.section === 'learn').length,
  checkpoint: (l.beats || []).filter(b => b.section === 'checkpoint').length,
  boss: (l.beats || []).filter(b => b.section === 'boss').length,
};
if (counts.boss !== 1) issues.push(`expected exactly 1 boss beat, found ${counts.boss}`);
if (counts.checkpoint < 4) issues.push(`expected >=4 checkpoint beats, found ${counts.checkpoint}`);
if (counts.total < 12 || counts.total > 20) issues.push(`beat count ${counts.total} outside 12–20`);

console.log(`${path}: ${counts.total} beats (learn ${counts.learn} / checkpoint ${counts.checkpoint} / boss ${counts.boss})`);
console.log('types:', [...types].sort().join(', '));
if (awarded.length) console.log('cards awarded:', awarded.join(', '));
{
  const dupes = awarded.filter((id, i) => awarded.indexOf(id) !== i);
  if (dupes.length) issues.push(`the same card is awarded twice in this lesson: ${[...new Set(dupes)].join(', ')}`);
}
if (issues.length) { console.log('ISSUES:\n' + issues.map(s => ' - ' + s).join('\n')); process.exit(1); }
console.log('OK');
