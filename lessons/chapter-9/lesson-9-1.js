/* Lesson 9 — An Introduction to Circles.
   The chapter's real deliverable is the geometry canvas (geometry-canvas.js); this
   lesson is largely a workout for it. The non-negotiable beat is tangent distances,
   the book's first geometry-algebra bridge. */

const V = { x: -11, y: -9.5, w: 22, h: 19 };   // a comfortable default view (headroom for the tangent)

/* The anatomy figure: one rich circle with every named part on it.
   Deliberately laid out so NO two tappable elements overlap — a radius drawn along the
   diameter is indistinguishable to a finger, and the whole tap-to-identify drill dies. */
const ANATOMY = {
  view: V,
  alt: 'Circle O with radius OR, chord CD, diameter AB, a tangent line and a secant line',
  points: [
    { id: 'O', x: 0, y: 0, label: 'O' },
    { id: 'A', x: -6, y: 0, label: 'A' },
    { id: 'B', x: 6, y: 0, label: 'B' },
    { id: 'R', x: 0, y: 6, label: 'R' },
    { id: 'C', x: 5.196, y: -3, label: 'C' },
    { id: 'D', x: -5.196, y: -3, label: 'D' },
    /* The tangent touches at T = (−3, 5.196); T1 and T2 straddle it symmetrically along the
       perpendicular to OT, so the whole line — and its clickable midpoint — stays on canvas. */
    { id: 'T', x: -3, y: 5.196, label: 'T' },
    { id: 'T1', x: -6.464, y: 3.196, hidden: true },
    { id: 'T2', x: 0.464, y: 7.196, hidden: true },
    { id: 'S1', x: 4.243, y: 4.243, hidden: true },
    { id: 'S2', x: 5.638, y: -2.052, hidden: true },
  ],
  circles: [{ id: 'circO', center: 'O', r: 6, label: 'circle O' }],
  segments: [
    { id: 'radiusOR', from: 'O', to: 'R', kind: 'radius', label: 'r' },
    { id: 'chordCD', from: 'C', to: 'D', kind: 'chord' },
    { id: 'diameterAB', from: 'A', to: 'B', kind: 'diameter' },
  ],
  lines: [
    { id: 'tangent', from: 'T1', to: 'T2', kind: 'tangent', label: 'ℓ' },
    { id: 'secant', from: 'S1', to: 'S2', kind: 'secant', label: 'm' },
  ],
};

/* Two circles for the tangency beat: B is draggable, A is fixed. */
const TANGENT_FIG = {
  view: { x: -11, y: -7, w: 22, h: 14 },
  alt: 'Two circles; drag the centre of the second until they touch',
  points: [
    { id: 'A', x: -4, y: 0, label: 'A' },
    { id: 'B', x: 6.5, y: 2.5, label: 'B', draggable: true },
  ],
  circles: [
    { id: 'cA', center: 'A', r: 3 },
    { id: 'cB', center: 'B', r: 2 },
  ],
  segments: [{ id: 'AB', from: 'A', to: 'B', dashed: true }],
};

