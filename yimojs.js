const toggleBrightness = document.getElementById("brightness")
let colorMode = 'light'
let colorModeTrue = localStorage.getItem("colorMode")
console.log(colorModeTrue)
let textColor = "#e3e2f0"
let backgroundColor = "rgb(253, 253, 255)"
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
                textColor = "#e3e2f0"
                backgroundColor = "#222329"

        } else {
                colorMode = 'light';
                document.documentElement.style.colorScheme = 'light';
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
                toggleBrightness.textContent = "bedtime"
                localStorage.setItem("colorMode", "light")
                textColor = "#625c6e"
                backgroundColor = "rgb(253, 253, 255)"
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
      textColor = "#e3e2f0"
  } else {
      root.classList.add('light');
      root.classList.remove('dark');
      textColor = "#625c6e"
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
                textColor = "#625c6e"
                backgroundColor="rgb(253, 253, 255)"
                updatePieChart()
                updateRadarChart()
                updateBarGraph()
        } else {
                colorMode = 'dark';
                document.documentElement.style.colorScheme = 'dark';
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                toggleBrightness.textContent = "sunny"
                localStorage.setItem("colorMode", colorMode)
                textColor = "#e3e2f0"
                backgroundColor = "#222329"
                updatePieChart()
                updateRadarChart()
                updateBarGraph()
        }
        console.log(localStorage.getItem("colorMode"));
});
// Gets the live computed color string from your CSS :root

