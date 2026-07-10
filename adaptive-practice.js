let userRating = 1200
let userRatingGeometry = 1200
let userRatingProbability = 1200
let userRatingNumTheory= 1200
let userRatingAll = 1200
const toggleBrightness = document.getElementById("brightness")
let colorMode = 'light'
let diagnosticCorrect = 0
let diagnosticAlgebraTotal = 1
let diagnosticGeometryTotal = 1
let diagnosticNumTheoryTotal = 1
let diagnosticProbabilityTotal = 1
let diagnosticAlgebraCorrect = 0
let diagnosticGeometryCorrect= 0
let diagnosticNumTheoryCorrect= 0
let diagnosticProbabilityCorrect = 0
let colorModeTrue = localStorage.getItem("colorMode")
let textColor = "#e3e2f0"
let backgroundColor = "rgb(253, 253, 255)"
if  (colorModeTrue !== false){
       colorMode =  colorModeTrue
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
});
// Gets the live computed color string from your CSS :root

function getThemeColor(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}
import { createClient } from 'https://esm.sh/@supabase/supabase-js';
const supabaseURL = 'https://joevkictcfaoofqhbhgw.supabase.co';
const supabaseKey = 'sb_publishable_8Iat4psKXuFn91uT8yuw7g_2n3Buc5w';
const supabase = createClient(supabaseURL, supabaseKey);
const imageDiagnostic = document.getElementById("diagnosticImage")
    imageDiagnostic.style.display = "none"
    const diagnosticInput = document.getElementById("diagnosticInput")
    diagnosticInput.style.display = "none"
    const diagnosticMCContainer = document.getElementById("diagnostic-mc-container")
    diagnosticMCContainer.classList.add("hidden")
    const diagnosticCheck = document.getElementById("diagnosticCheck")
    diagnosticCheck.style.display = "none"
    const diagnosticChoices = Array.from(document.querySelectorAll(".diagnostic-choice"));
    const diagnosticNext = document.getElementById("diagnosticNext")
    diagnosticNext.style.display = "none"
    const diagnosticSolutionContainer = document.getElementById("diagnosticSolutionContainer")
    diagnosticSolutionContainer.style.display = 'none'
    const diagnosticSolutionText = document.getElementById("diagnosticSolutionText")
let diagnosticQuestions = []
let index = 0
let wrongTopicGeometry = []
let wrongTopicAlgebra = []
let wrongTopicNum = []
let wrongTopicProb = []
let wrongTopicAll = []
let streakCount = 0
let unfamiliar = 0
let stuck = 0
let mistake = 0
let errors = 0
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

let geometryQuestion = 0
let numQuestion = 0
let probQuestion = 0
let currentQuestion = 0
let geometryCurrent = 0
let numCurrent = 0 
let algebraWrong = 0
let geometryWrong = 0
let numWrong = 0
let probWrong = 0
let algebraTotal = 0
let geometryTotal = 0
let numTotal = 0
let probTotal = 0

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

let TOPIC_GLOSSARY = [
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
    title: `Triangle Lines (Medians, Altitudes, Perpendicular Bisectors, Angle Bisectors)`,
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

// ---------- Shuffle Function ----------
const highlight = document.getElementById("highlight");
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

const questions = window.SaintlyQuestionBank.algebra;


function getNextQuestion(questions, userRating) {
  // 1. STRICT: only unused questions
  let available = questions.filter(
    q => !q.used && Math.abs(q.rating - userRating) < 100
  );

  // 2. If none match rating, widen criteria (still unused only)
  if (available.length === 0) {
    available = questions.filter(q => !q.used);
  }

  // 3. If STILL none, NOW reset (last resort)
  if (available.length === 0) {
    questions.forEach(q => q.used = false);

    available = questions.filter(
      q => Math.abs(q.rating - userRating) < 100
    );

    // if still empty, just use all questions
    if (available.length === 0) {
      available = questions;
    }
  }

  // 4. Pick best match (not first!)
  let best = available[0];
  let bestDiff = Math.abs(userRating - best.rating);

  for (const q of available) {
    const diff = Math.abs(q.rating - userRating);
    if (diff < bestDiff) {
      best = q;
      bestDiff = diff;
    }
  }

  best.used = true;
  return best;
}

shuffleArray(questions);
// ---------- Question Data Geometry----------

const geometryQ = window.SaintlyQuestionBank.geometry;
shuffleArray(geometryQ);
const numTheoryQ = window.SaintlyQuestionBank.numberTheory
shuffleArray(numTheoryQ);
const probabilityQ = window.SaintlyQuestionBank.probability
const allQ = []
allQ.push(...questions)
allQ.push(...geometryQ)
allQ.push(...numTheoryQ)
allQ.push(...probabilityQ)
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
const accountPannel = document.getElementById("accountPannel")
const accountBtn = document.getElementById("accountBtn")
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
const mcChoicesLOne = Array.from(document.querySelectorAll(".mc-choice-leaderboard-one"))
const mcChoicesLTwo = Array.from(document.querySelectorAll(".mc-choice-leaderboard-two"))
const mcChoicesLThree = Array.from(document.querySelectorAll(".mc-choice-leaderboard-three"))
const mcChoicesLFour = Array.from(document.querySelectorAll(".mc-choice-leaderboard-four"))
const mcChoicesLFive = Array.from(document.querySelectorAll(".mc-choice-leaderboard-five"))
const mistakeBtn = document.getElementById("mistake")
const unfamiliarBtn = document.getElementById("unfamiliar")
const stuckBtn = document.getElementById("stuck")
const errorTags = document.getElementById("tagQuestion")
const loginBtn = document.getElementById("btn-login")
let accountTrue = false
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


function getProblemNumber(array) {
    array.forEach(q => {
  const match = q.title.match(/Problem (\d+)/);
        q.pNumber = match ? parseInt(match[1]) : null;
    })
}
function getInitialRating(array) {
    array.forEach(q => {
        q.rating = (800 + Math.pow(q.pNumber, 1.3) * 25);
    })
}
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
    }

    const topicObj = TOPIC_GLOSSARY.find(x => x.id === topicToUpdate);
    if (topicObj) {
        topicObj.errors += 1;
        topicObj.mastery = ((1 - (topicObj.errors/topicObj.attempts))*100) + "%"
    }

    updateTopicsDropdown();
}
function buttonsWork(){
    errorTags.style.display = "none"
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
allQuestion = getNextQuestion(questions, userRatingAll);
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
geometryQuestion = getNextQuestion(geometryQ, userRatingGeometry);

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
numQuestion = getNextQuestion(numTheoryQ, userRatingNumTheory);
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


    probQuestion = getNextQuestion(probabilityQ, userRatingProbability);
function loadProb() {
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
    updateRadarChart()
    if (strikes == 2){
                
                geometryTotal += 1
                    updateRadarChart()
    }

    const topicObj = TOPIC_GLOSSARY.find(x => x.id === geometryQuestion.topic);
                logAttempt(geometryQuestion.title, true)
    if (topicObj) {
        topicObj.attempts += 1;
    }
    const userAnswer = answerInput.value.trim();
    const correctAnswer = geometryQuestion.answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
        correct = 1;
        getExpectedScore(userRatingGeometry, geometryQuestion.rating)
        score = score + geometryQuestion.difficulty;
        scoreCount.innerHTML = Math.round(Number(String(userRatingAll).replace(/,/g, '')));
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
            geometryWrong += 1

            
            errors += 1
                    logAttempt(geometryQuestion.title, false)
                hintBtn.innerHTML  = "Show Hint"
                strikesContainer.style.display = "inline"
const mistakesGeometryTrue = wrongQuestionsGeometry.some(item => item.countdown === 0);
const wrongTopicTrue = wrongTopicGeometry.some(item => item.countdown === 0)
const wrongEntryTopicTrue = wrongTopicGeometry.some(item => item.topic === geometryQuestion.topic)
if (wrongEntryTopicTrue === false){
    const item = {topic: geometryQuestion.topic}
    wrongTopicGeometry.push(item)
    wrongTopicGeometry[wrongTopicGeometry.length - 1].errorCount = 0
    wrongTopicGeometry[wrongTopicGeometry.length-1].countdown = 3
}
        strikeOne.style.color = "var(--primary-color) !important"
        correct = 0;
        hintBtn.style.display = "inline"
        getExpectedScore(userRating, geometryQuestion.rating)
        recordWrongTopic(geometryQuestion.topic);
        difficultyG = Math.max(1, difficultyG - 1);
        difficultyProgressG = 0;
        score = score - difficultyG;
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(geometryQuestion.topic);
        wrongCount++;
        const wrongEntryTrueAlgebra = wrongQuestionsGeometry.some(item => item.title === wrongQuestionsGeometry.title);
        if (wrongEntryTrueAlgebra === false){
        wrongQuestionsGeometry.push(geometryQuestion)
        wrongQuestionsGeometry[wrongQuestionsGeometry.length - 1].errorCount = 1;
        wrongQuestionsGeometry[wrongQuestionsGeometry.length - 1].countdown = 5
                if (mistakesGeometryTrue === true){
            let alreadyDefined = false
            wrongQuestionsGeometry.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 * item.errorCount)
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
                        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
                        updateRadarChart()
                        updatePieChart()
    } else  if (strikes === 1){
        seeStep.style.display = "inline"
        strikeTwo.style.color = "var(--primary-color) !important"
        strikes -= 1
    } else {
        errorTags.style.display = "inline"
        strikeThree.style.color = "var(--primary-color) !important"
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
    updateRadarChart()
    if (strikes == 2){
                algebraTotal += 1
                updateRadarChart()
    }

    const topicObj = TOPIC_GLOSSARY.find(x => x.id === algebraQuestion.topic);
    if (topicObj) {
        topicObj.attempts += 1;
    }

    const userAnswer = answerInput.value.trim();
    const correctAnswer = algebraQuestion.answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
        logAttempt(algebraQuestion.title, true)
            nextBtn.style.display = "inline-block";
    stepOne.style.display = "none"
    hintBtn.style.display = "none"
    hintText.style.display = "none"
    seeStep.style.display = "none"
        correct = 1;
        getExpectedScore(userRating, algebraQuestion.rating)
        score = score + algebraQuestion.difficulty;
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
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
            algebraWrong += 1

            errors += 1
            logAttempt(algebraQuestion.title, false)
                scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
                hintBtn.innerHTML  = "Show Hint"
                strikesContainer.style.display = "inline"
const mistakesAlgebraTrue = wrongQuestionsAlgebra.some(item => item.countdown === 0);
const wrongTopicTrue = wrongTopicAlgebra.some(item => item.countdown === 0)
const wrongEntryTopicTrue = wrongTopicAlgebra.some(item => item.topic === algebraQuestion.topic)
if (wrongEntryTopicTrue === false){
    const item = {topic: algebraQuestion.topic}
    wrongTopicAlgebra.push(item)
    wrongTopicAlgebra[wrongTopicAlgebra.length - 1].errorCount = 0
    wrongTopicAlgebra[wrongTopicAlgebra.length-1].countdown = 3
}
        strikeOne.style.color = "var(--primary-color) !important"
        correct = 0;
        hintBtn.style.display = "inline"
        getExpectedScore(userRating, algebraQuestion.rating)
        recordWrongTopic(algebraQuestion.topic);
        difficulty = Math.max(1, difficulty - 1);
        difficultyProgress = 0;
        score = score - difficulty;
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(algebraQuestion.topic);
        wrongCount++;
        const wrongEntryTrueAlgebra = wrongQuestionsAlgebra.some(item => item.title === wrongQuestionsAlgebra.title);
        if (wrongEntryTrueAlgebra === false){
        wrongQuestionsAlgebra.push(algebraQuestion)
        wrongQuestionsAlgebra[wrongQuestionsAlgebra.length - 1].errorCount = 1;
        wrongQuestionsAlgebra[wrongQuestionsAlgebra.length - 1].countdown = 5
                if (mistakesAlgebraTrue === true){
            let alreadyDefined = false
            wrongQuestionsAlgebra.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 * item.errorCount)
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
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')))
        updateRadarChart()
        updatePieChart()
    } else  if (strikes === 1){
        seeStep.style.display = "inline"
        strikeTwo.style.color = "var(--primary-color) !important"
        strikes -= 1
    } else {
        errorTags.style.display = "inline"
        strikeThree.style.color = "var(--primary-color) !important"
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
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
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
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(allQuestion.topic);
        wrongCount++;
        const wrongEntryTrueAll = wrongQuestionsAll.some(item => item.title === wrongQuestionsAll.title);
        if (wrongEntryTrueAll === false){
        wrongQuestionsAll.push(allQuestion)
        wrongQuestionsAll[wrongQuestionsAll.length - 1].errorCount = 1;
        wrongQuestionsAll[wrongQuestionsAll.length - 1].countdown = 5
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
const wrongTopicTrue = wrongTopicAll.some(item => item.countdown === 0)
const wrongEntryTopicTrue = wrongTopicAll.some(item => item.topic === allQuestion.topic)
if (wrongEntryTopicTrue === false){
    const item = {topic: wrongTopicAll.topic}
    wrongTopicAll.push(item)
    wrongTopicAll[wrongTopicAll.length - 1].errorCount = 0
    wrongTopicAll[wrongTopicAll.length-1].countdown = 3
}
        if (mistakesAllTrue === true){
            let alreadyDefined = false
            wrongQuestionsAll.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 * item.errorCount)
                    }
                }
            })
        }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
}

