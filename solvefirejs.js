
let correctCount = 0;
let wrongCount = 0;
let longestStreak = 0;
let difficulty = 1;
let questionType = "algebra";
let difficultyProgress = 0;
let algebraQuestion = 0;
let difficultyG=  1;
let difficultyProgressG = 0;
let topicsToWorkOn = [];
let topicToUpdate = ''
let topicWrong = '';
let difficultyN = 4;
let difficultyProgressN = 0;
let difficultyP = 1;
let difficultyProgressP = 0;
let helpOn = false;
let topicsSorted = [];
let probCurrent = 0;
let allQuestion = 0;
let difficultyAll = 0;
let difficultyProgressAll = 0;
let allCurrent = 0;
let wrongQuestionsAlgebra = []
let wrongQuestionsGeometry = []
let wrongQuestionsNum = []
let wrongQuestionsProb = []
let wrongQuestionsAll = []
let userRating = 800
let userRatingGeometry = 800;
let userRatingProbability = 800;
let userRatingNumTheory = 800;
let userRatingAll = 800;
let geometryQuestion = 0
let numQuestion = 0
let probQuestion = 0
let currentQuestion = 0
let geometryCurrent = 0
let numCurrent = 0
let mistake = 0
let unfamiliar = 0
let stuck = 0
let algebraTotal = 0
let algebraWrong = 0
let geometryTotal = 0 
let geometryWrong = 0
let numTotal = 0
let numWrong = 0
let probTotal = 0
let probWrong = 0
let mistakeSolveTrue = localStorage.getItem("mistakeSolve")
if (mistakeSolveTrue ===  null){
    mistake = 0
} else {
    mistake = parseInt(mistakeSolveTrue)
}
let unfamiliarSolveTrue = localStorage.getItem("unfamiliarSolve")
if (unfamiliarSolveTrue === null){
    unfamiliar = 0
} else {
    unfamiliar  = parseInt(unfamiliarSolveTrue)
}
let stuckSolveTrue = localStorage.getItem("stuckSolve")
if (stuckSolveTrue === null){
    stuck = 0
} else {
    stuck = parseInt(stuckSolveTrue)
}
let algebraTotalTrue = localStorage.getItem("algebraTotalSolve")
if (algebraTotalTrue === null){
    algebraTotal = 0
} else {
    algebraTotal = parseInt(algebraTotalTrue)
}
let algebraWrongTrue = localStorage.getItem("algebraWrongSolve")
if (algebraWrongTrue === null){
    algebraWrong = 0
} else {
    algebraWrong = parseInt(algebraWrongTrue)
}
let geometryTotalTrue = localStorage.getItem("geometryTotalSolve")
if (geometryTotalTrue === null){
    geometryTotal = 0
} else {
    geometryTotal = parseInt(geometryTotalTrue)
}
let geometryWrongTrue = localStorage.getItem("geometryWrongSolve")
if (geometryWrongTrue === null){
    geometryWrong = 0
} else {
    geometryWrong = parseInt(geometryWrongTrue)
}
let numTotalTrue = localStorage.getItem("numTotalSolve")
if (numTotalTrue === null){
    numTotal = 0
} else {
    numTotal = parseInt(numTotalTrue)
}
let numWrongTrue = localStorage.getItem("numWrongSolve")
if (numWrongTrue === null){
    numWrong = 0
} else {
    numWrong = parseInt(numWrongTrue)
}
let probTotalTrue = localStorage.getItem("probTotalSolve")
if (probTotalTrue === null){
    probTotal = 0
} else {
    probTotal = parseInt(probTotalTrue)
}
let probWrongTrue = localStorage.getItem("probWrongSolve")
if (probWrongTrue === null){
    probWrong = 0
} else {
    probWrong = parseInt(probWrongTrue)
}
let topicsToWorkOnTrue = localStorage.getItem("topicsToWorkOnSolve")
if (topicsToWorkOnTrue === null){
    topicsToWorkOn = []
} else {
    topicsToWorkOn = JSON.parse(topicsToWorkOnTrue)
}
let topicsGlossarySetTrue = localStorage.getItem("topicGlossarySetSolve")
let TOPIC_GLOSSARY = []
if (topicsGlossarySetTrue === null){
    console.log("topic glossary set")
 TOPIC_GLOSSARY = [
    {
        id: "word problems",
        title: `Word Problems`,
        description: "What sets the AMC 10 apart is that it requires actively understanding math and how to apply it. Word problem are generally questions where the exact numbers and values are expressed indirectly through words rather than a clear problem",
        workOn: [
            "Identifying keywords",
            "Setting up equations",
            "Avoiding misinterpretation"
        ],
        errors: 0,
    },
    {
        id: "algebraic manipulation",
        title: `Algebraic Manipulation`,
        description: "Covers simplifying expressions, solving equations, and working with algebraic structures.",
        workOn: [
            "Factoring",
            "Combining like terms",
            "Recognizing algebraic patterns"
        ],
        errors: 0,
    },
 {
    id: "arithmetic"  ,  
    title: `Arithmetic`,
        description: "Arithmetic pertains to simple math using the \\(4\\) main operations: addition, multiplication, subtraction, and division. It typically shows up in earlier questions and tends to be straightforward",
        workOn: [
            "Mental/Quick Math",
            "Identifying keywords",
            "Shortcuts and factoring (for multiplication and division)"
        ],
        errors: 0,
    },
 {
    id: "systems of equations",    
    title: `Systems of Equations`,
        description: "This includes when you have multiple equations and need to solve for the variables. A general rule is that it is possible to solve when the amount of equations you have is more than or equal to the amount of variables.",
        workOn: [
            "Logic",
            "Substitution", 
            "Elimination",
        ],
        errors: 0,
    },
{
    id: 'functions and graphing',   
    title: `Functions and Graphing`,
        description: "Recognizing and manipulating popular parent functions and being able to identify them",
        workOn: [
            "Parent Functions",
            "Composition of Functions",
            ""
        ],
        errors: 0,
    },
     {
        id: 'logic',
        title: `Logic`,
        description: "The AMC 10 is a timed test, so it serves you well to finish as much as possible as soon as possible. Using logic to eliminate clear answers (i.e. answers that HAVE to be negative, one number being too short) can help you progress faster",
        workOn: [
            "Recognizing Patterns", 
            "Quick Mental Math",
        ],
        errors: 0,
    },
{
    id: 'inequalities',    
    title: `Inequalities`,
        description: "These are problems where you have to find a range instead of a concrete answer. Familiarize yourself with how inequality graphs work and how to interpret them",
        workOn: [
            "Graphing Inequalities",
            "Understanding when a question is asking for inequalities",
            "Composition of Functions"
        ],
        errors: 0,
    },
{
    id: 'modular arithmetic',
    title: `Modular Arithmetic`,
        description: "These problems pertain to the remainders (mods) of operations (typically division)",
        workOn: [
            "Modular Arithmetic Rules",
        ],
        errors: 0,
    },
 {
    id: 'factoring' , 
    title: `Factoring`,
        description: "Popular in algebra, factoring helps us solve equations more quickly and find zeroes",
        workOn: [
            "Sum/difference of squares",
            "GCF and LCM",
        ],
        errors: 0,
    },
    {
        id: 'prime factorization',
        title: `Prime Factorization`,
        description: "Reducing a number to its prime factors and using it to solve problems",
        workOn: [
            "Factor Trees (or whatever method you like to use)",
            "Memorizing the multiples of a few prime factors (e.g. \\(13\\) and \\(17\\)",
        ],
        errors: 0,
    },
 {
    id: 'percents',    
    title: `Percents`,
        description: "A different representation of fractions and ratios, make sure you understand what percents are",
        workOn: [
            "Decimal Multiplication",
            "Converting numbers between Percents, Ratios, and Fractions",
        ],
        errors: 0,
    },
 {
    id: 'graphing'  ,  
    title: `Graphing`,
        description: "You will not be allowed a graphing calculator on the test, however, it would help you out to know how to at least basically sketch graphs. In my experience, this helps you get an idea of what exactly the problem is asking for",
        workOn: [
            "Parent Functions",
            "Logic + Intuition",
        ],
        errors: 0,
    },
    {
       id: 'floor functions',
        title: `Floor Functions`,
        description: "These are surprisingly common in the AMC 10 despite not really being features anywhere else. For floor functions the recorded value is the greatest number less than or equal to \\(x\\)",
        workOn:[
            'Graphing',
            'Logic + Intuition',
        ],
        errors: 0,
    },
     {
       id: 'speed-distance-time',
        title: `Speed Distance Time`,
        description: "Equations that have to do with rates in some way or form. Recall that \\(s=\\frac{d}{t}\\)",
        workOn: [
            "Memorizing the speed, distance, time equation",
            "Understanding conversions and how the different variables relate to each other",
            "Word problems and conceptualy understanding what is being asked",
        ],
        errors: 0,
    },{
        id: 'averages',
        title: `Averages`,
        description: "The AMC 10 likes to play with these a lot. Don't just memorize the formula for an average but remember how it works. Recall that if the average of \\(n\\) numbers is \\(a\\). If you take out a value \\(s\\) from the set, the new average is \\(\\frac{an-s}{n-1}\\)",
        workOn: [
            'Deriving equations',
            'Arithmetic mean',
            'Statistics',
        ],
        errors: 0,
    },
 {
        id: 'induction',
        title: `Induction`,
        description: "Induction, or more commonly engineer's induction, is the process of making educated guesses based on patterns, limitations, etc.",
        workOn: [
            "Making educated guesses",
            "Recognizing Patterns",
            "'Limiting' solutions",
        ],
        errors: 0,
    }, 
 {
        id: 'series',
        title: `Series`,
        description: "Series are essentially patterns in math. They can be geometric (increasing with a ratio) or arithmetic (increasing with a difference). The equation for the sum of an arithmetic series with \\(n\\) numbers and a common difference \\(d\\) is \\(S_{n}=\\frac{n(a_{1}+a_{n})}{2}\\) and the sum of a geometric series is \\(S_{n}=\\frac{a(1-r^n}{1-r}\\)",
        workOn: [
            "Memorizing equations for series",
            "Arithmetic and Geometric Series",
            "Recognizing patterns",
        ],
        errors: 0,
    },
{
    id: 'absolute value',    
    title: `Absolute Value`,
        description: "The absolute value function takes any input and returns a positive output. This is convenient for casework and also appears in a lot of problems. Familiarize yourself with the behavior and use of this function.",
        workOn:
        [ 
            "Graphing",
            "Intuition"
        ],
        errors: 0,
    },
 {
        id: 'exponents',
        title: `Exponents`,
        description: "Repeated multiplication. Learning exponent and logarithm rules can help save you a lot of time on the AMC 10",
        workOn: 
        [
            "Change of base",
            "Adding, subtracting, multiplying, dividing exponents",
            "Factoring out squares",
        ],
        errors: 0,

    },
 {
    id: 'discriminant' ,   
    title: `Discriminant`,
        description: "The discriminant of a polynomial tells us how many solutions (zeroes) it has. For quadratics, the discriminant is \\(-b-4ac\\). If positive, there are \\(2\\) real zeroes, if \\(0\\) there is one, and if negative there are none",
        workOn:[
            "Quadratic Formula"
        ],
        errors:0,
    },
{
    id: 'casework',    
    title: `Casework`,
        description: "This involves splitting up potential answers into different 'cases' depending on what potential outcomes there could be and computing them individuallly. This is especially helpful in questions asking for 'how many of \\(x\\)' or quesitons with absolute value and even powers",
        workOn: [
            'Absolute Value Questions',
            'Quadratics',
        ],
        errors: 0,
    },
 {
  id: 'medians',
    title: `Medians`,
        description: "A facet of statistics, medians are the centers of a dataset and widely considerd the best measure of a dataset. You find the median by removing values from either side unitl you reach the middle",
        workOn: [
            'Statistics',
            'Datasets',
        ],
        errors: 0,
    },
{
    id: 'similar triangles'  , 
    title: `Similar Triangles`,
        description: "If you could only study one geometry concept for the AMC 10, it should be this. Similar triangles are everywhere. The most important thing to do when you're given a problem with triangles is to see if any triangles are similar and to find the ratio",
        workOn: [
            "Similarity Rules (AA) and Congruency Rules (SSS, SAS, ASA, AAS)",
            "Ratios",
        ],
        errors: 0,
    },
{
        id: 'surface area',
        title: `Surface Area`,
        description: "The combined measure of the area on all faces of a polygon. It's rare but not unheard of and typically appears once or twice per test.",
        workOn: [
            "Surface Area equations (for spheres and cones in addition to typical polygons)",
            "3D conceptualization (e.g. imagining how it looks so you can understand it)",
        ],
        errors: 0,
    },
{
    id: 'triangle lines'  , 
    title: `Triangle Lines (Medians, Altitudes, Perpendicular Bisectors, Angle Bisectors`,
        description: `<p>Remember the following lines that you can add to a triangle</p>
        <p>Medians: From the vertex to the midpoint of the opposite line. Intersecting at the centroid which divides medians into \\(1:2\\) ratios and the triangle into \\(6\\) triangles of equal area</p>
        <p>Altitudes: From the vertex perpendicular to the opposite side. Used to find area</p>
        <p>Perpendicular Bisectors: Lines that pass through a side and are perpendicular and bisect it. Intersect at the circumcenter that is the center for the circumscribed circle (touching all vertices)</p>
        <p>Angle Bisectors: Lines that bisect angles, intersect at the incenter, the center of the inscribed circle (tangent to all sides)</p>`,
        workOn: [
            "Medians",
            "Perpendicular Bisectors",
            "Angle Bisectors",
        ],
        errors: 0,
    },
{
    id: 'counting',
        title: `Counting`,
        description: "Popular in probability, this technique involves using logic to find the number of combinations/ways/paths of something, depending on the question. Often, we want to use casweowkr to optimize things instead of physically counting each way",
        workOn: [
            "Optimization",
            "Logic",
            "Casework"
        ],
        errors: 0,
    },
{
    id: 'composite shapes',
        title: `Composite Shapes`,
        description: "Shapes made from intersections of other shapes. Find the area or perimeter by calculating each shape individually then subtracting/adding any overlap",
        workOn: [
            "Area",
        ],
        errors: 0,
    },
 {
    id: 'transformations',
        title: `Transformations`,
        description: "Moving items on a coordinate plane. You can translate, rotate, reflect or dilate",
        workOn: [
            "Translations",
            "Reflections",
            "Rotations",
        ],
        errors: 0,
    },
    {
        id: 'volume',
        title: `Volume`,
        description: "The area contained within a polygon. Make sure to memorize that of more omplex shapes (e.g. spheres) and not just typical ones. Also pay attention to how they are derived in case you need to find the area of something like a dodecahedron or icosahedron",
        workOn: [
            "Volume Formulas",
        ],
        errors: 0,
    },
 {
    id: 'prime numbers',
        title: `Prime Numbers`,
        description: "Prime numbers are what all others are built on. This can help with factoring and solving equations",
        workOn: [
            "Factoring"
        ],
        errors: 0,
    },
{
    id: 'hexagons',
        title: `Hexagons`,
        description: "These are surprisingly common on the AMC 10. Recall that most hexagons are composed of triangles and regular hexagons are composed of \\(6\\) equilateral triangles. Recall that the area of a hexagon is \\(\\sqrt{3}{4}s^2\\)",
        workOn: [
            "Area of a hexagon",
            "Area of equilateral triangles",
        ],
        errors: 0,
    },
 {
    id: 'optimization',
        title: `Optimization`,
        description: "Popular in probabilityl this includes finding the best or most efficient or most criteria matching answer when multiple exist",
        workOn: [
            "Casework",
            "Counting"
        ],
        errors: 0,
    },
{
    id: 'volume relationships',
        title: `Volume Relationships`,
        description: "Knowing the ratios between volumes of different shapes and between volume and area can save time when calculating",
        workOn: [
            "ratios"
        ],
        errors: 0,
    },
 {
    id: 'pyramids',
        title: `Pyramids`,
        description: "There's a number of things we can use in pyramids: height, lateral height, surface area, volume, etc.",
        workOn: [
            "Pythagorean theorem",
            "Surface Area"
        ],
        errors: 0,
    },
 {
    id: 'trigonometry',
        title: `Trigonometry`,
        description: "I like to describe this as 'the study of angles'. Recall identities, and use the unit circle if you need help. Also memorize law of sines and law of cosines in case you see oblique triangles",
        workOn: [
            "Trig Identites \\(\\frac{\\pi}{3}, \\frac{\\pi}{6}, \\frac{\\pi}{4}\\)",
            "Law of Cosines \\(c^2=a^2+b^2-2ab\\cos(C)\\)",
            "Law of Sines \\(\\frac{\\sin(A)}{a}=\\frac{\\sin(B)}{b}=\\frac{\\sin(C)}{c}\\)",
        ],
        errors: 0,
    },
{
    id: 'coordinate plane',
        title: `Coordinate Plane`,
        description: "Popular in algebra and geometry, this can either help you solve just by being able to give you clear values and coordinates for each point, or also just be what the question asks for",
        workOn: [
            "Slope",
            "Functions",
            "Graphing",
        ],
        errors: 0,
    },
{
    title: "Pythagorean Theorem",
    id: 'pythagorean theorem',
        description: "Used for right triangles, \\(a^2+b^2=c^2\\)",
        workOn: [
            "Pythagorean Triples",
            "Theorem",
        ],
        errors: 0,
    },
    {
        id: 'forced simplification',
        title: `Forced Simplification`,
        description: "A technique used to solve quickly. Involves taking ambigous rules and making them as simple as possible",
        workOn: [
            "Logic",
            "Understanding problems",
        ],
        errors: 0,
    },
 {
    id: 'power of a point',
        title: `Power of A Point`,
        description: "I like to think of this as 'triangle lines' for circles. There's a lot of facets, so I won't explain all, but this pertains to chords, tangents, and secants on circles",
        workOn: [
            "Chords",
            "Tangents",
            "Secants",
        ],
        errors: 0,
 },
 {
    id: 'bases',
        title: `Bases`,
        description: `Let's start by unwinding what base \\(b\\) numbers mean. Essentially, you keep counting up, but when you reach the number of the base you are (say \\(10\\)), you reset the place (as in tens place) you are in back to \\(0\\) and then add another digit starting at\\(1\\). </p>
        <p>Thus, the way we convert bases is by dividng the number by the base, finding the remainder, writing that as a digit, then taking the quotient (w/o remainder), dividing by the base again, taking the remainder, etc. etc.</p>`,
        workOn: [
            "Changing from base \\(10\\)",
            "Changing to base \\(10\\)",
            "Modular Arithmetic",
        ],
        errors: 0,
    },
 {
    id: 'combinations',
        title: `Combinations`,
        description: "Common in probability and occasionally present in number theory, combinations are ways to arrange something without regard to the order. The equation for \\(n\\) choose \\(k\\) (ways to make a combination of \\(k\\) elements from  \\(n\\) total) is \\(\\frac{n!}{k!(n-k)!}\\)",
        workOn:
            [
                "Recognizing combinations vs permutations",
                "Combinations equation",
            ],
            errors: 0,
    },
    {
        id: 'counting',
        title: `Counting`,
        description: "Counting is effective to find not just the chances of something happening, but the total number of ways something can happen. Recall the formulas for permutations and combinations and familiarize yourself with computing factorials",
        workOn:
        [
            `Permutations Formula \\(n!\\)`,
            'Combinations formula \\(\\frac{n!}(k!(n-k)}\\)',
            'Factorials',
        ],
        errors: 0,
    },
    {
        id: 'expected outcome',
        title: `Expected Outcome`,
        description: `The probability of something happpening combined with the value associated with it. It is calculated by the probability multiplied by the value, summed with all the other potential values and their probabilities`,
        workOn:
        [
            'Expected Outcome Formula'
        ],
        errors: 0,
    },
    {
        id: 'complementary counting',
        title: `Complementary Counting`,
        description: "A technique used in probability that involves calculating the alternate probability and then subtracting from one. This can often save time when the given probability is too hard or complex",
        workOn: [
            "Saving time"
        ],
        errors: 0,
    }

];
TOPIC_GLOSSARY.forEach(q =>{
        q.attempts = 0;
})
} else {
    console.log("topic glossary set (past)")
     TOPIC_GLOSSARY = JSON.parse(localStorage.getItem("topicGlossarySolve"))
}
function save(){
        localStorage.setItem("ELO", userRatingAll);
        console.log(get())
}
function get(){
        return localStorage.getItem("ELO")
}
console.log(get())
if (get() === null){
        userRatingAll = 800;
} else {
        userRatingAll = get()
}
let strikes = 2;
function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}
let score = 0;
function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}
function updateAllRating(){
    userRatingAll = (userRating + userRatingGeometry + userRatingProbability + userRatingNumTheory)/4
}
// ---------- Shuffle Function ----------
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



// ---------- Question Data ----------
const confettiCanvas = document.getElementById("confetti-canvas");
const myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
});