function getThemeColor(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}
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
let mistakeSolveTrue = localStorage.getItem("mistakeYIMO")
if (mistakeSolveTrue ===  null){
    mistake = 0
} else {
    mistake = parseInt(mistakeSolveTrue)
}
let unfamiliarSolveTrue = localStorage.getItem("unfamiliarYIMO")
if (unfamiliarSolveTrue === null){
    unfamiliar = 0
} else {
    unfamiliar  = parseInt(unfamiliarSolveTrue)
}
let stuckSolveTrue = localStorage.getItem("stuckYIMO")
if (stuckSolveTrue === null){
    stuck = 0
} else {
    stuck = parseInt(stuckSolveTrue)
}
let algebraTotalTrue = localStorage.getItem("algebraTotalYIMO")
if (algebraTotalTrue === null){
    algebraTotal = 0
} else {
    algebraTotal = parseInt(algebraTotalTrue)
}
let algebraWrongTrue = localStorage.getItem("algebraWrongYIMO")
if (algebraWrongTrue === null){
    algebraWrong = 0
} else {
    algebraWrong = parseInt(algebraWrongTrue)
}
let geometryTotalTrue = localStorage.getItem("geometryTotalYIMO")
if (geometryTotalTrue === null){
    geometryTotal = 0
} else {
    geometryTotal = parseInt(geometryTotalTrue)
}
let geometryWrongTrue = localStorage.getItem("geometryWrongYIMO")
if (geometryWrongTrue === null){
    geometryWrong = 0
} else {
    geometryWrong = parseInt(geometryWrongTrue)
}
let numTotalTrue = localStorage.getItem("numTotalYIMO")
if (numTotalTrue === null){
    numTotal = 0
} else {
    numTotal = parseInt(numTotalTrue)
}
let numWrongTrue = localStorage.getItem("numWrongYIMO")
if (numWrongTrue === null){
    numWrong = 0
} else {
    numWrong = parseInt(numWrongTrue)
}
let probTotalTrue = localStorage.getItem("probTotalYIMO")
if (probTotalTrue === null){
    probTotal = 0
} else {
    probTotal = parseInt(probTotalTrue)
}
let probWrongTrue = localStorage.getItem("probWrongYIMO")
if (probWrongTrue === null){
    probWrong = 0
} else {
    probWrong = parseInt(probWrongTrue)
}
let topicsToWorkOnTrue = localStorage.getItem("topicsToWorkOnYIMO")
if (topicsToWorkOnTrue === null){
    topicsToWorkOn = []
} else {
    topicsToWorkOn = JSON.parse(topicsToWorkOnTrue)
}
let topicsGlossarySetTrue = localStorage.getItem("topicGlossarySetYIMO")
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
     TOPIC_GLOSSARY = JSON.parse(localStorage.getItem("topicGlossaryYIMO"))
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
    title: "YIMO Divison 2 Problem Of The Day 2",
    text: `<p>Find the sum of all real number \\(x\\) satisfying</p>
    $$
    (x^2-5x+5)^{x^2-11x+30}=1
    $$`,
    answer: '21',
    solution: `<b>21</b><p>We either need \\(x^2-11x+30=0\\), \\(x^2-5x+5=1\\) or \\(x^2-5x+5=-1\\) with a negative exponent</p>
    <p>For the first situation, we just factor into \\((x-5)(x-6)=0\\) and have \\(5+6=11\\)</p>
    <p>For the second, we have \\(x^2-5x+5-1=x^2-5x+4=(x-4)(x-1)\\) for \\(4+1=5\\)</p>
    <p>For the third, we have \\(x^2-5x+5+1=x^2-5x+6=(x-2)(x-3)\\). When we input these into \\(x^2-11x+30\\), we get \\(12, 6\\), which are both even, so we have \\(2+3=5\\)</p>
    <p>\\(11+5+5=21\\)</p>`,
    hint: "The expressions can be negative",
    step: "Find the number of solutions for \\(x^2-11x+30=0\\), \\(x^2-5x+5=1\\), and \\(x^2-5x+5=-1\\)",
    topic: "factoring"
    },
    {
        title: "YIMO Divison 2 Problem Of The Day 5",
        text: `The polynomial \\(P(x)=x^4-16x^3+86x^2+ax+b\\) has four real roots that form an arithmetic progression. Find \\(|a+b|\\).`,
        solution: `<b></b><p>We have roots \\(r, r+d, r+2d, r+3d\\) for a total sum of \\(4r+6d\\)</p>
        <p>By Vieta's formulas, we have \\(4r+6d=16\\)</p>
        <p>We can't solve this, though, because we have too many variables. To fix this, we redfine the roots as \\(r-3d, r-d, r+d, r+3d\\) where \\(r=\\)the average of the middle two roots and \\(d\\) is \\(\\frac{1}{2}\\) the common difference. We then have
        \\(4r=16\\) for \\(r=4\\). By grouping by \\(2\\), we have \\(6r^2-10d^2=86\\) so \\(86-10d^2=86\\) so \\(d=1\\). We thus have roots \\(1,3,5,7\\) so we write \\((x-1)(x-3)(x-5)(x-7)\\) and expand for \\(|-176+105|=71\\)`,
        hint: "Center the roots around a common value",
        step: "Write the roots are \\(r-3d, r-d, r+d, r+3d\\) where \\(r\\) is the average of the middle two roots",
        topic: "algebraic maniupulation"
    }
]
const geometryQ = [{
            title: "YIMO Divison 2 Problem Of The Day 1",
            text: `Regular hexagon \\(ABCDEF\\) has side length \\(6\\). Point \\(P\\) lies inside the hexagon and satisfies \\(PA=PB=PC\\). Find \\(PD^2+PE^2+PF^2\\)`,
            answer: '108',
            solution: `<b>108</b><p>For \\(PA=PB=PC\\), \\(P\\) needs to be at the center of the hexagon, because it is regular. Also, we know that regular hexagons are compositions of equilateral triangles, so the distance is \\(6\\) from each vertice. We thus
            have \\(6^2+6^2+6^2=36+36+36=108\\) 
                `,
            hint: "There is a very specific and intuitive place that \\(P\\) needs to be in",
            step: "Realize that \\(P\\) is in the center",
            topic: "logic"
},
{
    title: `YIMO Divison 2 Problem Of The Day 3`,
    text: 'In triangle \\(ABC\\), \\(AB=13, BC=14,\\) and \\(CA=15\\). Let \\(I\\) denote the incenter of the triangle \\(ABC\\). Find \\(AI^2\\)',
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
    title: `YIMO Divison 2 Problem Of The Day 5`,
    text: `In triangle \\(ABC, AB=13, BC=14\\) and \\(CA=15\\). Let \\(I\\) be the incenter of triangle \\(ABC\\). The line through \\(I\\) perpendicular to \\(AI\\) meets segment \\(AB\\) at \\(M\\) and segment \\(AC\\) at \\(N\\). The area of triangle \\(AMN\\)
    can be expressed as \\(\\frac{p}{q}\\) where \\(p\\) and \\(q\\) are relatively prime positive integers. Find \\(p+q\\)`,
    solution: `<b>267</b><p>We use heron's law \\(A=\\sqrt{s(s-a)(s-b)(s-c)}\\) and \\(s=\\frac{a+b+c}{2}\\) to find \\(A=84\\), and then we find inradius \\(r=\\frac{\\textup{area}}{\\textup{semiperimeter}=\\frac{84}{21}\\).</p>
    <p>We know \\(AMN\\) must be isoceles, simply through intuition and also deriving from the fact that tangets that intersect at a common point are equal</p>
    <p>We thus have two right triangles \\(AIM\\) and \\(AIN\\). We can set \\(x=\\textup{tangents touching A}\\), \\(y=\\textup{tangents touching B}\\), \\(z=\\textup{tangents touching C}\\) and solve for \\(x=7\\) for \\(AI=\\sqrt{4^2+6^2}=\\sqrt{65}\\). We are able to find that
    \\(-2\\textup{cos}(A)(13)(15)+13^2+15^2=14^2\\) and solve for \\(\\textup{cos}A=\\frac{33}{65}\\). We use the half trig identity for cosine \\(\\textup{cos}\\frac{A}{2}=\\sqrt{\\frac{1+\\textup{cos}(A)}}{2}\\) to find \\(\\textup{cos}(\\frac{A}{2})=\\frac{7}{\\sqrt{75}\\). We have the adjacent side of \\(\\frac{A}{2}=\\sqrt{65}\\)</p>
    <p>Thus, we find \\(\\frac{\\sqrt{65}}{x}=\\frac{7}{\\sqrt{65}}\\) so \\(x=\\frac{65}{7}\\). We find that \\(\\textup{sin}(\\frac{A}{2})=\\frac{4}{\\sqrt{65}}\\) (through pythagorean or half angle identity and law of sines) and find \\(MI=\\frac{4\\sqrt{65}}{7}\\). We thus have \\(\\frac{8\\sqrt{65}}{7} \\times \\sqrt{65} \\times \\frac{1}{2}=\\frac{260}{7}\\)`,
    answer: '267',
    hint: "You will need to use the law of cosines \\(c^2=a^2+b^2-2ab\\textup{cos}(a)\\) and half cosine identity \\(\\sqrt{\\frac{1+\\textup{cos}(a)}{2}\\)",
    step: "Find the altitude of \\(AMN\\) and use tirg to find remainnig values",
    topic: "trignometry"
}]
const numTheoryQ = [
    {
           title: `YIMO Divison 2 Problem Of The Day 6`,
            text: `Determine the number of positive divisors of \\(30^{30}\\) that are perfect squares but not perfect cubes`,
            solution: `<b>3880</b><p>The prime factorization of \\(30^{30}=2^{30} \\times 3^{30} \\times 5^{30}\\). Whenever a power is raised to an even number or \\(0\\), that yields a perfect square so we find \\(16^3=4096\\).</p>
            <p>This, however, overcounts all of the perfect cubes that we were supposed to eliminate. In order for it to be a perfect cube and suqare, it needs to be raised to a power that is a multiple of \\(6\\) (the \\(\\textup{LCM}\\) of both of those numbers). We find that there are \\(6\\) expoential values in 
            range that are multiples of \\(6\\), so we have \\(6^3=216\\) for \\(4096-216=3880\\) `,
            answer: '3880',
            hint: "Find the total number of squares and subtract the number of squares and cubes",
            step: "Find the prime factorization",
            topic: "prime factorization"
    },
    {
        title: "YIMO Divison 1 Problem Of The Day 1",
        text: `<p>Find the number of ordered pairs \\((a,b)\\) of positive integers with \\(a+b\\leq{100}\\) such that </p>
        $$
        \\frac{a}{b}+\\frac{b}{a}
        $$
        is an integer`,
        answer: '50',
        solution: `<b>50</b><p>If we divide out the \\(\\textup{GCF}\\) of \\(a\\) and \\(b\\) we get the quotients of \\(\\frac{a}{k}\\) and \\(\\frac{b}{k}\\) which we'll call \\(x\\) and \\(y\\), respectively.</p>
        <p>These must have a \\(\\textup{GCF}\\) of \\(1\\) because \\(k\\) was the \\(\\textup{GCF}\\) of \\(a\\) and \\(b\\). We have \\(\\frac{x}{y}+\\frac{y}{x}=\\frac{x^2+y^2}{xy}=\\textup{integer}\\).</p>
        This isn't possible unless \\(x=y\\), because if not \\(\\frac{y^2}{x}\\) and \\(\\frac{x^2}{y}\\), which isn't true because the \\(\\textup{GCF}\\) had to be \\(1\\).</p>
        <p>Therefore, we have values of \\(x=y\\) up to \\(x=y=\\frac{100}{2}=50\\) so there are \\(50\\) values`,
        hint: "Factor out the \\(\\textup{GCF}\\)",
        step: "Factor out the \\(\\textup{GCF}\\), \\(k\\), and rewrite with \\(x=\\frac{a}{k}, y=\\frac{b}{k}\\)",
        topic: "algebraic manipulation",
        division: "1"
    },
    {
        title: "YIMO Divison 1 Problem Of The Day 3",
        text: `<p>Find the number of ordered triples \\((a,b,c)\\) of positive integers with \\(a \\leq b \\leq c\\) satisfying</p>
        $$
        \\frac{1}{a}+\\frac{1}{b}+\\frac{1}{c}=1
        $$`,
        soution: `<b>3</b>We have \\((3,3,3)\\) as a pretty trivial solution. We can also add on \\((2,4,4)\\) as a solution pretty intuitively. We know \\(3\\) is the largest possible value of \\(a\\), which 
        is intuition and logic. That being said, there are other ways to get to \\(\\frac{1}{2}\\) with \\(\\frac{1}{b}+\\frac{1}{c}\\), namely \\(3, 6\\), so we have \\(3\\) answers`,
        answer: '3',
        hint: "Find the largest possible value of \\(a\\)",
        step: "The largest possible value of \\(a\\) occurs when \\(a=b=c\\)",
        topic: 'logic'
    },
    {
        title: "YIMO Divison 2 Problem Of The Day 4",
        text: `Six distinct points are placed on a circle, and a chord is drawn between every pair of points. Assuming no three of these chords meet at a single interior point of the circle, into 
        how many regions do the chords divide the interior of the circle?`,
        solution: `<b>31</b><p>This is an example of Euler's Formula, which dictates the number of regions for \\(n\\) points with chords connecting them is \\(\\frac{n}{4}+\\frac{n}{2}+1\\) which gives \\(\\binom{6}{4}+\\binom{6}{2}+1=15+15+1=31\\)`,
        answer: '31',
        hint: "There is a very famous formula for this exact type of problem",
        step: "Use Euler's formula",
        topic: "logic"
    }
]
const probabilityQ = [{
    title: "YIMO Divison 1 Problem Of The Day 2",
    text: `A grasshopper starts at the origin of the number line. Each second, it jumps to the right by exactly \\(1,2,\\) or \\(3\\) units (its choice). The grasshoppper wishes to land on the point \\(10\\)
    at some moment, but it refuses to ever land on the point \\(4\\) or the point \\(7\\). How many distinct sequences of jumps achieve this?`,
    answer: '42',
    solution: `<b>42</b><p>To skip \\(4\\), the grasshopper must land on \\(3\\) or \\(2\\). To skip \\(7\\), it must land on \\(5\\) or \\(6\\).</p>
    <p>We map out the total number of sequences, not by total jumps, but by major points</p>
    $$
    3-6-9 \\textup{(including if he jumps on 5)}
    $$
    $$
    3-6-8
    $$\\textup{(including if he jumps on 5)}
    $$
    3-5-8 \\textup{(assuming he doesn't ever land on 6)}
    $$
    $$
    2-5-8
    $$
    $$
    2-5-6-8
    $$
    <p>I esssentially am mapping his landing and jumping points</p>
    <p>There are \\(4\\) ways to get to \\(3\\) (a jump of \\(3\\), two ways with one jump of \\(2\\), and then all jumps of \\(1\\)). From there, to get to 
    \\(6\\) he can either jump straight there or go through \\(5\\), so there are \\(2\\) ways, and then one way to get to \\(9\\) and one way to get from \\(10\\) from there for \\(4 \\times 2 \\times 1 \\time 1=8\\)</p>
    <p>We apply the same logic for \\(3-6-8\\) and see \\(4\\times 2 \\times 1 \\times 2=16\\) (because he can do one or two jumps</p>
    <p>\\(3-5-8\\) has \\(4 \\times 1 \\times 1 \\times 2=8\\)</p>
    <p>\\(2-5-8\\) we can split further. We have \\(2\\) ways to get to \\(2\\) and then one to get to \\(5\\) (because we skip \\(3\\)). From here, if we stay at \\(5\\) and go to 
    \\(8\\), we have \\(2 \\times 1 \\times 1 \\times 2=4\\). We can also go to \\(6\\) for \\(2 \\times 1 \\times 1 \\times 1 \\times 2=4\\) or from \\(6\\) to \\(9\\) for \\(2 \\times 1 \\times 1 \\times 1 \\times 1 =2\\).</p>
    <p>We thus have \\(8+16+8+4+4+2=42\\)`,
    hint: "Break down into paths",
    step: "Break down into paths by the major landing and jumping points that allow the frog to avoid \\(4\\) and \\(7\\)",
    topic: "counting"
},
{
        title: "YIMO Divison 1 Problem Of The Day 3",
        text: `<p>Find the number of positive integers \\(n < 1000\\) such that the sum</p>
        $$
        1^3+2^3+3^3+...+n^3
        $$
        <pis divisible by \\(n+1\\)`,
        solution: `<b>749</b><p>We can write the expression as \\(\\sum_{i=1}^{n}i^3\\). This is equal to the sum of all values
        \\(\\leq n\\) squared (if you were to expand it) so we have \\((\\frac{n(n+1)}{2})^2\\). Expanding gives \\(\\frac{n^2(n+1)^2}{4}\\). We thus need either \\(n^2\\) to be divisible by \\(4\\) or \\((n+1)\\) to be divisible by \\(4\\)</p>
        <p>We automatically have \\(499\\) values because as long as \\(n^2\\) is even the answer will be an integer</p>
        <p>For \\(n+1\\) to be divisible by \\(4\\), we need it to be \\(\\equiv 3 \\textup{(mod 4)}\\) which gives \\(250\\) values.</p>
        \\(499+250=749\\)`,
        answer: '749',
        hint: "Express in sigma notation",
        step: 'Use \\(\\sum_{i=1}^{n}i^3= (\\frac{n(n+1)}{2})^2\\)',
        topic: "prime factorization"
},
]
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
        localStorage.setItem("topicsToWorkOnYIMO", JSON.stringify(topicsToWorkOn))
    }

    const topicObj = TOPIC_GLOSSARY.find(x => x.id === topicToUpdate);
    if (topicObj) {
        topicObj.errors += 1;
        console.log(topicObj.errors)
        console.log(topicObj.attempts)
        topicObj.mastery = ((1 - (topicObj.errors/topicObj.attempts))*100) + "%"
        localStorage.setItem("topicGlossaryYIMO", JSON.stringify(TOPIC_GLOSSARY))
        localStorage.setItem("topicGlossarySetYIMO", true)

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
        localStorage.setItem("geometryTotalYIMO", geometryTotal)
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
        localStorage.setItem("geometryWrongYIMO", geometryWrong)
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
        localStorage.setItem("algebraTotalYIMO", algebraTotal)
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
        localStorage.setItem("algebraWrongYIMO", algebraWrong)
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
        localStorage.setItem("problTotalYIMO", probTotal)
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
        localStorage.setItem("probWrongYIMO", probWrong)
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
        localStorage.setItem("numTotalYIMO", numTotal)
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
        localStorage.setItem("numWrongYIMO", numWrong)
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
    localStorage.setItem("mistakeYIMO", mistake)
    updateBarGraph()
})
unfamiliarBtn.addEventListener("click", function(){
    unfamiliar += 1
    localStorage.setItem("unfamiliarYIMO", unfamiliar)
    updateBarGraph()
})
stuckBtn.addEventListener("click", function(){
    stuck += 1
    updateBarGraph()
    localStorage.setItem("stuckYIMO", stuck)
})
let myChart = null;

