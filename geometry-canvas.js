/* Saintly geometry canvas — the shared interactive-figure component for every geometry
   chapter (9: circles; 10+: angles, triangles, polygons, coordinates).

   A lesson beat declares `interaction: { type: 'geometry', mode, figure, ... }` and the
   engine hands the spec here. Three modes:

     'place'    — the student clicks the canvas to place points; each is tested against
                  `accept(x, y)`. Completes at `need` accepted points. (Wrong placements
                  are shown and dismissed, never punished.)
     'identify' — the student taps a labelled element (point / segment / circle / region).
                  Graded: `target` is an id or array of ids.
     'drag'     — the student drags points; `measure(state)` renders a live readout panel.
                  Completes on `goal(state)` if given, else after `mustExplore` moves.

   The figure is authored in MATH coordinates (y up, origin wherever you like) and mapped
   to the SVG viewBox by `view: {x, y, w, h}`. Everything is pointer-events driven so it
   works identically under touch; hit targets are >= 22px.

   Elements:
     points:   [{ id, x, y, label?, draggable?, constrain?(x,y,state) -> [x,y], hidden? }]
     segments: [{ id, from, to, label?, kind?: 'radius'|'chord'|'diameter'|'tangent'|'secant'|'plain', dashed? }]
     circles:  [{ id, center, r? , through?, label? }]         // r in math units, or a point id
     regions:  [{ id, kind: 'sector'|'segment', circle, from, to, label? }]   // from/to are point ids on the circle
     lines:    [{ id, from, to, label?, kind? }]               // infinite-ish line through two points
*/

const SVG_NS = 'http://www.w3.org/2000/svg';
const el = (name, attrs = {}) => {
  const node = document.createElementNS(SVG_NS, name);
  for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, String(v));
  return node;
};
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

