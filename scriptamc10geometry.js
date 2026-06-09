let correctCount = 0;
let wrongCount = 0;
let longestStreak = 0; // also needed for streak logic


function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}


// ---------- Shuffle Function ----------
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const highlight = document.getElementById("highlight");
let streakCount = 0;
let streakEnabled = true;
function showHighlight() {


    // reset
    highlight.style.transition = 'none';
    highlight.style.transform = 'scaleX(0)';
    highlight.style.left = '0';
    highlight.offsetHeight; // force reflow
            // Step 1: expand from left to right
    highlight.style.transition = 'transform 0.3s ease-out';
    highlight.style.transform = 'scaleX(1)';

    // Step 2: slide left edge in to close
    setTimeout(() => {
        highlight.style.transition = 'transform 0.3s ease-in, left 0.3s ease-in';
        highlight.style.transform = 'scaleX(0)';
        highlight.style.left = '100%';
    }, 300);

    // Reset after animation
    setTimeout(() => {
        highlight.style.transition = 'none';
        highlight.style.left = '0';
        highlight.style.transform = 'scaleX(0)';
    }, 700);
}
//------------RefCards----------------
const cardOneText = document.getElementById("carousel-card-one");
const contentCardOne = `
<h2 class="amc10subtitle">Trigonometry</h2>
<p>\\(\\cos\\) is \\(\\frac{adjacent}{hypotenuse}\\) or the \\(x\\) coordinate on a unit circle.</p>
<p>\\(\\sin\\) is \\(\\frac{opposite}{hypotenuse}\\) or the \\(y\\) coordinate on a unit circle.</p>
<p>\\(\\tan\\) is \\(\\frac{opposite}{adjacent}\\) or the slope on the unit circle.</p>
<p>Law of Cosines \\(c^2=a^2+b^2-2ab\\cos(c)\\) </p>
<p>Law of Sines \\(\\frac{a}{sin(a)}=\\frac{b}{sin(b)}\\) </p>
<h3>Unit Circle Identities</h3>
<p>\\(\\cos(\\frac{\\pi}{3})=\\frac{1}{2}\\), \\(\\cos(\\frac{\\pi}{6})=\\frac{\\sqrt{3}}{2}\\), and \\(\\cos(\\frac{\\pi}{4})=\\frac{\\sqrt{2}}{2}\\)</p>
<p>\\(\\sin(\\frac{\\pi}{3})=\\frac{\\sqrt{3}}{2}\\), \\(\\sin(\\frac{\\pi}{6})=\\frac{1}{2}\\), and \\(\\sin(\\frac{\\pi}{4})=\\frac{\\sqrt{2}}{2}\\)</p>
<p>\\(\\tan(\\frac{\\pi}{3})=\\sqrt{3}\\), \\(\\sin(\\frac{\\pi}{6})=\\frac{1}{\\sqrt{3}}\\), and \\(\\sin(\\frac{\\pi}{4})=1\\)</p>
<h3> <span class="material-symbols-outlined">
star_shine
</span>Why is it Important? <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>The AMC 10 preys on hidden simplicity. A lot of answers and diagrms will use these ratios somewhere, simply because the testmakers ALSO need to be able to solve it, so they 
use common identities like these.</p>
`;
cardOneText.innerHTML = contentCardOne;
const cardTwoText = document.getElementById("carousel-card-two");
const contentCardTwo = `
<h2 class="amc10subtitle">Triangles</h2>
<p><b>Median:</b> Connects a vertex of a triangle to the midpoint of the opposite side. Intersects at the <b>centroid</b>. The centroid divides each median into segments with a <b>2:1</b> ratio.</p>
<p><b>Angle Bisector:</b>A line segment that bisects the angle it comes from and ends on the opposite side. They intersect at the <b>incenter</b> which is the center of the triangle's <b>incsribed circle.</b></p>
<p><b>Perpendicular Bisector:</b>perpendicularly bisects a side. The intersection of bisectors <b>circumcenter</b> and is the center of a circle <b>circumscribes the triangle</b>.</p>
<h3>Similar Triangles</h3>
<p>Triangles are similar when they can be mapped onto each other using rigid transformations and dilations.</p>
<h3>Simililarity Rules</h3>
<p><b>\\(AA\\) Similarity:</b> Angle-Angle.</p>
<p><b>\\(SAS\\) Similarity:</b> Side-Angle-Side.
<p><b>\\(SSS\\) Similarity:</b> Side-Side-Side).
<h3> <span class="material-symbols-outlined">
star_shine
</span>Why is it Important? <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Triangles are the basis for EVERYTHING in the AMC 10. They appear in quadrilaterals and especially can be used with angle relations to solve for a lot of values. They
    also have a lot of inherent properties that are very useful, such as the fact that the medians always intersect at a 2:1 ratio, which is something that can be used to find lengths and areas.</p></p>

`;
cardTwoText.innerHTML = contentCardTwo;
const cardThreeText = document.getElementById("carousel-card-three");
const contentCardThree = `
<h2 class="amc10subtitle">Angle Relationships</h2>
<p>When <b>parallel lines</b> are cut by a <b>tranvsversal</b>, the following angle relationships appear:<p>
<h3>Congruent:</h3>
<ul>
<li><b>Alternate Exterior:</b> Two angles on <b>opposite</b> sides of the transversal and <b>outside</b> the parallel lines.</li>
<li><b>Alternate Interior:</b> Two angles on <b>opposite</b> sides of the transversal and <b>inside</b> the parallel lines.</li>
<li><b>Corresponding:</b> Two angles on <b>the same</b> sides of the transversal and <b>the same</b> side of the parallel line they are adjacent to.</li>
<li><b>Vertical</b></li>
</ul>
<h3>Supplementary</h3>
<ul>
<li><b>Same-Side Exterior:</b> Two angles on <b>same</b> sides of the transversal and <b>outside</b> the parallel lines.</li>
<li><b>Same-Side Interior:</b> Two angles on <b>same</b> sides of the transversal and <b>inside</b> the parallel lines.</li>
<li><b>Linear</b></li>
</ul>
<h3> <span class="material-symbols-outlined">
star_shine
</span>Why is it Important? <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Angle relationships are fundamental to solving geometry problems on the AMC 10. Understanding these relationships allows you to find unknown angles and sides in complex figures.</p>

`;
cardThreeText.innerHTML = contentCardThree;
const cardFourText = document.getElementById("carousel-card-four");
const contentCardFour = `
<h2 class="amc10subtitle">Circles</h2>
<p><b>Equation:</b> \\((x-h)^2+(y-k)^2=r^2\\) where \\(h\\) is the center x-coordinate, \\(k\\) is the center y-coordinate, and \\(r\\) is the radius.
<p><b>Inscribed Angle Theorem:</b> Inscribed Angle \\(=\\) Intercepted Arc Angle \\(\\div 2\\)
<h3>Power of A Point</h3>
<p><b>When two chords intersect:</b> the intersection divides each chord into two parts. If you take one chord and find the measurements on either side, the product is equal to the product for the other chord. In other words:
$$
AE \\cdot BE = CE \\cdot DE
$$
<p>Where \\(AB\\) and \\(CD\\) are chords and \\(E\\) is the intersection.</p>
<p><b>When two secants intersect:</b> For each secant, multiply the length of the segment <b>outside</b> the circle and the length of the whole secant. The products for both secants will be equal. This is also known as \\(outside \\cdot whole = outside \\cdot whole\\).
<p><b>When a secant and a tangent intersect:</b> The product of the outside and the whole of the secant is equal to the length of the tangent line.</p>
<h3> <span class="material-symbols-outlined">
star_shine
</span>Why is it Important? <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Circles are very complex and have a lot of properties that can be manipulated in the AMC 10 by testmakers. It is important to know how they relate angles and values in order to succeed and understand a lot of high level questions</p>
`;
cardFourText.innerHTML = contentCardFour;
const cardFiveText = document.getElementById("carousel-card-five");
const contentCardFive = `
<h2 class="amc10subtitle">Coordinate Grid</h2>
<p><b>Tip:</b>If you aren't given a figure to work with on the AMC 10, it is almost always beneficial to start by drawing the shape out. If you want to take it to another level, you can use a coordinate grid to help visualize and best understand the relationships between the shapes </p>
<p><b>I find the coordinate grid to be the most helpful when:</b><p>
<ul>
<li>Calculating distances</li>
<li>Dealin with diagonals</li>
<li>Dealing with complex or multiple shapes</li>
<li>Having to calculate in the context of symmetry (since you can center it around an axis)</p>
</ul>
<h3> <span class="material-symbols-outlined">
star_shine
</span>Why is it Important? <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Even if you don't nescessarily need the coordinate grid for something, it helps to be able to have spatial intelligence and just generally model and understand shapes</p>

`;
cardFiveText.innerHTML = contentCardFive;
// ---------Toggle Button for Questions ----------
const problemsCheckbox = document.getElementById("toggle");
const problemsCard = document.getElementById("problems-card");
const problemsWrapper = document.getElementById("problems-card");
function toggleProblems() {
loadQuestion(currentQuestion)
}
let currentQuestion = 0;


// ---------- Question Data ----------
const confettiCanvas = document.getElementById("confetti-canvas");
const myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
});