function checkAnswerProb() {
    updateRadarChart()
    if (strikes == 2){
            probTotal += 1
            updateRadarChart()
    }

    const topicObj = TOPIC_GLOSSARY.find(x => x.id === probQuestion.topic);
    if (topicObj) {
        topicObj.attempts += 1;
    }
    const userAnswer = answerInput.value.trim();
    const correctAnswer = probQuestion.answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
                logAttempt(probQuestion.title, true)
            correct = 1;
        getExpectedScore(userRatingProbability, probQuestion.rating)
        score = score + probQuestion.difficulty;
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
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
        probWrong += 1
        errors += 1
                logAttempt(probQuestion.title, false)
                scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
                hintBtn.innerHTML  = "Show Hint"
                strikesContainer.style.display = "inline"
const mistakesProbTrue = wrongQuestionsProb.some(item => item.countdown === 0);
        strikeOne.style.color = "var(--primary-color) !important"
        correct = 0;
        hintBtn.style.display = "inline"
        getExpectedScore(userRating, probQuestion.rating)
        recordWrongTopic(probQuestion.topic);
        difficultyP = Math.max(1, difficultyP - 1);
        difficultyProgressP = 0;
        score = score - difficultyP;
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(probQuestion.topic);
        wrongCount++;
        const wrongEntryTrueProb = wrongQuestionsProb.some(item => item.title === wrongQuestionsProb.title);
        if (wrongEntryTrueProb === false){
        wrongQuestionsProb.push(algebraQuestion)
        wrongQuestionsProb[wrongQuestionsProb.length - 1].errorCount = 1;
        wrongQuestionsProb[wrongQuestionsProb.length - 1].countdown = 5
                if (mistakesProbTrue === true){
            let alreadyDefined = false
            wrongQuestionsProb.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 * item.errorCount)
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
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')))
        strikes -= 1
        updateRadarChart()
        updatePieChart()
    } else  if (strikes === 1){
        seeStep.style.display = "inline"
        strikeTwo.style.color = "var(--primary-color) !important"
        strikes -= 1
    } else {
        errorTags.style.display = "inline"
        strikeThree.style.color = "var(--primary-color) !important"
            solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect` + probQuestion.solution;
const mistakesProbTrue = wrongQuestionsProb.some(item => item.countdown === 0);
const wrongTopicTrue = wrongTopicProb.some(item => item.countdown === 0)
const wrongEntryTopicTrue = wrongTopicProb.some(item => item.topic === probQuestion.topic)
if (wrongEntryTopicTrue === false){
    const item = {topic: probQuestion.topic}
    wrongTopicProb.push(item)
    wrongTopicProb[wrongTopicProb.length - 1].errorCount = 0
    wrongTopicProb[wrongTopicProb.length-1].countdown = 3
}
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
    updateRadarChart()
    if (strikes == 2){
            numTotal += 1
            updateRadarChart()
    }

    const topicObj = TOPIC_GLOSSARY.find(x => x.id === numQuestion.topic);
    if (topicObj) {
        topicObj.attempts += 1;
    }
    const userAnswer = answerInput.value.trim();
    const correctAnswer = numQuestion.answer.trim();

    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
                logAttempt(numQuestion.title, true)
            correct = 1;
        getExpectedScore(userRatingNumTheory, numQuestion.rating)
        score = score + numQuestion.difficulty;
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
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
        numWrong += 1
        errors += 1
                logAttempt(numQuestion.title, false)
                scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
                hintBtn.innerHTML  = "Show Hint"
                strikesContainer.style.display = "inline"
const mistakesNumTrue = wrongQuestionsNum.some(item => item.countdown === 0);
const wrongTopicTrue = wrongTopicNum.some(item => item.countdown === 0)
const wrongEntryTopicTrue = wrongTopicNum.some(item => item.topic === numQuestion.topic)
if (wrongEntryTopicTrue === false){
    const item = {topic: numQuestion.topic}
    wrongTopicNum.push(item)
    wrongTopicNum[wrongTopicNum.length - 1].errorCount = 0
    wrongTopicNum[wrongTopicNum.length-1].countdown = 3
}
        strikeOne.style.color = "var(--primary-color) !important"
        correct = 0;
        hintBtn.style.display = "inline"
        getExpectedScore(userRating, numQuestion.rating)
        recordWrongTopic(numQuestion.topic);
        difficultyN = Math.max(1, difficultyN - 1);
        difficultyProgressN = 0;
        score = score - difficultyN;
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
        streakCount = 0;
        topicWrong = capitalizeFirstLetter(numQuestion.topic);
        wrongCount++;
        const wrongEntryTrue = wrongQuestionsNum.some(item => item.title === wrongQuestionsNum.title);
        if (wrongEntryTrue === false){
        wrongQuestionsNum.push(numQuestion)
        wrongQuestionsNum[wrongQuestionsNum.length - 1].errorCount = 1;
        wrongQuestionsNum[wrongQuestionsNum.length - 1].countdown = 5
                if (mistakesNumTrue === true){
            let alreadyDefined = false
            wrongQuestionsNum.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        item.errorCount += 1
                        item.countdown = (2 * item.errorCount)
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
        scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')))
        updateRadarChart()
        updatePieChart()
    } else  if (strikes === 1){
        seeStep.style.display = "inline"
        strikeTwo.style.color = "var(--primary-color) !important"
        strikes -= 1
    } else {
        updatePieChart()
        errorTags.style.display = "inline"
        strikeThree.style.color = "var(--primary-color) !important"
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
checkBtn.addEventListener("click", async function () {
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
    // Inside your "Correct Answer" logic block:
clearInterval(timerInterval); // Freeze the clock immediately

// Add current performance metrics to your local totals
userTotalTimeSpent += currentQuestionSeconds;
userTimedQuestionsCount += 1;

// Update your interface displays
updateAvgTimerUI();

// Sync the updated duration metrics directly to your Supabase profiles table
const { data: { session }, error: sessionError } = await supabase.auth.getSession();
if (session && !sessionError) {
const { error: timerSyncError } = await supabase
  .from('profiles')
  .update({
      totalTimeSpent: userTotalTimeSpent,
      timedQuestionsCount: userTimedQuestionsCount
  })
  .eq('id', session.user.id); // Matches user session profile

if (timerSyncError) {
  console.error("Failed to sync structural timing metrics:", timerSyncError.message);
}
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
        algebraNext();
        wrongQuestionsAlgebra.forEach(item => {
            item.countdown -= 1;
        })
                wrongTopicAlgebra.forEach(item => {
            item.countdown -= 1
        })
    } else if (questionType === "geometry"){
        geometryNext();
        wrongQuestionsGeometry.forEach(item =>{
            item.countdown -= 1;
        })
        wrongTopicGeometry.forEach(item => {
            item.countdown -= 1
        })

    } else if (questionType === "numTheory"){
        numNext();
        wrongQuestionsNum.forEach(item =>{
            item.countdown -= 1;
        })
                wrongTopicNum.forEach(item => {
            item.countdown -= 1
        })
    } else if (questionType === "probability"){
        probNext();
        wrongQuestionsProb.forEach(item =>{
            item.countdown -= 1;
        })
                wrongTopicProb.forEach(item => {
            item.countdown -= 1
        })
    } else if (questionType === 'all'){
        allNext();
        wrongQuestionsAll.forEach(item =>{
            item.countdown -= 1;
        })
                wrongTopicAll.forEach(item => {
            item.countdown -= 1
        })
    }
});

function algebraNext() {
    problemsWrapper.classList.add("slide-out");

    setTimeout(() => {
        let alreadyDefined = false
            let topicMistakesTrue = wrongTopicAlgebra.some(i => i.countdown == 0)
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        geometryCurrent++;
        const mistakeAlgebraTrue = wrongQuestionsAlgebra.some(item => item.countdown === 0);
        if (mistakeAlgebraTrue === true){
            alreadyDefined = false
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
        } else if (topicMistakesTrue === true){
    wrongTopicAlgebra.forEach(item => {
        if (item.countdown === 0){
            if (alreadyDefined === false){
                algebraQuestion = questions.find(question => question.topic === item.topic)
                prevError.style.display = "inline"
                document.getElementById('prevErrorText').textContent = item.topic
                alreadyDefined = true
                loadAlgebra()
            } else {
                item.countdown += 1
            }
        }
    })
}        else if (currentQuestion < questions.length) {
            prevError.style.display = 'none'
    algebraQuestion = getNextQuestion(questions, userRating);
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
        let alreadyDefined = false
                let topicMistakesTrue = wrongTopicAll.some(i => i.countdown === 0)
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        allCurrent++;
        const mistakeAllTrue = wrongQuestionsAll.some(item => item.countdown === 0);
        if (mistakeAllTrue === true){
            alreadyDefined = false
            wrongQuestionsAll.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        allQuestion = item
                        prevError.style.display = "inline"
                        document.getElementById('prevErroText').textContent = "Previous Error"
                        loadAll();
                    } else {
                        item.countdown += 1
                    }
                }
            })
        } else if (topicMistakesTrue === true){
    wrongTopicAll.forEach(item => {
        if (item.countdown === 0){
            if (alreadyDefined === false){
                allQuestion = allQ.find(question => question.topic === item.topic)
                prevError.style.display = "inline"
                document.getElementById('prevErrorText').textContent = item.topic
                alreadyDefined = true
                loadAll()
            } else {
                item.countdown += 1
            }
        }
    })
} else if (currentQuestion < allQ.length) {
            prevError.style.display = 'none'
    allQuestion = getNextQuestion(allQ, userRatingAll);
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
        let alreadyDefined = false
        const mistakesGeometryTrue = wrongQuestionsGeometry.some(item => item.countdown === 0);
        const topicMistakesTrue = wrongTopicGeometry.some(item => item.countdown === 0)
        if (mistakesGeometryTrue === true){
        alreadyDefined = false
            wrongQuestionsGeometry.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        geometryQuestion = item
                        prevError.style.display = "inline"
                        document.getElementById("prevErrorText").textContent = "Previous Error"
                        alreadyDefined = true

                    } else {
                        item.countdown += 1
                    }
                }
            })
            loadQuestion()
        } else if (topicMistakesTrue === true){
    wrongTopicGeometry.forEach(item => {
        if (item.countdown === 0){
            if (alreadyDefined === false){
                geometryQuestion = geometryQ.find(question => question.topic === item.topic)
                prevError.style.display = "inline"
                document.getElementById('prevErrorText').textContent = item.topic
                alreadyDefined = true
            } else {
                item.countdown += 1
            }
        }
    })
    loadQuestion()
} else if (geometryCurrent < geometryQ.length) {

            prevError.style.display = 'none  '
    geometryQuestion = getNextQuestion(geometryQ, userRatingGeometry);
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
        let alreadyDefined = false
            const topicMistakesTrue = wrongTopicProb.some(i => i.countdown === 0)
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        probCurrent++;
        const mistakesProbTrue = wrongQuestionsProb.some(item => item.countdown === 0);
        if (mistakesProbTrue === true){
            alreadyDefined = false
            wrongQuestionsProb.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        probQuestion = item
                        prevError.style.display = "inline"
                                   document.getElementById('prevErroText').textContent = "Previous Error"
                        loadProb();
                    } else {
                        item.countdown += 1
                    }
                }
            })
        } 
        else if (topicMistakesTrue === true){
    wrongTopicProb.forEach(item => {
        if (item.countdown === 0){
            if (alreadyDefined === false){
                probQuestion = probabilityQ.find(question => question.topic === item.topic)
                prevError.style.display = "inline"
                document.getElementById('prevErrorText').textContent = item.topic
                alreadyDefined = true
                loadProb()
            } else {
                item.countdown += 1
            }
        }
    })
} else if (probCurrent < probabilityQ.length) {
            prevError.style.display = 'none'
    probQuestion = getNextQuestion(probabilityQ, userRatingProbability);
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
        let alreadyDefined = false
            const topicMistakesTrue = wrongTopicNum.some(i => i.countdown === 0)
        // Remove slide-out and load next question
        problemsWrapper.classList.remove("slide-out");
        numCurrent++;
        const mistakesNumTrue = wrongQuestionsNum.some(item => item.countdown === 0);
        if (mistakesNumTrue === true){
            alreadyDefined = false
            wrongQuestionsNum.forEach(item => {
                if (item.countdown === 0) {
                    if (alreadyDefined === false){
                        numQuestion = item
                        prevError.style.display = "inline"
                               document.getElementById('prevErroText').textContent = "Previous Error"
                        loadNumTheory();
                    } else {
                        item.countdown += 1
                    }
                }
            })
        } else if (topicMistakesTrue === true){
    wrongTopicNum.forEach(item => {
        if (item.countdown === 0){
            if (alreadyDefined === false){
                numQuestion = numTheoryQ.find(question => question.topic === item.topic)
                prevError.style.display = "inline"
                document.getElementById('prevErrorText').textContent = item.topic
                alreadyDefined = true
                loadNumTheory()
            } else {
                item.countdown += 1
            }
        }
    })
} else if (numCurrent < numTheoryQ.length) {
            prevError.style.display = 'none'
    numQuestion = getNextQuestion(numTheoryQ, userRatingNumTheory);
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

  async function saveUserStatsToCloud() {
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
        elo: Math.round(userRatingAll),                
        eloAlgebra: Math.round(userRating),             
        eloGeometry: Math.round(userRatingGeometry),
        eloNum: Math.round(userRatingNumTheory),
        eloProb: Math.round(userRatingProbability)   ,
        topicsToWorkOn: topicsToWorkOn,
        TOPICGLOSSARY: TOPIC_GLOSSARY,
        unfamiliar:  unfamiliar,
        stuck: stuck,
        mistake: mistake,
        algebraTotal: algebraTotal,
        algebraWrong: algebraWrong,
        geometryTotal: geometryTotal,
        geometryWrong: geometryWrong,
        numTotal: numTotal,
        probTotal: probTotal,
        numWrong: numWrong,
        probWrong: probWrong,
        streak: streakCount,
        TOPICGLOSSARY: TOPIC_GLOSSARY
    })
    .eq('id', userId); // ⚠️ CRITICAL: Ensure you only update THIS user's row!

  if (error) {
    console.error("Failed to sync stats to cloud database:", error.message);
  }

}
//------------Switch Subjects--------------
function loadQuestion() {
    startQuestionTimer()
    scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
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
      saveUserStatsToCloud()

      
}
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
document.getElementById("streak-count").innerHTML = streakCount;
    
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
    let newRating = oldRating + (250 * (correct - expectedRating))
    if (questionType !== "all"){
        if (questionType === "algebra"){
                userRating = newRating
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
function save(){
}
function get(){
        return localStorage.getItem("ELO")
}
async function getHardestProblems(limit = 10) {
  const { data, error } = await supabase
    .from('question_stats')
    .select('question_title, attempts, failures, success_rate')
    .gte('attempts', 5) // filter out problems with too few attempts
    .order('success_rate', { ascending: true })
    .limit(limit);

  return data;
}

// Assume supabase client is already initialized
async function getTableData() {
  const { data, error } = await supabase
    .from('question_stats')
    .select('*'); // '*' selects all columns

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  // 'data' is already an array of objects: [{id: 1, ...}, {id: 2, ...}]           
  return data;
}
//leaderboard one
let answerLOne = ""
const questionStatsUnsorted = await getTableData()
const questionStats = questionStatsUnsorted.sort((a, b) => a.success_rate - b.success_rate).slice(0, 5);
const oneCard = document.getElementById("leaderboardOneCard")
const oneTitle = document.getElementById("leaderboardTitleOne")
const percentOne = document.getElementById("percentOne")
const oneProblem = document.getElementById('oneProblem')
const leaderboardOnePar = document.getElementById("leaderboardPar1")
const leaderboardCheckOne = document.getElementById("leaderboard-btn-one")
const solutionOne = document.getElementById("solution-one")
const solutionOneText = document.getElementById("solution-text-one")
const answerInputOne = document.getElementById("leaderboard-input-one")
const leaderboardDropdownOne = document.getElementById("leaderboard-one-dropdown")
let cleanedOne = questionStats[0].question_title.replaceAll( `<span class="material-symbols-outlined">
star
</span>`, "")
oneTitle.innerHTML = cleanedOne
let arraySearchOne = questionStats[0].question_title
let percentOneSuccess = (questionStats[0].success_rate * 100).toFixed(0) + '% Success Rate'
percentOne.innerHTML = percentOneSuccess
oneCard.addEventListener("click", function(){
    oneProblem.classList.toggle("hiddenToggle")
    leaderboardDropdownOne.classList.toggle('rotated')
    leaderboardOnePar.innerHTML = allQ.find(q => q.title === arraySearchOne).text
    MathJax.typesetPromise([leaderboardOnePar]);
})
if (allQ.find(q => q.title === arraySearchOne).type === "mc"){
         mcChoicesLOne.forEach((btn, i) => {
            btn.innerHTML = allQ.find(q => q.title === arraySearchOne).choices[i];
            MathJax.typesetPromise([btn]);
            btn.addEventListener("click", function(){
mcChoicesLOne.forEach(btn => btn.disabled = true);
answerLOne = btn.innerHTML
leaderboardCheckOne.click()
            })
        });   
}
leaderboardCheckOne.addEventListener("click", function(){
    solutionOne.style.display = "block"
    if (allQ.find(q => q.title === arraySearchOne).type !== "mc")
    {
        answerLOne = answerInputOne.value.trim();
    }
    let correctAnswer = allQ.find(q => q.title === arraySearchOne).answer.trim();
    if (answerLOne === correctAnswer){
        solutionOneText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + allQ.find(q => q.title === arraySearchOne).solution;
    } else {
        solutionOneText.innerHTML = `<span class="material-symbols-outlined">
close_small 
</span> Incorrect. ` + allQ.find(q => q.title === arraySearchOne).solution;
    } 
    MathJax.typesetPromise([solutionOneText]);
})
//leaderboard two
let answerLTwo = ""
const twoCard = document.getElementById("leaderboardTwoCard")
const twoTitle = document.getElementById("leaderboardTitleTwo")
const percentTwo = document.getElementById("percentTwo")
const twoProblem = document.getElementById('twoProblem')
const leaderboardTwoPar = document.getElementById("leaderboardPar2")
const leaderboardCheckTwo = document.getElementById("leaderboard-btn-two")
const solutionTwo = document.getElementById("solution-two")
const solutionTwoText = document.getElementById("solution-text-two")
const answerInputTwo = document.getElementById("leaderboard-input-two")
const leaderboardDropdownTwo = document.getElementById("leaderboard-two-dropdown")
let cleanedTwo = questionStats[1].question_title.replaceAll( `<span class="material-symbols-outlined">
star
</span>`, "")
twoTitle.innerHTML = cleanedTwo
let arraySearchTwo = questionStats[1].question_title
let percentTwoSuccess = (questionStats[1].success_rate * 100).toFixed(0) + '% Success Rate'
percentTwo.innerHTML = percentTwoSuccess
twoCard.addEventListener("click", function(){
    twoProblem.classList.toggle("hiddenToggle")
    leaderboardDropdownTwo.classList.toggle('rotated')
    leaderboardTwoPar.innerHTML = allQ.find(q => q.title === arraySearchTwo).text
    MathJax.typesetPromise([leaderboardTwoPar]);
})
if (allQ.find(q => q.title === arraySearchTwo).type === "mc"){
         mcChoicesLTwo.forEach((btn, i) => {
            btn.innerHTML = allQ.find(q => q.title === arraySearchTwo).choices[i];
            MathJax.typesetPromise([btn]);
            btn.addEventListener("click", function(){
mcChoicesLTwo.forEach(btn => btn.disabled = true);
answerLTwo = btn.innerHTML
leaderboardCheckTwo.click()
            })
        });   
}
leaderboardCheckTwo.addEventListener("click", function(){
    solutionTwo.style.display = "block"
    if (allQ.find(q => q.title === arraySearchTwo).type !== "mc")
    {
        answerLTwo = answerInputTwo.value.trim();
    }
    let correctAnswer = allQ.find(q => q.title === arraySearchTwo).answer.trim();
    if (answerLTwo === correctAnswer){
        solutionTwoText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + allQ.find(q => q.title === arraySearchTwo).solution;
    } else {
        solutionTwoText.innerHTML = `<span class="material-symbols-outlined">
close_small 
</span> Incorrect. ` + allQ.find(q => q.title === arraySearchTwo).solution;
    } 
    MathJax.typesetPromise([solutionTwoText]);
})
//leaderboard three
let answerLThree = ""
const threeCard = document.getElementById("leaderboardThreeCard")
const threeTitle = document.getElementById("leaderboardTitleThree")
const percentThree = document.getElementById("percentThree")
const threeProblem = document.getElementById('threeProblem')
const leaderboardThreePar = document.getElementById("leaderboardPar3")
const leaderboardCheckThree = document.getElementById("leaderboard-btn-three")
const solutionThree = document.getElementById("solution-three")
const solutionThreeText = document.getElementById("solution-text-three")
const answerInputThree = document.getElementById("leaderboard-input-three")
const leaderboardDropdownThree = document.getElementById("leaderboard-three-dropdown")
let cleanedThree = questionStats[2].question_title.replaceAll( `<span class="material-symbols-outlined">
star
</span>`, "")
threeTitle.innerHTML = cleanedThree
let arraySearchThree = questionStats[2].question_title
let percentThreeSuccess = (questionStats[2].success_rate * 100).toFixed(0) + '% Success Rate'
percentThree.innerHTML = percentThreeSuccess
threeCard.addEventListener("click", function(){
    threeProblem.classList.toggle("hiddenToggle")
    leaderboardDropdownThree.classList.toggle('rotated')
    leaderboardThreePar.innerHTML = allQ.find(q => q.title === arraySearchThree).text
    MathJax.typesetPromise([leaderboardThreePar]);
})
if (allQ.find(q => q.title === arraySearchThree).type === "mc"){
         mcChoicesLThree.forEach((btn, i) => {
            btn.innerHTML = allQ.find(q => q.title === arraySearchThree).choices[i];
            MathJax.typesetPromise([btn]);
            btn.addEventListener("click", function(){
mcChoicesLThree.forEach(btn => btn.disabled = true);
answerLThree = btn.innerHTML
leaderboardCheckThree.click()
            })
        });   
}
leaderboardCheckThree.addEventListener("click", function(){
    solutionThree.style.display = "block"
    if (allQ.find(q => q.title === arraySearchThree).type !== "mc")
    {
        answerLThree = answerInputThree.value.trim();
    }
    let correctAnswer = allQ.find(q => q.title === arraySearchThree).answer.trim();
    if (answerLThree === correctAnswer){
        solutionThreeText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + allQ.find(q => q.title === arraySearchThree).solution;
    } else {
        solutionThreeText.innerHTML = `<span class="material-symbols-outlined">
close_small 
</span> Incorrect. ` + allQ.find(q => q.title === arraySearchThree).solution;
    } 
    MathJax.typesetPromise([solutionThreeText]);
})
//leaderboard four
let answerLFour = ""
const fourCard = document.getElementById("leaderboardFourCard")
const fourTitle = document.getElementById("leaderboardTitleFour")
const percentFour = document.getElementById("percentFour")
const fourProblem = document.getElementById('fourProblem')
const leaderboardFourPar = document.getElementById("leaderboardPar4")
const leaderboardCheckFour = document.getElementById("leaderboard-btn-four")
const solutionFour = document.getElementById("solution-four")
const solutionFourText = document.getElementById("solution-text-four")
const answerInputFour = document.getElementById("leaderboard-input-four")
const leaderboardDropdownFour = document.getElementById("leaderboard-four-dropdown")
let cleanedFour = questionStats[3].question_title.replaceAll( `<span class="material-symbols-outlined">
star
</span>`, "")
fourTitle.innerHTML = cleanedFour
let arraySearchFour = questionStats[3].question_title
let percentFourSuccess = (questionStats[3].success_rate * 100).toFixed(0) + '% Success Rate'
percentFour.innerHTML = percentFourSuccess
fourCard.addEventListener("click", function(){
    fourProblem.classList.toggle("hiddenToggle")
    leaderboardDropdownFour.classList.toggle('rotated')
    leaderboardFourPar.innerHTML = allQ.find(q => q.title === arraySearchFour).text
    MathJax.typesetPromise([leaderboardFourPar]);
})
if (allQ.find(q => q.title === arraySearchFour).type === "mc"){
         mcChoicesLFour.forEach((btn, i) => {
            btn.innerHTML = allQ.find(q => q.title === arraySearchFour).choices[i];
            MathJax.typesetPromise([btn]);
            btn.addEventListener("click", function(){
mcChoicesLFour.forEach(btn => btn.disabled = true);
answerLFour = btn.innerHTML
leaderboardCheckFour.click()
            })
        });   
}
leaderboardCheckFour.addEventListener("click", function(){
    solutionFour.style.display = "block"
    if (allQ.find(q => q.title === arraySearchFour).type !== "mc")
    {
        answerLFour = answerInputFour.value.trim();
    }
    let correctAnswer = allQ.find(q => q.title === arraySearchFour).answer.trim();
    if (answerLFour === correctAnswer){
        solutionFourText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + allQ.find(q => q.title === arraySearchFour).solution;
    } else {
        solutionFourText.innerHTML = `<span class="material-symbols-outlined">
close_small 
</span> Incorrect. ` + allQ.find(q => q.title === arraySearchFour).solution;
    } 
    MathJax.typesetPromise([solutionFourText]);
})
//leaderboard five
let answerLFive = ""
const fiveCard = document.getElementById("leaderboardFiveCard")
const fiveTitle = document.getElementById("leaderboardTitleFive")
const percentFive = document.getElementById("percentFive")
const fiveProblem = document.getElementById('fiveProblem')
const leaderboardFivePar = document.getElementById("leaderboardPar5")
const leaderboardCheckFive = document.getElementById("leaderboard-btn-five")
const solutionFive = document.getElementById("solution-five")
const solutionFiveText = document.getElementById("solution-text-five")
const answerInputFive = document.getElementById("leaderboard-input-five")
const leaderboardDropdownFive = document.getElementById("leaderboard-five-dropdown")
let cleanedFive = questionStats[4].question_title.replaceAll( `<span class="material-symbols-outlined">
star
</span>`, "")
fiveTitle.innerHTML = cleanedFive
let arraySearchFive = questionStats[4].question_title
let percentFiveSuccess = (questionStats[4].success_rate * 100).toFixed(0) + '% Success Rate'
percentFive.innerHTML = percentFiveSuccess
fiveCard.addEventListener("click", function(){
    fiveProblem.classList.toggle("hiddenToggle")
    leaderboardDropdownFive.classList.toggle('rotated')
    leaderboardFivePar.innerHTML = allQ.find(q => q.title === arraySearchFive).text
    MathJax.typesetPromise([leaderboardFivePar]);
})
if (allQ.find(q => q.title === arraySearchFive).type === "mc"){
         mcChoicesLFive.forEach((btn, i) => {
            btn.innerHTML = allQ.find(q => q.title === arraySearchFive).choices[i];
            MathJax.typesetPromise([btn]);
            btn.addEventListener("click", function(){
mcChoicesLFive.forEach(btn => btn.disabled = true);
answerLFive = btn.innerHTML
leaderboardCheckFive.click()
            })
        });   
}
leaderboardCheckFive.addEventListener("click", function(){
    solutionFive.style.display = "block"
    if (allQ.find(q => q.title === arraySearchFive).type !== "mc")
    {
        answerLFive = answerInputFive.value.trim();
    }
    let correctAnswer = allQ.find(q => q.title === arraySearchFive).answer.trim();
    if (answerLFive === correctAnswer){
        solutionFiveText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + allQ.find(q => q.title === arraySearchFive).solution;
    } else {
        solutionFiveText.innerHTML = `<span class="material-symbols-outlined">
close_small 
</span> Incorrect. ` + allQ.find(q => q.title === arraySearchFive).solution;
    } 
    MathJax.typesetPromise([solutionFiveText]);
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
    updateBarGraph()
})
unfamiliarBtn.addEventListener("click", function(){
    unfamiliar += 1
    updateBarGraph()
})
stuckBtn.addEventListener("click", function(){
    stuck += 1
    updateBarGraph()
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

    if (pieChart) {
        pieChart.destroy();
    }
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
// ---------- Start ----------
shuffleArray(questions);
shuffleArray(allQ)
buttonsWork();
updateColors();
updateTopicsDropdown();
getProblemNumber(questions)
getInitialRating(questions)
getProblemNumber(geometryQ)
getInitialRating(geometryQ)
getProblemNumber(numTheoryQ)
getInitialRating(numTheoryQ)
getProblemNumber(probabilityQ)
getInitialRating(probabilityQ)
getProblemNumber(allQ)
getInitialRating(allQ)
scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
async function logAttempt(questionTitle, isCorrect) {
  await supabase.rpc('log_attempt', {
    q_title: questionTitle,
    is_correct: isCorrect
  });
}
// Example — call inside your answer check logic:
// logAttempt(algebraQuestion.title, correct);
window.loadTopicQuestion = loadTopicQuestion;
window.loadQuestion = loadQuestion;
// etc. for any function called from HTML onclick attributes
const array = []
allQ.forEach(i => {
    if (i.topic == "pythagorean theorem"){
        array.push(i)
    }
})
console.log(array.length)

function runDiagnostic() {
    document.getElementById("actualStuff").style.display = "none"
    document.getElementById("diagnosticStuff").style.display = "block"
    shuffleArray(questions)
    shuffleArray(geometryQ)
    shuffleArray(numTheoryQ)
    shuffleArray(probabilityQ)
    shuffleArray(allQ)
    let questionsUsedCount = 0
    questions.forEach(item => {
        if (item.rating >= 1100 && item.rating <= 1800) {
            item.diagnosticElligible = true
            questionsUsedCount += 1
            if (questionsUsedCount < 2){
                diagnosticQuestions.push(item)
                diagnosticQuestions[diagnosticQuestions.length - 1].subject = "algebra"
            }
        } else {
            item.diagnosticElligible = false
        }
    })
    questionsUsedCount = 0
        geometryQ.forEach(item => {
        if (item.rating >= 1100 && item.rating <= 1800) {
            item.diagnosticElligible = true
            questionsUsedCount += 1
            if (questionsUsedCount < 2){
                diagnosticQuestions.push(item)
                diagnosticQuestions[diagnosticQuestions.length - 1].subject = "geometry"
            }
        } else {
            item.diagnosticElligible = false
        }
    })
    questionsUsedCount = 0
        numTheoryQ.forEach(item => {
        if (item.rating >= 1100 && item.rating <= 1800) {
            item.diagnosticElligible = true
            questionsUsedCount += 1
            if (questionsUsedCount < 2){
                diagnosticQuestions.push(item)
                diagnosticQuestions[diagnosticQuestions.length - 1].subject = "numTheory"
            }
        } else {
            item.diagnosticElligible = false
        }
    })
        questionsUsedCount = 0
        probabilityQ.forEach(item => {
        if (item.rating >= 1100 && item.rating <= 1800) {
            item.diagnosticElligible = true
            questionsUsedCount += 1
            if (questionsUsedCount < 2){
                diagnosticQuestions.push(item)
                diagnosticQuestions[diagnosticQuestions.length - 1].subject = "probability"
            }
        } else {
            item.diagnosticElligible = false
        }
    })
        questionsUsedCount = 0
        allQ.forEach(item => {
        if (item.rating >= 1100 && item.rating <= 1800) {
            item.diagnosticElligible = true
            questionsUsedCount += 1
            if (questionsUsedCount < 2){
                diagnosticQuestions.push(item)
                if (questions.some(i => i.title === diagnosticQuestions[diagnosticQuestions.length - 1]) === true){
                    diagnosticQuestions[diagnosticQuestions.length - 1].subject = "algebra"
                    diagnosticAlgebraTotal += 1
                } else if (geometryQ.some(i => i.title === diagnosticQuestions[diagnosticQuestions.length - 1]) ===  true){
                    diagnosticQuestions[diagnosticQuestions.length - 1].subject = "geometry"
                    diagnosticGeometryTotal += 1
                } else if (numTheoryQ.some(i => i.title === diagnosticQuestions[diagnosticQuestions.length - 1]) ===  true){
                    diagnosticQuestions[diagnosticQuestions.length - 1].subject = "numTheory"
                    diagnosticNumTheoryTotal += 1
                } else if (probabilityQ.some(i => i.title === diagnosticQuestions[diagnosticQuestions.length - 1]) === true){
                    diagnosticQuestions[diagnosticQuestions.length - 1].subject = "probability"
                    diagnosticProbabilityTotal += 1
                }
            }
        } else {
            item.diagnosticElligible = false
        }
    })
    shuffleArray(diagnosticQuestions)

document.getElementById("skip").addEventListener("click", function() {
    document.getElementById("diagnosticStuff").style.display = "none"
    document.getElementById("actualStuff").style.display = ""
    algebraQuestion = getNextQuestion(questions, userRating)
    geometryQuestion = getNextQuestion(geometryQ, userRatingGeometry)
    probQuestion = getNextQuestion(probabilityQ, userRatingProbability)
    numQuestion = getNextQuestion(numTheoryQ, userRatingNumTheory)
    allQuestion = getNextQuestion(allQ, userRatingAll)

    loadQuestion();
    scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
    mistake = 0
    stuck = 0
    unfamiliar = 0
    topicsToWorkOn = []
    TOPIC_GLOSSARY.forEach(i => i.errors = 0)
    updateRadarChart()
    updateBarGraph()
    updatePieChart()
});
    document.getElementById("startDiagnostic").addEventListener("click", function() {
        loadDiagnosticQuestion()
    })
 



}
   function loadDiagnosticQuestion() {
    diagnosticNext.style.display = "none"
    diagnosticCheck.disabled = false
    diagnosticInput.value = ""
    diagnosticInput.innerHTML = ""
            document.getElementById("diagnosticTitle").innerHTML = diagnosticQuestions[index].title
        document.getElementById("diagnosticText").innerHTML = diagnosticQuestions[index].text
        document.getElementById("startDiagnostic").style.display = "none"
        document.getElementById("skip").style.display = "none"
        diagnosticSolutionContainer.style.display = "none"
    if (diagnosticQuestions[index].image){
        imageDiagnostic.src=diagnosticQuestions[index].image;
        imageDiagnostic.style.display="block";
    } else {
        imageDiagnostic.style.display="none";
    }
    if (!diagnosticQuestions[index].type || diagnosticQuestions[index].type === "fr") {
        diagnosticInput.style.display = "inline-block";
        diagnosticCheck.style.display = "inline-block";
        diagnosticMCContainer.classList.add('hidden')
    }
    if (diagnosticQuestions[index].type === "mc") {
        diagnosticMCContainer.classList.remove("hidden");
        diagnosticMCContainer.style.display = "block"
        diagnosticInput.style.display = "none"

        diagnosticChoices.forEach((btn, i) => {
            btn.innerHTML = diagnosticQuestions[index].choices[i];
            btn.addEventListener("click", function() {
                handleDiagnosticAnswer(diagnosticQuestions[index].choices[i])
            })
            MathJax.typesetPromise([btn]).catch(()=>{})
        });
    } else {
        diagnosticMCContainer.classList.add("hidden")
        diagnosticMCContainer.style.display = "none"
    }
    if (window.MathJax) {
        MathJax.typesetPromise([
            document.getElementById("diagnosticTitle"),
            document.getElementById("diagnosticText"),
            document.getElementById("diagnostic-mc-container")
        ]).catch(()=>{});
    }
} 

function handleDiagnosticAnswer(choice) {
    diagnosticInput.value = choice
    diagnosticCheck.click();
    if (nextBtn.style.display !== "none"){
diagnosticChoices.forEach(btn => btn.disabled = true);
    }
}
diagnosticCheck.addEventListener("click", function () {
    diagnosticCheck.disabled = true
    const userAnswer = diagnosticInput.value.trim();
    const correctAnswer = diagnosticQuestions[index].answer.trim();
    if (userAnswer === correctAnswer) {
        if (diagnosticQuestions[index].subject === "algebra"){
            diagnosticAlgebraCorrect += 1
        } else if (diagnosticQuestions[index].subject === 'geometry'){
            diagnosticGeometryCorrect += 1
        } else if (diagnosticQuestions[index].subject === 'numTheory'){
            diagnosticNumTheoryCorrect += 1
        } else if (diagnosticQuestions[index].subject === 'probability'){
            diagnosticProbabilityCorrect += 1
        }
        diagnosticCorrect += 1
        diagnosticSolutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + diagnosticQuestions[index].solution;
       myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });


    } else if (userAnswer !== correctAnswer && nextBtn.style.display === "none") {
        diagnosticSolutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect. ` + diagnosticQuestions[index].solution;
    }
    diagnosticSolutionContainer.style.display = "block";
    diagnosticNext.style.display = "inline-block";

        MathJax.typesetPromise([diagnosticSolutionText]).catch(()=>{});
});
diagnosticNext.addEventListener("click", function() {
    if (index <= 3){
    index += 1
    loadDiagnosticQuestion()
    } else {
    updatePieChart();
    updateRadarChart();
    updateBarGraph();
    let totalRating = 0
    diagnosticQuestions.forEach(i => {
        let expectedRating = (1 / (1+10 ** ((i.rating - 1300) / 400)))
        totalRating += expectedRating
    })
    userRatingAll = Math.round(1300 + ((50 * (diagnosticCorrect - totalRating))))
        let algebraRating = 0
    diagnosticQuestions.forEach(i => {
        if (i.subject === "algebra"){
            let expectedRating = (1 / (1+10 ** ((i.rating - 1300) / 400)))
            algebraRating +=  expectedRating
        }
    })
    userRating = Math.round(1300 + ((50 * (diagnosticAlgebraCorrect - algebraRating))))
    let geometryRating = 0
    diagnosticQuestions.forEach(i => {
        if (i.subject === "geometry"){
            let expectedRating = (1 / (1+10 ** ((i.rating - 1300) / 400)))
            geometryRating +=  expectedRating
        }
    })
    userRatingGeometry = Math.round(1300 + ((50 * (diagnosticGeometryCorrect - geometryRating))))
    let numTheoryRating = 0
    diagnosticQuestions.forEach(i => {
        if (i.subject === "numTheory"){
            let expectedRating = (1 / (1+10 ** ((i.rating - 1300) / 400)))
            numTheoryRating +=  expectedRating
        }
    })
    userRatingNumTheory = Math.round(1300 + ((50 * (diagnosticNumTheoryCorrect - numTheoryRating))))
    let probRating = 0
    diagnosticQuestions.forEach(i => {
        if (i.subject === "probability"){
            let expectedRating = (1 / (1+10 ** ((i.rating - 1300) / 400)))
            probRating +=  expectedRating
        }
    })
    scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
    document.getElementById("diagnosticTitle").innerHTML = "Diagnostic Complete"
    document.getElementById("diagnosticText").innerHTML = `<p>Your ELO: ${userRatingAll}</p>
    <p>Accuracy: ${diagnosticCorrect}/5</p>`
    diagnosticMCContainer.style.display = "none"
    diagnosticSolutionContainer.style.display = "none"
    diagnosticNext.style.display = "none"
    diagnosticInput.style.display = "none"
           myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });
        diagnosticCheck.style.display = "none"
        imageDiagnostic.style.display = "none"
        document.getElementById("startadaptive").style.display = "block"
        


    }
})
document.getElementById("startadaptive").addEventListener("click", function() {
    document.getElementById("diagnosticStuff").style.display = "none"
    document.getElementById("actualStuff").style.display = ""
    userRatingAll = userRatingAllTrue
    algebraQuestion = getNextQuestion(questions, userRating)
    geometryQuestion = getNextQuestion(geometryQ, userRatingGeometry)
    probQuestion = getNextQuestion(probabilityQ, userRatingProbability)
    numQuestion = getNextQuestion(numTheoryQ, userRatingNumTheory)
    allQuestion = getNextQuestion(allQ, userRatingAll)
    loadQuestion();
    scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
    updateRadarChart()
    updateBarGraph()
    updatePieChart()
});
document.getElementById("btn-signup").addEventListener("click", async () => {
    
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  const username = document.getElementById("auth-username").value;
  const passwordCheck = document.getElementById("auth-password-check").value

  // Validate fields aren't empty
  if (!email || !password || !username) {
    document.getElementById("signup-error").innerHTML = "Please fill out all fields"
    return;
  }
if (password === passwordCheck){
  // 1. Create the user credentials using your existing supabase client
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) return alert(error.message);

  // 2. Insert their CURRENT ELO ratings into your 'profiles' table
  if (data.user) {
    
    await supabase.from('profiles').insert([
      { 
        id: data.user.id, 
        username: username, 
        elo: Math.round(userRatingAll),                
        eloAlgebra: Math.round(userRating),             
        eloGeometry: Math.round(userRatingGeometry),
        eloNum: Math.round(userRatingNumTheory),
        eloProb: Math.round(userRatingProbability)   ,
        topicsToWorkOn: topicsToWorkOn,
        TOPICGLOSSARY: TOPIC_GLOSSARY,
        unfamiliar:  unfamiliar,
        stuck: stuck,
        mistake: mistake,
        algebraTotal: algebraTotal,
        algebraWrong: algebraWrong,
        geometryTotal: geometryTotal,
        geometryWrong: geometryWrong,
        numTotal: numTotal,
        probTotal: probTotal,
        numWrong: numWrong,
        probWrong: probWrong,
        streak: streakCount
      }
    ]);
    
    alert("Account created!");
    
    document.getElementById('accountPannel').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById("username-display").innerHTML = username
    loadQuestion()
  }
  } else {
        document.getElementById("signup-error").innerHTML = "Passwords do not match"
    return;
  }
})
async function loadUserStats(userId) {
  const { data: profile, error } = await supabase
    .from('profiles')
    .select('elo, eloAlgebra, eloNum, eloGeometry, eloProb, eloNum, username, topicsToWorkOn, "TOPICGLOSSARY", unfamiliar, stuck, mistake, algebraTotal, algebraWrong, geometryTotal, geometryWrong, numTotal, numWrong, probTotal, probWrong, streak')
    .eq('id', userId)
    .single(); // Tells Supabase to return one object, not an array

  if (error) {
    console.error("Error downloading profile data:");
    return;
  }

  if (profile) {
    let userProfile = profile[0]
    TOPIC_GLOSSARY = profile.TOPICGLOSSARY || [ {
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
    title: `Triangle Lines (Medians, Altitudes, Perpendicular Bisectors, Angle Bisectors)`,
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
]
    topicsToWorkOn = profile.topicsToWorkOn || [];
    userRatingAll = profile.elo; 
    userRating = profile.eloAlgebra
    userRatingNumTheory = profile.eloNum
    userRatingProbability = profile.eloProb
    userRatingGeometry = profile.eloGeometry
    unfamiliar = profile.unfamiliar
    stuck = profile.stuck
    mistake = profile.mistake
    algebraTotal = profile.algebraTotal
    algebraWrong = profile.algebraWrong
    geometryTotal = profile.geometryTotal
    geometryWrong = profile.geometryWrong
    numTotal = profile.numTotal
    numWrong = profile.numWrong
    probTotal = profile.probTotal
    probWrong = profile.probWrong
    streakCount = profile.streak
    document.getElementById("btn-dashboard").innerHTML = userProfile.username
      document.getElementById("username-display").innerHTML = profile.username;
    
    // 2. Update your frontend UI elements
    const scoreCountElement = document.getElementById('scoreCount'); // update with your real ID if different
    if (scoreCountElement) {
      scoreCountElement.innerHTML = Math.round(userRatingAll);
    }
    document.getElementById("streak-count").innerHTML = streakCount;


    
    // 3. Trigger your chart re-renders
    if (typeof updateRadarChart === "function") updateRadarChart();
    if (typeof updateBarGraph === "function") updateBarGraph();
    updatePieChart()
  }
}
loginBtn.addEventListener("click", async () => {
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
  loadQuestion()
  updateRadarChart()
  updateBarGraph()
  updatePieChart()
      document.getElementById("diagnosticStuff").style.display = "none"
    document.getElementById("actualStuff").style.display = ""
    userRatingAll = userRatingAllTrue
    algebraQuestion = getNextQuestion(questions, userRating)
    geometryQuestion = getNextQuestion(geometryQ, userRatingGeometry)
    probQuestion = getNextQuestion(probabilityQ, userRatingProbability)
    numQuestion = getNextQuestion(numTheoryQ, userRatingNumTheory)
    allQuestion = getNextQuestion(allQ, userRatingAll)
    loadQuestion();
    scoreCount.innerHTML =Math.round( Number(String(userRatingAll).replace(/,/g, '')));
    updateRadarChart()
    updateBarGraph()
    updatePieChart()

})
const logoutBtn = document.getElementById('btn-logout');

logoutBtn.addEventListener('click', async () => {
      mistake = 0
  stuck = 0
  unfamiliar = 0
  algebraTotal = 0
  algebraWrong = 0
  geometryTotal = 0
  geometryWrong = 0
  numTotal = 0
  numWrong = 0
  probTotal = 0
  probWrong = 0
  topicsToWorkOn = []
  TOPIC_GLOSSARY.forEach(i => {
    i.errors = 0
  })
  userRatingAll = 1200
  userRating = 1200
  userRatingGeometry = 1200
  userRatingNumTheory = 1200
  userRatingProbability = 1200
  loadQuestion()
  updateRadarChart()
  updateBarGraph()
  updatePieChart()
            document.getElementById("login").style.display = "block"
  // 1. Call Supabase to clear the secure cloud session
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert("Error logging out: " + error.message);
    return;
  }

  // 2. Clear out your app's local storage so guest data doesn't get mixed up
  localStorage.removeItem("elo");
  localStorage.removeItem("eloAlgebra");
  localStorage.removeItem("eloGeometry");
  localStorage.removeItem("eloProb");
  localStorage.removeItem("eloNum");


  alert("You have been logged out successfully!");

  // 3. Force a page reload to refresh the state back to defaults (or manually reset variables)
  window.location.reload();
});

