/* Chapter 10.3 — Parallel Lines and the Triangle's 180°.
   Pattern first, names second; every theorem is derived from one parallel-line gift. */

const PARALLELS = {
  view: { x: -8, y: -6, w: 16, h: 12 },
  alt: 'Parallel lines l and m cut by a draggable transversal t',
  points: [
    { id:'L1',x:-7,y:3,hidden:true }, { id:'L2',x:7,y:3,hidden:true },
    { id:'M1',x:-7,y:-3,hidden:true }, { id:'M2',x:7,y:-3,hidden:true },
    { id:'P',x:-2,y:5,label:'P',draggable:true }, { id:'Q',x:2,y:-5,label:'Q' },
  ],
  lines: [{id:'l',from:'L1',to:'L2',label:'ℓ'},{id:'m',from:'M1',to:'M2',label:'m'},{id:'t',from:'P',to:'Q',label:'t'}],
};

const angleReadout = s => {
  const p=s.points.P,q=s.points.Q;
  let a=Math.abs(Math.atan2(p.y-q.y,p.x-q.x)*180/Math.PI)%180;
  a=Math.min(a,180-a);
  return `All acute angles: <b>\(${a.toFixed(1)}^\circ\)</b><br>All obtuse angles: <b>\(${(180-a).toFixed(1)}^\circ\)</b>`;
};

const TRIANGLE_AUX = {
  view:{x:-7,y:-4,w:14,h:10}, alt:'Triangle ABC with a point E for an auxiliary parallel through C',
  points:[{id:'A',x:-4,y:-2,label:'A'},{id:'B',x:4,y:-2,label:'B'},{id:'C',x:0,y:4,label:'C',draggable:true},{id:'E',x:6,y:4,label:'E'}],
  segments:[{id:'AB',from:'A',to:'B'},{id:'AC',from:'A',to:'C'},{id:'BC',from:'B',to:'C'}],
};