const questions = [
    {
                title: `<a href="https://drive.google.com/file/d/13JgWp8yZP76xGkW3LAbRZODvHdTVCrBz/view" target="_blank" class="pset-link">Solvefire Bronze 8 Problem 5</a>`,
                text: `Let \\(p(x)=x^2-10x+k\\) for some positive integer \\(k\\). Suppose that both roots of \\(p(x)\\) are real and that \\(\\frac{1}{\\alpha ^2}+\\frac{1}{\\beta ^2}=\\frac{21}{16}\\), where \\(\\alpha\\) and \\(\\beta\\) are the two roots of \\(p(x)\\). Find \\(k\\)`,
                solution: `<b>8</b><p>We have that \\(\\frac{\\alpha ^2 + \\beta ^2}{(ab)^2}\\). By Vieta's rules, we know that \\(\\alpha + \\beta = - \\frac{-10}{1}=10\\) and \\(\\alpha \\times \\beta = k\\). We know that \\(\\alpha ^2 + \\beta ^2 = (\\alpha + \\beta)^2-2\\alpha \\beta = 100 - 2k\\) and obviously, we have \\(k^2\\) in the denominator. We thus have</p>
                $$
                \\frac{100-2k}{k^2}=\\frac{21}{16}
                $$
                $$
                1600-32k=21k^2
                $$
                $$
                21k^2+32k-1600=0
                $$
                $$
                k=\\frac{-32 \\pm \\sqrt{32^2+4 \\times 21 \\times 1600}}{42}=8\\)`,
                answer: '8',
                hint: "Use Vieta's Formulas",
                step: "Rewrite the fraction with a common denominator"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 9
                </a>`,
        text: `<p>Define a sequence \\(a_{1}, a_{2}, a_{3}...\\) such that \\(a_{1}=1\\) and for \\(n \\geq 1\\)</p>
        $$
        a_{n+1}=\\frac{a_n}{1+a_{n}}
        $$
        Find \\(a_{2024}\\). If the answer is a fraction, find the sum of the numerator and the denominator.`,
        answer: '2025',
        solution: `<b>2025</b><p>Let's see if we can make a conjecture by trying out the first few values. We have that \\(a_{2}=\\frac{a_{1}}{1+a_{1}}=\\frac{1}{1+1}=\\frac{1}{2}\\). Trying this out for \\(a_{3}\\) gives \\(a_{3}=\\frac{a_{2}}{1+a_{2}}=\\frac{\\frac{1}{2}}{1+\\frac{1}{2}}=\\frac{1}{3}\\).</p>
        <p>We're starting to see a bit of a pattern, and if we keep going, we'll realize that the value of \\(a_{n}\\) is always going to be \\(\\frac{1}{n}\\). All you have to do is find that \\(a_{2024}=\\frac{1}{2024}\\) thus meaning our answer is \\(1+2024=2025\\). This works great, but let's try to understand why.</p>
        <p>The numerator for \\(n > 1\\) is always going to be \\(\\frac{1}{n}\\). The denominator is always going to be \\(\\frac{n+1}{n}\\) because when we add by \\(1\\) and change the one so that we can add it to the fraction, it adds \\(n\\) to the numerator. This, we are dividing \\(\\frac{\\frac{1}{n}}{\\frac{1+n}{n}}\\). When we expand this and write it as multiplication, we get
        \\(\\frac{1}{n} \\times \\frac{n}{n+1}\\) which of course we cross out the \\(n\\)s and end up with \\(\\frac{1}{n+1})`,
        hint: "What pattern do you notice?",
        step: "Solve the first few values and see what pattern you notice with the numerator and denominator",
        topic: "induction",
        pNumber: 9,

        
    },
    {
        title: `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 7
                </a>`,
        text: `Let \\(x, y,\\) and \\(z\\) be positive real numbers such that \\(x+y +z = 15\\) and \\(x^2 +y^2 +z^2 = 83\\). Find

the value of \\(xy + yz + zx\\).`,
        answer: '71',
        solution: `<b>71</b><p>We don't need to solve for any of the variables independently, nor the terms in the final expression, we just need to know what it's worth. We start by squaring \\(x+y+z\\). We base this off of our knowledge that \\((a+b)^2=a^2+2ab+b^2\\). The same is true when you add another term to the addition. Expanding and later simplifying gives \\((x+y+z)^2=x^2+y^2+z^2+2xy+2yz+2zx\\). We also need to square both sides, so we have \\(x^2+y^2+z^2+2xy+2xy+2zx=15^2=225\\)</p>
        <p>From here, we recognize \\(x^2+y^2+z^2=83\\), so we subtract that out of our equation and are left with \\(2xy+2yz+2zx=225-83=142\\). Now, we realize that this equation is exactly double the equation we want, so we divide \\(\\frac{142}{2}=71\\)`,
        hint: "What identity does this remind you of?",
        step: "Square the first equation",
        topic: "algebraic manipulation",
        pNumber: 7
    },
    {
        title: `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 10
                </a>`,
        text: `How many ordered triples of integers \\((a, b, c)\\) with \\(0 \\leq a, b, c \\leq 5\\) satisfy the equation

\\(a^3+b^3+c^3-3abc=0\\)`,
        answer: '6',
        solution: `<b>6</b><p>Right off the bat, we should wee that \\((0,0,0)\\) is an option. However, there is a certain pattern to be realized in this. This is sort of just logic, but if all the values are the same so the solution is \\((x,x,x)\\), we have \\(3x^3-3x^3\\) when you simplify which will always be \\(0\\). Thus, we have our solutions to be all the posibilities where all the numbers are the same which is \\(6\\)`,
        hint: "What must the relationship between \\(a, b, c\\) be",
        step: "\\(a, b, c\\) must all be the same",
        topic: "logic",
        pNumber: 7
    },
  
    {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 4
                </a>`,
        text: `\\(\\sqrt{6+\\sqrt{6+\\sqrt{6+...}}}\\)`,
        answer: '3',
        solution: `<b>3</b><p>We can set \\(x=\\sqrt{6+x}\\).</p>
        $$
        x=\\sqrt{6+x}
        $$
        $$
        x^2=6+x
        $$
        $$
        x^2-x-6=0
        $$
        $$
        (x-3)(x+2)
        $$
        <p>We assume we take the positive value, so we have \\(x=3\\)`,
        topic: "algebraic manipulation",
        hint: "What can you substitute in?",
        step: "Set \\(x=\\sqrt{6+x}\\)"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1jL6YhoTo0eZbjgGHB8K4wvN9-gUxUs55/view" target="_blank" class="pset-link">
                Solvefire Iron Round 5 Problem 8
                </a>`,
        text: `The numbers \\(a,b,c\\) satisfy
\\(a+b+c=12\\)

and

\\(ab+bc+ca=44\\)

What is the value of \\(a^2+b^2+c^2\\)
?`,
        solution: `<b>56</b><p>This is one of the most common problems on the AMC10 and it relies on the knowledge that \\((a+b+c)^2=a^2+b^2+c^2+2ab+2bc+2ca\\).</p>
        $$
        (a+b+c)^2=12^2=144
        $$
        $$
        a^2+b^2+c^2+2ab+2bc+2ca=144
        $$
        $$
        a^2+b^2+c^2+2(44)=144
        $$
        $$
        a^2+b^2+c^2=56
        $$`,
        answer: '56',
        hint: "How do the two equations relate? What identity does this remind you of?",
        step: "Square the first equation",
        topic: "algebraic manipulation"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1jL6YhoTo0eZbjgGHB8K4wvN9-gUxUs55/view" target="_blank" class="pset-link">
                Solvefire Iron Round 5 Problem 9
                </a>`,
        text: `<p>If</p>
        $$
        x+\\frac{1}{x}=3
        $$
        <p>what is the value of </p>
        $$
        x^2+\\frac{1}{x^2}?
        $$`,
        answer: '7',
        solution: `<b>7</b><p>Square the first equation to get \\(x^2+2+\\frac{1}{x^2}=9\\) and subtract \\(2\\) on either side for \\(x^2+\\frac{1}{x^2}=7\\)`,
        hint: "How can you get the second equation from the first",
        step: "Square the first equation",
        topic: "algebraic manipulation"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1jL6YhoTo0eZbjgGHB8K4wvN9-gUxUs55/view" target="_blank" class="pset-link">
                Solvefire Iron Round 5 Problem 10
                </a>`,
        text: `The average of five numbers is \\(18\\). If one number \\(x\\) is removed, the average of the
remaining four numbers is \\(20\\). What is \\(x\\)?`,
solution: `<b>10</b><p>Write this out algebraicly:</p>
$$
\\frac{s+x}{5}=18
$$
$$
\\frac{s}{4}=20
$$
<p>Where \\(s\\) is the sum of all other numbers. From the other equation, we have that \\(s=80\\). Inputting that into the first equation we have \\(80+x=18(5)=90\\) and \\(x=10\\)`,
answer: '10',
hint: "Write it out algebraicly",
step: "Use the equations \\(\\frac{s+x}{5}=18\\) and \\(\\frac{s}{4}=20\\) for \\(s=\\) sum of all other numbers in the set"
    },
    {
    title: `<a href="https://drive.google.com/file/d/1Fx5je-2M02iqRk8TYz6Luzz3C3uxQfyJ/view" target="_blank" class="pset-link"> Solvefire Iron Round 6 Problem 2</a>`,
    text: `<p>A function \\(f\\) is defined on the positive integers by</p>
    $$
    f(1), f(2)=2
    $$
    <p>and for all \\(n \\geq 3\\)</p>
    $$
    f(n)=f(n-1)+f(n-2)+1
    $$
    <p>Find \\(f(6)\\)`,
    answer:'20',
    solution: `<b>20</b><p>Right off the bat, we see this is similar to the fibbonaci sequence but with a few key differences: We start with \\(2\\) and we add \\(1\\)</p>
    <p>This one is easy enough where you can plausibly brute force, so let's just look through the process:</p>
    $$
    f(3)=f(2)+f(1)+1=2+1+1=4
    $$
    $$
    f(4)=f(3)+f(2)+1=4+2+1=7
    $$
    $$
    f(5)=f(4)+f(3)+1=7+4+1=12
    $$
    $$
    f(6)=f(5)+f(4)+1=12+7+1=20
    $$`,
    hint: "Solve for \\(f(n)\\) one by one",
    step: "Solve for each value independently",
    topic: "arithmetic"
    },
        {
                title: `<a href="https://drive.google.com/file/d/12HNZ5bzSkAHDBXr1CBgCExrOfkeXUiFb/view" target="_blank" class="pset-link">
                Solvefire Iron Round 6 Problem 4
                </a>` ,
                text: `Alice can finish a job in \(6\) hours, and Bob can finish the same job in \\(10\\) hours. They work together for \\(2\\) hours, and then Bob leaves. If Alice needs \\(\\frac{m}{n}\\) more hours to finish the job, 
                where \\(m\\) and \\(n\\) are relatively prime positive integers, find \\(m+n\\)`,
                solution: `<b>19</b><p>Let's calculate how much each of them did in the \\(2\\) hours. We know that Alice did \\(\\frac{2}{6}=\\frac{1}{3}\\) of the job and Bob did \\(\\frac{2}{10}=\\frac{1}{5}\\) for a total of \\(\\frac{1}{3}+\\frac{1}{5}=\\frac{8}{15}\\)</p>
                <p>Alice needs to complete \\(\\frac{7}{15}\\) of her job, which will take her \\(\\frac{7}{15} \\times 6 = \\frac{14}{5}\\) for \\(m=14, n=5\\) and \\(m+n=19\\)`,
                answer: '19',
                hint: "How much did each of them do in the \\(2\\) hours?",
                step: "Find how much each of them did in \\(2\\) hours by \\(\\frac{2}{\\textup{total time they need to finish a j*b}}\\)",
                topic: "speed-distance-time"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 3
                </a>`,
        text: `<p>Determine the number of ordered pairs of integers \\((m,n)\\) that satisfy the equation:</p>
        $$
        mn-2m-3n=10
        $$`,
        solution: `<b>10</b><p>We first start by factoring by grouping (using Simon's Favorite Factoring Trick).</p>
        $$
        m(n-2)-3n=10
        $$
        $$
        m(n-2)-3(n-2)=16 \\textup{we add 6 to both sides}
        $$
        $$
        (m-3)(n-2)=16
        $$
        <p>Really, the only thing we care about is the RHS. We need to find how many factors \\(16\\) has, because that will tell us 
        how many values \\((m-3)\\) and \\((n-2)\\) have, and thus \\(m\\) and \\(n\\) have. We know the prime factorization of \\(16=2^4\\) for \\(5\\) positive factors, but those
        can also be negative so we have \\(2 \\times 5 = 10\\)`,
        answer: '10',
        hint: "Use Simon's Favorite Factoring Trick",
        step: "Factor out as \\((m-3)(n-2)=...\\), find the RHS and the number of factors",
        topic: "factoring"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 5
                </a>`,
        text: `Let \\(f(1)=2\\) and \\(f(n+1)\\) = \\(\\frac{f(n)-1}{f(n)+1}\\) for all \\(n \\geq 1\\). The value of \\(f(2026\\) can be written as \\(\\frac{p}{q}\\) in lowest terms. Find \\(p+q\\)`,
        solution: `<b>4</b><p>We're goin to try and solve this by induction. Trying out the first few values of \\(f(n)\\) gives \\(2, \\frac{1}{3}, -\\frac{1}{2}, -3, =2, \\frac{1}{3}\\). After \\(\\frac{1}{3}\\), the pattern restarts. Thus, 
        the only value that is different is the first, so we subtract \\(2026-1\\) and find \\(2025 \\equiv 1 \\textup{ mod }(4)\\) (we use \\(4\\) because it's the length of the pattern.) The value in position \\(1\\) is \\(\\frac{1}{3}\\) for \\(1+3=4\\)`,
        answer: '4',
        hint: "Use induction",
        step: "Find the first few values and then use modular arithmetic to see what the \\(2026\\)th value would be",
        topic: "modular arithmetic"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 6
                </a>`,
        text: `Let \\(x\\) and \\(y\\) be real numbers such that \\(x+y=4\\) and \\(x^3+y^3=28\\). Find the value of \\(x^2+y^2\\)`,
        solution: `<b>10</b><p>Follow the following algebraic manipulation</p>
        $$
        x+y=4
        $$
        $$
        (x+y)^3=4^3
        $$
        $$
        x^3+3x^2y+3xy^2+y^3=64
        $$
        $$
        x^3+y^3=28 (\\textup{referencing the problem})
        $$
        $$
        28+3x^2y+3xy^2=64 (\\textup{substitution})
        $$
        $$
        3x^2y+3xy^2=36
        $$
        $$
        3xy(x+y)=36
        $$
        $$
        3xy(4)=36 (\\textup{substituting a value from the first equation of the problem})
        $$
        $$
        3xy=9
        $$
        $$
        xy=3
        $$
        $$
        (x+y)^2=4^2
        $$
        $$
        x^2+2xy+y^2=16
        $$
        $$
        x^2+y^2+6=16
        $$
        $$
        x^2+y^2=10
        $$
        `,
            hint: "Use algebraic manipulation by squaring and cubing the first equation",
            step: "Cube the first equation and substitute known values to solve for \\(xy\\)",
            topic: "algebraic manipulation"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1yUNjUWogsneSLl_p9KpJimbOHVLgX3J-/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 1
                </a>`,
        text: `Let \\(x\\) be a real number such that \\(x + \\frac{1}{x}=5\\). Find the value of \\(x^2+\\frac{1}{x^2}+x+\\frac{1}{x}\\)`,
        solution: `<b></b><p>We can square the first equation and find \\((x+\\frac{1}{x})^2=x^2+2+\\frac{1}{x}^2=5^2=25\\). Thus, \\(x^2+\\frac{1}{x^2}=23\\). 
        Our final equation gives \\(23+5=28\\)</p>`,
        hint: "How can you find \\(x^2+\\frac{1}{x^2}\\)",
        step: "Square the first equation",
        topic: "algebraic manipulation",
        answer: "28",
    },
    {
        title: `<a href="https://drive.google.com/file/d/1F0yIO-WMnFQGiOqP57qvAc3lyLcXcLWk/view" target="_blank" class="pset-link">
                Solvefire Iron Round 8 Problem 4
                </a>`,   
        text: `Find the sum of all real values of \\(x\\) that satisfy \\(|x^2-6x+5| = |x-1|\\)`,
        solution: `<b>11</b><p>First, we factor \\(x^2-6x+5=(x-5)(x-1)\\). Since this is absolute value, we split into cases:</p>
        <p>Case one, they are both positive. We can divide out \\((x-1)\\) for \\(x-5=1\\) which gives \\(6\\)</p>
        <p>Case two, they are both \\(0\\). Then, we just have \\(x=1\\)</p>
        <p>Case three, only one is negative. This is the same regardless of which is negative, but we have \\(x-5=-1\\) which gives \\(x=4\\)</p>
        <p>\\(4+6+1=11\\)`,
        answer: '11',
        hint: "Divide into cases depending on the polarity of each side",
        step: "Factor \\(x^2-6x+5\\)",
        topic: "casework"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1F0yIO-WMnFQGiOqP57qvAc3lyLcXcLWk/view" target="_blank" class="pset-link">
                Solvefire Iron Round 8 Problem 7
                </a>`,     
        text: `If \\(a, b,\\) and \\(c\\) are the roots of the polynomial \\(x^3-7x^2+14x-8=0\\), find the value of \\(a^2+b^2+c^2\\)`,
        solution: `<b>21</b><p>With Vieta's formulas, even without knowing \\(a,b,c\\), we can find their sum to be \\(\\frac{a_{n-1}}{a_{n}}=\\frac{-7}{1}=-7\\). Squaring both of these gives \\(a^2+b^2+c^2+2ab+2bc+2ac=49\\). We can find 
        \\(ab+bc+ca=\\frac{a_{n-2}}{a_{n}}=\\frac{14}{1}=14\\). Thus, we have \\(a^2+b^2+c^2+2(14)=49\\) so \\(a^2+b^2+c^2=21\\)`,
        answer: `21`,
        hint: "Use vieta's formulas that \\(a+b+c=\\frac{a_{n-1}{a_{n}}\\) and \\(ab+bc+ca=\\frac{a_{n-2}}{a_{n}}\\)",
        topic: "algebraic manipulation"
    },
    {
        title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 1
                </a>`, 
        text: `Let \\(f(x)=x^2-3x+3\\). Determine the number of solutions to \\(f(f(n))=3\\)`,
        solution: `<b>2</b><p>First, we find how many values of \\(x\\) make \\(f(x)=3\\). We solve</p>
        $$
        3=x^2-3x+3
        $$
        $$
        0=x^2-3x
        $$
        $$
        0=x(x-3)
        $$
        $$
        x=0, x=3
        $$
        <p>We now solve for those two. We already know \\(x=3\\) will have two solutions, but we use the discriminant \\(b^2-4ac\\) for \\(x=0\\)</p>
        $$
        (-3)^2-4(3)(1)
        $$
        $$
        9-12
        $$
        $$
        -3
        $$
        <p>Since this is negative, we have no real solutions for that. Thus, there are only two solutions (the ones from \\(f(n)=3\\))`,
        answer: '3',
        hint: "Use the discriminant",
        step: "First find values of \\(x\\) such that \\(f(x)=3\\)",
        topic: "logic"
    },
    {
        title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 9
                </a>`,   
        text: `Let \\(x,y\\) be real numbers greater than zero which satisfy the equation \\(\\textup{log}_{x}y+\\textup{log}_{y}x=\\frac{10}{3}\\)
        The largest possible value of \\(\\textup{log}_{x}y-\\textup{log}_{y}x\\) can be expressed in the form \\(\\frac{m}{n}\\) , where \\(m\\) and \\(n\\) are
        coprime. Compute \\(m+n\\)`,
        solution: `<b>11</b><p>We can substitute \\(u=\\textup{log}_{x}y\\). By change of base, we know that \\(log_{x}y=\\frac{\\textup{log}y}{\\textup{log}x}\\) and \\(log_{y}x=\\frac{\\textup{log}x}{\\textup{log}y}\\), so \\(\\textup{log}_{y}x=\\frac{1}{u}\\.</p>
        $$
        u+\\frac{1}{u}=\\frac{10}{3}
        $$
        $$
        u^2-\\frac{10}{3}u+1=0
        $$
        $$
        3u^2-10u+3=0
        $$
        $$
        (3u-1)(u-3)=0
        $$
        $$
        u=\\frac{1}{3}, u=3
        $$
        $$
        3-\\frac{1}{3}=\\frac{8}{3}
        $$
        $$
        8+3=11
        $$`,
        answer: '11',
        hint: "Use substitution",
        step: "Substitute a variable for \\(log_x{y}\\) and find a relation between \\(log_x{y}\\) and \\(log_{y}x\\) through the change of base",
        topic: "algebraic manipulation"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1sOEXpXM_ckqIZpDTJOlbCsT30BHPEJ3w/view" target="_blank" class="pset-link">
                Solvefire Silver 1 Question 1
                </a>`,   
        text: `<p>Find all real numbers \\(x\\) satisfying</p>
        $$
        \\sqrt{x+\\sqrt{x+\\sqrt{x+...}}}=5
        $$`,
        solution: `<b>20</b><p>Call \\(y=\\sqrt{x+\\sqrt{x+\\sqrt{x+...}}}\\)=5</p>
        <p>The entire equation can be expressed as \\(\\sqrt{x+y}\\), because it is an infinite telescoping sum, and that is equal to \\(5\\), so we have</p>
        $$
        5=\\sqrt{x+y}
        $$
        $$
        5=\\sqrt{x+5}
        $$
        $$
        25=x+5
        $$
        $$
        x=20`,
        hint: "Use substitution", 
        step: "Substitute a value for \\(\\sqrt{x+\\sqrt{x+\\sqrt{x}}}\\)",
        topic: "algebraic manipulation",
        answer: '20'
    },
    {
    title: `<a href="https://drive.google.com/file/d/1sOEXpXM_ckqIZpDTJOlbCsT30BHPEJ3w/view" target="_blank" class="pset-link">
    Solvefire Silver 1 Question 2
    </a>`,   
    text: `The roots of \\(x^2-5x+3=0\\) are \\(\\alpha\\) and \\(\\beta\\). Compute \\(\\alpha^3 + \\beta^3\\)`,
    solution: `<b>80</b><p>We don't actually need to solve for \\(\\alpha\\) and \\(\\beta\\), because we have Vieta's Formulas</p>
    <p>We know that \\(a+b=-(\\frac{-5}{1})=5\\) and \\(ab=(-1)^3+\\frac{3}{1}=-3\\). We have \\((a+b)^3=a^3+b^3+3a^2b+3ab^2=125\\)</p>
    <p>We can rewrite \\(3a^2b+3ab^2=3ab(a+b)\\) whcih we know to be equal to \\(-9(5)=-45\\)</p>
    <p>\\(125-45=80\\)</p>`,
    answer: '80',
    hint: "Use Vieta's Formulas",
    step: "Find \\(ab\\) and \\(a+b\\) using Vieta's Formulas",
    topic: "algebraic manipulation"
    },
    {
    title: `<a href="https://drive.google.com/file/d/1sOEXpXM_ckqIZpDTJOlbCsT30BHPEJ3w/view" target="_blank" class="pset-link">
    Solvefire Silver 1 Question 3
    </a>`,   
    text: `The cubic \\(x^3-6x^2+11x-6=0\\) has roots \\(p,q,r\\). Compute \\(p^2+q^2+r^2\\)`,
    solution: `<b>14</b><p>We use Vieta's Formulas to find \\(p+q+r\\) as \\(-\\frac{a_{n-1}}{a_{n}}=-\\frac{-6}{1}=6\\)</p>
    <p>We have that \\((p+q+r)^2=p^2+q^2+r^2+2pq+2pr+2qr=36\\). We also use Vieta's Formulas to find \\(pq+qr+rq=\\frac{a_{n-2}}{a_{n}}=\\frac{11}{1}=11\\)</p>
    <p>Thus, we find \\(36-2(11)=36-22=14\\)</p>`,
    answer: '14',
    hint: "Use Vieta's Formulas",
    step: "Use Viet'as Formulas to find \\(p+q+r\\) and \\(pq+qr+rp\\)",
    topic: "algebraic manipulation"
    },
    {
           title: `<a href="https://drive.google.com/file/d/1mPBzWkGBDV-demFxXlQEImqYyUuVQWWA/view" target="_blank" class="pset-link">
    Solvefire Bronze 5 Question 3
    </a>`,  
    text: `Let \\(P(x)\\) be a polynomial of degree \\(4\\) such that \\(P(1)=1, P(2)=2, P(3)=3, P(4)=4\\) and \\(P(5)=15\\). What is the value of \\(P(6)\\)?`,
    solution: `<b>56</b><p>Since we know that for integer \\(n\\) where \\(1 \\leq n \\eq 4\\) \\(n=P(n)\\), we set up \\(Q(n)=P(n)-n\\), where the roots are \\(1,2,3,4\\) so we have \\(Q(x)=a(x-1)(x-2)(x-3)(x-4)\\). We already know \\(Q(5)=P(5)-5=10\\) so we solve for \\(A\\)</p>
    $$
    10=A(4)(3)(2)(1)
    $$
    $$
    A=\\frac{5}{12}
    $$
    <p>We thus find \\(Q(6)\\)</p>
    $$
    Q(6)=\\frac{5}{12}(5)(4)(3)(2)
    $$
    $$
    Q(6)=50
    $$
    $$
    50=P(6)-6
    $$
    $$
    P(6)=56
    $$`,
    answer: '56'  ,
    hint: "Create a different function and solve for that instead",
    step: "Write an equation with respect to \\(P(x)\\) with roots \\(1, 2, 3, 4\\)",
    topic: "algebraic manipulation"

    },
    {
        title: `<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank class="pset-link">Solvefire Bronze 3 Problem 3</a>`,
        text: `<p>How many integer pairs \\((x,y)\\) satisfy</p>
        $$
        x \\leq 3y \\leq 30, y \\leq 2x \\leq 30
        $$`,
        solution: `<b>100</b><p>We know that the highest possible value of \\(y=10\\), so we just do casework</p>
        <p>\\(y=10\\) then \\(x=5,6,...15\\), that gives \\(11\\) possible values</p>
        <p>\\(y=9\\), then \\(x=5,6,...15\\), that gives \\(11\\) possible values</p>
        <p>\\(y=8\\) then \\(x=4,5...15\\), that gives \\(12\\)
        <p>\\(y=7\) then \\(x=4,5...15\\), that gives \\(12\\)
        <p>\\(y=6\\) then \\(x=3,4...15\\), that gives \\(13\\)
        <p>\\(y=5\\) then \\(x=3,4...15\\), that gives \\(13\\)
        <p>\\(y=4\\) this is where it get tricky because \\(15\\) is no loner the upper bound for \\(x\\). We have \\(2 \\leq x \\leq 12 = 11\\) values</p>
        <p>\\(y=3\\) we have \\(2 \\leq x \\leq 9=8\\)</p>
        <p>\\(y=2\\) where \\(1 \\leq x \\leq 6\\) so \\(6\\)</p>
        <p>Finaly \\(y=1\\), we have \\(1 \\leq x \\leq 3 \\) for \\(3\\)
        <p>Adding \\(11+11+12+12+13+13+11+8+6+3=100\\)`,
        answer: '100',
        hint: "Split into cases",
        step: "Calculate for each value of \\(y\\)",
        topic: "casework"
        

    },
    {
        title: `<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank class="pset-link">Solvefire Bronze 6 Problem 8</a>`,
        title: `In the expansion of \\((ax+b)^1500\\), the coefficients of \\(x^3\\) and \\(x^4\\) are equal. Find \\(a+b\\) if \\(a, b\\) are relatively prime positive integers.`,
        solution: `<b>1501</b>This is a prime example of binomial theorem, which states that the expansion of \\((a+b)^n \\sum_{i=1}^{n} \\binom{n}{k} (a)^k b^n\\). We thus solve</p>
        $$
        \\binom{1500}{3}a^3 b^{1500-3} = \\binom{1500}{4}a^4 b^{1500-4}
        $$
        $$
        \\binom{1500}{3}a^3 b^{1497} = \\binom{1500}{4}a^4 b^1496
        $$
        $$
        \\binom{1500}{3}b=\\binom{1500}{4}a
        $$
        $$
        \\frac{1500 \\times 1499 \\times 1498}{6}b=\\binom{1500 \\times 1499 \\times 1498 \\times 1497}{24}a
        $$
        $$
        \\frac{b}{6}=\\frac{1497}{24}a
        $$
        $$
        b=\\frac{1497}{4}a
        $$
        $$
        b=1497, a=4
        $$
        $$
        1497+4=1501
        $$`,
        answer: "1501",
        hint: "Use binomial theorem",
        step: "Set the outputs of binomial theorem equal to each other for \\(k=3, k=4\\)",
        topic: "factoring"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank class="pset-link">Solvefire Bronze 6 Problem 10</a>`,
        text: `A swimmer travels a distance \\(d\\) downstreak in \\(20\\) minutes and upstream in \\(60\\) minutes. A rower travels the sam
        edistance upstream in \\(20\\) minutes. How long odes the rower take to travel downstream?`,   
        solution: `<b>12</b><p>Since we know that \\(s=\\frac{d}{t}\\), we call the swimmer's speed \\(s\\) and the current speed \\(c\\). We have \\(s+c=\\frac{d}{20}\\) and \\(s-c=\\frac{d}{60}\\). We don't actually 
        care about the individual variables, we just need to know their relationships. For the rower, we have \\(r-c=\\frac{d}{20}\\) and we want \\(t\\) in \\(r+c=\\frac{d}{t}\\)</p>
        $$
        s+c+s-c=\\frac{d}{20}+\\frac{d}{60}
        $$
        $$
        2s=\\frac{d}{15}
        $$
        $$
        s=\\frac{d}{30}
        $$
        $$
        \\frac{d}{30}+c=\\frac{d}{20}
        $$
        $$
        \\frac{d}{30}-c=\\frac{d}{60}
        $$
        $$
        c=\\frac{d}{20}-\\frac{d}{30}
        $$
        $$
        c=\\frac{d}{60}
        $$
        $$
        60c=d
        $$
        $$
        r-c=\\frac{d}{20}
        $$
        $$
        r-c=\\frac{60c}{20}=3c
        $$
        $$
        r=4c
        $$
        $$
        4c+c=\\frac{d}{t}
        $$
        $$
        5c=\\frac{60c}{t}
        $$
        $$
        t=12
        $$

`,
answer: '12',
hint: "Write equations using \\(s=\\frac{d}{t}\\)",
step: "You should have \\(s+c=\\frac{d}{20}\\), \\(s-c=\\frac{d}{60}\\), \\(r-c=\\frac{d}{20}\\)",
topic: "algebraic mainpulation"
    },
    {
title: `<a href="https://drive.google.com/file/d/1FnKSnsci5mpWmfoZauslbFteUI83XPP7/view" target="_blank" class="pset-link">Solvefire Bronze 7 Problem 7</a>`, 
text: `<p>Let \\(x\\) and \\(y\\) be real numbers greater than \\(1\\) such that </p>
$$
\\textup{log}_{x}y+\\textup{log}_{y}x=\\frac{5}{2}
$$
<p>and</p>
$$
xy=64
$$
<p>Find \\(x+y\\)</p>`,
solution: `<b>20</b><p>By change of base, we have that \\(\\frac{\\textup{log}y}{\\textup{log}x}+\\frac{\\textup{log}x}{\\textup{log}y}=\\frac{5}{2}\\). We rewrite \\(a=\\textup{log}_{x}y) so our equation becomes \\(a+\\frac{1}{a}=\\frac{5}{2}\\), such that \\(a^2-\\frac{5}{2}a+1=2a^2-5a+2=0\\).</p>
<p>Factoring this gives \\((2a-1)(a-2)=0\\) for \\(a=\\frac{1}{2}\\) or \\(a=2\\). It really doesn't matter what \\(a\\) is, because \\(x\\) and \\(y\\) need to be interchangeable anyways. Thus, we use \\(a=2\\). We have that \\(x^2=y\\) so \\(x^3=64\\) for \\(x=4, y=16\\), and \\(x+y=20\\)`,
answer: '20',
hint: "\\(\\textup{log}_{x}y=\\frac{1}{\\textup{log}_{y}x}\\)",
step: "Substitute a value ofr \\(\\textup{log}_{x}y\\)",
topic: "algebraic manipulation"
    },
    {
        title: `<a href="https://drive.google.com/file/d/13JgWp8yZP76xGkW3LAbRZODvHdTVCrBz/view" target="_blank" class="pset-link">Solvefire Bronze 8 Problem 1</a>`,
        text: `<p>Let \\(x\\) and \\(y\\) be positive real numbers satisfying</p>
        $$
        \\textup{log}_{2}x+\\textup{log}_{4}y=5 \\textup{and} \\textup{log}_{4}x+\\textup{log}_{2}y=7\\)
        $$
        <p>Find \\(xy\\)</p>`,
        solution: `<b>256</b><p>We change the entire thing into \\(\\textup{log}2\\) w/ change of base so \\(\\textup{log}_{2}x+\\frac{\\textup{log}_{2}y}{2}=5\\) and \\(\\textup{log}_{2}y+\\frac{\\textup{log}_{2}x}{2}=7\\). With \\(a=\\textup{log}_{2}x\\) and \\(b=\\textup{log}_{2}y\\) so we have that \\(a+\\frac{b}{2}=5\\) and \\(\\frac{a}{2}+b=7\\) so</p>
        $$
        2a+b=10
        $$
        $$
        a+2b=14
        $$
        -3b=-18
         b=6
         $$
         $$
         a=2
         $$
         $$
         \\textup{log}_{2}(xy)=\\textup{log}_{2}x+\\textup{log}_{2}y=a+b=8
         $$
         $$
         xy=2^8
         $$`,
         answer: '256',
         topic: "functions and graphing",
         hint: "Use substitution and change of base",
         step: "Use change of base to change to base \\(2\\)"
    }
]
const geometryQ = [
    {
        title: `<a href="https://drive.google.com/file/d/13JgWp8yZP76xGkW3LAbRZODvHdTVCrBz/view" target="_blank" class="pset-link">Solvefire Bronze 8 Problem 6</a>`,
        text: `In triangle \\(ABC, AB=7, BC=8,\\) and \\(\\angle B=60^\\circ\\). Find the square of the circumradius of triangle \\(ABC\\)`,
        solution: `<b>19</b><p>Using the law of cosines, we have that \\(AC\\), denoted as \\(x\\), is found in \\(x^2=7^2+8^2-2(7)(8)\\textup{cos}(60)=\\sqrt{57}\\). The law of sines tells us that \\(\\frac{AC}{\\textup{sin}\\angle B}=2R\\), for \\(R=\\textup{circumradius}), so we solve for \\(R^2=\\frac{57}{3}=19\\)`,
        answer: '19',
        hint: "Use law of sines and law of cosines",
        step: "Use the law of cosines \\(c^2=a^2+b^2-2ab\\textup{cos}(c)\\) to find \\(AC\\)",
        topic: "triangle lines"
    },
      {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 3
                </a>`,
        text: `A square \\(ABCD\\) has a side length \\(4\\). \\(E\\) is a point on \\(AD\\) such that \\(AE=3\\). \\(F\\) is a point on \\(CD\\) such that \\(DF=2\\). \\(H\\) is a point on \\(AB\\) such that \\(AH=2\\). \\(G\\) is formed
        by the intersection of \\(FH\\) and \\(EB\\). Triangle \\(EFG\\) has a perimeter in the form of \\(a + \\sqrt{a}\\) where \\(a\\) is a positive integer. Compute \\(a\\).`,
        image: "iron41.png",
        answer: '5',
        solution: `<b>5</b><p>Start by writing in what you know and filling in the rest. Since \\(AD = 4\\) and \\(AE=3\\) we have that \\(DE=1\\) (I recommend drawing this out). We also know that \\(DF, CF, AH, BH\\) must all be \\(2\\).</p>
        <p>With this knowledge, we can immediately go ahead and solve for \\(EF\\) by using the pythagorean theorem. We knkow that \\(EDF\\) must be a right triangle because it is the corner of a rectangle, and we know the side lenths so we find \\(\\sqrt{1^2+2^2}=\\sqrt{5}\\)</p>
        <p>Now, let's try to find the location of \\(G\\). If we write all the points we know as coordinates, we have \\(A(0,0), E(0,3), D(0,4), F(2,4), C(4,4), B(4,0), H(2,0)\\). We can model the line \\(EB\\) as a linear equation \\(y=\\frac{-3}{4}+3\\). We also know that \\(G\\) is at \\(x=2\\), so we solve that for \\(x=2\\) and get \\(\\frac{-6}{4}+3=\\frac{3}{2}\\).</p>
        <p>We know then that the vertical distance between \\(E\\) and \\(G\\) is \\(3-\\frac{3}{2}=\\frac{3}{2}\\). We already knew that the horizontal distance is \\(2\\) because it is the same as \\(AH\\), so we use the pythagorean theorem. \\(\\sqrt{\\frac{3}{2}^2+2^2}=\\frac{5}{2}\\). We also know that \\(FG=4-\\frac{3}{2}=\\frac{5}{2}\\). Thus, we have the total perimeter to be \\(\\sqrt{5}+\\frac{5}{2}+\\frac{5}{2}=\\sqrt{5}+5\\). We have \\(a=5\\)`,
        hint: "What values can you find from the information you have",
        step: "Label the remaining values on the side lengths, then model the square on the coordinate grid with linear functions as lines.",
        topic: "algebraic manipulation"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 2
                </a>`,
        text: `A point \\(P\\) inside a square \\(ABCD\\) is such that the distance from \\(P\\) to vertex \\(A\\) is \\(1\\), to vertex
\\(B\\) is \\(2\\), and to vertex \\(C\\) is \\(3\\). The side length of \\(ABCD\\) is in the form \\(\\sqrt{a+b\\sqrt{b}}\\), where \\(a\\)

and \\(b\\) are coprime integers. Compute \\(a+b\\).`,
answer: `7`,
solution: `<b>7</b><p>Assume the points \\(ABCD\\) are on a coordinate plane such that \\(A(0,s), B(s,s), C(s,0), D(0,0)\\) (with the side length of the square being \\(s\\)).</p>
<p>From here, we use the distance formula \\(\\sqrt{x^2+y^2}\\) (derivated from the pythagorean theorem) to represent the location of Point \\(P(x,y)\\). We have that \\(x^2+(s-y)^2=1, (s-x)^2+(s-y)^2=4, (s-x)^2+y^2=9\\). We want to solve for \\(x\\), but that's not possible because it exists at different powers in this equation. Thus, we solve for \\(x\\) and \\(y\\).</p>
Subtracting the second equation from the first gives us \\(x^2-(s-x)^2=-3\\). We expand this into \\(x^2-s^2+2xs-x^2=-3\\) which of course becomes \\(2xs-s^2=-3\\) and then \\(x=\\frac{-3+s^2}{2s}\\). We do the same thing by subtracting the second equation from the third and finding \\(y=\\frac{5-y}{2s}\\).</p>
<p>With these, we substitute them back into our original equations. For the first we have that \\(\\frac{(-3+s^2)^2}{4s^2}+(s-\\frac{(5+s^2)^2}{4s^2})^2=1\\)</p>
$$
\\frac{(-3+s^2)^2}{4s^2}+(s-\\frac{(5+s^2)^2}{2s})^2=1
$$
$$
\\frac{s^4-6s^2+9}{4s^2}+\\frac{s^4-10s^2+25}{4s^2}=1
$$
$$
s^4-6s^2+9+s^4-10s^2+25=4s^2
$$
$$
2s^4-16s^2+34=4s^2
$$
$$
s^4-10s^2+17=0
$$
$$
u=s^2
$$
$$
u^2-10u+17=0
$$
$$
u=\\frac{10 \\pm \\sqrt{100-68}}{2}
$$
$$
u=5 \\pm 2\\sqrt{2}
$$
$$
s^2=5 \\pm 2\\sqrt{2}
$$
$$
s=\\sqrt{5 + 2\\sqrt{2}}
$$
$$
a=5 b=2
$$
$$
a+b=7
$$
`,
hint: "How can you represent the square on the coordinate grid?",
step: "Write square \\(ABCD\\) on the coordinate grid with points \\(A(0,s), B(s,s), C(s,0), D(0,0)\\) and use the distance formula to find the coordinates of \\(P\\) in relation to sidelength \\(s\\)",
topic: "algebraic manipulation"
    },
    {
title: `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 6
                </a>`,
        text: `A right circular cylinder with radius \\(2\\) and height \\(6\\) is filled with water to a depth of \\(4\\) inches.
A solid metal sphere with a radius of  \\(1.5\\) inches is gently lowered into the cylinder, sinking to
the bottom. By how many inches does the water level rise? If the answer is a fraction, find
the sum of the numerator and the denominator.`,
answer: `17`,
solution: `<b>17</b><p>We need to find the total volume of water that the sphere diplaces, so we use \\(\\frac{4}{3}(1.5)^3=4.5\\). We're going to negate pi because we're going to divide it again anyways. That's how much water rises, but we need to translate that into height. We find the height of a cylinder with volume \\(4.5\\) and radius \\(2\\). We thus use \\(4.5=2^4h\\)
 so \\(h=1.125\\) which is a fraction of \\(\\frac{9}{8}\\) for \\(9+8=17\\). Notice that the original height was extraneous`,
hint: "What information is extraneous?",
step: "Find the area displaced by the sphere",
topic: "logic"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 5
                </a>`,
        text: `Circle \\(X\\) has center \\(A\\) and radius \\(1\\). Circle \\(Y\\) has radius \\(\\frac{1}{2}\\)
, is internally

tangent to circle \\(X\\), and passes through \\(A\\). Let triangle \\(ABC\\) be right-
angled at \\(A\\), where \\(AB\\) is a diameter of circle \\(Y\\) and \\(C\\) lies on circle \\(X\\).

The area of intersection between \\(ABC\\) and \\(Y\\) is in the form \\(\\frac{\\pi+2}{x}\\)
, where

\\(x\\) is a positive integer. Compute \\(x\\).`,
image: "iron45.png",
        solution: `<b>16</b><p></p>We cut the area inside both circle \\(Y\\) and \\(ABC\\) by drawing a vertical line perpendicular to the diameter of \\(Y\\) and with endpoints on the circle and on the cneter. What this does is divide the overlap into a quarter circle and a triangle</p>
        <p>Starting with the quarter circle, we simply have to find \\(\\frac{1}{2}^2 \\cdot \\pi \\cdot \\frac{1}{4}= \\frac{pi}{16}\\). We now find the triangle which is isoceles right with legs of \\(\\frac{1}{2}\\) (the radius). Thus, the area is \\(\\frac{1}{2}^2 \\cdot \\frac{1}{2}= \\frac{1}{8}\\). Surely enough, when we add these, it becomes \\(\\frac{pi+2}{16}\\) for \\(x=16\\)`,
        answer: '16',
        hint: "How can you divide the overlapping area into shapes we know how to find the area of?",
        step: "Draw a vertical line with endpoints on the cirlce and at the endpoint that divides the overlapping area into a quarter circle and a triangle",
        topic: "composite shapes"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 5
                </a>`,
        text: `Rectangle \\(ABCD\\) has area \\(72\\). Let \\(M\\) be the midpoint of \\(BC\\) and \\(N\\) the midpoint of
\\(CD\\). What is the area of triangle \\(AMN\\)?`,
        answer: '27',
        solution: `<b>27</b><p>We first need the side lengths of \\(ABCD\\). Notice that the question gives no indication as to what they may be, thus they can be anything that multipliesto \\(72\\). I believe that the simplest route is to just use a square instead of a rectangle (because a square is a rectangle), and have sidelengths of \\(\\sqrt{72}\\), but if you wanted to, you could also do it with side lengths \\(8\\) and \\(9\\) or \\(1\\) and \\(72\\), or whatever else you find easy</p>
        <p>If you were to draw this out, you would see that \\(AMN\\) is inscribed inside the rectangle and there is no real easy way to find the altitudes or bases. However, it is surrounded by \\(3\\) other triangles (\\(CMN, NDA, MBA)\\) what we do know the sidelengths for.</p>
        <p>For \\(CMN\\), since we know it's vertices are located at the midpoints of sides of length \\(\\sqrt{72}\\), they must have lengths of \\(\\frac{\\sqrt{72}}{2}\\) for a total area of \\(\\frac{\\sqrt{72}}{2} \\times \\frac{sqrt{72}}{2} \\times \\frac{1}{2}=0\\)</p>
        <p>The other two triangles have one sidelength of length \\(\\frac{\\sqrt{72}}{2}\\) and one of length \\(\\sqrt{72}\\) for a total area of \\(36\\) when you add both of them together</p>
        <p>We find \\(72-36-9=27\\)`,
        hint: "How can you simplify this",
        step: "Make it a square with sidelengths \\(\\sqrt{72}\\) and ind the areas of the surrounding shapes",
        topic: "composite shapes"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1jL6YhoTo0eZbjgGHB8K4wvN9-gUxUs55/view" target="_blank" class="pset-link">
                Solvefire Iron Round 5 Problem 2
                </a>`,
        text: `In triangle \\(ABC\\), point \\(D\\) lies on \\(AC\\) so that \\(AD:DC = 1:2\\). Point \\(E\\) is the midpoint
of \\(BD\\). Lines \\(AE\\) and \\(BC\\) intersect at \\(F\\). If the area of \\(\\triangle ABC\\) is \\(360\\), what is the
area of \\(\\triangle EBF\\)?`,
        answer: '30',
        solution: `<b>30</b><p>We're going to first start by writing this out on a coordinate grid and labeling the values we can. We have that \\(A(0,0), B(0,\\sqrt{360}), C(\\sqrt{360},0)\\) (the side lengths can be whatever, but this is easier because it forces a right isoceles triangle)</p>
        <p>We have \\(D\\) that divides \\(AC\\) into \\(1:2\\) so we divide \\(\\sqrt{360} \\div 3 = 6\\sqrt{10} \\div 3 = 2\\sqrt{10}\\) so we have \\(D(2\\sqrt{10},0)\\). Since \\(E\\) is the midpoint of \\(BD\\) we have it at \\(E(\\sqrt{10}, 3\\sqrt{10})\\). Finally, we locate \\(F\\) by using systems of equations</p>
        <p>We have line \\(AE\\) with a slope of \\(\\frac{3\\sqrt{10}}{\\sqrt{10}}=3\\) and a \\(y-\\) intercept of \\(0\\). For \\(BC\\) it's just a slope of \\(-1\\) and a \\(y-\\) intercept of \\(\\sqrt{360}=6\\sqrt{10}\\)</p>
        $$
        3x=-x+6\\sqrt{10}
        $$
        $$
        4x=6\\sqrt{10}
        $$
        $$
        x=\\frac{3}{2}\\sqrt{10}
        $$
        <p>We can also solve for \\(y=\\frac{9}{2}\\sqrt{10}\\).</p>
        <p>From here, we observe triangle \\(ABF\\) which shares an altitude \\(AB\\) with \\(\\triangle ABC\\). The area of that triangle is \\(\\frac{1}{4} \\times 360\\) because \\(\\frac{3}{2}\\sqrt{10} = \\frac{1}{4} \\times 6\\sqrt{10}\\). Thus, we have the area of that to be \\(90\\)</p>
        <p>We realize that \\(E\\) divides \\(AF\\) into \\(2:1\\) which will also be the ratio of the areas of the triangles \\(ABE\\) and \\(BEF\\) for \\(BEF=\\frac{90}{3}=30\\)`,
        hint: "Use coordinates",
        step: "Use coordinate values to find the area of \\(\\triangle ABF\\) first",
        topic: "composite shapes"
    },
        {
        title: `<a href="https://drive.google.com/file/d/1Fx5je-2M02iqRk8TYz6Luzz3C3uxQfyJ/view" target="_blank" class="pset-link">
                Solvefire Iron Round 6 Problem 1
                </a>`,
        text: `A circle has radius \\(10\\). Chord \\(AB\\) has length \\(12\\). If the distance from the center of the circle
to chord AB is \\(\\sqrt{k}\\), find \\(k\\).`,
        answer: '64',
        solution: `<b>64</b><p>If we draw a perpendicular bisector to chord \\(AB\\) that divides it into two sides of length \\(6\\), that extends to the center of the circle, then draw a radius through the endpoint of the chord and cente,r we get a right triangle. The side lengths are \\(\\sqrt{k}, 6, 10\\) which we use with the pythagorean theorem to find
        \\(k+6^2=10^2\\) so \\(k=64\\)`,
        hint: "Use the pythagorean theorem",
        step: "Draw a perpendicular line from the midpoint of \\(AB\\) to the center, and then draw the radius from the center to an endpoint of \\(AB\\)",
        topic: "triangles"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 4
                </a>`,
        text: `A circle is inscribed in a right isoceles triangle with legs of length \\(2\\). The area of the circle can be written in the form \\((a-\\sqrt{b})\\pi\\) for all positive integers
        \\(a\\) and \\(b\\). Find \\(a+b\\)`,
        solution: `<b>38</b><p>We first find the hypotenuse to be \\(\\sqrt{2^2+2^2}=2\\sqrt{2}\\). This is nescessary for the equation for the equation for the inradius of a right triangle: \\(\\frac{a+b-c}{2}\\).</p>
        <p>We have \\(\\frac{2+2-2\\sqrt{2}}{2}=2-\\sqrt{2}=r\\). Squaring (following the equation \\(\\pi r^2\\)) gives \\(6-4\\sqrt{2}=6-\\sqrt{32}\\) for \\(a=6, b=32, a+b=38\\))`,
        answer: '38',
        hint: "Use the equation for the inradius of a right triangle: \\(\\frac{a+b-c}{2}\\)",
        step: "Find the hypotenuse and use the equation for the inradius of a right triangle \\(\\frac{a+b-c}{2}\\)",
        topic: "triangle lines"
    },
    {
                title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 10
                </a>`,
                text: `In \\(\\triangle ABC,\\) the side lengths are \\(AB=13, BC=14,\\) and \\(AC=15\\). A square \\(PQRS\\) is inscribed in the triangle such that \\(P\\) and \\(Q\\) lie on side \\(BC\\), \\(R\\) lies on \\(AC,\\) and \\(S\\) lies on \\(AB\\). The 
                side length of the square can be written as \\(\\frac{p}{q}\\) in lowest terms. Find \\(p+q\\)`,
                solution: `<b>97</b><p>This solution is very theorem heavy. All of these can be derived, of course, but there is quite a bit of preexisting knowledge nescessary.</p>
                <p>First, we need to know that the side length \\(s\\) of a square inscribed on base \\(b\\) with altitude \\(h\\) has a length of \\(\\frac{bh}{b+h}\\). We thus need the altitude, which is \\(\\frac{2 \\cdot \\textup{area}}{\\textup{base}}\\). We use heron's law \\(a = \\sqrt{s(s-a)(s-b)(s-c)}\\) where \\(s=\\textup{semiperimeter}=\\frac{a+b+c}{2}\\).</p>
                $$
                \\frac{13+14+15}{2}=\\frac{42}{2}=21
                $$
                $$
                \\sqrt{21(21-13)(21-14)(21-15)}=\\sqrt{21(8)(7)(6)}=\\sqrt{7056}=84
                $$
                $$
                \\frac{2 \\times 84}{14}=12
                $$
                $$
                \\frac{12 \\times 14}{12+14}=\\frac{168}{26}=\\frac{84}{13}
                $$
                $$
                p=84, q=13, p+q=97
                $$`,
                answer: '97',
                hint: "Use the theorems for semiperimeter (s=\\frac{a+b+c}{2}\\), heron's law (a=\\sqrt{s(s-a)(s-b)(s-c)}\\), the height of an altitude \\(\\frac{2 \\times a}{s}\\), and side length of an inscribed square \\(s=\\frac{bh}{b+h}\\)",
                step: "Use the theorems above and start with the semiperimeter",
                topic: "composite shapes"
    },
    {
                        title: `<a href="https://drive.google.com/file/d/1yUNjUWogsneSLl_p9KpJimbOHVLgX3J-/view" target="_blank" class="pset-link">
                Solvefire Iron Round 8 Problem 3
                </a>`,   
                text: `In a square of side length \\(12\\), a semicircle is drawn inside the square with its diameter lying
along one side of the square. A circle is then drawn inside the square so that it is externally
tangent to the semicircle and also tangent to the two sides of the square perpendicular to
that side. The radius of this circle can be written in the form \\(a-b\\sqrt{c}) where \\(a, b\\), and \\(c\\) are
positive integers and \\(c\\) is squarefree. Find \\(a+b+c\\).`,
solution: `<b>39</b><p>We know the distance between the centers of the two circles is \\(6+r\\) because it's the distance between the two radii.</p>
<p>We can use the pythagorean theorem to find this value if we find the horizontal and vertical distances</p>
<p>We know that the circle is horizontally displaced \\(r\\) from the left edge of the square, because we can draw a radius \\(r\\) from the edge to the center of the circle that is horizontal. The distance for the 
largest circle is \\(6\\) by the same logic, so the distance between the centers of the two circles horizontally is \\(6-r\\)</p>
<p>The vertical distance is just \\(12-r\\0 because the height of the square is \\(12\\) and the circle is \\(r\\) down from there, and the center of the large circle 
is just at \\(0\\). Thus, we have \\((6-r)^2+(12-r)^2=(6+r)^2\\)</p>
$$
36-12r+r^2+144-24r+r^2=36+12r+r^2
$$
$$
r^2-48r+144=0
$$
<p>Solve with the quadratic equation</p>
$$
\\frac{48 \\pm \\sqrt{48^2-4(144)}}{2}=\\frac{48 \\pm \\sqrt{1728}}{2}=24+12\\sqrt{3}\\)
$$
$$
a=24, b=12, c=3
$$
$$
24+12+3=39
$$
`,
hint: "Use the pythagorean theorem and express all of the distances with respect to \\(r\\)",
step: "Use the pythagorean theorem with hypotenuse \\(6+r\\) Find the remaining sides and use the quadratic equation",
topic: "pythagorean theorem",
answer: '39'
    },
    {
       title: `<a href="https://drive.google.com/file/d/1yUNjUWogsneSLl_p9KpJimbOHVLgX3J-/view" target="_blank" class="pset-link">
                Solvefire Iron Round 8 Problem 5
                </a>`,   
        text: `In right triangle \\(ABC\\) with \\(\\angle C=90^\\circ\\), let \\(M\\) be the midpoint of hypotenuse \\(\\overline{AB}\\). If \\(CM=5\\) and \\(BC=6\\), find the area of triangle \\(ABC\\)`,
        solution: `<b>24</b><p>The median forms  is half the length of the hypotenuse so the hypotenuse is \\(10\\) which, by the pythagorean theorem, means \\(AC=8\\) for an area of \\(\\frac{6 \\times 8}{2}=24\\)`,
        answer: '24',
        hint: "The length of a hypotenuse is double the length of the median",
        step: "Find the length of the hypotenuse to be \\(2(CM)\\)",
        topic: "triangle lines"
    },
    {
        title:  `<a href="https://drive.google.com/file/d/1yUNjUWogsneSLl_p9KpJimbOHVLgX3J-/view" target="_blank" class="pset-link">
                Solvefire Iron Round 8 Problem 5
                </a>`,
        text: `A regular hexagon \\(H_{1}\\) has an area \\(24\\). A second hexagon \\(H_{2}\\) is formed by cnnecting the midpoints of the sides of \\(H_{1}\\). Find the area of \\(H_{2}\\)`,
        solution: `<b>18</b><p>We can find the side length of \\(H_{1}\\), which we'll cause \\(s\\) by using the equation \\(s^2 \\frac{3\\sqrt{3}}{2}=24\\) (the LHS is the equation for the area of a regular hexagon). This is a common formula to memorize, but in 
        case you don't know, you can derive it by finding the area of an equilateral triangle \\(s^2 \\frac{\\sqrt{3}}{4}\\) (with the altitude being derived via pythagorean theorem with hypotenuse \\(s\\) and legs of the altitude and \\(\\frac{s}{2}\\)). Anyways, we solve for \\(s_{1}\\)</p>
        $$
        (s_{1})^2 \\times \\frac{3\\sqrt{3}}{2}=24
        $$
        $$
        s_{1}^2=\\frac{16\\sqrt{3}}{3}
        $$
        $$
        s_{1}=\\sqrt{\\frac{16\\sqrt{3}}{3}}
        $$
        <p>If you were to draw this out, we would find isoceles triangles with an angle \\(120^\\circ\\) (the interior angle of a hexagon). If we draw a line from the vertex of \\(H_{1}\\) to the midpoint of a side of \\(H_{2}\\), it cuts into two \\(30-60-90\\) triangles</p>
        <p>The ratio of a longest side to the hypotenuse, through trigonometry and also through ratios, we know is \\(\\sqrt{3}{2}\\). We define half of the side of \\(H_{2}\\) as \\(x\\). We thus have \\(\\frac{\\frac{16\\sqrt{3}}{2}}{x}=\\frac{\\sqrt{3}}{2}\\)</p>
        $$
        \\frac{2x}{\\sqrt{\\frac{16\\sqrt{3}}{3}}}=\\frac{\\sqrt{3}}{2}
        $$
        $$
        4x=\\sqrt{16\\sqrt{3}}
        $$
        $$
        2x=\\frac{\\sqrt{16\\sqrt{3}}}{2}
        $$
        <p>That's the side length of the hexagon</p>
        $$
        s^2=\\frac{16\\sqrt{3}}{4}
        $$
        $$
        s^2=4\\sqrt{3}
        $$
        $$
        s^2 \\times \\frac{3\\sqrt{3}}{2}=4\\sqrt{3} \\times \\frac{3\\sqrt{3}}{2}=18
        $$
        `,
        answer: '18',
        step: "Find the side length of the largest hexagon, then found the side length of the smaller one through trigonometry",
        hint: "The equation for the area of a regular hexagon is \\(s^2 \\times \\frac{3\\sqrt{3}}{2}\\), and the ratio of the longest side to hypotenuse of a \\(30-60-90\\) triangle is \\(\\frac{\\sqrt{3}}{2}\\)",
        topic: "pythagorean theorem"
    },
    {
        title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 3
                </a>`, 
        text: `\\(\\triangle ABC\\) has side lengths \\(AB=13, BC=14, AC=15\\). A circle inscribed in \\(\\triangle ABC\\) and a square is inscribed within the circle. Calculate the area
        of the square`,
        solution: `<b>32</b><p>We need to find the area of \\(\\triangle ABC\\), which is \\(\\sqrt{s(s-a)(s-b)(s-c)}\\) where \\(s=\\textup{semiperimeter}\\), according to Heron's Law. The semiperimeter is \\(\\frac{a+b+c}{2}=\\frac{13+14+15}{2}=21\\). We thus 
        have an area of \\(\\sqrt{21(21-13)(21-14)(21-15)}=\\sqrt{21(8)(7)(6)}=\\sqrt{7056}=84\\)</p>
        <p>The equation for the inradius is \\(\\frac{\\textup{area}}{\\textup{semiperimeter}}=\\frac{84}{21}=4\\)</p>
        <p>We know that the diagonal of the square will be equal to the diameter, so the diagonal is \\(8\\). Thus, the side lengths are \\(x\\) in \\(2x^2=64\\) so \\(x=4\\sqrt{2}\\). The area, thus, is \\(16 \\times 2 = 32\\)`,
        answer: '32',
        hint: "Use the equation for semiperimeter \\(\\frac{a+b+c}{2}\\), the area \\(\\sqrt{s(s-a)(s-b)(s-c)}\\), and inradius \\(\\frac{\\textup{area}}{\\textup{semiperimeter}\\)",
        step: "Once you find the inradius with the equaions from the hint, use the pythagorean theorem using the diameter",
        topic: "triangle lines"

    },
    {
                title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 6
                </a>`, 
                text: `Square \\(ABCD\\) has side length \\(4\\). Point \\(P\\) is inside the square such that \\(PA=\\sqrt{2}, PB=\\sqrt{10},\\) and \\(PC=3\\sqrt{2}\\).
                \\(PD=\\sqrt{a}\\) where \\(a\\) is a positive integer. Compute \\(a\\)`,
                solution: `<b>10</b><p>We can express all the values as coordinates such that \\(A(0,0), B(0,4), C(4,4), D(4,0)\\). We don't actually need to know all \\(3\\) distances, just two to solve the system. I'm going
                to use \\(PA\\) and \\(PB\\). We use the distance formula and express \\(P\\) as \\(P(x,y)\\)</p>
                <p>For \\(PA\\)</p>
                $$
                x^2+y^2=2
                $$
                $$
                <p>For \\(PB\\)</p>
                $$
                x^2+(4-y)^2=10
                $$
                $$
                x^2+16-8y+y^2=10
                $$
                <p>Find \\(PB-PA\\)</p>
                $$
                x^2+16-8y+8y^2-x^2-y^2=10-2
                $$
                $$
                16-8y=8
                $$
                $$
                8y=8
                $$
                $$
                y=1
                $$
                <p>\\(x=1\\) (substitution)</p>
                <p>The horizontal distance between \\(PD\\) is \\(3\\), and the vertical is \\(1\\). We have \\(\\sqrt{3^2+1^2}=10\\)`,
                answer: '10',
                hint: "Express geometrically and use the distance formula",
                step: "Using the distance formula, express \\(PA\\) and \\(PB\\) as equations and find \\(PB-PA\\)",
                topic: "algebraic manipulation"
    },
    {
                title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 7
                </a>`, 
                text: `\\(\\triangle ABC\\) has sides \\(AB=13, BC=14, AC=15\\). A line parallel to \\(BC\\) divides \\(\\triangle ABC\\) into a smaller triangle \\(\\triangle ADE\\)
                (with \\(D\\) on \\(AB\\) and \\(E\\) on \\(AC\\)) and trapezoid \\(BCED\\) such that the area of the trapezoid is twice the area of \\(\\triangle ADE\\). \\(DE\\) is in the form \\(\\frac{m}{\\sqrt{n}}\\),
                where \\(m\\) and \\(n\\) are coprime integers. Compute \\(m+n\\)`,
                solution: `<b>17</b><p>We have that \\(\\textup{area of the whole triangle} = \\textup{area of the small triangle} + \\textup{area of the trapezoid}\\) and \\(\\textup{area of the trapezoid} = 2 \\times \\textup{area of the small triangle}\\) so \\(\\textup{area of the whole triangle} =  3 \\times \\textup{area of the small triangle}\\)</p>
                <p>Using heron's law \\(a=\\sqrt{s(s-a)(s-b)(s-c)}\\) for \\(s=\\frac{a+b+c}{2}\\), we can find \\(s=\\frac{13+14+15}{2}=21\\) and \\(a=\\sqrt{21(21-13)(21-14)(21-15)}=\\sqrt{7056}=84\\)</p>
                <p>Thus, we have \\(\\textup{area of the small triangle}=\\frac{84}{3}=28\\)</p>
                <p>The small triangle is proportional to the large triangle. Thus, \\(\\textup{area of the small triangle}{area of the whole triangle}=\\frac{side length of the small triangle}{side length of the whole triangle}^2\\) so \\(\\frac{28}{84}=\\frac{DE}{14}^2\\)</p>
                $$
                \\frac{1}{3}=\\frac{DE}{14}^2
                $$
                $$
                \\frac{DE}{14}=\\frac{1}{\\sqrt{3}}
                $$
                $$
                DE=\\frac{14}{\\sqrt{3}}
                $$
                $$
                14+3=17
                $$
                `,
                answer: '17',
                hint: "The ratio of the area of the large triangle to the small triangle is the square of the sie lengths from the large triangle to the small triange",
                step: "Find the area of the large and small triangles and make a ratio with the side length",
                topic: "algebraic manipulation",
    },
    {
                title: `<a href="https://drive.google.com/file/d/1sOEXpXM_ckqIZpDTJOlbCsT30BHPEJ3w/view" target="_blank" class="pset-link">
                Solvefire Silver Contest 1 Question 7
                </a>`,     
                text: `A circle has center \\(O\\) and a radius \\(10\\). A chord \\(PQ\\) passes through the midpoint \\(M\\) of a radius \\(OA\\). Given that \\(PM=3\\), compute \\(QM\\)`,
                solution: `<b>25</b><p>We find the power of a point to be \\(10^2 \\textup{(radius)}-5^2 \\textup{(M's distance from the center)}=75\\)</p>
                <p>The product of \\(PM \\times QM=75\\) so we have \\(3 \\times x=75\\) for \\(QM=25\\)`,
                answer: '25',
                hint: "Use the equations for power of a point \\(\\textup{radius}^2-\\textup{distance}^2=\\textup{power of a point}\\) and that the product of two segments of a chord is equal to the product of the point",
                step: "Use the equations from the hint to calculate the power of the point",
                topic: "power of a point"
    },
    {
                        title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 8
                </a>`, 
                text: `Let \\(ABCD\\) be a cyclic quadrilateral inscribed in a circle of radius \\(5\\). Given
                \\(AB=6, CD=8\\), with \\(AB\\) and \\(CD\\) lying on opposite sides of the centre, and \\(AB \\parallel CD,\\) compute the area of \\(ABCD\\)`,
                solution: `<b>49</b><p>We have that \\(ABCD\\) is an isoceles trapezoid. The area is \\(\\frac{b_{1}+b_{2}}{2} \\times h\\). We have the two bases so we find \\(\\frac{6+8}{2} \\times h = 7h\\). To find \\(h\\), we draw radii that intersect the circle and
                lines \\(AB\\) and \\(CD\\) at the same point, respectively. We draw another line from the center of the circle perpendicular to each line. This should create two right triangles with hypotenuse \\(5\\) and side lenths of \\(3,4\\) respectively, which 
                create pythagorean triples with missing sides \\(4,3\\) for a height of \\(4+3=7\\). We find \\(7 \\times 7=49\\)`,
                answer: '49',
                hint: "The shape is an isoceles triangle",
                step: "Draw radii  that itersect the circle and lines, and lines perpendicular to \\(AB\\) and \\(CD\\) to create right triangles",
                topic: "logic"
    },
    {
                        title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 9
                </a>`, 
                text: `Two cords \\(AC\\) and \\(BD\\) of a circle intersect at a point \\(P\\) inside the circle.
                Given that \\(AP=3, PC=12,\\) and \\(BP=4\\), compute \\(PD)`,
                solution: '<b>9</b><p>This is pretty simply just power of a point. We have that \\(AP \\times PC = BP \\times PD\\) so \\(3 \\times 12 = 4 \\times PD\\) and thus \\(PD=9\\)',
                answer: '9',
                hint: "Use power of a point",
                step: "Solve \\(AP \\times PC = BP \\times PD\\)",
                topic: "power of a point"
    },
    {
                title: `<a href="https://drive.google.com/file/d/1mPBzWkGBDV-demFxXlQEImqYyUuVQWWA/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 5 Question 2
                </a>`, 
                text: `Let \\(\\triangle ABC\\) have side lengths \\(AB=13, BC=14\\) and \\(CA=15\\). Let \\(I\\) be the incenter of \\(\\triangle ABC\\). What is the value of \\(AI^2\\)?`,
    solution: `<b>65</b><p>We find the inradius using \\(\\frac{\\textup{area}}{\\textup{semiperimeter}}\\). We use Heron's formula and the formula for a semiperimeter to find \\(s=\\frac{13+14+15}{2}=21\\) and \\(a=\\sqrt{21(21-13)(21-14)(21-15)}\\)</p>
    <p>We thus have inradius \\(=\\frac{84}{21}=4\\). That forms the height of a right triangle with hypotenuse \\(AI\\). If we can find the horizontal, thta would let us find the answer</p>
    <p>Since we know that the tangents of a circle intersecting at the same point are always the same, we set \\(x\\) as the length of a tangent touching \\(A\\), \\(y\\) as touching \\(B\\), and \\(Z\\) as touching \\(C\\)</p>
    <p>We have \\(x+y=13\\), \\(y+z=14\\), \\(z+x=15\\).</p>
    $$
    y=13-x
    $$
    $$
    13-x+z=14
    $$
    $$
    z=15-x
    $$
    $$
    13-x+15-x=14
    $$
    $$
    2x=14
    $$
    $$
    x=7
    $$
    <p>Thus we have \\(AI^2=4^2+7^2=16+49=65\\)`,
    answer: '65',
    hint: "Use power of a point",
    step: "Find the inradius",
    topic: "power of a point"

    },
    {
        title: `<a href="https://drive.google.com/file/d/1mPBzWkGBDV-demFxXlQEImqYyUuVQWWA/view" target="_blank" class="pset-link">
    Solvefire Bronze 5 Question 5
    </a>`,  
    text: `Let \\(A=(0,7)\\) and \\(B=(10,0)\\). Point \\(P\\) lies on the line defined by \\(y=x\\). What is the minimum possible value of \\((AP+PB)^2\\)?`,
    solution: `<b>149</b><p>We know that the shortest distance is always a straight line, so the shortest version of \\(PA+PB\\) is just a striaght line, which has to passs through \\(y=x\\) anyways because it has a negative slope</p>
    <p>We use the distance formula, but instead of finding \\(PA+PB\\), we just find the total distance \\(\\sqrt{7^2+10^2}=\\sqrt{149}\\) for \\((PA+PB)^2=149\\)
    `,
    answer: '194',
    hint: "The shortest distance is a straight line",
    step: "Find the distance from \\(A\\) to \\(B\\)",
    topic: "functions and graphing"
    },
    {
            title: `<a href="https://drive.google.com/file/d/1mPBzWkGBDV-demFxXlQEImqYyUuVQWWA/view" target="_blank" class="pset-link">
    Solvefire Bronze 5 Question 9
    </a>`,  
    text: `Two circles \\(C_{1}\\) and \\(C_{2}\\) intersect at points \\(P\\) and \\(Q\\). The radius of \\(C_{1}\\) is \\(5\\) and the radius of \\(C_{2}\\) is \\(12\\).
    The distance between the centers of two circles is exactly \\(13\\). If the length of the common chord \\(PQ\\) can be expressed as a fraction in simplest form \\(\\frac{a}{b}\\).
    What is \\(a+b\\)?`,
    solution: `<b>73</b><p>We know that \\(5, 12, 13\\) is a pythagorean triple, so there is a right triangle formed by the centers of the circles and \\(P\\) (although this could also be \\(Q\\). We have that \\(PQ\\) is the altitude of this triangle</p>
    <p>We know the area is \\(\\frac{5 \\times 12}{2}=\\frac{13 \\times \\textup{altitude}}{2}\\) so we solve for \\(\\frac{5\\times 12}{13}=\\textup{altitude}\\) so \\(\\frac{60}{13}\\) for \\(a+b=73\\)`,
    answer: '73',
    hint: "The side lengths make a pythagorean triple where \\(PQ\\) is the altitude",
    step: 'Relate the altitude to the area of a triangle',
    topic: "logic"
    },
    {
        title:`<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank" class="pset-link">Solvefire Bronze 6 Question 2</a>`,
        text: `Rectangle \\(ABCD\\) has \\(AB=CD=3\\) and \\(AD=BC=1\\). Let \\(P\\) be the midpoint of the diagonal \\(AC\\), and let \\(Q\\) be the intersection of the perpendicular bisector
        of \\(AC\\) with \\(AB\\). The area of quadrilateral \\(PQBC\\) can be written as \\(\\frac{p}{q}\\) in lowest terms. Find \\(p+q\\)`,
        solution: `<b>25</b><p>Drawing this out shows us that \\(ABCD\\) is split into quadrilateral \\(PQBC\\) and two other right triangles, \\(ADC\\) and \\(APQ\\). We may not know the area of \\(PQBC\\) but we can find the area of the triangles and subtract it from \\(ABCD\\)</p>
        <p>The larger triangle, \\(ADC\\) has an area of \\(\\frac{3 \\times 1}{2}=1.5\\), so we just have \\(3-\\frac{3}{2}-APQ\\)</p>
        <p>We have \\(AP=\\frac{\\sqrt{3^2+1^2}}{2}=\\frac{\\sqrt{10}}{2}\\). That's the length of one leg, but we don't know the other. However, we can find the length of the hypotenuse by finding the \\(x-\\)coordinate where \\(PQ\\) intersects \\(AB\\). We have that \\(AC=-\\frac{1}{3}x+1\\), so the slope of \\(PQ\\), which is perpendicular, 
        must be \\(3\\). We have that \\(\\frac{1}{2}=3(\\frac{3}{2})+b\\) for \\(b=-4\\). Thus, we solve \\(1=3x-4\\) for \\(x=\\frac{5}{3}\\). We then find the other leg with the pythagorean theorem</p>
        $$
        \\sqrt{\\frac{5}{3}^2-\\frac{\\sqrt{10}}{2}^2}=\\sqrt{\\frac{25}{9}}-\\sqrt{\\frac{10}{4}}=\\sqrt{\\frac{10}{36}}=\\sqrt{\\frac{5}{18}}=\\frac{\\sqrt{5}}{3\\sqrt{2}}=\\frac{\\sqrt{10}}{6}
        $$
        $$
        \\frac{\\frac{\\sqrt{10}}{2} \\times \\frac{\\sqrt{10}}{6}}{2}=\\frac{5}{12}
        $$
        $$
        3-\\frac{3}{2}=\\frac{5}{12}=\\frac{13}{12}
        $$
        $$
        13+12=25
        `,
        answer: '25',
        hint: "Find the area of the right triangles around \\(PQBC\\)",
        step: "Use linear equations to find the \\(x-\\)coordinate of \\(Q\\)",
        topic: "algebraic manipulation"
    },
    {
                title:`<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank" class="pset-link">Solvefire Bronze 6 Question 3</a>`,
                text: `A regular octagon is divided into \\(8\\) congruent triangles from its center. Each triangle has base
                \\(\\frac{43}{99}\\) and height \\(\\frac{1}{2}\\). The area of the octagon can be written as \\(\\frac{p}{q}\\) in lowest terms. Find \\(p+q\\)`,
                solution: `<b>185</b><p>The area of the octagon is the area of an individual triangle times \\(8\\). The area of an individual triangle is \\(\\frac{43}{99} \\times {1}{2} \\times {1}{2} = \\frac{43}{99 \\times 4}\\) (we're not going to simplify that just yet). 
                We multiply this by \\(8\\) which cancels out the \\(2 \\times 2\\) in the denominator and gives us \\(\\frac{86}{99}\\) for \\(p+q=86+99=185\\)`,
                hint: "The area of the octagon is \\(\\times 8\\0 the area of one triangle",
                step: "Find the area of one triangle",
                topic: "composite shapes",
                answer: '8'

    },
    {
                title:`<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank" class="pset-link">Solvefire Bronze 6 Question 9</a>`,
                text: `Let \\(ABCD\\) be a square with side lengths \\(6\\). Let \\(E\\) be the midpoint of \\(BC\\). Let \\(F\\) be the 
                intersection of lines \\(AC\\) and \\(DE\\). Find the area of quadrilateral \\(ABEF\\)`,
                solution: `<b>15</b><p>We draw this on a coordinate grid such that \\(A(0,0), B(0,6), C(6,6), D(6,0)\\). We have \\(E(3,6)\\). \\(F\\) is the solution to the system \\(y=x\\) and \\(y=-2x+12\\) which is \\(x=-2x+12, 3x=12, x=4\\) for \\(F(4,4)\\)</p>
                <p>We cannot dirrectly find the area of \\(ABEF\\), but we know the area of \\(ABCD\\) to be \\(6 \\times 6 =36\\), and we can find the area of triangles easily</p>
                <p>Triangle \\(ADF\\) has base \\(6\\) and altitude \\(4\\) for area \\(12\\)</p>
                <p>Triangle \\(DFC\\) can be merged with \\(ECF\\) to make a right triangle with legs \\(6\\) and \\(3\\), for area \\(9\\). We thus have \\(36-12-9=15\\)</p>`  ,
                answer: '15',
                hint: "Find the area of the surrounding triangles",
                step: "Map all the points on the coordinate grid and use systems of equations to find missing coordinates",
                topic: "functions and graphing"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1FnKSnsci5mpWmfoZauslbFteUI83XPP7/view" target="_blank" class="pset-link">Solvefire Bronze 7 Problem 6</a>`,
        text: `Triangle \\(ABC\\) has side lenths \\(AB=13, BC=14,\\) and \\(CA=15\\). The bisector of \\(\\angle A\\) meets \\(\\overline{BC}\\) at \\(D\\). Find the area of triangle \\(ACD\\)`,
        solution: `<b>45</b><p>We can find the total area of \\(ABC\\) using Heron's Formula \\(a=\\sqrt{s(s-a)(s-b)(s-c)}\\) for \\(s=\\frac{a+b+c}{2}\\). We solve for \\(a=84\\)</p>
        <p>By angle bisector theorem, we know that \\(\\frac{BD}{CD}=\\frac{BA}{CA}=\\frac{13}{15}\\). This ratio remains the same for their areas, so we have that \\(13x+15x=84\\) and we want \\(15x\\)</p>
        $$
        13x+15x=84
        $$
        $$
        28x=84
        $$
        $$
        x=3
        $$
        $$
        15x=45
        $$`,
        answer: '45',
        hint: "Use angle bisector theorem such that \\(\\frac{BD}{CD}=\\frac{BA}{CA}\\)",
        step: "Find the total area of \\(ABC\\)",
        topic: "triangle lines"

    },
    {
        title: `<a href="https://drive.google.com/file/d/1FnKSnsci5mpWmfoZauslbFteUI83XPP7/view" target="_blank" class="pset-link">Solvefire Bronze 7 Problem 8</a>`,
        text: `In right triangle \\(ABC\\), \\(AC=3\\), \\(BC=6\\), and \\(\\angle C = 90^\\circ\\). Let \\(D\\) be the foot of the
        altitude from \\(C\\) to \\(AB\\). The circle with diameter \\(\\overline{CD}\\) intersects \\(\\textup{AC}\\) again at \\(E\\) and \\(\\textup{BC}\\) again at \\(F\\). The area of quadrilateral \\(CEDF\\) can
        be written as \\(\\frac{p}{q}\\) in lowest terms. Find \\(p+q\\)`,
        solution: `<b>97</b><p>We place this on a coordinate grid such that \\(A(0,3), B(6,0), C(0,0)\\). The slope of \\(AB\\) is \\(\\frac{-1}{2}\\), so the slope of \\(CD\\) is \\(y=2x\\). It intersects \\(AB\\) (which has an equation of \\(y=\\frac{-1}{2}x+3\\)) at \\((\\frac{12}{5}, \\frac{6}{5})\\).</p>
        <p>The diameter of the circle is \\(\\sqrt{\\frac{12}{5}^2+\\frac{6}{5}^2}=\\frac{6\\sqrt{5}}{5}\\). We can tell that \\(CED\\) and \\(CFD\\) are right triangles, meaning we know their coordinates to be \\(E(0,\\frac{6}{5})\\) and \\(F(\\frac{12}{5},0)\\). The total area is just \\(\\frac{12}{5} \\times \\frac{6}{5}=\\frac{72}{25}\\) for \\(72+25=97\\)`,
        answer: '97',
        hint: "\\(CED\\) and \\(CDF\\) are right triangles",
        step: "Model on a coordinate grid",
        topic: "functions and graphing"
    }
]
const numTheoryQ = [
    {
                title: `<a href="https://drive.google.com/file/d/13JgWp8yZP76xGkW3LAbRZODvHdTVCrBz/view" target="_blank" class="pset-link">Solvefire Bronze 8 Problem 7</a>`,
                text: `Find the number of ordered triples \\((a,b,c)\\) of positive integers such that \\(abc=360\\)`,
                solution: `<b>180</b><p>The prime factorization of \\(360=2^3\\times 3^2 \\times 5\\). For each of these, we can do stars and bars to see how their powers are distributed among \\(3\\). We do \\(\\binom{3+3-1}{3-1} \\binom{2+3-1}{3-1} \\binom{1 + 3-1}{3-1}=180\\)`,
                answer: '180',
                topic: "counting",
                hint: "Use stars and bars",
                step: 'Find the prime factorization of \\(360\\)'

    },
    {
                title: `<a href="https://drive.google.com/file/d/13JgWp8yZP76xGkW3LAbRZODvHdTVCrBz/view" target="_blank" class="pset-link">Solvefire Bronze 8 Problem 8</a>`,
                text: `<p>Find the sum of all real numbers \\(x\\) satisfying</p>
                $$
                (x^2-5x+5)^{x^2-7x+12}=1
                $$`,
                solution: `<b>10</b><p>We know that \\(x^2-5x+5=1\\) or \\(-1\\) (if \\(x^2-7x+12\\) is even) OR \\(x^2-7x+12=0\\). Solving the latter, we simply factor for \\((x-3)(x-4)\\), which gives \\(3, 4\\)</p>
                <p>For the former, we split into two cases. If equal to \\(1\\), we have \\(x^2-5x+4=(x-4)(x-1)\\), for \\(4\\) and \\(1\\), but we only count \\(1\\), because that's a repeat</p>
                <p>Finally, for \\(-1\\), we end up with \\(x^2-5x+6=(x-3)(x-2)\\). We have that \\(x=2\\) makes the exponent \\(2^2-7(2)+12=2\\), which is even, and it doesn't matter what \\(3\\) is because the power will be \\(0\\). We thus have \\(1+2+3+4=10\\)`,
                answer: '10',
                hint: "What can the power be? What can the base be?",
                step: "Find the roots of \\(x^2-7x+12\\)",
                topic: "logic"
    },
    {
                        title: `<a href="https://drive.google.com/file/d/13JgWp8yZP76xGkW3LAbRZODvHdTVCrBz/view" target="_blank" class="pset-link">Solvefire Bronze 8 Problem 9</a>`,
                        text: `<p>How many \\(5-\\) element subsets {a_{1} < a_{2} < a_{3} < a_{4} < a_{5}\\) of {1,2,3...12} satisfy</p>
                        $$
                        a_1 + a_2 = a_5
                        $$`,
                        solution: `<b>30</b><p>We have that the lowest possible sum is \\(5\\) whereas the highest is \\(12\\). This is easy enough to break int ocases until we can make an induction</p>
                        <p>For \\(5\\), we have \\((1,4)\\) or \\((2,3)\\), for \\((a_{1},b_{1})\\). Neither of these work because they don't give possible values for \\(a_{3}, a_{4}\\)</p>
                        <p>For \\(6\\), we have \\((1,5), (2,4)\\). Still no possibilities</p>
                        <p>\\(7\\) gives \\((1,6), (2,5), (3,4)\\). The first and second give none. The last gives one</p>
                        <p>\\(8\\) has \\((1,7), (2,6), (3,5)\\). We have one in the last again</p>
                        <p>\\(9\\) gives \\((1,8), (2,7), (3,6), (4,5)\\) which leaves \\((3,6), (4,5)\\) being valid. However, we no longer are constrained to linearly increasing values. For \\((3,6\\), we are, 
                        because we need \\(7,8\\), but for \\((4,5)\\), we have \\(\\binom{3}{2}=3\\) ways, so we have \\(4\\0 total</p>
                        <p>\\(10\\), will give the same result</p>
                        <p>For \\(11\\), we find \\((1,10), (2,9), (3,8), (4,7), (6,5)\\). The last \\(3\\) work with \\(1, 3, 6\\) options, total for a total of \\(10\\). We thus find \\(1+1+4+4+10+10\\) (because \\(12\\) has the same as \\(11\\)) which sums to \\(30\\)`,
                        answer: '30',
                        hint: "Use induction and casework",
                        step: "Find the possible values of \\(a_{5}\\)",
                        topic: "counting"

    },
        {
                title: `<a href="https://drive.google.com/file/d/13JgWp8yZP76xGkW3LAbRZODvHdTVCrBz/view" target="_blank" class="pset-link">Solvefire Bronze 8 Problem 3</a>`,
                text: `Find the number of ordered pairs \\((a, b)\\) of positive integers such that \\(\\textup{lcm}(a,b)=360\\)`,
                solution: `<b>105</b><p>We have the prime factorization of \\(360=2^3 \\cdot 3^2 \\cdot 5^1\\). We need to divide the frimes such that \\(a\\) and \\(b\\) have distinct primes in their prime factorizations. We have \\(2\\) with a power up to \\(3\\). We double this, because it can be in either, or it can not be there are all, so we have \\(7\\). We do this for all and ed up with \\(7 \\times 5 \\times 3 = 105\\)`,
                answer: '105',
                hint: "The prime factors must be divided exclusively",
                step: "Find the prime factorization of \\(360\\)",
                topic : "prime factorization"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 1
                </a>`,
        text: `The integer \\(N\\) has \\(12\\) positive factors. If \\(3^2\\)
is a factor of N and \\(5\\) is not a factor of \\(N\\), what
is the total number of positive factors in \\(5N\\)?`,
        pNumber: 1,
        answer: '24',
        solution: `<b>24</b><p>For each factor of \\(N\\), there is another factor that is \\(5\\) times the factor. Since \\(5\\) is not a factor, we do not have to worry about overcounting. Notice that the bit about \\(3^2\\) is extraneous because that just gives us two factors of \\(N\\)`,
        hint: "Which bit of information can you ignore?",
        step: "What should you multiply the number of factors by?",
        topic:  "prime factorization"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 3
                </a>`,
        text: `What is the smallest number that has exactly 3 odd factors and 6 even
factors?`,
        solution: `<b>36</b><p>First we notice that one of the odd factors is \\(1\\) and one of the even factors is \\(N\\). We know that in the prime factorization we need to have \\(2\\) at least once and to minimize the number the next smallest prime number: \\(3\\). We have some combination of \\(2\\) and \\(3\\). For a total of \\(9\\) factors, we need both of these to be raised to the second power, because the total number of factors is found by adding one to all ofthe powers and multiplying</p>
        <p>We have a prime factorization of \\(2^2 \\times 3^2 = 36\\)`,
        answer: '36',
        hint: "What numbrers can be included as odd and even factors?",
        step: "Find what the powers of the prime factorization need to be and what numbers need to be in the prime factorization",
        topic: "prime factorization"
    },
        {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 6
                </a>`,
        text: `Compute the number of ordered pairs \\((a,b)\\) such that \\(\\textup{gcd}(a,b)=8\\) and \\(\\textup{lcm}(a,b)=480\\).`,
        solution: `<b>8</b><p>We are looking for \\(a\\) and \\(b\\) such that \\(a \\cdot \\frac{b}{8}=480\\) and \\(b \\cdot \\frac{a}{8}=480\\). \\(480\\) has a prime factorization of \\(2^5 \\times 3 \\times 5\\). We know that both \\(a\\) and \\(b\\) must have \\(2^3\\) in their prime factorization. We also know that the two numbers can't have any overlaping factors other than \\(2^3\\).</p>
        <p>Instead of solving directly for \\(a\\) and \\(b\\), we solve for \\(\\frac{a}{b}=x\\) and \\(\\frac{b}{8}=y\\) to see how many independent values combinations are possible</p>
        <p>The most important thing to remember here is that if either \\(x\\) or \\(y\\) has a two, the other cannot, because that would raise the \\(\\textup{gcd}\\). Also remember that we need to use all the factors</p>
        <p>Let's try to find all the possible values for \\(a\\). We can have \\(1, 3, 4, 5, 12, 15, 20, 60\\). We essentially find all the numbers that are either odd or divisible by \\(4\\)</p>
        <p>There are \\(8\\) of these. and thus \\(8\\) values for \\(a, b\\)</p>`,
        answer: '8',
        hint: "What do \\(\\frac{a}{8}\\) and \\(\\frac{b}{8}\\) have to be??",
        step: "Find the number of ways you can arrange the prime factors of \\(\\frac{480}{8}\\) into two numbers such that they share no numbers",
        topic: "prime factorization"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 7
                </a>`,
                text: `<p>Compute</p>
                $$
                \\binom{1224}{0} - \\binom {1224}{1} ... \\binom{1224}{2}
                $$`,
                answer: '0',
                solution: `<b>0</b><p>We recognizing the consecutive sums of binomials "choose" functions to be indicative of binomial theorem:</p>
              $$
              \\[ \\sum_{i=0}^n \\binom{n}{k}x^n-k y^k\\]
              $$
                <p>This gives a way of finding the expansion of \\((x+y)^n\\), but we notice that it does have \\(\\binom{n}{k}\\) with iterations of \\(k\\) increasing by \\(1\\).</p>
                <p>In order for this to work, we need \\(x\\) and \\(k\\) to be of alternating signs because the choose functions are of alternating signs. Thus we have \\(x=1\\) and \\(y==1\\) for \\((1+(-1))^{1224}\\) which is, of course, \\(0\\)`,
                hint: "Use binomial theorem",
                step: "Write as a binomial theorem sum with \\(n=1224\\). What should \\(x\\) and \\(y\\) be?",
                topic: "algebraic manipulation",
    },
    {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 8
                </a>`,
                text: `What is the last digit of \\(4^7 +7^4\\)?`,
                answer: '5',
                solution: `<b>5</b><p>Since we know that the units digits of numbers raised to powers are cyclic, we can just find the patterns for each.</p>
                <p>For \\(4\\) we have \\(4,6\\) and then it repeats, so with modular arithmetic we find that \\(\\frac{7}{4}\\) has a remainder of \\(1\\) and a units digit of \\(4\\)</p>
                <p>For \\(7\\) we have \\(7,9,3,1\\) which is just \\(4\\) so a units digit of \\(1\\). We have that \\(4+1=5\\)`,
                hint: "Units digits of exponents are cyclic",
                step: "Find the pattern for the units digits",
                topic: "induction"

    },
    {
                title: `<a href="https://drive.google.com/file/d/1jL6YhoTo0eZbjgGHB8K4wvN9-gUxUs55/view" target="_blank" class="pset-link">
                Solvefire Iron Round 5 Problem 3
                </a>`,
                text: `How many integers from \\(1\\) to \\(1000\\) are divisible by \\(3\\) or \\(5\\) but not both?`,
                answer: '401',
                solution: `<b>401</b><p>We find that there are \\(\\frac{1000}{3} \\approx 333\\) divisible by \\(3\\) and \\(\\frac{1000}{5}=200\\) divisible by \\(5\\). There are \\(\\frac{1000}{3\\times5}\\aprox 66\\) divisible by both. We find \\(200+333-(66 \\times 2)=401\\) (we multiply by \\(2\\) because we "subtract from both stacks")`,
                hint: "Make sure not ot overcount",
                step: "Find how many are divisible by \\(3\\), and then by \\(5\\), and then by both",
                topic: "logic"
    },
    {
                title: `<a href="https://drive.google.com/file/d/1jL6YhoTo0eZbjgGHB8K4wvN9-gUxUs55/view" target="_blank" class="pset-link">
                Solvefire Iron Round 5 Problem 4
                </a>`,
                text: `A positive integer \\(n\\) leaves remainder \\(3\\) when divided by \\(7\\) and remainder \\(5\\) when
divided by \\(9\\). What is the smallest possible value of \\(n\\)?`,
                answer: '59',
                solution: `<b>59</b><p>We have that \\(7x+3=9y+5\\). We just have to find the smallest possible values for \\(y\\) and \\(x\\).For \\(y=1\\) we get 14, for \\(y=2\\) we have \\(23\\). The next values are \\(32,41,50, 59\\) which when divided by \\(7\\) give remainderis of \\(4, 6, 1, 3\\) for a final answer \\(59\\)`,
                hint: "Try out values",
                step: "Use the equation \\(7x+3=5y+9\\) and solve like a diophantine equation",
                topic: "logic"
    },
    {
                title: `<a href="https://drive.google.com/file/d/12HNZ5bzSkAHDBXr1CBgCExrOfkeXUiFb/view" target="_blank" class="pset-link">
                Solvefire Iron Round 6 Problem 3
                </a>`,
                text: `<p>Three boxes are labeled:</p>
                <ul>
                <li>Box 1: "The prize is not in Box 2"</li>
                <li>Box 2: "The prize is in Box 3"</li>
                <li>Box 3: "The prize is not in this box</li>
                </ul>
                <p>Exactly one statement is true. Determine which box contains the prize (answer with the number)</p>`,
                answer: '2',
                solution: `<b>2</b><p>We're goin to go through each box considering it is telling the truth and see what it tells us about the rest</p>
                <p>If box 1 is telling the truth, then the box is not in box 2. Then, box 2 must be lying so it is not in box 3 either. Finally, box 3 must be lying so the prize has to be in that box. This causes a contradiction, so box 1 cannot be telling the truth</p>
                <p>If box 2 is telling the truth, the prize is in box 3. If box 3 is lying, that confirms it. However, box 1 must be lying and that tells us it has to be in box 2. That contradicts. Box 2 must be lying</p>
                <p>If box 3 is telling the truth, the prize is in box 1 or box 2. If box 1 is lying, the prize is in box 2. And if box 2 is lying, the prize just cant be in box 3, which checks out</p>`,
                hint: "See how changing the truth value for each one changes the outcome",
                step: "Test out each value when it is true",
                topic: "logic"
    },

    {
        title: `<a href="https://drive.google.com/file/d/12HNZ5bzSkAHDBXr1CBgCExrOfkeXUiFb/view" target="_blank" class="pset-link">
                Solvefire Iron Round 6 Problem 5
                </a>`,
        text: `A positive integer \\(n\\) leaves remainder \\(2\\) when divided by \\(5\\), remainder \\(3\\) when divided by \\(6\\), and remainder \\(4\\) when divided by \\(7\\). Find the smallest posible value of \\(n\\)`,
        solution: `<b>207</b><p>We have some value \\(n\\) such that \\(5x+2=6y+3=7z+4\\). By the first term, we know it must end in \\(7\\) or \\(2\\) because a multiple of \\(5\\) must end in \\(0\\) or \\(5\\).</p>
        <p>It can't be \\(2\\) because when divided by an even value it leaves an odd remainder, making it odd. By subtracting \\(7-3\\) we know we need a multiple of \\(6\\) that ends in \\(4\\). We try \\(24\\) which yields \\(27\\). When divided by \\(7\\) it leaves a remainder of \\(6\\) though, so that doesn't work</p>
        <p>Another value would be \\(54\\) for \\(n=57\\). When this is divided by \\(7\\) the remainder is \\(1\\)</p>
        <p>Brute force doesn't seem to work that well. Notice that for each value, we have that \\(n\\) leaves a remainder of \\(x-3\\) when divided by \\(x\\). This means that \\(n+3\\) is divisible by \\(5, 6, 7\\) so \\(n+3=\\textup{lcm}(5,6,7)=210\\) for \\(n=210-3=207\\). `,
        hint: "Don't brute force, use the LCM",
        answer: '207',
        step: "Find the \\(\\textup{lcm}(5,6,7)\\) and subtract something",
        topic: "prime factorization"
    },
    {
            title: `<a href="https://drive.google.com/file/d/12HNZ5bzSkAHDBXr1CBgCExrOfkeXUiFb/view" target="_blank" class="pset-link">
                Solvefire Iron Round 6 Problem 6
                </a>`,
                text: `<p>Find the number of ordered pairs of positive integers \\((x,y)\\) such that</p>
                $$
                \\frac{1}{x}+\\frac{1}{y}=\\frac{1}{4}
                $$`,
                solution: `<b>5</b><p>Follow the following algebraic manipulation</p>
                $$
                \\frac{1}{x}+\\frac{1}{y}=\\frac{1}{4}
                $$
                $$
                \\frac{x+y}{xy}=\\frac{1}{4}
                $$
                $$
                4x+4y=xy
                $$
                $$
                xy-4x-4y=0
                $$
                $$
                x(y-4)-4y+16=16
                $$
                $$
                x(y-4)-4(y-4)=16
                $$
                $$
                (x-4)(y-4)=16
                $$
                <p>Now we are looking for factors of \\(16\\). We have \\(4, 4\\) for \\(x=8, y=8\\). We have \\(8, 2\\) for \\((12, 6), (6, 12)\\) and \\(16, 1\\) for \\((20, 5),(5,20)\\). There are \\(5\\) total`,
                answer: `5`,
                hint: "Rewrite in factored form",
                step: "rewrite as one fraction, then eliminate the fraction and factor by grouping",
                topic: 'algebraic manipulation'
    },
    {
            title: `<a href="https://drive.google.com/file/d/12HNZ5bzSkAHDBXr1CBgCExrOfkeXUiFb/view" target="_blank" class="pset-link">
                Solvefire Iron Round 6 Problem 8
                </a>`,
            text: `<p>How many integers \\(n\\) satisfy</p>
            $$
            1 \\leq n \\leq 100
            $$
            <p>such that </p>
            $$
            \\frac{n^2-n}{2}
            $$
            <p>is odd?</p>`,
            step: `<b>50</b><p>Note that \\(n^2-n\\) will always be even. First of all, the square of any number \\(n\\) has the some polarity (odd or even) as \\(n\\) and the difference between two numbers of the same polarity will always be even.</p>
            <p>The issue then becomes finding how many numbers are divisible by \\(4\\), because they can all be divisible by \\(2\\), but to be even they need to be divisible by \\(2^2=4\\).</p>
            <p>We can factor out the top equation into \\(n(n-1)\\). We need either \\(n\\) or \\(n-1\\) to be divisible by \\(4\\). There are \\(25\\) numbers \\(n\\) such that \\(1 \\leq n \\leq 100\\) that are divisible by \\(4\\), and another \\(25\\) such that \\(n-1\\) is divisible by \\(4\\) for a total of \\(50\\)`,
            answer: '50',
            hint: "What does \\(n^2-n\\) need to be divisible by?",
            step: "Rewrite the numerator as \\(n(n-1)\\)",
            topic: "logic"  
    },
    {
            title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 1
                </a>`,
            text: `The five digit number \\(20A26\\) is a multiple of \\(9\\), where \\(A\\) is a digit. Find the remainder when the six digit number \\(A1A1A1\\) is divided by \\(7\\)`,
            solution: `<b>0</b><p>We start by trying to find \\(20A26\\) divided by \\(9\\) by working backwards</p>
            <p>There is only one multiple of \\(9\\) that has a ones digit of \\(6\\), being \\(36\\). If you imagine long division, the last value will be \\(36\\). That means \\(B2-9x=3\\) where \\(B\\) is a digit and \\(x\\) is some integer. </p>
            <p>\\(B\\) must be equal to \\(1\\) (because with \\(99, x=11\\) and that doesnt fit with long division). Now working from the front and doing normal long idvision, we have that \\(20A26\\) will have a \\(2\\), we subtract \\(20-18\\) and get \\(2\\) again then bring down 
            the \\(A\\) for \\(2A-(18 \\textup{or} 27)=1\\). Thus, we need \\(A\\) to be \\(8\\) and to subtract \\(27\\) from it.</p>
            <p>From here, we just find \\(81818 \\equiv 0 \\textup{ mod }(7)\\)`,
            answer: "0",
            hint: "How can you use the process for long division to find \\(A\\)?",
            step: "To find \\(A\\), do long division working backwards and use logic",
            topic: "logic"

    },
    {
                title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 9
                </a>`,
                text: `Find the largest three-digit integer \\(n\\) such that the product of its digits is \\(0\\), the sum of its digits is \\(11\\), and \\(n\\) is divisible by \\(8\\)`,
                answer: '920',
                solution: "<b>920</b><p>We find the pairs of digits that sum to \\(11\\) (one must be \\(0\\) to make the product \\(0\\)). The first is \\(9, 2\\). Obviously, we want \\(9\\) in the hundredths place. We thus first try \\(920\\) and find that it is divisible by \\(8\\). That's the highest possible value, so that's our answer",
                hint: "What value in the hundreds place makes the number \\(n\\) highest",
                step: "Make pairs of digits that sum to \\(11\\)",
                topic: "logic"
    },
    {
                title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 8
                </a>`,
                text: 'Find the number of positive integers \\(n \\leq 100\\) such that the sum of divisors of \\(n\\) is odd',
                solution: `<b>17</b><p>Notice that the only way \\(n\\) can be odd and have an odd sum of divisors is if \\(n\\) is a perfect square. Each factor pair must have two odd numbers, and odd numbers always add to even, so we need a non-pair</p>
                <p>There are \\(5\\) examples of this: \\(1, 9, 25, 49, 81\\)</p>
                <p>For even numbers, it must be twice an odd square, because each factor pair has an even variant where both are even that adds to even and doesn't change the polarity. This gives \\(2,8,18,32,50,72,98\\). That's \\(10+7=17\\)`,
                answer: '17',
                topic: 'logic',
                hint: "There needs to be an odd number of factors",
                step: "Find all the perfect squares AND another thing related to perfect squares"
    },
    {
                title: `<a href="https://drive.google.com/file/d/1yUNjUWogsneSLl_p9KpJimbOHVLgX3J-/view" target="_blank" class="pset-link">
                Solvefire Iron Round 8 Problem 1
                </a>`,       
                text: `Find the smallest positive integer \\(n\\) such that \\(n\\) is a multiple of \\(11\\) and \\(n\\) has exactly \\(4\\) positive divisors`,
                solution: `<b>22</b><p>Obviously \\(11\\) has to be one of the factors. The number \\(1\\) and itself must be factors. Since \\(11\\) is prime and only couns as one factor, we need one more. The smallest prime number is \\(2\\) so we have \\(2 \\times 11=22\\)`,
                answer: '22',
                hint: "\\(1\\) and the number count as positive factors",
                step: "Find the smallest prime number",
                topic: "prime factorization"
    },
    {
                title: `<a href="https://drive.google.com/file/d/1yUNjUWogsneSLl_p9KpJimbOHVLgX3J-/view" target="_blank" class="pset-link">
                Solvefire Iron Round 8 Problem 6
                </a>`,     
                text: `Find the largest integer \\(n < 567\\) such that \\(\\textup{gcd}(n, 72)=1\\)`,
                solution: `<b>565</b><p>We start by finding the prime factorization of \\(72=2^3 \\times 3^2\\), meaning \\(n\\) cannot have \\(2\\) or \\(3\\) as factors</p>
                <p>The next smallest prime factor is \\(5\\). Since we cannot do \\(567\\) and obviously not \\(566\\) (because it has \\(2\\) as a factor), so we do \\(565\\). We divide this by \\(5\\) to find
                that it has a quotient of \\(113\\) which is prime, so \\(565\\) is coprime to \\(72\\)`,
                hint: "\\(n\\) cannot share prime factors with \\(72\\)",
                step: "Find the prime factorization of \\(72\\)",
                topic: "prime factorization"
    },
    {
        title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 4
                </a>`,
        text: `The sequence \\(a_{1}, a_{2}, a_{3}...\\) satisfies \\(a_{1}=1\\) and \\(a_{n+1}=\\frac{a_{n}}{1+na+{n}}\\) for all \\(n \\geq 1). \\(a_{100}\\) is in the form 
        \\(\\frac{m}{n}\\), where \\(m\\) and \\(n\\) are integers. Compute \\(m+n\\) `,
        solution: `<b>4952</b><p>We're going to try to simplify this by substitution and finidng the reciprocal</p>
        $$
        a_{n+1}=\\frac{a_{n}}{1+na_{n}}
        $$
        $$
        \\frac{1}{a_{n+1}}=\\frac{1+na_{n}}{a_{n}}
        $$
        $$
        \\frac{1}{a_{n+1}}=\\frac{1}{a_{n}} + n
        $$
        $$
        x_{n}=\\frac{1}{a_n}
        $$
        $$
        x_{n+1}=x_{n}+n
        $$
        <p>With some patterns and induction we compute the first few values of \\(x_{n}\\):</p>
        $$
        x_{2}=x_{1}+1
        $$
        $$
        x_{2}=1+1
        $$
        $$
        x_{3}=x_{2}+2
        $$
        $$
        x_{3}=1+1+2
        $$
        $$
        x_{4}=x_{3}+3
        $$
        $$
        x_{4}=1+1+2+3
        $$
        <p>We see a pattern of adding all of the numbers \\(n-1\\) to \\(n\\)</p>
        <p>With this, we write \\(x_{n}=1+\\[\\sum_{i=1}^{n-1} i\\]\\). We know that the sum of a integers less than \\(n\\) is \\(\\frac{n(n-1)}{2}\\). Thus we have \\(x_{100}=1+\\frac{100(100-1)}{2}=4951\\)</p>
        <p>So we have \\(\\frac{1}{a_{100}}=4951\\), so \\(a_{100}=\\frac{1}{4951}\\) for \\(m=1\\) and \\(n=4951\\) for \\(m+n=4952\\)
        `,
        answer: '4952',
        hint: "Find the reciprocal and substitute a value",
        step: "Set \\(x_{n}=\\frac{1}{a_{n}\\)",
        topic: "algebraic manipulation"

    },
    {
              title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 5
                </a>`,  
                text: `A positive integer is called \\(downhill\\) if all of its digits (which must be distinct and non-zero) are in descending order. Compute the number of \\(downhill\\) integers which are divisible by \\(15\\)`,
                solution: `<b>4</b><p>We know that the number must be divisible by \\(3\\) and \\(5\\) in order to be divisible by \\(15\\), and it must be odd</p>
                <p>To be divisible by \\(5\\) and not be odd, it needs to end in \\(5\\). To be divisible by \\(3\\), it has to have a sum of digits divisible by \\(3\\).</p>
                <p>Since it is \\(downhill\\), the remaining digits must be \\(6,7,8\\) or \\(9\\). We don't have to worry about order because for any combination of digits, there is only one order</p>
                <p>\\(5 \\equiv 2 (\\textup{ mod } 3)\\), so we need something is \\(\\equiv 1 (\\textup{ mod }3)\\). Looking at the remaining values we have</p>
                $$
                5 \\equiv 2 (\\textup{ mod } 3)
                $$
                $$
                6 \\equiv 0 (\\textup{ mod } 3)
                $$
                $$
                7 \\equiv 1 (\\textup{ mod } 3)
                $$
                $$
                8 \\equiv 2 (\\textup{ mod } 3)
                $$
                $$
                9 \\equiv 0 (\\textup{ mod } 3)
                $$
                <p>From this, we can deduce that we MUST have \\(7\\) in order to even out the remainder back to \\(0\\). We can't have \\(8\\) because there is no other digit that leaves a remainder of \\(1\\), and we can or can't add \\(9\\) and \\(6\\) without 
                affecting the divisiblity by \\(15\\). Thus, the only conditions are whether or not \\(6\\) and \\(9\\) are present, so we have \\(2 \\times 2 = 4\\)
                `,
                answer: '4',
                hint: "The number must end in \\(5\\) and have a sum of digits divisible by \\(3\\)",
                step: "Find the values \\(\\textup{ mod } 3\\) of all of the potential digits",
                topic: "modular arithmetic"
    },
    {
                      title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 8</a>`,
                text: `<p>The \\(3 \\times 3\\) grid satisfies the following conditions:</p>
                <p>The first row from the top is one less than a square</p>
                <p>The first column from the left is a multiple of \\(67\\)</p>
                <p>The third row from the top is a multiple of \\(83\\)</p>
                <p>The third column from the left is one more than a palindrome</p>
                <p>The second column from the left is a perfect square</p>
                <p>Compute the sum of all digits within the square</p>`,
                solution: `<b>39</b><p>The first rule tells us we need a square in the \\(200\\)s, this can be \\(225\\) or \\(256\\) for a value of \\(224\\) or \\(255\\). We'l hold off on this until we have more</p>
                <p>The second row gives a multiple of \\(67\\) that ends in \\(1\\) and is in the \\(200\\)s. This must be \\(67 \\times 3 = 201\\), so the middle square of the leftmost column is \\(0\\).</p>
                <p>The third row from the top (the bottom row) must be a multiple of \\(83\\) that is in the \\(100\\)s. This only works for \\(83 \\times 2 = 166\\). We thus have the rest to be \\(6\\) in that row</p>
                <p>For the fourth rule, we have that it is one more than a palindrome. The palindrome must be \\(575\\), because one more is \\(576\\) and ends in \\(6\\) like what we have</p>
                <p>Since the top is \\(5\\), we know that the top row is \\(255\\)</p>
                <p>The second column from the left needs to be a perfect square with in the \\(500\\)s ending in \\(6\\). We try \\(24^2\\),knowing it will end in \\(6\\) and get \\(576\\)</p>
                <p>Thus, we have \\(2+5+5+0+7+7+1+6+6=39\\)`,
                answer: '39',
                hint: "Go rule by rule",
                step: "Look at each rule and see what it tells you. From the second rule, you sohuld know that the middle box in the leftmost column should have a \\(0\\)",
                topic: "logic"
    },
    {
  title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 10</a>`,
        text: `Let \\(x, y\\) and \\(z\\) be positive reals satisfying \\(x+2y+3z=6\\). Compute the minimum value of \\(\\frac{1}{x}+\\frac{2}{y}+\\frac{3}{z}\\).`,
        solution: `<b>6</b><p>All of the values need to be \\(1\\). There are no other combinations where they are all integers, and having fractional denominators will just increase the sum</p>`,
        answer: '6',
        hint: "What does having a fraction in the denominator do",
        step: "Find a combination of all integers",
        topic: 'logic'
    },
    {
    title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 10
                </a>`, 
    text: `Find the number of pairs of positive integers \\((m,n)\\) with \\(m>n\\) such that \\(m^2-n^2=2024\\)`,
    solution: `<b>4</b><p>We can rewrite \\(m^2-n^2\\) with the difference of squares as \\((m+n)(m-n)=2024\\). In order for both values to be integers, we need the factors of \\(2024\\) to both be even, because then
    we will have an integer mean that is "in the middle". We find the prime factorization of \\(2024=2^3\\times 11 \\times 23\\) and find the \\(4\\) even-even factor pairs to be \\((2,1012), (4,506), (22,92), (44,46)\\). From here,
    we don't need to find all the values of \\((m,n)\\), because we know there will be \\(4\\) `,
    answer: '4',
    hint: "Find even-even factor pairs of \\(2024\\)",
    step: "Use the difference of squares",
    topic: "prime factorization"
    },
    {
          title: `<a href="https://drive.google.com/file/d/1mPBzWkGBDV-demFxXlQEImqYyUuVQWWA/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 5 Question 1</a>`,
        text: `Let \\(S={1,2,3,...15}\\). How many subjects of \\(S\\) contain no two consecutive integers? (Note: The empty set is considered a valid subset)`,
        solution: `<b></b><p>Denote \\(S_{n}\\) to be the number of subsets up to \\(1,2...n\\). We have \\(S_{1}=2, S_{2}=3, S_{3}=5, S_{4}=8\\). This is similar to a Fibbonacci sequence, which we can 
        prove</p>
        <p>\\(S_{n}\\) either contains \\(n\\) or doesn't. Containing \\(n\\) means it cannot contain \\(n-1\\) so the next highest is \\(S_{n-2}\\). For not containing \\(n-1\\), it has \\(S_{n-1}\\) subsets. Thus, we have \\(S_{n}=S_{n-1}+S_{n-2}\\)</p>
        <p>This is a fibbonacci sequence so we just keep going: \\(S_{5}=13, S_{6}=21...S_{15}=1597\\)`,
        answer: "1597",
        hint: "You should get something similar to a famous sequence",
        step: "Denote the subsets from \\(1, 2, ... n\\) as \\(S_{n}\\)",
        topic: "logic"
    },
    {
  title: `<a href="https://drive.google.com/file/d/1mPBzWkGBDV-demFxXlQEImqYyUuVQWWA/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 5 Question 8</a>`,
    text: `Find the sum of all prime numbers \\(p\\) such that \\(2^p+p^2\\) is also a prime number.`,
    solution: `<b>3</b><p>All odd numbers \\(p\\) such that \\(p \\geq 3\\) are either \\(p \\equiv 1 \\textup{(mod 3)\\) or \\(p \\equiv 2 \\textup{(mod 3)}\\). Induction (or logic), gives that \\(p^2 \\equiv 1 \\textup{(mod 3)}\\).</p>
    <p>We know that \\(2 \\equiv 2 \\textup{(mod 3)}\\) and since we know that powers of \\(2\\) will also be \\(equiv 3\\), so the remainder remains \\(2\\). Thus, \\(2^p +p^2 \\equiv 2+1 \\equiv 0 \\textup{(mod 3)}\\) so for all primes greater than \\(3\\) it is invalid.`,
    answer: '3',
    hint: "Solve \\(\\textup{mod 3}\\) for all values greater than \\(3\\)",
    step: "Find \\(2^p \\textup{(mod 3)}\\) and \\(p^2 \\textup{(mod 3)}\\)",
    topic: "modular arithmetic"
    },
    {
    title:  `<a href="https://drive.google.com/file/d/1mPBzWkGBDV-demFxXlQEImqYyUuVQWWA/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 5 Question 10</a>`,
    text: `<p>A sequence is defined by \\(a_{1}=2\\0 and the recursive formula \\(a_{n+1}=a_{n}+2n+2\\) for all integers \\(n \\geq 1\\). If the value of the sum</p>
    $$
    \\(\\sum_{k=1}^10\\frac{1}{a_{k}}\\)
    $$
    <p>is expressed as a fraction in simplest form \\(\\frac{p}{q}\\), what is the value of \\(p+q\\)?`,
    solution: `<b>21</b><p>By induction, we know that \\(a_{n}=n(n+1)\\), which you can rationalize but also just realize with a pattern</p>
    <p>Thus, we have \\(\\sum{k=1}^10\\frac{1}{k(k+1)}=\\frac{{1}{k}-\\frac{1}{k+1}\\). This creates a telescoping sum, so we know that \\(\\frac{p}{q}=1-\\frac{1}{11}=\\frac{10}{11}\\) for \\(p+q=10+11=21\\)`,
    answer: '21',
    hint: "The sum is a telescoping sum",
    step: "Rewrite \\(a_{n}=n(n+1\\)",
    topic: "induction"

    },
    {
            title:  `<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 6 Question 5</a>`,
                text: `Find the smallest positive integer that is not a perfect square and is the product of five primes`,
                solution: `<b>32</b><p>Notice that the primes do not have to be distinct. If we use
                only one number raised to the \\(5\\)th power, the power is odd so it will not be a perfect square. Thus, we find the smallest
                prime number to be \\(2\\) and compute \\(2^5=32\\)`,
                answer: '32',
                hint: "The primes do not have to be distinct",
                step: "Find the smallest prime number",
                topic: 'logic'

    },
    {
                  title:  `<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 6 Question 7</a>`,
                text: `How many integers \\(1 \\leq n \\leq 1000\\) satisfy that \\(n^2+1\\) is divisible by \\(5\\)?`,
                solution: `<b>400</b><p>We know that a number needs to end in \\(0\\) or \\(5\\) to be divisible by \\(5\\) so we are looking for units digits of \\(9, 4\\). We know that units digits of squares remain the same based on the uit digit of the squared number. Thus, we realize that 
                the possible units digits of squared numbers are \\(2, 3, 7, 8\\), so \\(\\frac{4}{10}\\). We find \\(\\frac{4}{10} \\times 1000 = 400\\)`,
                answer: '400',
                hint: "The units digit of the square of a number with units digit \\(n\\) is consistent for all numbers with units digit \\(n\\)",
                step: 'Find the possible units digits of \\(n\\)',
                topic: "modular arithmetic"  
    },
    {
                title: `<a href="https://drive.google.com/file/d/1FnKSnsci5mpWmfoZauslbFteUI83XPP7/view" target="_blank" class="pset-link">Solvefire Bronze 7 Problem 2</a>`, 
                text: `Find the smallest positive integer \\(n\\) such that \\(96n\\) is a perfect square and \\(540n\\) is a perfect cube`,
                solution: `<b>1350</b><p>We know that \\(n\\) must make an even number of factors when multipled with \\(96\\) raised to even powers, and factors raised to powers of \\(3\\) for \\(540n\\)</p>
                <p>\\(96=2^5 \\times 3\\). We need at least one \\(3\\) and one \\(2\\).</p>
                <p>We have \\(540=2^2 \\times 3^3 \\times 5\\). We need \\(5^2\\), which would be fine for both. We also added one \\(3\\) already, which makes the power \\(4\\), so we need to add another \\(2\\), so we currently have \\(2 \\times 5^2 \\times 3^3\\). For the two we already added one which fixes both, so we're good where we are</p>
                <p>We have that \\(2 \\times 3^3 \\times 5^2=1350\\)`,
                answer:'1350',
                hint: "Every power needs to be even for perfect squares, and every power needs to be divisible by \\(3\\) for cubes",
                step: "Find the prime factorization of \\(96\\) and \\(540\\)",
                topic: "prime factorization"
    },
    {
                title: `<a href="https://drive.google.com/file/d/1FnKSnsci5mpWmfoZauslbFteUI83XPP7/view" target="_blank" class="pset-link">Solvefire Bronze 7 Problem 3</a>`, 
                text: "How many \\(6-\\) digit positive integers can be formed using each of the digits \\(0,1,2,3,4,5\\) exactly once so that the resulting integer is divisible by \\(12\\)",
                solution: `<b>144</b><p>We need a value that is divisible by both \\(3\\) and \\(4\\). Divisibility by \\(3\\) is guranteed because we know that to be divisible by \\(3\\), the sum of digits
                has to be divisible by \\(3\\),, and \\(0+1+2+3+4+5=15\\) and \\(15 \\equiv 0 \\textup{ mod }(3)\\).</p>
                <p>In order to be divisible by \\(4\\), it's last two digits need to be divisible by \\(4\\). With these options, we see \\(04,12,20,24,32,40,52\\). In theory, this should give \\(4!\\) ways to rearrange the rest,
                but \\(0\\) cannot be in the front. For \\(04, 20, 40\\), we have \\(4!\\). For the rest, however, we have \\(3 \\times 3 \\times 2 \\times 1=18\\). Thus, we have \\((4! \\times 3) + (18 \\times 5) = 144\\)`,
                answer: '144',
                hint: "To be divisible by \\(4\\), the last two digits need to be divisible by \\(4\\)",
                step: "Find the possible last two digits",
                topic: "counting"
    },
    {
                title: `<a href="https://drive.google.com/file/d/1FnKSnsci5mpWmfoZauslbFteUI83XPP7/view" target="_blank" class="pset-link">Solvefire Bronze 7 Problem 5</a>`, 
                text: `<p>How many integers \\(n\\) with \\(1 \\leq n \\leq 1000\\) satisfy</p>
                $$
                \\textup{gcd}(n,84)=6
                $$
                `,
                solution: `<b>71</b><p>The prime factorization of \\(84 = 2^2 \\times 3 \\times 7\\). We need multiples of \\(6\\) that are \\(\\leq 1000\\) that are not multiples of \\(4\\) and \\(7\\). There are \\(\\frac{1000}{6} \\aprox 166\\) total 
                values. We need to erase all of those that are divisible by \\(4\\) or \\(7\\), which we notice is also just not multiples of \\(14\\). Within the \\(166\\) multiples of \\(6\\), we know that \\(\\frac{166}{2}\\) will be divisible by \\(4\\) (by inclusion exclusion), \\(\\frac{166}{7}=23\\) and \\(\\frac{166}{14}=11\\). So we
                do inclusion exclusion and find \\(166-83-23+11=71\\)`,
                answer: '71',
                hint: "Use inclusion exclusion such that for sets \\(M\\) and \\(A\\), the total number of values is \\(M+A-\\textup{both M and A}\\)",
                step: "Find what values cannot be in the prime factorization of \\(n\\)",
                topic: "prime factorization"
    }
    

]
const probabilityQ = [
    {
                title: `<a href="https://drive.google.com/file/d/13JgWp8yZP76xGkW3LAbRZODvHdTVCrBz/view" target="_blank" class="pset-link">Solvefire Bronze 8 Problem 4</a>`,
                text: `How many lattice paths are there from \\((0,0)\\) to \\((5,5)\\) moving only one unit right or one unit up at each step, that pass
                through neither \\((2,3)\\) \\((3,2)\\)`,
                solution: `<b>52</b><p>There are \\(\\binom{10}{5}=252\\) total paths, because you will always need to take \\(10\\) steps, it just matters which \\(5\\) are up, and you pick \\(5\\) of \\(10\\) for those</p>
                <p>The paths that reach \\((2,3)\\) are thus \\(\\binom{5}{2} \\times \\binom{5}{3}\\), because you can take two ups and two rights, in any order. We have \\(100\\) for that, and following the same logic, \\(100\\) for \\((3,2)\\). This gives \\(252-100-100=52\\)`,
                answer: '52',
                hint: "Use the choose function",
                step: "Find the total number of paths to \\((5,5)\\)",
                topic: "counting"
    },
    {
                title: `<a href="https://drive.google.com/file/d/13JgWp8yZP76xGkW3LAbRZODvHdTVCrBz/view" target="_blank" class="pset-link">Solvefire Bronze 8 Problem 2</a>`,
                text: `A bag contains \\(4\\) red balls and \\95\\) blue balls. Two balls are drawn simultaneously at random. Given that at
                least one of the drawn balls is red, the probability that exactly one of them is red can be written as \\(\\frac{m}{n}\\) in lowest terms. Find \\(m+n\\)`,
                solution: `<b>23</b><p>There are \\(\\binom{4+5}{2}=36\\) ways to pick in total. Of those, there are \\(\\binom{4}{1} \\binom{5}{1}=20\\) ways to pick one red and one blue, and \\(\\binom{5}{2}=10\\) ways to pick two blue, so there are \\(36-10=26\\) ways to pick at least one red. We thus have \\(\\frac{20}{26}=\\frac{10}{13}\\) for \\(10+13=23\\)`,
                answer: '23',
                step:  `Find the number of ways to pick at least one red`,
                hint: "Use complementary counting",
                topic: "counting"
    },

    {
        title: `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 3
                </a>`,
        text: `A bag contains \\(4\\) red marbles, \\(5\\) blue marbles, and \\(6\\) green marbles. Three marbles are drawn
at random without replacement. The probability that all three marbles are different colours
is in the form \\(\\frac{a}{b}\\)
, where \\(a\\) and \\(b\\) are coprime integers. Compute \\(a+b\\)`,
answer: '115',
solution: `<b>115</b><p>There are \\(6\\) total "paths" or orders that you can draw the marbles in, but notice that it doesn't really matter. Let's say you pull red, blue, and then green. The probability of red first is \\(\\frac{4}{15}\\) and then blue is \\(\\frac{5}{14}\\) and green is \\(\\frac{6}{13}\\). If you switch the order around, the order of the numerators changes, but the numbers in the numerator do not, and neither do the denominators.
Since they are all being multiplied together and multiplication is reagrdless of order, the chance is the same no matter what. Thus, we find the probability of \\(\\frac{4}{15} \\times \\frac{5}{14}\\frac{6}{13}=\\frac{4}{91}\\) which we multiply by \\(4\\) for \\(\\frac{24}{91}\\) and \\(a=24\\) and \\(b=91\\) for \\(a+b=115\\)`,
hint: "What stays the same regardless of order?",
step: "Find the probability for one 'order' of picking marbles and see how it relates to the rest",
topic: "counting"
    },
    {
        title:  `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 4
                </a>`,
        text: `For a positive integer \\(n\\), let \\(f(n)\\) be the sum of the digits of \\(n\\). For how many integers \\(n\\)
between \\(1\\) and \\(999\\) inclusive does \\(f(f(n))=8\\)?`,
solution: `<b>111</b><p>First start by finding what \\(f(n)\\) must be. We know that the highest sum \\(f(n)\\) is \\(9+9+9=27\\), so we're looking for numbers whose sum of digits is \\(8\\) that are \\(leq 27\\). This gives us \\(26, 17, 8\\).</p>
<p>Let's calculate all of these individually. For \\(26\\), we need two \\(9\\)s and one \\(8\\). There is no other way to do it because it is a large number. We can put the \\(3\\) in \\(3\\) places, so there are \\(3\\) options.</p>
<p>Next is \\(17\\). For the following two, I want to use a method called stars and bars, which is a systematic equation that discounts overcounting. The full proof can be found online, but all you need to know is that when dividing "stars" into bins separated by "bars". The formula is \\(\\binom{n+k-1}{k-1}\\) where \\(n\\) is the number of stars and \\(k\\) is the number of 
bins (\\(k-1\\) would be the number of bars). When dividing \\(17\\), we can imagine we have literally \\(17\\) stars divided into \\(3\\) sections, the digits. For this we do \\(\\binom{17+2}{2}=\\frac{19!}{2!(17!)=\\frac{19 \\cdot 18}{2}=19 \\cdot 9 = 171\\). We do need to be careful though, because there are chances that we put more than \\(9\\) in one "bin" which we cannot do because no digits place can have more than \\(9\\). To account for this overcounting, 
we find the number of ways where we overcount. This happens when one value is at least \\(10\\) so the remaining \\(7\\) are distributed among \\(3\\) bins (because it can also go in the bin where the \\(10\\) is) so we have \\(\\binom{7+2}{2}=\\frac{9!}{7!(2!)}=36\\). Since the one that is over can be in \\(3\\) places, we multiply that by \\(13\\). Thus, for \\(17\\) there are \\(171-36(3)=63\\)</p>
<p>The last one is \\(8\\). We do stars and bars for \\(8\\) across \\(3\\) which is \\(\\binom{8+2}{2}=\\frac{10!}{8!(2!)}=45\\).</p>
<p>Thus, we have \\(3+63+45=111\\)`,
topic: "casework",
hint: 'What are the values of \\(f(n)\\)?',
step: "Find the values of \\(f(n)\\) to be \\(27, 17,\\) and \\(8\\) and use stars and bars to calculate the total posibilities for each",
answer: '111'
    },
    {
                title:  `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 5
                </a>`,
        text: `A frog starts at the point \\((0,0)\\). It can make jumps of two types: a red jump of vector \\((1,2)\\)
and a blue jump of vector \\((2,1)\\). How many distinct points in the coordinate plane can the
frog reach after exactly \\(10\\) jumps?`,
solution: `<b>11</b>Notice that the order he makes the jumps does not matter because his final position is just \\((2r+b,r+2b)\\). Furthermore, notice that each combination is independent and produces its own location. We can test this by induction, because as \\(x\\) goes up, \\(y\\)  must go down. There are \\(11\\) values for \\(r\\) because he can go up to ten times and not \\(0\\) times. Thus he can reach \\(11\\) points`,
topic: "logic",
hint: 'Does the order matter?',
step: "Find the total number of possible red vector jumps he can make",
answer: '11',
    },
        {
                title:  `<a href="https://drive.google.com/file/d/1EjCHgPOzYYWH1kCgLqgop16tBamtvb2g/view" target="_blank" class="pset-link">
                Solvefire Iron Round 3 Problem 8
                </a>`,
        text: `In how many ways can the numbers \\(1,2,3,4,5,6,7,8\\) be placed in the vertices of a cube such
that the sum of the four numbers on every face is 18? (Rotations of the cube are considered
the same.)`,
solution: `<b>6</b>We count the total combinations we can have \\([1,8,2,7], [1,8,3,6], [1,8,4,5], [1,7,6,4]\\) and the remaining sets. There are \\(4\\) of these. Plant "1" on one vertice and draw out the rest(this one you just have to brute force with logic). That should give you \\(6\\) options`,
hint: 'How many arrangements are possible?',
step: "Put '1' or another number in the same corner every time and do casework",
answer: '6',
topic: "logic"
    },
    {
        title:  `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 2
                </a>`,
        text: `Bartholomew is listening to his favourite Spotify playlist. He wishes to
listen to all \\(7\\) songs, but does not wish to listen to Song \\(A\\) and Song \\(B\\)
consecutively. How many different ways can Bartholomew listen to his
playlist, with each song being played exactly once?`,
solution: `<b>3600</b>We start by seeing how many total arrangements are possible. We use \\(7! = 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 \\times 1=5040\\). However, we need to take into account the fact that he doesn't want \\(AB\\) consecutively. Imagine that \\(AB\\) is one song. There are now \\(6!\\) ways to order it, and we multiply that by \\(2\\) because the order of \\(AB\\) is interchangeable. We have \\(1440\\).</p>
<p>We find \\(5040-1440=3600\\)`,
hint: "Don't overcount",
step: "Find the total solutions and then account for overcounting by treating \\(AB\\) as one song.",
answer: '3600',
topic: "counting",
    },
    {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 9
                </a>`,
        text: `A rook is placed at the origin and can only move one unit up or right each
move. How many ways are there to reach \\((4,4)\\) without passing through
\\((3,2)\\)?`,
solution: `<b>40</b><p>Notice that whatever the case, we need to take \\(8\\) moves with \\(4\\) up and \\(4\\) right. We're going to start by finding the total number of ways he can get there. Let's focus on just the upwards movements. Of the \\(8\\) total movements, there are \\(4\\) up that can be in \\(\\binom{8}{4}=\\frac{8!}{4!(4!)}=70\\) places for a total of \\(70\\) paths</p>
<p>To account for overcounting, we need to see how the rook gets to \\((3,2)\\) and then see what happens after there. Getting to \\((3,2)\\) takes \\(5\\) movements so we find \\(\\binom{5}{3}=\\frac{5!}{2!(3!)}=10\\). After, there are \\(3\\) moves so we find \\(\\binom{3}{1}=3\\). Thus, we have \\(3 \\times 10 = 30\\) that we subtract from \\(70\\) which gives \\(70-30=40\\)`,
hint: "You can use \\(\\frac{n!}{k!(n-k!}\\) to find the total number of ways to get to a certain point from a certain point",
step: "Find the total number of ways to get to \\((4,4)\\) by using \\(\\frac{8!}{4!(4!}\\) and then find the number of ways to get to and continue from \\((3,2)\\)",
topic: "counting"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1CIKCEKMEMcsyl42nlQWEBDCnqhCYlkUU/view" target="_blank" class="pset-link">
                Solvefire Iron Round 4 Problem 10
                </a>`,
        text: `How many diagonals can be drawn in a \\(5000\\)-sided polygon?`,
solution: `<b></b><p>We use the equation \\(\\frac{n(n-3)}{2}\\) because for each point, there can be a diagonal drawn to all but \\(3\\) points, and if you do this for each point, each diagonal will be repeated twice. Inputting \\(5000\\) gives an answer of \\(12492500\\)`,
topic: "counting",
answer: '12492500',
hint: "What is the equation for the number of diagonals in an \\(n\\)-sided polygon?",
step: "Use the formula \\(\\frac{n(n-3)}{2}\\)"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1jL6YhoTo0eZbjgGHB8K4wvN9-gUxUs55/view" target="_blank" class="pset-link">
                Solvefire Iron Round 5 Problem 5
                </a>`,
        text: `Tyler chooses a meal consisting of one meat (beef, chicken, or pork), two different
vegetables (beans, corn, potatoes, tomatoes), and one dessert (brownies, cake, pudding,
or ice cream). How many different meals are possible?`,
solution: `<b>72</b><p>The meat has \\(\\binom{3}{1}=3\\) possibilities, the vegetables have \\(\\binom{4}{2}=6\\), and the dessert has \\(\\binom{4}{1}=4\\). Multiplying this gives a total of \\(3 \\times 6 \\times 4=72\\)`,
answer: '72',
hint: "The total number of combinations is the product of all the individual combinatioins",
step: "Find the number of ways to pick each item",
topic: "counting"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1jL6YhoTo0eZbjgGHB8K4wvN9-gUxUs55/view" target="_blank" class="pset-link">
                Solvefire Iron Round 5 Problem 6
                </a>`,
        text: `How many five-digit positive integers have digits in strictly increasing order?`,
        solution: `<b>126</b><p>Notice that any set of \\(5\\) individual numbers can be put into ascending order. We can't use \\(0\\) so we just use \\(\\binom{9}{5}=\\frac{9!}{5!(4!)}=126\\)`,
        answer: '126',
        hint: "You can use the choose function",
        step: "Calculate \\(\\binom{9}{5}\\)",
        topic: "counting"
    },
{
        title: `<a href="https://drive.google.com/file/d/1jL6YhoTo0eZbjgGHB8K4wvN9-gUxUs55/view" target="_blank" class="pset-link">
                Solvefire Iron Round 5 Problem 7
                </a>`,
        text: `A \\(4\\times4\\) grid of squares is colored so that each square is either red or blue. How many
colorings have exactly two red squares in each row?`,
        solution: `<b>1296</b><p>In each row, there are \\(\\binom{4}{2}=6\\) ways to pick which ones are red. There are \\(4\\) rows so we find \\(6^4=1296\\)`,
        answer: '1296',
        hint: "You can use the choose function",
        step: "Calculate \\(\\binom{4}{2}\\)",
        topic: "counting"
    },
{
        title: `<a href="https://drive.google.com/file/d/1Fx5je-2M02iqRk8TYz6Luzz3C3uxQfyJ/view" target="_blank" class="pset-link">
                Solvefire Iron Round 6 Problem 7
                </a>`,
        text: `How many permutations of the letters in the word \\(\\textup{MATH}\\) have the property that no letters are in its original position?`,
        solution: `<b>0</b><p>The first letter we choose a place for has \\(\\binom{3}{1}=3\\) ways to choose where it goes. The next one is complicated because there is a chance one of its places was taken up, and a chance it wasn't. Assuming it wasn't, there are \\(3\\) plcaes it can go, and the other two are set. Thus we have \\(3 \\times 3\\). We don't need to account for the case that the "next" letter
        had its place left open, because then we can picka  different next number`,
        answer: '9',
        hint: "How many places can each letter be in",
        step: "Find how many places the first letter to be put in place has, and then how many the next letter with the most option has",
        topic: "logic"
    },
    {
        title:  `<a href="https://drive.google.com/file/d/1Fx5je-2M02iqRk8TYz6Luzz3C3uxQfyJ/view" target="_blank" class="pset-link">
                Solvefire Iron Round 6 Problem 9
                </a>`,
        text: `How many three-digit positive integers have digits that increase from left to right and whose digits sum to \\(15\\)?`,
        solution:  `<b>8</b><p>We can just do casework by the first digit</p>
        <p>For \\(1\\) we need the remaining digits to sum to \\(14\\) so we have \\(159, 168\\). We can't do \\(177\\) because it's not ascending</p>
        <p>For \\(2\\) we have \\\(249, 258, 267\\)</p>
        <p>For \\(3\\) we ave \\(357, 348\\)</p>
        <p>For \\(4\\) we only have \\(456\\)</p>
        <p>There are \\(8\\) total</p>`,
        answer: '8',
        topic: 'casework',
        hint: "Divide into cases",
        step: "Divide by cases by the hundredth digit",
    },
    {
        title: `<a href="https://drive.google.com/file/d/1Fx5je-2M02iqRk8TYz6Luzz3C3uxQfyJ/view" target="_blank" class="pset-link">
                Solvefire Iron Round 6 Problem 9
                </a>`,
        text: `A code consists of four distinct digits. The first digit is odd, the last digit is even, and the code is divisible by \\(5\\). How many such codes are possible?`,
        solution: `<b>280</b><p>We know that the last digit must be \\(0\\) in order for it to be even and give us a number divisible by \\(5\\).</p>
        <p>The first digit can be \\(1,3,5,7,9\\)</p>
        <p>There are \\(8 \\times 7\\) ways to choose from the remaining digits. We have \\(5 \\times 8 \\times 7 \\times 1 = 280\\)`,
        answer: '280',
        hint: "What do the first and final digits have to be?",
        step: "Realize the last digit is \\(0\\) and find the number of possible values for each digit",
        topic: "counting"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 2
                </a>`,
        text: `A bag contains \\(3\\) red marbles and \\(3\\) blue marbles. Alice and Bob take turns drawing one marble at a time without replacement, with Alice going first. The 
        first player to draw a red marble wins. The probability that Alice wins can be written as \\(\\frac{p}{q}\\) in lowest terms. Find \\(p+q\\)`,
        solution: `<b>33</b><p>The probability that Alice pulls a red marble first try is \\(\\frac{3}{3+3}=\\frac{1}{2}\\). The probability that she draws it on her second turn relies on both her and Bob not drawing it on their first turns which is \\(\\frac{1}{2} \\times \\frac{2}{5}=\\frac{1}{5}\\). We then multiply this by 
        \\(\\frac{3}{4}\\), because of the remaining \\(4\\) marbles, \\(3\\) are red. This gives a \\(\\frac{3}{20}\\) probability. Notice that if no one has drawn a blue marble after Alice's second draw, Bob must win because all the blue marbles are gone.</p>
        <p>Thus, \\(\\frac{p}{q}=\\frac{1}{2}+\\frac{3}{20}=\\frac{13}{20}\\) for \\(p=13, q=20\\) and \\(p+q=33\\)`,
        answer: '33',
        hint: "Divide into cases and calculate the probability not just of one event, but all the events that allow that event to occur",
        step: "Find the probability of Alice drawing it on her own, and then find the probability ath by her second turn no one has drawn red and her chance of drawing red there.",
        topic: "casework"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1sQSdmSm6AJEFRR0cJ2EczPL4GYORvjU6/view" target="_blank" class="pset-link">
                Solvefire Iron Round 7 Problem 2
                </a>`,  
        text: `An ant stands at the bottom of a staricase with \\(8\\) steps. The ant can climb the stairs by taking either \\(1\\) step or \\(2\\) steps at a time. However, the \\(5\\)th step is sticky, and the ant cannot step on it. 
        In how many distinct ways can the ant reach the top ((8\\textup{th}\\)) step?`,
        solution: `<b>10</b><p>We know that the ant must land on the fourth step and climb two steps to reach the sixth step. We thus find how many ways there are to get to and from those places</p>
        <p>For \\(6\\), the ant can either just go directly to \\(8\\) with two steps or take all the steps individually. That's \\(2\\).</p>
        <p>For \\(4\\) it's a bit more complicated. We do casework by the number of "jumps" of two steps he takes. He can do all two steps, with one combination (two jumps), or one, which can be in \\(3\\) places. He can also take all one steps, which is \\(1\\) for \\(1+3+1=5\\)</p>
        <p>The total number of probabilities is \\(2 \\times 5 = 10\\)`,
        answer: '10',
        hint: "Where does the ant need to jump? How can you use that to divide his process",
        step: "Find the possibilities before \\(4\\) and after \\(6\\) independently",
        topic: "casework",
    },
    {
        title: `<a href="https://drive.google.com/file/d/1yUNjUWogsneSLl_p9KpJimbOHVLgX3J-/view" target="_blank" class="pset-link">
                Solvefire Iron Round 8 Problem 8
                </a>`, 
        text: `How many distinct rearrangements of the letters in the word \\(LEVEL\\) are there such that no two \\(L\\)'s are adjacent?`,
        solution: `<b>18</b><p>We have \\(5!=120\\) ways to rearrange in general. However, we divide this by \\(4\\) because the \\(E\\)s and \\(L\\)s can both be arranged in 
        \\(2\\) ways. Thus, we have \\(30\\) independent combinations</p>
        <p>There are four positions in which the \\(L\\)s can be adjacent. The remaining \\(3\\) places can be arranged in as many combinations as places that \\(V\\) can be in, which is \\(3\\), so we subtract \\(4 \\times 3 = 12\\)</p>
        <p>We hae \\(30-12-18\\)`,
        answer: '18',
        hint: "Make sure to not overcount iterations where \\(L\\) and \\(E\\) can be switched",
        step: "Find the total iterations but account for siutations where \\(E\\) and \\(L\\) can be switched",
        topic: "counting"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1yUNjUWogsneSLl_p9KpJimbOHVLgX3J-/view" target="_blank" class="pset-link">
                Solvefire Iron Round 8 Problem 9
                </a>`, 
        text: `A fair coin is flipped \\(6\\) times. The proability that the number of heads is strictly greater than the number of tails can be written as \\(\\frac{p}{q}\\) in lowest terms. Find \\(p+q\\)`,
        solution: `<b>43</b><p>The probability that the outcome is all heads is \\(\\frac{1}{2^6=\\frac{1}{64}\\). The probability of there being one tails is \\(\\frac{1}{2^6} \\times \\binom{6}{5}\\) (because they still all need to "flip the right valuee", but we need to pick \\(5\\) places for the heads to be in). Finally, 
        \\(4\\) heads is \\(\\frac{1}{2^6} \\times \\binom{6}{4}\\). We have \\(\\frac{1}{64}+\\frac{5}{64}+\\frac{16}{64}=\\frac{22}{64}=\\frac{11}{32}\\) for \\(p=11, q=32, p+q=43\\))`,
        answer: '43',
        hint: "Split into cases by the number of heads",
        step: "Find the probability for \\(6, 5\\) and \\(4\\) heads",
        topic: "casework"
    },
    {
                title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 2
                </a>`,
                text: `Compute the number of non-negative integer solutions to \\((x_{1}+x_{2}+x_{3})(y_{1}+y_{2}+y_{3})=2026\\)`,
                solution: `<b>18507528</b><p>First, start by finding the prime factorization of \\(2026=2 \\times 1013\\). Thus, the factors are \\(1,2,1013,2026\\) and thus \\(4\\) combintations because order does matter</p>
                <p>Starting with \\((1,2026)\\) and \\((2026,1)\\). For the \\(1\\) there are \\(\\binom{3}{1}\\) ways to arrange it (because the one can be in \\(3\\) places). For the 
                2026, we use "stars and bars", a technique where you sort \\(n\\) "stars", or elements, into \\(k\\) bins using \\(k-1\\) bars. The formula is \\(\\binom{n+k-1}{k-1}\\). With \\(3\\)
                positions and \\(2\\) bars, we have \\(\\binom{2028}{2}=\\frac{2028 \\times 2027}{2}=2055378\\) We in turn multiply this by \\(3\\) for all the places \\(1\\) can be in, and then again by \\(2\\) because, like I sad, the order of the factors matters. For
                factors \\(1\\) and \\(2026\\), there are \\(12332268\\) ways to solve</p>
                <p>We do the same thing with stars and bars for \\((2,1013)\\) and \\((1013,2)\\). For \\(2\\) there is \\(\\frac{4 \\times 3}{2}=6\\). For \\(1013\\) there is \\(\\frac{1015 \\times 1014}{2}=514605\\). We multiply \\(514605 \\times 2 \\times 6 = 6175260\\)</p>
                <p>Adding these gives \\(18507528\\)`,
                answer: '18507528',
                hint: "Use stars and bars",
                step: `Find the prime factorization of \\(2026\\) and see how to divide each factor among \\(3\\) "bins" with "bars"`,
                topic: "prime factorization"
    },
    {
    title: `<a href="https://drive.google.com/file/d/1sOEXpXM_ckqIZpDTJOlbCsT30BHPEJ3w/view" target="_blank" class="pset-link">
    Solvefire Silver 1 Question 4
    </a>`,   
    text: `A \\(1 \\times 8\\) strip of squares is tiled using \\(1\\times 1\\) red tiles, \\(1 \\times 1\\) blue tiles, and \\(1 \\times 2\\) green tiles. Find the number of distinct tiliings`,
    solution: `<b>985</b><p>We can break this into casework by the number of green tiles.</p>
    <p>When \\(4\\) green tiles, obviously, there's only one way to order it</p>
    <p>For \\(3\\), if we count a green tile as one tile (which it is anyways), we need to find \\(3\\) places for the green tiles to go, and since ther there are only "\\(5\\)" positions (because we imagine that \\(2\\times 1\\) takes one whole tile, we have \\(\\binom{5}{3}=10\\) which we multiply by 
    \\(2^2=4\\) arrangemenets for the remaiing colors which gives \\(40\\)</p>
    <p>If there's \\(2\\), we again treat \\(1 \\times 2\\) as one tile and consider ourselves to only have \\(6\\) tiles. That gives \\(\\binom{6}{2}=15\\) which we multiply by \\(2^4=16\\) for \\(240\\)</p>
    <p>If there's \\(0\\), we have \\(2^8=256\\)</p>
    <p>This gives \\(1+40+240++448256=985\\)`,
    answer: '985',
    hint: "Treat \\(1 \\times 2\\) as one slot",
    step: "Break into cases by the different number of green tiles",
    topic: "counting"
    },
    {
        title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 5
                </a>`,
        text: `There are \\(10\\) people seatd around a circular table. In how many ways can we choose \\(3\\) people such that no wo chosen people are adjacent?`,
        solution: `<b>50</b><p>The first person we pick doesn't matter, because that can be anything. However, aftere choosing one person, we only know that \\(7\\) seats are left. We split the next choice into two cases</p>
        <p>If the second person picked is adjacent to a chair adjacent to the first person picked. There are \\(2\\) ways for this to happen. That leaves \\(5\\) positions left, so \\(5\\) ways to pick the last. This gives \\(2 \\times 5=10)</p>
        <p>If the second person is anywhere else, there are \\(5\\) possibiltiies, and \\(6\\) chairs removed for \\(4\\). This gives \\(5 \\times 4 = 20\\)</p>
        <p>We thus have \\(20+30=50\\)`,
        answer: '50',
        hint: "The location of the second person relative to the first changes how many places the last can be in",
        step: "Split into cases by if the second person is within two seats of the first or not",
        topic: "casework"
    },
    {
               title: `<a href="https://drive.google.com/file/d/10BMrr_3ooJXXBZFSpx7_49VCva8rF75m/view" target="_blank" class="pset-link">
                Solvefire Bronze Contest 2 Question 6
                </a>`,
                text: `How many \\(5\\) digit numbers have the property that the sum of their digits is equal to \\(9\\), and each digit is non-zero?`,
                solution: `<b>70</b><p>We could do this with stars and bars, but we need to make sure we address the rule that no digit is \\(0\\). Thus, we rewrite each digit as \\(x_{i}+1\\), and all of those must sum to \\(9\\). Thus, all the values of \\(x\\) must sum to \\(4\\)/p>
                <p>We do stars and bars with \\(\\binom{4+5-1}{5-1}=\\binom{8}{4}=70\\)` ,
                answer: '70',
                hint: "Rewrite each digit algebraicly",
                step: "Rewrite each digit as \\(x_{i}+1\\)",
                topic: "counting"
    },
    {
        title: `<a href="https://drive.google.com/file/d/1mPBzWkGBDV-demFxXlQEImqYyUuVQWWA/view" target="_blank" class="pset-link">
    Solvefire Bronze 5 Question 7
    </a>`,  
    text: `A token is placed at the origin \\(x=0\\) of a number line. Each second, it moves \\(1\\) unit to the right with a probability of \\(\\frac{1}{2}\\), or \\(1\\) unit to the left with a probability of \\(\\frac{1}{2}\\). The probability that the toekn reaches \\(x-2\\)
    before it ever reaches \\(x=-3\\) can be expressed as a fraction in simplest form \\(\\frac{m}{n}\\). What is the value of \\(m+n\\)`,
    solution: `<b>8</b>We use a formula called "The Gambler's Ruin" that dictates for goal \\(a\\) and failiure boundary \\(-b\\) (which we have as \\(2, 3\\), we have \\(P=\\frac{b}{a+b}\\) so for us that's \\(\\frac{3}{5}\\) for \\(3+5=8\\)`,
    answer: '8',
    hint: "Use the gambler's ruin formula",
    step: "Use gambler's ruin \\(\\frac{\\textup{failire location}}{\\textup{goal + failiure location}}\\)",
    topic: "counting"
},
{
    title: `<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank" class="pset-link">Solvefire Bronze 6 Problem 1</a>`,
    text: `Seven people arrive at a hotel with three rooms. \\(A\\) and \\(B\\) hold two people ach, and \\(C\\) holds three people. How many ways can seven people be assigned to the rooms?`,
    solution: `<b>210</b><p>We have \\(\\binom{7}{2}=\\frac{7 \\times 6}{2}=21\\) ways of picking the people for room \\(A\\). From there, we have \\(\\binom{5}[2}=\\frac{5 \\times 4}{2}=10\\) ways of picking 
    for room \\(B\\). The rest will be in room \\(C\\), so we have \\(21 \\times 10=210\\)`,
    answer: '210',
    hint: "Calculate each room independently",
    step: "Use \\(\\binom{7}{2}\\) to find the people in room \\(A\\)",
    topic: "counting"
},
{
        title: `<a href="https://drive.google.com/file/d/1x546U0RJokTGUIZnFQVoSKE8YJGSOJm2/view" target="_blank" class="pset-link">Solvefire Bronze 6 Problem 4</a>`,
        text: `Two octagonal prisms and five cubes are given. A face is chosen uniformly at random from all faces. The probability that the chosen face comes from a cube is \\(\\frac{p}{q}\\) in lowest terms. Find \\(p+q\\)`,
        solution: `<b>8</b><p>An octagonal prism is just like stacking a bunch of octagons. It has \\(8\\) faces plus a top and bottom for \\(10\\) total. Each cube has \\(6\\) faces, so we have \\(\\frac{5(6)}{2(10)+5(6)}=\\frac{30}{50}=\\frac{3}{5}\\) for \\(3+5=8\\)`,
        answer: '8',
        hint: "An octagonal prism has \\(10\\) faces",
        step: "Find the total number of faces",
        topic: "logic"
},
{
        title: `<a href="https://drive.google.com/file/d/1FnKSnsci5mpWmfoZauslbFteUI83XPP7/view" target="_blank" class="pset-link">Solvefire Bronze 7 Problem 1</a>`, 
        text: `Two fair six-sided dice are rolled. Given that the product of the two numbers is even, the probability that their sum is prime can be written as \\(\\frac{m}{n}\\) in lowest terms. Find \\(m+n\\)`,
        solution: `<b>41</b><p>We hvae \\(36\\) total outcomes for both dice and \\(3 \\times 3=9\\) where it is odd (because they would both have to be odd). We thus have \\(27\\) even.</p>
        <p>The possible odd sums are \\(3,5,7,11\\). We know that exactly one dice needs to be even in order for it to be even and have an odd sum, so we solve</p>
        <p>\\(3\\) has \\((1,2), (2,1)\\), for \\(2\\) combinations</p>
        <p>\\(5\\) has \\((3,2), (2,3), (4,1), (1,4)\\) for \\(4\\)</p>
        <p>\\(7\\) gives \\((5,2), (2,5), (3,4), (4,3), (6,1), (1,6)\\) which gives \\(6\\)</p>
        <p>Finally, \\(11\\) gives only \\((6,1), (1,6)\\) for \\(2\\). We find \\(2+4+6+2=14\\) and \\(\\frac{14}{27}\\) for \\(14+27=41\\)`,
        answer: '41',
        hint: "Split into cases",
        step: "Find the possible prime numbers",
        topic: "casework"
},
{
title: `<a href="https://drive.google.com/file/d/1FnKSnsci5mpWmfoZauslbFteUI83XPP7/view" target="_blank" class="pset-link">Solvefire Bronze 7 Problem 9</a>`,
text: `How many ways are there to choose \\(4\\) vertices of a regular decagon so that no two chosen vertices are adjacent?`,
solution: `<b>25</b><p>The way to choose nonadjacent vertices in a row is \\(\\binom{\\textup{total vertices} - \\textup{vertices to find} + 1}{\\textup{vertices to find}}\\). However, we aren't dealing with a row, we are dealing with an almost cylic figure. Thus, we either eliminate or include the first vertex</p>
<p>If we include it, we can't use the two adjacent, so we have \\(7\\) left to distribute about \\(3\\) for \\(binom{7-3+1}{3}=10\\). If we don't, we just do \\(\\binom{9-4+1}{4}=15\\). We have \\(10 +15=25\\)`,
answer:'25',
hint: "Imagine they are in a row",
step: `Do caework on whether the "first" vertex is used or not`,
topic: "counting"
}
]
console.log(questions)
let algebraIndex = 0
let geometryIndex = 0
let numIndex = 0
let probIndex = 0
let allIndex = 0

shuffleArray(questions);
algebraQuestion = questions[algebraIndex]
// ---------- Question Data Geometry----------


shuffleArray(geometryQ);

shuffleArray(numTheoryQ);
const allQ = []
allQ.push(...questions)
allQ.push(...geometryQ)
allQ.push(...numTheoryQ)
allQ.push(...probabilityQ)
console.log(allQ)
// ---------- DOM Elements ----------
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const questionChoices = document.getElementById("mc-container")
const answerInput = document.getElementById("answer-input");
const checkBtn = document.getElementById("check-btn");
const solutionDiv = document.getElementById("solution");
const solutionText = document.getElementById("solution-text");
const nextBtn = document.getElementById("next-btn");
const toggleStreakBtn = document.getElementById("toggle-streak");
const streakWrapper = document.getElementById("streak-wrapper");
const streakBar = document.getElementById("streak-bar");
const backBtn = document.querySelector(".back-btn");
const mcContainer = document.getElementById("mc-container");
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"));
const algButton = document.getElementById("algebraButton");
const geometryButton = document.getElementById("geometryButton");
const numButton = document.getElementById("numtheoryButton");
const probButton = document.getElementById("probabilityButton");
const allButton = document.getElementById("allButton");
const image = document.getElementById("question-image")
const restartButton = document.getElementById("restart-btn");
const problemsWrapper = document.getElementById("problems-card");
const helpBtn = document.getElementById("helpButton");
const helpPannel = document.getElementById("helpPannel");
const overlay = document.getElementById("overlay");
const submitSolutionButton = document.getElementById("submit-a-solution");
const submitSolutionForm = document.getElementById("submit-a-solution-form");
const prevError = document.getElementById("prevError")
const hintBtn = document.getElementById("hintBtn")
const seeStep = document.getElementById("seeStep")
const hintText = document.getElementById("hint")
const stepOne = document.getElementById("stepOne")
const stepOneText = document.getElementById("stepOneText")
const strikeOne = document.getElementById("strikeOne")
const strikeTwo = document.getElementById("strikeTwo")
const strikeThree = document.getElementById("strikeThree")
const strikesContainer = document.getElementById("strikesContainer")
const mistakeBtn = document.getElementById("mistake")
const unfamiliarBtn = document.getElementById("unfamiliar")
const stuckBtn = document.getElementById("stuck")
const errorTags = document.getElementById("tagQuestion")
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
let questionsAnswered = 0;
let percentage = 0;
let percetnageStr = "0";
let test = document.getElementById("test");
let scoreCount = document.getElementById("score-count");

function recordWrongTopic(topic) {
    let topicToUpdate;

    if (questionType === "geometry") {
        topicToUpdate = geometryQuestion.topic;

    } else if (questionType === "algebra") {
        topicToUpdate = algebraQuestion.topic;

    } else if (questionType === "numTheory") {
        topicToUpdate = numQuestion.topic;
    } else if (questionType === "probability") {
        topicToUpdate = probQuestion.topic;
    } else if (questionType === "all") {
        topicToUpdate = allQuestion.topic;}
    if (!topicToUpdate) return;

    if (!topicsToWorkOn.includes(topicToUpdate)) {
        topicsToWorkOn.push(topicToUpdate);
        localStorage.setItem("topicsToWorkOnSolve", JSON.stringify(topicsToWorkOn))
    }

    const topicObj = TOPIC_GLOSSARY.find(x => x.id === topicToUpdate);
    if (topicObj) {
        topicObj.errors += 1;
        console.log(topicObj.errors)
        console.log(topicObj.attempts)
        topicObj.mastery = ((1 - (topicObj.errors/topicObj.attempts))*100) + "%"
        localStorage.setItem("topicGlossarySolve", JSON.stringify(TOPIC_GLOSSARY))
        localStorage.setItem("topicGlossarySetSolve", true)

    }

    updateTopicsDropdown();
}
function buttonsWork(){
    algButton.addEventListener("click", function() {
        questionType = "algebra";
        updateColors();
        prevError.style.display = "none"
        loadQuestion();
    });
    geometryButton.addEventListener("click", function() {
        questionType = "geometry";
        updateColors();
        prevError.style.display = "none"
        loadQuestion();
    });
    numButton.addEventListener("click", function() {
        questionType = "numTheory"
        updateColors();
        loadQuestion();
    })
    probButton.addEventListener("click", function() {
        questionType = "probability"
        updateColors();
        prevError.style.display = "none"
        loadQuestion();
    });
    allButton.addEventListener("click", function() {
        questionType = "all"
        updateColors();
        prevError.style.display = "none"
        loadQuestion();
    });
}
function updateColors(){
    if (questionType === "algebra"){
        algButton.classList.add("topicEnabled")
        geometryButton.classList.remove("topicEnabled")
        probButton.classList.remove("topicEnabled")
        numButton.classList.remove("topicEnabled")
        allButton.classList.remove("topicEnabled")
    } else if (questionType === "geometry") {
        geometryButton.classList.add("topicEnabled")
        algButton.classList.remove("topicEnabled")
        probButton.classList.remove("topicEnabled")
        numButton.classList.remove("topicEnabled")
        allButton.classList.remove("topicEnabled")
    } else if (questionType === "numTheory"){
        numButton.classList.add("topicEnabled")
        geometryButton.classList.remove("topicEnabled")
        probButton.classList.remove("topicEnabled")
        algButton.classList.remove("topicEnabled")
        allButton.classList.remove("topicEnabled")
    } else if (questionType === "probability") {
        probButton.classList.add("topicEnabled")
        geometryButton.classList.remove("topicEnabled")
        algButton.classList.remove("topicEnabled")
        numButton.classList.remove("topicEnabled")
        allButton.classList.remove("topicEnabled")
    } else if (questionType === "all") {
        allButton.classList.add("topicEnabled")
        geometryButton.classList.remove("topicEnabled")
        probButton.classList.remove("topicEnabled")
        numButton.classList.remove("topicEnabled")
        algButton.classList.remove("topicEnabled")
    }
}

// ---------- Load Question ----------
function loadAlgebra() {
    mcChoices.forEach(btn => btn.disabled = false);
    questionTitle.innerHTML = algebraQuestion.title;
    questionText.innerHTML = algebraQuestion.text;

    solutionText.innerHTML = "";
    solutionDiv.style.display = "none";
    nextBtn.style.display = "none";

    // Reset
    answerInput.value = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    mcContainer.classList.add("hidden");

    // ----- FREE RESPONSE -----
    if (!algebraQuestion.type || algebraQuestion.type === "fr") {
        answerInput.style.display = "inline-block";
        checkBtn.style.display = "inline-block";
    }

    // ----- MULTIPLE CHOICE -----
    if (algebraQuestion.type === "mc") {
        mcContainer.classList.remove("hidden");

        mcChoices.forEach((btn, i) => {
            btn.innerHTML = algebraQuestion.choices[i];
            btn.onclick = () => handleMCAnswer(algebraQuestion.choices[i]);
        });
    }
    if (algebraQuestion.image){
        image.src=algebraQuestion.image;
        image.style.display="block";
    } else {
        image.style.display="none";
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionText]).catch(()=>{});
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionChoices]).catch(()=>{});
    }
}
allQuestion = allQ[allIndex]
function loadAll() {
    mcChoices.forEach(btn => btn.disabled = false);

    questionTitle.innerHTML = allQuestion.title;
    questionText.innerHTML = allQuestion.text;

    solutionText.innerHTML = "";
    solutionDiv.style.display = "none";
    nextBtn.style.display = "none";

    // Reset
    answerInput.value = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    mcContainer.classList.add("hidden");

    // ----- FREE RESPONSE -----
    if (!allQuestion.type || allQuestion.type === "fr") {
        answerInput.style.display = "inline-block";
        checkBtn.style.display = "inline-block";
    }

    // ----- MULTIPLE CHOICE -----
    if (allQuestion.type === "mc") {
        mcContainer.classList.remove("hidden");

        mcChoices.forEach((btn, i) => {
            btn.innerHTML = allQuestion.choices[i];
            btn.onclick = () => handleMCAnswer(allQuestion.choices[i]);
        });
    }
    if (allQuestion.image){
        image.src=allQuestion.image;
        image.style.display="block";
    } else {
        image.style.display="none";
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionText]).catch(()=>{});
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionChoices]).catch(()=>{});
    }
}
geometryQuestion = geometryQ[geometryIndex]