const deleteAccountBtn = document.getElementById('btn-delete-account');

if (deleteAccountBtn) {
  deleteAccountBtn.addEventListener('click', async () => {
    // 1. Double check confirmation so they don't accidentally click it
    const confirmed = confirm("Are you absolutely sure you want to delete your account? This will permanently erase your math rankings, diagnostic logs, and history. This action cannot be undone.");
    
    if (!confirmed) return;

    // 2. Fetch active session
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

    // 4. Sign them out completely from the auth system
    await supabase.auth.signOut();

    // 5. Clean up any remaining guest browser cache tracks
    localStorage.clear();
    loadQuestion()

    alert("Your account records and progress have been completely erased.");
    window.location.reload();
  });
}// ONE CLEAN LISTEN BLOCK FOR ADAPTIVE PRACTICE (adaptive-practice.js)
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

    // Toggle UI display blocks safely
    if (logoutBtn) logoutBtn.style.display = 'block';
    if (login) login.style.display = "none";
    if (createAccount) createAccount.style.display = "none"
    if (deleteAccount) deleteAccount.style.display = "block"
    if (usernameDisplayModal) usernameDisplayModal.style.display = "block"

    // 1. Fetch cloud records safely using correct lowercase columns
    const { data: profile, error } = await supabase
      .from('profiles')
      .select('username, elo, eloAlgebra, eloGeometry, eloNum, eloProb, topicsToWorkOn, "TOPICGLOSSARY", mistake, stuck, unfamiliar,algebraTotal, algebraWrong, geometryTotal, geometryWrong, numTotal, numWrong, probTotal, probWrong, totalTimeSpent, timedQuestionsCount')
      .eq('id', session.user.id)
      .single();

    if (error) {
      console.error("Error downloading adaptive practice data:", error.message);
      return;
    }

    if (profile) {
      
      // 2. Synchronize database states to local runtime memory
      userRatingAll = profile.elo || 1200;
      userRating = profile.eloAlgebra || 1200;
      userRatingGeometry = profile.eloGeometry || 1200;
      userRatingNumTheory = profile.eloNum || 1200;
      userRatingProbability = profile.eloProb || 1200;
      userTotalTimeSpent = profile.totalTimeSpent || 0;
userTimedQuestionsCount = profile.timedQuestionsCount || 0;
updateAvgTimerUI();
      TOPIC_GLOSSARY = profile.TOPICGLOSSARY || [ {
        // Inside your user authentication profile parsing sequence:

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
    title: `Triangle Lines (Medians, Altitudes, Perpendicular Bisectors, Angle Bisectors)`,
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
]
      
      topicsToWorkOn = profile.topicsToWorkOn || [];
      mistake = profile.mistake || 0;
      stuck = profile.stuck || 0;
      unfamiliar = profile.unfamiliar || 0;
      algebraWrong = profile.algebraWrong || 0;
      algebraTotal = profile.algebraTotal || 0;
      geometryTotal = profile.geometryTotal || 0;
      geometryWrong = profile.geometryWrong || 0;
      numTotal = profile.numTotal || 0;
      numWrong = profile.numWrong || 0;
      probTotal = profile.probTotal
      probWrong = profile.probWrong
      if (usernameDisplayModal) usernameDisplayModal.innerHTML = profile.username

      // 3. Update DOM text values
      if (usernameDisplay) usernameDisplay.innerHTML = profile.username;
      
      const scoreCountElement = document.getElementById('scoreCount');
      if (scoreCountElement) {
        scoreCountElement.innerHTML = Math.round(Number(userRatingAll.toString().replace(/,/g, '')));
      }

      // 4. Re-render visual analytics blocks
      if (typeof updateBarGraph === "function") updateBarGraph();
      if (typeof updateRadarChart === "function") updateRadarChart();
      if (typeof updatePieChart === "function") updatePieChart();
    }
            document.getElementById("diagnosticStuff").style.display = "none"
    algebraQuestion = getNextQuestion(questions, userRating)
    geometryQuestion = getNextQuestion(geometryQ, userRatingGeometry)
    probQuestion = getNextQuestion(probabilityQ, userRatingProbability)
    numQuestion = getNextQuestion(numTheoryQ, userRatingNumTheory)
    allQuestion = getNextQuestion(allQ, userRatingAll)
    loadQuestion();

  } else  {
    if (usernameDisplayModal) usernameDisplayModal.style.display = "none"
    if (typeof runDiagnostic === "function") runDiagnostic();
    TOPIC_GLOSSARY = [ {
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
    title: `Triangle Lines (Medians, Altitudes, Perpendicular Bisectors, Angle Bisectors)`,
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
]
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (login) login.style.display = "block";
    if (usernameDisplay) usernameDisplay.innerHTML = "Log In";
    if (createAccount) createAccount.style.display = "block"
    if (deleteAccount) deleteAccount.style.display = "none"
    // Reset runtime math parameters back to baseline
    userRatingAll = 1200;
    userRating = 1200;
    userRatingGeometry = 1200;
    userRatingNumTheory = 1200;
    userRatingProbability = 1200;
    mistake = 0;
    stuck = 0;
    unfamiliar = 0;
    topicsToWorkOn = [];
    
    if (Array.isArray(TOPIC_GLOSSARY)) {
      TOPIC_GLOSSARY.forEach(i => { if(i) i.errors = 0; });
    }

    const scoreCountElement = document.getElementById('scoreCount');
    if (scoreCountElement) scoreCountElement.innerHTML = 1200;

    // Redraw empty guest charts
    if (typeof updateBarGraph === "function") updateBarGraph();
    if (typeof updateRadarChart === "function") updateRadarChart();
    if (typeof updatePieChart === "function") updatePieChart();

  }
});
const arrayPrint = []
TOPIC_GLOSSARY.forEach(i => {
    arrayPrint.push(i.id)
})

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