export default {
  id:'lesson-10-2', title:'Parallel Lines and the Triangle’s 180°', kicker:'Angles',
  topicIndex:9, lessonIndex:1, next:'interactive-lesson.html?chapter=10&lesson=3',
  beats:[
    {
      prompt:'Drag the transversal. Find the angles that move in lockstep.',
      body:'Do not memorize names yet. First see the two numerical teams the diagram creates.',
      interaction:{type:'geometry',mode:'drag',mustExplore:12,tools:['protractor','mark'],instruction:'Drag P sideways; watch the two angle teams.',figure:PARALLELS,measure:angleReadout},
      success:'Eight angles, but only two measures.',
      note:'Parallel lines never meet and stay a constant distance apart. A line crossing them is a <b>transversal</b>.',
      coach:['Track equality groups, not individual labels.'],
    },
    {
      prompt:'Now attach names to the patterns.',
      interaction:{type:'match',pairs:[['opposite sides of transversal, between parallels','alternate interior'],['same corner at the two crossings','corresponding'],['same side of transversal, between parallels','same-side interior']]},
      note:'Alternate interior and corresponding angles are equal. Same-side interior angles are supplementary.',
      coach:['“Interior” means between the parallel lines.'],
    },
    {
      prompt:'Which equality actually depends on the lines being parallel?',
      interaction:{type:'mcq',options:['Alternate interior angles are equal.','Vertical angles are equal.','A linear pair sums to 180°.','Angles around a point total 360°.'],correct:0},
      hint:'Imagine tilting one of the supposedly parallel lines.',
      explain:'Vertical and straight-line facts are local; they survive without parallelism. Alternate-interior equality is the new gift supplied by \(\ell\parallel m\).',
      note:'Never use a parallel-line angle theorem unless parallelism is marked or proved.',
      coach:['Audit the little arrow marks on the lines.'],
    },
    {
      prompt:'Derive corresponding angles instead of memorizing them separately.',
      interaction:{type:'order',items:['Take \(\alpha=\beta\) from alternate interior angles.','Mark \(\gamma=\alpha\) as vertical angles.','Chain \(\gamma=\alpha=\beta\).','Conclude corresponding angles \(\gamma\) and \(\beta\) are equal.']},
      hint:'Use one parallel-line fact and one Chapter 10.1 fact.',
      explain:'Corresponding equality is alternate-interior equality transported across a vertical pair.',
      note:'Three angle families, but not three unrelated axioms: one parallel fact plus vertical and straight angles generates the rest.',
      coach:['Vertical angles are the bridge.'],
    },
    {
      prompt:'Derive same-side interior supplementation.',
      interaction:{type:'mcq',options:['One same-side angle equals an alternate interior angle that forms a linear pair with the other.','They look like they add to 180°.','Both angles are always 90°.','Vertical angles are supplementary.'],correct:0},
      hint:'Transport one angle across the transversal, then use a straight line.',
      explain:'Alternate interior equality moves one angle beside the other. Those adjacent angles form a straight line, so their sum is 180°.',
      coach:['Move, then add.'],
    },
    {
      prompt:'Break parallelism. Which claim fails?',
      interaction:{type:'mcq',options:['Alternate interior angles stay equal even after one line tilts.','Vertical angles remain equal.','Each linear pair still sums to 180°.','Angles around an intersection still total 360°.'],correct:0},
      hint:'Only one statement used the parallel hypothesis.',
      explain:'Tilted nonparallel lines destroy alternate-interior equality. This is why unmarked “looks parallel” diagrams are dangerous.',
      note:'Diagrams suggest; markings certify.',
      coach:['Separate visual appearance from a stated hypothesis.'],
    },
    {
      prompt:'The flagship move: draw the line through C parallel to AB.',
      body:'Select Auxiliary line, then tap C and E. You are adding the object the proof needs.',
      interaction:{type:'geometry',mode:'drag',mustExplore:1,tools:['auxiliary'],instruction:'Draw CE through C, parallel to AB.',figure:TRIANGLE_AUX},
      success:'The triangle’s three angles can now be assembled at one point.',
      note:'When stuck, add a line that manufactures known angle pairs. An auxiliary line is chosen for a job—not pulled from thin air.',
      coach:['Connect C to E.', 'The target line should copy the direction of AB.'],
    },
    {
      prompt:'Finish the triangle angle-sum proof.',
      interaction:{type:'order',items:['Use alternate interiors to copy \(\angle A\) beside C.','Use alternate interiors to copy \(\angle B\) on the other side of C.','Keep the original \(\angle C\) between them.','The three adjacent angles form a straight line, so \(A+B+C=180^\circ\).']},
      hint:'The auxiliary parallel moves A and B without changing their measures.',
      explain:'All three triangle angles now sit along one straight line through C. Their sum must be 180°.',
      note:'<b>Triangle Angle Sum:</b> every Euclidean triangle has interior angles totaling \(180^\circ\).',
      coach:['Transport both base angles to the top vertex.'],
    },
    {
      prompt:'An exterior angle skips one subtraction. Find \(\theta\).',
      body:'The two remote interior angles are 38° and 67°.',
      interaction:{type:'fillin',fields:[{label:'θ',answer:'105',accept:['105°']}]},
      hint:'Do not find the adjacent interior angle first unless you need it.',
      explain:'Exterior Angle Theorem: \(\theta=38^\circ+67^\circ=105^\circ\). It follows because both \(\theta+\gamma\) and \(38+67+\gamma\) equal 180°.',
      note:'An exterior angle equals the sum of the <b>two remote</b> interior angles.',
      coach:['Remote means neither angle touches the exterior angle.'],
    },
    {
      prompt:'Walk once around a triangle. What do the exterior turns total?',
      interaction:{type:'slider',min:0,max:3,value:0,label:'corners passed',mustExplore:4,render:n=>({main:`Turns accumulated: \(${[0,110,245,360][n]}^\circ\)`,sub:n<3?'The arrow has not yet recovered its original direction.':'One circuit restores the original direction: one full 360° turn.'})},
      note:'The exterior angles of a triangle total 360°. The turning argument works for every polygon.',
      coach:['A closed walk makes one net full turn.'],
    },
    {
      prompt:'Angle-chase ritual: put the moves in a reliable order.',
      interaction:{type:'order',items:['Mark every given parallel, equal, and right-angle fact.','Transport angles using vertical, alternate interior, or corresponding relations.','Use a local straight-line, triangle-sum, or exterior-angle equation.','Audit that every parallel relation had a real parallel hypothesis.']},
      hint:'Diagram work comes before algebra.',
      explain:'Marking prevents lost information; transport brings data to the target; a local equation closes the chase; the audit catches illegal parallel assumptions.',
      coach:['Marks first, arithmetic last.'],
    },
    {
      section:'checkpoint',prompt:'A triangle has angles \(34^\circ\) and \(71^\circ\). Find the third.',
      interaction:{type:'fillin',fields:[{label:'third angle',answer:'75'}]},hint:'Subtract both from 180°.',explain:'\(180-34-71=75^\circ\).',coach:['Use the triangle sum.'],
    },
    {
      section:'checkpoint',prompt:'Find the exterior angles adjacent to \(34^\circ,71^\circ,75^\circ\).',
      interaction:{type:'fillin',fields:[{label:'first',answer:'146'},{label:'second',answer:'109'},{label:'third',answer:'105'}]},
      hint:'Each exterior angle forms a linear pair with its interior angle.',
      explain:'The values are \(180-34=146\), \(180-71=109\), and \(180-75=105\). Their sum checks at 360°.',coach:['Use 180−interior, then check the total.'],
    },
    {
      section:'checkpoint',prompt:'Corresponding angles formed by a transversal are both \(112^\circ\). What may you conclude?',
      interaction:{type:'mcq',options:['The two lines are parallel.','The lines are perpendicular.','The angles are complementary.','No conclusion is possible.'],correct:0},
      hint:'This is the converse direction.',
      explain:'Equal corresponding angles certify parallel lines. A converse is being used: angle equality is now the evidence, not the consequence.',coach:['Read the arrow of logic carefully.'],
    },
    {
      section:'checkpoint',prompt:'Same-side interior angles are \(5x+12\) and \(3x+8\). Find x.',
      interaction:{type:'fillin',fields:[{label:'x',answer:'20'}]},hint:'Their sum is 180°.',explain:'\(5x+12+3x+8=180\Rightarrow8x=160\Rightarrow x=20\).',coach:['Supplementary means one equation with total 180.'],
    },
    {
      section:'boss',prompt:'Two triangles meet at C between parallel lines. After transporting the givens to C, the angles beside the unknown are \(48^\circ\) and \(37^\circ\). Find the angle between the triangles.',
      body:'The real challenge is not the subtraction; it is seeing that an auxiliary parallel brings both givens to the shared vertex.',
      interaction:{type:'fillin',fields:[{label:'angle',answer:'95',accept:['95°']}]},
      hint:'At C, the three adjacent angles lie on a straight line.',
      explain:'Draw a parallel through C, transport the two given angles by alternate interiors, then write \(48+x+37=180\). Thus \(x=95^\circ\).',
      walkthrough:['Draw the auxiliary parallel through C.','Copy the first given angle to C using alternate interiors.','Copy the second given angle to C.','Use the straight line at C and solve.'],
      note:'A powerful geometry move is to bring scattered angle data to one vertex where a single local equation can see all of it.',
      coach:['Manufacture the parallel first.', 'Do not start subtracting until the angles share a line.'],
    },
  ],
};