let geometryQ = [
    {
        title: `AMC 10A 2025 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: `
<p>A semicircle has diameter \\(\\overline{AB}\\) and chord \\(\\overline{CD}\\) of length \\(16\\) parallel to \\(\\overline{AB}\\). A smaller semicircle with diameter on \\(\\overline{AB}\\) and tangent to \\(\\overline{CD}\\) is cut from the larger semicircle, as shown below. What is the area of the shaded space (Answer in terms of \\(\\pi\\) (e.g. 12pi))?
        `,
        image: "AMC10A2025.png",
        answer: "32pi",
        difficulty: 2,
        solution: `<b>\\(32\\pi\\)</b><p>The key tip of this problem is to make everything as simple as possible. We have virtually no constraints for the size of the smaller semicircle. Thus, we can manipulate it however we want. For us, the simplest solution is to ignore it by making it infitesimally small to the point where it is no longer consequential. The smaller the circle gets, the closer \\(\\overline{CD}\\) or \\(16\\) gets to the diameter. Thus, if we ignore the existence of the semicircle, the diameter becomes 16. It is easy to solve from there, because we're just finding the area of a semicircle with diameter \\(16\\).
        $$
        \\frac{16}{2}=8
        $$
        $$
        8^2=64
        $$
        $$
        \\frac{64}{2}=32
        $$
        $$
        32 \\cdot \\pi = {32\\pi}
        $$
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Make sure to take advantage of the inherent simplicity of the problem. If there's something you can ignore, or if there is extraneous information, just don't ues it.`,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topic: "induction",
    },
    {
        title: `AMC 10A 2025 Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: `
In the figure below, the outside square contains infinitely many squares, each of them with the same center and sides parallel to the outside square. The ratio of the side length of a square to the side length of the next inner square is \\(k\\) where \\(0\\lt k\\lt1\\). The spaces between squares are alternately shaded, as shown in the figure (which is not necessarily drawn to scale). The amount shaded is \\(64\\%\\). What is \\(k\\)? Write your answer as a decimal.
        `,
        image: "AMC10A202513.png",
        difficulty: 3,
        answer: "0.75",
        solution: `<b>0.75</b><p>Since we're only dealing with ratios, we can make the dimension of the larger square whatever we want. If this weren't abour ratios, I would recommend using a variable. However, since the values don't really matter here, we can just use 1, which will make our math the easiest. The areas of the squares are then 1, \\(k^2\\) (since the side lengths are multiplied by k, and then multiplied by each other). Effectively from here on out, the area is \\(k\\) raised to the power of the-xth-largest-square-times-two. Since we know that the shading alternates, and we are solving for the shaded area, we can alternate between adding and subtracting these.</p>
        $$
        1-k^2+k^4-k^6+k^8
        $$
        <p> This is an infinite geometric series. The sum of these is \\(\\frac{a}{1-r}\\) (see alebra page), where \\(a\\) is the first item and \\(r\\) is the common ratio. The geometric series we are dealing with has 1 as a first item and \\(-k^2\\) as a common ratio. Plug this in to get a sum of \\(\\frac{1}{1+k^2}\\)
        Since we know that the area of the first square is 1, we don't have to divide: this is our common ratio, or \\(\\frac{64}{100}\\). Using this, we can solve for \\(k\\)</p>
        $$
        \\frac{1}{1+k^2}=\\frac{64}{100}
        $$
        $$
        100=64+64k^2
        $$
        $$
        64k^2=36
        $$
        $$
        k^2=\\frac{9}{16}
        $$
        $$
        k=\\frac{3}{4}
        $$
        $$
        k=0.75
        $$


`,
topic: "series",
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
        title: `AMC 10A 2025 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: `In the figure below \\(ABEF\\) is a rectangle, \\(\\overline{AD}\\perp\\overline{DE}=7\\), \\(AB=1\\), and \\(AD=5\\). What is the area of \\(\\triangle ABC\\)? Answer as a decimal.
        `,
        image: "AMC10A202515.png",
        answer: "0.375",
        difficulty: 3,
        solution: `<b>0.375</b><p>My first step would be to label everything. In my drawing, I also included that \\(\\angle ACB\\) is equal to angle \\(\\angle ECD\\) by vertical angles. This also means that \\(\\triangle ABC\\) and \\(\\triangle ECD \\) are similar</p><br><img src='AMC10A13S1.png' style='max-width:100%; height:auto;' />
        <p>Next, let's label \\(BC\\) as \\(x\\) so that we can calculate some metric for each other side using the pythagorean theorem, \\(a^2+b^2=c^2\\).</p><br><img src='AMC10A13S2.png' style='max-width:100%; height:auto;' />
        <p>From here, we can use the fact that two triangles are similar to set up two ratios. We know that \\(AC\\) and \\(CE\\) are both hypotenuses to their respective triangles, and that the same is true for \\(CD\\) and \\(BC\\). Using this we can set up a ratio. Also notice that \\(CD\\) is equal to \\(5-sqrt{x^2-1}\\)</p>
        $$
        \\frac{CD}{EC} = \\frac{BC}{CA}
        $$
        $$
        \\frac{5-\\sqrt{x^2-1}}{7-x}=\\frac{x}{\\sqrt{x^2+1}}
        $$
        <p>Solve for x </p>
        $$
        5\\sqrt{x^2+1}-x^2-1=7x-x^2
        $$
        $$
        5\\sqrt{x^2+1}=7x+1
        $$
        $$
        25x^2+25=49x^2+14x+1
        $$
        $$
        24x^2+14x-24=0
        $$
        <p>This is a quadratic, which we can input into the quadratic equation: \\(\\frac{-b^2\\pm\\sqrt{b^2-4ac}}{2a}\\)</p>
        $$
        \\frac{(-14)\\pm\\sqrt{14^2-4(24)(-24)}}{2(24)}
        $$
        $$
        \\frac{-14\\pm50}{48}
        $$
        $$
        \\frac{3}{4}
        $$
        <p>This is the only solution, since the side lengths must be positive. Thus, our side length is \\(\\frac{3}{4}\\). Since the side length is only 1, we can just find the area of the triangle by dividing by 2, which gets us \\(\\frac{3}{8}\\)



        `,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topic: 'similar triangles',
    },
    {
        title: `AMC 10A 2024 Problem 19 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text:"The first three terms of a geometric sequence are the integers \\(a, 720\\) and \\(b\\) where \\(a<720<b\\). What is the sum of the digits of the least possible value of \\(b\\)?",
        used: false,
        difficulty: 4,
        answer: "21",
        solution: `<b>21</b><p>Just because \\(a\\) and \\(b\\) have to be integers doesn't nescessarily mean that \\(r\\), the common ratio, has to be. A common mistake would be to just find the smallest prime factor of \\(720\\) and multiply that, but if we use a smaller ratio, we can minimize \\(b\\) even further.</p>
        <p>\\(r\\) must be greater than \\(1\\) in order to fuffil the rule that \\(a<720<b\\). We can write it as a fraction \\(\\frac{y}{x}) where \\(y>x\\), but \\(y\\) and \\(x\\) are as close as possible without breaking this rule, in order to minimize \\(r\\).</p> 
        <p>Knowing that we want \\(x\\) and \\(y\\) to be close, we can start by finding the integer factors closest to \\(\\sqrt{720}\\). They need \\(x\\) and \\(y\\) to be factors of \\(720\\) because both multiplying and dividing by \\(frac{y}{x}\\) needs to yield an integer, meaning that \\(\\frac{720}{x}\\) and \\(\\frac{720}{y}\\) both need to be integers. We don't know what this is, because it's irrational, but we do know that \\(\\sqrt{625}\\) is \\(25\\). If we square \\(16\\) we get \\(676\\) (iykyk) and squaring \\(17\\) gets us \\(729\\), thus we know that \\(\\sqrt{720}\\) is between \\(16\\) and \\(17\\). We take the prime factorization of \\(720\\) and try to find nearby values. Doing this, we can find \\(16\\) and \\(15\\). This means \\(r\\) can be \\(\\frac{16}{15}\\).</p>
        <p>Multiply \\(720 \\cdot \\frac{16}{15}\\ = 678\\). Now add \\(6+7+8\\) and get a final answer of \\(21\\).</p>
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Read the wording of the quesiton carefully. A common mistake is to just multiply by \\(2\\), because that seems like the smallest thing we can multiply by to get another integer, but don't forget the possibility of multiplying by fractions.</p>`,
        topic: "geometric sequences",
    },
    {
        title: `AMC 10 2020 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `Seven cubes whose volumes are \\(1, 8, 27, 64, 216,\\) and \\(343\\) cubic units are stacked vertically to form a tower in which the volumes of the cubes decrease from bottom to top. Except for the bottom cube, the bottom face
        of each cube lines completely on top of the cube below it. What is the total surface area of the tower, including the bottom, in square units?`,
        type: 'fr',
        solution: `<b></b>First, we know that the bottom has a surface area of \\(\\sqrt[3]{343}^2=49\\) because the side lenghts are \\(7\\) and the bottom is a square. Next,
        we find the surface area of all the sides. Notice each cube has \\(4\\) exposed "sides" (not counting top and bottom). Thus, we just find \\(\\sqrt[3]{x}^2*4\\) for each and add it together</p>
        $$
        \\sqrt[3]{1}^2 \\cdot 4 = 4
        $$
        $$
        \\sqrt[3]{8}^2 \\cdot 4 = 16
        $$
        $$
        \\sqrt[3]{27}^2 \\cdot 4 = 36
        $$
        <p>Notice that these are consecutive squares of even numbers</p>
        $$
        4+16+36+64+100+144+196=560
        $$
        <p>The top is also just \\(49\\), because if we were to look at it top down, it's the same as the bottom</p>
        560+49+49=658
        `,
        answer: '658',
        topic: 'surface area',
    },
    {
        title: `AMC 10A 2020 problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: 'Triangle \\(AMC\\) is isoceles with \\(AM = CM\\). Medians \\(\\overline{MV}\\) and \\(\\overline{CU}\\) are perpendicular to each other, and \\(MV\=CU=12\\). What is the area of \\(\\triangle AMC\\)?',
        image: "amc10202012.png",
        solution: `<b>96</b><p>By median theorem, we know that \\(\\overline{PC} = 2\\overline{UP}\\) and \\(\\overline{MP}=2\\overline{VP}\\) and also that \\(\\overline{PC}+\\overline{UP}=\\overline{MP}+\\overline{VP}=12\\).</p>
        <p>Solving gives us \\(\\overline{PC}=\\overline{MP}=8\\) and \\(\\overline{UP}=\\overline{VP}=4\\)</p>
        <p>If we remove \\(\\overline{UV}\\) and add a median between vertex \\(A\\) and line \\(\\overline{MC}\\) we can divide the triangle into \\(6\\) triangles of equal area.</p>
        <p>Since we already know the dimensions of one of these triangles, we find the area and then multiply by \\(6\\) to find the area of \\(\\triangleAMC\\)</p>
        $$
        4 \\cdot 8 =32
        $$
        $$
        \\frac{32}{2} \\cdot 6= 96
        $$
        `,
        answer: '96',
        topic: 'triangle lines',

    },
    {
     title: `AMC 10A 2020 Problem 19 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
     used: false,
     difficulty: 4,
     text: `As shown in the figure below, a rectangular dodecahedron (the polyhedron consisting of \\(12\\) congruent rectangular pentagonal faces) floats in space with two horizontal faces. Note
     that there is a ring of five slanted faces adjacent to the top face, and a ring of five slanted faces adjacent to the bottom face.How many ways are there
     to move from the top face to the bottom face via a sequence of adjacent faces so that each face is visited at  most once and moves are not permitted from the bottom ring to the top ring.</p>`,
     image: "amc10202019.png",
     solution: `<b>810</b>Your first move gives you \\(5\\) choices to go to. If you continue going around the top, you can go in \\(2\\) directions, with each direction having \\(3\\) possibilites of where you stop. We can also go straigt down, which adds another possibilityThere are
     \\(5 \\cdot 3\\ cdot 3= 45\\) ways to go through the top row. After that, there are \\(2\\) different plcaes to start the bottom ring at. After this, it's just the same \\(3 \\cdot 3\\), which means \\(2 \\cdot 3 \\cdot 3\\) or \\(18\\) ways to complete bottom row. 
     \\(18 \\cdot 45 = 810\\)</p>
     <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
     <p>Don't waste time counting how many ways you can go. Not only is it a waste of time and difficult to keep track of, you should be able to tell by the answer choices that it just isn't convenient. Instead, blend probability and counting into geometry to optimize your answer.</p>
     `,
     type: 'mc',
     choices: ['\\(A) 125\\)', '\\(B) 250\\)', '\\(C) 405\\)', `\\(D) 640\\)`, '\\(E) 810\\)'],
     answer: '\\(E) 810\\)',
     topic: 'counting',
    },
    {
        title: `AMC 10A 2020 Problem 20 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `Quadrilateral \\(ABCD\\) satisfies \\(\\angle ABC = 90^\\circ\\), \\(AC = 20\\), and \\(CD = 30\\).
        Diagonals \\(\\overline{AC}\\) and \\(\\overline{BD}\\) intersect at point \\(E\\) and \\(AE = 5\\). What is the area of quadrilateral \\(ABCD\\)?`,
        solution: `<b></b><p>I just wanted to point out that the first thing I personally noticed was that \\(ABCD\\) is NOT a rectangle so we can't force simplify. This is because, had it been a rectangle, we could split it into two right triangles, but \\(AE\\) is not long enough to be the hypotenuse.</p>
        <p>We start by drawing a diagram and labeling what we know. We know that \\(\\triangle ABC\\) is a right triangle with hypotenuse \\(\\overline{AC}=20\\). We also know that \\(\\triangle ACD\\) has legs \\(30\\) and \\(20\\) for a total rea
        of \\(300\\). We only need the area of \\(\\triangle ABC\\)</p>
        <p>By the answer choices, we know that \\(\\triangle ABC\\)'s area has to be \\(30, 40, 50, 60 \\) or \\(70\\).</p>
        <p>Drawing a line vertically downwards from \\(E\\) to a point that we'll call \\(F\\) gives a triangle \\(\\triangle CEF\\) that is similar to \\(\\triangle CAB\\). We know that the hypotenuse of 
        \\(\\triangle CEF = 20-15= 5\\). The hypotenuse of \\(\\triangle CAB = 20\\) so the ratio is \\(\\frac{15}{20}=\\frac{3}{4}\\). Call \\(\\overline{AB}\\) \\(a\\) and \\(\\overline{BC}\\) \\(b\\). We know,
        by the pythagorean theorem, that \\(a^2+b^2=400\\). We also know that \\(\\frac{3a}{4}^2+\\frac{3b}{4}^2=225\\). We also see a right triangle produced by \\(\\triangle FEB\\) with \\(\\overline{FB}=\\frac{b}{4}\\) and hypotenuse \\(\\overline{EB}=\\sqrt{\\frac{3a}{4}^2+\\frac{b}{4}^2}\\), or \\(\\frac{\\sqrt{9a^2+b^2}}{4}=\\frac{\\sqrt{8x^2+400}}{4}\\) (by substituting) \\(\\frac{\\sqrt{2x^2+100}}{2}\\)</p>
        <p>Keep solving for \\(a\\) and \\(b\\) to find \\(\\triangle ABC=60\\) for a total area of \\(360\\)</p>`,
        answer: `\\(D) 360\\)`,
        type: 'mc',
        choices: ['\\(A) 300\\)', '\\(B) 320\\)', '\\(C) 340\\)', `\\(D) 360\\)`, '\\(E) 370\\)'],
        topic: 'composite shapes',
    },
    {
        title: `AMC 10A 2020 Problem 23 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 5,
        text: `Let \\(T\\) be the triangle with verticies at \\((0,0), (4,0)\\) and \\((0,3)\\). Consider the following five isometries (rigid transformations) of the plane:
        rotations of \\(90^\\circ, 180^\\circ\\), and \\(270^\\circ\\) about the origin and reflections across the \\(x\\) and \\(y\\) axis. How many of the \\(125\\) sequences of three of these transformations
        (not nescessarily distinct) will return \\(T\\) to its original position? (For example a \\(180^\\circ\\) rotation, followed by a reflection across the \\(x-axis\\), and followed by a
        reflection across the \\(y\\)-axis will return \\(T\\) to its original position but a \\(90^\\circ\\) rotation followed by a reflection across the \\(x\\)-axis, followed by another reflection across the
        \\(x\\)-axis will not return \\(T\\) to its original position.) `,
        type: 'mc',
        choices: ['\\(A) 12\\)', '\\(B) 15\\)', '\\(C) 17\\)', '\\(D) 20\\)', '\\(E) 25\\)' ],
        answer: "\\(A) 12\\)",
        solution: `<b>12</b><p>Let's start by setting a few clear rules nad guidelines, then we'll procede to use casework:</p>
        <p>First, we know that two reflections over the same axis will return \\(T\\) to the original position. This can't happen, because that would mean we only have on turn left, which would take it back off the origin</p>
        <p>The same can be said about two rotations of \\(180^\\circ\\).</p>
        <p>If we use ONLY rotations, we know that the sum of the angles of the rotations must be some multiple of \\(360\\). This can only occur in \\(2\\) ways (discounting order), being \\(90, 90, 180\\) and \\(270, 270, 180\\). We can confirm this
        with some modular arithmetic, but I won't get into that. Since two of the tranformations are the same, there are only \\(3\\) ways to order them, so there are \\(6\\) ways to get \\(T\\) back to the ORIGIN using ONLY rotations.</p>
        <p>Next, let's consider a situation where we use \\(1\\) reflection</p>
        <p>Some quick casework shows that this is impossible, since you can't isolate and get the one variable that you make negative back to being positive without switching them and switching back, which would then get the other variable negative.</p>
        <p>Now, we use \\(2\\) transformations. We've already proved that they can't be of the same type, so we have one reflection over the \\(x\\) axis and one over the \\(y\\) axis. This leaves us with \\((-x,-y)\\), which we can get back to \\((x,y)\\) by a rotation of 
        \\(180^\\circ\\). With \\(3\\) distinct transformations, we can order it in \\(3!=6\\) ways. Thus, there are \\(6+6=12\\) solutions.`,
        topic: 'transformations',
    },
    {
        title: `AMC 10B 2020 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficutly: 1,
        text: `Carl has \\(5\\) cubes of sidelenght \\(1\\), and Kate has \\(5\\) cubes of side length \\(2\\). What is the total volume of the \\(10\\) cubes?`,
        type: 'fr',
        answer: '45',
        solution: '<b>45</b><p>The area of a cube is equal to the side length cubed. Thus, we cube the side lengths to get that the cubes have volumes of \\(1\\) and \\(8\\), respectively. We multiply these by \\(5\\) and add them to get \\(5+40=45\\)',
        topic: 'volume',
    },
    {
        title: `AMC 10B 2020 Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `<p>The acute angles of a right triangle are \\(a^\\circ\\) and \\(b^\\circ\\), where \\(a > b\\) and both \\(a\\) and \\(b\\) are prime numbers. What is the least possible value of \\(b\\)?`,
        type: "mc",
        choices: ["\\(A) 2\\)", "\\(B) 3\\)", "\\(C) 5\\)", "\\(D) 7\\)", "\\(E) 11\\)"],
        solution: `<b>7</b><p>We are looking for the smallest number \\(b\\) such that \\(90-b\\) is prime. We know, just by pure logic, that \\(b\\) can't be \\(2\\) or \\(5\\), because the prior would make \\(a\\) even and the latter would make \\(a\\) a multiple of \\(5\\). We try the remaining answers:</p>
        <p>\\(90-3=87\\) is not prime because we know by the divisiblity rule of \\(3\\) that \\(8+7=15\\) which is divisible by \\(3\\), thus \\(87\\) is divisible by \\(3\\)</p>
        <p>\\(90-7=83\\). We can run a few divisiblity checks, and as far as we can see, it's a prime number. Thus, our answer is \\(7\\).`,
        answer: "\\(D) 7\\)",
        topic: 'prime numbers',
    },
    {
        title: `AMC 10B 2020 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `A three quarter section of a circle of radius \\(4\\) inches together with its interior can be rolled up to form the lateral surface area of a right circular cone by taping together along the two radii shown. 
        What is the volume of the cone in cubic inches?`,
        type: 'mc',
        choices: ["\\(A) 3\\pi \\sqrt{5}\\)", "\\(B) 4\\pi \\sqrt{3}\\)", "\\(C) 3 \\pi \\sqrt{7}\\)", "\\(D) 6 \\pi \\sqrt{3}\\)", "\\(E) 6 \\pi \\sqrt{7}\\)"],
        solution: `<b>3 \\pi \\sqrt{7}</b><p>We know that the new cone will have a circumfrence equal to \\(\\frac{3}{4}\\) the circumfrence of a circle with radius \\(4\\), and that the diagonal height will be \\(4\\). We start with the circumfrence.</p>
        <p>\\(4 \\cdot 2 \\cdot \\pi \\) = \\(8\\pi\\)</p>
        <p>\\(\\frac{8 \\cdot 3}{4} \\pi= \\6 \\pi\\)</p>
        <p>The circle with circumfrence \\(6 \\pi\\) has radius \\(\\frac{6 \\pi}{2 \\pi} = 3\\). It has a height of \\(3^2+x^2=4^2\\), which resolves down to \\(\\sqrt{7}\\). We now have enough to solve for the volume:</p>
        $$
        3^2 \\cdot \\pi \\cdot \\sqrt{7} \\cdot \\frac{1}{3}
        $$
        $$
        3 \\pi \\sqrt{7}
        $$ `,
        answer: "\\(C) 3 \\pi \\sqrt{7}\\)",
        topic: "volume",

    },
    {
        title: `AMC 10B 2020 Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `Andy the Ant lives on a coordinate plane and is currently at \\(-20,20\\) facing east (that is, in the positive \\(x\\) - direction). Andy moves 
        \\(1\\) unit and then turns \\(90^\\circ \\) left. He then moves \\(2\\) units (north) and then turns \\(90^\\circ\\) 
        left. He then moves \\(3\\) units (west) and again turns \\(90^\\circ \\) left. Andy continues his progress, increasing his distance each time 
        by \\(1\\) unit and always turning left. What is the location of the point which andy makes the \\(2020\\)th left turn?`,
        type: 'mc',
        choices: ["\\(A) (-1030,-994)\\)", "\\(B) (-1030,-990)\\)", "\\(C) (-1026.-994)\\)", "\\(D) (-1026,-990)\\)", "\\(E) (-1022, -994)\\)"],
        solution: `<b>\\((-1030, -990)\\)</b><p>Every \\(4\\) moves, Andy ends up facing up and havin just moved right.However, this only starts after the first move to the right.  For every one of these cycles, the 
        final coordinate ends up \\(2\\) to the rleft and \\(2\\) down. We know that the cycles occur \\(\\frac{2020-1}{4}\\) times, which is \\(504.75\\). In other words, the cycles repeat \\(403\\) times
        and with \\(3\\) extra turns. The change before the \\(3\\) extra turns is equal to \\(-2 \\cdot 504\\).</p>
        <p>Following these, we know that the new coordinates are \\((-1028, -988)\\). We're not done yet, though. We still need to add the last \\(3\\) turns, which have lengths of \\(2020,2019\\)and \\(2018\\).</p>
        <p>We don't nescessarily hvae to add everything, especially for the vertical moves. We know that ther's generally a net change of \\(2\\) units downwards, so the new \\(y\\) coordinate is \\(-990\\). </p>
        <p>For the horizontal direction, we add another move of \\(2\\) to the left for a new and final location of \\((-1030, -990)\\)`,
        answer: "\\(C) (-1026.-994)\\)",
        topic: 'series',
    },
    {
        title: `AMC 10B 2020 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `As shown in the figure below, six semicircles lie in the interior of a rectangular hexagon with side length \\(2\\) so that the diameters of the semicircles coincide with the sides of the hexagon.
        What is the area of the shaded region - inside the hexagon but outside all of the semicircles?`,
        type: 'mc',
        choices: ['\\(A) 6\\sqrt{3}-3\\pi\\)', '\\(B) \\frac{8\\sqrt{3}}{2}-2\\pi\\)','\\(C) \\frac{3\\sqrt{3}}{2}-\\frac{\\pi}{3}\\)', '\\(D) 3\\sqrt{3} - \\pi\\)', '\\(E) \\frac{9\\sqrt{3}}{2}-\\pi\\)'],
        image: "amc10202014.png",
        solution: `<b>\\(A) 6\\sqrt{3}-3\\pi\\)</b><p>We start by finding the total area of the hexagon. This is a lot easier if you know the area of a hexagon, but a lot of us won't have that tidbit of information memorized, so let's derive it</p>
        <p>First off, a regular hexagon is composed of \\(6\\) equilateral triangles, in this case of side length \\(2\\). Once again, if you know the area of an equilateral triangle, that will make things easier, but here's a quick rundown:</p>
        <p>An equilateral triangle hsa \\(2\\) right triangles in it, with the longest leg being the height. We know, by the pythagorean theorem that \\(1^2+b^2=2^2\\) so \\(b=\\sqrt{3}\\). We find that the area is equal to \\(\\sqrt{3}\\), for a total
        hexagonal area of \\(6\\sqrt{3}\\).</p>
        <p>We can't just find the area of all the semicircles and erase, however, because they overlap and the overlaping shape would be, frankly, a pain to find the area of. </p>
        <p>We can, however, divide the semicircle into parts. If we were to draw a line through the two points on each overlap, we're left with a few trapezoids with rounded tops. If we draw another two lines, from the top points of the trapezoid, we end up with \\(2\\) equilateral triangles
        and a section of a circle. These triangles have side lengths \\(1\\) for areas of \\(\\frac{\\sqrt{3}}{4}\\). There are \\(12\\) of these for a combined area of \\(3\\sqrt{3}). The segments of circles have angles of \\(60\\) degrees, meaning they are all \\(\\frac{1}{6}\\) of a circle. We don't have to worry
        too much about this, though, because there are \\(6\\) anyways. They all have radius of \\(1\\) for a combined area of \\(pi\\). Thus, the total area is \\(6 \\sqrt{3}-3\\sqrt{3}-\\pi). 
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Don't give up because you don't know a certain formula, like the area of a hexagon. You can always use preexisting knowledge and logic to derive it, like we did in the example.</p>`,
        answer: `\\(A) 6\\sqrt{3}-3\\pi\\)`,
        topic: `hexagons`,
    },
    {
        title: `AMC 10B 2020 Problem 20 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 4,
        used: false,
        text: `Let \\(B\\) be a right rectangular prism (box) with edges lengths \\(1, 3\\) and \\(4,\\) together with its interior. For
        real \\(r \\ge 0\\), let \\(S(r)\\) be the set of points in \\(3\\) -dimensional spcae that lie within a distance \\(r\\) of some point in \\(B\\).
        The volume of \\(S(r)\\) can be expressed as \\(ar^3+b^2+cr+d\\) where \\(a, b, c\\) and \\(d\\) are positive real numbers. What is \\(\\frac{bc}{ad}\\)</p>`,
        type: 'mc',
        choice: ['\\(A) 6\\)', '\\(B) 19\\)', '\\(C) 24\\)', '\\(D) 26\\)', '\\(E) 38\\)'],
        solution: `<b>19</b><p>Let's first try to digest exactly what this means</p>
        <p>This took me a while to fully understand, but essentially, we're finding the volume of a shape where the boundaries are all \\(r\\) units away from the edges and faces of \\(B\\). If you want to draw this out, it looks like a rounded rectangular prism</p>
        <p>We can work backwards, because that's what is most simple. \\(d\\) is a constantthat doesn't depend on \\(r\\). Thus, it must be the unchanging area of \\(B\\) which is \\(1 \\cdot 3 \\cdot 4 = 12\\).</p>
        <p>\\(c\\) uses \\(r\\) which tells us that there is something with a dimension of \\(r\\). We can interpret this as the extension of the faces. If you don't get why, try drawing it out. Each of the extensions will have a volume of \\(r \\cdot\\) the lengths of the adjacent edges. Since there are 
        two of each, we know that we have to double all so we end up with \\(c=2((1 \\cdot 3)+(3 \\cdot 4)(4 \\cdot 1))=38\\)</p>
        <p>With \\(b\\) we're dealing with \\(r^2\\). Assuming there are no squares, we see that \\(r^2\\) is, however, used in the equation for an area of a circle or the volume of a cylinder. We know that there are quarter cylinders on each edge, \\(12\\) total. Since there are \\(3\\) types and \\(4\\) of each, we don't
        bother much with the quarters and just find the volumes. We know the radius is \\(r^2\\) so we know that \\(b\\) is really just \\(\\pi+3\\pi+4\\pi=8\\pi\\)</p>
        <p>Finally, \\(a\\) must be tied to the only remaining parts, the \\(\\frac{1}{8}\\) spheres on each corner. These all have radius \\(r\\) so \\(a=\\frac{4}{3}\\pi\\)</p>
        <p>Now that we have everything, we just find the ratio:</p>
        $$
        \\frac{38 \\cdot 8\\pi}{\\frac{4}{3}\\pi \\cdot 12} =19
        $$
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Don't be afraid to draw things. It can help save time and make it easier to conceptualize nuanced problems like these</p>`,
        answer: '\\(B) 19\\)',
        topic: 'composite shapes',
    },
    {
        title: `AMC 10B 2020 Problem 21 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 5,
        used: false,
        text: `In square \\(ABCD\\), points \\(E\\) and \\(H\\) lie on \\(\\overline{AB}\\) and \\(\\overline{DA}\\), respectively, so that \\(AE=AH\\). Points
        \\(F\\) and \\(G\\) lie on \\(\\overline{BC}\\) and \\(\\overline{CD}\\), respectively, and points \\(I\\) and \\(J\\) lie on \\(\\overline{EH}\\) so that 
        \\(\\overline{FH} \\perp \\overline{EH}\\) and \\(\\overline{GJ} \\perp \\overline{EH}\\). See the figure below. Triangle \\(AEH\\), quadrilateral \\(BFIE\\), quadrilateral
        \\(DHJG\\) and pentagon \\(FCGJI\\) each has an area \\(1\\). What is \\(FI^2\\)?`,
        solution: `<b>\\(8-4\\sqrt{2}\\)</b><p>We can add the areas of the shapes inside to find that the total area is \\(4\\) for side lengths of \\(2\\). Since \\(AE = AH\\), and the area of the triangle formed by them is 
        \\(1\\), they must have lenghts of \\(\\sqrt{2}\\)</p>
        <p>Going back to our question, we know that we're solving for \\(FI^2\\). We can iterpet this in a number of ways. It could be the area of a square with side length \\(FI\\), or \\(FI\\) could be a leg of a right triangle. let's use the latter.</p>
        <p>We extend \\(CB\\) and \\(HE\\) until they meet and effectively ignore line \\(EB\\) for now. We are left with a right triangle with legs \\(FI\\) and \\(I...\\) until the intersection. Let's cal the intersection \\(K\\) from now on. We want \\(\\angle K\\) to be something pretty simple
        so that we can solve the rest of the triangle.</p>
        <p>By drawing a line through \\(GF\\) we get right \\(\\triangle GCF\\). The two acute angles MUST be equal to \\(45\\) degrees because they must be complementary  and \\(\\triangle FIK). We can prove that they are both \\(45^\\circ\\) by making linear pairs and filling out the other angles in the given triangles, then using similarity theorems (not going to go into all of it here)</p>
        <p>We can then find the area of \\(\\triangle EKB\\) to be \\(3-\\sqrt{2}\\) because it has side lengths of \\(2-\\sqrt{2}\\) and then add that to \\(1\\) because we already have the area of \\(FIEB\\). The total area of \\(\\triangle FIK\\) is \\(4-2\\sqrt{2}\\). \\(FI^2\\) is just this times \\(2\\) for an answer of \\(8-4\\sqrt{2}\\)`,
        choices: ['\\(A) \\frac{7}{3}\\)', '\\(B) 8-4\\sqrt{2}\\)', '\\(C) 1+\\sqrt{2}\\)', '\\(D) \\frac{7}{4}\\sqrt{2}\\)', '\\(E) 2\\sqrt{2}\\)'],
        answer: '\\(B) 8-4\\sqrt{2}\\)',
        topic: 'composite shapes',
    },
    {
        title: `AMC 10A 2021 Spring Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `Two right circular cones with verticies facing down as shown in the figure below contain the same amount of liquid. The radii of the tops of the liquid surfaces are \\(3\\) cm and \\(6\\) cm. Into
        each cone is droppeed a spherical marble of radius \\(1\\) cm, which sinks to the bottom and is completely submerged without spilling any liquid. What is the ratio of the rise of the liquid level in the narrow
        cone to the rise of the liquid level in the wide cone?`,
        type: 'mc',
        choices: ["\\(A) 1:1\\)", "\\(B) 47:43\\)", "\\(C) 2:1\\)", "\\(D) 40:13\\)", "\\(E) 4:1\\)"],
        solution: `<b>4</b><p>The following solution is what we would call a fakesolve or 'cheese' where you get the right answer through somewhat shady logic. That being said, it works, and it was the first thing I thought of, so I suppose it's ok for me:</p>
        <p>The radius of the wider cone is 2x the other. We know that the area of a circle is \\(r^2 pi\\) and we multiply that by height and \\(\\frac{1}{3}\\) for a cone. We don't nescessarily need to do much but find how much of an effect the radius has. We simply input \\(3^2\\) and \\(6^2\\) to find that \\(9 \\cdot 4 = 36\\) for a ratio of 
        \\(4:1\\)</p>`,
        answer: `\\(E) 4:1\\)`,
        topic: 'volume relationships',
    },
    {
        title: `AMC 10A 2021 Spring Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: 'What is the volume of a tetrahedron \\(ABCD\\) with edge lengths \\(AB=2, AC=3, AD=4, BC=\\sqrt{13}, BD=2\\sqrt{5}\\), and \\(CD=5\\)?',
        type: 'fr',
        solution: `<b>4</b><p>The first thing I want to clarify: a tetrahedron is like a pyramid with a triangular base. Now that that's cleared, the first thing I noticed as that \\(AC, AD\\) and \\(CD\\) form a right triangle by being a pythagorean triple.
        A bit more calculation and we see that \\(AB, AC\\) and \\(BC\\) is also a right triangle and \\(AB, AD\\) and \\(BD=2\\sqrt{5}\\). Now, let's try to draw it out and connect the sides that are right triangles</p>
        <p>I used \\(\\triangle ACD\\) as the base, simply because I found the integers would probably be the best to work with. We know the height is equal to \\(AB\\), or \\(2\\) and then procede to use the formula for volume of a pyramid. Since the \\(\\frac{1}{2}\\) and \\(\\frac{1}{3}\\) cancel with \\(2\\) and \\(3\\), we just end up with \\(4\\)</p>`,
        answer: '4',
        topic: 'pyramids',
    },
    {
        title: `AMC 10A 2021 Spring Problem 17 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `Trapezoid \\(ABCD\\) has \\(\\overline{AB} || \\overline{CD}, BC = CD = 43\\), and \\(\\overline{AD} \\perp \\overline{BD}\\). Let
        \\(O\\( be the intersection of the diagonals \\(\\overline{AC}\\) and \\(\\overline{BD}\\) and let \\(P\\) be the midpoint of \\(\\overline{BD}\\). Given that
        \\(OP=11\\), the length \\(AD\\) can be written in the form \\(m\\sqrt{n}\\), where \\(m\\) and \\(n\\) are positive integers and \\(n\\) is not divisible by the square of any prime. What is \\(m+n\\)?`,
        solution: `<b></b><p>Start by drawing a basic diagram. Basic logic tels us that \\(D\\) and \\(B\\) are obtuse so we draw an odd kite shape that is resting on \\(DC\\). Call the angle at \\(A\\) \\(x\\). Since \\(\\triangle ABD\\) is right,
        \\(\\angle ABD\\) is \\(90-x\\). By alternate interior, \\(BDC\\) is also equal to this, and by isoceles triangle theorem, as is \\(DBC\\). \\(C\\) is equal to \\(2x\\). This gives us similar triangles \\(\\triangle ABD ~ \\triangle DPC ~ \\triangle BPC\\) and \\(\\triangle DOC ~ \\triangle DOA\\).</p>
        <p>Since \\(P\\) is the midpoint of \\(BD\\), \\(\\triangle BPC = \\frac{1}{2} \\triangle BDA\\). Thus, \\(BA = 86\\) and, by the same logic, \\(DO=22\\). We can then find that \\(BD = 66\\) so by pythagorean theorem, \\(AD=4\\sqrt{190}\\).\\(4+190=194\\).`,
        answer: '194',
        topic: 'similar triangles',
    },
    {
        title: `AMC 10A 2021 Spring Problem 21 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 5,
        text: `Let \\(ABCDEF\\) be an equiangular hexagon. The lines \\(AB\\), \\(CD\\), and \\(EF\\) determine a triangle with area \\(192\\sqrt{3}\\), and the lines \\(BC\\), \\(DE\\), and \\(FA\\) determine a triangle with area 
        \\(192\\sqrt{3}\\), and the lines \\(BC\\), \\(DE\\), and \\(FA\\) determine a triangle with area \\(324\\sqrt{3}\\). The perimeter of hexagon \\(ABCDEF\\) can be expressed as \\(m+n\\sqrt{p}\\), where \\(m, n\\) and \\(p\\) are positive integers and \\(p\\) is not divisible by the square of any prime. What is \\(m+n+p\\)?`,
        answer: '55',
        solution: `<b>55</b><p>We know the hexagon is equiangular so each interior angle measures \\(120^\\circ\\) degrees.</p>
        <p>These angles make straight angles with \\(60^\\circ\\) degree angles such that if you extend two lines and skip the one in the middle (e.g. \\(BC\\) and \\(AF\\)) you get an equiangulateral triangle.</p>
        <p>Continuing this logic gives that both triangles are equilateral. We use the formula for the area of a triangle, \\(\\frac{\\sqrt{3}}{4}s^2\\) to find that the side lengths are equal to \\(36\\) and \\(16\\sqrt{3}\\)</p>
        <p>We note that if we were to add all the line segments that get extended to form sides of the triangle, they will equal one side length. Thus, the perimeter is equal to \\(36+16\\sqrt{3}\\) for \\(m+n+p=36+16+3=55\\)`,
        topic: `hexagons`,
    },
    {
        title: `AMC 10B 2021 Spring  Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `In a plane, four circles with radii \\(1, 3, 5,\\) and \\(7\\) are tangent at line \\(l\\) at the same point \\(A\\) but they may be on either side of \\(l\\). Region \\(S\\) consists of all the 
        points that lie insie exactly one of the four circles. What is the maximum possible area of region \\(S\\)?`,
        answer: '\\(D) 65\\pi\\)',
        solution: `<b>\\(65\\pi\\)</b><p>We know that we HAVE to nest circles, it's just a matter of which. We can remove the amount of space that is excluded by nesting the circle of 
        radius \\(1\\) in the circle of radius \\(3\\). Then, we nest in one of the bigger circles. It's not intuitively obvious, at least not to me, which to use, so we just do some simple casework:</p>
        <p>Case 1: we nest it in the larger circle</p>
        $$
        7^2\\pi-3^2\\pi=40\\pi
        $$
        $$
        40\\pi+25\\pi=65\\pi
        $$
        <p>Case 2: We nest it in the smaller circle</p>
        $$
        5^2\\pi-3^2\\pi=16\\pi
        $$
        $$
        7^2\\pi+16\\pi  = 65\\pi
        $$
        <p>It's the same regardless, so we have our final answer of \\(65\\pi\\) `,
        type: 'mc',
        choices: ['\\(A) 24\\pi\\)', '\\(B) 32\\pi\\)', '\\(C) 64\\pi\\)', '\\(D) 65\\pi\\)', '\\(E) 84\\pi\\)'],
        topic: 'optimization',
    },
    {
        title: `AMX 10B 2021 Spring Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `The point \\(P(a,b)\\) in the \\(xy\\) plane is first rotated counterclockwise by \\(90^\\circ\\) around the point \\((1,5)\\) and then reflected about the line \\(y=-x\\). The image of 
        \\(P\\) after these two transformations is at \\((-6,3)\\). What is \\(b-a\\)?`,
        type: 'fr',
        topic: 'transformations',
        solution: `<b>7</b><p>The process here is to work backwards. There's quite a few ways to get the correct answer, so I'll just outline the general process.</p>
        <p>First, reflect \\((-6,3)\\) over line \\(y=-x\\). You could do this in a few ways, either by drawing it out, or deriving the function with the knowledge that for line \\(y=x\\) you transform \\((y,x)\\). Whatever the case,
        the new point we end up with is \\((-3,6)\\).</p>
        <p>Rotating around a non-origin point is difficult because there's no rule for it. We can however, translate both points so that the point we are rotating about, \\((1,5)\\) is situated at the origin. This makes our new point
        \\((-4,1)\\). We then rotate this  \\(90^\\circ\\) clockwise for \\((1,4)\\). We reverse the translation and get \\(P(2,9)\\). With this, we subtract \\(2\\) from \\(9\\) to get \\(7\\).</p>`,
        answer: '7',
    },
    {
        title: `AMC 10B 2021 Spring Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `An inverted cone with base radius \\(12\\)cm and height \\(18\\)cm is full of water. The water is poured into a tall cylinder whose horizontal base has a radius of \\(24\\) cm. What is the height in centimeters of the water in the cylinder?`,
        type: 'fr',
        solution: '<b>1.5</b><p>The volume of the water in the cone is \\(12^2 \\cdot \\pi \\cdot 18 \\ cdot \\frac{1}{3} = 864\\pi\\). We divide this by \\(24^2\\pi=576\\pi\\) for a final answer of \\(1.5\\)</p>',
        answer: '1.5',
        topic: 'volume',
    },
    {
        title: `AMC 10B 2021 Spring Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `Grandma has just finished baking a large rectangular pan of brownies. She is planning to make rectangular pieces of equal size and shape, with straight cuts parallel to the sidesof the pan. 
        Each cut must be made entirely acros the pan. Grandma wants to make the same number of interior pieces as pieces along the perimeter of the pan. What is the greatest possilbe number of brownies she can produce?`,
        solution: `<b60></b><p>We know that half of the pieces of the brownies are on the interior, and the other half are on the exterior. We can make a whole complex expresion for both, but instead, we can just figure that, with dimensions \\(x\\) and \\(y\\), the interior \\((x-2)(y-2)=\\frac{xy}{2}\\). 
        We then solve for integer values \\(x\\) and \\(y\\):</p>
        $$
        2(x-2)(y-2)=xy
        $$
        $$
        2xy-4x-4y+8=0
        $$
        $$
        2xy-2x-2y+4=xy
        $$
        $$
        xy-4x-4y+8=0
        $$
        $$
        x(y-4)-4y+8=0
        $$
        $$
        x(y-4)-4y+16=8
        $$
        $$
        x(y-4)-4(y-4)=8
        $$
        $$
        (x-4)(y-4)=8
        $$
        <p>The potentials pairs are \\((5,12)\\) and \\((6,8)\\)</p>
        <p>Try both of these to get \\(60\\) or \\(48\\), with the prior being larger</p>
   `,
   answer: '60',
   topic: 'optimization',
    },
    {
        title: `AMC 10B Spring 2021 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `Three equally spaced parallel llines intersect a circle, creating three chords of lengths \\(38\\), \\(38\\), and \\(34\\). What is the distance between two adjacnet parallel lines?`,
        answer: '6',
        type: 'fr',
        solution: `<b>6</b><p>The two longest chords must be of equal distance  from the diameter that is parallel to the lines. We'll call this distance \\(x\\).</p>
        <p>It then follows that the distance between two lines is \\(2x\\). If we draw a line from the center of the rectangle to the points in which the chords intersect the circle and a line perpendicular to the parallel lines, we
        have two right triangles. The first has points at the center, the midpoint of the chord with length \\(34\\) and the intersection between that chord and the circle. It has side lengths \\(3x\\) and \\(\\frac{34}{2}=17\\) and a hypotenuse equal to the radius \\(r\\).</p>
        <p>The second has the same sort of points, but on the chord with length \\(38\\) for legs \\(x\\) and \\(19\\) and, once again, hypotenuse \\(r\\). We use the pythagorean theorem, and since both the hypotenuses are equal, we can set them to be equal to eachother.</p>
        $$
        9x^2+289=x^2+361
        $$
        $$
        8x^2=72
        $$
        $$
        x^2=9
        $$
        $$
        x=3
        $$
        <p>Recall that we are looking for \\(2x\\) for a final ansewr of \\(6\\)</p>`,
        topic: 'power of a point',
    },
    {
        title: `AMC 10B 2021 Spring 2021 Problem 20 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 4,
        used: false,
        text: 'The figure is constructed from 11 line segments, each of which has length \\(2\\). The area of pentagon \\(ABCDE\\) can be written as \\(\\sqrt{m}+\\sqrt{n}\\) where \\(m\\) and \\(n\\) are positive integers. What is \\(m+n\\)?',
        image: 'amc10202120.png',
        solution: `<b>23</b><p>We break \\(ABCDE\\) into \\(3\\) triangles by drawing lines through \\(AC\\) and \\(DE\\), then ignoring all other lines except for those and the perimeter.</p>
        <p>We know that the area of an oblique triangle can be expressed as \\(\\frac{1}{2} \\sin(C) ab\\) where \\(C\\) is the included angle. We already know \\(a\\) and \\(b\\) to be \\(2\\). Since we know that there are some
        quilateral triangles 'embeded' into the pentagon (one point is not labeled and I don't want to name them for the sake of one simple explanation), and those have \\(60\\) degrees, \\(\\angle ABC\\) has two adjacent angles of these, so we 
        know that \\(\\angle ABC = 120^\\circ\\). Thus, by the double angle identity (or honestly just logic with reference angles) we know that the area of the side triagnels are equal to \\(\\frac{1}{2} \\cdot \\frac{\\sqrt{3}}{2} \\cdot 4 = \\sqrt{3}). There are two 
        of these for \\(2\\sqrt{3}\\). Using that same triangle, we use the law of cosines for the opposite side:</p>
        $$
        x^2=4+4-8\\cos(120)
        $$
        $$
        x^2=12
        $$
        $$
        x=\\sqrt{12}
        $$
        <p>We then use the pythagorean theorem to find that the center triangle has altitude \\(1^2+b^2=\\sqrt{12}^2\\) so \\(b^2=11\\) and \\(b=\\sqrt{11}\\) for area \\(\\sqrt{11}). We add this to the areas of the other two for \\(2\\sqrt{3}+\\sqrt{11}=\\sqrt{12}+\\sqrt{11}) and \\(12+11=23\\)</p>`,
        answer: '23',
        topic: 'trigonometry',
    },
    {
        title: `AMC 10A Fall 2021 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `Menakara has a \\(4 \\times 6\\) index card. If she shortens the length of one side of this card by \\(1\\) inch, the 
        card would have an area of \\(18\\) square inches. What would the area of the card be in square inches if she shortens the length of the other side by \\(1\\) inch?`,
        solution: '<b>20</b><p>We notice immediately that the shortened side is the \\(4\\) because \\(6\\cdot 3=18\\), so we just switch it around and multiply \\(4\\cdot5=20\\)',
        answer: '20',
        topic: 'area',
    },
    {
        title: `AMC 10A Fall 2021 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `As shown in the figure below, point \\(E\\) lies on the opposite half plane determined by line \\(CD\\) from point \\(A\\) so that \\(\\angle CDE = 110^\\circ\\). Point
        \\(F\\) lies on \\(\\overline{AD}\\) so that \\(DE=DF\\), and \\(ABCD\\) is a square. What is the degree measure of \\(\\angle AFE\\)?`,
        solution: `<b>170</b><p>We see that \\(\\angle ADE = 270-110=160\\). Since \\(\\triangle DFE\\) is isoceles, we know that the base angles \\(\\angle EFD\\) and \\(\\angle DEF \\) measure \\(10^\\circ\\). \\(AFE=180-10=170^\\circ\\)`,
        image: 'amc1020207.png',
        answer: '170',
        topic: 'similar triangles',
    },
    {
        title: `AMC 10A Fall 2021 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 3,
        used: false,
        text: `Isoceles triangle \\(ABC\\) has \\(AB = AC = 3\\sqrt{6}\\), and a circle with radius \\(5\\sqrt{2}\\) is tangent to line \\(AB\\) at \\(B\\) and to line \\(AC\\) at \\(C\\). What is the
        area of the circle that passes through verticies \\(A, B\\) and \\(C\\)?`,
        solution: `<b>\\(26\\pi\\)</b><p>Start by sketching out the diagram. We know that the circumcircle is at the intersection of all perpendicular bisectors, so we can get a rough sketch of that, and do a basic sketch of a circle, which we'll call \\(O_{1}\\) that is tangent at \\(B\\) and \\(C\\). We know that when a circle is tangent to a line, it means that the radius is perpendicular to that line.
        Knowing this, we draw radiuses \\(\\overline{BO_{1}}\\) and \\(\\overline{CO_{1}}\\) of length \\(5\\sqrt{2}\\). If we draw a line through \\(A\\) and \\(O_{1}\\), it creates two right triangles, \\(\\triangle ABO_{1}\\) and \\(\\triangle ACO_{1}\\).</p>
        <p>We draw another two right triangles by drawing a line from the center of the circumcirle, which we'll call \\(O_{2}\\), to a spot that creates a right angle with line \\(AB\\) and \\(BC\\) respectively. We know that they meet at the perpendicular bisectors because the circumcircle is centered at the intersection of perpendicular bisectors.</p>
        <p>We have two similar triangles by \\(AA\\). We know both legs of \\(ABO_{2}\\) and can find the hypotenuse of it via pythagorean theorem and we know that the ratio of the triangles is \\(\\frac{1}{2}\\). We calculate the side lengths to be \\(\\frac{3\\sqrt{2}}{2}\\) and \\(\\frac{5\\sqrt{2}}{2}\\) for a hypotenuse of \\(\\sqrt{26}\\). Thus, the area is \\(26\\pi\\).`,
        type: 'mc',
        choices: ["\\(A) 24\\pi\\)", "\\(B) 25\\pi\\)", "\\(C) 26\\pi\\)", "\\(D) 27\\pi\\)", "\\(E) 28\\pi\\)"],
        answer: '\\(C) 26\\pi\\)',
        topic: 'triangle lines',
    },
    {
        title: `AMC 10A Fall 2021 Problem 17 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `An architect is building a structure that will place vertical pillars at the verticies of regular hexagon \\(ABCDEF\\), which is lying horizontally on the ground. The six pillars will hold up a flat solar panel that
        will not be parallel to the ground. The heights of pillars \\(A, B\\) and \\(C\\) are \\(12, 9,\\) and \\(10\\) meters, respectively. What is the height, in meters, of the pillar at \\(E\\)?`,
        type: 'mc',
        choices: ["\\(A) 9\\)", "\\(B) 6\\sqrt{3}\\)", "\\(C) 8\\sqrt{3}\\", "\\(D) 17\\)", "\\(E) 12\\sqrt{3}\\)"],
        solution: `<b>17</b><p>Since the hexagon is flat, we know that any line must have a constant slope. We can call point \\(G\\) the center of the hexagon</p>
        <p>The slope of \\(\\overline{AB}\\) is \\(3\\), assuming that the distance between the points is \\(1\\). We know that \\(\\overline{FC}\\) is parallel to \\(\\overline{AB}\\), so \\(G\\) has to have a height of \\(13\\). The slope from \\(B\\) to \\(G\\) is \\(4\\), and we must continue this through \\(E\\) for \\(E\\) has a height of \\(13+4=17\\).`,
        answer: "\\(D) 17\\)",
        topic: "coordinate plane",
    },
    {
        title: `AMC 10A Fall 2021 Problem 19 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `A disk of radius \\(1\\) rolls all the way around the inside of a square of side length \\(s > 4\\) and sweeps out a region of area \\(A\\). A second 
        disk of radius \\(1\\)  rolls all the way around the outside of the same square and sweeps out a region of area \\(2A\\). The value of \\(s\\) can be written as 
        \\(a+\\frac{b\\pi}{c}, where \\(a, b,\\) and \\(c\\) are positive integers and \\(b\\) and \\(c\\) are relatively prime. What is \\(a+b+c\\)?`,
        solution: `<b>10</b><p>If it helps you, it is certainly a good idea to draw a diagram first, but doing so is not nescessarily imperative to the following solution</p>
        <p>The area inside the square looks like a rounded square of side length \\(s\\) with a smaller squar eof side length \\(s-4\\) taken out of it. We know that the smaller square has a side length of \\(s-4\\) because \\(1\\cdot 2=2\\) is taken off each side.</p>
        <p>We also know, however, that the corners are rounded. We can find the area of these corners by first subtracting \\(4\\) (since each corner square would have a side length of \\(1\\), and there are \\(4\\) total), and we add \\(1^2 \\cdot pi\\) for the curved circles. We don't have to worry about dividing by \\(4\\), because
        we have to multiply by \\(4\\) anyways.</p>
        $$
        A=s^2-(s-4)^2+4-\\pi=s^2-s^2+8s-16-4+\\pi=8s-20+\\pi
        $$
        <p>The larger sweep covers \\((s+4)^2\\) and has an excluded region of \\(s^2\\), being the original circle. The corners have side lengths \\(2\\) and circles of radius \\(2\\) for \\(-16+4\\pi)</p>
        $$
        2A=(s+4)^2-s^2-16+4\\pi=s^2+8s+16-s^2-16+4\\pi=8s+4\\pi
        $$
        <p>We set these equations to be equal to each other and solve for \\(A\\)</p> 
        $$
        16s-40+2\\pi=8s+4\\pi
        $$
        $$
        8s=40-2\\pi
        $$
        $$
        s=5-\\frac{1}{4}\\pi
        $$
        $$
        5+1+4=10
        $$`,
        answer: '10',
        topic: 'composite shapes',
    },
    {
        title: `AMC 10A Fall 2021 Problem 22 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 5,
        text: `Inside a right circular cone with bae radius \\(5\\) and height \\(12\\) are three congruent spheres with radius \\(r\\). Each sphere is tangent to the other two spheres and also tangent to the
        bae and side of the cone. What is \\(r\\)?`,
        solution: `<b>\\(\\frac{90=40\\sqrt{3}}{11}\\)</b><p>First start by drawing two diagrams. The first is half a vertical cross-section of the cone. We would draw a right triangle with legs \\(5\\) and \\(12\\) and hypotenuse(by pythagorean theorem\\) \\(13\\). We then draw a circle of radius \\(r\\) tangent to the bottom 
        leg and to the hypotenuse. We note that it is NOT tangent to the longer leg, because in order for that to be true, all \\(3\\) spheres would have to touch the middle of the cone, which isn't possible</p>
        <p>The next is a circle that is essentially the bottom cross-section. A circle of radius \\(5\\) with three circles inside. Note that these circles aren't tangent to the large circle, because then they would have to be tangent to the edge of the cone, where the pointy bit and the base meet, which obviously is not possible.</p>
        <p>Like a good deal of diagrams on the AMC 10, these weren't nescessarily nescessary for the problem itself, but conceptualizing it, at least to me, makes it infinitely easier.</p>
        <p>Returning back to the second drawing, let's draw lines between the centers of all the small circles, the ones with radius \\(r\\). This yields an equilateral triangle. We know that the center of the circle of radius \\(5\\) is also the circumcenter, incenter, and centroid of the triangle.</p>
        <p>Let's focus in on that last one, centroid. A centroid is the intersection of all medians and divides the medians into two parts witha \\(2:1\\) ratio. Let's focus on the vertical centroid, or at least the one that appears vertical. If you don't have one of these in our drawing, you can always rotate it. We know that the length of this median is \\(\\sqrt{3}\\) because \\(1^2+b^2=2^2\\) (pythagorean theorem), so
        the sides on opposite sides of the centroid have lengths of \\(\\frac{2\\sqrt{3}}{3}\\) and \\(\\frac{\\sqrt{3}}{3}\\), respectively. Hold on to this, we'll come back later.</p>
        <p>Let's return back to our first drawing. We know that there is some distance between the circle and the center of the cone. We don't exactly know what that is, because we don't know the radius of the circle. We do, however, from our last diagram, know the distance between the 
        center of that circle and the center of the larger circle: \\(\\frac{2\\sqrt{3}}{3}\\).</p>
        <p>We can also draw a radius from the center of the circle to the center of the cone. This divides the height of the cone into \\(12-r\\) and \\(r\\), since the bottom bit has the lenght of the radius. If we draw a line from the top of the cone to the center of the circle, that forms a right triangle with legs of, guess what, \\(12-r\\) and \\(\\frac{2\\sqrt{3}}{3}\\). The hypotenuse, in addition to being
        the sum of those two squared, is ALSO the hypotenuse of a triangle formed by drawing a radius from the center to the point where the circle is tangent to the cone. This has a leg of \\(r\\), the radius and \\(13-(5-\\frac{2\\sqrt{3}}{3}=8+\\frac{2\\sqrt{3}}{3}\\), which we derive  because the remaining length of the base, on the opposite side of the center of the sphere, is the same length as the remaining part of the \\(13\\) hypotenuse, by power of a 
        point.</p>
        <p>Set the two equations equal to eachother and solve:</p>
        $$
        r^2+(8+\\frac{2\\sqrt{3}}{3})=\\frac{2\\sqrt{3}}{3}^2+(12-r)^2
        $$
        $$
        r^2+64+\\frac{32\\sqrt{3}}{3}+\\frac{4}{3}=\\frac{4}{3}+48-24r+r^2
        $$
        $$
        \\frac{32\\sqrt{3}}{3}r+24r=80
        $$
        $$
        32\\sqrt{3}r+72r=240
        $$
        $$
        r(32\\sqrt{3}+72r)=240
        $$
        <p>Solve using conjugates</p>
        $$
        \\frac{240}{32\\sqrt{3}+72r}=\\frac{30}{4\\sqrt{3}+9}=\\frac{30}{4\\sqrt{3}+9}\\cdot\\frac{9-4\\sqrt{3}}{9-4\\sqrt{3}}=\\frac{270-120\\sqrt{3}}{33}=\\frac{90=40\\sqrt{3}}{11}
        $$
        `,
        type: 'mc',
        choices: ["\\(A) \\frac{3}{2}\\)", "\\(B)\\frac{90=40\\sqrt{3}}{11}\\)", "\\(C) 2\\)", "\\(D) \\frac{144-25\\sqrt{3}}{44}\\)", "\\(E) \\frac{5}{2}\\)"],
        topic: "triangle lines",
        answer: "\\(B)\\frac{90=40\\sqrt{3}}{11}\\)"
    },
    {
        title: `AMC 10B 2021 Fall Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        difficulty: 1,
        used: false,
        text: `What is the area of the shaded figure shown below?`,
        image: `amc1020211.png`,
        type: 'fr',
        solution: `<b>6</b><p>Find the area of the whole rectangle that encloses everything, than subtract some parts out:</p>
        $$
        4 \\cdot 5 - (\\frac{1}{2}(4 \\cdot 2) + 2(\\frac{1}{2}(2 \\cdot 5))) = 20-4-10=6`,
        answer: '6',
        topic: 'area',
    },
    {
        title: `AMC 10B 2021 Fall Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        difficulty: 3,
        used: false,
        text: `A regular hexagon of side length \\(1\\) is inscribed in a circle. Each minor arc of the circle determined by a side of the heexagon is reflected over that side. What is the area of the region bounded by these \\(6\\) reflected arcs?`,
        solution: `<b>\\(3\\sqrt{3}-\\pi\\)</b><p>Start by finding the area of the hexagon to be \\(\\frac{3\\sqrt{3}}{2}\\). Now, let''s focus on the curves. We have no formula for their exact area, but we do realize that, if we draw the hexagon as \\(6\\) equilateral triangles, and get rid of the edge it will eventually be reflected over, we end up with a nifty little section of a circle.</p>
        <p>We know that this slice is \\(\\frac{1}{6}\\) of a circle, since the measure must be \\(60\\) degrees (because hexagons have equilateral triangles with angle measures of \\(60^\\circ\\)), and that the area of the circle is \\(\\pi\\), so each sliver has an area of \\(\\frac{pi}{6}\\). We still need to get rid
        of the equilateral triangle, though, which has an area of \\(\\frac{\\sqrt{3}}{4}\\) for each curve having an area of \\(\\frac{\\pi}{6}-\\{frac\\sqrt{3}}{4}\\). There are \\(6\\) of these so we multiply by \\(6\\) and subtract it from the area of the hexagon</p>
        $$
        \\frac{3\\sqrt{3}}{2}-6(\\frac{\\pi}{6}-\\frac{\\sqrt{3}}{4}\\)
        $$
        $$
        \\frac{3\\sqrt{3}}{2}-\\pi+\\frac{3\\sqrt{3}}{2}
        $$
        $$
        3\\sqrt{3}-\\pi
        $$
        `,
        type: 'mc',
        choices: ["\\(A) \\frac{5\\sqrt{3}}{2}-\\pi\\)", "\\(B) 3\\sqrt{3}-\\pi\\)", "\\(C) 4\\sqrt{3}-\\frac{3\\pi}{2}\\)", "\\(D) \\pi-\\sqrt{3}{2}\\)", "\\(E) \\frac{\\pi+\\sqrt{3}}{2}\\)"],
    },
    {
        title: `AMC 10B 2021 Fall Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 3,
        used: false,
        text: `A square with side length \\(3\\) is inscribed in an isoceles triangle with one side of the square along the bae ofthe triangle. A square with side length \\(2\\) has two vertices on the other square and the other two sides of the triangle, as shown. What is the area of the triangle?`,
        image: 'amc10202013.png',
        solution: `<b>\\(20\\frac{1}{4}\\)</b>We start by labeling all the sides we know. Since \\(3-2=1\\) and \\(1\\div 2= \\frac{1}{2}\\), we know that the sides on either side of the smaller square have lengths of \\(\\frac{1}{2}\\). Since the slanted sides of the triangle are straight, they must 
        have the same slope throughout. We find that the slope of the section we found jut before is \\(\\frac{2}{\\frac{1}{2}}=4\\). Thus, the lenghts on either side of the bottom triangle must be long enough to make the slope \\(4\\), so \\(\\frac{3}{4}\\). The total base length of the triangle is \\(3+\\frac{3}{4}+\\frac{3}{4}=\\frac{9}{2}\\).</p>
        <p>The height of the small triangle above the smaller square is \\(4\\), ,because the length of side of a half triangle is \\(1\\) and the slope must stay constant. Thus, the total height is \\(3+2+4=9\\) for a total area of \\(9 \\cdot \\frac{9}{2} \\cdot \\frac{1}{2}=20\\frac{1}{4}\\)`,
        type: 'mc',
        choices: ['\\(A) 19\\frac{1}{4}\\)', '\\(B) 20\\frac{1}{4}\\)', '\\(C) 21\\frac{3}{4}\\)', '\\(D) 22\\frac{1}{2}\\)', '\\(E) 23\\frac{3}{4}\\)'],
        answer: '\\(B) 20\\frac{1}{4}\\)',
        topic: 'area',
    },
    {
        title: `AMC 10B 2021 Fall Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `In square \\(ABCD\\), points \\(P\\) and \\(Q\\) lie on \\(\\overline{AD}\\) and \\(\\overline{BC}\\), respectively.
        Segments \\(\\overline{BP}\\) and \\(\\overline{CQ}\\) intersect at right angles at \\(R\\) with \\(BR=6\\) and \\(PR=7\\). What is the area of the square?`,
        image: 'amc10202115.png',
        solution: `<b>117</b><p>We know that \\(\\overline{AB}\\) and \\(\\overline{CB}\\) have the same length, since the figure is a square. We then know by \\(LA\\) congruence of right triangles that \\(\\triangle PAB\\) is congruent to \\(\\triangle QBC\\)</p>
        <p>We also know that \\(\\angle RBQ\\) and \\(\\angle CBR\\) are complementrary, and \\(\\angle RBQ\\) and \\(\\angle RQB\\) are complementary, thus \\(\\triangle QRB\\) is similar to \\(\\triangle BRC\\) by angle angle. </p>
        <p>We know that the hypotenuse of \\(\\triangle CQB\\) has length \\(6+7=13\\). We can call \\(QR\\) \\(x\\) and \\(CR=13-x\\)
        <p>Using the pythagorean theorem, we can derive the following equations:</p>
        $$
        CB^2=(13-x)^2+6^2
        $$
        $$
        QB^2=6^2+x^2
        $$
        $$
        CB^2+QB^2=13^2
        $$
        <p>Substitute:</p>
        $$
        169-26x+x^2+36+36+x^2=169
        $$
        $$
        2x^2-26x+72=0
        $$
        $$
        2(x^2-13x+36)=0
        $$
        $$
        2(x-9)(x-4)=0
        $$
        <p>Wecan tell by the picture that \\(x<6\\), so \\(x=4)</p>
        <b>Quick tip for the AMC 10: They tell you that figures are not drawn to scale and...sort of. The designers of the test use some scale, even a roughly made and followed one,
        in order to be able to solve the test themselves. If you ever get stuck, save yourself time and just try to eyeball it. It might help more than you think. Of course, always try solving first,
        but it could be a good hail mary strategy</b>
        <p>We can find that \\(QB=\\sqrt{4^2+6^2}=2\\sqrt{13}\\). We now know that the ratio of \\(\\frac{\\triangle CQB}{\\triangle QRB} = \\frac{13}{2\\sqrt{13}}\\) so we apply that to the leg of side length \\(6\\) for \\(CB\\) = \\(\\frac{13}{2\\sqrt{13}} \\cdot 6 = \\frac{39\\sqrt{13}}{13}=3\\sqrt{13}\\). We 
        square this to find the area of \\(ABCD\\) is \\(117\\)</p>
    `,
    answer: '117',
    topic: 'similar triangles',
    },
    {
     title: `AMC 10B Fall 2021 Problem 18 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
     used: false, 
     difficulty: 4,
     text: `Three identical square sheets of paper each with side length \\(6\\) are stacked on top of each other. The middle sheet is rotated clockwise \\(30^\\circ\\) about its center and the top sheet is rotated clockwise \\(60^\\circ\\) about its center, resulting in the $24$-sided polygon shown in the figure below. 
     The area of this polygon can be expressed in the form \\(a-b\\sqrt{c}\\), where \\(a, b\\) and \\(c\\) are positive integers, and $c$ is not divisible by the square of any prime. What is \\(a+b+c?\\)`,
     image: 'amc10202118.png',
    solution: `<b>147</b><p>By drawing lines fron the...indented..? parts of each point, we can see that the figure is divided into \\(11\\) kite-shaped figures. Now, dividing these in half by drawing a line from the 
    protruding point/vertex to the center, we have \\(24\\) triangles to deal with. Looking at these, my first instinct was to find the altitiude where the base is \\(\\frac{\\sqrt{6^2+6^2}}{2}=3\\sqrt{2}\\). We know this because the side lengths of the squares is \\(6\\), and we find the whole diagonal length and then divide by \\(2\\). </p>
    <p>At this point, I got stuck trying to find the altitude, although I'm not enitrely sure it's impossible and will try to look at it again</p>
    <p>We can notice, however, that since the angle  at the furthermost vertex is \\(90\\) degrees, we can make a square by extending the lines adjacent to that vertex and meeting them with perpendicular lines frm the origin. This creates a square. If we use the equation \\((3\\sqrt{2})^2=2x^2\\), we know that the side lengths are equal to \\(3\\). We know that the right triangles on the sides of the
    square, the ones that we created by creating the square, are \\(30-60-90\\), because we rotated each sheet by \\(30^\\circ\\). Thus, to find the top edge of the right triangle, we just find \\(3\\cdot \\tan(30)=\\sqrt{3}\\). That means that the edge of the original triangles we had, those opposite the center, have a dimension of \\(3-\\sqrt{3}\\) and the altitude is just \\(3\\), so the total
    area is \\(\\frac{9-3\\sqrt{3}}{2}\\). There are \\(24\\) of these for a total of \\(108-36\\sqrt{3}\\) and \\(108+36+3=147\\)`,
    answer: '147',
    topic: 'trigonometry',
    },
    {
       title: `AMC 10B Fall 2021 Problem 21 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
       used: false,
       difficulty: 5,
       text: `Regular polygons with \\(5, 6, 7\\) and \\(8\\) sides are inscribed in the same circle. No two of the regular polygons share a vertex, and no three of their
       sides intersect at a common point. At how many points inside the circle do two of their sides intersect?`,
       solution: `<b>68</b><p>Start by doing a few basic experimens and seeing if there's a pattern. We don't even nescessarily need the whole \\(5, 6, 7\\) etc., because that will get pretty 
       hard to keep precise, so let's try with just \\(3\\) and \\(4\\). A regular, equilateral triangle in a circle with an inscribed square will be intersected \\(2\\) times per side, for a total of \\(6\\) times.</p>
       <p>This holds true no matter what, because, if you imagine the lines as "bouncing" off the circle, since the angles they reflect at are different, they must cross paths multiple times, once when "going" towards the vertex it is about to bounce off of, and once when going away from it.</p>
       <p>Since no more than \\(2\\) shapes may intersect at a point, we can count them by cases, not worrying about multiple intersecting at once or over counting:</p>
       <p>\\(5\\) and \\(6\\) has \\(10\\) intersections</p>
       <p> \\(5\\) and \\(7\\) has \\(10\\) intersections</p>
       <p>\\(5\\) and \\(8\\) has \\(10\\) intersections</p>
       <p>\\(6\\) and \\(7\\) (iykyk) has \\(12\\) intersections</p>
       <p>\\(6\\) and \\(8\\) has \\(12\\) intersections</p>
       <p>\\(7\\) and \\(8\\) has \\(14\\) intersections for a total of \\(10+10+10+12+14=68\\)`,
       answer: '68',
       topic: 'inscribed shapes', 
    },
    {
        title: `AMC 10B Fall 2021 Problem 25 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 5,
        text: `A rectangle with side lengths \\(1\\) and \\(3\\), a square with side length \\(1\\), and a rectangle \\(R\\) are inscribed inside a 
        larger square as shown. The sum of all possible values of the area of \\(R\\) can be written in the form \\(frac{m}{n}\\), where \\(m\\) 
        and \\(n\\) are relatively prime positive integers. What is \\(m+n\\?)`,
        solution: `<b>67</b><p>Draw a square that inscribes the square of side length \\(1\\) and cuts the isoceles triangle between the large square, the small square, and the rectangle with defined points into two parts. We
        know that this triangle is isoceles because it has two side lengths of \\(1\\).</p>
        <p>This creates \\(6\\) congruent triangles by \\(AAS\\). We can label the legs of the triangle \\(a\\) and \\(b\\) for short and long, respectively.</p>
        <p>We also see a congruent triangle bounded in the right bottom corner by the larger rectangle. We can label that too.</p>
        <p>We also know that, by \\(AA\\), the triangle with hypotenuse \\(3\\) in the bottom left corner is similar to these with a ratio of \\(1:3\\) (since the hypotenuse of the congruent ones is \\(1\\) and the hypotenuse of the bigger one is \\(3\\)). We can then label
        accordingly, so the legs are \\(3a\\) and \\(3b\\). Since the larger shape, the one that contains all of these, is a square, we know the side lengths must be equal, so \\(a+b+b+3a=3b+a\\) or\\(3a=b\\). Rename every instance of \\(b\\) with this, for simplicity.</p>
        <p>We can find the exact value of \\(a\\) using the pythagorean theorem beacause \\(a^2+9a^2=1\\), which means \\(10a^2=1\\) and thus \\(a=\\frac{1}{\\sqrt{10}}\\).</p>
        <p>By drawing a horizontal line through the intersection of \\(R\\) and the oter rectangle to the side of the larger square, we can create another right triangle. We know that this triangle is similar to the \\(6\\) or \\(7\\) congruent triangles. We can
        call the side lengths of these \\(x\\) and \\(3x\\). The side length of a the large square is \\(10a\\). We know that the triangle formed between the square we drew and rectangle \\(R\\) are congruent by \\(AAS\\). Thus, we can call one side of the triangle \\(3a\\) and another \\(3x\\) (because it is the same as the one we mentioned before)</p>
        <p>Since we know that the side lengths sum to \\(10a\\), we can label the remaining sides as \\(6a-3x\\) and \\(4a-x\\). By \\(AA\\), the triangle that those lengths form is similar to the one below it, with side lengths \\(3a\\) and \\(3x\\).</p>
        <p>We set up te ratio \\(\\frac{3x}{3x}=\\frac{6a-3x}{4a-x}\\), which we can multiply out to be \\(12a^2-3ax=18ax-9x\\) which we can divide by \\(3\\) into \\(4a^2-ax-3x^2\\) and factor into \\((4a-3x)(a-x)\\).</p>
        <p>We have two solutions for where \\(a=c\\) and \\(a=\\frac{3}{4}\\). We try both of these situations seperately</p>
        <p>Calculating from here gets messy. However, we can solve for the possible side lengths using \\(a=\\sqrt{\\frac{1}{10}}\\) in both cases to find areas of \\(\\frac{9}{5}\\) and \\(\\frac{5}{3}\\) for \\(\\frac{m}{n}=\\frac{52}{15}\\) and \\(m+n=67\\)</p>
        `,
        answer:'67',
        topic: 'similar triangles',
    },
    {
        title: `AMC 10A 2022 Problem 5 <span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 1,
        text: `Square \\(ABCD\\) has side length \\(1\\). Points \\(P, Q, R, S\\) each lie on a side of \\(ABCD\\) such that \\(APQCRS\\) is an equilateral convex
        hexagon with side length \\(s\\). What is \\(s\\)?`,
        type: 'mc',
        choices: ['\\(A) \\frac{\\sqrt{2}}{2}\\)', '\\(B) \\frac{1}{2}\\)', '\\(C) 2-\\sqrt{2}\\)', '\\(D) 1-\\frac{\\sqrt{2}}{4}\\)', '\\(E) \\frac{2}{3}\\)'],
        solution: `<b>\\(2-\\sqrt{2}\\)</b><p>The distance between \\(A\\) and \\(P\\) is \\(s\\), so between \\(P\\) and \\(B\\) is \\(1-s\\). Let's say that between \\(Q\\) and \\(C\\) is also \\(s\\). Between \\(B\\) and \\(Q\\) is \\(1-s\\). The 
        line between \\(P\\) and \\(Q\\) creates a right triangle with two side lengths \\(1-s\\) and hypotenuse \\(s\\). Thus, we can solve for \\(s\\) that makes this true:</p>
        $$
        (1-s)^2+(1-s)^2=s^2
        $$
        $$
        1-2s+s^2+1-2s+s^2=2
        $$
        $$
        2s^2-4s+1=s^2
        $$
        $$
        s^2-4s+2=0
        $$
        <p>Solve with quadratic equation</p>
        $$
        \\frac{4 \\pm \\sqrt{16-8}}{2}
        $$
        $$
        \\frac{4\\pm 2\\sqrt{2}}{2}
        $$
        $$
2 \\pm \\sqrt{2}
        $$
        <p>\\(s\\) must be less than one, so we have \\(2-\\sqrt{2}\\).
        `,
        answer: '\\(C) 2-\\sqrt{2}\\)',
        topic: 'pythagorean theorem',
    },
    {
        title: `AMC 10A 2022 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `DDR Daniel finds a rectangular index card and measures its diagonal to be \\(8\\) centimeters. DDR Daniel then cuts out equal squares of
        side \\(1\\) cm at two opposite corners of the index card and measures the distance between the two closest verticies of these squares to be \\(4\\sqrt{2}\\) centimeters,
        as shown below. What is the area of the original index card?`,
        solution: `<b>18</b><p>By the pythagorean theorem, we have that \\(a^2+b^2=64\\) and \\((a-2)^2+(b-2)^2=32\\).</p>
        $$
        a^2-4a+4+b^2-4b+4=32
        $$
        $$
        a^2+b^2-4a-4b-24=0
        $$
        $$
        a^2+b^2=64
        $$
        $$
        40-4a-4b=0
        $$
        $$
        10-a-b=0
        $$
        $$
        a+b=10
        $$
        $$
        a^2+2ab+b^2=100
        $$
        $$
        64+2ab=100
        $$
        $$
        2ab=36
        $$
        $$
        ab=18
        $$
        `,
        answer: '18',
        topic: 'pythagorean theorem',
        image: 'amc10202210.png',
    },
    {
        title: `AMC 10A 2022 Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 3,
        used: false,
        text: `Let \\(\\triangle ABC\\) be a scalene triangle. Point \\(P\\) lies on \\(\\overline{BC}\\) so that \\(\\overline{AP}\\) bisects \\(\\angle BAC).
        The line through \\(B\\) perpendicular to \\(\\overline{AP}\\) intersects the line through \\(A\\) parallel to \\(\\overline{BC}\\) at point 
        \\(D\\). Suppose \\(BP=2\\) and \\(PC=3\\). What is \\(AD\\)?`,
        answer:  '10',
        solution: `<b>10</b><p>We know that \\(\\overline{AP}\\) is the angle bisector of \\(\\angle A\\). We can use angle bisector theorem, which tells us that \\(\\frac{BP}{BC}=\\frac{AB}{AC}\\). We can
        thus conclude that \\(\\frac{AB}{AC}=\\frac{2}{3}\\). We can say that \\(AB=2x\\) and \\(AC=3x\\). Since \\(\\overline{AD}\\) is parallel to \\(\\overline{BC}\\), we can look at \\(\\overline{BD}\\)
        as a transveral. Thus, \\(\\angle B\\) is equal to \\(\\angle D\\) and \\(\\angle C\\) is equal to \\(\\angle \\(CAD\\) (using \\(\\overline{AC}\\) as a transversal). We have two similar triangles.</p>
        <p>We know that \\(overline\\{BD}\\) makes an isoceles triangle with \\(\\overline{AB}\\) and \\(\\overline{AC}\\) because there are two congruent triangles (by \\(ASA\\)) next to each other. Thus, \\(\\overline{AC}\\) is split up into segments
        with length \\(2x\\) and \\(x\\). The \\(x\\) is a part of one of the similar triangles, as is the \\(2x\\), so the ratio is \\(2\\). The corresponding sie for \\(AD\\) is \\(BC\\), so \\(AD = 2\\cdot 5=10\\)`,
        topic: 'similar triangles',
    },
    {
        title: `AMC 10A 2022 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `Quadrilateral \\(ABCD\\) with side lengths \\(AB=7, BC=24, CD=20, DA=15\\) is inscribed in a circle. The area interior to the circle but exterior to the quadrilateral can be
        written in the form \\(\\frac{a\\pi-b}{c}\\), where \\(a, b\\) and \\(c\\) are positive integers such that \\(a\\) and \\(c\\) have 
        no common prime factor. What is \\(a+b+c?\\)`,
        type: 'mc',
        choices: ['\\(A) 260\\)', '\\(B) 855\\)', '\\(C) 1235\\)', '\\(D) 1565\\)', '\\(E) 1997\\)'],
        solution: `<b>1565</b><p>\\(15\\) and \\(20\\) are \\(3\\) and \\(4\\) multiplied by \\(5\\), respectively. This is important because we know it makes a pythagorean triple with hypotenuse \\(25\\). We can also see that 
        \\(7^2+24^2=25^2\\). Thus, \\(25\\) is the diameter of our circle for a total area of \\(156.25\\pi\\). We can express the area of the quadrilateral 
        as the combined area of \\(2\\) right triangles. We find the area of these independently:</p>
        $$
        \\frac{7\\cdot 2}{2}=84
        $$
        $$
        \\frac{15\\cdot 20}{2}=150
        $$
        <p>The total area then is \\(\\frac{625}{4}\\pi-84-150\\) or \\(\\frac{625\\pi-936}{4}\\). We add the constants and coefficients for \\(625+936+4=1565\\)</p>
        `,
        answer:'\\(D) 1565\\)',
        topic: 'area'
    },
    {
        title: `AMC 10A 2022 Problem 20 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 4,
        used: false,
        text: `A bowl is formed by attatching four rectangular hexagons of side \\(1\\) to aquire a square of side \\(1\\). The edges of the adjacent hexagons coincide, as shown in the figure. 
        What is the are of the octagon obtained by joining the top eight vertices of the four hexagons, situated on the rim of the bowl?`,
        type:'mc',
        choices: ['\\(A) 6\\)', "\\(B) 7\\)", "\\(C) 5+2\\sqrt{2}\\)", "\\(D) 8\\)", "\\(E) 9\\)"],
        image: 'amc10202220.png',
        solution: `<b>7</b><p>We know that the interior angles of a regular and thus equiangular octagon are \\(135^\\circ\\). If we look at the vertice where two oxtagons and a triangle intersect, and imagine it in two dimensions, we see that the remaining angle, the one of the triangle, becomes \\(360-135-135=90\\). The triangles are right triangles with legs \\(1\\) for a hypotneuse of \\(\\sqrt{2}\\)</p>
        <p>Technically, the lsat bit of informatioin is extraneous, but it can be used in other situations. We can draw a square outside the octagon that is tangent at the side lengths of \\(1\\). This square has an area of \\(9\\). However, there are \\(4\\) cutout triangles of side length \\(1\\) and altitude \\(1\\) so we remove \\(2\\). Thus, the
        remaining area is \\(7\\)`,
        topic: 'area',
        answer: '\\(B) 7\\)',
    },
    {
        title: `AMC 10A 2022 Problem 23 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 5,
        text: `Isoceles trapezoid \\(ABCD\\) has parallel sides \\(\\overline{AD}\\) and \\(\\overline{BC}\\), with \\(BC<AD\\) and 
        \\(AB=CD\\). There is a point \\(P\\) in the plane such that \\(PA=1\\), \\(PB=2),\\(PC=3\\), and \\(PD=4). What is \\(\\frac{BC}{AD}\\)?`,
        solution: `<b>\\(\\frac{1}{3}\\)</b><p>There's an old trick in competition math where you do something called "forced simplification". This is a process
        in which you take anything that dxoes not explicityly have to be something and set it to be the easiest value. For example, could the quadrilateral be a square, could the side length be \\(1\\)? In this case,
        we ask ourselves: Does the height <b>have</b> to be greater than \\(0\\). Not according to the problem. In order for the question to be valid, there must either be 
        a set height, or it can be anything. The second is much more likely. We set \\(h\\) to \\(0\\) and end up with a straight line. The distance from \\(A\\) to \\(B\\) or from \\(B\\) to \\(C\\), etc. is \\(1\\).
        Thus, \\(\\frac{BC}{AD}=\\frac{1}{3})`,
        type: 'mc',
        choices: ["\\(A) \\frac{1}{4}\\)", "\\(B) \\frac{1}{3}\\)", "\\(C) \\frac{1}{2}\\)", "\\(D) \\frac{2}{3}\\)", "\\(E) \\frac{3}{4}\\)"],
        answer: "\\(B) \\frac{1}{3}\\)",
        topic: 'forced simplification',
    },
    {
        title: `AMC 10A 2022 Problem 25 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 5,
        text: `<p>Let \\(R, S\\) and \\(T\\) be squares that have vertices at lattice points (i.e., points whose coordinates are both integers) in the coordinate plane, together with their interiors. The
        bottom edge of each square is on the \\(x-\\)axis. The left edge of \\(R\\) and the right edge of \\(S\\) are on the \\(y-\\)axis, and \\(R\\) contains \\(\\frac{9}{4}\\) as amny lattice points as does \\(S\\). The 
        top two vertices of \\(T\\) are in \\(R\\cup S\\), and \\(T\\) contains \\(\\frac{1}{4}\\) of the lattice points contained in \\(R\\cup S\\). See the figure (not drawn to scale)</p>
        <p>The fraction of lattice points in \\(S\\) that are in \\(S \\cap T\\) is \\(27\\) times the fraction of lattice points in \\(R\\) that are in \\(R \\cap T\\). What 
        is the minimum possible value of the edge length of \\(R\\) plus the edge length of \\(S\\) plus the edge length of \\(T\\)?`,
        image: "amc10202225.png",
        solution: `<b>337</b><p>Call the siden lengths of \\(R, S\\), and \\(T\\) to be \\(r, s,\\) and \\(t\\), respectively. We know that the number of lattice points in a given square is equal to \\((r+1)^2\\), or whatever
        square you are looking at. However, to make calculations more simple, we can substitute \\((r+1)\\) for \\(x\\), \\((s+1)\\) for \\(y\\) and \\((t+1)\\) for \\(z\\). By the first condition, we know that \\(x^2=\\frac{9}{4}y^2\\). We take
        the square root of both sides to see that \\(x=\\frac{3}{2}y\\).</p>
        <p>We are also given that the union of \\(R\\) and \\(S\\) is \\(4\\) times that of \\(T\\). Since the lattice points on the \\(y-\\)axis are counted twice, we know that \\(\\frac{x^2+y^2-y}{4}=z^2\\). We then
        substitute \\(x=\\frac{3}{2}y\\) for \\(\\frac{13y^2-4y}{16}=z^2\\)</p>
        <p>What we want is the sum of \\(x+y+z-3\\).</p>
        <p>You could go on to solve the rest, using various equations as place holders, or you can just use the answer choices and perform modular arithmetic in different cases to see which ones line up. If you are short on time, the latter is faster. 
        Although I will not detial the general process, we effectively find mod(\\(13\\)) for each option then find the values that would make that true and see if they work for an answer of \\(337\\).`,
        answer: '337',
        topic: 'squares',
    },
    {
        title: `AMC 10B 2022 Problem 2 <span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 1,
        text: `In rhombus \\(ABCD\\), point \\(P\\) lies on segment \\(\\overline{AD}\\) so that \\(\\overline{BP} \\perp \\overline{AD}, AP=3\\), and
        \\(PD=2\\). What is the area of \\(ABCD\\)? (Note: The figure is not drawn to scale.)`,
        image: 'amc1020222.png',
        type: 'mc',
        choices: ['\\(A) 3\\sqrt{5}\\)', '\\(B) 10\\)', '\\(C) 6\\sqrt{5}\\)', '\\(D) 20\\)', '\\(E) 25\\)'],
        solution: `<b>20</b><p>We know that \\(AD=2+3=5\\) and that, because a rhombus is an equilateral parallelogram, \\(\\AB=5\\) as well. By 
        pythagorean theorem we know that \\(BP\\) is \\(b\\) in \\(3^2+b^2=5^2\\) so \\(b=\\sqrt{16}=4\\). That makes the total area \\(4 \\cdot 5=20\\)`,
        answer: '\\(D) 20\\)',
        topic: 'pythagorean theorem',
    },
    {
        title: `AMC 10B 2022 Problem 16 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `The diagram below shows a rectangle with side lengths \\(4\\) and \\(8\\) and a square with side length \\(5\\). Three vertices of the square lie on three different sides of the
        rectangle, as shown. What is the area of the region inside both the square and the rectangle?`,
        image: "amc10202216.png",
        type: 'mc',
        choices: ['\\(A) 15\\frac{1}{8}\\)', '\\(B) 15\\frac{3}{8}\\)', '\\(C) 15\\frac{1}{2}\\)', '\\(D) 15\\frac{5}{8}\\)', '\\(E) 15\\frac{7}{8}\\)'],
        solution: `<b>\\(15\\frac{5}{8}\\)</b><p>We know that the leftmost point of the square intersects the rectangle at the top edge, which means that the right triangle we see has a height of 
        \\(4\\). Since the hypotenuse is \\(5\\) (the side length of the square), we know by pythagorean triples that the width is \\(3\\). We do some basic logic to know that the segment to the right of that 
        MUST be of length \\(4\\) because it cannot be \\(3\\), since that would make the square intersect the rectangle at the top edge, and it cannot be less than \\(3\\) because it is obviously larger than the leftmost rectangle.
        Finally, it cannot be \\(5\\) because there must be some width in the leftmost rectangle. Thus, the rightmost bottom right triangle has dimensions of \\(3\\) and \\(4\\) as well. The top right triangle must have side lengths of \\(1\\) and \\(\\frac{3}{4}\\) by 
        the pythagorean theorem. We find the area of the large rectangle (\\(32\\)) and subtract out all the nonshaded parts which are \\(4+6+6+\\frac{3}{8}\\) which gives us 
        an answer of \\(\\frac{5}{8}\\)`,
        answer: '\\(D) 15\\frac{5}{8}\\)',
        topic: 'pythagorean theorem',
    },
    {
        title: `AMC 10B 2022 Problem 20 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `<b>113</b><p>We can extend lines \\(\\overline{AD}\\) and \\(\\overline{BE}\\) until they intersect at a point we call point \\(G\\).
        We then draw a circle centered at \\(G\\ that has \\(A\\), \\(F\\), and \\(C\\) on it. We know that \\(\\angle EDG\\) is equal to \\(180-46=134\\). By power of a point and inscribed angles, 
        we know that \\(\\angle EFC=\\frac{1}{2}\\angle EDG = 67\\) (iykyk). We also know that \\(\\angle EFC\\) makes a linear pair with \\(\\angle BFC\\) so \\(m\\angle BFC=180-67=133^\\circ\\).`,
        answer: '133',
        topic: 'power of a point',
        type: 'fr',
    },
    {
        title: `AMC 10A 2023 Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `A square of area \\(2\\) is inscribed in a circle of area \\(3\\), creating four congruent triangles, as shown below. What
        is the ratio of the shorter leg to the longer leg in the shaded right triangle?`,
        image: `amc10202311.png`,
        solution: `<b>\\(2-\\sqrt{3}\\)</b><p>Call the short side of the right triangle \\(a\\) and the long side \\(b\\). We know that \\(a^2+b^2=2\\) and that \\(a+b=\\sqrt{3}\\) so \\(b=\\sqrt{3}-a\\)</p>
        <p>We substitute that back in to find that \\(a^2+(\\sqrt{3}-a)^2=2) so \\(a^2+3-2\\sqrt{3}+a^2=2\\) and \\(2a^2-2\\sqrt{3}+1=0\\). This really ends up being a pain to 
        factor, so we just use the quadratic formula:
        \\(\\frac{2\\sqrt{3}\\pm \\sqrt{12-8}}{4}=\\frac{\\sqrt{3}\\pm 1}{2}\\). We set up \\(\\frac{\\frac{\\sqrt{3}-1}{2}}{\\frac{\\sqrt{3}+1}{2}}\\) which we simplify to \\(\\frac{\\sqrt{3}-1}{\\sqrt{3}+1}\\) which we solve by
        conjugates for \\(2-\\sqrt{3}\\)`,
        type: 'mc',
        choices: ['\\(A) \\frac{1}{5}\\)', '\\(B) \\frac{1}{4}\\)', '\\(C) 2-\\sqrt{3}\\)', '\\(D) \\sqrt{3}-\\sqrt{2}\\)', '\\(E) \\sqrt{2}-1\\)'],
        answer: '\\(C) 2-\\sqrt{3}\\)',
        topic: 'pythagorean theorem',
    },
    {
        title: `AMC 10A 2023 Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `Abdul and Chiang are standing \\(48\\) feet apart in a field. Bharat is standing in the same field as far from Abdul as possible so that the angle formed
        by his lines of sight to Abdul and Chiang measures \\(60^\\circ\\). What is the square of the distance (in feet) between Abdul and Bharat?`,
        solution: `<b>3072</b><p>We know that Bharat is furthest from Abdul when he is perpendicular to the line between Abdul and Chiang. We know that this causes a \\(30-60-90\\) right triangle. We know that \\(\\frac{48}{x}=\\sin(60)\\) so \\(\\frac{48}{x}=\\sqrt{3}{2}\\)
        which means that \\(x=\\frac{96}{\\sqrt{3}\\). We square this which gives us \\(3072\\)`,
        answer: '3072',
        topic: 'trigonometry',
    },
    {
        title: `AMC 10A 2023 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `An even number of circles are nested, starting with a radius of \\(1\\) and increasing by \\(1\\) each time, all sharing a common point. The region between every other circle is shaded, starting with the 
        region inside the circle of radius \\(2\\) but outide the circle of radius \\(1\\). An example showing \\(8\\) circles is displayed below. What is the least number of circles needed to make the total shaded area at least \\(2023\\pi\\)?`,
        solution: `<b></b><p>We evaluate a few basic cases to know that the area enclosed by the \\(2\\)nd and \\(1\\)st circles is \\(3\\pi\\), the area enclosed by hte \\(3\\)rd and \\(4\\)th is \\(7\\pi\\), etc. etc. for \\(11\\pi\\), \\(15\\pi\\). This is an arithmetic series of \\(a_{1}=3\\) and \\(d=4\\). The
        sum of this sequence is \\(n(\\frac{3+a_{n}}{2|})\\). We know that \\(a_{n}=3+4(n-1)\\) so we substitute that in for \\(n(\\frac{3+3+4n-4}{2})=n(1+2n)=n+2n^2\\). We know that this must be equal to \\(2023\\) (we exclude \\(pi\\) for simplicity) so \\(2023=n+2n^2\\). We don't nescessarily
        know that it will be exactly \\(2023\\). Because of that, we try the answer choices</p>
        <p>We have to divide each number by two, which is just because of the nature in which we used \\(n\\). We start from the bottom</p>
        $$
        23+2(23^2)=1081
        $$
        $$
        24+2(24^2)=1176
        $$
        $$
        28+2(28^2)=1596
        $$
        $$
        30+2(30^2)+1830
        $$
        $$
        32+2(32^2)=2080
        $$
        <p>Thus, our answer is \\(64\\).
        `,
        type: 'mc',
        choices: ['\\(A) 46\\)', '\\(B) 48\\)', '\\(C) 56\\)', '\\(D) 60\\)', '\\(E) 64\\)'],
        answer: '\\(E) 64\\)',
        topic: 'arithmetic series',
    },
    {
        title: `AMC 10A 2023 Problem 17 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `Let \\(ABCD\\) be a rectangle with \\(AB=30\\) and \\(BC=28\\). Point \\(P\\) and \\(Q\\) lie on \\(\\overline{BC}\\) and \\(\\overline{CD}\\) respectively so that all sides of \\(\\triangle ABP, \\triangle PCQ,\\) and \\(\\triangle QDA\\) have integer lengths.
        What is the perimeter of \\(\\triangle APQ\\)`,
        solution: `<b>84</b><p>Based on the answer choices, we can pretty reasonably conclude that all of the values are integers. We also know that drawing a triangle with vertices on the sides will create right triangles bounded by the lights and by the edges of the square. Using
        this knowledge, we do some work with pythagorean triples.</p>
        <p>We know that \\(\\triangle APQ\\) has a vertex on the vertex on the square, \\(A\\), so one of the legs has a length of \\(30\\). We know a 
        few common tripples that could be possible:</p>
        <p>\\(3,4,5\\), meaning the other leg has a length of \\(40\\), which is too long.</p>
        <p>\\(5,12,13\\) with the other leg having length \\(72\\), also too long</p>
        <p>\\(8,15,17\\) with the other leg having length \\(16\\). This works. They hypotenuse, then, is \\(34\\). We have one sidelength down</p>
        <p>We now focus on \\(BC\\) which we now know is divided into two line segments of length \\(16\\) and \\(12\\). We deal with the latter. We know \\(12\\) is \\(3\\cdot 4\\), which gives us two legs of one pythagorean triple to work with. The other side length could either 
        be \\(16\\) or \\(9\\) with a hypotenuse (side length) of either (\\20\\) or \\(15\\). We'll come back to this later.</p>
        <p>We circle back to the two vertices on \\(A\\) and know that there is one side length of \\(28\\). We, once again, recognize this as a pythagorean triple with \\(3,4,5\\) multiplied by \\(7\\). The bottom leg is \\(21\\) and the hypotenuse is \\(35\\).</p>
        <p>Back to our second side, the remaining part is \\(30-21=9\\) so we know the side length is \\(15\\) and thus the perimeer is \\(34+35+15=84\\)`,
        type: 'mc',
        choices: ['\\(A) 84\\)', '\\(B) 86\\)', '\\(C) 88\\)', '\\(D) 90\\)', '\\(E) 92\\)'],
        topic: 'pythagorean theorem',
    },
    {
        title: `AMC 10A 2023 Problem 18 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `A rhombic dodecahedron is a solid with \\(12\\) congruent rhombus faces. At every vertex, \\(3\\) or \\(4\\) edges meet, depending on the vertex. How many vertices have exactly \\(3\\) edges meet?`,
        solution: `<b>8</b><p>This question uses something called Euler's formula, which dicatates that \\(\\textup{Vertices}+\\textup{Faces}-\\textup{Edges}=2\\). We know that there are 
        \\(12\\) rhombuses each with \\(4\\) edges meaning there are \\(48\\) "collision places". However, we must note that edges are shared between two rhombuses for \\(\\frac{48}{2}=24\\) total edges. If \\(x=\\)vertexes that intersect at \\(3\\) points and \\(y=\\)number of vertexes that intersect \\(4\\) points, we have that
        \\(x+y+12-24=2\\) or \\(x+y=14\\). We know that there are \\(48\\) collissions so \\(3x+4y=48\\). We solve for \\(x\\).</p>
        $$
        y=14-x
        $$
        $$
        3x+4(14-x)=48
        $$
        $$
        3x+56-4x=48
        $$
        $$
        -x=-8
        $$
        $$
        x=8
        $$
        `,
        type: 'fr',
        answer: '8',
        topic: "Euler's formula",
    },
    {
        title: `AMC 10A 2023 Problem 18 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `Circle \\(C_{1}\\) and \\(C_{2}\\) each have radius \\(1\\), and the distance betwen their centers is \\(\\frac{1}{2}\\). Circle \\(C_{3}\\) is the largest circle internally tangent to both \\(C_{1}\\) and \\(C_{2}\\).
        Cirlce \\(C_{4}\\) is internally tangent to both \\(C_{1}\\) and \\(C_{2}\\) and externaly tangent to \\(C_{3}\\). What is the radius of \\(C_{4}\\)?`,
        image: 'amc10202318.png',
        type: 'mc',
        choices: ['\\(A) \\frac{1}{14}\\)', '\\(B) \\frac{1}{12}\\)', '\\(C) \\frac{1}{10}\\)', '\\(D) \\frac{3}{28}\\)', '\\(E) \\frac{1}{9}\\)'],
        solution: `<b>\\(\\frac{3}{8}\\)</b><p>We start by finding the radius of \\(C_{3}\\). We know that the two circles have radii of \\(1\\) and are \\(\\frac{1}{2}\\) apart. You can draw this out, if nesscessary, but logic tells us that each center is \\(\\frac{1}{2}\\) from the nearest edge of a circle. This 
        is because it has the remaining radius left, \\(1-\\frac{1}{2}\\), if that makes sense. Anyways the total width is \\(\\frac{3}{4}\\) for a radius of \\(\\frac{3}{8}\\). </p>
        <p>We draw a line vertically from the center of \\(C_{4}\\) to the center of \\(C_{3}\\) and another from \\(C_{4}\\) to \\(C_{1}\\). This forms a right triangle (after drawing a line between \\(C_{3}\\) and \\(C_{1}\\)). The legs have lengths of \\(\\frac{3}{4}r\\) (with \\(r\\) being the radius of \\(C_{4}\\) and \\(\\frac{\\frac{1}{2}}{2}\\)). The hypotenuse is 
        \\(1-r\\). We then set up the pythagorean theorem and solve:</p>
        $$
        (r+\\frac{3}{4})^2+\\frac{1}{4}^2=(1-r)^2
        $$
        $$
        r^2+\\frac{3}{2}r+\\frac{10}{16}=r^2-2r+1
        $$
        $$
        \\frac{7}{2}r=\\frac{3}{8}
        $$
        $$
        r=\\frac{3}{28}
        $$`,
        answer: '\\(D) \\frac{3}{28}\\)',
        topic: 'pythagorean theorem',
    },
    {
        title: `AMC 10A 2023 Problem 24 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 5,
        text: `Six regular hexagonal blocks of side length \\(1\\) unit are arranged inside a regular hexagonal frame. Each block lies along an inside edge of the frame and is aligned with two other blocks, as shown in the figure below. The distance from any corner of the frame to the nearest vertex of a block is \\(\\frac{3}{7} unit). What is 
        the area of the region isde the frame not occupied by the blocks?`,
        image: 'amc10202324.png',
        solution: `<b>\\(\\frac{9\\sqrt{3}}{2}\\)</b><p>We can extend the side of a block to make a triangle and a parallelogram.</p>
        <p>The triangle has a side length of \\(1-\\frac{3}{7}=\\frac{4}{7}\\). The longer side of the parallelogram is \\(1+\\frac{4}{7}\\). The shorter side is \\(\\frac{3}{7}\\). Thus,the total side length of the large hexagon is \\(1+1+\\frac{4}{7}+\\frac{3}{7}=3\\) for an area of \\(\\frac{27\\sqrt{3}}{2}\\).</p>
        <p>The areas of the blocks are each \\(\\frac{3\\sqrt{3}}{2}\\) for a total of \\(\\frac{18\\sqrt{3}}{2}\\) We subtract this to find that the remaining area is \\(\\frac{27\\sqrt{3}}{2}-\\frac{18\\sqrt{3}}{2}=\\frac{9\\sqrt{3}}{2}\\)`,
        topic: 'hexagons',
        type: 'mc',
        choices: ['\\(A) \\frac{13\\sqrt{3}}{2}\\)', '\\(B) \\frac{216\\sqrt{3}}{49}\\)', '\\(C) \\frac{9\\sqrt{3}}{2}\\)', '\\(D) \\frac{14\\sqrt{3}}{3}\\)', '\\(E) \\frac{243\\sqrt{3}}{49}\\)'],
        answer: '\\(C) \\frac{9\\sqrt{3}}{2}\\)',
    },
    {
        title: `AMC 10B 2023 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `A \\(3-4-5\\) right triangle is inscribed in circle \\(A\\), and a \\(5-12-13\\) right triangle is inscribed in circle \\(B\\). What is the ratio of the area of circle 
        \\(A\\) to the area of circle \\(B\\)?`,
        type: 'mc',
        choices: ['\\(A) \\frac{9}{25}\\)', '\\(B) \\frac{1}{9}\\)', '\\(C) \\frac{1}{5}\\)', '\\(D) \\frac{25}{169}\\)', '\\(E) \\frac{4}{25}\\)'],
        solution: `<b>\\(\\frac{25}{169}\\)</b><p>We know that an circumcircle  is centered at the triangle's circumcenter, the intersection of \\(3\\) perpendicular bisectors. We also know that the circumcenter of
        a right triangle is the midpoint of the hypotenuse. If you don't happen to have this knowledge handy, we can prove it because the two perpendicular bisectors of the legs are perpendicular to each other and would thus
        meet at the hypotenuse. The logic for this is sort of intuitive so I won't explain it</p>
        <p>Since the circle is centered at the midpoint and must touch all vertices, ew know that the radius must be the length of the hypotenuse divided by \\(2\\). Thus, our radii are \\(2.5\\) and \\(6.5\\)</p>
        <p>The areas for the two circles then are \\(6.25\\pi\\) and \\(42.25\\pi\\). The ratio of these is:</p>
        $$
        \\frac{6.25\\pi}{42.25\\pi}
        $$
        $$
        \\frac{6.25}{42.25}
        $$
        $$
        \\frac{25}{169}
        $$
        `,
        answer: '\\(D) \\frac{25}{169}\\)',
        topic: 'triangle lines',
    },
    {
        title: `AMC 10B 2023 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 1,
        text: `Square \\(ABCD\\) is rotated \\(20^\\circ\\) clockwise about its center to obtain square \\(EFGH\\), as shown below. What is the degree measure of \\(\\angle EAB\\)?`,
        solution: `<b>\\(35^\\circ\\)</b><p>The first thing that occurred to me to find was where the \\(20^\\circ\\) was actually expressed, since it's not super obvious from the image. HOWEVER, if we were to draw a point at the center of both squares, let's call it
        \\(I\\) and draw line segments \\(\\overline{AI}\\) and \\(\\overline{EI}\\) than we do indeed get a \\(20^\\circ\\) angle</p>
        <p>This bit of information, although helpful in conceptualizing the process, is not altogether nescessary. We need to find \\(\\angle EAB\\) which, because of power of a point, is \\(\\frac{1}{2} \\angle EIB\\). We know that \\(\\angle EFB\\) is \\(90^\\circ\\) and that 
        \\(\\angle BIF = 20^\\circ\\) so it follows that \\(\\angle EIB=90-20=70\\). Thus, \\(\\angle EAB=\\frac{70}{2}=35\\)</p>`,
        type: 'mc',
        choices: ['\\(A) 24^\\circ\\)', '\\(B) 35^\\circ\\)', '\\(C) 30^\\circ\\)', '\\(D) 32^\\circ\\)', '\\(E) 20^\\circ\\)'],
        answer: '\\(B) 35^\\circ\\)',
        image: 'amc1020237.png',
        topic: 'power of a point',
    },
    {
        title: `AMC 10B 2023 Problem 17 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `A rectangular box \\(P\\) has distinct edge lengths \\(a, b,\\) and \\(c\\). The sum of the lengths of all \\(12\\) edges of 
        \\(P\\) is \\(13\\), the sum of the areas of all \\(6\\) faces of \\(P\\) is \\(\\frac{11}{2}\\), and the volume of \\(P\\) is \\(\\frac{1}{2}\\).
        What is the length of the longest interior diagonal connecting two vertices of \\(P\\)?`,
        solution: `<b>\\(\\frac{9}{4}\\)</b><p>The first statement tells us that the sum of the edges...kinda like a 3D perimeter, is \\(13\\). That means that we can write \\(4a+4b+4c=13\\)</p>
        <p>The second tells us that \\(2(ab+bc+ac)=\\frac{11}{2}\\)</p>
        <p>The final constraint tells us that \\(abc=\\frac{1}{2}\\)</p>
        <p>We are solving for \\(\\sqrt{a^2+b^2+c^2}\\) which can also be rewritten as \\(\\sqrt{(a+b+c)^2-2(ab+bc+ac)}\\).</p>
         We divide each side of the first equation by \\(4\\) for \\(a+b+c=\\frac{13}{4}\\) and substutitute that in so that \\(\\sqrt{\\frac{169}{16}-2(ab+ac+bc)}\\).</p>
         <p>We know the value of \\(2ab+2ac+2bc=\\frac{11}{2}\\) so we also substitute that in</p>
         $$
         \\sqrt{\\frac{169}{16}-\\frac{11}{2}}
         $$
         $$
         \\sqrt{\\frac{81}{16}}
         $$
         $$
         \\frac{9}{4}
         $$`,
         topic: 'algebraic manipulation',
         type: 'mc',
         choices: ['\\(A) 2\\)', '\\(B) \\frac{3}{8}\\)', '\\(C) \\frac{9}{8}\\)', '\\(D) \\frac{9}{4}\\)', '\\(E) \\frac{3}{2}\\)'],
         answer: '\\(D) \\frac{9}{4}\\)',
    },
    {
        title: `AMC 10B 2023 Problem 20 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `Four coungruent semicircles are drawn on the surface of a sphere with radius \\(2\\), as shown, creating a close curve that divides the surface into two congruent regions. The
        length of the curve is \\(\\pi\\sqrt{n}\\). What is \\(n\\)?`,
        image: 'amc10202320.png',
        type: 'mc',
        choices: ['\\(A) 32\\)', '\\(B) 12\\)', '\\(C) 48\\)', '\\(D) 36\\)', '\\(E) 27\\)'],
        solution: `<b>32</b><p>From the picture, we can pretty confidently see that the four points, which we can call \\(A, B, C,\\) and \\(D\\) are coplanar. This essentially means we can take a cross section  that "slices" the sphere and 
        shows us a circle with \\(A, B, C,\\) and \\(D\\) on each edge. The circle has a radius of \\(2\\), as given in the question. We can try to find the distance between points, because that would give us the diameter of each arc which we could use to find the radius.</p>
        <p>The radii of the crossection circle are \\(2\\) and form a right angle when we draw them from \\(A\\) and \\(B\\) to the center of the circle. Thus, we can use the pythagorean theorem to find the distance is \\(2\\sqrt{2}\\). The radius is \\(\\sqrt{2}\\) and the total length of the curve is the sum of the \\(4\\) arcs, which is just \\(2\\) times 
        the circumfrence of a circle with radius \\(\\sqrt{2}\\). Said circumfrence is \\(2\\sqrt{2}\\pi\\) for a total length of \\(4\\sqrt{2}\\pi\\) and \\(4^2\\cdot 2=32\\) so that is our answer`,
        answer: '\\(A) 32\\)',
        topic: 'circles',
    },
    {
     title: `AMC 10B 2023 Problem 25 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
     used: false,
     difficulty: 5,
     text: 'A regular pentagon with area \\(1+\\sqrt{5}\\) is printed on paper and cut out. All five vertices are folded to the center of the pentagon, creating a smaller pentagon. What is the area of the new pentagon?',
      solution: `<b>\\(\\sqrt{5}-1\\)</b><p>When we fold a pentagon, or any regular polygon, so that it forms another regular polygon of the same sort, we notice two things:</p>
      <p>1) The inner polygon is rotated (idk this helped me visualize it)</p>
      <p>2) The vertices of the new, smaller polygon are colinear with the center of the polygon and the midpoint of the edges of the larger polygon,
      and visa versa (with the midpoints of the smaller andges and the vertices of the larger one). Not only that, the midpoint of the edge of the smaller polygon is situated on the midpoint of a line between the center and the vertex of the larger polygon.</p>
      <p>We know that by drawing lines from the vertices of the center of the polygon splits the pentagon into \\(5\\) isoceles triangles with vertex angles of \\(\\frac{360}{5}=72\\).</p>
      <p>If we draw an altitude by bisecting the vertex angle and connecting it to the midpoint of the opposite edge. This gives us two right triangles with angle measures of \\(\\frac{72}{2}=36\\) and \\(90-36=54\\).</p>
      <p>We know the shorter leg has a measure of \\(\\frac{\\sqrt{5}+1}{2}\\) so we can use some trigonometry to find the length of th hypotenuse, then divide that by \\(2\\) to find the altitude of the smaller isoceles triangles that make up the smaller
      pentagon, and from there the side lengths. The math for this turns out to be pretty robust and involves angle identities, so I won't go too far into it, but the basic process is outlined above.`,
      type: 'mc',
      choices: ['\\(A) 4-\\sqrt{5}\\)', '\\(B) \\sqrt{5}-1\\)', '\\(C) 8-3\\sqrt{5}\\)', '\\(D) \\frac{\\sqrt{5}+1}{2}\\)', '\\(E) \\frac{2+\\sqrt{5}}{3}\\)'],
      answer: '\\(B) \\sqrt{5}-1\\)',
      topic: 'trigonometry',
    },
    {
        title: `AMC 10A 2024 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `One side of an equilateral triangle of height \\(24\\) lies on line \\(l\\). A circle of radius \\(12\\) is tangent to line \\(l\\) and is externally tangent to the triangle. The area of the region exterior to the trinagle and the circle and bounded by the triangle, the circle, and line \\(l\\) can be
        written as \\(a\\sqrt{b}-c\\pi\\) where \\(a, b,\\) and \\(c\\) are positive integers and \\(b\\) is not divisible by the square of any prime. What is \\(a+b+c\\)?`,
        solution: `<b>74</b><p>We start by drawing the radii connecting the center of the circle to the point of intersections with the circle and triangle and the circle and \\(l\\). The angle between the triangle and \\(l\\) on the EXTERIOR is \\(180-60=120\\) and 
        by power of a point, we know that the angle of the radii is half of that, being \\(60\\). </p>
        <p>We then draw a line that bisects the \\(60\\) degree angle between the radii and extend it until it reaches \\(l\\). This creates two right triangles bounded by the radii, the line we just drew, and either the edge of the triangle or line \\(l\\). We know one side length already, \\(12\\) and we use \\(\\tan (30^\\circ)=\\frac\\{sqrt{3}}{3}\\)
        to find that the shorter side is equal to \\(4\\sqrt{3}\\). We can then find the area of the triangle (note we don't divide by \\(2\\) because there are two triangles) and find the area is \\(48\\sqrt{3}\\). That's the whole area of the wedge, but we want to take out the part that is included in the circle, which is just \\(\\frac{1}{6}\\) of the total
        area of the circle, so \\(\\frac{12^2\\pi}{6}=24\\pi\\). So, we have our area to be \\(48\\sqrt{3}-24\\pi\\) meaning \\(a=48, b=3, c=24\\), thus \\(a+b+c=48+3+24=75\\)
        `,
        answer: 75,
        topic: 'area'
    },
    {
        title: `AMC 10A 2024 Problem 16 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
        text: 'All of the rectangles in the figure below, which is drawn to scale, are similar to the enclosing rectangle. Each number represents the area of the rectangle. What is length \\(AB\\)?',
        image: 'amc10202416.png',
        solution: `<b>\\(10\\sqrt[4]{2}\\)</b><p>We know by the answer choices that the sie lengths rae probably not integers. That sucks for us. We ARE however told that the rectangle is drawn to scale. This helps a whole lot.</p>
        <p>We start with the rectangle of area \\(1\\) and call the side lengths \\(a\\) and \\(b\\) for longest and shortest. We are also given taht all the sides rectangles are SIMILAR, meaning the side length ratios are the same and the side
        lenghts of a rectangle with area \\(z\\) with be \\(\\sqrt{z}x\\) and \\(\\sqrt{z}{y}\\). </p>
        <p>We have that \\(4\\sqrt{2}y+12x=10x+5\\sqrt{2}y\\) so \\(y\\sqrt{2}=2x\\). We also have that \\(x=\\frac{1}{y}\\) so \\(y\\sqrt{2}=\\frac{2}{y}\\)</p>
        $$
        y\\sqrt{2}=\\frac{2}{y}
        $$
        $$
        2y^2=\\frac{4}{y^2}
        $$
        $$
        y^4=2
        $$
        <p>We have that \\(AB=4(2^{\\frac{1}{4}})\\sqrt{2}+\\frac{12}{2^{\\frac{1}{4}}}=10\\sqrt[4]{2})</p>
`,
type: 'mc',
choices: ['\\(A) 4+4\\sqrt{5}\\)', '\\(B) 10\\sqrt{2}\\)', '\\(C) 5+5\\sqrt{5}\\)', '\\(D) 10 \\sqrt[4]{8}\\)', '\\(E) 20\\)'],
topic: 'similar triangles',
    },
    {
        title: `AMC 10B 2024 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `A rectangle has integer length sides and an area of 2024. What is the least possible perimeter of the rectangle?`,
        solution: `<b>180</b><p>We know that the perimeter will be smallest when the the side lengths are as close to each other as possible (if you don't know this try using a few smaller tests and make a conjecture)</p>
        <p>We know that \\(\\sqrt{2025}=45\\) so we're looking for something near \\(45\\). Obviously, \\(45\\) is not a factor, but \\(44\\) is. The dimensions are \\(44\\) and \\(46\\) for a combined perimeter of \\(44+46+44+46=180\\)`,
        type: 'fr',
        topic: 'optimization',
        answer: '180',
    },
    {
        title: `AMC 10B 2024 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 2,
        text: `Quadrilateral \\(ABCD\\) is a parallelogram, and \\(E\\) is the midpoint of the side \\(\\overline{AD}\\). Let \\(F\\) be the intersection of lines \\(EB\\) and \\(AC\\). What
        is the ratio of the area of qudrilateral \\(CDEF\\) to the area of \\(\\triangle CFB\\)?`,
        solution: `<b>\\(5:4\\)</b><p>For this, we use a system called "forced simplification". Parallelogram? Make it a square! Side lengths? Make them \\(1\\)!. Since we know we're working with ratios, it doesn't really matter.</p>
        <p>Now, map the points out on the coordinate grid. We have \\(A(0,1), B(1,1), C(1,0), D(0,0) E(0,0.5)\\). We can make the equations for lines \\(EB\\) and \\(AC\\) with lines \\(y=\\frac{1}{2}x+0.5\\) and \\(y=-x+1\\), respectively.
        The intersection of these lines is \\(\\frac{1}{2}x+0.5=-x+1\\) which we solve to \\(x=\\frac{1}{3}\\) and \\(y=\\frac{2}{3}\\).We can use this to find the area of \\(\\triangle CFB\\) because we have the base (\\(CB=1\\) and altitude (\\(1-\\frac{1}{3}=\\frac{2}{3}\\)) for a total area of 
        \\(\\frac{1}{3}\\). </p>
        <p>Finding the area of the quadrilateral would be a pain, so we instead just find the remaining triangles which have areas of \\(\\frac{1}{12}\\) and \\(\\frac{1}{6}\\) (easy to compute so I'm skipping the basic computation). The area of the quadrilateral is \\(1-\\frac{1}{12}-\\frac{1}{6}-\\frac{1}{3}=\\frac{5}{12}) for 
        a ratio of \\(\\frac{5}{12}:\\frac{1}{3}=5:4)`,
        answer: '5:4',
        topic: 'forced simplification',

    },
    {
        title: `AMC 10B 2024 Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `In the figure below \\(WXYZ\\) is a rectangle with \\(WX=4\\) and \\(WZ=8\\). Point \\(M\\) lies \\(\\overline{XY}\\),
        point \\(A\\) lies on \\(\\overline{YZ}\\) and \\(\\angle WMA\\) is a right angle. The areas of \\(triangle WXM\\) and \\(\\triangle WAZ\\) are equal. What is the area of \\(\\triangle WMA?\\)`,
        image: 'amc10202411.png',
        solution: `<b>15</b><p>We know by \\(AA\\) that \\(WXM\\) and \\(MAY\\) are similar. We know that \\(WX=4\\) so lets call \\(XM = x\\). \\(MY=8-x\\) so the ratio is \\(\\frac{8-x}{4}\\) meaning that \\(AY=\\frac{8-x}{4}\\cdot x\\) and \\(ZA=4-\\frac{8-x}{4}\\cdot x\\).</p>
        <p>Since we are given that the area of \\(\\triangle WXM=\\triangle WAZ\\), we can set up the following equation</p>
        $$
        \\frac{4x}{2}=\\frac{8 \\cdot 4-\\frac{8-x}{4}\\cdot x\\}{2}
        $$
        $$
        2x=16-8x+x^2
        $$
        $$
        x^2-10x+16=0
        $$
        $$
        (x-8)(x-2)=0
        $$
        x=2 OR x=8$$
        <p>We know that \\(x=8\\) would be too big so we know that \\(x=2\\).</p>
        <p>From here, we could technically use the pythagorean theorem to find the legs of \\(WMA\\) or we could just find the area of the other rectangles and subtract from \\(32\\). I personally did the latter because it meant less roots and irrational numbers</p>
        <p>Both \\(\\triangle WXM\\) and \\(WZA\\) have areas of \\(4\\cdot 2 \\cdot \\frac{1}{2}=4\\). \\(MAY\\) has an area of \\(\\frac{8-2+\\frac{8-2}{4}{2}}{2}=9\\). Thus, the combined area of every other triangle is \\(17\\) and \\(32-17=15\\)`,
        answer: '15',
        topic: 'similar triangles',
    },
    {
        title: `AMC 10B 2024 Problem 21 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 5,
        text: `Two straight pipes (circular cylinders) with radii \\(1\\) and \\(\\frac{1}{4}\\), lie parallel in contact on a flat floor. The 
        figure below shows a head-on view. What is the sum of the possible radii of a third parallel pipe lying on the same floor and in contact with both? `,
        image: `amc10202421.png`,
        type: 'mc',
        choices: ['\\(A) \\frac{1}{9}\\)', '\\(B) 1\\)', '\\(C) \\frac{10}{9}\\)', '\\(D) \\frac{11}{9}\\)', '\\(E) \\frac{19}{9}\\)'],
        solution: `<b>\\(\\frac{10}{9}\\)</b>By the diagram, there are two places we can put a circle tangent to both: Between the two in the space enclosed by them or to the right of the smaller one so that it 'goes over' the smaller one's center.</p>
        <p>We know the distance between the center points of the two circles is \\(\\frac{5}{4}\\) and can be described as the hypotenuse of a right triangle with a vertical leg down from the center of the large circle and a horizontal line from the small circle of lengths \\(\\frac{3}{4}\\) and an unkown value, respectively</p>
        <p>If we were to draw lines from the centers of the two preexisting circles to the center of the "3rd circle", the one we draw between them, it also forms a right triangle with the same hypotenuse and legs \\(1+r\\) and \\(\\frac{1}{4}+r). We also label the horizontal distance between the centers ofthe two smallest circles to be 
        \\(x\\)</p>
        <p>Drawing a horizontal line from the center of the smallest circle and a vertical lie down from the center of the second smallest circle gives us another right triangle with hypotenuse \\(r+\\frac{1}{4}\\) and legs \\(x\\) and \\(\\frac{1}{4}-r\\)
        <p>We set up the following equations using the pythagorean theorem</p>
        $$
        (\\frac{1}{4}+r)^2=x^2+(\\frac{1}{4}-r)^2
        $$
        $$
        x=\\sqrt{r}
        $$
        <p>We use the same process with the larger circle and the smallest circle on the other side and find that \\(1-x=2\\sqrt{r}\\). We add the equations for \\(1=3\\sqrt{r}\\) so \\(r=\\frac{1}{9}\\)</p>
        <p>As for the large one...I don't know about you, but I had a bit of intuition that it had to have a radius of \\(1\\), simply because to "reach over" the smaller circle and be tangent would be weird. If I were running out of time, I would guess \\(\\frac{10}{9}\\), which is right anyways</p>
        <p>That being said, for the sake of understanding we essentially use the same basic method as before by creating two right triangles and using the pythagorean theorem</p>
        `,
        answer: '\\(C) \\frac{10}{9}\\)',
        topic: 'tangency',
    },
    {
        title: `AMC 10B 2024 Problem 25 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        text: `Each of \\(27\\) bricks (right rectangular prisms) has dimensions \\(a\\times b \\times c\\), where \\(a, b,\\) and \\(c\\) are pairwise relatively prime positive integers. These bricks are arragned to form a 
        \\(3 \\times 3 \\times 3\\) block, as shown on the left below. A \\(28\\)th brick with the same dimensions is introduced, and these bricks are reconfigured into a \\(2 \\times 2 \\times 7) block, shown on the right. The new 
        block is \\(1\\) unit taller, \\(1\\) unit wider, and \\(1\\) unit deeper, than the old one. What is \\(a+b+c\\)?`,
        solution: `<b>92</b><p>From the diagram, we set up the following equations</p>
        $$
        3c+1=7a
        $$
        $$
        3a+1=2b
        $$
        $$
        3b+1=2c
        $$
        <p>I solved via substitution, so the following path isn't nescessarily nescessary and you can follow whtaever you think is best</p>
        $$
        \\frac{3b+1}{2}=c
        $$
        $$
        \\frac{9b+3}{2}+1=7a
        $$
        $$
        \\frac{9b+5}{14}=a
        $$
        $$
        \\frac{27b+15}{14}+1=2b
        $$
        $$
        27b+29=28b
        $$
        $$
        b=29
        $$
        $$
        3(29)+1=2c
        $$
        $$
        c=44
        $$
        $$
        a=19
        $$
        $$
        19+44+29=92
        $$
        `,
        answer: '92',
        topic: 'systems of equations',
    },
    {
        title: `AMC 10A 2025 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `How many isosceles triangles are there with positive area whose side lengths are all positive integers and whose longest side has length \\(2025\\)?`,
        solution: `<b>3037</b><p>We know that the sum of two sides must be greater than the remaining side. We evaluate two cases:</p>
        <p>1) The longest side is the base side, the one opposite the vertex angle, measures \\(2025\\). The side angles must be greater than \\(\\frac{2025}{2}=2=1012.5\\) and must be less than \\(2024\\), thus there are \\(1012\\) possible values</p>
        <p>2) The longest sides are the two side angles. In that case, the base the angle can be anywhere from \\(1\\) to \\(2024\\). Thus, there  are \\(2024+1012+1=3037\\) ways (adding \\(1\\) for the equilateral triangle)`,
        
    }

];

// ---------- DOM Elements ----------
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const checkBtn = document.getElementById("check-btn");
const solutionDiv = document.getElementById("solution");
const solutionText = document.getElementById("solution-text");
const solutionLink = document.getElementById("solution-link");
const nextBtn = document.getElementById("next-btn");
const popup = document.getElementById("popup");
const toggleStreakBtn = document.getElementById("toggle-streak");
const streakWrapper = document.getElementById("streak-wrapper");
const streakBar = document.getElementById("streak-bar");
const backBtn = document.querySelector(".back-btn");
const image = document.getElementById("question-image")
const progressBar = document.getElementById("progress-bar");
const submitSolutionButton = document.getElementById("submit-a-solution");
const submitSolutionForm = document.getElementById("submit-a-solution-form");

submitSolutionButton.addEventListener("click", function() {
    console.log("work pls")
        submitSolutionForm.style.display = 'block';
        submitSolutionButton.style.display = 'none';
})

let questionsAnswered = 0;
let percentage = 0;
let percetnageStr = "0";
//--------------Progress Bar---------------
function progressBarFunction() {
questionsAnswered++;
percentage = ((questionsAnswered) / geometryQ.length) * 100;
progressBar.style.width = percentage + "%";
console.log(questionsAnswered);
}
// ---------- Load Question ----------
function loadQuestion(index) {
    saveUserStatsToCloud()
    submitSolutionForm.style.display = "none";
    submitSolutionButton.style.display='block'
    const q = geometryQ[index];
    questionTitle.innerHTML = q.title;
    questionText.innerHTML = q.text;
    solutionText.innerHTML = "";
    solutionDiv.style.display = "none";
    nextBtn.style.display = "none";
    answerInput.value = "";
    answerInput.style.display = "inline-block";
    checkBtn.style.display = "inline-block";
    if (q.image){
        image.src=q.image;
        image.style.display="block";
    } else {
        image.style.display="none";
    }

    if (window.MathJax) {
        MathJax.typesetPromise([questionText]).catch(()=>{});
    }
}
// ---------- Streak Button ----------
// ---------- Popup ----------
function showPopup(message, isCorrect) {
    popup.innerHTML = message;
    popup.style.backgroundColor = isCorrect ? "#4CAF50" : "#f44336";
    popup.style.opacity = "1";
    setTimeout(() => popup.style.opacity = "0", 2000);
}


// ---------- Check Answer ----------
checkBtn.addEventListener("click", function () {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = geometryQ[currentQuestion].answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display === "none") {
            progressBarFunction();
            streakCount++;
            correctCount++;
        document.getElementById("streak-count").innerHTML = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + geometryQ[currentQuestion].solution;

      // Existing confetti
       myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });

    // Your existing streak bar animation
        showHighlight();
        if (streakCount >= longestStreak){
            longestStreak=streakCount;
        }



    } else {
            progressBarFunction();
        streakCount = 0;
        wrongCount++;
        document.getElementById("streak-count").innerHTML = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect. ` + geometryQ[currentQuestion].solution;
        problemsWrapper.classList.add("shake");
        setTimeout(() => problemsWrapper.classList.remove("shake"), 400);
    }
    solutionDiv.style.display = "block";
    nextBtn.style.display = "inline-block";

    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
});

// ---------- Next Question ----------
nextBtn.addEventListener("click", function () {
    // Slide out
    problemsWrapper.classList.add("slide-out");

    setTimeout(() => {
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        currentQuestion++;

        if (currentQuestion < geometryQ.length) {
            loadQuestion(currentQuestion);

            // Slide in effect
            problemsWrapper.classList.add("slide-in");
            setTimeout(() => problemsWrapper.classList.remove("slide-in"), 350);
        } else {
            questionTitle.innerHTML = "All done!";
            questionText.innerHTML = "You've completed all questions.";
            answerInput.style.display = "none";
            checkBtn.style.display = "none";
            nextBtn.style.display = "none";
            solutionDiv.style.display = "none";
            image.style.display = "none";
    // Show stats dashboard
    document.getElementById("stats-dashboard").classList.remove("hidden");
    document.getElementById("total-questions").innerHTML = geometryQ.length;
    document.getElementById("correct-answers").innerHTML = correctCount;
    document.getElementById("wrong-answers").innerHTML = wrongCount;
    document.getElementById("longest-streak").innerHTML = longestStreak;

        }
    }, 300); // matches slide-out duration
});


// ---------- Enter Key ----------
answerInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && nextBtn.style.display === "none") {
        e.preventDefault();
        checkBtn.click();
    } if (e.key === "Tab" && nextBtn.style.display !== "none") {
        e.preventDefault();
        nextBtn.click();
    }
});


