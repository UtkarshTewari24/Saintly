
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
let correctCount = 0;
let wrongCount = 0;
let longestStreak = 0;
function toggleSubMenu(button){
    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');
}
const doyouhateme = [
    { name: "Edward", value: 21},
    {name: "Sharpe", value: 37},
    {name: "harry", value: 10},
];
doyouhateme.sort((a,b) => a.value - b.value);
console.log(doyouhateme);



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
<h2 class="amc10subtitle">Quadratics</h2>
<h3>Quadratic Formula</h3>
$$x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$$
<h3>Standard Form</h3>
$$ax^2+bx+c$$
<h3>Factored Form</h3>
$$a(x-r_1)(x-r_2)$$
<h3>Vertex Form</h3>
$$a(x-h)^2+k$$
<h3>Discriminant</h3>
<p>If \\(b^2-4ac\\) is... </p>
<p>\\(>0\\)? →\\(2\\) real roots </p>
<p>\\(=0\\)? →\\(0\\) real roots </p>
<p>\\(<0\\)? →\\(1\\) real roots </p>
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Quadratics are generally important to know both in and outside competition math. A lot of equations and situations on the AMC can be modeled with quadratics</p>
`;
cardOneText.innerHTML = contentCardOne;
const cardTwoText = document.getElementById("carousel-card-two");
const contentCardTwo = `
<h2 class="amc10subtitle">Difference of Powers</h2>

<h3>Difference of Squares</h3>
$$a^2 - b^2 = (a+b)(a-b)$$

<h3>Difference of Cubes</h3>
$$a^3 - b^3 = (a-b)(a^2 + ab + b^2)$$

<h3>General Powers</h3>
<p>For any positive integer \(n\):</p>
$$
x^n - y^n =
$$
$$
(x-y)(x^{n-1} + x^{n-2}y + [...] + xy^{n-2} + y^{n-1})
$$
$$
x^n + y^n =
$$
$$
(x+y)(x^{n-1} - x^{n-2}y + x^{n-3}y^2 - [...] + xy^{n-2} - y^{n-1})
$$
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>This is generally good to know because it saves time in the AMC 10, which is essential with an average of around 3 minutes per question</p>
`;
cardTwoText.innerHTML = contentCardTwo;
const cardThreeText = document.getElementById("carousel-card-three");
const contentCardThree = `
<h2 class="amc10subtitle">Series</h2>

