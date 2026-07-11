/* progress-core.js — Streaks / Daily Goals / XP for Saintly.
   Self-contained ES module. No imports. Storage key: saintly-activity-v1.
   Shape: { days: { 'YYYY-MM-DD': { xp:int, problems:int } }, longestStreak:int, goalXp:int }
   All day keys use LOCAL calendar dates. Every JSON.parse is guarded. */

const STORAGE_KEY = 'saintly-activity-v1';
const DEFAULT_GOAL = 50;
const BRAND_BLUE = '#88B0FF';

/* ---------- date helpers (LOCAL time, never UTC) ---------- */

function keyOf(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/* Key for a day `offset` days from today (offset 0 = today, -1 = yesterday). */
function keyOffset(offset) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + offset);
  return keyOf(d);
}

/* Parse a 'YYYY-MM-DD' key back into a LOCAL Date (avoids UTC shift). */
function parseKey(key) {
  const [y, m, d] = key.split('-').map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function weekdayOf(key) {
  return WEEKDAYS[parseKey(key).getDay()];
}

/* ---------- storage ---------- */

function blankState() {
  return { days: {}, longestStreak: 0, goalXp: DEFAULT_GOAL };
}

function loadState() {
  let raw;
  try {
    raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
  } catch {
    raw = null;
  }
  const state = blankState();
  if (raw && typeof raw === 'object') {
    if (raw.days && typeof raw.days === 'object') {
      for (const [key, value] of Object.entries(raw.days)) {
        if (!value || typeof value !== 'object') continue;
        const xp = Number(value.xp);
        const problems = Number(value.problems);
        state.days[key] = {
          xp: Number.isFinite(xp) ? xp : 0,
          problems: Number.isFinite(problems) ? problems : 0
        };
      }
    }
    if (Number.isFinite(Number(raw.longestStreak))) state.longestStreak = Number(raw.longestStreak);
    if (Number.isFinite(Number(raw.goalXp)) && Number(raw.goalXp) > 0) state.goalXp = Number(raw.goalXp);
  }
  return state;
}

function saveState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    /* storage full or unavailable — fail quietly */
  }
}

/* ---------- streak ---------- */

function dayHasActivity(days, key) {
  const d = days[key];
  return !!d && ((d.xp || 0) > 0 || (d.problems || 0) > 0);
}

/* Consecutive calendar days ending today (or yesterday, if today is still empty)
   that each have activity. A blank today does NOT break a streak carried from
   yesterday — only a full empty day does. */
function computeStreak(days) {
  let offset = 0;
  if (!dayHasActivity(days, keyOffset(0))) {
    if (dayHasActivity(days, keyOffset(-1))) offset = -1;
    else return 0;
  }
  let streak = 0;
  while (dayHasActivity(days, keyOffset(offset))) {
    streak++;
    offset--;
  }
  return streak;
}

/* ---------- public API ---------- */

export function getProgress() {
  const state = loadState();
  const days = state.days;
  const todayK = keyOffset(0);
  const today = days[todayK] || { xp: 0, problems: 0 };
  const streak = computeStreak(days);
  const longestStreak = Math.max(state.longestStreak || 0, streak);
  const goalXp = state.goalXp || DEFAULT_GOAL;

  let xpTotal = 0;
  for (const d of Object.values(days)) xpTotal += d.xp || 0;

  const last7 = [];
  for (let offset = -6; offset <= 0; offset++) {
    const key = keyOffset(offset);
    const xp = days[key] ? days[key].xp || 0 : 0;
    last7.push({ date: key, xp, met: xp >= goalXp, weekday: weekdayOf(key) });
  }

  const xpToday = today.xp || 0;
  return {
    streak,
    longestStreak,
    xpTotal,
    xpToday,
    problemsToday: today.problems || 0,
    goalXp,
    goalMet: xpToday >= goalXp,
    todayKey: todayK,
    last7
  };
}

export function recordActivity({ xp = 0, problems = 0 } = {}) {
  const state = loadState();
  const todayK = keyOffset(0);
  const entry = state.days[todayK] || { xp: 0, problems: 0 };
  entry.xp = (entry.xp || 0) + (Number(xp) || 0);
  entry.problems = (entry.problems || 0) + (Number(problems) || 0);
  state.days[todayK] = entry;

  const streak = computeStreak(state.days);
  state.longestStreak = Math.max(state.longestStreak || 0, streak);
  saveState(state);
  return getProgress();
}

export function setDailyGoal(xp) {
  const state = loadState();
  const goal = Math.round(Number(xp));
  if (Number.isFinite(goal) && goal > 0) {
    state.goalXp = goal;
    saveState(state);
  }
  return getProgress();
}

/* ---------- rendering ---------- */

