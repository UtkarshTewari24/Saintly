/* Chapter 10.1–10.2 — Segments, Rays, and Measuring Angles.
   This lesson establishes the diagram-marking ritual used by every later geometry build. */

const angleDegrees = (vertex, arm) => {
  let value = Math.atan2(arm.y - vertex.y, arm.x - vertex.x) * 180 / Math.PI;
  if (value < 0) value += 360;
  return value;
};

const LINE_VOCAB = {
  view: { x: -7, y: -5, w: 14, h: 10 },
  alt: 'A segment AB with midpoint M, a ray CD, and a line through E and F',
  points: [
    { id: 'A', x: -6, y: 3, label: 'A' }, { id: 'M', x: -3, y: 3, label: 'M' },
    { id: 'B', x: 0, y: 3, label: 'B' }, { id: 'C', x: -5, y: 0, label: 'C' },
    { id: 'D', x: 0, y: 0, label: 'D' }, { id: 'E', x: -4, y: -3, label: 'E' },
    { id: 'F', x: 3, y: -3, label: 'F' },
  ],
  segments: [{ id: 'segmentAB', from: 'A', to: 'B', label: 'segment' }],
  lines: [
    { id: 'rayCD', from: 'C', to: 'D', label: 'ray', extend: 5 },
    { id: 'lineEF', from: 'E', to: 'F', label: 'line', extend: 5 },
  ],
};

const ANGLE_FIGURE = {
  view: { x: -7, y: -7, w: 14, h: 14 },
  alt: 'Angle AOB with draggable endpoint A and fixed ray OB',
  points: [
    { id: 'O', x: 0, y: 0, label: 'O' },
    { id: 'B', x: 5.5, y: 0, label: 'B' },
    { id: 'A', x: 2.5, y: 4.8, label: 'A', draggable: true,
      constrain(x, y) { const d = Math.hypot(x, y) || 1; return [5.5 * x / d, 5.5 * y / d]; } },
  ],
  segments: [{ id: 'OA', from: 'O', to: 'A' }, { id: 'OB', from: 'O', to: 'B' }],
};

const VERTICAL_FIGURE = {
  view: { x: -7, y: -6, w: 14, h: 12 },
  alt: 'Two intersecting lines with four labelled points around vertex O',
  points: [
    { id: 'O', x: 0, y: 0, label: 'O' },
    { id: 'A', x: -5, y: -2.5, label: 'A', draggable: true }, { id: 'B', x: 5, y: 2.5, label: 'B' },
    { id: 'C', x: -3.5, y: 4.5, label: 'C' }, { id: 'D', x: 3.5, y: -4.5, label: 'D' },
  ],
  lines: [{ id: 'AB', from: 'A', to: 'B' }, { id: 'CD', from: 'C', to: 'D' }],
};

