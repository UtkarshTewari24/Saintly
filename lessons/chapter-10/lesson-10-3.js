/* Chapter 10.4–10.5 — Arcs, Sectors, and Circle-Angle Theorems. */

const INSCRIBED = {
  view:{x:-7,y:-7,w:14,h:14},alt:'Circle with fixed chord AB and draggable inscribed vertex P',
  points:[{id:'O',x:0,y:0,label:'O'},{id:'A',x:-4.243,y:-4.243,label:'A'},{id:'B',x:4.243,y:-4.243,label:'B'},
    {id:'P',x:0,y:6,label:'P',draggable:true,constrain(x,y){const d=Math.hypot(x,y)||1;return[6*x/d,6*y/d];}}],
  circles:[{id:'c',center:'O',r:6}],segments:[{id:'PA',from:'P',to:'A'},{id:'PB',from:'P',to:'B'},{id:'OA',from:'O',to:'A'},{id:'OB',from:'O',to:'B'}],
};
const inscribedMeasure=s=>{const p=s.points.P,a=s.points.A,b=s.points.B,u=[a.x-p.x,a.y-p.y],v=[b.x-p.x,b.y-p.y];const q=(u[0]*v[0]+u[1]*v[1])/(Math.hypot(...u)*Math.hypot(...v));return`\(m\angle APB=${(Math.acos(Math.max(-1,Math.min(1,q)))*180/Math.PI).toFixed(1)}^\circ\)<br>Fixed arc AB: \(90^\circ\)`;};