function loadGeometry() {
    questionType = "geometry",
    mcChoices.forEach(btn => btn.disabled = false);

    questionTitle.innerHTML = geometryQuestion.title;
    questionText.innerHTML = geometryQuestion.text;

    solutionText.innerHTML = "";
    solutionDiv.style.display = "none";
    nextBtn.style.display = "none";

    // Reset
    answerInput.value = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    mcContainer.classList.add("hidden");

    // ----- FREE RESPONSE -----
    if (!geometryQuestion.type || geometryQuestion.type === "fr") {
        answerInput.style.display = "inline-block";
        checkBtn.style.display = "inline-block";
    }

    // ----- MULTIPLE CHOICE -----
    if (geometryQuestion.type === "mc") {
        mcContainer.classList.remove("hidden");

        mcChoices.forEach((btn, i) => {
            btn.innerHTML = geometryQuestion.choices[i];
            btn.onclick = () => handleMCAnswer(geometryQuestion.choices[i]);
        });
    }
    if (geometryQuestion.image){
        image.src=geometryQuestion.image;
        image.style.display="block";
    } else {
        image.style.display="none";
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionText]).catch(()=>{});
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionChoices]).catch(()=>{});
    }
}
numQuestion = numTheoryQ[numIndex]
function loadNumTheory() {
    mcChoices.forEach(btn => btn.disabled = false);

    questionTitle.innerHTML = numQuestion.title;
    questionText.innerHTML = numQuestion.text;

    solutionText.innerHTML = "";
    solutionDiv.style.display = "none";
    nextBtn.style.display = "none";

    // Reset
    answerInput.value = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    mcContainer.classList.add("hidden");

    // ----- FREE RESPONSE -----
    if (!numQuestion.type || numQuestion.type === "fr") {
        answerInput.style.display = "inline-block";
        checkBtn.style.display = "inline-block";
    }

    // ----- MULTIPLE CHOICE -----
    if (numQuestion.type === "mc") {
        mcContainer.classList.remove("hidden");

        mcChoices.forEach((btn, i) => {
            btn.innerHTML = numQuestion.choices[i];
            btn.onclick = () => handleMCAnswer(numQuestion.choices[i]);
        });
    }
    if (numQuestion.image){
        image.src=numQuestion.image;
        image.style.display="block";
    } else {
        image.style.display="none";
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionText]).catch(()=>{});
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionChoices]).catch(()=>{});
    }
}


    probQuestion = probabilityQ[probIndex]