export default {
  id: 'lesson-10-1',
  title: 'Segments, Rays, and Measuring Angles',
  kicker: 'Angles',
  topicIndex: 9,
  lessonIndex: 0,
  next: 'interactive-lesson.html?chapter=10&lesson=2',
  beats: [
    {
      prompt: 'Three objects, three different endpoint rules. Tap the <b>ray</b>.',
      body: 'A segment stops twice. A line never stops. A ray has one origin and travels forever in one direction.',
      interaction: { type: 'geometry', mode: 'identify', target: 'rayCD', instruction: 'Tap the ray.', figure: LINE_VOCAB },
      hint: 'Find the object with exactly one meaningful endpoint. Its name begins there.',
      explain: 'The object beginning at C and passing through D is ray CD. Reversing the name changes the origin: ray DC starts at D, so it is a different ray.',
      note: '<b>Origin first:</b> \(\overrightarrow{CD}\neq\overrightarrow{DC}\). By contrast, segment \(\overline{AB}=\overline{BA}\).',
      coach: ['Count endpoints before reading labels.', 'The ray&rsquo;s first letter is its origin.'],
    },
    {
      prompt: 'Tap the midpoint of \(\overline{AB}\).',
      body: 'A midpoint is not merely a point drawn near the middle—it creates two equal segment lengths.',
      interaction: { type: 'geometry', mode: 'identify', target: 'M', instruction: 'Tap midpoint M.', figure: LINE_VOCAB },
      hint: 'Which labelled point lies halfway between A and B?',
      explain: 'M is the midpoint, so \(AM=MB\). The bar in \(\overline{AB}\) names the segment object; plain \(AB\) usually names its numerical length.',
      note: '<b>Object vs measure:</b> \(\overline{AB}\) is a segment; \(AB\) is its length.',
      coach: ['A midpoint creates an equality you should mark immediately.'],
    },
    {
      prompt: 'Drag X along \(\overline{AB}\). What refuses to change?',
      body: 'The two pieces trade length, but the straight trip from A through X to B stays fixed.',
      interaction: {
        type: 'geometry', mode: 'drag', mustExplore: 10, instruction: 'Drag X from one end toward the other.',
        figure: {
          view: { x: -1, y: -3, w: 12, h: 6 }, alt: 'Segment AB of length 10 with X draggable between its endpoints',
          points: [{ id: 'A', x: 0, y: 0, label: 'A' }, { id: 'B', x: 10, y: 0, label: 'B' },
            { id: 'X', x: 3, y: 0, label: 'X', draggable: true, constrain(x) { return [Math.max(0, Math.min(10, x)), 0]; } }],
          segments: [{ id: 'AB', from: 'A', to: 'B' }],
        },
        measure(s) { const ax=s.dist('A','X'), xb=s.dist('X','B'); return `\(AX=${ax.toFixed(2)},\quad XB=${xb.toFixed(2)}\)<br><b>\(AX+XB=${(ax+xb).toFixed(2)}=AB\)</b>`; },
      },
      success: 'Every position gives the same total: 10.',
      note: '<b>Betweenness:</b> if X lies on segment AB, then \(AX+XB=AB\). The straight path contains no detour.',
      coach: ['Watch the sum, not either piece alone.'],
    },
    {
      prompt: 'Build \(\angle AOB\). Drag A through acute, right, obtuse, and reflex positions.',
      body: 'The vertex is O because it is the shared origin—and because it sits in the middle of the three-letter name.',
      interaction: {
        type: 'geometry', mode: 'drag', mustExplore: 12, tools: ['protractor'], instruction: 'Turn on the protractor, then drag A around O.', figure: ANGLE_FIGURE,
        measure(s) { const d=angleDegrees(s.points.O,s.points.A); const kind=d<90?'acute':d===90?'right':d<180?'obtuse':d===180?'straight':'reflex'; return `\(m\angle AOB=${d.toFixed(1)}^\circ\) — <b>${kind}</b>`; },
      },
      success: 'An angle can keep opening past 180°. Reflex angles are real angles, not mistakes.',
      note: 'In \(\angle AOB\), <b>O is the vertex</b>. A one-letter name such as \(\angle O\) is legal only when no other angle at O could be meant.',
      coach: ['The middle letter is always the vertex.', 'Continue past the straight angle to see a reflex angle.'],
    },
    {
      prompt: 'Three rays meet at O. Is the name \(\angle O\) safe?',
      interaction: {
        type: 'mcq',
        options: ['No—several different angles have vertex O, so use three letters.', 'Yes—the vertex alone always determines an angle.', 'Yes, but only for obtuse angles.', 'No—angles may never use letters.'],
        correct: 0,
      },
      hint: 'A name must identify exactly one object.',
      explain: 'With several rays from O, \(\angle O\) is ambiguous. Names such as \(\angle AOB\), \(\angle BOC\), and \(\angle AOC\) say which two rays bound the angle.',
      coach: ['Ask whether another angle shares the same vertex.'],
    },
    {
      prompt: 'Open a fraction of a full turn. Why does a quarter turn read 90°?',
      interaction: {
        type: 'slider', min: 0, max: 12, step: 1, value: 1, label: 'twelfths of a turn', mustExplore: 6,
        render(n) {
          const deg=30*n, frac=n===0?'0':`${n}/12`;
          const r=42, a=-Math.PI/2, b=a+2*Math.PI*n/12;
          const x=60+r*Math.cos(b), y=60+r*Math.sin(b), large=n>6?1:0;
          const wedge=n===0?'':`<path d="M60 60 L60 18 A42 42 0 ${large} 1 ${x.toFixed(2)} ${y.toFixed(2)} Z" fill="rgba(136,176,255,.28)" stroke="#88B0FF"/>`;
          return { main:`<svg viewBox="0 0 120 120" width="150" style="display:block;margin:auto"><circle cx="60" cy="60" r="42" fill="none" stroke="#C5C1CF"/>${wedge}</svg>\(${frac}\text{ turn}=${deg}^\circ\)`, sub:'Degree measure records what fraction of the full 360° turn has been swept.' };
        },
      },
      note: 'A degree is \(1/360\) of a full turn. A central angle and its intercepted arc have the same degree measure.',
      coach: ['Three twelfths is one quarter; multiply that fraction by 360.'],
    },
    {
      prompt: 'Why did history settle on 360 instead of 100 units per turn?',
      interaction: {
        type: 'mcq', options: ['360 has many divisors, so halves, thirds, quarters, fifths, sixths, and more stay whole.', 'A circle has exactly 360 sides.', '360 is prime.', 'A third of 100 is a whole number.'], correct: 0,
      },
      hint: 'Compare one third of 360 with one third of 100.',
      explain: '\(360=2^3\cdot3^2\cdot5\) has 24 positive divisors. A third is 120°, a fifth is 72°, and an eighth is 45°. With 100 units, a third would be \(33\frac13\).',
      note: 'Chapter 5 handshake: <b>divisor richness makes 360 convenient.</b>',
      coach: ['Factor 360 mentally: powers of 2, 3, and 5.'],
    },
    {
      prompt: 'Convert \(20\frac59^\circ\) into degrees–minutes–seconds.',
      body: 'Base 60 means a decimal shortcut will betray you. Spill the fraction one unit at a time.',
      interaction: { type: 'order', items: ['Keep the 20 whole degrees.', 'Multiply 5/9 by 60 to get 33 1/3 minutes.', 'Keep the 33 whole minutes.', 'Multiply 1/3 by 60 to get 20 seconds.'] },
      hint: 'One degree contains 60 minutes; one minute contains 60 seconds.',
      explain: '\(20\frac59^\circ=20^\circ33\frac13\prime=20^\circ33\prime20\doubleprime\). The fractional part is multiplied by 60 at each spill.',
      note: '<b>DMS is base 60:</b> \(1^\circ=60\prime\) and \(1\prime=60\doubleprime\). Therefore \(0.5^\circ=30\prime\), not 50 minutes.',
      coach: ['Keep the whole part; only the fractional part spills.', 'Repeat once more if minutes still have a fraction.'],
    },
    {
      prompt: 'Radians bring the Chapter 4 conversion chain back. Match each angle.',
      interaction: { type: 'match', pairs: [['\(\pi/6\)','\(30^\circ\)'],['\(\pi/3\)','\(60^\circ\)'],['\(\pi/2\)','\(90^\circ\)'],['\(3\pi/4\)','\(135^\circ\)'],['\(\pi\)','\(180^\circ\)']] },
      note: '\(360^\circ=2\pi\) radians. Multiply radians by \(180^\circ/\pi\); multiply degrees by \(\pi/180^\circ\). Units cancel exactly like any conversion factor.',
      coach: ['Use \(\pi\leftrightarrow180^\circ\) as the anchor.'],
    },
    {
      prompt: 'Sort the angle language before it starts appearing without warning.',
      interaction: { type: 'match', pairs: [['sum is 90°','complementary'],['sum is 180°','supplementary'],['lines meet at 90°','perpendicular'],['less than 90°','acute'],['between 180° and 360°','reflex']] },
      note: 'Complementary = 90°. Supplementary = 180°. The small square marks a right angle, and \(\ell\perp m\) says the lines are perpendicular.',
      coach: ['Tie “supplementary” to a straight 180° line.'],
    },
    {
      prompt: 'Vertical angles: use the marking tool to mark one opposite pair.',
      body: 'Select “Mark equal,” then tap A and B. The mark is a commitment: you are recording equality before doing algebra.',
      interaction: { type: 'geometry', mode: 'drag', mustExplore: 1, tools: ['mark'], instruction: 'Mark A and B as an opposite pair.', figure: VERTICAL_FIGURE },
      success: 'The diagram now carries the fact you intend to use.',
      note: 'Geometry ritual: <b>mark equal parts the moment you prove or receive them.</b> Marks prevent the same fact from being rediscovered—or forgotten.',
      coach: ['Turn on Mark equal, then choose the two opposite endpoints.'],
    },
    {
      prompt: 'Now prove the marks were legal.',
      interaction: { type: 'order', items: ['Write \(\alpha+\beta=180^\circ\) from one straight line.', 'Write \(\theta+\beta=180^\circ\) from the other straight line.', 'Set \(\alpha+\beta=\theta+\beta\).', 'Subtract \(\beta\) to obtain \(\alpha=\theta\).'] },
      hint: 'Both opposite angles share an adjacent angle as a supplement.',
      explain: 'Each vertical angle is supplementary to the same adjacent angle. Subtracting that common angle proves the vertical pair equal—no appeal to appearance.',
      note: '<b>Vertical angles are equal.</b> The proof uses only two straight-angle equations and subtraction.',
      coach: ['Write two equations that both equal 180°.', 'Cancel the shared adjacent angle.'],
    },
    {
      section: 'checkpoint', prompt: 'Convert \(7\pi/6\) radians to degrees.',
      interaction: { type: 'fillin', fields: [{ label: 'degrees', answer: '210', accept: ['210°'] }] },
      hint: 'Multiply by \(180^\circ/\pi\).',
      explain: '\(\frac{7\pi}{6}\cdot\frac{180^\circ}{\pi}=7\cdot30^\circ=210^\circ\).',
      coach: ['Cancel π before multiplying.'],
    },
    {
      section: 'checkpoint', prompt: 'Write \(15.4^\circ\) in DMS.',
      interaction: { type: 'fillin', fields: [{ label: 'degrees', answer: '15' },{ label: 'minutes', answer: '24' },{ label: 'seconds', answer: '0' }] },
      hint: 'Multiply 0.4 by 60—not by 100.',
      explain: '\(0.4\cdot60=24\), exactly. Therefore \(15.4^\circ=15^\circ24\prime00\doubleprime\).',
      coach: ['DMS is base 60.'],
    },
    {
      section: 'checkpoint', prompt: 'X lies between A and B. If \(AX=3\) and \(AB=10\), find \(XB\).',
      interaction: { type: 'fillin', fields: [{ label: 'XB', answer: '7' }] },
      hint: 'Use segment addition, not a distance formula.',
      explain: '\(AX+XB=AB\), so \(3+XB=10\) and \(XB=7\).',
      coach: ['Write the whole as the sum of its parts.'],
    },
    {
      section: 'checkpoint', prompt: 'Two lines cross. One angle is \(68^\circ\). Find its vertical angle and either adjacent angle.',
      interaction: { type: 'fillin', fields: [{ label: 'vertical', answer: '68' },{ label: 'adjacent', answer: '112' }] },
      hint: 'Opposite is equal; adjacent is supplementary.',
      explain: 'The vertical angle is 68°. Each adjacent angle is \(180-68=112^\circ\).',
      coach: ['Equal across; supplementary beside.'],
    },
    {
      section: 'boss',
      prompt: 'At exactly 4:20, what is the smaller angle between the clock hands?',
      body: 'The minute hand is easy. The trap is pretending the hour hand waits at 4 while twenty minutes pass.',
      interaction: { type: 'fillin', fields: [{ label: 'smaller angle', answer: '10', accept: ['10°'] }] },
      hint: 'Each hour gap is 30°. In 20 minutes, the hour hand travels one third of that gap.',
      explain: 'Minute hand: \(20\cdot6^\circ=120^\circ\). Hour hand: \(4\cdot30^\circ+\frac{20}{60}\cdot30^\circ=130^\circ\). The smaller difference is \(10^\circ\).',
      walkthrough: ['Place the minute hand at 120° from 12.', 'Place 4 o’clock at 120°.', 'Advance the hour hand another 10° because one third of an hour has passed.', 'Subtract: 130°−120°=10°.'],
      success: 'Angle measurement met proportional motion—and the moving hour hand did not get away with freezing.',
      note: 'Clock problems are rate problems on a circle: minute hand \(6^\circ\)/min, hour hand \(0.5^\circ\)/min.',
      coach: ['Track both hands as moving objects.', 'Use angular rates if the static picture feels slippery.'],
    },
  ],
};