//---------------Infinite Scroll----------

const track = document.querySelector('.carousel-track');
const trackWrapper = document.querySelector('.carousel-track-wrapper');
const cards = Array.from(track.children);
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

const cardWidth = cards[0].offsetWidth + 16; // margin included
const visibleCards = Math.floor(trackWrapper.offsetWidth / cardWidth);


// Clone first and last visibleCards for smooth looping
for (let i = 0; i < visibleCards; i++) {
  track.appendChild(cards[i].cloneNode(true)); // end
  track.insertBefore(cards[cards.length - 1 - i].cloneNode(true), track.firstChild); // start
}

const allCards = Array.from(track.children);
let index = visibleCards; // start at first real card

track.style.transform = `translateX(-${cardWidth * index}px)`;

// Move carousel
function moveCarousel() {
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${cardWidth * index}px)`;
}


// Button clicks
rightBtn.addEventListener('click', () => {
  index++;
  moveCarousel();
});

leftBtn.addEventListener('click', () => {
  index--;
  moveCarousel();
});

// Infinite loop logic
track.addEventListener('transitionend', () => {
  let needsReset = false;

  if (index >= allCards.length - visibleCards) {
    index = visibleCards;
    needsReset = true;
  }

  if (index < visibleCards) {
    index = allCards.length - visibleCards * 2;
    needsReset = true;
  }

  if (needsReset) {
    requestAnimationFrame(() => {
      track.style.transition = 'none';
      track.style.transform = `translateX(-${cardWidth * index}px)`;

      // Force reflow so browser commits transform
      track.offsetHeight;

      // Restore transition for future moves
      track.style.transition = 'transform 0.5s ease';
    });
  }
});


// Run initially

// ---------- Shuffle Questions ----------
shuffleArray(geometryQ);
currentQuestion = 0;




const toggleBrightness = document.getElementById("brightness")
const carouselLight = document.querySelectorAll("carousel-logo-light")
const carouselDark = document.querySelectorAll("carousel-logo-dark")
let colorMode = 'light'
let colorModeTrue = localStorage.getItem("colorMode")
console.log(colorModeTrue)
console.log(colorModeTrue)
if  (colorModeTrue !== false){
        console.log("setting color mode")
       colorMode =  colorModeTrue
       console.log(colorModeTrue)
 if (colorMode === 'dark'){
                colorMode = 'dark';
                document.documentElement.style.colorScheme = 'dark'; 
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                toggleBrightness.textContent = "sunny"
                localStorage.setItem("colorMode", "dark")
        } else {
                colorMode = 'light';
                document.documentElement.style.colorScheme = 'light';
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
                toggleBrightness.textContent = "bedtime"
                localStorage.setItem("colorMode", "light")
        }
} else {
function toggleSystemTheme() {
  const root = document.documentElement;
  
  // 1. Check what the system preference is, or if it's already set
  if (!root.style.colorScheme) {
    // If it's not set yet, match the user's system preferences
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.style.colorScheme = prefersDark ? 'dark' : 'light';
  }
  
  colorMode = root.style.colorScheme;

  // 2. Add the correct matching class right away so the logos render correctly!
  if (colorMode === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
  } else {
      root.classList.add('light');
      root.classList.remove('dark');
  }
}
toggleSystemTheme();
}
toggleBrightness.addEventListener("click", function(){
        if (colorMode === 'dark'){
                colorMode = 'light';
                document.documentElement.style.colorScheme = 'light'; 
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
                toggleBrightness.textContent = "bedtime"
                localStorage.setItem("colorMode", colorMode)
        } else {
                colorMode = 'dark';
                document.documentElement.style.colorScheme = 'dark';
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                toggleBrightness.textContent = "sunny"
                localStorage.setItem("colorMode", colorMode)
        }
        console.log(localStorage.getItem("colorMode"));
});

//--------Restart--------
document.getElementById("restart-btn").addEventListener("click", function() {
    // Reset variables
    questionsAnswered = 0;
    progressBar.style.width = "0%"
    currentQuestion = 0;
    correctCount = 0;
    wrongCount = 0;
    streakCount = 0;
    longestStreak = 0;
    document.getElementById("streak-count").innerHTML = streakCount;

    // Hide dashboard
    document.getElementById("stats-dashboard").classList.add("hidden");

    // Show questions again
    loadQuestion(currentQuestion);
    problemsWrapper.classList.remove("hidden");
});

// ---------- Start ----------
console.log(geometryQ.length);
progressBar.style.width = "0%"

toggleProblems();
loadQuestion(currentQuestion);


//-----------------------Authentication--------------------------
 const helpPannel = document.getElementById("helpPannel")
const { createClient } = window.supabase;
const supabaseURL = 'https://joevkictcfaoofqhbhgw.supabase.co';
const supabaseKey = 'sb_publishable_8Iat4psKXuFn91uT8yuw7g_2n3Buc5w';
const supabase = createClient(supabaseURL, supabaseKey);
      let helpOn = false;
  let helpBtn = document.getElementById('helpButton')
let accountTrue = false
let accountBtn = document.getElementById("accountBtn")
let accountPannel = document.getElementById("accountPannel")
let overlay = document.getElementById("overlay")
accountBtn.addEventListener("click", function () {
        let account = true

    document.getElementById("no-account").addEventListener("click", function() {
    if (account === false){
        account = true
        document.getElementById("login").style.display = "block"
        document.getElementById("signup").style.display = "none"
                document.getElementById("no-account").innerHTML = "Don't have an account? Sign up!"
    } else {
        document.getElementById('login').style.display = "none"
        account = false
        document.getElementById("signup").style.display = "block"
        document.getElementById("no-account").innerHTML = "Already have an account? Log in!"
    }
    })
    helpPannel.style.display  = "none"
    if (accountTrue === false){
        accountPannel.style.display = "block"
        overlay.style.display = "block"
        accountTrue = true
    } else {
        accountPannel.style.display = "none"
        overlay.style.display = "none"
        accountTrue = false
    }
})
overlay.addEventListener("click", function(){
    if (helpOn === true){
        helpPannel.style.display = "none";
        overlay.style.display = "none"; 
        helpOn = false;
    } 
    if (accountTrue === true){
        accountPannel.style.display = "none"
        overlay.style.display = "none"
        accountTrue = false
    }
})
helpBtn.addEventListener("click", function () {
    if (helpOn === true){
        helpPannel.style.display = "none";
        overlay.style.display = "none"; 
        helpOn = false;
    } else {
        helpPannel.style.display = "block";
        overlay.style.display = "block";
        helpOn = true
    }
});

document.getElementById("btn-signup").addEventListener("click", async () => {
  const email = document.getElementById("auth-email").value
  const password = document.getElementById("auth-password").value
  const username = document.getElementById("auth-username").value
  const passwordCheck = document.getElementById("auth-password-check").value
  if (!email || !password || !username) {
    document.getElementById("signup-error").innerHTML = "Please fill out all fields"
    return;
  }
  if (password === passwordCheck){
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return alert(error.message);
  if (data.user) {
    await supabase.from('profiles').insert([
      { 
        id: data.user.id, 
        username: username, 
        geometrySorted: geometryQ,
        geometryIndex: currentQuestion,
        geometryStreak: streakCount
      }
    ]);
    
    alert("Account created!");
    
    document.getElementById('accountPannel').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById("username-display").innerHTML = username
  }
  } else {
    document.getElementById("signup-error").innerHTML = "Passwords do not match"
    return;
  }
});
async function loadUserStats(userId) {
  const { data: profile, error } = await supabase
    .from('profiles')
   .select('id, username, geometrySorted, geometryIndex')
   .eq('id', userId)

  if (error) {
    console.error("Error downloading profile data:");
    return;
  }

  if (profile) {
    console.log(profile)
    let userProfile = profile[0]
    console.log(userProfile.username)
    geometryQ = userProfile.geometrySorted || geometryQ;
    currentQuestion = userProfile.geometryIndex || 0;
    document.getElementById("username-display").innerHTML = userProfile.username
    streakCount =  userProfile.geometryStreak || 0
    document.getElementById("btn-dashboard").innerHTML = userProfile.username
  } 
}
const loginBtn = document.getElementById("btn-login");
loginBtn.addEventListener("click", async () => {
  console.log("clicked")
    const email = document.getElementById("login-email").value.trim()
    const password = document.getElementById("login-password").value
    if (!email || !password) {
        
document.getElementById("login-error").innerHTML = "Please Input Both Fields"
    return;
  }
  loginBtn.disabled = true;
const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert("Login Error: " + error.message);
    loginBtn.disabled = false;
    loginBtn.innerText = "Login";
    return;
  }
  document.getElementById('accountPannel').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  accountTrue = false
  // 3. Pull their ELO data out of the database (Step 2 below)
  await loadUserStats(data.user.id);
  
  // Reset button state
  loginBtn.disabled = false;

})
const logoutBtn = document.getElementById('btn-logout');

logoutBtn.addEventListener('click', async () => {
            document.getElementById("login").style.display = "block"
  // 1. Call Supabase to clear the secure cloud session
  console.log('logging out')
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert("Error logging out: " + error.message);
    return;
  }


  alert("You have been logged out successfully!");
  window.location.reload();
});

const deleteAccountBtn = document.getElementById('btn-delete-account');

if (deleteAccountBtn) {
  deleteAccountBtn.addEventListener('click', async () => {
    const confirmed = confirm("Are you absolutely sure you want to delete your account? This will permanently erase your math rankings, diagnostic logs, and history. This action cannot be undone.");
    
    if (!confirmed) return;
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;

    const userId = session.user.id;

    // 3. Clear their specific user row from your public profiles table
    const { error: dbError } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId);

    if (dbError) {
      alert("Error erasing profile data: " + dbError.message);
      return;
    }

    await supabase.auth.signOut();
    alert("Your account records and progress have been completely erased.");
    window.location.reload();
  });
}

console.log(supabase)



supabase.auth.onAuthStateChange(async (event, session) => {
  const accountBtn = document.getElementById('accountBtn');
  const logoutBtn = document.getElementById('btn-logout');
  const loginBtn = document.getElementById('btn-login');
  const signup = document.getElementById('no-account');
  const login = document.getElementById('login');
  const usernameDisplay = document.getElementById("username-display");
  const createAccount = document.getElementById("no-account")
  const deleteAccount = document.getElementById("btn-delete-account")
  const usernameDisplayModal = document.getElementById("btn-dashboard")

  // A. Check if a secure user session actually exists
  if (session && (event === 'SIGNED_IN' || event === 'INITIAL_SESSION')) {
    console.log("Secure adaptive practice session discovered for:", session.user.email);

    // Toggle UI display blocks safely
    if (logoutBtn) logoutBtn.style.display = 'block';
    if (login) login.style.display = "none";
    console.log("login goes invisible")
    if (createAccount) createAccount.style.display = "none"
    if (deleteAccount) deleteAccount.style.display = "block"
    if (usernameDisplayModal) usernameDisplayModal.style.display = "block"

    // 1. Fetch cloud records safely using correct lowercase columns
  const { data: profile, error } = await supabase
loadUserStats(session.user.id)
loadQuestion(currentQuestion)
progressBarFunction()
  } else  {
    console.log("No user session found. Reverting adaptive practice to Guest defaults.");
    if (typeof runDiagnostic === "function")
    
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (login) login.style.display = "block";
    if (usernameDisplay) usernameDisplay.innerHTML = "Log In";
    if (createAccount) createAccount.style.display = "block"
    if (deleteAccount) deleteAccount.style.display = "none"
    if (usernameDisplayModal) usernameDisplayModal.style.display = "none"
    currentQuestion = 0

  }
});

  async function saveUserStatsToCloud() {
    console.log("updating")
  // 1. Get the currently logged-in user session
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  if (sessionError || !session) {
    return; // Stop here if they are a guest
  }

  const userId = session.user.id;
  // 2. Push all the live active values up to the database
  const { data, error } = await supabase
    .from('profiles')
    .update({
geometrySorted: geometryQ,
geometryIndex: currentQuestion,
geometryStreak: streakCount

    })
    .eq('id', userId); // ⚠️ CRITICAL: Ensure you only update THIS user's row!

  if (error) {
    console.error("Failed to sync stats to cloud database:", error.message);
  }

}
const resetBtn = document.getElementById("btn-request-reset");

if (resetBtn) {
  resetBtn.addEventListener("click", async () => {
    const email = document.getElementById("login-email").value;

    if (!email) {
      alert("Please enter your email address first.");
      return;
    }

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/update-password.html',
    });

    if (error) {
      console.error("Reset request failed:", error.message);
      alert("Error: " + error.message);
    } else {
      alert("Check your inbox! A secure password reset link has been sent.");
    }
  });
}