function loadProb() {
    console.log("loading prob")
    mcChoices.forEach(btn => btn.disabled = false);

    questionTitle.innerHTML = probQuestion.title;
    questionText.innerHTML = probQuestion.text;

    solutionText.innerHTML = "";
    solutionDiv.style.display = "none";
    nextBtn.style.display = "none";

    // Reset
    answerInput.value = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    mcContainer.classList.add("hidden");

    // ----- FREE RESPONSE -----
    if (!probQuestion.type || probQuestion.type === "fr") {
        answerInput.style.display = "inline-block";
        checkBtn.style.display = "inline-block";
    }

    // ----- MULTIPLE CHOICE -----
    if (probQuestion.type === "mc") {
        mcContainer.classList.remove("hidden");

        mcChoices.forEach((btn, i) => {
            btn.innerHTML = probQuestion.choices[i];
            btn.onclick = () => handleMCAnswer(probQuestion.choices[i]);
        });
    }
    if (probQuestion.image){
        image.src=numQuestion.image;
        image.style.display="block";
    } else {
        image.style.display="none";
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionText]).catch(()=>{});
    }
    if (window.MathJax) {
        MathJax.typesetPromise([questionChoices]).catch(()=>{});
    }
}


//-----------MCQ----
function handleMCAnswer(choice) {
    answerInput.value = choice; // reuse existing checker
    checkBtn.click();
    if (nextBtn.style.display !== "none"){
mcChoices.forEach(btn => btn.disabled = true);
    }
}