// --- 1. Timer State Variables ---
let timerInterval;
let currentQuestionSeconds = 0;
let userTotalTimeSpent = 0;       // Fetched from database on login
let userTimedQuestionsCount = 0;  // Fetched from database on login

// --- 2. Helper: Format seconds into MM:SS ---
function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// --- 3. Core Functions: Start and Stop ---
function startQuestionTimer() {
  // Clear any old ticking interval safety check
  clearInterval(timerInterval);
  currentQuestionSeconds = 0;
  document.getElementById("current-timer").innerText = "0:00";

  // Tick every 1 second
  timerInterval = setInterval(() => {
    currentQuestionSeconds++;
    document.getElementById("current-timer").innerText = formatTime(currentQuestionSeconds);
  }, 1000);
}

// Update UI display for lifetime average
function updateAvgTimerUI() {
  if (userTimedQuestionsCount === 0) {
    document.getElementById("avg-timer").innerText = "0:00";
    return;
  }
  const avgSeconds = Math.round(userTotalTimeSpent / userTimedQuestionsCount);
  document.getElementById("avg-timer").innerText = formatTime(avgSeconds);
}// --- Integrated Draggable Floating Scratchpad Engine ---
const scratchPopup = document.getElementById("scratchpad-popup");
const scratchHeader = document.getElementById("scratchpad-header");
const scratchCanvas = document.getElementById("scratchpad-canvas");
const toggleScratchBtn = document.getElementById("btn-toggle-scratchpad");
const clearScratchBtn = document.getElementById("btn-clear-scratchpad");
const closeScratchBtn = document.getElementById("btn-close-scratchpad");