export default {id:'lesson-10-3',title:'Arcs, Sectors, and Circle Angles',kicker:'Angles',topicIndex:9,lessonIndex:2,next:'interactive-lesson.html?chapter=10&lesson=4',beats:[
  {
    prompt:'One arc, two measurements. Change the radius.',
    interaction:{type:'slider',min:1,max:9,step:1,value:2,label:'radius r',mustExplore:6,render(r){return{main:`For \(\theta=\pi/3\): arc measure \(=60^\circ\), arc length \(=${r}\pi/3\)`,sub:'The turn is frozen; the physical length stretches with the circle.'};}},
    note:'Arc <b>degree/radian measure</b> records a turn; arc <b>length</b> records distance. Changing r affects only the latter.',coach:['Hold θ fixed and watch r.'],
  },
  {
    prompt:'Derive arc length instead of memorizing it.',
    interaction:{type:'order',items:['Write \(s/(2\pi r)=\theta/(2\pi)\).','Multiply by \(2\pi r\).','Cancel \(2\pi\).','Obtain \(s=r\theta\).']},
    hint:'Arc-to-circumference equals angle-to-full-turn.',explain:'The proportion gives \(s=r\theta\), provided θ is in radians.',note:'Radians make arc length natural: <b>\(s=r\theta\)</b>.',coach:['Match part/whole on both sides.'],
  },
  {
    prompt:'Derive sector area by the same fraction-of-a-circle idea.',
    interaction:{type:'fillin',fields:[{label:'r=6, θ=π/3: sector area',answer:'6pi',accept:['6π']},{label:'arc length',answer:'2pi',accept:['2π']}]},
    hint:'Use \(A=\theta r^2/2\) and \(s=r\theta\).',explain:'\(A=(\pi/3)(36)/2=6\pi\), while \(s=6(\pi/3)=2\pi\). Different units, different formulas.',note:'Sector area: \(A=\frac{\theta}{2\pi}\pi r^2=\frac12\theta r^2\). A circular segment is sector minus triangle.',coach:['Do not confuse length with area.'],
  },
  {
    prompt:'Drag P around the circle. Try to change \(\angle APB\).',
    interaction:{type:'geometry',mode:'drag',mustExplore:14,tools:['protractor','mark'],instruction:'Keep P on the upper arc and drag.',figure:INSCRIBED,measure:inscribedMeasure},
    success:'The vertex moved; the intercepted arc did not. The angle stayed 45°.',note:'An <b>inscribed angle</b> equals half its intercepted arc. Every inscribed angle on the same arc is equal.',coach:['A and B stay fixed; P is free.'],
  },
  {
    prompt:'The real memory system is vertex location. Build it.',
    interaction:{type:'match',pairs:[['vertex at center','equals arc'],['vertex on circle','half one arc'],['vertex inside circle','half the sum'],['vertex outside circle','half the difference']]},
    note:'ON → half arc. INSIDE → half sum. OUTSIDE → half difference. Locate the vertex before touching numbers.',coach:['Outside separates arcs, so subtract.'],
  },
  {
    prompt:'Two chords cross inside. Their intercepted arcs are 60° and 40°. Find both vertical angles.',
    interaction:{type:'fillin',fields:[{label:'acute angle',answer:'50'},{label:'obtuse angle',answer:'130'}]},
    hint:'Inside means half the sum; the other angle is supplementary.',explain:'Acute angle \(=(60+40)/2=50^\circ\). Its vertical partner is also 50°; either adjacent angle is 130°.',note:'Read the question’s target: the theorem may give the other angle first.',coach:['Compute, then check whether the requested angle is adjacent.'],
  },
  {
    prompt:'Two secants meet outside. Far arc 150°, near arc 50°. Find the angle.',
    interaction:{type:'fillin',fields:[{label:'outside angle',answer:'50'}]},hint:'Outside means half the difference—far minus near.',explain:'\((150-50)/2=50^\circ\). Reversing the arcs would produce nonsense.',note:'External secants: \(m\angle=\frac12(\text{far arc}-\text{near arc})\).',coach:['Subtract first, halve second.'],
  },
  {
    prompt:'A tangent and chord intercept a 124° arc. Find their angle.',
    interaction:{type:'fillin',fields:[{label:'angle',answer:'62'}]},hint:'The vertex is on the circle.',explain:'Tangent–chord angle \(=124/2=62^\circ\).',note:'Tangent–chord is the fourth listed case, but it still fits the ON-the-circle half-arc rule.',coach:['Vertex location beats theorem-name overload.'],
  },
  {
    prompt:'Which one-line corollary proves an angle in a semicircle is right?',
    interaction:{type:'mcq',options:['Its intercepted arc is 180°, and half of 180° is 90°.','Every chord is perpendicular to a diameter.','All circle angles are right.','The central angle is halved twice.'],correct:0},
    hint:'A diameter cuts off a semicircle.',explain:'An inscribed angle intercepting a diameter sees a 180° arc, so it measures 90°. This is Thales’ semicircle theorem.',note:'Semicircle → right angle. Tangent at an endpoint of a diameter is also perpendicular to that diameter.',coach:['Arc first, angle second.'],
  },
  {
    prompt:'When can the “same arc, equal angles” trick even apply?',
    interaction:{type:'mcq',options:['Two angles with different vertices whose four rays meet a common pair of endpoints on a circle.','Two angles sharing the same vertex and side.','Any two angles drawn inside one circle.','Only central angles.'],correct:0},
    hint:'The two angles must genuinely subtend the same chord/arc.',explain:'The trick needs distinct vertices and the same two arc endpoints. Sharing a vertex or side usually means there is no four-point circle to hunt.',note:'Expertise includes knowing when <em>not</em> to try a theorem.',coach:['Trace each angle’s two rays to the circle.'],
  },
  {
    prompt:'Application chain: tangent–chord gives \(\angle ABC=60^\circ\). What is arc BC, and any inscribed angle on that arc?',
    interaction:{type:'fillin',fields:[{label:'arc BC',answer:'120'},{label:'inscribed angle',answer:'60'}]},
    hint:'Reverse the half-arc rule, then apply it again elsewhere.',explain:'The arc is twice 60°, or 120°. Every inscribed angle subtending that same arc is 60°.',note:'Competition circle problems are chains: relation → arc → another relation → triangle closure.',coach:['Move through the arc as the shared currency.'],
  },
  {
    section:'checkpoint',prompt:'For \(r=8\) and \(\theta=\pi/4\), find arc length and sector area.',
    interaction:{type:'fillin',fields:[{label:'arc',answer:'2pi',accept:['2π']},{label:'sector',answer:'8pi',accept:['8π']}]},
    hint:'Use \(r\theta\) and \(\theta r^2/2\).',explain:'Arc \(=8\pi/4=2\pi\). Sector \(=(\pi/4)64/2=8\pi\).',coach:['Track units: length vs square units.'],
  },
  {
    section:'checkpoint',prompt:'Recognition only: two chords intersect inside the circle. Which operation comes before halving?',
    interaction:{type:'mcq',options:['Add the intercepted arcs.','Subtract far minus near.','Use one arc only.','Double both arcs.'],correct:0},
    hint:'Inside gathers two arcs.',explain:'Inside → half the sum. Outside → half the difference.',coach:['Say the location mnemonic aloud.'],
  },
  {
    section:'checkpoint',prompt:'Chords cross inside; arcs are 86° and 34°. Find the angle.',
    interaction:{type:'fillin',fields:[{label:'angle',answer:'60'}]},hint:'Half the sum.',explain:'\((86+34)/2=60^\circ\).',coach:['Add, then halve.'],
  },
  {
    section:'checkpoint',prompt:'Two tangents meet at P with \(\angle P=42^\circ\). The minor arc is 138°. Find an inscribed angle on that minor arc.',
    interaction:{type:'fillin',fields:[{label:'angle',answer:'69'}]},hint:'Once the arc is known, the tangent setup is finished.',explain:'An inscribed angle on the 138° minor arc is \(138/2=69^\circ\).',coach:['Use the local relation that matches the new vertex.'],
  },
  {
    section:'boss',prompt:'Two circles are tangent at G. Prove \(\angle E=\angle F\).',
    body:'In circle 1, E and angle AGB subtend the same arc. In circle 2, F and angle DGC subtend the same arc. The circles meet through a vertical-angle bridge at G.',
    interaction:{type:'order',items:['Mark \(\angle E=\angle AGB\) from the same arc in circle 1.','Mark \(\angle AGB=\angle DGC\) as vertical angles.','Mark \(\angle DGC=\angle F\) from the same arc in circle 2.','Read the chain \(\angle E=\angle F\).']},
    hint:'Use one same-arc equality in each circle and one fact at G.',explain:'\(\angle E=\angle AGB=\angle DGC=\angle F\). The tangent point is the hinge that lets a vertical pair carry equality from one circle to the other.',
    walkthrough:['Work within the first circle.', 'Cross the intersection at G using vertical angles.', 'Work within the second circle.', 'Chain the three equalities.'],
    note:'The proof is the marked diagram. Equal-angle marks are not decoration; they expose the transitive chain.',coach:['Circle 1 → vertex G → circle 2.'],
  },
]};