// ---------- Popup ----------
function showPopup(message, isCorrect) {
    popup.innerHTML = message;
    popup.style.backgroundColor = isCorrect ? "#4CAF50" : "#f44336";
    popup.style.opacity = "1";
    setTimeout(() => popup.style.opacity = "0", 2000);
}
// Example Usage:
const originalString = "hello world";
const capitalizedString = capitalizeFirstLetter(originalString);

// ---------- Check Answer ----------
let correct = 1
function checkAnswerGeometry() {

    if (strikes == 2){
        geometryTotal += 1
        localStorage.setItem("geometryTotalSolve", geometryTotal)
            updateRadarChart()
    }
    const topicObj = TOPIC_GLOSSARY.find(x => x.id === geometryQuestion.topic);
    if (topicObj) {
        topicObj.attempts += 1;
    }
    const userAnswer = answerInput.value.trim();
    const correctAnswer = geometryQuestion.answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
        correct = 1;
        getExpectedScore(userRatingGeometry, geometryQuestion.rating)
        score = score + geometryQuestion.difficulty;
        scoreCount.innerHTML = Math.round(userRatingAll);
            streakCount++;
            correctCount++;
            difficultyProgressG++;
            if (difficultyG == 1 && difficultyProgressG == 4){
                difficultyG++;
                difficultyProgressG = 0;
                
            } else if (difficultyG == 2 && difficultyProgressG  == 3){
                difficultyG++;
                difficultyProgressG = 0;
                
            } else if (difficultyG == 3 && difficultyProgressG  == 2){
                difficultyG++;
                difficultyProgressG = 0;
                
            } else if (difficultyG == 4 && difficultyProgressG == 1){
                difficultyG ++;
                difficultyProgressG = 0;
                
            }
        document.getElementById("streak-count").innerHTML = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + geometryQuestion.solution;
                solutionDiv.style.display = "block";
    solutionText.style.display = "block"
    nextBtn.style.display = "inline-block";

      // Existing confetti
       myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });

    // Your existing streak bar animation
        showHighlight();
        if (streakCount >= longestStreak){
            longestStreak=streakCount;
        }



    } else if (userAnswer !== correctAnswer && nextBtn.style.display === "none") {
           if (strikes ==  2){
            updateRadarChart()
                hintBtn.innerHTML  = "Show Hint"
                strikesContainer.style.display = "inline"
const mistakesGeometryTrue = wrongQuestionsGeometry.some(item => item.countdown === 0);
        strikeOne.style.color = "var(--primary-color) !important"
        correct = 0;
        hintBtn.style.display = "inline"
        getExpectedScore(userRating, geometryQuestion.rating)
        recordWrongTopic(geometryQuestion.topic);
        updatePieChart()
        difficultyG = Math.max(1, difficultyG - 1);
        difficultyProgressG = 0;
        score = score - difficultyG;
        scoreCount.innerHTML = Math.round(userRatingAll);
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(geometryQuestion.topic);
        wrongCount++;
        const wrongEntryTrueAlgebra = wrongQuestionsGeometry.some(item => item.title === wrongQuestionsGeometry.title);
        if (wrongEntryTrueAlgebra === false){
        wrongQuestionsGeometry.push(geometryQuestion)
        wrongQuestionsGeometry[wrongQuestionsGeometry.length - 1].errorCount = 1;
        wrongQuestionsGeometry[wrongQuestionsGeometry.length - 1].countdown = 3
                if (mistakesGeometryTrue === true){
            let alreadyDefined = false
            wrongQuestionsGeometry.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 ** item.errorCount)
                    }
                }
            })
        }
        }
        document.getElementById("streak-count").innerHTML = streakCount;

        problemsWrapper.classList.add("shake");
        setTimeout(() => problemsWrapper.classList.remove("shake"), 400);
        questionType = "geometry"
        strikes -= 1
        getExpectedScore(userRating, geometryQuestion.rating)
                        scoreCount.innerHTML = Math.round(userRatingAll);
    } else  if (strikes === 1){
        seeStep.style.display = "inline"
        strikeTwo.style.color = "var(--primary-color) !important"
        strikes -= 1
    } else {
        geometryWrong += 1
        localStorage.setItem("geometryWrongSolve", geometryWrong)
        updateRadarChart()
        errorTags.style.display = "inline"
        strikeThree.style.color = "var(--primary-color) !important"
        console.log("no strikes")
            solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect` + geometryQuestion.solution;
const mistakesGeometryTrue = wrongQuestionsGeometry.some(item => item.countdown === 0);
                solutionDiv.style.display = "block";
    solutionText.style.display = "block"
    nextBtn.style.display = "inline-block";
    stepOne.style.display = "none"
    hintBtn.style.display = "none"
    hintText.style.display = "none"
    seeStep.style.display = "none"
}

    }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
}
function checkAnswerAlgebra(){

    if (strikes == 2){
        algebraTotal += 1
        localStorage.setItem("algebraTotalSolve", algebraTotal)
            updateRadarChart()
    }
    const topicObj = TOPIC_GLOSSARY.find(x => x.id === algebraQuestion.topic);
    if (topicObj) {
        topicObj.attempts += 1;
    }

    const userAnswer = answerInput.value.trim();
    const correctAnswer = algebraQuestion.answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
            nextBtn.style.display = "inline-block";
    stepOne.style.display = "none"
    hintBtn.style.display = "none"
    hintText.style.display = "none"
    seeStep.style.display = "none"
        correct = 1;
        getExpectedScore(userRating, algebraQuestion.rating)
        score = score + algebraQuestion.difficulty;
        scoreCount.innerHTML = Math.round(userRatingAll);
            streakCount++;
            correctCount++;
            difficultyProgress++;
            if (difficulty == 1 && difficultyProgress == 4){
                difficulty++;
                difficultyProgress = 0;
                
            } else if (difficulty == 2 && difficultyProgress  == 3){
                difficulty++;
                difficultyProgress = 0;
                
            } else if (difficulty == 3 && difficultyProgress  == 2){
                difficulty++;
                difficultyProgress = 0;
                
            } else if (difficulty == 4 && difficultyProgress == 1){
                difficulty ++;
                difficultyProgress = 0;
                
            }
        document.getElementById("streak-count").innerHTML = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + algebraQuestion.solution;
                solutionDiv.style.display = "block";
    solutionText.style.display = "block"
    nextBtn.style.display = "inline-block";
      // Existing confetti
       myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });

    // Your existing streak bar animation
        showHighlight();
        if (streakCount >= longestStreak){
            longestStreak=streakCount;
        }



    } else if (userAnswer !== correctAnswer && nextBtn.style.display === "none") {
        if (strikes ==  2){

                scoreCount.innerHTML = Math.round(userRatingAll);
                hintBtn.innerHTML  = "Show Hint"
                strikesContainer.style.display = "inline"
const mistakesAlgebraTrue = wrongQuestionsAlgebra.some(item => item.countdown === 0);
        strikeOne.style.color = "var(--primary-color) !important"
        correct = 0;
        hintBtn.style.display = "inline"
        getExpectedScore(userRating, algebraQuestion.rating)
        recordWrongTopic(algebraQuestion.topic);
                            updatePieChart()
        difficulty = Math.max(1, difficulty - 1);
        difficultyProgress = 0;
        score = score - difficulty;
        scoreCount.innerHTML = Math.round(userRatingAll);
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(algebraQuestion.topic);
        wrongCount++;
        const wrongEntryTrueAlgebra = wrongQuestionsAlgebra.some(item => item.title === wrongQuestionsAlgebra.title);
        if (wrongEntryTrueAlgebra === false){
        wrongQuestionsAlgebra.push(algebraQuestion)
        wrongQuestionsAlgebra[wrongQuestionsAlgebra.length - 1].errorCount = 1;
        wrongQuestionsAlgebra[wrongQuestionsAlgebra.length - 1].countdown = 3
                if (mistakesAlgebraTrue === true){
            let alreadyDefined = false
            wrongQuestionsAlgebra.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 ** item.errorCount)
                    }
                }
            })
        }
        }
        document.getElementById("streak-count").innerHTML = streakCount;

        problemsWrapper.classList.add("shake");
        setTimeout(() => problemsWrapper.classList.remove("shake"), 400);
        questionType = "algebra"
        strikes -= 1
        correct = 0
        getExpectedScore(userRating, algebraQuestion.rating)
        console.log(userRatingAll)
        scoreCount.innerHTML = Math.round(userRatingAll)
    } else  if (strikes === 1){
        seeStep.style.display = "inline"
        strikeTwo.style.color = "var(--primary-color) !important"
        strikes -= 1
    } else {
        algebraWrong += 1
        localStorage.setItem("algebraWrongSolve", algebraWrong)
        updateRadarChart()
        errorTags.style.display = "inline"
        strikeThree.style.color = "var(--primary-color) !important"
        console.log("no strikes")
            solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect` + algebraQuestion.solution;
const mistakesAlgebraTrue = wrongQuestionsAlgebra.some(item => item.countdown === 0);
                solutionDiv.style.display = "block";
    solutionText.style.display = "block"
    nextBtn.style.display = "inline-block";
    stepOne.style.display = "none"
    hintBtn.style.display = "none"
    hintText.style.display = "none"
    seeStep.style.display = "none"
}

    }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
}
function checkAnswerAll() {
    const topicObj = TOPIC_GLOSSARY.find(x => x.id === allQuestion.topic);
    if (topicObj) {
        topicObj.attempts += 1;
    }
    const userAnswer = answerInput.value.trim();
    const correctAnswer = allQuestion.answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
        score = score + allQuestion.difficulty;
        scoreCount.innerHTML = Math.round(userRatingAll);
            streakCount++;
            correctCount++;
            difficultyProgressAll++;
            if (difficultyAll == 1 && difficultyProgressAll == 4){
                difficultyAll++;
                difficultyProgressAll = 0;
                
            } else if (difficultyAll == 2 && difficultyProgressAll  == 3){
                difficultyAll++;
                difficultyProgressAll = 0;
                
            } else if (difficultyAll == 3 && difficultyProgressAll  == 2){
                difficultyAll++;
                difficultyProgressAll = 0;
                
            } else if (difficultyAll == 4 && difficultyProgressAll == 1){
                difficultyAll ++;
                difficultyProgressAll = 0;
                
            }
        document.getElementById("streak-count").innerHTML = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + allQuestion.solution;

      // Existing confetti
       myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });

    // Your existing streak bar animation
        showHighlight();
        if (streakCount >= longestStreak){
            longestStreak=streakCount;
        }



    } else if (userAnswer !== correctAnswer && nextBtn.style.display === "none") {
        recordWrongTopic(allQuestion.topic);
        difficultyAll = Math.max(1, difficultyAll - 1);
        difficultyProgressAll = 0;
        score = score - difficulty;
        scoreCount.innerHTML = Math.round(userRatingAll);
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(allQuestion.topic);
        wrongCount++;
        const wrongEntryTrueAll = wrongQuestionsAll.some(item => item.title === wrongQuestionsAll.title);
        if (wrongEntryTrueAll === false){
        wrongQuestionsAll.push(allQuestion)
        wrongQuestionsAll[wrongQuestionsAll.length - 1].errorCount = 1;
        wrongQuestionsAll[wrongQuestionsAll.length - 1].countdown = 3
        }
        document.getElementById("streak-count").innerHTML = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect` + allQuestion.solution;
        problemsWrapper.classList.add("shake");
        setTimeout(() => problemsWrapper.classList.remove("shake"), 400);
        questionType = "all"
    }

    solutionDiv.style.display = "block";
    nextBtn.style.display = "inline-block";
const mistakesAllTrue = wrongQuestionsAll.some(item => item.countdown === 0);
        if (mistakesAllTrue === true){
            let alreadyDefined = false
            wrongQuestionsAll.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 ** item.errorCount)
                    }
                }
            })
        }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
}


function checkAnswerProb() {

    if (strikes == 2){
        probTotal += 1
        localStorage.setItem("probTotalSolve", probTotal)
            updateRadarChart()
    }
    const topicObj = TOPIC_GLOSSARY.find(x => x.id === probQuestion.topic);
    if (topicObj) {
        topicObj.attempts += 1;
    }
    const userAnswer = answerInput.value.trim();
    const correctAnswer = probQuestion.answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
            correct = 1;
        getExpectedScore(userRatingProbability, probQuestion.rating)
        score = score + probQuestion.difficulty;
        scoreCount.innerHTML = Math.round(userRatingAll);
            streakCount++;
            correctCount++;
            difficultyProgressP++;
            if (difficultyP == 1 && difficultyProgressP == 1){
                difficultyP++;
                difficultyProgressP = 0;
                
            } else if (difficultyP == 2 && difficultyProgressP  == 3){
                difficultyN++;
                difficultyProgressP = 0;
                
            } else if (difficultyP == 3 && difficultyProgressP  == 2){
                difficultyP++;
                difficultyProgressP = 0;
                
            } else if (difficultyP == 4 && difficultyProgressP == 1){
                difficultyP ++;
                difficultyProgressP = 0;
                
            }
        document.getElementById("streak-count").innerHTML = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + probQuestion.solution;

      // Existing confetti
       myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });

    // Your existing streak bar animation
        showHighlight();
        if (streakCount >= longestStreak){
            longestStreak=streakCount;
        }



    } else if (userAnswer !== correctAnswer && nextBtn.style.display === "none") {
     if (strikes ==  2){
                scoreCount.innerHTML = Math.round(userRatingAll);
                hintBtn.innerHTML  = "Show Hint"
                strikesContainer.style.display = "inline"
const mistakesProbTrue = wrongQuestionsProb.some(item => item.countdown === 0);
        strikeOne.style.color = "var(--primary-color) !important"
        correct = 0;
        hintBtn.style.display = "inline"
        getExpectedScore(userRating, probQuestion.rating)
        recordWrongTopic(probQuestion.topic);
        updatePieChart()
        difficultyP = Math.max(1, difficultyP - 1);
        difficultyProgressP = 0;
        score = score - difficultyP;
        scoreCount.innerHTML = Math.round(userRatingAll);
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(probQuestion.topic);
        wrongCount++;
        const wrongEntryTrueProb = wrongQuestionsProb.some(item => item.title === wrongQuestionsProb.title);
        if (wrongEntryTrueProb === false){
        wrongQuestionsProb.push(algebraQuestion)
        wrongQuestionsProb[wrongQuestionsProb.length - 1].errorCount = 1;
        wrongQuestionsProb[wrongQuestionsProb.length - 1].countdown = 3
                if (mistakesProbTrue === true){
            let alreadyDefined = false
            wrongQuestionsProb.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 ** item.errorCount)
                    }
                }
            })
        }
        }
        document.getElementById("streak-count").innerHTML = streakCount;

        problemsWrapper.classList.add("shake");
        setTimeout(() => problemsWrapper.classList.remove("shake"), 400);
        questionType = "probability"
        getExpectedScore(userRating, algebraQuestion.rating)
        console.log(userRatingAll)
        scoreCount.innerHTML = Math.round(userRatingAll)
        strikes -= 1
    } else  if (strikes === 1){
        seeStep.style.display = "inline"
        strikeTwo.style.color = "var(--primary-color) !important"
        strikes -= 1
    } else {
        updatePieChart()
        probWrong += 1
        localStorage.setItem("probWrongSolve", probWrong)
        updateRadarChart()
        errorTags.style.display = "inline"
        strikeThree.style.color = "var(--primary-color) !important"
        console.log("no strikes")
            solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect` + probQuestion.solution;
const mistakesProbTrue = wrongQuestionsProb.some(item => item.countdown === 0);
                solutionDiv.style.display = "block";
    solutionText.style.display = "block"
    nextBtn.style.display = "inline-block";
    stepOne.style.display = "none"
    hintBtn.style.display = "none"
    hintText.style.display = "none"
    seeStep.style.display = "none"
}

    }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
    questionType = "probability"
}
function checkAnswerNum() {

    if (strikes == 2){
        numTotal += 1
        localStorage.setItem("numTotalSolve", numTotal)
            updateRadarChart()
    }
    const topicObj = TOPIC_GLOSSARY.find(x => x.id === numQuestion.topic);
    if (topicObj) {
        topicObj.attempts += 1;
    }
    const userAnswer = answerInput.value.trim();
    const correctAnswer = numQuestion.answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
            correct = 1;
        getExpectedScore(userRatingNumTheory, numQuestion.rating)
        score = score + numQuestion.difficulty;
        scoreCount.innerHTML = Math.round(userRatingAll);
            streakCount++;
            correctCount++;
            difficultyProgressN++;
            if (difficultyN == 1 && difficultyProgressN == 4){
                difficultyN++;
                difficultyProgressN = 0;
                
            } else if (difficultyN == 2 && difficultyProgressN  == 3){
                difficultyN++;
                difficultyProgressN = 0;
                
            } else if (difficultyN == 3 && difficultyProgressN  == 2){
                difficultyN++;
                difficultyProgressN = 0;
                
            } else if (difficultyN == 4 && difficultyProgressN == 1){
                difficultyN ++;
                difficultyProgressN = 0;
                
            }
        document.getElementById("streak-count").innerHTML = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + numQuestion.solution;
                solutionDiv.style.display = "block";
    solutionText.style.display = "block"
    nextBtn.style.display = "inline-block";

      // Existing confetti
       myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });

    // Your existing streak bar animation
        showHighlight();
        if (streakCount >= longestStreak){
            longestStreak=streakCount;
        }



    } else if (userAnswer !== correctAnswer && nextBtn.style.display === "none") {
    if (strikes ==  2){
                scoreCount.innerHTML = Math.round(userRatingAll);
                hintBtn.innerHTML  = "Show Hint"
                strikesContainer.style.display = "inline"
const mistakesNumTrue = wrongQuestionsNum.some(item => item.countdown === 0);
        strikeOne.style.color = "var(--primary-color) !important"
        correct = 0;
        hintBtn.style.display = "inline"
        getExpectedScore(userRating, numQuestion.rating)
        recordWrongTopic(numQuestion.topic);
        updatePieChart()
        difficultyN = Math.max(1, difficultyN - 1);
        difficultyProgressN = 0;
        score = score - difficultyN;
        scoreCount.innerHTML = Math.round(userRatingAll);
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(numQuestion.topic);
        wrongCount++;
        const wrongEntryTrue = wrongQuestionsNum.some(item => item.title === wrongQuestionsNum.title);
        if (wrongEntryTrue === false){
        wrongQuestionsNum.push(numQuestion)
        wrongQuestionsNum[wrongQuestionsNum.length - 1].errorCount = 1;
        wrongQuestionsNum[wrongQuestionsNum.length - 1].countdown = 3
                if (mistakesNumTrue === true){
            let alreadyDefined = false
            wrongQuestionsNum.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 ** item.errorCount)
                    }
                }
            })
        }
        }
        document.getElementById("streak-count").innerHTML = streakCount;

        problemsWrapper.classList.add("shake");
        setTimeout(() => problemsWrapper.classList.remove("shake"), 400);
        questionType = "numTheory"
        strikes -= 1
        getExpectedScore(userRating, algebraQuestion.rating)
        console.log(userRatingAll)
        scoreCount.innerHTML = Math.round(userRatingAll)
    } else  if (strikes === 1){
        seeStep.style.display = "inline"
        strikeTwo.style.color = "var(--primary-color) !important"
        strikes -= 1
    } else {
        updatePieChart()
        numWrong += 1
        localStorage.setItem("numWrongSolve", numWrong)
        updateRadarChart()
        errorTags.style.display = "inline"
        strikeThree.style.color = "var(--primary-color) !important"
        console.log("no strikes")
            solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect` + numQuestion.solution;
const mistakesNumTrue = wrongQuestionsNum.some(item => item.countdown === 0);
                solutionDiv.style.display = "block";
    solutionText.style.display = "block"
    nextBtn.style.display = "inline-block";
    stepOne.style.display = "none"
    hintBtn.style.display = "none"
    hintText.style.display = "none"
    seeStep.style.display = "none"
}

    }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
    questionType = "numTheory"
}
checkBtn.addEventListener("click", function () {
        console.log(questionType)
    if (questionType === "algebra"){
            checkAnswerAlgebra();
    }
    if (questionType ==="geometry"){
        checkAnswerGeometry();
    }
    if (questionType ==="numTheory"){
        checkAnswerNum();
    }
    if (questionType === "probability"){
        checkAnswerProb();
    } 
    if (questionType === 'all'){
        checkAnswerAll();
    }
});
function restart(){
    currentQuestion = 0;
    document.getElementById("streak-count").innerHTML = streakCount;
    shuffleArray(questions);
    shuffleArray(geometryQ);
    shuffleArray(numTheoryQ);
    shuffleArray(probabilityQ);
    shuffleArray(allQ);
    questions.used = false;
    // Hide dashboard

    // Show questions again
    loadQuestion();
    problemsWrapper.classList.remove("hidden");
}
// ---------- Next Question ----------
nextBtn.addEventListener("click", function () {
        strikesContainer.style.display = "none"
    if (questionType === "algebra"){
        algebraIndex += 1
        algebraNext();
        wrongQuestionsAlgebra.forEach(item => {
            item.countdown -= 1;
        })
    } else if (questionType === "geometry"){
        geometryIndex += 1
        geometryNext();
        wrongQuestionsGeometry.forEach(item =>{
            item.countdown -= 1;
        })

    } else if (questionType === "numTheory"){
        numIndex += 1
        numNext();
        wrongQuestionsNum.forEach(item =>{
            item.countdown -= 1;
        })
    } else if (questionType === "probability"){
        probIndex += 1
        probNext();
        wrongQuestionsProb.forEach(item =>{
            item.countdown -= 1;
        })
    } else if (questionType === 'all'){
        allIndex += 1
        allNext();
        wrongQuestionsAll.forEach(item =>{
            item.countdown -= 1;
        })
    }
});

function algebraNext() {
    problemsWrapper.classList.add("slide-out");
    setTimeout(() => {
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        geometryCurrent++;
        const mistakeAlgebraTrue = wrongQuestionsAlgebra.some(item => item.countdown === 0);
        if (mistakeAlgebraTrue === true){
            let alreadyDefined = false
            wrongQuestionsAlgebra.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        algebraQuestion = item
                        prevError.style.display = "inline"
                        loadAlgebra();
                    } else {
                        item.countdown += 1
                    }
                }
            })
        } else if (currentQuestion < questions.length) {
            prevError.style.display = 'none'
    algebraQuestion = questions[algebraIndex]
            loadQuestion();

            // Slide in effect
            problemsWrapper.classList.add("slide-in");
            setTimeout(() => problemsWrapper.classList.remove("slide-in"), 350);
        } else {
restart();
}

    }, 300); // matches slide-out duration
questionType = "algebra";
}
function findTopic(topic){
    return topic.name === topic;
}
function allNext() {
    problemsWrapper.classList.add("slide-out");
    setTimeout(() => {
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        allCurrent++;
        const mistakeAllTrue = wrongQuestionsAll.some(item => item.countdown === 0);
        if (mistakeAllTrue === true){
            let alreadyDefined = false
            wrongQuestionsAll.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        allQuestion = item
                        prevError.style.display = "inline"
                        loadAll();
                    } else {
                        item.countdown += 1
                    }
                }
            })
        } else if (currentQuestion < allQ.length) {
            prevError.style.display = 'none'
    allQuestion = allQ[index]
    console.log(allQuestion)
            loadAll();

            // Slide in effect
            problemsWrapper.classList.add("slide-in");
            setTimeout(() => problemsWrapper.classList.remove("slide-in"), 350);
        } else {
restart();
}

    }, 300); // matches slide-out duration
questionType = "all";
}
function updateTopicsDropdown() {

TOPIC_GLOSSARY.sort((a,b) => b.errors-a.errors)
const topicsFixed = TOPIC_GLOSSARY.filter(u => u.errors > 0).map(x => x.id);
console.log(topicsFixed)
    const container = document.getElementById("topics-dropdown");

    container.innerHTML = ""; // clear old content
    topicsFixed.forEach(topic => {
        const info = TOPIC_GLOSSARY.find(u => u.id === topic);
        if (!info) return;
        const wrapper = document.createElement("div");
        wrapper.className = "topic-item";
    let show = info.errors;
    let mastery = info.mastery;
wrapper.innerHTML = `
  <button class="topic-button">
    ${info.title}
    <svg class="dropdown-icon" viewBox="0 0 24 24">
      <path fill="currentColor" d="M7 10l5 5 5-5z"/>
    </svg>
  </button>
  <div class="topic-content">
    <p>${info.description}</p>
    <h4>Errors: ${show}</h4>
    <h4>Accuracy: ${mastery}</h4>
    <h4>How to Improve:</h4>
    <ul>${info.workOn.map(skill => `<li>${skill}</li>`).join("")}</ul>
    <h4>Practice a question from this topic:</h4>
    <div id="mini-practice-${info.id.replace(/\s+/g, '-')}" class='problem problem-wrapper deactivated'>
      <button class="problemBtn" onclick="loadTopicQuestion('${info.id}')">Practice This Topic</button>
    </div>
  </div>
`;


        container.appendChild(wrapper);
    MathJax.typesetPromise([wrapper]).catch(()=>{})
        
        }
    )};
document.getElementById("topics-dropdown").addEventListener("click", function(e) {
    const button = e.target.closest(".topic-button");
    if (!button) return;

    button.classList.toggle("active");
    button.nextElementSibling.classList.toggle("show");
});




// ---------- Next Question Geometry ----------
function geometryNext(){
    // Slide out
    problemsWrapper.classList.add("slide-out");
    setTimeout(() => {
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        geometryCurrent++;
        const mistakesGeometryTrue = wrongQuestionsGeometry.some(item => item.countdown === 0);
        if (mistakesGeometryTrue === true){
            let alreadyDefined = false
            wrongQuestionsGeometry.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        geometryQuestion = item
                        prevError.style.display = "inline"
                        loadGeometry();
                    } else {
                        item.countdown += 1
                    }
                }
            })
        } else if (geometryCurrent < geometryQ.length) {
            prevError.style.display = 'none  '
    geometryQuestion = geometryQ[geometryIndex]
            loadQuestion(geometryCurrent);

            // Slide in effect
            problemsWrapper.classList.add("slide-in");
            setTimeout(() => problemsWrapper.classList.remove("slide-in"), 350);
        } else {
restart();
}

    }, 300); // matches slide-out duration
questionType = "geometry";
}
function probNext() {
    // Slide out
    problemsWrapper.classList.add("slide-out");
    setTimeout(() => {
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        probCurrent++;
        const mistakesProbTrue = wrongQuestionsProb.some(item => item.countdown === 0);
        if (mistakesProbTrue === true){
            let alreadyDefined = false
            wrongQuestionsProb.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        probQuestion = item
                        prevError.style.display = "inline"
                        loadProb();
                    } else {
                        item.countdown += 1
                    }
                }
            })
        } else if (probCurrent < probabilityQ.length) {
            prevError.style.display = 'none'
    probQuestion = probabilityQ[probIndex]
            loadProb();

            // Slide in effect
            problemsWrapper.classList.add("slide-in");
            setTimeout(() => problemsWrapper.classList.remove("slide-in"), 350);
        } else {
restart();
}
})
}
function numNext(){
    // Slide out
    problemsWrapper.classList.add("slide-out");
    setTimeout(() => {
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        numCurrent++;
        const mistakesNumTrue = wrongQuestionsNum.some(item => item.countdown === 0);
        if (mistakesNumTrue === true){
            let alreadyDefined = false
            wrongQuestionsNum.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        numQuestion = item
                        prevError.style.display = "inline"
                        loadNumTheory();
                    } else {
                        item.countdown += 1
                    }
                }
            })
        } else if (numCurrent < numTheoryQ.length) {
            prevError.style.display = 'none'
    numQuestion = numTheoryQ[numIndex]
            loadQuestion();

            // Slide in effect
            problemsWrapper.classList.add("slide-in");
            setTimeout(() => problemsWrapper.classList.remove("slide-in"), 350);
        } else {
restart();
}
})
}

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





// ---------- Shuffle Questions ----------
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
currentQuestion = 0;
geometryCurrent = 0;
numCurrent = 0;
probCurrent = 0;


//------------Switch Subjects--------------
function loadQuestion() {
        errorTags.style.display = "none"
        strikesContainer.display = "none"
        seeStep.style.display = "none"
        stepOne.style.display = "none"
        hintText.style.display = "none"
        strikes = 2;
        hintBtn.style.display = 'none'
        strikeOne.style.color = 'var(--shadow-color) !important'
        strikeTwo.style.color = 'var(--shadow-color) !important'
        strikeThree.style.color = 'var(--shadow-color) !important'
    submitSolutionForm.style.display = "none";
    submitSolutionButton.style.display='block'
if (questionType === "probability"){
        loadProb(probCurrent);
        questionType = "probability"
    }
    if (questionType === "algebra") {
        loadAlgebra(currentQuestion);
    } else if (questionType === "geometry"){
        loadGeometry(geometryCurrent);
        questionType = "geometry";
    } else if (questionType === "numTheory"){
        loadNumTheory(numCurrent)
        questionType = "numTheory"
    } else if (questionType === 'all'){
        loadAll(allCurrent);
        questionType = 'all'
    }

}
overlay.addEventListener("click", function(){
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
shuffleArray(probabilityQ)

    // 5. Update Container HTML


function checkMiniMC(selected, correct, solution, containerId) {
    const container = document.getElementById(containerId);
    
    // Disable all choice buttons
    container.querySelectorAll('.mini-mc-btn').forEach(b => b.disabled = true);
    const solutionDiv = container.querySelector('.mini-solution');
    const nextBtn = container.querySelector('.next-topic-btn');


    if (selected.trim() === correct.trim()) {
        solutionDiv.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ${solution}`;
    } else {
        solutionDiv.innerHTML = `<span class="material-symbols-outlined">
close_small</span> Incorrect. ${solution}`;
    }

    solutionDiv.style.display = 'block';
    nextBtn.style.display = 'inline-block';
    if (window.MathJax) MathJax.typesetPromise([solutionDiv]).catch(()=>{});
}