/* Compact topbar widget: 🔥 streak + today's XP toward goal. */
export function renderStreakBadge(el) {
  if (!el) return;
  const p = getProgress();
  el.innerHTML = '';
  el.style.display = 'inline-flex';
  el.style.alignItems = 'center';
  el.style.gap = '10px';
  el.style.padding = '4px 12px';
  el.style.borderRadius = '999px';
  el.style.border = '2px solid var(--border-color)';
  el.style.background = 'var(--background-variant)';
  el.style.fontFamily = '"National Park", sans-serif';
  el.style.fontSize = '14px';
  el.style.lineHeight = '1';
  el.style.whiteSpace = 'nowrap';

  const flame = document.createElement('span');
  flame.textContent = '🔥';
  flame.style.fontSize = '15px';

  const streak = document.createElement('span');
  streak.style.fontWeight = '700';
  streak.style.color = 'var(--text-color)';
  streak.textContent = `${p.streak}`;

  const streakLabel = document.createElement('span');
  streakLabel.style.color = 'var(--text-variant)';
  streakLabel.textContent = p.streak === 1 ? 'day' : 'days';

  const dot = document.createElement('span');
  dot.style.color = 'var(--text-variant)';
  dot.textContent = '·';

  const xp = document.createElement('span');
  xp.style.fontWeight = '700';
  xp.style.color = p.goalMet ? BRAND_BLUE : 'var(--text-color)';
  xp.textContent = `${p.xpToday}/${p.goalXp} XP`;

  el.append(flame, streak, streakLabel, dot, xp);
}