export default {
  id: 'lesson-9-1',
  title: 'An Introduction to Circles',
  kicker: 'Circles',
  topicIndex: 8,
  lessonIndex: 0,
  next: 'study-path.html',
  beats: [

    /* ---------------- learn ---------------- */
    {
      prompt: 'Place points that are exactly 5 units from the centre \\( O \\).',
      body: 'Tap anywhere on the canvas. Points at the right distance stick; the others flash and vanish. Place eight and watch what you&rsquo;re building.',
      interaction: {
        type: 'geometry',
        mode: 'place',
        need: 8,
        instruction: 'Tap points 5 units from O. (Green = accepted.)',
        accept(x, y) { return Math.abs(Math.hypot(x, y) - 5) < 0.55; },
        figure: {
          view: V,
          alt: 'A centre point O; place points five units away from it',
          points: [{ id: 'O', x: 0, y: 0, label: 'O' }],
          circles: [{ id: 'ghost', center: 'O', r: 5, cls: 'is-ghost' }],
        },
      },
      success: 'Your points ARE the circle. The dashed guide was only ever the set you were building.',
      note: '<b>A circle is the set of ALL points at a fixed distance (the radius) from a fixed point (the centre).</b> Not &ldquo;a round shape&rdquo; — a <em>membership rule</em>. Note also what a circle is NOT: the region inside it. That&rsquo;s a <b>disk</b>; the circle is only the boundary curve.',
      coach: ['Distance 5 from O — try (5, 0), then (0, 5), then (3, 4).'],
    },
    {
      prompt: 'Anatomy. Tap the <b>chord</b> — a segment whose BOTH endpoints lie on the circle.',
      body: 'One figure, every named part on it. Look before you tap.',
      interaction: {
        type: 'geometry',
        mode: 'identify',
        target: ['chordCD', 'diameterAB'],
        instruction: 'Tap a chord.',
        figure: ANATOMY,
      },
      hint: 'A chord has both endpoints ON the circle. Is \\( \\overline{OR} \\) a chord? Only one of its endpoints is on the circle — the other is the centre.',
      explain: 'Both \\( \\overline{CD} \\) and \\( \\overline{AB} \\) are chords. \\( \\overline{OR} \\) is a <em>radius</em>, not a chord — it starts at the centre. And \\( \\overline{AB} \\) is a chord that also happens to pass through the centre, which makes it a <b>diameter</b>: the longest chord there is.',
      note: 'Filed: <b>every diameter is a chord</b> (the longest one), and <b>no radius is a chord</b>. \\( d = 2r \\). A line touching the circle exactly once is a <b>tangent</b> \\( (\\ell) \\); one cutting it twice is a <b>secant</b> \\( (m) \\).',
      coach: ['Check the endpoints of each segment. Are BOTH on the circle?'],
    },
    {
      section: 'learn',
      prompt: 'Now tap the <b>tangent</b> — the line touching the circle at exactly one point.',
      interaction: {
        type: 'geometry',
        mode: 'identify',
        target: 'tangent',
        instruction: 'Tap the tangent line.',
        figure: ANATOMY,
      },
      hint: 'One line grazes the circle; the other slices through it, crossing at two points.',
      explain: 'Line \\( \\ell \\) touches at exactly one point — a <b>tangent</b>. Line \\( m \\) crosses at two — a <b>secant</b>. (Latin: <em>tangere</em>, to touch; <em>secare</em>, to cut. The names are honest.)',
      coach: ['Count how many times each line meets the circle.'],
    },
    {
      prompt: 'Two circles sharing a centre are called <b>concentric</b>. Which piece of the figure is a <em>sector</em>?',
      body: 'A sector is bounded by two radii and an arc — the pizza slice. A circular <em>segment</em> is bounded by a chord and an arc — the bite.',
      interaction: {
        type: 'geometry',
        mode: 'identify',
        target: 'sector',
        instruction: 'Tap the sector (two radii and an arc).',
        figure: {
          view: V,
          alt: 'A circle showing a shaded sector and a shaded circular segment',
          points: [
            { id: 'O', x: 0, y: 0, label: 'O' },
            { id: 'P', x: 6, y: 0, label: 'P' },
            { id: 'Q', x: 1.854, y: 5.706, label: 'Q' },
            { id: 'M', x: -3, y: 5.196, label: 'M' },
            { id: 'N', x: -6, y: 0, label: 'N' },
          ],
          circles: [{ id: 'c', center: 'O', r: 6 }],
          regions: [
            { id: 'sector', kind: 'sector', circle: 'c', from: 'P', to: 'Q' },
            { id: 'segment', kind: 'segment', circle: 'c', from: 'M', to: 'N' },
          ],
          segments: [
            { id: 'r1', from: 'O', to: 'P', kind: 'radius' },
            { id: 'r2', from: 'O', to: 'Q', kind: 'radius' },
            { id: 'chordMN', from: 'M', to: 'N', kind: 'chord' },
          ],
        },
      },
      hint: 'The sector reaches the CENTRE (two radii). The segment is cut off by a chord and never touches the centre.',
      explain: 'The blue wedge \\( OPQ \\) is the <b>sector</b> — bounded by the two radii \\( \\overline{OP}, \\overline{OQ} \\) and arc \\( PQ \\). The peach region is a <b>circular segment</b> — bounded by chord \\( \\overline{MN} \\) and arc \\( MN \\), with no radii and no centre in sight.',
      note: 'Sector vs segment is the single most-swapped pair in circle vocabulary. The tell: <b>a sector has a corner at the centre; a segment has a flat chord.</b> Slice vs bite.',
      coach: ['Which shaded piece has a vertex at O?'],
    },
    {
      prompt: 'Arcs come in twos. Arc \\( AB \\) — but which one?',
      interaction: {
        type: 'mcq',
        options: [
          'Two letters means the MINOR arc (the shorter one); three letters like \\( ACB \\) name the major arc unambiguously',
          'Two letters always means the major arc',
          'It is genuinely ambiguous and cannot be fixed',
          'Arcs are named by their length in degrees only',
        ],
        correct: 0,
      },
      hint: 'Any two points on a circle cut it into two arcs. Some convention must decide which \\( AB \\) means.',
      explain: 'Two points split the circle into a shorter (<b>minor</b>) and longer (<b>major</b>) arc. The convention: <b>\\( \\overset{\\frown}{AB} \\) means the minor arc</b>; to name the major one, insert a third point that lies on it — \\( \\overset{\\frown}{ACB} \\). When a diagram matters, three letters cost nothing and prevent everything.',
      coach: ['How many arcs do two points on a circle create?'],
    },
    {
      prompt: 'Roll a wheel one full turn. How many diameters long is the track it leaves?',
      body: 'Drag the radius and watch the ratio, not the numbers.',
      interaction: {
        type: 'slider',
        min: 1, max: 8, step: 0.5, value: 1, label: 'radius', mustExplore: 5,
        render(r) {
          const c = 2 * Math.PI * r;
          const d = 2 * r;
          const bar = `<svg viewBox="0 0 320 44" width="320" style="display:block;margin:8px auto 0">
            <line x1="8" y1="30" x2="312" y2="30" stroke="#C5C1CF" stroke-width="1.5"/>
            ${[0, 1, 2, 3].map(i => {
              const w = (304 / 3.15) * Math.min(1, Math.max(0, 3.14159 - i));
              return w > 0 ? `<rect x="${8 + (304 / 3.15) * i}" y="18" width="${w}" height="10" fill="${i % 2 ? 'rgba(136,176,255,.35)' : 'rgba(136,176,255,.6)'}" stroke="#88B0FF" stroke-width=".6"/>` : '';
            }).join('')}
            <text x="160" y="12" fill="#766F82" font-size="10" text-anchor="middle">one full roll = 3.14159… diameters, for EVERY radius</text>
          </svg>`;
          return {
            main: `\\( r = ${r} \\;\\Rightarrow\\; C = ${c.toFixed(3)}, \\quad d = ${d} \\)` + bar,
            sub: `C ÷ d = ${(c / d).toFixed(6)} — unchanged. Every circle in the universe has the same ratio of circumference to diameter, and we call it π.`,
          };
        },
      },
      success: 'The ratio never budges. That invariance IS π.',
      note: '<b>\\( C = \\pi d = 2\\pi r \\)</b> and <b>\\( A = \\pi r^2 \\)</b>. Don&rsquo;t hybridize them — \\( 2\\pi r^2 \\) and \\( \\pi d^2 \\) are both wrong, and both common. And π is <em>irrational</em> — in fact transcendental (Chapter 8): the tower you just built has a room for it. (Try it in the real world: tape around a jar lid, divide by the width. You&rsquo;ll get 3.1-something.)',
      coach: ['Ignore C and d individually. Watch only their ratio.'],
    },
    {
      prompt: 'Backwards: a circle has area 16. Find its circumference.',
      body: 'The classic error is plugging the AREA in where the radius goes. Find \\( r \\) first.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'r =', answer: '4/sqrt(pi)', accept: ['4/√π', '2.2568', '2.257'], width: 130 },
          { label: 'C =', answer: '8sqrt(pi)', accept: ['8√π', '14.18', '14.1796'], width: 130 },
        ],
      },
      hint: '\\( \\pi r^2 = 16 \\Rightarrow r^2 = \\frac{16}{\\pi} \\Rightarrow r = \\frac{4}{\\sqrt\\pi} \\). Then \\( C = 2\\pi r \\) — and simplify the \\( \\pi \\)s.',
      explain: '\\( r = \\frac{4}{\\sqrt\\pi} \\), so \\( C = 2\\pi \\cdot \\frac{4}{\\sqrt\\pi} = \\frac{8\\pi}{\\sqrt\\pi} = 8\\sqrt\\pi \\approx 14.18 \\). That last simplification is pure Chapter 1: \\( \\frac{\\pi}{\\sqrt\\pi} = \\sqrt\\pi \\). Radical skills doing geometry work — the crossover starts here and never stops.',
      note: 'Ritual for backwards problems: <b>whatever you&rsquo;re given, extract \\( r \\) first.</b> Every circle formula is a function of \\( r \\); once you have it, everything else is one substitution away.',
      coach: ['Solve the area formula for \\( r \\).', 'Then substitute into \\( C = 2\\pi r \\) and simplify the \\( \\pi \\)s.'],
    },
    {
      prompt: 'You have 12 feet of fence. What shape encloses the most area?',
      body: 'Perimeter is fixed at 12. Compare the honest candidates.',
      interaction: {
        type: 'mcq',
        options: [
          'A circle — area \\( \\frac{36}{\\pi} \\approx 11.46 \\)',
          'A square — area 9',
          'A \\( 4 \\times 2 \\) rectangle — area 8',
          'They all enclose the same area, since the perimeter is the same',
        ],
        correct: 0,
      },
      hint: 'For the circle: \\( C = 12 \\Rightarrow r = \\frac{6}{\\pi} \\Rightarrow A = \\pi r^2 = \\frac{36}{\\pi} \\). Compare with the square&rsquo;s \\( 3 \\times 3 \\).',
      explain: 'Circle: \\( \\frac{36}{\\pi} \\approx 11.46 \\). Square: \\( 9 \\). Rectangle: \\( 8 \\). The circle wins — and it always wins. <b>Among all shapes of a given perimeter, the circle encloses the greatest area.</b>',
      note: 'Honesty card: that statement is TRUE, but proving it rigorously took mathematicians roughly a century (it&rsquo;s the <em>isoperimetric problem</em>). We&rsquo;re using it before we can prove it — which is fine, as long as you know that&rsquo;s what you&rsquo;re doing. Never let a true fact quietly become an unexamined assumption.',
      coach: ['Compute the circle&rsquo;s area from its circumference.', 'Then compare against a 3×3 square.'],
    },
    {
      prompt: 'Tangent circles. Drag centre \\( B \\) until the two circles just touch — externally.',
      body: 'Circle \\( A \\) has radius 3; circle \\( B \\) has radius 2. Watch the readout as you drag.',
      interaction: {
        type: 'geometry',
        mode: 'drag',
        instruction: 'Drag B until the circles are externally tangent.',
        figure: TANGENT_FIG,
        goal(s) { return Math.abs(s.dist('A', 'B') - 5) < 0.12; },
        measure(s) {
          const d = s.dist('A', 'B');
          const gap = d - 5;
          const verdict = Math.abs(gap) < 0.12
            ? '<b>Tangent!</b> They touch at exactly one point — and \\( AB = 5 = 3 + 2 = r_A + r_B \\).'
            : gap > 0
              ? 'The circles are apart — no touching yet.'
              : 'The circles OVERLAP — they cross at two points.';
          return `\\( AB = ${d.toFixed(2)} \\), &nbsp; \\( r_A + r_B = 5 \\)<br>${verdict}`;
        },
      },
      hint: 'Tangency means they meet at exactly one point. Where must that point lie, relative to the segment \\( \\overline{AB} \\)?',
      success: 'Tangency happens exactly when \\( AB = r_A + r_B \\) — no sooner, no later.',
      note: '<b>Externally tangent circles: the distance between the centres equals the SUM of the radii.</b> The reason is the definition from beat 1: the touch point sits on segment \\( \\overline{AB} \\), exactly \\( r_A \\) from \\( A \\) and \\( r_B \\) from \\( B \\). (Starred aside for later: if one circle sits INSIDE the other and touches, the centres are \\( |r_A - r_B| \\) apart. This chapter only needs the external case.)',
      coach: ['Drag B slowly toward A and watch the distance readout.', 'The circles touch when the gap in the readout reaches zero.'],
    },
    {
      prompt: 'Three mutually tangent circles, centres \\( A, B, C \\). Find \\( r_A \\) in terms of the centre distances.',
      body: 'Each pair is externally tangent, so each side of triangle \\( ABC \\) is a sum of two radii. That is a system — and you have solved systems since Chapter 3.',
      interaction: {
        type: 'balance',
        start: 's0', goal: 'win',
        states: {
          s0: { eq: '\\( AB = r_A + r_B, \\quad AC = r_A + r_C, \\quad BC = r_B + r_C \\)' },
          add: { eq: '\\( AB + AC = 2r_A + r_B + r_C \\)', note: 'Adding the first two equations doubles \\( r_A \\) and picks up exactly the pair \\( r_B + r_C \\) — which the third equation happens to name.' },
          bad: { eq: '\\( AB - AC = r_B - r_C \\)', note: 'True, but it eliminated \\( r_A \\) — the very thing you want. You need to ISOLATE \\( r_A \\), not cancel it. Undo.' },
          sub: { eq: '\\( AB + AC - BC = 2r_A + (r_B + r_C) - (r_B + r_C) = 2r_A \\)', note: 'Subtracting the third equation annihilates \\( r_B \\) and \\( r_C \\) together, leaving \\( r_A \\) alone. Elimination, exactly as in Chapter 3.' },
          win: { eq: '\\( r_A = \\dfrac{AB + AC - BC}{2} \\)', note: 'A geometry problem solved by pure algebra. And it is symmetric: \\( r_B = \\frac{AB + BC - AC}{2} \\) and \\( r_C = \\frac{AC + BC - AB}{2} \\) — swap the roles and the formula follows you.' },
        },
        ops: [
          { label: 'Add the first two equations', to: { s0: 'add' } },
          { label: 'Subtract the first two equations', to: { s0: 'bad' } },
          { label: 'Subtract the third equation', to: { add: 'sub' }, blocked: 'You need something with \\( r_B + r_C \\) in it before the third equation can cancel anything.' },
          { label: 'Divide by 2', to: { sub: 'win' }, blocked: 'Get down to \\( 2r_A = \\ldots \\) first.' },
        ],
      },
      hint: 'Add the two equations containing \\( r_A \\); then subtract the one that doesn&rsquo;t.',
      success: '\\( r_A = \\frac{AB + AC - BC}{2} \\) — the first genuinely hard skill of the chapter, and it&rsquo;s Chapter 3 in a costume.',
      note: 'This is the book&rsquo;s <b>first geometry–algebra bridge</b>, and it is the template for hundreds to come: <em>translate the picture into equations, then forget the picture and solve.</em> Geometry supplies the equations; algebra supplies the answers.',
      coach: ['Which two equations mention \\( r_A \\)?', 'Add them. What unwanted pair appears?', 'The third equation names that exact pair — subtract it.'],
    },
    {
      prompt: 'Use it: circles centred at \\( A, B, C \\) are mutually tangent, with \\( AB = 6 \\), \\( AC = 5 \\), \\( BC = 9 \\). Find the radius of circle \\( A \\).',
      interaction: {
        type: 'fillin',
        fields: [{ label: '\\( r_A \\) =', answer: '1', width: 90 }],
      },
      hint: '\\( r_A = \\frac{AB + AC - BC}{2} \\).',
      explain: '\\( r_A = \\frac{6 + 5 - 9}{2} = \\frac{2}{2} = \\mathbf{1} \\). Sanity check the whole configuration: \\( r_B = \\frac{6+9-5}{2} = 5 \\) and \\( r_C = \\frac{5+9-6}{2} = 4 \\). Then \\( r_A + r_B = 6 = AB \\) ✓, \\( r_A + r_C = 5 = AC \\) ✓, \\( r_B + r_C = 9 = BC \\) ✓. All three tangencies hold.',
      note: 'Note what made this easy: knowing that the segment from \\( A \\) to the tangent point IS a radius of circle \\( A \\). The vocabulary from beat 2 wasn&rsquo;t decoration — it was the problem.',
      coach: ['Plug straight into the formula you just derived.', 'Then verify all three tangency equations hold.'],
    },
    {
      prompt: 'A fly rides a record of radius 10 cm, spinning at 150 revolutions per minute. How fast is the fly actually travelling?',
      body: 'Spin rate is not speed. One revolution carries the fly exactly one circumference.',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'cm per minute', answer: '3000pi', accept: ['3000π', '9424.8', '9425'], width: 130 }],
      },
      hint: 'Chain the units (Chapter 4.3): \\( 150 \\frac{\\text{rev}}{\\text{min}} \\times \\frac{2\\pi(10) \\text{ cm}}{1 \\text{ rev}} \\). The &ldquo;rev&rdquo; cancels.',
      explain: 'One revolution = one circumference = \\( 2\\pi(10) = 20\\pi \\) cm. So \\( 150 \\times 20\\pi = \\mathbf{3000\\pi} \\approx 9425 \\) cm/min (about 5.7 km/h — a brisk walk, for a fly sitting still).',
      note: '<b>Linear speed = (revolutions per unit time) × (circumference).</b> The conversion-factor chain from Chapter 4 does the bookkeeping: rev/min × cm/rev → cm/min, with &ldquo;rev&rdquo; cancelling. Every gear, wheel, and pulley problem you ever meet is this one line.',
      coach: ['How far does the fly travel in ONE revolution?', 'Then multiply by the revolutions per minute — and watch the units cancel.'],
    },

    /* ---------------- checkpoint ---------------- */
    {
      section: 'checkpoint',
      prompt: 'A 72 cm wire is cut into two equal pieces, and each piece is bent into a circle. What is the TOTAL area enclosed?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'total area (cm²)', answer: '648/pi', accept: ['648/π', '206.26', '206.265'], width: 130 }],
      },
      hint: 'Each piece is 36 cm — that&rsquo;s a CIRCUMFERENCE, not a radius. Extract \\( r \\) first.',
      explain: 'Each circle: \\( 2\\pi r = 36 \\Rightarrow r = \\frac{18}{\\pi} \\), so \\( A = \\pi \\left(\\frac{18}{\\pi}\\right)^2 = \\frac{324}{\\pi} \\). Two of them: \\( \\mathbf{\\frac{648}{\\pi}} \\approx 206.3 \\) cm². (Trap avoided: 36 is the circumference. Treat it as a radius and you get a wildly wrong answer.)',
      coach: ['Halve the wire, then extract the radius from the circumference.', 'Compute one circle&rsquo;s area, then double it.'],
    },
    {
      section: 'checkpoint',
      prompt: 'A circle has circumference \\( 10\\pi \\). What is its area?',
      interaction: {
        type: 'fillin',
        fields: [{ label: 'area', answer: '25pi', accept: ['25π', '78.54'], width: 110 }],
      },
      hint: '\\( 2\\pi r = 10\\pi \\Rightarrow r = 5 \\).',
      explain: '\\( r = 5 \\), so \\( A = \\pi(5)^2 = \\mathbf{25\\pi} \\). Extract \\( r \\), then substitute — the same ritual every time.',
      coach: ['The \\( \\pi \\)s cancel when you solve for \\( r \\).'],
    },
    {
      section: 'checkpoint',
      prompt: 'Tap the <b>diameter</b>.',
      body: 'Anatomy recall — cold.',
      interaction: {
        type: 'geometry',
        mode: 'identify',
        target: 'diameterAB',
        instruction: 'Tap the diameter.',
        figure: ANATOMY,
      },
      hint: 'A chord that passes through the centre.',
      explain: '\\( \\overline{AB} \\) — the chord through \\( O \\), and the longest chord in the circle. \\( \\overline{CD} \\) is a chord but misses the centre; \\( \\overline{OR} \\) is a radius, exactly half the length of \\( \\overline{AB} \\).',
      coach: ['Which chord passes through O?'],
    },
    {
      section: 'checkpoint',
      prompt: 'Two circles of radii 4 and 7 are externally tangent. How far apart are their centres? And if instead the small one sat INSIDE the big one, touching?',
      interaction: {
        type: 'fillin',
        fields: [
          { label: 'external', answer: '11', width: 90 },
          { label: 'internal', answer: '3', width: 90 },
        ],
      },
      hint: 'External: the touch point lies BETWEEN the centres, so the distances add. Internal: it lies beyond one centre, so they subtract.',
      explain: 'External: \\( 4 + 7 = \\mathbf{11} \\). Internal: \\( |7 - 4| = \\mathbf{3} \\) — the small circle nestles inside, and the centres are close. Both follow from the same definition; only the position of the touch point changes.',
      coach: ['Draw the segment between the centres and mark the touch point on it.', 'For internal tangency, the touch point is on the far side of the small circle&rsquo;s centre.'],
    },

    /* ---------------- boss ---------------- */
    {
      section: 'boss',
      prompt: 'Three mutually tangent circles have centres \\( A, B, C \\) with \\( AB = 7 \\), \\( AC = 8 \\), \\( BC = 11 \\). Find all three radii.',
      body: 'The full system. Run your formula three times — then check every tangency.',
      interaction: {
        type: 'fillin',
        fields: [
          { label: '\\( r_A \\)', answer: '2', width: 84 },
          { label: '\\( r_B \\)', answer: '5', width: 84 },
          { label: '\\( r_C \\)', answer: '6', width: 84 },
        ],
      },
      hint: '\\( r_A = \\frac{AB + AC - BC}{2} \\). For \\( r_B \\), the two sides touching \\( B \\) are \\( AB \\) and \\( BC \\), and the odd one out is \\( AC \\).',
      explain: '\\( r_A = \\frac{7+8-11}{2} = 2 \\); \\( r_B = \\frac{7+11-8}{2} = 5 \\); \\( r_C = \\frac{8+11-7}{2} = 6 \\). Check: \\( 2+5 = 7 = AB \\) ✓, \\( 2+6 = 8 = AC \\) ✓, \\( 5+6 = 11 = BC \\) ✓.',
      walkthrough: [
        'Translate the picture into equations. Each pair of circles is externally tangent, so each side of triangle \\( ABC \\) is the sum of the two radii at its ends: \\( r_A + r_B = 7 \\), \\( r_A + r_C = 8 \\), \\( r_B + r_C = 11 \\).',
        'Three linear equations, three unknowns — Chapter 3 territory. The picture has done its job; you can put it down now.',
        'For \\( r_A \\): add the two equations containing \\( r_A \\) and subtract the one that doesn&rsquo;t. \\( (7 + 8) - 11 = 4 = 2r_A \\), so \\( r_A = 2 \\).',
        'The formula is symmetric — rotate the roles. \\( r_B = \\frac{7 + 11 - 8}{2} = 5 \\) (the sides at \\( B \\) are \\( AB \\) and \\( BC \\); the far side is \\( AC \\)). And \\( r_C = \\frac{8 + 11 - 7}{2} = 6 \\).',
        'Always check back in the ORIGINAL geometry: \\( 2+5=7 \\) ✓, \\( 2+6=8 \\) ✓, \\( 5+6=11 \\) ✓. All three circles touch, exactly as required.',
      ],
      success: 'Geometry in, algebra out. That exchange is what the rest of this book is made of.',
      note: 'The move to keep: <b>a tangency is an equation.</b> Whenever circles touch, write down &ldquo;centre distance = sum of radii&rdquo; and let the algebra take over. Chapter 10 onward, the same reflex applies to angles and lengths.',
      coach: ['Write one equation per tangency — three in total.', 'Solve the system by elimination, exactly as in Chapter 3.', 'Verify all three tangency equations at the end.'],
    },
    {
      kicker: 'The big picture',
      prompt: 'The circle held astronomy captive for fifteen centuries.',
      interaction: {
        type: 'reveal',
        face: 'The Greeks believed the heavens must be perfect — and the perfect curve was the circle. So planets had to move in circles. But planets, inconveniently, sometimes appear to move BACKWARDS across the sky.',
        cta: 'Tap for how they saved the circle',
        hidden: '<b>Epicycles.</b> If a planet rides a small circle whose centre rides a big circle, the traced path loops — and yes, it can go backwards. Beautiful, and it fit the data. It also required ever more circles-on-circles as measurements improved: by the Middle Ages, dozens of them.<br><br>Copernicus (1543) moved the Sun to the centre — and <em>kept the circles</em>. It still needed epicycles. Only when <b>Kepler</b> (early 1600s) finally let go of the circle and tried an <b>ellipse</b> did the wheels-within-wheels vanish and the numbers snap into place, at last.<br><br>Fifteen hundred years, because a shape was too beautiful to abandon. The moral cuts both ways: elegance is a magnificent guide and a terrible master. (The ellipse is waiting for you in Volume 2 — and a circle, it turns out, is just an ellipse that never got interesting.)',
      },
      success: 'Chapter 9 complete. Next: angles — and the canvas you just learned to read comes with you.',
      coach: ['Guess first: how DID they explain planets moving backwards, using only circles?'],
    },
  ],
};