function checkMiniAnswer(btn, answer, solution, containerId) {
    const container = document.getElementById(containerId)
    const input = container.querySelector('.mini-answer');
    const solutionDiv = container.querySelector('.mini-solution');
    const nextBtn = container.querySelector('.next-topic-btn');

    if (input.value.trim().toLowerCase() === answer.trim().toLowerCase()) {
        solutionDiv.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ${solution}`;
    } else {
        solutionDiv.innerHTML = `<span class="material-symbols-outlined">
close_small</span> Incorrect. ${solution}`;
    }

    input.disabled = true;
    btn.disabled = true;
    solutionDiv.style.display = 'block';
    nextBtn.style.display = 'inline-block';
    
    if (window.MathJax) MathJax.typesetPromise([solutionDiv]).catch(()=>{});
}
submitSolutionButton.addEventListener("click", function() {
        submitSolutionForm.style.display = 'block';
        submitSolutionButton.style.display = 'none';
})
function noHint(array,object) {
        array.forEach(i => {
                if (i.object === null){
                        i.object = "Not available for this question"
                }
        })
}
noHint(questions, hint)
noHint(geometryQ, hint)
noHint(numTheoryQ, hint)
noHint(probabilityQ)
function noStep(array) {
        array.forEach(i => {
                if (i.step === null){
                        i.step = "Not available for this question"
                }
        })
}
noStep(questions)
noStep(geometryQ)
noStep(numTheoryQ)
noStep(probabilityQ)
function getExpectedScore(userRating, questionRating){
    let expectedRating = (1 / (1 + Math.pow(10, (questionRating - userRating) / 400)));
    updateRating(userRating, expectedRating, correct);
}
function updateRating(oldRating, expectedRating, correct){
        console.log(correct)
    let newRating = oldRating + (250 * (correct - expectedRating))
    console.log(newRating)
    if (questionType !== "all"){
        if (questionType === "algebra"){
                userRating = newRating
                console.log(userRating)
        } else if (questionType === "geometry"){
                userRatingGeometry = newRating
        } else if (questionType === "probability"){
                userRatingProbability = newRating
        } else if(questionType === "numTheory"){
                userRatingNumTheory = newRating
        } else if (questionType === "all"){
                userRatingAll = newRating
        }
    }
    updateAllRating();
    save();
}
function store() {
localStorage.setItem("elo", userRatingAll)
}
hintBtn.addEventListener("click", function(){
        if (hintText.style.display === "none"){
                hintText.style.display = "block"
                hintBtn.innerHTML = "Hide Hint"
                if (questionType === "algebra"){
                        hintText.innerHTML = "<b>HINT: </b>" + algebraQuestion.hint
                        hint.style.color = "var(--accent-color)"
                } else if (questionType === "geometry"){
                        hintText.innerHTML = "<b>HINT: </b>" + geometryQuestion.hint
                        hint.style.color = "var(--accent-color)"                
                } else if (questionType === "numTheory"){
                        hintText.innerHTML = "<b>HINT: </b>" + numQuestion.hint
                        hint.style.color = "var(--accent-color)"                        
                } else if (questionType === "probability"){
                        hintText.innerHTML = "<b>HINT: </b>" + probQuestion.hint
                        hint.style.color = "var(--accent-color)"    
                }
                MathJax.typesetPromise([hintText]);
        } else {
                hintText.style.display = "none"
                hintBtn.innerHTML = "Show Hint"
        }
})
seeStep.addEventListener("click", function() {
        if (stepOne.style.display === "none"){
                stepOne.style.display = "block"
                seeStep.innerHTML = "Hide First Step"
                if (questionType === "algebra"){
                        stepOneText.innerHTML = algebraQuestion.step
                } else if (questionType === "geometry"){
                        stepOneText.innerHTML = geometryQuestion.step
                } else if (questionType === "numTheory"){
                        console.log("numTheoryStep1")
                        stepOneText.innerHTML = numQuestion.step
                } else if (questionType === "probability"){
                        stepOneText.innerHTML = probQuestion.step
                }
                MathJax.typesetPromise([stepOneText]);
        } else {
                stepOne.style.display = "none"
                seeStep.innerHTML = "See The First Step"
        }        
})

function loadTopicQuestion(topic) {
    // 1. Combine all arrays and filter by topic
    const topicQuestions = allQ.filter(q => q.topic === topic)
    // 2. Select a random question
    const q = topicQuestions[Math.floor(Math.random() * topicQuestions.length)];

    // 3. Find the container
    const containerId = `mini-practice-${topic.replace(/\s+/g, '-')}`;
    const checkBtnId = `mini-check-${topic.replace(/\s+/g, '-')}`;
    const container = document.getElementById(containerId);
    container.classList.remove('deactivated')
    if (!container) return;

    // 4. Build answer UI
    let answerHTML = '';
    if (q.type === 'mc' && q.choices) {
        answerHTML = `
            <div class="mini-mc">
                ${q.choices.map(choice => `
                    <button class="mc-choice problemBtn mini-mc-btn" id="${choice}">
                        ${choice}
                    </button>
                `).join('')}
                            </div>`;
    } else {
        answerHTML = `
            <div class="mini-fr">
                <input type="text" class="mini-answer" placeholder="Your answer">
                <button class="problemBtn checkBtnMini" id="mini-check-${topic.replace(/\s+/g, '-')}">
                    Check
                </button>
            </div>`;
}

    container.innerHTML = `
<div class="miniTitleContainer">
        <p class="amc10title mini">${q.title}</p>
                <div class="miniTag">${topic}</div>
                </div>
        <p class="mini-question-text par">${q.text}</p>
        ${answerHTML}
        <div class="mini-solution solution" style="display:none; margin-top:10px;"></div>
        <button class="problemBtn next-topic-btn" style="display:none; margin-top:10px;" 
            onclick="loadTopicQuestion('${topic}')">
            Next Question
        </button>
    `;
    if (window.MathJax) MathJax.typesetPromise([container]).catch(()=>{});
    if (q.type != 'mc'){
    const checkBtnMini = document.getElementById(checkBtnId)
    checkBtnMini.addEventListener("click", function () {
        checkMiniAnswer(checkBtnMini, q.answer, q.solution, containerId)
    })
}
if (q.type === 'mc'){
    const option1 = document.getElementById(q.choices[0])
    const option2 = document.getElementById(q.choices[1])
    const option3 = document.getElementById(q.choices[2])
    const option4 = document.getElementById(q.choices[3])
    const option5 = document.getElementById(q.choices[4])
    option1.addEventListener("click", function() {
        checkMiniMC(option1.textContent, q.answer, q.solution, containerId)
    })
    option2.addEventListener("click", function() {
        checkMiniMC(option2.textContent, q.answer, q.solution, containerId)
    })
    option3.addEventListener("click", function() {
        checkMiniMC(option3.textContent, q.answer, q.solution, containerId)
    })
    option4.addEventListener("click", function() {
        checkMiniMC(option4.textContent, q.answer, q.solution, containerId)
    })
    option5.addEventListener("click", function() {
        checkMiniMC(option5.textContent, q.answer, q.solution, containerId)
    })
}
}

mistakeBtn.addEventListener("click", function(){
    mistake += 1
    localStorage.setItem("mistakeSolve", mistake)
    updateBarGraph()
})
unfamiliarBtn.addEventListener("click", function(){
    unfamiliar += 1
    localStorage.setItem("unfamiliarSolve", unfamiliar)
    updateBarGraph()
})
stuckBtn.addEventListener("click", function(){
    stuck += 1
    updateBarGraph()
    localStorage.setItem("stuckSolve", stuck)
})
let myChart = null; // 1. Define this OUTSIDE the function

function updateBarGraph() {
    const xValues = ["Unfamiliar With Topic", "Stuck / Reached Dead End", "Arithmetic Issue"];
    const yValues = [unfamiliar, stuck, mistake];
    const barColors = ["#88B0FF", "#88B0FF", "#88B0FF"];

    // 2. The Fix: If a chart exists, kill it before creating a new one
    if (myChart) {
        myChart.destroy();
    }

    const ctx = document.getElementById("barChart");
    
    // 3. Create the new chart and store it in our variable
    myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues,
                borderRadius: 6 // Optional: makes it look more "Saintly"
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            }
        }
    });
}
let pieChart = null
function updatePieChart(){
    if (pieChart) {
        pieChart.destroy();
    }
    console.log(topicsToWorkOn)
    const ctx = document.getElementById("pieChart");
    let xValues = []
    let yValues = []
    topicsToWorkOn.forEach(i => {
        const topicObj = TOPIC_GLOSSARY.find(x => x.id === i);
if (topicObj && topicObj.errors && topicObj.errors > 0) {
            xValues.push(topicObj.name || topicObj.id); // Use name if available
            yValues.push(topicObj.errors);
        }

    })
pieChart = new Chart("pieChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      data: yValues,
    }]
  },
  options: {
    responsive: true,
    plugins: {
        legend: {display: true}
    }
  }
});
}
let myRadarChart = null
function updateRadarChart(){
    const data = {
        labels: 
        ["Algebra", "Geometry", "Number Theory", "Probability"],
        datasets: [{label: "Incorrect", 
            data: [algebraWrong, geometryWrong, numWrong, probWrong], borderColor: '#ffb192', backgroundColor: '#fff0eb'
        },
        {label: "Attempted", 
            data: [algebraTotal, geometryTotal, numTotal, probTotal], borderColor: '#88B0FF', backgroundColor: '#ebf3ff'
        },
]
    }
if (myRadarChart) {
        myRadarChart.destroy();
    }

    // 3. Create the chart
    const ctx = document.getElementById('radarChart').getContext('2d');
    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
            elements: {
                line: { borderWidth: 3 }
            },
            scales: {
                r: {
                    angleLines: { display: true },
                    suggestedMin: 0,
                    ticks: { stepSize: 1 } // Good for low question counts
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Accuracy Per Subject',
                    color: '#333',
                    font: { size: 16 }
                }
            }
        }

    })
    
}
updatePieChart()
updateRadarChart()
updateBarGraph()
// ---------- Start ----------
shuffleArray(questions);
shuffleArray(allQ)
loadQuestion();
buttonsWork();
updateColors();
updateTopicsDropdown()
loadAlgebra()
window.loadTopicQuestion = loadTopicQuestion;
window.loadQuestion = loadQuestion;