/* Full dashboard card: big streak, SVG goal ring, 7-day strip, totals, goal control. */
export function renderStreakCard(el) {
  if (!el) return;
  const p = getProgress();
  el.innerHTML = '';

  // Card chrome (matches .howworkcard).
  el.style.backgroundColor = 'var(--background-variant)';
  el.style.border = '2px solid var(--border-color)';
  el.style.borderRadius = '10px';
  el.style.padding = '20px';
  el.style.fontFamily = '"National Park", sans-serif';
  el.style.color = 'var(--text-color)';
  el.style.boxSizing = 'border-box';

  const title = document.createElement('h3');
  title.className = 'amc10subtitle';
  title.textContent = 'Your Daily Streak';
  title.style.marginTop = '0';
  el.append(title);

  // Top row: big streak + progress ring.
  const top = document.createElement('div');
  top.style.display = 'flex';
  top.style.flexWrap = 'wrap';
  top.style.alignItems = 'center';
  top.style.gap = '28px';
  top.style.justifyContent = 'space-between';

  // Big current streak.
  const streakBlock = document.createElement('div');
  streakBlock.style.display = 'flex';
  streakBlock.style.alignItems = 'baseline';
  streakBlock.style.gap = '10px';

  const flame = document.createElement('span');
  flame.textContent = '🔥';
  flame.style.fontSize = '40px';

  const bigNum = document.createElement('span');
  bigNum.textContent = `${p.streak}`;
  bigNum.style.fontFamily = '"Instrument Serif", serif';
  bigNum.style.fontSize = '64px';
  bigNum.style.lineHeight = '1';
  bigNum.style.color = BRAND_BLUE;

  const streakLabel = document.createElement('span');
  streakLabel.textContent = p.streak === 1 ? 'day streak' : 'day streak';
  streakLabel.style.fontSize = '18px';
  streakLabel.style.color = 'var(--text-variant)';

  streakBlock.append(flame, bigNum, streakLabel);

  // SVG goal ring.
  const ringWrap = document.createElement('div');
  ringWrap.style.position = 'relative';
  ringWrap.style.width = '120px';
  ringWrap.style.height = '120px';
  ringWrap.style.flex = '0 0 auto';

  const pct = p.goalXp > 0 ? Math.max(0, Math.min(1, p.xpToday / p.goalXp)) : 0;
  const R = 50;
  const C = 2 * Math.PI * R;
  const dash = C * pct;
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(svgNS, 'svg');
  svg.setAttribute('viewBox', '0 0 120 120');
  svg.setAttribute('width', '120');
  svg.setAttribute('height', '120');

  const trackC = document.createElementNS(svgNS, 'circle');
  trackC.setAttribute('cx', '60');
  trackC.setAttribute('cy', '60');
  trackC.setAttribute('r', `${R}`);
  trackC.setAttribute('fill', 'none');
  trackC.setAttribute('stroke', 'var(--border-color)');
  trackC.setAttribute('stroke-width', '12');

  const progC = document.createElementNS(svgNS, 'circle');
  progC.setAttribute('cx', '60');
  progC.setAttribute('cy', '60');
  progC.setAttribute('r', `${R}`);
  progC.setAttribute('fill', 'none');
  progC.setAttribute('stroke', p.goalMet ? BRAND_BLUE : '#c7deff');
  progC.setAttribute('stroke-width', '12');
  progC.setAttribute('stroke-linecap', 'round');
  progC.setAttribute('stroke-dasharray', `${dash} ${C}`);
  progC.setAttribute('transform', 'rotate(-90 60 60)');

  svg.append(trackC, progC);

  const ringLabel = document.createElement('div');
  ringLabel.style.position = 'absolute';
  ringLabel.style.inset = '0';
  ringLabel.style.display = 'flex';
  ringLabel.style.flexDirection = 'column';
  ringLabel.style.alignItems = 'center';
  ringLabel.style.justifyContent = 'center';
  ringLabel.style.textAlign = 'center';

  const ringXp = document.createElement('div');
  ringXp.style.fontWeight = '700';
  ringXp.style.fontSize = '18px';
  ringXp.textContent = `${p.xpToday}/${p.goalXp}`;
  const ringSub = document.createElement('div');
  ringSub.style.fontSize = '11px';
  ringSub.style.color = 'var(--text-variant)';
  ringSub.textContent = p.goalMet ? 'goal met ✓' : 'XP today';
  ringLabel.append(ringXp, ringSub);

  ringWrap.append(svg, ringLabel);
  top.append(streakBlock, ringWrap);
  el.append(top);

  // 7-day activity strip.
  const strip = document.createElement('div');
  strip.style.display = 'flex';
  strip.style.gap = '8px';
  strip.style.marginTop = '22px';

  for (const day of p.last7) {
    const col = document.createElement('div');
    col.style.flex = '1';
    col.style.display = 'flex';
    col.style.flexDirection = 'column';
    col.style.alignItems = 'center';
    col.style.gap = '6px';

    const cell = document.createElement('div');
    cell.style.width = '100%';
    cell.style.height = '34px';
    cell.style.borderRadius = '7px';
    const active = day.xp > 0;
    if (day.met) cell.style.background = BRAND_BLUE;
    else if (active) cell.style.background = '#c7deff';
    else cell.style.background = 'var(--border-color)';
    cell.title = `${day.date}: ${day.xp} XP`;

    const wd = document.createElement('div');
    wd.style.fontSize = '11px';
    wd.style.color = 'var(--text-variant)';
    wd.textContent = day.weekday.charAt(0);

    col.append(cell, wd);
    strip.append(col);
  }
  el.append(strip);

  // Totals row.
  const totals = document.createElement('div');
  totals.style.display = 'flex';
  totals.style.gap = '28px';
  totals.style.marginTop = '20px';
  totals.style.flexWrap = 'wrap';

  const makeStat = (value, label) => {
    const wrap = document.createElement('div');
    const v = document.createElement('div');
    v.style.fontWeight = '700';
    v.style.fontSize = '22px';
    v.style.color = 'var(--text-color)';
    v.textContent = value;
    const l = document.createElement('div');
    l.style.fontSize = '12px';
    l.style.color = 'var(--text-variant)';
    l.textContent = label;
    wrap.append(v, l);
    return wrap;
  };
  totals.append(
    makeStat(`${p.longestStreak}`, p.longestStreak === 1 ? 'longest streak (day)' : 'longest streak (days)'),
    makeStat(`${p.xpTotal}`, 'total XP')
  );
  el.append(totals);

  // Goal control.
  const control = document.createElement('div');
  control.style.display = 'flex';
  control.style.alignItems = 'center';
  control.style.gap = '8px';
  control.style.marginTop = '20px';
  control.style.flexWrap = 'wrap';

  const clabel = document.createElement('label');
  clabel.textContent = 'Daily goal';
  clabel.style.fontSize = '13px';
  clabel.style.color = 'var(--text-variant)';

  const input = document.createElement('input');
  input.type = 'number';
  input.min = '1';
  input.value = `${p.goalXp}`;
  input.style.width = '80px';
  input.style.padding = '6px 8px';
  input.style.borderRadius = '8px';
  input.style.border = '2px solid var(--border-color)';
  input.style.background = 'var(--background-color)';
  input.style.color = 'var(--text-color)';
  input.style.fontFamily = '"National Park", sans-serif';

  const suffix = document.createElement('span');
  suffix.textContent = 'XP';
  suffix.style.fontSize = '13px';
  suffix.style.color = 'var(--text-variant)';

  const btn = document.createElement('button');
  btn.type = 'button';
  btn.textContent = 'Set goal';
  btn.style.padding = '6px 14px';
  btn.style.borderRadius = '8px';
  btn.style.border = '2px solid ' + BRAND_BLUE;
  btn.style.background = BRAND_BLUE;
  btn.style.color = '#fff';
  btn.style.cursor = 'pointer';
  btn.style.fontFamily = '"National Park", sans-serif';
  btn.addEventListener('click', () => {
    setDailyGoal(input.value);
    renderStreakCard(el);
  });

  control.append(clabel, input, suffix, btn);
  el.append(control);
}