<h3>Arithmetic</h3>
<p>In arithmetic series, each term is found by adding a constant number to the previous term. The sums of finite series can be found using </p>
$$
S_n=\\frac{a_1+a_n}{2}
S_n=\\frac{2a_1+(n-1)d}{2}
$$
<p>Where \\(S_n\\) is the sum, \\(a_x\\) is the \\(x\\)th term, \\(n\\) is the number of terms, and \\(d\\) is the common ifference
<h3>Geometric</h3>
<p>A geometric series occurs when each term is the previous term multiplied by a common ratio \\(r\\) </p>
<p>The sum for a finite series is</p>
$$
S_n=a\\frac{1-r^n}{1-r}
$$
<p> and for a convergent series </p>
$$
S=\\frac{a}{1-r}
$$
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Even if a series is not directly mentioned in a question, you can also easily find a way to manipulate or solve an equation by using an advanced knowledge of sequences. Look out for how patterns, sequences, etc. can be optimized with series</p>
`;
cardThreeText.innerHTML = contentCardThree;
const cardFourText = document.getElementById("carousel-card-four");
const contentCardFour = `
<h2 class="amc10subtitle">Inequalities</h2>
<h3>AM & GM Inequality</h3>
$$
\\frac{x+y}{2} \\le \\sqrt{xy}
$$
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Remember that:</p>
<p>1) Squares are ALWAYS positive</p>
<p>2) Don't solve unless you have to. You can always bind the equation with inequalities. </p>
`;
cardFourText.innerHTML = contentCardFour;
const cardFiveText = document.getElementById("carousel-card-five");
const contentCardFive = `
<h2 class="amc10subtitle">Symmetric Expressions</h2>
<h3>Symmetry</h3>
<p>Effectively, symmetry in expressions means switching \\(x\\) and \\(y\\) NEVER has an impact </p>
<h3>Most Common Exampes (Golden Pair)</h3>
$$
x+y=S
$$
$$
xy=P
$$
<p>These are important because you can derive</p>
$$
x^2+y^2=S^2-2P
$$
$$
x^3+y^3=s^3-3PS
$$
$$
x^4+y^4=(x^2+y^2)^2-2x^2y^2
$$
<h3>Quadratics Trick</h3>
<p>If \\(x\\)  and \\(y\\) are roots of the quadratic \\(z^2-Sz+P=0\\)
<p>The sum of the roots is \\(S\\) and the product is \\(P\\) (Vieta's Rules)</p>
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Algebraic manipulation is HUGE in AMC 10. Knowing symmetry can help you understand and simplify both geometry and algebra questions. </p>
`;
cardFiveText.innerHTML = contentCardFive;



// ---------Toggle Button for Questions ----------
const problemsCheckbox = document.getElementById("toggle");
const problemsCard = document.getElementById("problems-card");
const problemsWrapper = document.getElementById("problems-card");
function toggleProblems() {
loadQuestion(currentQuestion)
};

let currentQuestion = 0;

// Set initial state on page load
// Add event listener to toggle visibility



// ---------- Question Data ----------
const confettiCanvas = document.getElementById("confetti-canvas");
const myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
});


let questions = [
    {
        used: false,
        difficulty: 1,
        title: `AMC 10B 2022 Problem 4 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: `
<p>A donkey suffers an attack of hiccups and the first hiccup happens at 4:00 one afternoon.</p>
<p>Suppose that the donkey hiccups regularly every 5 seconds.</p>
<p>At which time does the donkey's 700th hiccup occur?</p>
<p>Answer in the format <b>H:MM:SS</b> (e.g. 4:15:12)</p>
        `,
        type: "fr",
        answer: "4:58:15",
        solution: `<b>4:58:15</b><p>The first hiccup occurs at 4:00.</p>
<p>There are 699 hiccups after the first.</p>
<p>Total time elapsed: \\(699\\times5 = 3495\\) seconds.</p>
<p>By dividing by 60, we know that 3495 seconds equals \\(\\frac{3495}{60} = 58 \\) minutes with a remainder of \\(15\\) seconds.</p>
<p>Therefore, the time is <b>4:58:15</b>.</p>
<h3>Common Mistake<SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
<p>The easiest way to mess up this problem is by misinterpreting what the question is asking. Notice that it asks for the 700th hiccup, but the first hiccup is already accounted for. Make sure to read thoroughly and not to fall for the trick of calculating the duration of 700 hiccups instead of 699.`,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topic: "word problems"
    },
    {
        used: false,
        difficulty: 1,
        title: `AMC 10A 2021 Problem 3 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: `
<p>The sum of two natural numbers is 17402.</p>
<p>One of the two numbers is divisible by 10.</p>
<p>If the units digit of that number is erased, the other number is obtained.</p>
<p>Find the difference between the two numbers.</p>
        `,
        type: "fr",
        answer: "14238",
        solution: `<b>14238</b><p>Let the smaller number be \\(x\\).</p>
<p>The larger number must be \\(10x\\).</p>
<p>Equation: \\(x + 10x = 17402\\), so \\(11x = 17402\\), hence \\(x = 1582\\).</p>
<p>The numbers are 15820 and 1582.</p>
<p>Difference: \\(15820 - 1582 = 14238\\).</p>

<h3>Common Mistake<SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
<p>Make sure you understand wwhy the first number is \\(\\times 10\\) the other. This intuition isn't just important for this question, but questions in general`,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topic: "algebraic manipulation"
    },
    {
        used: false,
        difficulty: 1,
        title: `1 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: `
<p>Compute the value of:</p>
$$
(2^2 - 2) - (3^2 - 3) + (4^2 - 4)
$$
        `,
        type: "fr",
        answer: "8",
        solution: `
<p> Compute each term seperately:</p>
$$
2^2 - 2 = 4 - 2 = 2
$$
$$
3^2 - 3 = 9 - 3 = 6 
$$
$$
4^2 - 4 = 16 - 4 = 12
$$
<p> Now substitute and compute </p>
$$
2 - 6 + 12 = 8
$$
`,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topic: "arithmetic"
    },
    {
        used: false,
        difficulty: 1,
        title: `AMC 10A 2025 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: `
Andy and Betsy both live in Mathville. Andy leaves Mathville on his bicycle at \\(1:30\\) traveling due north at a steady \\(8\\) miles per hour. Betsy leaves on her bicycle from the same point at \\(2:30\\), traveling due east at a steady \\(12\\) miles per hour. At what time will they be exactly the same distance from their common starting point?
        `,
        type: "fr",
        answer: "4:30",
        solution:`<b>4:30</b>
        start by writting and equation and defining your variables. For this, we can have
        <p>\\(h = \\)the hours since Betsy left</p>
        <p>We know that Andy has been traveling for \\(h+1\\) hours. We also know that speed is equal to distance over  time, or that distance is equal to speed times time. Knowing this, we can set up equations for the distance they have both traveled:
        <p>Andy</p>
        $$
        8(h+1)
        $$
        <p>Betsy</p>
        $$
        12h
        $$
        <p>Set these equal to eachother (bc we want the distance traveled to be the same) and solve:</p>
        $$
        8h+8=12h
        $$
        $$
        4h=8
        $$
        $$
        h=2
        $$
        <p> Two hours after Betsy's starting time is <b> 4:30 <b> </p>

        `,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topic: "systems of equations",

    },
    {
        used: false,
        difficulty: 2,
        title: `AMC 10A 2025 Problem 9 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: `Let \\(f(x)=100x^3-300x^2+200x\\). For how many real numbers \\(a\\) does the graph of \\(y=f(x-a)\\) pass through the point \\((1,25)\\)`,
        answer: "3",
        type: "fr",
        solution: `<b>3</b>You can start by either factoring or just outright solving. From what I've found, the latter is more common, although for this example I will factor to keep things cleaner.
        <p>Factor the equation by first eliminating the GCF and then factoring like a quadratic</p>
        $$
        f(x)=(100x)(x^2-3x+2)
        $$
        $$
        f(x)=(100x)(x-2)(x-1)
        <p>Substitute 1-a into every instance of x. We do this because we know that we aren't solving for x, we already know what that is in this case, we're solving for the offset to x. Since we know the input will be x-a, and that x has to be 1, we can input 1-a into every instance of x
        $$
        $$
        f(x)=(100(1-a))(1-a-2)(1-a-1)
        $$
        $$
        f(x)=(100-100a)(-a-1)(a)
        $$
        <p>By the same logic, since we know y=25, we can substitute that in for \\(f(x)\\)
        $$
        25=(100-100a)(-a-1)(a)
        $$
        <p>Just looking at this, we know that 3 is the safest option, because it is clearly a cubic function, which tends to have 3 real roots. From here you can also just logic-your-way through figuring out how many answers there are, which, in this case, is <b> 3<b>
        
        <h3>Common Mistake<SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Remember what you are solving for. An easy mistake is to forget the \\(y=f(x-a)\\) entirely, which will make the question infinitely more confusing.`,
        topic: "functions"
    },
    {
        used: false,
        difficulty: 1,
rating: 800,
        title:`AMC 10B 2024 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        text: "What is \\(10! - 7! \\cdot 6!\\)",
        type: "mc",
        choices: ["\\(A) -120\\)", "\\(B) 0\\)", "\\(C) 120\\)", "\\(D) 600\\)", "\\(E) 720\\)"],
        answer: "\\(B) 0\\)",
        solution: `<b>0</b>
        <p><b>Solution by Mason</b></p>
        <p>We can factor out \\(7!\\) and get \\(7!(8 \\cdot 9 - 6!)\\). Expand this to find \\(7!(720-720)=0\\)
        `,
        topic: "factoring",
        hint:"What can you factor out?",
        step: "Factor out \\(7!\\)",
    },
    {
        used: false,
        difficulty: 1,
        title: `AMC 10B 2024 Problem 3 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: "For how many integer values \\(x\\) is \\(|2x| \\le 7\\pi \\)",
        type: "fr",
        answer: "21",
        solution: `<b> 21 </b> <p> First, let's get an approximation for \\(7\\pi\\). Assuming \\(\\pi = 3.14\\) we can just multiply them and find the nearest integer that is less than or equal to the product. Since 0.14 is a relatively small decimal, it's pretty intuitive that this integer is \\(21\\). Knowing this, we can rewrite our question to </p>
        $$
        |2x| \\le 21
        $$
        <p> By definition of absolute value, this means: </p>
        $$
        2x \\le 21
        $$
        $$
        OR
        $$
        $$
        2x \\ge -21
        $$
        <p>From here, we know that the bounds are \\(x = 10\\) and \\(x = -10\\). Counting all integers between these two numbers yields 21, because 0 can only be counted once. </p>
        <h3>Common Mistake<SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Don't double-count 0. An easy mistake to make is thinking the answer is 10+10, but remember that 0 can only be counted once. You can also just check that the answer is 21 by counting on your fingers(yes you'd have to reset, but it is a decent way to assure youreslf of your answer.)</p>
        `,
        topic: "inequalities"
    },
    {
        used: false,
        difficulty: 3,
        title: `AMC 10B 2024 Problem 13 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: "Positive integers \\(x\\) and \\(y\\) satisfy the equation \\(\\sqrt{x} + \\sqrt{y} = \\sqrt{1183}\\). What is the minimum possible value of \\(x + y\\)?",
        type: "mc",
        choices: ["\\(A) 585\\)", "\\(B) 595\\)", "\\(C) 623\\)", "\\(D) 700\\)", "\\(E) 791\\)"],
        answer: "\\(B) 595\\)",
        solution: `<b>A) 595 </b><p>Let's start by simplyfying this as much as possible. \\(1183\\) simplifies down into \\(13\\sqrt{7}\\).</p>
        <p> Knowing this, we can simplify \\(\\sqrt{x}\\) into \\(a\\sqrt{7}\\) and \\(\\sqrt{y}\\) into \\(b\\sqrt{7}\\) where \\(a+b=13).</p>
        <p> To elminate the square roots, we square both sides so that our new equation is</p>
        $$
        7a^2+7b^2=1183
        $$
        $$
        7(a^2+b^2)=1183
        a^2+b^2 = 169
        $$
        <p> We can use our knowledge of factoring and the quadratic formula to derive that \\(a^2+b^2=(a+b)^2-2ab\\). This is because we know that \\((a+b)^2\\) is equal to \\(a^2+2ab+b^2\\) since it is a common formula found in quadratics. Removing \\(2ab\\) gets our original equation.</p>
        <p> Since \\(a^2+b^2\\) should be as small as possible in order for \\(x\\) and \\(y\\) to be as small as possible, and we already know that a+b = 13, the expression ends up </p>
        $$
        169-2ab
        $$
        <p> We want \\(ab\\) to be as large as possible for \\(a^2+b^2\\) to be as small as possible. We can set up the AM-GM inequality:</p>
        $$
        \\frac{a+b}{2} \\ge \\sqrt{ab}
        $$
        <p>Since \\(a+b=13\\), and we want \\(a\\) and \\(b\\) to be integers, we need to get \\(\\sqrt{ab}\\) as close to \\(\\frac{13}{2}\\) as possible. We can square both sides and find \\(ab \\ le \\frac{169}{4}\\), or \\(ab \\le 42.25\\). Since 42 is a product of \\(6\\) and \\(7\\) (iykyk), we know that those are the best values for \\(a\\) and \\(b\\), because they also fit into all our other parameters., 
        <p>Now that we know what \\(a\\) and \\(b\\) are, we can input that into definitions for \\(x\\) and \\(y\\) and find the sum.</p>
        $$
        \\sqrt{x}=7\\sqrt{7}
        $$
        $$
        \\sqrt{y}=6\\sqrt{7}
        $$
        $$
        x = 343
        $$
        $$
        y = 252
        $$
        <p> Add these together to find the minimum sum </p>
        $$
        343+252=595
        $$
        `,
        topic: "algebraic manipulation"
    },
    {
        used: false,
        difficulty: 3,
        title: `AMC 10B 2024 Problem 14 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: `A dartboard is the region \\(B\\) in the coordinate plane consisting of points \\((x,y)\\) such that \\(|x|+|y| \\le 8 \\). A target \\(T\\) is the region where \\((x^2+y^2-25)^2 \\le 49\\). A dart is thrown and lands at a random point in \\(B\\). The probability that the dart lands in \\(T\\) can be expressed as \\(frac{m}{n} \\cdot \\pi \\) where \\(m\\) and \\(n\\) are relatively prime positive integers. What is \\(m+n\\)?
        `,
        type: "mc",
        choices: ["\\(A) 39\\)", "\\(B) 71\\)", "\\(C) 73\\)", "\\(D) 75\\)", "\\(E) 135\\)"],
        answer: "\\(B) 71\\)",
        solution: `<b>71</b> <p>The first step is to visualize the graph. If you are particularly knowledgeable about different types of graphs and functions, you may know that \\(|x|+|y| \\le 8\\) maps out a diamond-like shape. However, let's go through through why this is true: </p>
        <p>Consider the definition of absolute value   functions, and the root absolute value function. It is pretty common knowledge that \\(y=|x|\\) looks sort of like a V. This is because absolute value, by definition, makes everything positive. When looking at the equation \\(|x|+|y|\\) we know that there are four different situations, \\(2\\) where \\(x\\) is positive and \\(2\\) where \\(x\\) is negative, with the same being true for y. Thus, this means that 4 potential linear graphs are created, which are bounded and converge to make a diamond. We know that the "vertices" are at every point on an axis that has an absolute value of \\(8\\), since that is the y/x intercept.</p>
        <p>To find the probability that the dart lands in the target, excluding human error (you probably won't have to worry about this in a math competition), we just find the area of the target and divide it by the area of the square. First, let's find the area of the square.
        <p>Use the pythagorean theorem to find the side lengths of the square </p>
        $$
        \\sqrt{8^2+8^2}
        $$
        $$
        \\sqrt{128}
        $$
        <p>Since the area of a square is just the side length squared, we know that the area of the square is \\(128\\).

        <p>Notice that this is squared. The most important thing about squares is that it makes everything positive. Since \\(49\\) is a perfect square, we can take that as a hint to take the square root of the equation. This gives us
        $$
        |x^2+y^2-25| \\le 7
        $$
        <p>We use absolute value because the value can be equal to \\(\\pm 7\\)</p>
        <p>We can rewrite this equation into a compound inequality:</p>
        $$
        -7 \\le x^2+y^2-25 \\le 7
        $$
        $$
        18 \\le x^2+y^2 \\le 32
        $$
        <p>Returning to the formula of a circle, \\(x^2+y^2=r^2\\). If we treat the less than equal to as an equal sign, we can see that the area bounded is between two circles of radiuses \\(\\sqrt{18}) and \\(\\sqrt{32})
        $$
        <p>The target is bounded between these circles, so we just need to find the area of the larger circle and subtract the area of the smaller cirlce. Obviously, the larger circle has a radius \\(sqrt{32}\\)</p>
        $$
        \\sqrt{32}^2\\pi
        $$
        <p>which is \\(32\\pi\\)</p>
        <p>Now find the smaller circle (gonna skip the math because it's self-explanatory) which should be \\(18\\pi\\).</p>
        <p>Subtracting gives a target of area \\(14\\pi\\)</p>
        <p>This means the probability of hitting the target is \\(\\frac{14\\pi}{128}\\), which simplifies into \\(\\frac{7\\pi}{64}\\) making \\(m\\) and \\(n\\) \\(7\\) and \\(64\\), respectively. Add these to get a sum of \\(71\\).</p>
        <h3>Common Mistake<SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>While you don't have to, and really shouldn't, try to graph out every point on coordinate grid, it definitely helps to have a sketch and get an idea of what you are solving for. Also, both of the equations were some sort of way of building on common functions/equations. Make sure you know your basics so that you can expand further!</p>`,
        topic: "functions"
    },
    {
        used: false,
        difficulty: 5,
        title: `AMC 10B Problem 24 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: `<p>Let </p>
        $$
        P(m) = \\frac{m}{2}+\\frac{m^2}{4}+\\frac{m^4}{8}+\\frac{m^8}{8}
        $$
        <p>How many values of \\(P(2022)\\), \\(P(2023)\\), \\(P(2024)\\), and \\(P(2025)\\) are integers?</p>
        `,
        answer: "4",
        solution: `<b>4</b> <p>\\(P(x)\\) can be an integer in 2 cases:</p>
        <p>A) all the terms being added are integers</p>
        <p>B) the non-integer terms sum to an integer</p>
        <p>\\(P(2022)\\) and \\(P(2024)\\) must be integers they are divisble by \\(2\\). Even if they weren't divislbe by larger powers of \\(2\\), the equation conveniently raises these numbers to specific powers in order to change it into a number that is divisble by \\(4\\), \\(8\\), etc. </p>
        <p>Now lets look at the remaining numbers, \\(2023\\) and \\(2025\\). Neither of these numbers are divisble by \\(2\\), so they will produce a decimal part for all terms of this equation. That being said, if those decimal parts can sum to an integer, than the sum will still be an integer.</p>
        <p>For both \\(2023\\) and \\(2025\\), we know that the remainder when divided by \\(2\\) will be \\(0.5\\). Recalling the divisibility rules for powers of \\(2\\), we know that when a number is divided by \\(2\\) to the  \\(n\\)th power, if the last \\(n\\) digits are divisible by \\(2\\) to the \\(n\\)th power, so is the original number.</p>
        <p>Since we want to save time, instead of calculating \\(2023^2\\), we calculate \\(23^2\\) and find the last two digits, since we know they will be the same in both cases. This ends up being \\(529\\), with the last two digits being \\(29\\) which gives a remainder of \\(1\\) when divided by \\(4\\), which gives a decimal part of \\(0.25\\). Repeat this process for the rest of the terms in both \\(2023\\) and \\(2025\\).</p>
        <p>The decimal parts you should end up with, for both equations, should be \\(0.5\\), \\(0.25\\), \\(0.625\\), and \\(0.625\\). Adding there all together gives us \\(1\\) meaning that all the values are integers.
        <h3>Common Mistake<SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Don't forget that you can sum decimals to get an integer. Be careful not to assume that `,
        topic: "modular arithmetic",
    },
    {   
        used: false,
        difficulty: 1,
        title: `AMC 10A 2024 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: "What is the value of \\(9901 \\cdot 101 - 99 \\cdot 10101 \\)?",
        answer: "2",
        solution: `<b>2</b>
        <p>There are a LOT of ways to solve this one, so I suggest you check the link attatched below to see all, especially because a question like this can really easily take up time. The most straightforward, and in my opinion easy, solution is direct computation. Howver, this takes time that we may not have on the AMC 10. However, here is a decently fast solution that I find easy to understand as well.
        <p>Notice that \\(9901\\) is equal to \\((99 \\cdot 110) + 1\\) and \\(10101\\) is equal to \\((100 \\cdot 101)+1\\). Knowing this, we arrange the equation to be \\(101(99 \\cdot 100 +1) - 99(101 \\cdot 100 + 1)\\), or \\(101(99 \\cdot 100)+101-99(101 \\cdot 100)+99\\) which solves down to \\(2\\).
        <p>https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_10A_Problems/Problem_1</p>`,
        topic: "factoring",
    },
    {   
        used: false,
        difficulty: 1,
        title: `AMC 10A 2024 Problem 2 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: `A model used to estimate the time it will take to hike to the top of a mountain on a trail is
        of the form \\(T = aL + bG\\), where \\(a\\) and \\(b\\) are constants, \\(T\\) is the time in minutes, \\(L\\) is the length of the trail in miles, and \\(G\\) is the altitude gain in feet. The model estimates that it will take \\(69\\) minutes to hike to the top if a trail is 
        \\(1.5\\) miles long and ascends \\(800\\) feet, as well as if a trail is \\(1.2\\) miles long and ascends \\(1100\\) feet. how many minutes does the model estimate it will take to hike
        to the top if the trail is \\(4.2\\) miles long and ascends \\(4000\\) feet?`,
        answer: "246",
        solution: `<b>246</b><p>Let's start by inserting the variables we are given into the two equations:</p>
        $$
        69=1.5a+800b
        $$
        $$
        69=1.2a+1100b
        $$
        <p>Solve by elimination</p>
        $$
        4(69)=4(1.5a)+4(800b)
        $$
        $$
        5(69)=5(1.2a)+5(1100b)
        $$
        $$
        276=6a+3200b
        $$
        $$
        345=6a+5500b
        $$
        <p>Subtract the first equation from the second and solve</p>
        $$
        69=2300b
        $$
        $$
        b=\\frac{3}{100}
        $$
        <p>Substitute and solve for \\(a\\)</p>
        $$
        276=6a+3200(\\frac{3}{100})
        $$
        $$
        276=6a+96
        $$
        $$
        180=6a
        $$
        $$
        30=a
        $$
        <p>Substitute the given values for \\(L\\) and \\(G\\) and solve</p>
        $$
        T=30(4.2)+\\frac{3}{100}(4000)
        $$
        $$
        T=126+120
        $$
        $$
        T=246
        $$
        `,
        topic: "systems of equations",
    },
    {
        title: `AMC 10A 2024 Problem 7 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: "The product of \\(3\\) integers is \\(60\\). What is the least posible positive sum of the 3 integers.",
        type: "mc",
        used: false,
        difficulty: 2,
        choices: ["\\(A) 2\\)", "\\(B) 3\\)", "\\(C)5\\)", "\\(D) 6\\)", "\\(E) 13\\)"],
        answer: "\\(B) 3\\)",
        solution: `<b>3</b><p>First start by finding the prime factorization of \\(60\\). Doing this should yield</p>
        $$
        2^2 \\cdot 3 \\cdot 5
        $$
        <p>To find the number of factors, we take each exponent that each prime factor is raised to and add 1, giving us \\(3\\), \\(2\\) and \\(2\\) and multiply them together to find a total of \\(12\\) prime factors.</p>
        <p> Now returning to the question. It states that the final sum must be positive, but nothing about the actual numbers. We know that in order for the product to be positive, the factors must either be all positive or have two that are negative and one positive. Since we want the lowest possible 
        sum, the latter is a better option</p>
        <p>The one positive factor must be the largest because it needs to be greater than the absolute value of the sum of the two other terms in order for the final sum to be positive. We also want the absolute value of the sum of the two negative factors to be as close to the reamining factor
        because we want the sum to be as small as possible. Another thing that the question carefully neglects to address is that there is no limitation on using the number 1, this will come in handy because when maximizing the sum of factors, it helps if they are further away from each other.</p>
        <p>With this in mind, it helps to start from the middle. When we're dealing with factors, this doesn't mean dividing by 2, but finding the square, or the nearest thing. \\(\\sqrt{60}\\) is irrational, but we know that it must be near \\(8\\) because we know that \\(\\sqrt{64}\\) is equal to \\(8\\). Using this, we can find that the
        nearest integer factors to the square root are \\(6\\) and \\(10\\). Now, obviously \\(10\\) has to be the positive number, so we have to break down \\(6\\), right? Nope, recall that we can maximize the sum of two factors by making them further apart, and that we want the absolute value of the negative sum to be as large as possible without being greater than 10. Using this knowledge,
        we can make the \\(3\\) factors \\(-1\\), \\(-6\\), and \\(10\\) with a sum of \\(3\\).</p>
        <b>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></b>
        <p>Don't forget that you can always use \\(1\\) and the number itself as factors. In situations liek these, the more options you give yourself, the better.`,
        topic: "prime factorization",
    },
    {
        title: `AMC 10A 2024 Problem 8 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: "Amy, Bomani, Charlie, and Daria work in a chocolate factory. On Monday, Amy, Bombani, and Charlie started working at \\(1:00 PM\\) and were able to pack \\(4, 3\\) and \\(3\\) packages, respectively, every \\(3\\) minutes. At some later time Daria joined the group and was able to pack \\(5\\) packages every \\(4\\) minutes. Together they finished packing \\(450\\) packages at exactly \\(2:45 PM\\). At what time did Daria join the group?",
        type: "mc",
        used: false,
        difficulty: 2,
        choices: ["\\(A) 1:25 PM\\)", "\\(B) 1:35 PM\\)", "\\(C) 1:45 PM\\)", "\\(D) 1:55 PM\\)", "\\(E) 2:05 PM\\)"],
        answer: "\\(A) 1:25 PM\\)",
        solution: `<b> 1:25 PM </b><p>To solve this, let's first find out how many packages Amy, Bomani, and Charlie made in total. We know that they worked for \\(1\\) hour and \\(45\\) minutes, or \\(105\\) minutes. We don't really have to find the 
        exact rate that they each pack packages at because \\(105\\) is divisible by \\(3\\). Since we know that alltogether they make \\(4+3+3=10\\) packages every 3 minutes, we divid \\(105\\) by \\(3\\) to get \\(35\\) and multiply by 10. In the time they worked, they made
        350 packages alltogether. This means that Daria made the reamining  \\(450-350=100\\) packages. Since he makes \\(5\\) packages every \\(4\\) minutes, we first divide \\(\\frac{100}{5}=20\\) and then multiply \\(20 \\cdot 4\\) to find how long he needs in minutes, whcih works out to be \\(80\\) minutes. \\(80\\) minutes is an hour and \\(20\\) minutes, and an hour and \\(20\\) minutes before \\(2:45 PM\\) is \\(1:25 PM\\).</p>`,
        topic: "systems of equations",
    },
    {
        title: `AMC 10A 2024 Problem 11 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: "How many ordered pairs of integers \\((m,n)\\) satisfy \\(\\sqrt{n^2-49}=m\\)",
        type: "mc",
        used: false,
        difficulty: 3,
        choices: ["\\(A) 1\\)", "\\(B) 2\\)", "\\(C) 3\\)", "\\(D) 4\\)", "\\(E) Infinitely Many\\)"],
        answer:"\\(D) 4\\)",
        solution: `<b>4</b><p>Does this expression look a little bit familiar..? What is we rewrite it?</p>
        $$
        \\sqrt{n^2-49}^2=m^2
        $$
        $$
        n^2-49=m^2
        $$
        $$
        n^2=m^2+49
        $$
        $$
        n^2=m^2+7^2
        $$
        <p>In case you haven't noticed yet, this is the pythagorean theorem with given side length \\(7\\). Since we are dealing with integers, all we're really looking for is how many pythagorean tripelets exist with a side length of \\(7\\)?</p>
        <p>Here's where it gets a little bit complicated, because you do have to have an extent of knowledge of pythagorean triples. That being I said, I <b>highly</b> recommend studying common pythagorean tripelets beforehand. Knowing this, we can use the 
        knowledge that \\(7, 24, 25\\) is a pythagorean tripelet. So with that in mind...does that make the answer \\(1\\)? No. Recall that squaring a number gives the same as squaring the negative of that number, so \\(-24\\) is also a value for \\(n\\). So is that it? \\(2\\)?. Not exactly, there's still a few solutions left.
        We know thta the square root of \\(0\\) is \\(0\\). With this knowledge, we can set \\(m\\) to \\(0\\) and solve for \\(n\\) which gives two different values, \\(7\\) and \\(-7\\). With that, we have <b>4</b> values for \\((m,n)\\). 
        <h3>Common Mistake<SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Don't forget to keep going and really think everything through. Some answers are a lot more simple than you think, so take a moment to reflect and look at the question. Since you don't need to answer every question to qualify for AIME, don't worry too much about time if it comes at the cost of getting something right.</p>
        `,
        topic: "algebraic manipulation",
    },
    {
        title: `AMC 10A 2024 Problem 12 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: "Zelda played the <i>Adventures of Math</i> game on August 1 and scored \\(1,700\\) points. She continued to play daily over the next \\(5\\) days. The bar chart below shows the daily change in her score compared to the day before. (For example, Zelda's score on August 2 was \\(1,700+80=1,780\\) points.) What was Zelda's average score in points over the \\(6\\) days? <b>Do not put a comma in your answer</b> ",
        type: "fr",
        used: false,
        image: "assets/question-diagrams/amc-10-2024-problem-12.png",
        difficulty: 3,
        answer: "1715",
        solution: `<b>1715</b><p>Notice that we do not have to actually calculate the totals on each day. If we calculate the averages of the scores relative to the original \\(1700\\) and add that to \\(1700\\) it will have the same effect. Recall that the numbers are relative to the day before, not the starting score. WIth this, set up the following equation:
        $$
        1700+\\frac{80-10-20+40+0}{6}
        $$
        <p> Which solves to \\(1715\\)</p>`,
        topic: "arithmetic",
    },
    {
        title: `AMC 10A 2024 Problem 23 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: "Integers \\(a, b,\\) and \\(c\\) satisfy \\(ab+c=100\\), \\(bc+a=87\\), and \\(ca+b=60\\). What is \\(ab+bc+ca\\)?",
        type: "mc",
        choices: ["\\(A) 212\\)", "\\(B) 247\\)", "\\(C) 258\\)", "\\(D) 276\\)", "\\(E) 284\\)"],
        used: false,
        difficulty: 5,
        answer: "\\(C) 258\\)",
        solution: `<b>276</b><p>Start by adding the first two equations. This gets us
        $$
        ab+c+bc+a=100+87
        $$
        $$
        ab+bc+a+c=187
        $$
        $$
        b(a+c)+a+c=187
        $$
        $$
        (b+1)(a+c)=187
        $$
        <p>Since all the variables are integers, we know that \\(b+1\\) and \\(a+c\\)  must both be integer factors of \\(187\\). We find the prime factorization of \\(187\\) and find that it's only factors are \\(\\pm 1, \\pm 11, \\pm 17,\\) and  \\(\\pm 187\\). These are all possibilities for \\(b+1\\)
        <p>Now subtract the first two equations</p>
        $$
        ab+c-bc-a=100-87
        $$
        $$
        ab-bc+c-a=13
        $$
        $$
        (b-1)(a-c)=13
        $$
        <p>Since \\(13\\) is prime, \\((b+1)\\) must be \\(\\pm 1\\) or \\(\\pm 13\\). Using the potential values for \\(b+1\\), we can conclude that \\(b\\) is \\(-12\\).</p>
        <p>Substitute what we now know and solve the system of equations</p>
        $$
        -12a+c=100
        $$
        $$
        -12c+a=87
        $$
        $$
        ca=72
        $$
        <p>Solve using the first two equations</p>
        $$
        c=100+12a
        $$
        $$
        -12(100+12a)+a=87
        $$
        $$
        -1200-143a=87
        $$
        $$
        a=-9
        $$
        $$
        9c=72
        $$
        $$
        c=-8
        $$
        <p>Input into the equation we are trying to solve for and solve</p>
        $$
        (-9 \\cdot -12) + (-12 \\cdot -8) + (-9 \\cdot -8) = 247
        $$
        `,
        topic: "algebraic manipulation",
    },
    {
        title: `AMC 10B 2023 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: `Mrs. Jones is pouring orange juice into four identical glasses for her four sons. She fills the first three glasses completely but runs out of juice when the fourth glass is only \\(\\frac{1}{3}\\) full. What fraction of a glass must Mrs. Jones pour from each of the first three glasses into the fourth glass so that all four glasses will have the same amount of juice?`,
        type: "mc",
        used: false,
        difficulty: 1,
        choices: ["A) \\(\\frac{1}{12}\\)", "B) \\(\\frac{1}{4}\\)", "C) \\(\\frac{1}{6}\\)", "D) \\(\\frac{1}{8}\\)", "E) \\(\\frac{2}{9}\\)"],
        answer:"B) \\(\\frac{1}{4}\\)",
        solution: `<b\\(\\frac{1}{4})></b><p>Let's call the fraction of how much juice Mrs. Jones pours out \\(x\\). We can say that after she evens out the amount of juice in each cup, each of the \\(3\\) filled cups, the cup that was \\(\\frac{1}{3}\\) full will then be \\(\\frac{1}{3}+3x\\) full and the rest will be \\(1-x\\) full. Since we want them all to be equal, we can set these equations to be equal to each other and solve</p>
        $$
        \\frac{1}{3}+3x=1-x
        $$
        $$
        4x=\\frac{2}{3}
        $$
        $$
        x=\\frac{1}{4}
        $$`,
        topic: "systems of equations",
    },
    {
        title: `AMC 10B 2023 Problem 2 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: `Carlos went to a sports store to buy running shoes. Running shoes were on sale with prices reduced by \\(20%\\) on every pair of shoes. Carlos also knew that he had to pay a 
        \\(7.5%\\) sales tax on the discounted price. He had \\(43\\) dollars. What is the origina (before discount) price of the most expensive shoes he could afford to buy?`,
        used: false,
        difficulty: 1,
        type: "fr",
        answer: "50",
        solution: `<b>50</b><p>We can set the original value of the shoes to \\(x\\). The discount takes off \\(20%\\), meaning that we multiply \\(x  \\cdot 0.8\\) to find the discounted price. Now we add the sales tax. we multiply the discounted price, \\(0.8x\\) by \\(1.075\\) and know that this must be equal to \\($43\\) in order for Carlos to be paying the most expensive shoes he can get. Now, solve: </p>
        $$
        1.075(0.8x)=43
        $$
        $$
        0.86x=43
        $$
        $$
        x=50
        $$`,
        topic: "percents"
    },
    {
        title: `AMC 10B 2023 Problem 5 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: `Maddy and Lara see a list of numbers written on a blackboard. Maddy adds \\(3\\) to each number in the list and finds that the sum of her new numbers is \\(45\\). Lara multiplies each number in the list by \\(3\\) and finds that the sum of her new numbers is also \\(45\\). How many numbers are written on the blcakboard?`,
        used: false,
        difficulty: 2,
        type: "fr",
        answer: "10",
        solution: `<b>10</b><p>Let's call the total amount of numbers on the board \\(x\\) and the sum of the numbers on the board, without any altering \\(y\\). </p>
        <p>We know that adding \\(3\\) to each value on the board effectively adds \\(3x\\) to the total sum, making the sum \\(3x+y\\). </p>
        <p>We also know that multiplying each number on the board by \\(3\\) is the same as multiplying the sum by \\(3\\), because of the distributve property. this means that the new sum is \\(3y\\)</p>
        <p>Use the two equations to solve for \\(x\\)</p>
        $$
        3y=45
        $$
        $$
        y=15
        $$
        $$
        3x+15=45
        $$
        $$
        3x=30
        $$
        $$
        x=10
        `,
        topic:"systems of equations",
    },
    {
        title:`AMC 10B 2023 Problem 12 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: `<p>When the roots of the polynomial</p>
        $$
        P(x)=(x-1)^1(x-2)^2(x-3)^3...(x-10)^10
        $$
        <p>are removed from the number line, what remains is the union of 11 disjoint open interavls. On how many of these intervals is \\(P(x)\\) positive?`,
        used: false,
        difficulty: 3,
        type: "fr",
        answer: "6",
        solution: `<b>6</b><p>Recognize that \\(P(x)\\) is positive when there is an even number of negative factors. None of the factors within parentheseis raised to an even power will ever be negative, so we only have to worry about the odd powers. Let's take all the even powers out of our equation:
        $$
        P(x)=(x-1)(x-3)^3(x-5)^5(x-7)^7(x-9)^9
        $$
        <p>Let'start by considering situations where all of the values are positive. In order for this to happen, \\(x\\) must be greater than \\(9\\) so that subtracing nine keeps it positive. This means that one of the zones happens at \\(x \\ge 9\\). However, recall that our original equation also included \\((x-10)^10\\) meaning that \\(x \\ge 9\\) is divded into two sections</p>
        <p>Repeat this logic to find sections for \\(2\\) negative and \\(4\\) negative. You should end up with <b>6</b> positive sections</p>
        `,
        topic: "inequalities",
    },
    {
        title: `AMC 10B 2023 Problem 13 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 3,
        text: `What is the area of the region on the coordinate plane defined by
        $$
        ||x|-1|+||y|-1| \\le 1?
        $$`,
        type: "fr",
        answer: "8",
        solution: `<b>8</b><p>If you have graph paper or just scratch paper you can easily draw this out and see that it is 4 diamonds around the origin. However, let's explain why that is.</p>
        <p>I always like to think of absolute value graphs as "cases" because it combines a bunch of different linear graphs. In this case, we see that the different "cases" in which the slope and \\(y\\) intercept and \\(x\\) intercept are positive, negative etc. A general rule when you see equations that look like \\(|x|+|y| < z\\) is that it will include squares of some sort.</p>
        <p>Returning to the question, we know that the intercepts are at \\(\\pm 1\\). We use the pythagorean theorem to find that the side lengths of the squares are \\(\\sqrt{2}\\), and square that to find that they all have areas of \\(2\\). Since there are four squares, we multiply that by four and find a final solution of \\(8\\)`,
        topic: "graphing",
    },
    {
        title: `AMC 10B 2023 Problem 14 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 3,
        text: "How many ordered pairs of integers \\((m,n)\\) satisfy the equation \\(m^2+mn+n^2=m^2n^2\\)",
        used: false,
        type: "fr",
        answer: "3",
        solution: `<b>3</b><p>Right off the bat, we notice that \\((0,0)\\) is a valid solution, because the equation doesn't contain any constants. Now let's try to solve for any other solutions.</p>
        We recognize that \\(m^2+mn+n^2=(m+n)^2-mn\\). By adding \\(mn\\) to both sides of the orginal equation, we can use that fact I just addressed to factor out one side:
        $$
        m^2+2mn+n^2=m^2n^2+mn
        $$
        $$
        (m+n)^2=mn(m+1)
        $$
        Since we're dealing with integers, we know that \\((m+n)^2\\) is a perfect square. This means that we need a perfect square that is a sum of two consecutive numbers, particularly factors of the square. Using inductive reasoning, we know that this isn't possible UNLESS the square is \\(0\\). This is only possible when \\(m=-n\\). Furthermore, we know that \\(m\\) and \\(n\\) have to be \\(\\pm 1\\)  in order for the right side of the equation to equal \\(0\\). This gives us three possible ordered pairs \\((m,n)\\): \\((0,0), (-1,1), and (1,-1)\\).`,
        topic: "algebraic manipulation",
    },
    {
        title: `AMC 10B 2023 Problem 22 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 5,
        text: "How many distinct values \\(x\\) satisfy \\(\\lfloor{x}^2\\rfloor-3x+2=0\\) where \\(\\lfloor{x}\\rfloor\\) denotes the largest integer less than or equal to \\(x\\)",
        used: false,
        type: "mc",
        choices: ["\\(A) Infinitely Many\\)", "\\(B) 4\\)", "\\(C) 2\\)", "\\(D) 3\\)", "\\(E) 0\\)"],
        answer: "\\(B) 4\\)",
        solution: `<b>4</b><p>By factoring the equation into \\((x-2)(x-1)=0\\), we can easily find two solutions, \\(1\\) and \\(2\\). Those are the only integer solutions. Now let's look at real numbers in general.</p>
        <p>We rewrite the equation as \\(\\lfloor{x}\\rfloor=3x-2\\). From here, we don't nescessarily need to solve. We could, but for time's sake, I'll show you a simpler way. </p>
        <p>A floor function on a graph essentially takes the shape of the grpah but divides it into noncontinuous, flat, sections at the "floor". Knowing this, we know thta the left hand side of the equation will look like the parent 
        quadratic graph, but with the "floors". We can roughly sketch out this graph and see that it intersects in two places, meaning another 2 solutions. This means that the equation has a total of <b>4</b> solutions</p>`,
        topic: "floor functions",
    },
    {
        title: `AMC 10A 2023 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 1,
        used: false,
        text: "Cities \\(A\\) and \\(B\\) are \\(45\\) miles apart. Alicia lives in \\(A\\) and Beth lives in \\(B\\). Alicia bikes towards \\(B\\) at \\(18\\) miles per hour. Leaving at the same time, Beth bikes toward \\(A\\) at \\(12\\) miles per hour. How many miles from City \\(A\\) will they be when they meet?",
        type: "fr",
        solution: `<b>27</b><p>Every hour \\(h\\), Alice gets \\(18\\) miles further from City \\(A\\). We can describe her distance from City \\(A\\) with the equation</p>
        $$
        d=18h
        $$
        <p>Beth is different because she starts \\(45\\) miles away already, but gets closer. Thus, we can model her equation with</p>
        $$
        d=45-12h
        $$
        <p>Since both equations equal \\(d\\), we can set them equal to each other and solve.</p>
        $$
        18h=45-12h
        $$
        $$
        30h=45
        $$
        $$
        h=1.5
        $$
        $$
        d=18(1.5)
        $$
        $$
        d=27
        $$
        `,
        answer: "27",
        topic: "speed-distance-time"
    },
    {
        title: `AMC 10A 2023 Problem 2 <span class="material-symbols-outlined staricon">
star
</span>`,
        dificulty: 1,
        used: false,
        text: "The weight of \\(\\frac{1}{3}\\) of a large pizza together with \\(3 \\frac{1}{2}\\) of orange slices is the same weight of \\(\\frac{3}{4}\\) of a large pizza together with \\(\\frac{1}{2}\\) cups of orange slices. A cup of orange slies weigh \\(\\frac{1}{4}\\) of a pound. What is the weight, in pounds, of a large pizza?",
        type: "mc",
        choices: ["\\(A) 1 \\frac{4}{5}\\)", "\\(B) 2\\)", "\\(C) 2 \\frac{2}{5}\\)", "\\(D) 3\\)", "\\(E) 3 \\frac{3}{5}\\)"],
        solution: `<b></b><p>Set up two expressions that are equal to each other, since we know the weights are equal. Let \\(p\\) be the weight of a pizza and \\(o\\) be the weight of orange slices.</p>
        $$
        \\frac{1}{3}p+3 \\frac{1}{2}o=\\frac{3}{4}p+\\frac{1}{2}o
        $$
        <p>Substitute \\(o\\) with \\(\\frac{1}{4}\\)</p>
        $$
        \\frac{1}{3}p+\\frac{7}{8}=\\frac{3}{4}p+\\frac{1}{8}
        $$
        <p>Solve</p>
        $$
        \\frac{3}{4}=\\frac{5}{12}p
        $$
        $$
        p=\\frac{9}{5}
        $$
        $$
        p=1 \\frac{4}{5}
        $$
        `,
        answer: "\\(A) 1 \\frac{4}{5}\\)",
        topic: "systems of equations"
    },
    {
        title: `AMC 10A 2023 Problem 8 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: `Barb the baker has developed a new temperature scale for her bakery called the Breadus scale, which is a linear function of the Fahrenheit scale. Bread rises at \\(110\\) degrees Fahrenheit which is \\(0\\) degrees on the Breadus scale. Bread is baked at \\(350\\) degrees Fahrenheit, which is \\(100\\) degrees on the Breadus scale. Breada is done when its internal temperature is \\(200\\) degrees Farenheit. What is this, in degrees, on the Breadus scale? Answer as a decimal.`,
        used: false,
        difficulty: 2,
        type: "fr",
        answer: "37.5",
        solution: `<b>37.5</b><p>We know that the equation is linear, and thus that it can be expressed as \\(y=mx+b\\). We'll call \\(y\\) the degrees in Farenheit and \\(x\\) the degrees on the Breadus scale. We know that \\(110=0m+b\\), so \\(b\\) is equal to \\(110\\). We plug this in to
        the same equation but insert what we now know. We'll also use the \\(350\\) degrees Farenheit constraint.</p>
        $$
        350=100m+110
        $$
        <p> Solving gets \\(m=2.4\\). We then use this equation, with the set slope and y-intercept to solve for the \\(200\\) degrees Farenheit on the Breadus scale.</p>
        $$
        200=2.4m+110
        $$
        $$
        90=2.4x
        $$
        $$
        x=37.5
        $$
        `,
        topic: "systems of equations"

    },
    {
        title: `AMC 10A 2023 Problem 10 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        text: `Maureen is keeping track of the mean of her quiz scores this semester. If Maureen scores an \\(11\\) on the next quiz, her mean will increase by \\(1\\). If she scores an \\(11\\) on each of the next three quizzes, her mean will increase by \\(2\\). What is the mean of her scores currently?`,
        used: false,
        difficulty: 3,
        type: "fr",
        solution: `<b>7</b><p>We know that the mean, which we'll call \\(m\\) is the sum of her total scores, \\(x\\), divided by the number of tests she's taken, \\(n\\). We set up the following equation:</p>
        $$
        \\frac{x}{n}=m
        $$
        <p>We don't actually want to write it in that form, however, because it will complicate calculations later. If we have to go back and solve for \\(m\\), that takes up more time. Because of this, we write \\(mn\\) instead of \\(x\\).</p>
        $$
        \\frac{mn}{n}=m
        <p>We also know that if she scores an \\(11\\) on her next test, her score will go up by one point, and \\(n\\) is increased because she took another test:</p>
        $$
        \\frac{mn+11}{n+1}=m+1
        $$
        <p>Now, repeat the previous process for scoring an \\(11\\) on her next \\(3\\) tests:</p>
        $$
        \\frac{mn+33}{n+3}=m+2
        $$
        <p>When solving systems of equations like this, I like to get it out of fraction-form if possible, so let's multiply either side by the denominator on the right</p>
        $$
        mn+11=mn+m+n+1
        $$
        $$
        m+n=10
        $$
        $$
        mn+33=mn+2n+3m+6
        $$
        $$
        2n+3m=27
        $$
        <p>Solve the system of equations</p>
        $$
        n=10-m
        $$
        $$
        2(10-m)+3m=27
        $$
        $$
        20+m=27
        $$
        $$
        m=7
        $$
        `,
        answer: "7",
        topic: "averages"
    },
    {
        title: `AMC 10B 2022 Problem 2 <span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 1,
        used: false,
        text: `Define \\(x \\diamond y\\) to be \\(|x-y|\\) for all real numbers \\(x\\) and \\(y\\). What is the value of
        $$
        (1 \\diamond(2 \\diamond 3)) - ((1 \\diamond 2) \\diamond 3)?
        $$`,
        solution: `<b>-2</b><p>Let's rewrite the equation with what the \\(\\diamond\\) operation really means: absolute value:
        $$
        |1-|2-3||-||1-2|-3|
        $$
        <p>Now, solve</p>
        $$
        |1-1|-|1-3|
        $$
        $$
        -2
        $$`,
        answer: "-2",
        topic: "arithmetic",
        type: "fr",
    },
    {
        title: `AMC 10B 2022 Problem 5 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 2,
        used: false,
        text: `What is the value of 
        $$
        \\frac{(1+\\frac{1}{3})(1+\\frac{1}{5})(1+\\frac{1}{7{}})}{\\sqrt{(1-\\frac{1}{3^2})(1-\\frac{1}{5^2})(1-\\frac{1}{7^2})}}?
        $$
        `,
        type: "mc", 
        choices: ["\\(A) \\sqrt{3}\\)", "\\(B) 2\\)", "\\(C) \\sqrt{15}\\)", "\\(D) 4\\)", "\\(E) \\sqrt{105}\\)"],
        answer: "\\(B) 2\\)",
        solution: `<b>2</b><p>Realistically, you don't need to solve this in some eloquent and complicated way, as simple brute force solving could be quicker. This explanation will not delve into the details of how to do brute force, since
        it is simple arithmetic. However, the following is a faster yet more complex solution.</p>
        <p>By the difference of squares, we know that \\(\\sqrt{(1-\\frac{1}{3^2})(1-\\frac{1}{5^2})(1-\\frac{1}{7^2})}\\) is equal to \\(\\sqrt{(1+\\frac{1}{3})(1+\\frac{1}{5})(1+\\frac{1}{7})} \\sqrt{(1-\\frac{1}{3})(1-\\frac{1}{5})(1-\\frac{1}{7})}\\), so we rewrite the denominator accordingly:</p>
        $$
        \\frac
        {(1+\\frac{1}{3})(1+\\frac{1}{5})(1+\\frac{1}{7})}
        {\\sqrt{(1+\\frac{1}{3})(1+\\frac{1}{5})(1+\\frac{1}{7})} \\sqrt{(1-\\frac{1}{3})(1-\\frac{1}{5})(1-\\frac{1}{7})})}
        $$
        <p>To simplify, we multiply by \\(\\frac{\\sqrt{(1+\\frac{1}{3})(1+\\frac{1}{5})(1+\\frac{1}{7})}}{\\sqrt{(1+\\frac{1}{3})(1+\\frac{1}{5})(1+\\frac{1}{7})}}\\) and simplify, which reduces to </p>
        $$
        \\frac{\\sqrt{(1+\\frac{1}{3})(1+\\frac{1}{5})(1+\\frac{1}{7})}}{\\sqrt{(1-\\frac{1}{3})(1-\\frac{1}{5})(1-\\frac{1}{7})}}
        $$
        <p>From here we simplify and solve</p>
        $$
        \\frac{\\sqrt{\\frac{4}{3} \\cdot \\frac{6}{5} \\cdot \\frac{8}{7}}}{\\sqrt{\\frac{2}{3} \\cdot \\frac{4}{5} \\cdot \\frac{6}{7}}}
        $$
        $$
        \\frac{\\sqrt{4 \\cdot 6 \\cdot 8}}{\\sqrt{2 \\cdot 4 \\cdot 6}}
        $$
        $$
        \\frac{\\sqrt{8}}{\\sqrt{2}}
        $$
        $$
        2
        $$
        <h3>Disclaimer <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Realistically, if this solution is too hard to follow, you can solve by brute force. While eloquent solutions like these may be faster, what's most important is that it makes sense to you. Don't worry about taking too long on a question. Quality \\(>\\) Quantity is what matters in AMC 10. `,
        topic: "algebraic manipulation"
    },
    {
        title: `AMC 10B 2022 Problem 7 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 2,
        used: false,
        text: `For how many values of the constant \\(k\\) will the polynomial \\(x^2+kx+36\\) have two distinct integer roots?`,
        answer: "8",
        solution: `<b>8</b><p>To solve, start by finding how many integer factors \\(36\\) has. We find that the prime factorization is \\(2^2 \\cdot 3^2\\), which means that \\(36\\) has \\(3 \\times 3 = 9\\) factors that could be roots of the equation.</p>
        <p>That doesn't mean that \\(9\\) is our solution, however. Recall that \\(36\\) is a perfect square, so having \\(6\\) as a factor would mean that \\(6\\) is the ONLY factor. That doesn't meet our criteria, so we effectively ignore it and know that there are \\(8\\) values for \\(k\\)`,
        topic: "quadratics",
        type: "fr",
        topic: "factoring",
        
    },
    {
        title: `AMC 10B 2022 Problem 9 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`, 
        difficulty: 2,
        used: false,
        type: `mc`,
        choices: ["\\(A) 2020\\)", "\\(B) 2021\\)", "\\(C) 2022\\)", "\\(D) 2023\\)", "\\(E) 2024\\)"],
        text: `<p>The sum</p>
        $$
        \\frac{1}{2!} + \\frac{2}{3!} + \\frac{3}{4!} + ... + \\frac{2021}{2022!}
        $$
        <p>can be expressed as \\(a-\\frac{1}{b!}\\), where \\(a\\) and \\(b\\) are positive intgeers. What is \\(a+b\\)?`,
        answer: "\\(D) 2023\\)",
        solution: `<b>2023</b><p>We look for a pattern within the sums. One thing you may notice is that \\(\\frac{1}{2!}=1-\\frac{1}{2!}\\). We continue that logic to find that the sum of the terms in this series for \\(n\\) values is equal to \\(1-\\frac{1}{(n+1)!}\\). This means that the final sum is \\(1-\\frac{1}{2022!}). We add \\(a+b\\) for a final sum of \\(2023\\)
        <h3>Disclaimer <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>This solution uses a trick called Engineer's Induction, which is essentially the assumption of validity in patterns. While it is not always right, I find that in situations like this, it can save time for the AMC 10. If you disagree and/or have time, always feel free to solve on your own.`,
        topic: "induction",
    }, 
    {
        title: `AMC 10B 2022 Problem 15 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 4,
        used: false,
        type: "fr",
        text: "Let \\(S_{n}\\) be the sum of the first \\(n\\) terms of an arithmetic sequence that has a common difference of \\(2\\). The quotient \\(\\frac{S_{3n}}{S_{n}}\\) does not depend on \\(n\\). What is \\(S_{20}\\)?",
        solution: `<b>400</b><p>We know that the sum of terms in an arithmetic series up to the \\(nth\\) term can be found using the equation \\(n\\frac{a+a_{n}}{2}\\), where \\(a\\) is the first term. Since we know the common ratio, we can also rewrite \\(a_{n}\\) as \\(a+2(n-1)\\) or \\(a+2n-2\\). We substitute this in for \\(a_{n}\\) in the original equation:</p>
        $$
        S_{n}=n \\frac{2a+2n-2}{2}
        $$
        $$
        S_{n}=n(a+n-1)
        $$
        <p>We substitute \\(n\\) for \\(3n\\) to find the numerator. Keep in mind we are currently solving for \\(a\\), which we need to find \\(S_{20}\\).</p>
        $$
        S_{3n}=3n(a+3n-1)
        $$
        <p>Arrange them into a fraction:</p>
        $$
        \\frac{3n(a+3n-1)}{n(a+n-1)}
        $$
        $$
        \\frac{3a+9n-3}{a+n-1}
        $$
        <p>We want the numerator to be a multiple of the denominator so that it always ends up as the same value, regardless of \\(n\\). At a glance, this seems imposible because the ratio between the coefficients of \\(n\\) is different from that of the constants. That being said, we can change that by  manipulating the value of \\(a\\).</p>
        <p>We either want a value that makes the constant in the numerator nine times that of the constant of the denominator, or one that makes it \\(0\\). Just by looking at the equation, we can tell that setting \\(a\\) to \\(1\\) gets us to the latter. We now know that \\(a=1\\).</p>
        <p>We know the equation for the sum of an arithmetic series, but we don't know the \\(20th\\) term. We use the equation from earlier and solve to find that it is \\(39\\). We input all the values we know into the equation for the sum of an arithmetic series and solve:</p>
        $$
        20 \\cdot \\frac{1+39}{2}
        $$
        $$
        20 \\cdot 20
        $$
        $$
        400
        $$`,
        answer: "400",
        topic: "series",
    },
    {
        title: `AMC 10B 2022 Problem 21 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 5,
        used: false,
        type: "fr",
        text: `Let \\(P(x)\\) be a polynomial with rational coefficients such that when \\(P(x)\\) is divided by the polynomial \\(x^2+x+1\\), the remainder is \\(x+2\\), and when \\(P(x)\\) is divided by
        the polynomial \\(x^2+1\\), the remainder is \\(2x+1\\). There is a unique polynomial of least degree with these two properties. What is the sum of the squares of the coefficients of that polynomial?`,
        solution: `<b>23</b><p>Saying that \\(P(x)\\) has a remainder of \\(x+2\\) when divided by \\(x^2+x+1\\) is to say that multiplying \\(x^2+x+1\\) by some value \\(K\\) (not nescessarily a constant) and adding \\(x+2\\) gets \\(P(x)\\). We can write this as <p>
        $$
        P(x)=(x^2+x+1)(K)+(x+2)
        $$
        <p>We follow the same logic for the second statement:</p>
        $$
        P(x)=(x^2+1)(Y)+(2x+1)
        $$
        <p>Just based off these equations, it's not really possible for \\(K\\) or \\(Y\\) to be constant integers. Instead, we have them be linear functions in the form of \\(x-k\\) and \\(x-y\\). NOTE: In this case, \\(k\\) and \\(y\\) are NOT the same as \\(K\\) and \\(Y\\). We set the two equations equal to each other.</p>
        $$
        (x^2+x+1)(x-k)+(x+2)=(x^2+1)(x-y)+2x+1
        $$
        <p>To find the relation between \\(k\\) and \\(y\\), we set \\(x\\) to \\(0\\)</p>.
        $$
        1-k+2=1-y+1
        $$
        $$
        -k+3=-y+2
        $$
        $$
        y=k-1
        $$
        <p>We substitute this back in</p>
        $$
        (x^2+x+1)(x-k)+(x+2)=(x^2+1)(x-k+1)+(2x+1)
        $$
        <p>Set \\(x=1\\) so that we can see the coefficients and solve for \\(k\\)</p>
        $$
(1^2+1+1)(1-k)+(1+2)=(1^(2)+1)(1-k+1)+(2+1)
        $$
        $$
        k=-1
        $$
        <p>We also know that \\(y=-2\\). We substitute this back into the original equation to find the coefficients:</p>
        $$
        (x^2+x+1)(x+1)+(x+2)=(x^2+1)(x+2)+2x+1 
        $$
        $$
        x^3+2x^2+3x+3
        $$
        <p>Note that we only expand one side because, in theory, they're equal</p>
        <p>Square and add to get the final answer</p>
        $$
        1^2+2^2+3^2+3^2
        $$
        $$
        1+4+9+9
        $$
        23
        $$
        <h3>Solving hint <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        Don't be afraid to just mess around. If you made it to question 21, that's great already, so go with your gut and try to reason things out. The using \\(K\\) and \\(Q\\) isn't nescessarily mathematically founded, it's just a literal interpretation of the question
        `
        ,
        answer: "23",
        topic: "algebraic manipulation",
    },
    {
        title: `AMC 10B 2022 Problem 24 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 5,
        used: false,
        text: `<p>Consider functions \\(f\\) that satisfy</p>
        $$
        |f(x)-f(y)| \\le \\frac{1}{2}|x-y|
        $$
        <p>for all real numbers \\(x\\) and \\(y\\). Of all such functions that also satisfy the equation \\(f(300)\\) = \\(f(900)\\), what is the greatest possible value of</p>
        $$
        f(f(800))-f(f(400))?
        $$
        `,
        type: "mc",
        choices: ["\\(A) 25\\)", "\\(B) 50\\)", "\\(C) 100\\)", "\\(D) 150\\)", "\\(E) 200\\)"],
        answer:  "\\(B) 50\\)" ,
        solution: `<b>50</b><p>The first thing I would do is substitute \\(x\\) and \\(y\\) for \\(x_{1}\\) and \\(x_{2}\\), because in terms of functions, \\(y\\) can get confused for the output, which we don't want. You'll find out why later</p>
        <p>We start by dividng \\(|x_{1}-x_{2}|\\) on both sides, giving us</p>
        $$
        \\frac{|f(x_{1})-f(x_{2})|}{|x_{1}-x_{2}|} \\le \\frac{1}{2}
        $$
        <p>Recall that \\(f(x)\\) is effectively a fancy way of saying \\(y\\), or the output of an input in the graph. Looking at our equation, we see that what we're really looking at is a slope formula, where the change in the output, \\(f(x)\\)  is divided by the input, \\(x\\).</p>
        <p>This is important, because it tells us that at any given point, the absolute value of the slope of \\(f(x)\\) CANNOT be more than \\(\\frac{1}{2}\\)</p>
        <p>Let's now focus on what we're actually trying to solve for. In \\(f(f(800))-f(f(400))\\), \\(f(800)\\) and \\(f(400)\\) are the inputs. That means that</p>
        $$
        \\frac{|f(f(800))-f(f(400)|}{|f(800)-f(400)|} \\le \\frac{1}{2}
        $$
        <p>Just imagine we're taking the slope of the graph of \\(f(f(x))\\)</p>
        <p>We multiply \\(|f(800)-f(400)|\\) on either side, which gives us the equation</p>
        $$
        |f(f(800))-f(f(400)| \\le \\frac{1}{2}|f(800)-f(400)|
        $$
        <p>Recall that \\(|f(800)-f(400)| \\le \\frac{1}{2}(800-400)\\), or \\(|f(800)-f(400)| \\le 200\\)</p>
        <p>We substitute that into \\(|f(f(800))-f(f(400)| \\le \\frac{1}{2}|f(800)-f(400)|\\)  to get \\(|f(f(800))-f(f(400)| \\le  100\\), eliminating two answer choices. </p>
        <p>We now have \\(3\\) answers left. The next step may require you to draw out a graph, but intuition should be fine. We can set \\(f(300)\\) and \\(f(900)\\) to some arbitrary value \\(a\\), which is the same for both. We want the difference between \\(f(800)\\) and \\(f(400)\\) to be as large as possible. We notice that both are
        exactly \\(100\\) away from the input for \\(a\\). Since we want the greatest difference, we want one to be greater than \\(a\\) and one to be smaller. We also want the change from \\(a\\) to \\(f(800/400)\\) to be as large as possible, so we use the largest possible slope, which we know is \\(\\pm \\frac{1}{2}\\). Since the difference is \\(100\\) between \\(300\\) and \\(400\\), we can say the output goes down by
        \\(50\\) and the same for the other two, making the maximum distance \\(100\\). Now, we input that into our equation \\(|f(f(800))-f(f(400))| \\le \\frac{1}{2}|f(800)-f(400)|\\) so we know that the final answer is \\(50\\).</p>
        `,
        topic: "functions", 
    }, 
    {
        title: `AMC 10A 2022 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 1, 
        used: false,
        text: `<p>What is the value of</p>
        $$
        3+\\frac{1}{3+\\frac{1}{3+\\frac{1}{3}}}?
        $$
        `,
        type: "mc",
        choices: ["\\(A) \\frac{31}{10}\\)", "\\(B) \\frac{49}{15}\\)", "\\(C) \\frac{33}{10}\\)", "\\(D) \\frac{109}{33}\\)", "\\(E) \\frac{15}{4}\\)"],
        solution: `<b>\\(\\frac{109}{33}\\)</b><p>This problem is simple enough where you can just brute force it, as follows:</p>
        $$
        3+\\frac{1}{3+\\frac{1}{3+\\frac{1}{3}}}
        $$
        $$
        3+\\frac{1}{3+\\frac{1}{\\frac{10}{3}}}
        $$
        $$
        3+\\frac{1}{3+\\frac{3}{10}}
        $$
        $$
        3+\\frac{1}{\\frac{33}{10}}
        $$
        $$
        3+\\frac{10}{33}
        $$
        $$
        \\frac{109}{33}
        $$
        `,
        answer: "\\(D) \\frac{109}{33}\\)",
        topic: "arithmetic",
    },
    {
    title: `AMC 10A 2022 Problem 2 <span class="material-symbols-outlined staricon">
star
</span>`,
    difficulty: 1,
    used: false,
    text: `Mike cycled \\(15\\) laps in \\(57\\) minutes. Assume he cycled at a constant speed throughout. Approximately how many laps did he complete in the first \\(27\\) minutes?`,
    type: `mc`,
    choices: ["\\(A) 5\\)", "\\(B) 7\\)", "\\(C) 9\\)", "\\(D) 11\\)", "\\(E) 13\\)"],
    solution: `<b>7</b><p>We can denote Mike's speed as \\(s\\), which is equal to the distance he coverd divided by time, or \\(\\frac{15}{57}\\). To find the distance he traveled, we multiply speed by time and solve:</p>
    $$
    \\frac{15}{57} \\cdot 27
    $$
    $$
    \\frac{15}{19} \\cdot 9
    $$
    $$
    \\approx 7
    $$
    `,
    answer: "\\(B) 7\\)",
    topic: "speed-distance-time"
    }, 
    {
        title: `AMC 10A 2022 Problem 3 <span class="material-symbols-outlined staricon">
star
</span>`, 
        difficulty: 3,
        used: false,
        text: `The sum of three numbers is \\(96\\). The first number is \\(6\\) times the third number,
        and the third number is \\(40\\) less than the second number. What is the absolute value ofthe difference beween the 
        first and second numbers?`,
        type: 'fr',
        solution: `<b>5</b><p>Let's call those three numbers, \\(x, y,\\) and \\(z\\), respectively. We have that </p>
        $$
        x+y+z=96
        $$
        $$
        x=6z
        $$
        $$
        z=y-40
        $$
        <p>Since both equations include \\(z\\), let's solve for that:</p>
        $$
        6z+z+40+z=96
        $$
        $$
        8z=56
        $$
        $$
        z=7
        $$
        <p>Continue to solve for \\(x\\) and \\(y\\)</p>
        $$
        x=42
        $$
        $$
        y=47
        $$
        $$
        |42-47|=5
        $$`,
        answer: "5",
        topic: "systems of equations",
    
    },
    {
        title: `AMC 10A 2022 Problem 4 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `In some countries, automobile fuel efficiency is measured in liters per \\(100\\) kilometers while other countries use miles per gallon.
        Suppose that \\(1\\) kilometer equals \\(m\\) miles, and \\(1\\) gallon equals \\(l\\) liters. Which of the following gives the fuel efficiency in liters per \\(100\\) kilometers for 
        a car that gets \\(x\\) miles per gallon?`,
        type: 'mc', 
        choices: ["\\(A) \\frac{x}{100lm}\\)", "\\(B) \\frac{xlm}{100}\\)", "\\(C) \\frac{lm}{100x}\\)", "\\(D) \\frac{100}{xlm}\\)", "\\(E) \\frac{100lm}{x}\\)"],
        solution: `<b>\\(\\frac{100lm}{x}\\)</b><p>We know that a car that gets \\(x\\) miles per gallon needs \\(\\frac{100}{x}\\) gallons to go \\(100\\) miles. If one gallon is equal to \\(l\\) miles, we multiply that by \\(l\\). We now have \\(\\frac{100l}{x}\\), which tells us how many liters it takes to travel \\(100\\) miles. We see only one answer that has \\(100lm\\) in the numerator
        so we know that the answer is \\(\\frac{100lm}{x}\\).`,
        answer: "\\(E) \\frac{100lm}{x}\\)",
        topic: "word problems", 

    },
    {
        title: `AMC 10A 2022 Problem 6 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,     
        text: `<p>Which expression is equal to</p>
        $$
        |a-2-\\sqrt{(a-2)^2}|
        $$
        <p>for \\(a<0\\)?</p>`,
        type: 'mc',
        choices: ["\\(A) 3-2a\\)", "\\(B) 1-a\\)", "\\(C) 1\\)", "\\(D) a+1\\)", "\\(E) 3\\)"],
        solution: `<b>\\(3-2a\\)</b><p>Recognize that \\(-\\sqrt{(a-1)^2}\\) is equal to \\(a-1\\). Add this to \\(a-2\\) and get \\(2a-3\\). The absolute value of this becomes \\(3-2a\\).</p>`,
        answer: "\\(A) 3-2a\\)",
        topic: "absolute value",

    },
    {
        title: `AMC 10A 2022 Problem 11 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`, 
        used: false,
        difficulty: 3,
        text: "Ted mistakenly wrote \\(2^m \\cdot \\sqrt{\\frac{1}{4096}}\\) as \\(2 \\cdot \\sqrt[m]{\\frac{1}{4096}}\\). What is the sum of all real numbers \\(m\\) for which these two expressions have the same value?",
        type: 'fr',
        solution: `<b>7</b><p>Start by rewriting everything with a baes of \\(2\\). We can find the prime factorization of \\(4096\\) and see that it's \\(2^12\\), so \\(\\frac{1}{4096}\\) is \\(2^-12\\). We also know that
        roots havea power of \\(\\frac{1}{x}\\), where x is the degree of the root. With this knowledge, we rewrite the equation as</p>
        $$
        2^m \\cdot 2^-6 = 2 \\cdot 2^(\\frac{-12}{m})
        $$
        <p>Add/subtract the exponents:</p>
        $$
        2^(m-6) = 2^(1-\\frac{12}{m})
        $$
        <p>Since the base is the same, we can ignore it and solve like a typical equation:</p>
        $$
        m-6=1-\\frac{12}{m}
        $$
        $$
        m^2-6m=m-12
        $$
        $$
        m^2-7m+12=0
        $$
        $$
        (m-4)(m-3)
        $$
        <p>The solutions are \\(4\\) and \\(3\\), which sum to \\(7\\).</p>
        `,
        answer: "7",
        topic: "exponents"
    },
    {
        title: `AMC 10A 2022 Problem 20 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`, 
        used: false,
        difficulty: 5,
        text: `A four term sequence is formed by adding each term of a four-term arithmetic sequence of positive integers to the corresponding term of a four-term geometric sequence
        of positive integers. The first three terms of the resulting four-term sequence are \\(57, 60\\) and \\(91\\). What
        is the fourth term in this sequence?`,
        type: "mc",
        choices: ["\\(A) 190\\)", "\\(B) 194\\)", "\\(C) 198\\)","\\(D) 202\\)", "\\(E) 206\\)"],
        answer: "\\(E) 206\\)",
        solution: `<b>206</b><p>By definition, the terms in the arithmetic series can be written as \\(x, x+d, x+2d, x+3d\\), and the terms of the geometric
        series can be written as \\(y, yr, yr^2, yr^3 \\). Thus, the terms of the four term arithmetic series are as follows:</p>
        $$
        x+y=57
        $$
        $$
        x+d+yr=60
        $$
        $$
        x+2d+yr^2=91
        $$
        $$
        x+3d+yr^3=?
        $$
        <p>Subtract the first equation from the second</p>
        $$
        d+y(r-1)=3
        $$
        <p>Do the same for equations 2 and 3</p>
        $$
        d+yr(r-1)=31
        $$
        <p>Now subtract those two</p>
        $$
        y(r-1)^2=28
        $$
        <p>Assuming all of our value sare integers, we find the factors of \\(28\\), which are \\(1, 28, 4\\) and \\(7\\). Since \\(r-1\\) is 
        squared, it must be equal to the square root of one of the square factors, either \\(4\\) or \\(1\\), meaning that \\(r\\) is either \\(2\\) or \\(3\\). We test both of these out:</p>
        <p></p>
        <p>In the case that \\(r=2\\), \\(y=28\\). We test out what this means:</p>
        $$
        x+28=57
        $$
        $$
        x=29
        $$
        $$
        29+d+56=60
        $$
        $$
        d=-25
        $$
        $$
        29-50+28(4)=91
        $$
        <p>This does't work entirely well though, because the rule was that the arithmetic series had to be positive for all values of \\(n\\), and the third term is \\(-46\\). Thus, we use \\(r=3\\) and \\(y=7\\)</p>
        $$
        x+7=57
        $$
        x=50
        $$
        $$
        50+d+21=60
        $$
        $$
        d=-11
        $$
        <p>We substitute all of these values into the final equation we wanted to solve for</p>
        $$
        50-33+189=206
        $$
        `,
        topic: "series",
    },
    {
        title: `AMC 10B Fall 2021 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: "What is the value of \\(1234+2341+3412+4123\\)?",
        solution: `<b>11110</b><p>With something like this, it's simply easier to just brute force your way through. Add the values and find that it is \\(11110\\).</p>
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>If you can brute force it, don't be afraid to. Sometimes, especially towards the start, it's better to get all the easy questions done than to wate time trying to find an eloquent solution.</p>`,
        answer: "11110",
        type: "fr",
        topic: "arithmetic",
    },
    {
        title: `AMC 10B Fall 2021 Problem 3 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficutly: 1,
        text: `The expression \\(\\frac{2021}{2020}-\\frac{2020}{2021}\\) is equal to the fraction \\(\\frac{p}{q}\\) where \\(p\\) and \\(q\\) are positive integers whose greatest common divisor is \\(1\\). What is \\(p\\)?`,
        type: "fr",
        solution: `<b>4041</b><p>This is also a situation where brute forcing may be easier than finding and rationalizing a solution</p>
        $$
        \\frac{2021 \\cdot 2021-2020 \\cdot 2020}{2020 \\cdot 2021}
        $$
        <p>Solve and simplify for an answer of <b>4041</b><p>
        `,
        answer: "4041",
        topic: "arithmetic",
    },
    {
        title: `AMC 10B Fall 2021 Problem 4 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text:`At noon on a certain day, Minneapolis is \\(N\\) degrees warmer than St. Louis. At \\(4:00\\) the temperature in Minneapolis has fallen by 
        \\(5\\) degrees while the temperature in St. Louis has risen by \\(3\\) degrees, at which time the temperatures in the two cities differ by \\(2\\) degrees.
        What is the product of all possible values of \\(N\\).`,
        type: "fr",
        solution: `<b>60</b><p>There are two possibilities: One in which the temperature in St. Louis ends up warmer, and one in which the temperature in Minneapolis ends up warmer.</p>
        <p>Consider the first case: Using pure logic, we know that the temperatures would've had to have started \\(6\\) degrees apart</p>
        <p>In the second case, the temperatures are \\(5+3+2=10\\) degrees apart</p>
        <p>\\(6 \\cdot 10 = 60\\)</p>`,
        answer: "60",
        topic: "logic",
    },
    {
        title: `AMC 10B Fall 2021 Problem 9 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `The knights in a certain kingdom come in two colors. \\(\\frac{2}{7}\\) of them are red, and the rest are blue. Furthermore, \\(\\frac{1}{6}\\) of the knights are magical, 
        and the fraction of red knights who are magical is \\(2\\) times the fraction of blue knights who are magical. What fraction of red knights are magical?`,
        type: "mc",
        choices: ["\\(A) \\frac{2}{9}\\)", "\\(B) \\frac{3}{13}\\)", "\\(C) \\frac{7}{27}\\)", "\\(D) \\frac{2}{7}\\)", "\\(E) \\frac{1}{3}\\)"],
        solution: `<b>\\(\\frac{7}{27}\\)</b><p>Let's call \\(r\\) the fraction of red knights that are magical and \\(b\\) the fraction of blue knights that are magical. If \\(\\frac{2}{7}\\) of all the knights are red, then
        we know that \\(\\frac{2}{7}r\\) is equal to the fraction of knights that are both red and magical. We use the same logic to find that the fraction of knights that are blue and magical is equal to \\(\\frac{5}{7}b\\) (\\(1-\\frac{2}{7}=\\frac{5}{7}\\) of
        the knights are blue. Since \\(\\frac{1}{6}\\) of the knights are magical</p>
        $$
        \\frac{2}{7}r + \\frac{5}{7}b=\\frac{1}{6}
        $$
        <p>The problem also gives us that \\(r=2b\\). We sbustitute this in.</p>
        $$
        \\frac{4}{7}b+\\frac{5}{7}b=\\frac{1}{6}
        $$
        $$
        \\frac{9}{7}b=\\frac{1}{6}
        $$
        $$
        b=\\frac{7}{54}
        $$
        $$
        a=2 \\cdot \\frac{7}{54}
        $$
        $$
        a=\\frac{7}{27}
        $$
        `,
        answer: "\\(C) \\frac{7}{27}\\)",
        topic: "word problems",
    },
    {
        title: `AMC 10B Fall 2021 Problem 22 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 5,
        used: false,   
        text: `For each integer \\(n \\ge 2\\), let \\(S_{n}\\) be the sum of all products \\(jk\\), where \\(j\\) and \\(k\\) are integers and
        \\(1 \\le j < k \\le n\\). What is the sum of the \\(10\\) least values of \\(n\\) such that \\(S_{n}\\) is divisible by \\(3\\)?`,
        type: "mc",
        choices: ["\\(A) 196\\)", "\\(B) 197\\)", "\\(C) 198\\)", "\\(D) 199\\)", "\\(E) 200\\)"],
        solution: `<b>197</b><p>Let's start with a few basic values for \\(S_{n}\\) and try to find a pattern. We are given that \\(n \\ge 2\\), so start at \\(n=2\\). The only possible values for \\(j\\) and \\(k\\)
        here are \\(1\\) and \\(2\\), respectively. Thus, the value of \\(S_{2}\\) is \\(2\\).</p>
        <p> Let's now consider if \\(n\\) is equal to \\(3\\). The possible values for \\(j\\) are \\(1\\) and \\(2\\) and the possible values for \\(k\\) are \\(2\\) and \\(3\\). This means that \\(S_{3}\\) would be equal to \\((1 \\cdot 2\\) + (1 \\cdot ) + (2 \\cdot 3)\\). Since \\(1 \\cdot 2\\) is equal to \\(S_{2}\\) and \\((1 \\cdot 3) + (2 \\cdot 3)\\) can be rewritten as \\(3(1+2)\\), we can rewrite
        \\(S_{3}\\) as \\(S_{2}+3(1+2)\\).</p>
        <p>By trying a few more values of \\(n\\), or also just considering pure logic, we can effectively create the conjecture that \\(S_{n} = S_{n-1}+n\\)(sum of all integers less than \\(n\\)).</p>
        <p>We then proceed to rewrite this equation as \\(S_{n}=S_{n-1}+\\frac{(n-1)n^2}{2}\\) using the formula for an arithmetic series. If you don't understand why, just imagine \\(1+2+3+4...\\) to be an arithmetic series that gets multiplied by \\(n\\).</p>
        <p>We then proceed to do some modular arithmetic. We discount \\(S_{n-1}\\) and only focus on the \\(\\frac{(n-1)n^2}{2}\\), because that's the only part that will end up actually affecting our remainder. I can't create a table here, but 
        if you start at \\(2\\), and keep finding values, we realize that a pattern emerges. The remainder's grow by \\(+0, +0, +2\\), and then that cycle repeats. Remember that the only possible remainders are \\(0,1,\\) and \\(2\\), and it loops around after that.</p>
        <p>We use that pattern to find the values of \\(n\\) that make \\(S_{n}\\) divisible by \\(3\\) are \\(8, 9, 10, 17, 18, 19, 26, 27, 28, 35\\), which sum to \\(197\\).`,
        answer: "\\(B) 197\\)",
        topic: "modular arithmetic"
    },
    {
        title: `AMC 10A Fall 2021 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `What is the value of \\(\\frac{(2112-2021)^2}{69}\\)?`,
        type: "fr",
        solution: `<b>49</b><p>This is a simple enough equation to solve by brute force:</p>
        $$
        \\frac{(91)^2}{169}
        $$
        $$
        \\frac{8281}{169}
        $$
        $$
        49
        $$
        <p>Another solution, however, is to realize that \\(91=13 \\cdot 7\\), and \\(169=13^2\\), so when you square \\(91\\), the \\(13^2\\) cancels out and you end 
        up with \\(7^2\\).</p>`,
        answer: "49",
        topic: "arithmetic",
    },
    {
        title: `AMC 10A Fall 2024 Problem 4 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `Mr. Lopez has a choice of two routes to get to work. Route A is \\(6\\) miles long, and his average speed along this route is \\(30\\) miles per hour. Route
        B is \\(5\\) miles long, and his average speed along this route is \\(40\\) miles per hour, except for a \\(\\frac{1}{2}\\) mile stretch in a school zone
        where his average speed is \\(20\\) miles per hour. By how many minutes is Routbe B quicker than Route A?`,
        type: "mc",
        choices: ["\\(A) 2\\frac{3}{4}\\)", "\\(B) 3\\frac{3}{4}\\)", "\\(C) 4\\frac{1}{2}\\)", "\\(D) 5\\frac{1}{2}\\)", "\\(E) 6\\frac{3}{4}\\)"],
        solution: `<b>\\(3 \\frac{3}{4}\\)</b><p>Since speed is equal to distance divided by time, we can use Mr. Lopez's speed and the length of Route A to find the total time it takes him:</p>
        $$
        s=\\frac{d}{t}
        $$
        $$
        st=d
        $$
        $$
        t=\\frac{d}{s}
        $$
        $$
        t=\\frac{6}{30}
        $$
        $$
        t=\\frac{1}{5}
        $$
        <p>\\(\\frac{1}{5}\\) of an hour is \\(12\\) minutes.</p>
        <p>Route B is more complex. Since there are two different speeds and "sections" we'll calculate the speed it takes to traverse either of those and add it</p>
        <p>We know that the route is a total of \\(5\\) miles, and without the \\(\\frac{1}{2}\\), it is \\(\\frac{9}{2}\\). We use the same equation:</p>
        $$
        t=\\frac{\\frac{9}{2}}{40}
        $$
        $$
        t=\\frac{9}{80}
        $$
        <p>That's roughly \\(6\\frac{3}{4}\\) minutes.</p>
        <p>With the slower section we calculate</p>
        $$
        t=\\frac{\\frac{1}{2}}{20}
        $$
        $$
        t=\\frac{1}{40}
        $$
        <p>That's equal to \\(\\frac{3}{2}\\) minutes. We add the values together and get a total of \\(8 \\frac{1}{4}\\).</p>
        $$
        \\frac{48}{4}-\\frac{33}{4}
        $$
        $$
        \\frac{15}{4}
        $$
        $$
        3 \\frac{3}{4}
        $$
        `,
        answer: "\\(B) 3\\frac{3}{4}\\)",
        topic: "speed-distance-time"
    },
    {
        title: `AMC 10A Fall 2021 Problem 6 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `Elmer the emu takes\\(44\\) equal strides to walk between consecutive telephone poles on a rural road. Oscar the ostritch can cover the same distance in \\(12\\) equal leaps.
        The telephone poles are evenly spaced, and the \\(41\\)st pole along this road is exactly one mile ((\\5280\\) feet) from the first pole. How much longer, in feet, is Oscar's leap than Elmer's stride?`,
        type: "fr",
        solution: `<b>8</b><p>We want to find the length of each type of movement, first. To do this, we find the distance between each phone pole. Keep in mind that we shouldn't be dividing \\(5280\\) by \\(41\\), we should divide it by \\(40\\). This is because there's only \\(40\\) "spaces" between the \\(41\\) poles.</p>
        $$
        5280 \\div 40 = 132
        $$
        <p>Divide \\(132\\) by the amount of respective increments of movement it takes to find the total length of each one</p>
        $$
        132 \\div 44 = 3
        $$
        $$
        132 \\div 12 = 11
        $$
        <p>Subtract</p>
        $$
        11-3 = 8
        $$
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Make sure you remember to divide by \\(40\\), not \\(41\\). If you want to check why it is \\(40\\), try drawing \\(3\\) lines. Notice that there are 
        \\(2\\) spcaes contained within them, not \\(3\\). This occurs because in order for a "space" to be formed, it needs to be confined on both sides, meaning the last line doesn't have something
        to confine the space attatched to it.</p>
        `,
        answer: "8",
        topic: "word problems",
    },
    {
        title: `AMC 10A Fall 2021 Problem 11  <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`, 
        used: false,
        difficulty: 3,
        text: `Emily sees a ship traveling at a constant speed along a straight section of a river. She walks parallel to the riverbank at a uniform rate faster than 
        the ship. She counts \\(210\\) equal steps walking frm the back of the ship to the front. Walking in the opposite direction, she counts \\(42\\) steps of the same
        size from the front of the ship to the back. in terms of Emily's equal steps, what is the length of the ship?`,
        solution: `<b>70</b><p>Let's call the length of the ship \\(x\\). We know that when she's walking from the back to the front of the ship, she walks \\(210\\) steps. The ship, in turn, moves by \\(210-x\\) steps. This is because both Emily and the ship are moving together, at the same time, but not by the same distance.
        The ship does not have to clear it's own lenght, but Emily does. Thus Whatever the distance that she walks is the distance of the ship plus \\(x\\), so the ship travels \\(210-x\\) steps. We use the same logic to find that when she walks from front to back, she walks \\(42\\) steps and the ship moves by \\(x-42\\) steps.</p>
        <p>The speeds of the ship and Emily remain constant, and thus so does the ratio between them. We set up the following equation and solve:</p>
        $$
        \\frac{210}{210-x} = \\frac{42}{x-42}
        $$
        $$
        210(x-42)=42(210-x)
        $$
        $$
        210x-8820=8820-42x
        $$
        $$
        252x=17640
        $$
        $$
        x=70
        $$`,
        answer: "70",
        topic: "word problems",
    },
    {
        title: `AMC 10A Fall 2021 Problem 14 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 3, 
        answer: "5",
        text: `<p>How many ordered pairs \\((x,y)\\) of real numbers satisfy the following system of equations?</p>
        $$
        x^2+3y=9
        $$
        $$
        (|x|+|y|-4)^2=1
        $$
        `,
        solution: `<b>5</b><p>The arguably simplest option would be graphing. The first equation is a parabola. Rearrange the terms so that y is isolated and sketch out a rough draft.</p>
        $$
        3y=-x^2+9
        $$
        $$
        y=\\frac{-x^2}{3} + 3
        $$
        <p>Graph this out. Be careful and try to be as accurate as possible, especially when finding the vertex.</p>
        <p>For the second equation, we square both sides and then solve through algebraic manipulation</p>
        $$
        |x|+|y|-4= \\pm 1
        $$
        $$
        |x| + |y|  = 3
        $$
        $$
        OR
        |x| + |y| = 5
        $$
        <p>Using our knowledge of absolute value graphs, we know this forms two diamonds. The top of the inner diamond intersects with the vertex of the parabola, and the sides intersect with the parabola in four other places,
        meaning that there are \\(5\\) values for \\((x,y)\\).</p>
        <h3>Common  Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>If you do chose to graph, be as careful as you can with graphing things, because, especially when looking for solutions, you need as much to be accurate as possible</p>`,
        topic: "graphing",
    },
    {
        title: `AMC 10A Fall 2021 Problem 16<span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `<p>The graph of</p>
        $$
        f(x) = |\\lfloor x \\rfloor | - | \\lfloor 1 - x \\rfloor |
        $$
        <p>is synmetric about which of the following? (Here \\(\\lfloor x \\rfloor\\) is the greatest integer not exceeding \\(x\\).)</p>`,
        type: "mc",
        choices: ["\\(A)\\) the \\(y\\)-axis", "\\(B)\\) the line \\(x=1\\)", "\\(C)\\) the origin", "\\(D)\\) the point \\((\\frac{1}{2}, 0)\\)"," \\(E)\\) the point \\((0,0)\\)" ],
        solution: `<b>the point \\((\\frac{1}{2}, 0)\\)"</b><p>Evaluate the terms seperately. We know that \\(\\lfloor x \\rfloor \\) is symetric about the origin . However, when we take the absolute value of that, function, the resulting image is similar to combining the floor function and the
        absolute value function. Essentially, we keep everything in Quadrant 1 and make it symetric about the \\(y\\)-axis instead.</p>
        <p>For \\(-| \\lfloor 1-x \\rfloor |\\) we follow the same process and attempt to conceptualize how it looks. \\(\\lfloor 1-x \\rfloor \\) is just the standard floor function with a negative slope and shifted to the right. 
        Taking the absolute value of this, however, has the same effect it did on \\(\\lfloor x \\rfloor \\). We end up with a graph that looks almost exactly the same. That being said, what changes is the values that are included. If we were to graph this, the lines would be of the same length, and at the same places. However,
        when we actually think about it, the endpoints, (circles that are filled or unfilled) are reversed. When we subtract the two equations, we don't end up with \\(0\\), but a set of values that are above and below the y intercept, centered around point \\(\\frac{1}{2}\\).`,
        answer: "\\(D)\\) the point \\((\\frac{1}{2}, 0)\\)",
        topic: "floor function",
    },
    {
        title: `AMC 10A Fall 2021 Problem 20 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`, 
        used: false,
        difficulty: 5,
        text: `For how many ordered pairs \\((b,c)\\) of positive integers does neither \\(x^2+bx+c=0\\) nor \\(x^2+cx+b=0\\) have two distinct real solutions?`,
        used: false,
        type: "fr",
        solution: `<b>6</b><p>We use the discriminant of a quadratic equation: \\(b^2-4ac\\). Let's change \\(b\\) and \\(c\\) values in the question to \\(n\\) and \\(m\\) to avoid confusiion.<p>
        <p>For the first equation:</p>
        $$
        n^2-4m \\le 0
        $$
        <p>For the second equation:</p>
        $$
        m^2-4n \\le 0
        $$
        <p>From here on out, there's a lot of ways you can solve it. You can either graph and see what matches, or do casework to find different possibilities. Since all you're doing is solving for integers that solve the inequality, I figure it's easy enough and there's enough
        ways to do it to not go too far into depth. Effectively, however, you can just test out a few basic values for \\(n\\) and \\(m\\) and get the solutions: \\((1,1), (1,2), (2,1), (2,2), (3,3), (4,4)\\), which is 6 possible ordered pairs. `,
        answer: "6",
        topic: "discriminant",
    },
    {
        title: `AMC 10B Spring 2021 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `How many integer values of \\(x\\) satisfy \\(|x| < 3\\pi\\)?`,
        solution: '<b>19</b><p>We know that \\(3 \\pi \\approx 9\\). Thus, \\(x\\) can be all values between \\(-9\\) and \\(9\\), inclusive. We count or just use logic and find that there are \\(19\\) such values</p>',
        answer: "19",
        topic: "inequalities",
        type: "fr",
    },
    {
        title: `AMC 10B Spring 2021 Problem 2 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        type: "mc",
        choices: ["\\(A) 0\\)", "\\(B) 4\\sqrt{3} -6 \\)", "\\(C) 6\\)", "\\(D) 4 \\sqrt{3}\\)", "\\(E) 4\\sqrt{3} +6 \\)" ],
        text: `What is the value of \\(\\sqrt{(3-2\\sqrt{3})^2}+\\sqrt{(3+2\\sqrt{3})^2}\\)?`,
        answer: "\\(D) 4 \\sqrt{3}\\)",
        solution: `<b>4 \\sqrt{3}</b><p>At first, it may seem intuitive to ignore the squaring and root and just solve, because those take the inverses, right? Not exactly.</p>
        <p>Recall that squaring makes everything positive. We first need to check if anything is negative, because that will affect the result.</p>
        <p> \\(\\sqrt{3}\\) is slightly more than \\(1.5\\), meaning that \\(2\\sqrt{3}\\) is greater than \\(3\\). The squared value in the first term is negative. Squaring this and taking the square root gives the absolute value instead, which is 
        \\(2\\sqrt{3}-3\\). \\(3+2\\sqrt{3}\\) remains the same when squared and taken the root of, so we just add and get a final answer of \\(4\\sqrt{3}\\).</p>
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>If it sounds like a trick question, chances are that it is. Think through things carefuly and recall what squaring and other such things really does, aside from what is obvious</p>`,
        topic: "exponents",
    },
    {
        title: `AMC 10B Spring 2021 Problem 3 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `In an after-school program for juniors and seniors, there is a debate team with equal numbers of students from each class on team. Among \\(28\\) students in the program,
        \\(25%\\) of juniors and \\(10%\\) of the seniors are on the debate team. How many juniors are in the program?`,
        type: "fr",
        solution: `<b>8</b><p>The debate team has equal amounts of juniors and seniors. We know that if \\(j\\) is equal to the number of juniors, and \\(s\\) is equal to the number of seniors, han \\(0.25j=0.1s\\), and \\(j+s=28\\). We solve 
        this as a system of equations</p>
        $$
        s=28-j
        $$
        $$
        0.25j=2.8-0.1j
        $$
        $$
        0.35j=2.8
        $$
        $$
        j=8
        $$`,
        answer: "8",
        topic: "systems of equations",
    },
    {
        title: `AMC 10B Spring 2021 Problem 4 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `At a math contest, 57 students are wearing blue shirts, and another 75 students are wearing yellow shirts. The 132 students are assigned into 66 pairs. 
        In exactly 23 of these pairs, both students are wearing blue shirts. In how many pairs are both students wearing yellow shirts?`,
        type: `fr`,
        solution: `<b>32</b><p>If there are \\(23\\) pairs where both students are wearing blue shirts than, alltogether, those students are wearing \\(23 \\cdot 2 = 46\\) blue shirts. The rest of the blue shirts must be worn with yellow
        shirts, so there are \\(57-46=11\\) pairs with one blue and one yellow. We've accounted for \\(23+11=34\\) pairs, so the remaining \\(32\\) must both be wearing yellow shirts.`,
        answer: "32",
        topic: "word problems",
    },
    {
        title: `AMC 10B Spring 2021 Problem 6 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `Mr. Blackwell gives an exam to two classes. The mean of the scores of the students in the morning class is \\(84\\), and the afternoon class's mean score is \\(70\\). The ratio of the number of students in the 
        morning class to the number of students in the afternoon class is \\(\\frac{3}{4}). What is the mean of the scores of all the students.`,
        type: `fr`,
        solution: `<b>76</b><p>Note that we don't actually have to solve for how many students there are in each class, or how each student scored. We just need to use the ratio. Using intuition and logic, we set up the equation</p>
        $$
        \\frac{(84 \\cdot 3) + (70 \\cdot 4)}{7}
        $$
        <p>Solving gives <b>76</b><p>`,
        answer: "76",
        topic: "averages",
    },
    {
        title: `AMC 10B Spring 2021 Problem 15 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `The real number \\(x\\) satisfies the equation \\(x+ \\frac{1}{x} = \\sqrt{5}\\). What is the value of \\(x^11-7x^7+x^3)?`,
        type: `mc`,
        choices: ["\\(A) -1\\)", "\\(B) 0\\)", "\\(C) 1\\)", "\\(D) 2\\)", "\\(E) \\sqrt{5} \\)"],
        solution: `<b>0</b><p>We start by factoring \\(x^3\\) out of the equation we are solving for, which gives us \\(x^3(x^8+7x^4+1)\\). We then take the equation
        \\(x+ \\frac{1}{x}=\\sqrt{5}\\) and manipulate it so that we can get a value for \\(x^2\\).</p>
        $$
        x=\\sqrt{5}-\\frac{1}{x}
        $$
        $$
        x^2=\\sqrt{5}x-1
        $$
        <p>Square this to get x^4</p>
        $$
        x^4=5x^2-2\\sqrt{5}x+1
        $$
        <p>We know what \\(x^2\\) is, so we substitute that in to simplify:</p>
        $$
        x^4=5\\sqrt{5}x-5-2\\sqrt{5}+1
        $$
        $$
        x^4=3\\sqrt{5}x-4
        $$
        <p>We square this again to solve for \\(x^8\\)</p>
        $$
        x^8=45x^2-24\\sqrt{5}x+16
        $$
        $$
        x^8=45\\sqrt{5}x-45-24\\sqrt{5}+16
        $$
        $$
        x^8=21\\sqrt{5}x-29
        $$
        <p>We substitute these in</p>
        $$
        x^3(21\\sqrt{5}x-29-7(3\\sqrt{5}x-4)+1)
        $$
        $$
        x^3(21\\sqrt{5}x-29-21\\sqrt{5}+28+1)
        $$
        $$
        x^3(0)=0
        $$
        ` ,
        answer: "0",
        topic: "algebraic manipulation",
    },
    {
        title: `AMC 10B Spring 2021 Problem 19 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 4,
        text: `Suppose that \\(S\\) is a fininte set of positive integers. If the greatest integer in \\(S\\) is removed from \\(S\\), then the average value (arithmetic mean) of the integers
        remaining is \\(32\\). If the least integer in \\(S\\) is also removed, then the average value of the integers remaining is \\(35\\). If the greatest integer is then returned to the set, the average
        value of the integers rises to \\(40\\). The greatest integer in the original set of \\(S\\) is \\(72\\) greater than the least integer \\(S\\). What is the average value
        of all the integers in the set of \\(S\\)?`,
        solution: `<b>36.8</b><p>Call the sum of all values in \\(S\\), \\(s\\). Call the largest value \\(x\\) and the smallest value \\(y\\). Call the number of values in \\(S\\), \\(n\\). We can set up the following equations:</p>
        $$
        \\frac{s-x}{n-1}=32
        $$
        $$
        \\frac{s-x-y}{n-2}=35
        $$
        $$
        \\frac{s-y}{n-1}=40
        $$
        $$
        x-y=72
        $$
        <p>We are solving for \\(\\frac{s}{n}\\)</p>
        <p>Solve</p>
        $$
        s-x=32n-32
        $$
        $$
        s-x-y=35n-70
        $$
        $$
        s-y=40n-40
        $$
        $$
        (s-y)-(s-x)=x-y
        $$
        $$
        40(n-1)-32(n-1)=72
        $$
        $$
        (40-32)(n-1)=72
        $$
        $$
        8n-8=72
        $$
        $$
        n=10
        $$
        $$
        s-x=288
        $$
        $$
        s-y=360
        $$
        $$
        s-x-y=280
        $$
        $$
        s-(s-288)-(s-360)=280
        $$
        $$
        s=368
        $$
        $$
        \\frac{368}{10}=36.8
        $$
        `,
        topic: "algebraic manipulation",
        answer:"36.8",
    },
    {
        title: `AMC 10A 2021 Spring Problem 2 <span class="material-symbols-outlined staricon">
star
</span>`,
        difficutly: 2,
        used: false,
        text: `Portia's high school has \\(3\\) times as many students as Lara's high school. The two high schools have a total of 
        \\(2600\\) students. How many students does Portia's highschool have?`,
        solution: `<b>1950</b><p>Call the number of students at Portia's highschool \\(p\\) and the number of students at Lara's highschool \\(l\\). We set up the following system of equations and solve:</p>
        $$
        p=3l
        $$
        $$
        2600=p+l
        $$
        $$
        2600=4l
        $$
        $$
        l=650
        $$
        $$
        p=1950
        $$
        `,
        answer: "1950",
        topic: "systems of equations"
    },
    {
        title: `AMC 10A 2021 Spring Problem 4 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `A cart rolls down a hill, traveling \\(5\\) inches the first second and accelerating so that during each successive \\(1\\) second time interval, it travels \\(7\\) inches more than during the previous \\(1\\) second interval.
        The card takes \\(30\\) seconds to reach the bottom of the hill. How far, in inches, does it travel?`,
        type: 'fr',
        solution: `<b>3195</b>Notice that the distance the cart travels each second can be expressed using an arithmetic sequence with \\(d=7\\) and \\(a_{1}=5\\). The total distance traveled is the sum of the arithmetic sequence. </p>
        <p>The last term can be written as \\(7(29)+5\\), because \\(7\\) is added \\(29\\) times (the first term is discounted). We solve this and know that the final value is \\(208\\).</p>
        <p>Using the equation for the sum of an arithmetic series, we find</p>
        $$
        S_{30}=30 \\frac{208+5}{2}
        $$
        $$
        S_{30}=30 \\cdot 106.5
        $$
        $$
        S_{30}=3195
        $$`,
        answer: "3195",
        topic: `series`,
    },
    {
        title: `AMC 10A 2021 Spring Problem 5 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `The quiz scores of a class with \\(k>12\\) students have  a mean of \\(8\\). The mean of a collection of \\(12\\) of these quiz scores is \\(14\\). What is the mean of the reamining 
        quiz scores in terms of \\(k\\)?`,
        solution: `<b></b><p>We know that the sum of the \\(12\\) scores who averaged \\(14\\) is \\(12 \\cdot 14 = 168). Likewise, we know that the sum of all of the tests is \\(8k\\). The average of the reamining tests is the sum of the remaining test scores divided by \\(k-12\\).</p>
        <p>The sum of the remaining test scores can be expressed as \\(8k-168\\), or the total minus the ones that were counted in the average of the \\(12\\). We know the number of remaining tests is equal to \\(k-12\\), so we set that up as a fraction:</p>
        $$
        \\frac{8k-168}{k-12}
        $$`,
        type: "mc",
        choices: [ `\\(A) \\frac{14-8}{k-12} \\)`,  `\\(B) \\frac{8k-168}{k-12} \\)`,  `\\(C) \\frac{14}{2}-\\frac{8}{k} \\)`,  `\\(D) \\frac{14(k-12)}{k^2} \\)`,  `\\(E) \\frac{14(k-12)}{8k} \\)`],
        answer: `\\(B) \\frac{8k-168}{k-12} \\)`,
        topic: `algebraic manipulation`,
    },
    {
        title: `AMC 10A Spring 2021 Problem 6 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `Chantal and Jean start hiking from a trailhead toward a fire tower. Jean is wearing a heavy backpack and walks slower. Chantal starts walking at \\(4\\) miles per hour. Halfway to the tower, the trail
        becomes really steep, and Chantal slows down to \\(2\\) miles per hour. After reaching the tower, she immediately turns around and descends the steep part of the trail at \\(3\\) miles per hour. She meets Jean at the halfway point.
        What was Jean's average speed, i nmiles per hour, until they met.`,
        type: "mc",
        choices: ["\\(A) \\frac{12}{13}\\)", "\\(B) 1\\)", "\\(C) \\frac{13}{12}\\)", "\\(D) \\frac{24}{13}\\)", "\\(E) 2\\)"],
        solution: `<b>\\(\\frac{12}{13}\\)</b>Recall that speed is the ratio between distance and time. Since there are no constraints on either, we can set distance or time to whatever we want and solve for the other value. That being said, we want our answer to be as simple as possible. To me, that means
        using whole numbers. We know that we're dealing with a fraction, so let's make the distance the LCM of \\(2\\), \\(4\\), and \\(6\\), which is \\(12\\). Since the path is split in half, each half can be \\(12\\) miles, with the total length being \\(48\\) miles. We know the first leg takes \\(\\frac{12}{4}=3\\) hours, going uphill the second half takes \\(\\frac{12}{2}=6\\) hours, and going downhill it takes \\(\\frac{12}{3}=4\\) hours for a total length of \\(3+6+4=13\\) hours. </p>
        <p>Jean has thus traveled \\(12\\) miles for \\(13\\) hours with a total speed of \\(\\frac{12}{13}\\).</p>
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Don't be afraid to take advantage of the ambiguity of the problem. Because we know we ar dealing with ratios of which we are not given. We use this wisely and intentionaly to make the values easier for us to use and understand.</p>`,
        answer: "\\(C) \\frac{13}{12}\\)",
        topic: `speed-distance-time`,
    },
    {
        title: `AMC 10A Spring 2021 Problem 9 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `What is the least possible value of \\((xy-1)^2+(x+y)^2\\) for real numbers \\(x\\) and \\(y\\)?`,
        type: `mc`,
        choices: ["\\(A) 0\\)", "\\(B) \\frac{1}{4}\\)", "\\(C) \\frac{1}{2}\\)", "\\(D) 1\\)", "\\(E) 2\\)"],
        solution: `<b>1</b><p>Since all square must be \\(\\ge 0\\), we know that the onlyway for the answer to be \\(0\\) would be if both terms were equal to \\(0\\). This isn't possible, as we can tell by simply attempting to solve.</p>
        <p>If I'm being honest, I would've picked the answer to be \\(1\\) based on basic intuition, but let's prove that. First, expand:</p>
        $$
        xy^2-2xy+1+x^2+2xy+y^2
        $$
        $$
        xy^2+x^2+y^2+1
        $$
        $$
        x^2(y^2+1)+(y^2+1)
        $$
        $$
        (x^2+1)(y^2+1)
        $$
        <p>Since squares can never be negative, the lowest value for each factor is \\(0^2+1=1\\). Thus, the lowest possible value is \\(1\\).
        `,
        answer: "\\(D) 1\\)",
        topic: "algebraic manipulation",
    },
    {
        title: `AMC 10A Spring 2021 Problem 13 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`, 
        used: false,
        difficulty: 3,
        text: `All the roots of the polynomial \\(z^6-10z^5+Az^4+Bz^3+Cz^2+Dz+16\\) are positive integers, possibly repeated. What is the value of \\(B\\)?`,
        solution: `<b></b><p>By Vieta's rules, we know that the product of all \\(6\\) factors is \\(10\\). If this intuition doesn't make sense, try messing around with basic quadratics and factoring for a bit.</p>
        <p>We find the prime factorization of \\(16\\), which ends up being \\(2^4\\), so there are \\(5\\) factors to work with these being \\(1, 2, 4, 8,\\) and \\(16\\).</p>
        <p>By Vieta's rules we also know that the factors sum to \\(10\\). Recall that factors can repeat. Using this, we try to find a way to get to \\(10\\) using these \\(5\\) factors a total of \\(6\\) times</p>
        $$
        2+2+2+2+1+1
        $$
        <p>That works, so let's use it for now. The equation, when factored, becomes</p>
        $$
        (x-1)^2(x-2)^4
        $$
        <p>At this point, you can just expand and get</p>
        $$
        z^6-10z^5+41z^4-88z^3+104z^2-64z+16
        $$
        <p>Referring back to our original equation, we see that \\(B=-88\\)</p>`,
        answer: "-88",
        topic: "factoring",
    },
    {
        title: `AMC 10A 2021 Spring Problem 16 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficutly: 4,
        text: `<p>In the following list of numbers, the integer \\(n\\) appears \\(n\\) times in the list for \\(1 \\le n \\le 200\\).</p>
        $$
        1, 2, 2, 3, 3, 3, 4, 4, 4, 4,  ..., 200, 200, ..., 200
        $$
        <p>What is the median of the numbers on this list?</p>`,
        type: `mc`,
        choices: ["\\(A) 100.5\\)", "\\(B) 134 \\)", "\\(C) 142\\)", "\\(D) 150.5\\)", "\\(E) 167\\)"],
        solution: `<b>142</b><p>When we say a number is the median, it meens it divides the set into two. Recall the equation for the sum of all numbers \\(\\frac{n(n+1)}{2}\\).</p>
        <p>Using this, the total number of items in the list is \\(\\frac{200 \\cdot 201}{2}=20100\\). We want to divide this set so that the number of numbers less than the median is equal to that above the median.
        Notice that since the number of items is even, the median will be between two numbers.</p>
        <p>We set up the equation \\(\\frac{x(x+1)}{2}=10050\\), because the sum of numbers less than \\(x\\), which is equal to the number of items in the list, should be half of the set. Notice that you can't have it be exact, nescessarily, because
        each number happens multiple times.</p>
        <p>Solve</p>
        $$
        x^2+x=20100
        $$
        $$
        x^2+x-20100
        $$
        <p>By Vieta's rules, we know that the the factors of the equation, when factoring, must multiply to \\(-20100\\) and sum to \\(1\\). We're looking for something 
        close to the square root. We don't have the luxury of a calculator, but what we can do is use the answer choices to approximate.</p>
        <p>Right off the bat, we know that \\(100.5\\) would be too low because \\(100^2=10000\\). \\(134^2=17956\\), still too low, \\(142^2=20164\\), which is as close as we can get.</p>
        <p>It's not exact because we know that there are multiple items valued at \\(142\\), but we can still count that as our answer.</p>
        <p><b>Solution by Khang Pham</b></p>
        <p>We can see \\(n\\) repeat \\(n\\) times from \\(1\\) to \\(200\\), which means the number of numbers is the sum of the integers from \\(1\\) to \\(200\\). We use \\(S_{200}=200 \\frac{1+200}{2}=100 \\cdot 201 = 20100\\).</p>
        <p>With this knowledge, we can find that the median is going to be the average of the \\(10500\\)th and \\(10501\\)th numbers. Now, we look for a number such that \\(S_{n}\\) is close to \\(10500\\). We solve for \\(10500 = n \\frac{n+1}{2}\\). Solving gives \\(n=141.27\\). We round up though, because the sum needs to be at least \\(10500\\). Thus we have 
        \\(142\\) in position \\(10500\\). We realize that the next value also cannot be \\(143\\) because it's not close enough, so both values are \\(142\\) for a median of \\(142\\)`,
        answer: "\\(C) 142\\)",
        solution: "word problems",
        topic: `series`,
    },
    {
        title: `AMC 10A 2021 Spring Problem 18 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`, 
        used: false,
        difficulty: 4,
        type: 'mc',
        choices: ["\\(A) \\frac{17}{32}\\)", "\\(B) \\frac{11}{16}\\)", "\\(C) \\frac{7}{9}\\)", "\\(D) \\frac{7}{6}\\)", "\\(E) \\frac{25}{11}\\)"],
        text: `Let \\(f\\) be a function defined on the set of positive rational numbers with the property that \\(f(a \\cdot b) = f(a)+f(b)\\) for all the 
        possitive rational numbers \\(a\\) and \\(b\\). Suppose that \\(f(p)=p\\) for every prime number \\(p\\). For which of the following numbers \\(x\\) is \\(f(x)<0\\)?`,
        solution: `<b>\\(\\frac{25}{11}\\)</b><p>Since all of these answer choices are \\(f (\\frac{\\textup{numerator}}{\\textup{denominator}}) \\), we can rewrite \\(f (\\textup{numerator} )= f ( \\frac{\\textup{numerator}}{\\textup{denominator}} \\cdot \\textup{denominator})) \\). We use this for the answer choices and try to solve.</p>
        $$
        f(17) = f ( \\frac{17}{32} \\cdot 32)
        $$
        $$
        17 = f (\\frac{17}{32}) + f(32)
        $$
        $$
        17 = f (\\frac{17}{32}) + f(2)+f(2)+f(2)+f(2)+f(2)
        $$
        $$
        17 = f (\\frac{17}{32}) + 10
        $$
        $$
        f (\\frac{17}{32}) = 7
        $$
        $$
        f(11) = f ( \\frac{11}{16} \\cdot 16)
        $$
        $$
        11 =   f(\\frac{11}{16}) + 2+2+2+2
        $$
        $$
        f(\\frac{11}{16}) = 3
        $$
        <p>We repeat this process and eventually end up with</p>
        $$
        f(25)=f ( \\frac{25}{11} \\cdot 11)
        $$
        $$
        5+5 = f(\\frac{25}{15}) + 11
        $$
        $$
        f(\\frac{25}{15}) = -1       `,
        answer: "\\(E) \\frac{25}{11}\\)",
        topic: `functions`,
    },
    {
        title: `AMC 10A 2021 Spring Problem 19 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 4,
        used: false,
        type: 'mc',
        choices: ['\\(A) 18\\)', '\\(B) 27\\)', '\\(C) 36\\)', '\\(D) 45\\)', '\\(E) 54\\)'],
        answer: '\\(E) 54\\)',
        text: `<p>The area of the region bounded by the graph of</p>
        $$
        x^2+y^2=3|x-y|+3|x+y|
        $$
        $$
        is \\(m+n\\pi \\) where \\(m\\) and \\(n\\) are integers. What is \\(m+n\\)?`,
        solution: `<b>54</b><p>Hopefuly, we notice that \\(x^2+y^2=r^2\\) is the equation of a circle, with \\(r = \\) the radius. We solve using casework. </p>
        <p><b>Case 1:</b></p>
        <p>\\(x>y\\) where both \\(x\\) and \\(y\\) are positive. </p>
        $$
        x^2+y^2=3x-3y+3x+3y
        $$
        $$
        x^2+y^2=6x
        $$
        $$
        x^2-6x+y^2=0
        $$
        $$
        (x-3)^2+y^2=3^2
        $$
        <p>This would be a circle offset by 3 units to the right with radius \\(3\\)<p>
        <p>Repeat for all other cases</p>
        <p><b>Case 2:</b><p>
        <p>\\(x>y\\) where \\(x\\) is positive and \\(y\\) is negative</p>
        $$
        x^2+y^2=3x-3y-3y-3x
        $$
        <p>Notice that to simplify the absolute values, we switch the signs</p>
        $$
        x^2+y^2=-6y
        $$
        $$
        x^2+(y+3)^2=3^2
        $$
        <p>This is a circle of radius \\(3\\) shifted downwards by \\(3\\) units. </p>
        <p><b>Case 3:</b></p>
        <p>\\(y>x\\) where both \\(x\\) and \\(y\\) are positive</p>
        $$
        x^2+y^2=3y-3x+3x+3y
        $$
        $$
        x^2+y^2=6y
        $$
        $$
        x^2-6y+y^2=0
        $$
        $$
        (y-3)^2+x^2=3^2
        $$
        <p>The result is a circle translated \\(3\\) units up. 
        <p><b>Case 4:</b></p>
        <p>The final case occurs when \\(y>x\\), but \\(y\\) is positive and \\(x\\) is negative.</p>
        <p>Note that double negative cases are not considered because they yield the same result as double positive cases</p>
        $$
        x^2+y^2=3y-3x-3x-3y
        $$
        $$
        x^2_6x+y^2=0
        $$
        $$
        (x+3)^2+y^2=3
        $$
        <p>This is a circle shifted left by \\(3\\) units with radius \\(3\\)</p>
        <p>graphing these results in a square of side length \\(6\\) with a semicircle of radius \\(r\\) on each edge.</p>
        <p>The \\(m\\) represents the area of the square, \\(6 \\cdot 6 = 36\\) whereas \\(n\\) represents the area of the combined semicircles \\(2(3^2)=18 \\). Add
        these to get an answer of \\(54\\)`,
        topic: "absolute value",

    },
    {
        title: `AMC 10A 2021 Spring Problem 22 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 5, 
        used: false,
        type: `mc`,
        choices: ["\\(A) 10\\)", "\\(B) 13\\)", "\\(C) 15\\)", "\\(D) 17\\)", "\\(E) 20\\)"],
        text: `Hiram's algebra notes are \\(50\\) pages long and printed on \\(25\\) sheets of paper; the first sheet contains pages \\(1\\) and \\(2\\), the second sheet contains
        pages \\(3\\) and \\(4\\), and so on. One day he leaves his notes on the table before leaving for lunch, and his roommate decides to borrow some pages from the middle of the notes. 
        When Hiram comes back, he discovers that his roommate has taken a consecutive set of sheets from the notes and that the average (mean) of the page numbers on all remaining sheets is exactly $19$.
         How many sheets were borrowed?`,
        solution: `<b>13</b><p>The roomate took pages \\(x\\) through \\(y\\) with page numbers \\(2x-1\\) and \\(2y\\). We know that \\(2y-2x+2\\) sheets are taken because 
        it's \\(b-a\\) times \\(2\\) for the double sheet numbers and adding \\(2\\) to account for the first page number of each page. The original average of all the pages is \\(\\frac{50 \\cdot 51\\}{2}=25.5\\). This has to be equal 
        to the average of what was taken plus the remaining average, \\(19\\). The average of what was taken is \\(\\frac{2x-2a+2}{b-a}\\) We solve for this (not going to show because it will take a lot of space and get) \\(x=22\\) and \\(a=10\\). Thus, \\(13\\) sheets were taken (we add \\(1\\)). `,
        answer: "\\(B) 13\\)",

        topic: 'word problems',
    },
    {
        title: `AMC 10B 2020 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        difficulty: 1,
        used: false,
        type: 'fr',
        text: `<p>What is the value of \\(1-(-2)-3-(-4)-5(-(-6)\\)?</p>`,
        solution: `<b>5</b><p>Solve</p>
        $$
        1+2-3+4-5+6
        $$
        $$
        3-3+4-5+6
        $$
        $$
        5
        $$`,
        answer: '5',
        topic: 'arithmetic',
    },
    {
        title: `AMC 10B 2020 Problem 3 <span class="material-symbols-outlined staricon">
star
</span>`,
        text: 'The ratio of \\(w\\) to \\(x\\) is \\(4:3\\), the ratio of \\(y\\) to \\(z\\) is \\(3:2\\) and the ratio of \\(z\\) to \\(x\\) is \\(1:6\\). What is the ratio of \\(w:y\\)?',
        type: 'mc',
        choices: ['\\(A) 4:3\\)', '\\(B) 3:2\\)', '\\(C) 8:3\\)', '\\(D) 4:1\\)', '\\(E) 16:3\\)'],
        solution:`<b>16:3</b><p>We can write \\(y:x\\) as \\(3:2:1:6\\), or \\(1:4\\). Thus, \\(x:y\\) is \\(4:1\\). This means that \\(w:y\\) is \\(4:3:4:1\\) or \\(16:3\\)`,
        answer: '\\(E) 16:3\\)',
        topic: "ratios",
        used: false,
        difficulty: 1,
    },
    {
        title: `AMC 10B 2020 Problem 9 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `How many ordered pairs of integers \\((x,y)\\) satisfy the equation \\(x^2020 + y^2 =2y\\)?`,
        type: 'fr',
        solution: `<b>4</b>Rearrange all the terms onto one side</p>
        $$
        x^2020+y^2-2y=0
        $$
        $$
        x^2020+(y-1)^2-1=0
        $$
        $$
        x^2020+(y-1)^2=1
        $$
        <p>Both terms MUST be positive or \\(0\\) since they are raised to even powers. We know both \\(x=1\\) and \\(x=-1\\) make \\(y=0\\) and \\(y=2\\) and \\(y=0\\) make \\(x=0\\). This, there are 4 possible combinations</p>
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Especialy in cases like these that are solving for "how many", you don't need to solve \\(x\\) or \\(y\\) for a clear and concrete answer. Instead, sometimes use logic, knowledge,
        and induction to save time.`,
        answer: '4',
        topic: 'exponents',
    },
    {
        title: `AMC 10A 2020 Problem 1 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `<p>What is the value of</p>
        $$
        x=\\frac{3}{4}=\\frac{5}{12}-\\frac{1}{3}?
        $$`,
        type: 'mc',
        choices: ['\\(A) -\\frac{2}{3}\\)', '\\(B) \\frac{7}{36}\\)', '\\(C)) -\\frac{7}{12}\\)', '\\(D) \\frac{2}{3}\\)', '\\(E) \\frac{5}{6}\\)'],
        solution: `<b>\\frac{5}{6}</b><p>Solve</p>
        $$
        x=\\frac{5}{12}-\\frac{1}{3}+\\frac{3}{4}
        $$
        $$
        x=\\frac{5}{12}-\\frac{4}{12}+\\frac{9}{12}
        $$
        $$
        x=\\frac{10}{12}
        $$
        $$
        x=\\frac{5}{6}
        $$`,
        answer: '\\(E) \\frac{5}{6}\\)',
        topic: 'arithmetic',
    },
    {
        title: `AMC 10A 2020 Problem 2 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1, 
        text: `The numbers \\(3, 5, 7, a\\) and \\(b\\) have an average (arithmetic mean) of \\(15\\). What is the average of \\(a\\) and \\(b\\)?`,
        type: 'fr',
        solution: '<b></b><p>The sum of the \\(5\\) values must be equal to \\(15 \\cdot 5=75\\). If we subtract \\(3,5, \\) and \\(7\\), we can find \\(a+b=75-3-5-7=60\\). The average of \\(a\\) and \\(b\\) is equal to \\(\\frac{a+b}{2}=\\frac{60}{2}=30\\).</p>',
        answer: '30',
        topic: 'averages',
    },
    {
        title: `AMC 10A 2020 Problem 3 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1, 
        text: `<p>Assuming \\(a \\neq 3, b \\neq 4, c \\neq 5\\), what is the value in simplest form of the following expression?</p>
        $$
        \\frac{a-3}{5-c} \\cdot \\frac{b-4}[3-a} \\cdot \\frac{c-5}{4-b}
        $$
        `,
        type: 'mc',
        choices: ['\\(A) -1\\)', '\\(B) 1\\)', '\\(C) \\frac{abc}{60}\\)', '\\(D) \\frac{1}{abc}-\\frac{1}{60}\\)', '\\(E) \\frac{1}{60}-\\frac{1}{abc}' ],
        solution: `<b>-1</b><p>Notice that \\(a-3 = -(3-a)\\), \\(b-4=-(4-b)\\), and \\(c-5=-(5-c)\\). Using this, we eliminate via cross multiplication. We end up with \\(-1^3=-1\\)</p>`,
        answer: '\\(A) -1\\)',
        topic: 'algebraic manipulation',
    },
    {
        title: `AMC 10A 2020 Problem 4 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficutly: 1,
        text: `A driver travels for \\(2\\) hours at \\(60\\) miles per hour, during which her car gets \\(30\\) miles per gallon of 
        gasoline. She is paid \\($0.5\\) per mile, and her only expense is gasoline, at \\($2.00\\) per gallon. What is her net rate of pay, in dollars per hour, after this expense?`,
        type: 'fr',
        solution: `<b>26</b><p>The driver travels \\(2 \\cdot 60=120\\) miles and earns \\(120 \\cdot 0.5=$60\\). Her car uses \\(\\frac{120}{30}=4\\) gallons of gas which costs her \\(4 \\cdot 2=$8\\). She thus made \\(60-8=$52\\) dollars over the course of the 
    \\(2\\)hours. We divide this by \\(2\\) to get the dollars per hour, which is \\($26\\). `,
    answer: '26',
    topic: 'rates',
    },
    {
        title: `AMC 10A 2020 Problem 5 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `<p>What is the sum of all real numbers \\(x\\) for which</p>
        $$
        |x^2-12x+34|=2
        $$`,
        type: 'fr',
        solution: `<b>18</b><p>By the definition of absolute value, we know that \\(x^2-12x+34\\) can be equal to either \\(-2\\) or \\(2\\). We solve each equation seperately</p>
        $$
        x^2-12x+34=-2
        $$
        $$
        x^2-12x+36=0
        $$
        $$
        (x-6)^2=0
        $$
        <p>One solution is \\(x=6\\)</p>
        $$
        x^2-12x+34=2
        $$
        $$
        x^2-12x+32=0
        $$
        $$
        (x-8)(x-4)=0
        $$
        <p>Two more solutions are \\(8\\ and \\(4\\). We add this to get \\(8+4+6=18\\)</p>
        `,
        answer: '18',
        topic: 'casework',
    },
    {
        title: `AMC 10A 2020 Problem 8 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        type: 'fr',
        text: `<p>What is the value of </p>
        $$
        1+2+3-4+5+6+7-8+...+197+198+199-200?
        $$`,
        solution: `<b>9900</b><p>The patern,as we can tell, is that you add \\(3\\) integers, and then subtrac the next one. This 
        repeats until you reach \\(200\\). We can thus group the equation into sets of \\(4\\). We can start evaluating these:</p>
        $$
        1+2+3-4=2
        $$
        $$
        5+6+7-8=10
        $$
        $$
        9+10+11-12=18
        $$
        <p>You can continue further, or just realize that this is an arithmetic series with common difference \\(8\\). Notice that the sum of
        the expression will be equal to the sum of the \\(\\frac{200}{4}=50\\) groups. Thus, we find the sum of the arithmetic sequence, which we can write as</p>
        $$
        50 \\frac{2+394}{2} =  9900
        $$
        <p>We get the 394 by summing \\(197+198+199-200\\)</p>
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>Even though this never explicity states to use an arithmetic series, we can always try to find a sequence/series  whenever we see a pattern in numbers.
        A lot of what we know about sequences and series has already been proven, so we can use that to our advantage and save time.</p>
        `,
        answer: '9900',
        topic: 'series',
    },
    {
        title: `AMC 10A 2020 Problem 11 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 3,
        type: 'mc',
        text: `What is the median of the following list of \\(4040\\) numbers?
        $$
        1, 2, 3, ..., 2020, 1^2, 2^2, 3^2 ..., 2020^2
        $$`,
        solution: `<b>1976.5</b><p>Start by using \\(2020\\) as our midground. We want to find how many numbers are above and below that and then adjust to find the median. We do this 
        by finding the numbeer of squares above \\(2020\\). We (hopefully) know that \\(45^2=2025\\), so there must be \\(2020-44=1976\\) numbers greater than
        \\(2020\\), all squares. There are also \\(2020+44\\) numbers below or equal to \\(2020\\) (\\(2020\\) from the first half and \\(44\\) squares). Keep in mind
        that some of these are duplicates. We are looking for the \\(2020\\)th and \\(2021\\)th numbers, since the median would be between those two numbers. </p>
        <p>\\(44^2=1936\\) which is \\(2064-1936=84\\) less than \\(2020\\). We're trying to find the term\\(44\\) and \\(43\\) terms less than that, so we don't have to worry about duplicate squares.</p>
        <p>We subtract 44 and 43 from \\(2020\\) and find the average to be \\(1976.5\\)</p>`,
        answer: "1976.5",
        topic: 'medians',
    },
    {
        title: `AMC 10A 2020 Problem 14 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 3,
        type: 'mc',
        choices: ['\\(A) 360\\)', '\\(B) 400\\)', '\\(C) 420\\)', '\\(D) 440\\)', '\\(E) 480\\)'],
        text: `<p>Real numbers \\(x\\) and \\(y\\) satisfy \\(x+y=4\\) and \\(x \\cdot y = -2\\). What is the value of</p>
        $$
        x+ \\frac{x^3}{y^2}+\\frac{y^3}{x^2}+y?
        $$`,
        solution: `<b>440</b><p>We first start by simplifying the expression.</p>
        $$
        \\frac{x^3}{x^2}+\\frac{y^3}{x^2}+\\frac{x^3}{y^2}+\\frac{y^3}{y^2}
        $$
        $$
        \\frac{x^3+y^3}{x^2}+\\frac{x^3+y^3}{y^2}
        $$
        $$
        \\frac{y^2(x^3+y^3)+x^2(x^3+y^3)}{x^2y^2}
        $$
        $$
        \\frac{(x^2+y^2)(x^3+y^3)}{x^2y^2}
        $$
        <p>Returning to our first two equations, we can square the second one for \\(x^2y^2=4\\)</p>
        <p>We can also find \\(x^2+y^2\\) by squaring the first equation and subtracting \\(2xy\\)</p>
        $$
        x^2+2y+y^2=16
        $$
        $$
        x^2+y^2=20
        $$
        \\frac{18(x^3+y^3)}{4}
        $$
        <p>We can calculate \\(x^3+y^3\\) using the identity \\((x+y)^3=x^3+y^3+3xy(x+y)\\)</p>
        $$
        64=x^3+y^3+3(-2)(4)
        $$
        $$
        x^3+y^3=88
        $$
        $$
        \\frac{88 \\cdot 20}{4}
        $$
        $$
        440
        $$
        <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>You don't nescessarily have to solve for \\(x\\) and \\(y\\). Instead, just try to use algebraic manipulation and try to thin WHY they give you the information they did</p>
        `,
        answer: '\\(D) 440\\)',
        topic: 'algebraic manipulation',
    },
    {
        title: `AMC 10A 2020 Problem 21 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 5,
        text: `<p>There exists a unique strictly increasing sequence of nonnegative integers \\(a_{1} < a_{2}} < ... < a_{k}\\) such that 
        </p>
        $$
        \\frac{2^289+1}{2^17+1}=2^{a_{1}}+2^{a_{2}}+...+2^{a_{k}}.
        $$
        <p>What is \\(k\\)?</p>`,
        type: 'fr',
        solution: `<b>137</b><p>First, notice that \\(289=17^2\\). Thus, we can write \\(2^17\\) as \\(x\\) and rewrite the equation into </p>
        $$
        \\frac{x^17+1}{x+1}=2^a_{1}+2^a_{2}...+2^a_{k}
        $$
        <p>We then use the sum of powers rule, which is</p>
        $$
        a^n+b^b=(a+b)(a^{n-1}+a^{n-2}b+a^{n-3}b^2...b^{n-1})
        $$
        <p>\\(x^17+1=x^17+1^17\\)</p>
        $$
        \\frac{x^17+1^17}{x+1}=x^{16}-x^{15}+x^{14}...-x+1
        $$
        <p>From here, there is an arduous process of which I will not notorize everything due to how tedious it is. Essentially, you use the difference of squares on each set of two terms in
        the equation above. Then, you substitute \\(2^17\\) back for \\(x\\) and find that the sum is a string of powers of \\(8\\) powers of \\(2\\), plus the starting \\(0\\), for \\(17 \\cdot 8 +1=137)</p>

        `,
        answer: '137',
        topic: 'sequences',
    },
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
const progressBar = document.getElementById("progress-bar")
const mcContainer = document.getElementById("mc-container");
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"))
const questionChoices = document.getElementById("mc-container")
const submitSolutionButton = document.getElementById("submit-a-solution");
const submitSolutionForm = document.getElementById("submit-a-solution-form");

let questionsAnswered = 0;
let percentage = 0;
let percetnageStr = "0";
//--------------Progress Bar---------------
function progressBarFunction() {
questionsAnswered++;
percentage = ((questionsAnswered) / questions.length) * 100;
progressBar.style.width = percentage + "%";
console.log(questionsAnswered);
}


// ---------- Load Question ----------
function loadQuestion(index) {
    saveUserStatsToCloud()
    
    submitSolutionForm.style.display = "none";
    submitSolutionButton.style.display='block'
    console.log("question loading")
    const q = questions[index];
    mcChoices.forEach(btn => btn.disabled = false);


    questionTitle.innerHTML = q.title;
    questionText.innerHTML = q.text;

    solutionText.innerHTML = "";
    solutionDiv.style.display = "none";
    nextBtn.style.display = "none";

    // Reset
    answerInput.value = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    mcContainer.classList.add("hidden");

    // ----- FREE RESPONSE -----
    if (!q.type || q.type === "fr") {
        answerInput.style.display = "inline-block";
        checkBtn.style.display = "inline-block";
    }

    // ----- MULTIPLE CHOICE -----
    if (q.type === "mc") {
        mcContainer.classList.remove("hidden");

        mcChoices.forEach((btn, i) => {
            btn.textContent = q.choices[i];
            btn.onclick = () => handleMCAnswer(q.choices[i]);
        });
    }

    if (window.MathJax) {
        MathJax.typesetPromise([questionText]).catch(()=>{});
        MathJax.typesetPromise([questionChoices]).catch(()=>{});
    }
}


//----------Load Cards-------------


//-----------MCQ----
function handleMCAnswer(choice) {
    answerInput.value = choice; // reuse existing checker
    checkBtn.click();
mcChoices.forEach(btn => btn.disabled = true);

}




// ---------- Popup ----------
function showPopup(message, isCorrect) {
    popup.textContent = message;
    popup.style.backgroundColor = isCorrect ? "#4CAF50" : "#f44336";
    popup.style.opacity = "1";
    setTimeout(() => popup.style.opacity = "0", 2000);
}


// ---------- Check Answer ----------
checkBtn.addEventListener("click", function () {
    const userAnswer = answerInput.value.trim();
    const correctAnswer = questions[currentQuestion].answer.trim();
    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
            progressBarFunction();
            streakCount++;
            correctCount++;
        document.getElementById("streak-count").textContent = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + questions[currentQuestion].solution;

      // Existing confetti
       myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });

    // Your existing streak bar animation
        showHighlight();
        if (streakCount >= longestStreak){
            longestStreak=streakCount;
        }



    } else if (userAnswer !== correctAnswer && nextBtn.style.display === "none") {
            progressBarFunction();
        streakCount = 0;
        wrongCount++;
        document.getElementById("streak-count").textContent = streakCount;
        solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect. ` + questions[currentQuestion].solution;
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

        if (currentQuestion < questions.length) {
            loadQuestion(currentQuestion);

            // Slide in effect
            problemsWrapper.classList.add("slide-in");
            setTimeout(() => problemsWrapper.classList.remove("slide-in"), 350);
        } else {
    questionTitle.textContent = "All done!";
    questionText.textContent = "You've completed all questions.";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    nextBtn.style.display = "none";
    solutionDiv.style.display = "none";
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion(currentQuestion);
    }


    // Show stats dashboard
    document.getElementById("stats-dashboard").classList.remove("hidden");
    document.getElementById("total-questions").textContent = questions.length;
    document.getElementById("correct-answers").textContent = correctCount;
    document.getElementById("wrong-answers").textContent = wrongCount;
    document.getElementById("longest-streak").textContent = longestStreak;
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


// ---------- Shuffle Questions ----------
shuffleArray(questions);
currentQuestion = 0;

document.getElementById("restart-btn").addEventListener("click", function() {
    // Reset variables
    questionsAnswered = 0;
    progressBar.style.width = "0%"
    currentQuestion = 0;
    correctCount = 0;
    wrongCount = 0;
    streakCount = 0;
    longestStreak = 0;
    document.getElementById("streak-count").textContent = streakCount;

    // Hide dashboard
    document.getElementById("stats-dashboard").classList.add("hidden");

    // Show questions again
    loadQuestion(currentQuestion);
    problemsWrapper.classList.remove("hidden");
});


submitSolutionButton.addEventListener("click", function() {
        submitSolutionForm.style.display = 'block';
        submitSolutionButton.style.display = 'none';
})

console.log(questions.length)
progressBar.style.width = "0%"
toggleProblems();
loadQuestion(currentQuestion);
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
//-----------------------Authentication--------------------------
async function loadUserStats(userId) {
  const { data: profile, error } = await supabase
    .from('profiles')
   .select('id, username, algebraSorted, algebraIndex')
   .eq('id', userId)

  if (error) {
    console.error("Error downloading profile data:");
    return;
  }

  if (profile) {
    console.log(profile)
    let userProfile = profile[0]
    console.log(userProfile.username)
    questions = userProfile.algebraSorted || questions;
    currentQuestion = userProfile.algebraIndex || 0;
    document.getElementById("username-display").innerHTML = userProfile.username
    streakCount =  userProfile.algebraStreak || 0
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

  // 1. Create the user credentials using your existing supabase client
  if (password === passwordCheck){
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) return alert(error.message);

  // 2. Insert their CURRENT ELO ratings into your 'profiles' table
  if (data.user) {
    
    await supabase.from('profiles').insert([
      { 
        id: data.user.id, 
        username: username, 
        algebraSorted: questions,
        algebraIndex: currentQuestion,
        algebraStreak: streakCount
      }
    ]);
    
    alert("Account created!");
    
    document.getElementById('accountPannel').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById("username-display").innerHTML = username
  }
  } else {
    document.getElementById("signup-error").innerHTML = "Passwords do not match"
    return
  }
});
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
  const usernameDisplayModal = document.getElementById('btn-dashboard')

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
algebraSorted: questions,
algebraIndex: currentQuestion,
algebraStreak: streakCount

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
// --- Integrated Draggable Floating Scratchpad Engine ---
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