export function createGeometry(host, spec, onChange = () => {}) {
  const view = spec.figure.view || { x: -10, y: -10, w: 20, h: 20 };
  const W = 520, H = Math.round(520 * (view.h / view.w));
  const toPx = (x, y) => [((x - view.x) / view.w) * W, H - ((y - view.y) / view.h) * H];
  const toMath = (px, py) => [view.x + (px / W) * view.w, view.y + ((H - py) / H) * view.h];

  /* live state: point positions (math coords), plus mode bookkeeping */
  const state = {
    points: Object.fromEntries((spec.figure.points || []).map(p => [p.id, { x: p.x, y: p.y }])),
    placed: [],        // 'place' mode: accepted points
    rejected: null,    // last rejected placement, for the transient ghost
    picked: null,      // 'identify' mode: id of the tapped element
    moves: 0,          // 'drag' mode: how many times a point was moved
    marks: [], auxiliary: [], tool: null, toolPicks: [],
  };
  const pointOf = id => state.points[id];

  host.innerHTML = `<div class="il-geo">
    ${spec.tools?.length ? `<div class="il-geo-tools" role="toolbar">${spec.tools.map(tool => `<button type="button" class="il-geo-tool" data-tool="${tool}">${({ mark:'Mark equal', protractor:'Protractor', auxiliary:'Auxiliary line' })[tool] || tool}</button>`).join('')}</div>` : ''}
    <svg class="il-geo-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${(spec.figure.alt || 'Interactive geometry figure').replace(/"/g, '')}"></svg>
    <div class="il-geo-panel" id="il-geo-panel" hidden></div>
    <p class="il-geo-hint">${spec.instruction || ''}</p>
  </div>`;
  const svg = host.querySelector('.il-geo-svg');
  const panel = host.querySelector('.il-geo-panel');

  /* ---------- resolve derived geometry ---------- */
  function radiusOf(circle) {
    if (typeof circle.r === 'number') return circle.r;
    if (typeof circle.r === 'function') return circle.r(state);
    if (circle.through) return dist(pointOf(circle.center), pointOf(circle.through));
    return 1;
  }

  /* ---------- render ---------- */
  function draw() {
    svg.textContent = '';
    const fig = spec.figure;

    // regions first (they sit under everything)
    for (const region of fig.regions || []) {
      const circle = (fig.circles || []).find(c => c.id === region.circle);
      if (!circle) continue;
      const c = pointOf(circle.center), r = radiusOf(circle);
      const a = pointOf(region.from), b = pointOf(region.to);
      const [cx, cy] = toPx(c.x, c.y);
      const [ax, ay] = toPx(a.x, a.y);
      const [bx, by] = toPx(b.x, b.y);
      const rx = (r / view.w) * W, ry = (r / view.h) * H;
      const angA = Math.atan2(a.y - c.y, a.x - c.x), angB = Math.atan2(b.y - c.y, b.x - c.x);
      let sweep = angB - angA; while (sweep < 0) sweep += 2 * Math.PI;
      const large = sweep > Math.PI ? 1 : 0;
      const arc = `A ${rx} ${ry} 0 ${large} 0 ${bx} ${by}`;   // SVG y is flipped -> sweep 0
      const d = region.kind === 'segment'
        ? `M ${ax} ${ay} ${arc} Z`
        : `M ${cx} ${cy} L ${ax} ${ay} ${arc} Z`;
      const path = el('path', { d, class: `il-geo-region is-${region.kind}`, 'data-el': region.id, 'data-kind': 'region' });
      svg.append(path);
    }

    // circles
    for (const circle of fig.circles || []) {
      const c = pointOf(circle.center), r = radiusOf(circle);
      const [cx, cy] = toPx(c.x, c.y);
      svg.append(el('ellipse', {
        cx, cy, rx: (r / view.w) * W, ry: (r / view.h) * H,
        class: `il-geo-circle${circle.cls ? ' ' + circle.cls : ''}`, 'data-el': circle.id, 'data-kind': 'circle',
      }));
      if (circle.label) {
        const [lx, ly] = toPx(c.x + r * 0.7, c.y + r * 0.75);
        svg.append(Object.assign(el('text', { x: lx, y: ly, class: 'il-geo-label' }), { textContent: circle.label }));
      }
    }

    // lines: drawn past both defining points, but kept INSIDE the view — a line that runs
    // off-canvas has its clickable centre off-canvas too, which breaks tap-to-identify.
    for (const line of fig.lines || []) {
      const a = pointOf(line.from), b = pointOf(line.to);
      const dx = b.x - a.x, dy = b.y - a.y;
      const len = Math.hypot(dx, dy) || 1;
      const ext = line.extend ?? Math.max(view.w, view.h) * 0.1;
      const k = ext / len;
      const [x1, y1] = toPx(a.x - dx * k, a.y - dy * k);
      const [x2, y2] = toPx(b.x + dx * k, b.y + dy * k);
      svg.append(el('line', { x1, y1, x2, y2, class: `il-geo-seg is-${line.kind || 'plain'}`, 'data-el': line.id, 'data-kind': 'line' }));
      if (line.label) {
        // Sit the label just inside the far end, so it never gets clipped by the viewBox.
        const [lx, ly] = toPx(b.x + dx * k * 0.55, b.y + dy * k * 0.55);
        svg.append(Object.assign(el('text', { x: lx + 9, y: ly - 2, class: 'il-geo-label' }), { textContent: line.label }));
      }
    }

    // segments
    for (const seg of fig.segments || []) {
      const a = pointOf(seg.from), b = pointOf(seg.to);
      const [x1, y1] = toPx(a.x, a.y);
      const [x2, y2] = toPx(b.x, b.y);
      svg.append(el('line', {
        x1, y1, x2, y2,
        class: `il-geo-seg is-${seg.kind || 'plain'}${seg.dashed ? ' is-dashed' : ''}`,
        'data-el': seg.id, 'data-kind': 'segment',
      }));
      if (seg.label) {
        const [lx, ly] = toPx((a.x + b.x) / 2, (a.y + b.y) / 2);
        svg.append(Object.assign(el('text', { x: lx, y: ly - 8, class: 'il-geo-label' }), { textContent: seg.label }));
      }
    }

    // placed points ('place' mode)
    for (const aux of state.auxiliary) {
      const a = pointOf(aux.from), b = pointOf(aux.to), [x1,y1] = toPx(a.x,a.y), [x2,y2] = toPx(b.x,b.y);
      svg.append(el('line', { x1, y1, x2, y2, class: 'il-geo-seg is-dashed is-auxiliary' }));
    }
    state.marks.forEach((pair, i) => pair.forEach(id => {
      const p = pointOf(id); if (!p) return; const [cx,cy] = toPx(p.x,p.y);
      svg.append(el('circle', { cx, cy, r: 10 + i * 4, fill: 'none', class: 'il-geo-student-mark' }));
    }));

    // placed points ('place' mode)
    for (const p of state.placed) {
      const [px, py] = toPx(p.x, p.y);
      svg.append(el('circle', { cx: px, cy: py, r: 5, class: 'il-geo-placed' }));
    }
    if (state.rejected) {
      const [px, py] = toPx(state.rejected.x, state.rejected.y);
      svg.append(el('circle', { cx: px, cy: py, r: 5, class: 'il-geo-rejected' }));
    }

    // points last (on top, big hit targets)
    for (const p of fig.points || []) {
      if (p.hidden) continue;
      const pos = pointOf(p.id);
      const [px, py] = toPx(pos.x, pos.y);
      const g = el('g', { class: `il-geo-pt${p.draggable ? ' is-draggable' : ''}`, 'data-el': p.id, 'data-kind': 'point' });
      g.append(el('circle', { cx: px, cy: py, r: 14, class: 'il-geo-hit' }));   // >=22px touch target
      g.append(el('circle', { cx: px, cy: py, r: p.draggable ? 6 : 4.5, class: 'il-geo-dot' }));
      if (p.label) g.append(Object.assign(el('text', { x: px + 10, y: py - 9, class: 'il-geo-label' }), { textContent: p.label }));
      svg.append(g);
    }

    if (state.picked) {
      const node = svg.querySelector(`[data-el="${state.picked}"]`);
      if (node) node.classList.add('is-picked');
    }

    if (spec.measure) {
      panel.hidden = false;
      panel.innerHTML = spec.measure(readout());
      if (window.MathJax?.typesetPromise) window.MathJax.typesetPromise([panel]).catch(() => {});
    }
  }

  /* what lesson code sees: point positions plus a few conveniences */
  function readout() {
    const out = { points: {}, dist: (a, b) => dist(pointOf(a), pointOf(b)) };
    for (const [id, p] of Object.entries(state.points)) out.points[id] = { ...p };
    out.radius = id => {
      const circle = (spec.figure.circles || []).find(c => c.id === id);
      return circle ? radiusOf(circle) : 0;
    };
    out.moves = state.moves;
    out.marks = state.marks.map(pair => [...pair]);
    out.auxiliary = state.auxiliary.map(line => ({ ...line }));
    out.placed = state.placed.length;
    return out;
  }

  /* ---------- interaction ---------- */
  const localPoint = event => {
    const rect = svg.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * W;
    const py = ((event.clientY - rect.top) / rect.height) * H;
    return toMath(px, py);
  };

  if (spec.mode === 'place') {
    svg.addEventListener('pointerdown', event => {
      const [x, y] = localPoint(event);
      if (spec.accept(x, y)) {
        state.placed.push({ x, y });
        state.rejected = null;
      } else {
        // snap the near-misses onto the true locus so the student sees the correction
        state.rejected = { x, y };
        setTimeout(() => { state.rejected = null; draw(); }, 700);
      }
      draw();
      onChange();
    });
  }

  if (spec.mode === 'identify') {
    svg.addEventListener('pointerdown', event => {
      const target = event.target.closest('[data-el]');
      if (!target) return;
      state.picked = target.dataset.el;
      draw();
      onChange();
    });
  }

  host.querySelectorAll('.il-geo-tool').forEach(button => button.addEventListener('click', () => {
    state.tool = state.tool === button.dataset.tool ? null : button.dataset.tool;
    state.toolPicks = [];
    host.querySelectorAll('.il-geo-tool').forEach(b => b.classList.toggle('is-active', b.dataset.tool === state.tool));
    if (state.tool === 'protractor') { panel.hidden = false; panel.innerHTML = '<b>Protractor on.</b> Drag a point and read the live measure.'; }
  }));
  svg.addEventListener('pointerdown', event => {
    if (!state.tool || state.tool === 'protractor') return;
    const target = event.target.closest('[data-kind="point"]'); if (!target) return;
    event.stopImmediatePropagation(); const id = target.dataset.el;
    if (!state.toolPicks.includes(id)) state.toolPicks.push(id);
    if (state.toolPicks.length === 2) {
      if (state.tool === 'mark') state.marks.push([...state.toolPicks]);
      if (state.tool === 'auxiliary') state.auxiliary.push({ from: state.toolPicks[0], to: state.toolPicks[1] });
      state.toolPicks = []; state.moves += 1; draw(); onChange();
    }
  }, true);

  if (spec.mode === 'drag') {
    let dragging = null;
    const start = event => {
      const target = event.target.closest('.il-geo-pt.is-draggable');
      if (!target) return;
      dragging = target.dataset.el;
      svg.setPointerCapture(event.pointerId);
    };
    const move = event => {
      if (!dragging) return;
      let [x, y] = localPoint(event);
      const decl = (spec.figure.points || []).find(p => p.id === dragging);
      if (decl?.constrain) [x, y] = decl.constrain(x, y, readout());
      state.points[dragging] = { x, y };
      state.moves += 1;
      draw();
      onChange();
    };
    const end = event => { if (dragging) { try { svg.releasePointerCapture(event.pointerId); } catch {} } dragging = null; };
    svg.addEventListener('pointerdown', start);
    svg.addEventListener('pointermove', move);
    svg.addEventListener('pointerup', end);
    svg.addEventListener('pointercancel', end);
  }

  draw();

  return {
    isReady() {
      if (spec.mode === 'place') return state.placed.length >= (spec.need || 8);
      if (spec.mode === 'identify') return state.picked !== null;
      if (spec.mode === 'drag') {
        if (spec.goal) return !!spec.goal(readout());
        return state.moves >= (spec.mustExplore || 6);
      }
      return true;
    },
    grade() {
      if (spec.mode !== 'identify') return true;      // place/drag complete by doing
      const targets = Array.isArray(spec.target) ? spec.target : [spec.target];
      const right = targets.includes(state.picked);
      const node = svg.querySelector(`[data-el="${state.picked}"]`);
      if (node) node.classList.add(right ? 'is-correct' : 'is-wrong');
      if (!right) {
        /* Clear the wrong pick after a beat — but only if the student hasn't already
           picked again. A stale callback must never wipe the NEXT (correct) highlight. */
        const stale = state.picked;
        setTimeout(() => {
          if (state.picked !== stale) return;
          state.picked = null;
          draw();
        }, 900);
      }
      return right;
    },
    revealAnswer() {
      if (spec.mode !== 'identify') return;
      const targets = Array.isArray(spec.target) ? spec.target : [spec.target];
      for (const id of targets) svg.querySelector(`[data-el="${id}"]`)?.classList.add('is-correct');
    },
  };
}