function updateBarGraph() {
    const xValues = ["Unfamiliar With Topic", "Stuck / Reached Dead End", "Arithmetic Issue"];
    const yValues = [unfamiliar, stuck, mistake];
    const barColors = ["#88B0FF", "#88B0FF", "#88B0FF"];
    if (myChart) {
        myChart.destroy();
    }

    const ctx = document.getElementById("barChart");
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
scales: {
                x: {
                    grid: { color: textColor }, // Dynamic gridlines
                    ticks: { color: textColor } // Dynamic label text
                },
                y: {
                    grid: { color: textColor },
                    ticks: { color: textColor }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}
let pieChart = null
function updatePieChart(){

    console.log("updating pie chart")
    if (pieChart) {
        pieChart.destroy();
    }
    console.log(topicsToWorkOn)
    const ctx = document.getElementById("pieChart");
    let xValues = []
    let yValues = []
    topicsToWorkOn.forEach(i => {
        console.log(i)
        console.log(TOPIC_GLOSSARY)
        const topicObj = TOPIC_GLOSSARY.find(x => x.id === i);
                console.log("running for each")
                console.log(topicObj)
if (topicObj && topicObj.errors && topicObj.errors > 0) {
            console.log('running search')
            console.log("Adding to chart:", topicObj.id, topicObj.errors);
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
      backgroundColor: ["#88B0FF", "#c7deff", "#FFB192", "#ffd0c0"],
      borderColor: backgroundColor
    }]
  },
options: {
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
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
            if (colorMode  === 'dark'){
                const data = {
        labels: 
        ["Algebra", "Geometry", "Number Theory", "Probability"],
        datasets: [{label: "Incorrect", 
            data: [algebraWrong, geometryWrong, numWrong, probWrong], borderColor: '#ffb192', backgroundColor: '#fff0eb'
        },
        {label: "Attempted", 
            data: [algebraTotal, geometryTotal, numTotal, probTotal], borderColor: '#88B0FF', backgroundColor: '#88B0FF'
        },
]
        }      
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
    scales: {
      r: {
        // 1. Change color of the category labels (e.g., "Speed", "Strength")
        pointLabels: {
          color: textColor, 
          font: {
            size: 14
          }
        },
        // 2. Change color of the numbers on the radial axis
        ticks: {
          color: textColor,
          showLabelBackdrop: false,

        }
      }
    },
    plugins: {
      // 3. Change color of the legend text
      legend: {
        labels: {
          color: textColor
        }
      }
    }
  }

    })
}
updatePieChart()
updateRadarChart()
updateBarGraph()