if (scratchPopup && scratchHeader && scratchCanvas) {
  const ctx = scratchCanvas.getContext("2d");
  let isDrawing = false;
  let lastX = 0, lastY = 0;

  // --- 1. Open / Close Window Visibility Toggles ---
  function openScratchpad() {
    scratchPopup.style.display = "block";
    setupBrushColors();
  }

  function closeScratchpad() {
    toggleScratchBtn.innerHTML = "Open Scratchpad"
    scratchPopup.style.display = "none";
  }

  toggleScratchBtn.addEventListener("click", () => {
    if (scratchPopup.style.display === "none" || scratchPopup.style.display === "") {
      openScratchpad();
      toggleScratchBtn.innerHTML = "Close Scratchpad"
    } else {
      closeScratchpad();
      toggleScratchBtn.innerHTML = "Open Scratchpad"
    }
  });

  closeScratchBtn.addEventListener("click", closeScratchpad);
  
  clearScratchBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, scratchCanvas.width, scratchCanvas.height);
  });

  function setupBrushColors() {
    let computedColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    ctx.strokeStyle = computedColor ? computedColor : '#4A90E2'; 
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
  }

  // --- 2. Canvas Core Drawing Mechanics ---
  function getCanvasCoordinates(e) {
    const rect = scratchCanvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  scratchCanvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    const coords = getCanvasCoordinates(e);
    [lastX, lastY] = [coords.x, coords.y];
  });

  scratchCanvas.addEventListener("mousemove", (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const coords = getCanvasCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    [lastX, lastY] = [coords.x, coords.y];
  });

  const stopDrawing = () => isDrawing = false;
  scratchCanvas.addEventListener("mouseup", stopDrawing);
  scratchCanvas.addEventListener("mouseleave", stopDrawing);

  // Mobile Drawing Support
  scratchCanvas.addEventListener("touchstart", (e) => {
    isDrawing = true;
    const coords = getCanvasCoordinates(e);
    [lastX, lastY] = [coords.x, coords.y];
  });
  scratchCanvas.addEventListener("touchmove", (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const coords = getCanvasCoordinates(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(coords.x, coords.y);
    ctx.stroke();
    [lastX, lastY] = [coords.x, coords.y];
  });
  scratchCanvas.addEventListener("touchend", stopDrawing);


  // --- 3. Window Translation Component (Dragging Logic) ---
  let isDraggingWindow = false;
  let offsetX = 0, offsetY = 0;

  function startWindowDrag(e) {
    // Prevent text highlight selection artifacts during runtime translation
    if (e.target === clearScratchBtn || e.target === closeScratchBtn) return;
    
    isDraggingWindow = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    offsetX = clientX - scratchPopup.offsetLeft;
    offsetY = clientY - scratchPopup.offsetTop;
  }

  function dragWindow(e) {
    if (!isDraggingWindow) return;
    e.preventDefault();
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    scratchPopup.style.left = (clientX - offsetX) + "px";
    scratchPopup.style.top = (clientY - offsetY) + "px";
  }

  function stopWindowDrag() {
    isDraggingWindow = false;
  }

  // Desktop Drag Bindings
  scratchHeader.addEventListener("mousedown", startWindowDrag);
  document.addEventListener("mousemove", dragWindow);
  document.addEventListener("mouseup", stopWindowDrag);

  // Mobile Drag Bindings
  scratchHeader.addEventListener("touchstart", startWindowDrag);
  document.addEventListener("touchmove", dragWindow, { passive: false });
  document.addEventListener("touchend", stopWindowDrag);
}