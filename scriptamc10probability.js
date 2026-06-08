const toggleBrightness = document.getElementById("brightness")
const carouselLight = document.querySelectorAll("carousel-logo-light")
const carouselDark = document.querySelectorAll("carousel-logo-dark")
let colorMode = 'light'
let colorModeTrue = localStorage.getItem("colorMode")
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
<h2 class="amc10subtitle">Expected Outcome</h2>
<p>Expected outcome is effectively the average of the values you get if you perform something an infinite number of times. It's typicallyused in the context of carnivals, games, dice, etc. It is typically 
calculated by multiplying the value of each outcome by the probability it occurs, and then adding them all together. </p>
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Expected value is common and can be used in a lot of advanced problems. It is important to recognize when to apply it and how to calculate it correctly.</p>
`;
cardOneText.innerHTML = contentCardOne;
const cardTwoText = document.getElementById("carousel-card-two");
const contentCardTwo = `
<h2 class="amc10subtitle">Combinations + Permutation</h2>

<h3>Combinations</h3>
<p>The number of ways you can pick \\(k\\) objects from \\(n\\) without regard to order. Calculated as</p>
$$
\\frac{n!}{k!(n-k)!}
$$
<h3>Permutations</h3>
<p>The number of ways to pick \\(k\\) objects from \\(n\\) with regard to order. Calcuated as</p>
$$
\\frac{n!}{(n-k)!}
$$
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Combinations and permunations make up the basis for counting in general. Combinations especially are very common. It is important to recognize the difference know when to use each one.</p>
`;
cardTwoText.innerHTML = contentCardTwo;
const cardThreeText = document.getElementById("carousel-card-three");
const contentCardThree = `
<h2 class="amc10subtitle">Independent vs Dependent Events</h2>
<p>When two events are independent, it means that the probability of one does not have any affect on the other. When they are dependent, the probability of one is affected by the other</p>
<h3>Formatting</h3>
<p>The probability of \\(A\\) given \\(B\\) is \\(P(A|B)\\) and is equal to \\(\\frac{P(A \\cap B)}{P(B)}\\). If \\(A\\) and \\(B\\) are independent, then \\(P(A|B)=P(A)\\)</p>
<p>The probability of \\(A\\) and \\(B\\) is \\(P(A \\cap B)\\) and is equal to \\(P(A)P(B)\\) if they are independent, and is equal to \\(P(A|B)P(B)\\) if they are dependent</p>
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>To succeed on the AMC 10, you need to know exactly what and why is being asked. Understanding how to calculate independent and dependent probability will help you solve problems much faster</p>
`;
cardThreeText.innerHTML = contentCardThree;
const cardFourText = document.getElementById("carousel-card-four");
const contentCardFour = `
<h2 class="amc10subtitle">Factorials</h2>
<p>Factorials are the products of all positive integers less than or equal to a given number. There is no simple formula (try graphing it though, it's really cool though). It is denoted as \\(x!\\)</p>
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>Factorials are common in combinations and permutations. They give us information on arrangements, groups, and counting in general.  </p>
`;
cardFourText.innerHTML = contentCardFour;
const cardFiveText = document.getElementById("carousel-card-five");
const contentCardFive = `
<h2 class="amc10subtitle">Geometric Probability</h2>
<p>This is the blend of geometry and probability. Instead of desired outcome divided by total outcomes, it is target area divided by total area. It is used in a lot of \\(20+\\) AMC 10 problems,
<h3><span class="material-symbols-outlined">
star_shine
</span> Why this is important <span class="material-symbols-outlined">
star_shine
</span></h3>
<p>If you want to get really competitive, train on this. The AMC 10 likes to combine disicplines in creative ways. It also helps to brush up on calculus or other ways to find areas of composite shapes.</p>

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


let questions = [
   {
        title: `AMC 10A 2020 Problem 15 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        uesd: false,
        difficulty: 3,
        text: `A positive integer divisor of \\(12!\\) is chosen at random. The probability that the divisor chosen is a perfecct square can be expressed as \\(\\frac{m}{n}\\), where \\(m\\) and \\(n\\) are relatively prime
        positive integers. What is \\(m+n\\)?`,
        type: 'mc',
        choices: ['\\(A) 3\\)', '\\(B) 5\\)', '\\(C) 12\\)', '\\(D) 18\\)', '\\(E) 23\\)'],
        solution: `<b>23</b>Let's first start by finidng the prime factorization of \\(12!\\). We can write it out as</p>
        $$
        1 \\times 2 \\times 3 \\times 4 \\times 5 ... \\times 12
        $$
        <p>We break down each term into its prime factors</p>
        $$
        2 \\times 3 \\times 2^2 \\times 5 \\times 2 \\times 3 \\times 7 \\times 2^3 \\times 3^2 \\times 2 \\time 5 \\times 11 \\times 2^2 \\times 3
        $$
        $$
        2^10 \\times 3^5 \\times 5^2 \\times 7 \\times 11
        $$
        <p>Now let's not simplify this yet, because notice that we're looking for the simplest form of \\(\\frac{m}{n}\\), and based off our answer choices, both \\(m\\) and \\(n\\) should be relatively low</p>
        <p>A factor will be a perfect square when each of its prime factors has an even power. For \\(2\\), the power can be \\(0, 2, 4, 6, 8, 10\\). For \\(3\\), \\(0, 2, 4\\), and then \\(0,2\\) and then \\(0\\) for \\(7\\) and \\(11\\). That gives us 
        \\(6 \\cdot 3 \\cdot 2\\) ways to make a perfect square</p>
        <p>Once again, instead of finding what htat is equal to, we return to our ratio and find</p>
        $$
        \\frac{6 \\cdot 3 \\cdot 2}{2^10 \\cdot 3^2 \\cdot 5^2 \\cdot 7 \\cdot 11}=\\frac{1}{22}.</p>
        <p>We have \\(m=1\\) and \\(n=22\\) for \\(m+n=1+22=23\\)`,
        answer: '\\(E) 23\\)',
        topic: 'prime factorization',
    },
    {
        title: `AMC 10A 2020 Problem 16 <span class="material-symbols-outlined staricon">
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
        text: `A point is chosen at random witin the square in the coordinate plane whose vertices are \\((0,0), (2020,0), (2020,2020),\\) and \\((0,2020)\\). The 
        probability that the point is within \\(d\\) units of a lattice point is \\(\\frac{1}{2}\\). (A point \\((x,y)\\) is a lattice point if \\(x\\) and \\(y\\) are both integers.) What is \\(d\\) to the nearest tenth?`,
        type: 'mc',
        choices: ['\\(A) 0.3\\)', '\\(B) 0.4\\)', '\\(C) 0.5\\)', '\\(D) 0.6\\)', '\\(E) 0.7\\)'],
        solution: `<b>0.4</b><p>First things first: the dimensions of the square as a whole should not matter. Thus, we break the shape down into the smallest units possible, a \\(1 \\times 1\\) square. This square has \\(4\\) lattice points and an area of \\(1\\)</p>
        <p>To be within \\(d\\) of a lattice point, it should be within a circle of radius \\(d\\), or in our case a quarter-circle bounded by the edges. There are \\(4\\) corners, so \\(4\\) of these circles. The area of these should be \\(\\frac{1}{2}\\) so that there is exactly a \\(\\frac{1]{2}\\) chance of the selected 
        point bein within the circle. We thus have that \\(\\pi d^2 = \\frac{1]{2}\\}. We use \\(\\pi=3.14\\) and simply approximate for \\(d=0.4\\)` ,
        answer: '\\(B) 0.4\\)',
        topic: 'composite shapes',
    },
    {
        title: `AMC 10A 2020 Problem 25 <span class="material-symbols-outlined staricon">
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
        text: `Jason rolls three fair standard six-sided dice. Then he looks at the rolls and chooses a subset of the dice (possibly empty, possibly all three dice) to reroll. After rerolling, he wins if and only if
        the sum of the numbers face up on the three dice is exactly \\(7\\). Jason always plays to optimize
        his chances of winning. What is the probability that he chooses to reroll exactly two of the dice? ,       `,
        type: 'mc',
        choices:['\\(A) \\frac{7}{36}\\)', '\\(B) \\frac{5}{24}\\)', '\\(C) \\frac{2}{9}\\)', '\\(D) \\frac{17}{72}\\)', '\\(E) \\frac{1}{4}\\)'],
        solution: `<b>\\(\\frac{7}{36}\\)</b><p>Jason rerolls \\(0\\) dice when he already has a \\(7\\) and rerolls \\(3\\) dice when he has a \\(6\\) or \\(5\\), assuming he hasn't already won. This is sort of just intuitive</p>
        <p>For Jason to roll \\(2\\) die, the probability of winning MUST be above that of completely rerolling and that of rerolling one.</p>>
        <p>Jason can win by rerolling \\(3\\) dice (or rolling \\(3\\) dice off the bat) in \\(15\\) ways:</p>
        <p>\\(5-1-1\\) \\(3\\) ways</p>
        <p>\\(4-2-1\\) \\(6\\) ways</p>
        <p>\\(3-3-1\\) \\(3\\) ways</p>
        <p>\\(3-2-2\\) \\(3\\) ways</p>
        <p>There are \\(6^3=216\\) ways to roll \\(3\\) die so the chance of winning off the bat, or after rerolling all \\(3\\) die is \\(\\frac{15}{216}=\\frac{5}{72}\\).</p>
        <p>From here, we calculate the chance of getting a \\(7\\) for every value of the one dice he "leaves behind". We will then comprase this to the all-\\(3\\)-reroll probability and see if it is greater. We will then find 
        the combined probability of all the optimal solutions</p>
        <p>We know that Jason will never leave a \\(6\\) because then he cannot get a \\(7\\), the lowest he can get is \\(8\\).</p>
        <p>If he leaves a \\(5\\), he needs two \\(1\\)s, which is a \\(\\frac{1}{6}^2=\\frac{1}{36}\\) chance, which is lower than \\(\\frac{5}{72}\\)</p>
        <p>If he leaves a \\(4\\), he must get a \\(2\\) and a \\(1\\). There are \\(2 \\cdot 1\\) ways for this to happen for a total probability of \\(\\frac{2}{36}\\), still not enough</p>
        <p>For \\(3\\), we can have \\(3, 1\\) or \\(2, 2\\) which gives a \\(\\frac{3}{36}\\) chance. This is enough</p>
        <p>Next is \\(2\\) which can give \\(4, 1\\) or \\(3, 2,\\) for a total probability of \\(\\frac{4}{36}\\). Also enough</p>
        <p>Finally, we have \\(1\\) which gives \\(1,5\\), \\(4,2\\) or \\(3,3\\) for \\(\\frac{5}{36}\\) </p>
        <p>Now, we have to account for the ways in which he'll pick up only one dice</p>
        <p>If any of the results have \\(2\\) of the values from the ways to get \\(7\\).</p>
        <p>For \\(1\\), there cannot be another \\(1,2,3,4,5\\) which means that both other ones must be \\(6\\) for \\(3\\) ways for this to happen</p>
        <p>For \\(2\\) it cannot be \\(1,3,3,4\\) so there's \\(12\\))</p>
        <p>For \\(3\\) it cannot be \\(1,2\\) so it must be \\(3,4,5,6\\) for \\(27\\) </p>
        <p>There is a total probability of \\(\\frac{27+12+3}{216}=\\frac{7}{36}\\)</p>
        `,
        topic: 'casework',
        answer: "\\(A) \\frac{7}{36}\\)",
    },
    {
        title: `AMC 10B 2020 Problem 5 <span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 1,
        text: `How many distinguishable arrangements are there of \\(1\\) brown tile, \\(1\\) purple tile, \\(2\\) green tiles, and \\(3\\) yellow tiles in a row from left to right?`,
        solution: `<b></b><p>All we have to do for this is find the total number of combination and then divide the ways to arrange the tiles of the same color</p>
        <p>We have \\(\\frac{7!}{3! \\cdot 2!}=420\\)`,
        answer: '420',
        type:'fr',
        topic: 'counting'
    },
    {
        title: `AMC 10B 2020 Problem 11 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `Ms. Carr asks her students to read any \\(5\\) of the \\(10\\) books on a reading list. Harold randomly selects \\(5\\) books from the list, and Betty does the same. What is the probability that there are exactly \\(2\\) books that they select?`,
        type: 'mc',
        choices: ['\\(A) \\frac{1}{8}\\)', '\\(B) \\frac{5}{36}\\)', '\\(C) \\frac{14]{45}\\)}', '\\(D) \\frac{25}{63}\\)', '\\(E) \\frac{1}{2}\\)'],
        solution: `<b>\\(\\frac{25}{63}\\)</b><p>We can start with Harold. It doesn't really matter what he picks as long as Betty picks \\(2\\) of the same. There are \\(5\\) choose \\(2\\) ways for this, so \\(10\\) and \\(5\\) choose \\(3\\) ways to pick the remaining ones, which is also \\(10\\) (since she is picking fom the \\(5\\) remaining ones</p>
        <p>There are \\(5\\) choose \\(10=252\\) ways for a total ratio of \\(\\frac{100}{252}=\\frac{50}{126}=\\frac{25}{63}\\) `,
        answer: '\\(E) \\frac{25}{63}\\)',
        topic: 'combinations',
    },
    {
        title: `AMC 10B 2020 Problem 18 <span class="material-symbols-outlined staricon">
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
        text: `An urn cotains one red ball and one blue ball. A box of extra red and blue balls lies nearby. Geogre performs the following operation four times: he draws a ball from the urn at random and then takes a ball of the same color from the box and returns those two matching balls to the urn. After the four iterations the urn contains six balls. What is the probability that the urn contains three balls of each color?`,
        type: 'mc',
        choices: ['\\(A) \\frac{1}{6}\\)', '\\(B) \\frac{1}{5}\\)', '\\(C) \\frac{1}{4}\\)', '\\(D) \\frac{1}{3}\\)', '\\(E) \\frac{1}{2}\\)'],
        solution: `<b>\\(\\frac{1}{5}\\)</b><p>We know that in order for there to be equal amounts of red and blue, there are \\(3\\) red and \\(3\\) blue, and we pulled two red and two blue</p>
        <p>This could've happened as \\(RRBB\\), \\(RBRB\\) or \\(RBBR\\), or by switching \\(R\\) and \\(B\\) which gives the same probability anyways, so we'll just multiply the final probability by \\(2\\)</p>
        <p>For \\(RRBB\\), we start with a \\(\\frac{1}{2}\\) chance, and then a \\(\\frac{2}{3}\\) chance, because there are now \\(3\\) balls, \\(2\\) of which are red. With the blues, there are now \\(4\\) balls with \\(1\\) red for a \\(\\frac{1}{4}\\) chance and finally a \\(\\frac{2}{5}\\) chance. The combined probability is 
        \\(\\frac{1}{2} \\cdot \\frac{1}{3} \\cdot \\frac{1}{4} \\cdot \\frac{2}{5}=\\frac{1}{30}\\)</p>
        <p>Next is \\(RBRB\\). Which gives a probability of \\(\\frac{1}{2}\\cdot \\frac{1}{3}\\cdot \\frac{1}{2} \\cdot \\frac{2}{5} = \\frac{1}{30}\\). The same is true for \\(RBBR\\). We add \\(\\frac{1}{30} + \\frac{1}{30} + \\frac{1}{30} =\\frac{3}{30}\\) and multiply by \\(2\\) which simplifies down to \\(\\frac{1}{5}\\) `,
        answer: '\\(B) \\frac{1}{5}\\)',
        topic: 'casework',
    },
    {
        title: `AMC 10B 2020 Problem 17 <span class="material-symbols-outlined staricon">
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
        text: `There are \\(10\\) people standing equally spaced around a circle. Each person knows exactly \\(3\\) of the other \\(9\\) people: the \\(2\\) people standing next to him or her, as well as the person directly across the circle.
        How many ways are there for the \\(10\\) people to split up into \\(5\\) pairs so that the members of each pair know each other?`,
        solution: `<b>13</b><p>We use the circle to visualize. Notice that we can just pair everybody with the person next to them. That would give us \\(2\\) cases because we can pair clockwise or counterclockwise</p>
        <p>If we pair across, we can only do so for odd numbers of crosses, because if it were even, it would leave people without people next to them</p>
        <p>With \\(1\\) cross, there are \\(5\\) ways to do it (\\(5\\) potential crosses). With \\(3\\), the yneed to all be adjacnet so to not "strand" anybody without another person next to them. There are \\(5\\) ways to do this</p>
        <p>Finally, with all crosses, we have \\(1\\) way for a total of \\(2+5+5+1=13\\)`,
        answer: '13',
        topic: 'casework',
    },
    {
        title: `AMC 10B 2020 Problem 19 <span class="material-symbols-outlined staricon">
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
        text: `In a certain card game, a player is dealt a hand of \\(10\\) cards from a deck of \\(52\\) distinct cards. The number of distinct (unordered) hands that can be deal to the player can be written as \\(158A00A4AA0\\). What is the digit \\(A\\)?`,
        solution: `<b></b><p>What we're really looking for is the tens digit of \\(52\\) choose \\(10\\) or \\(\\frac{52!}{10!(42!)}\\) which simplifies down to \\(\\frac{52 \\cdot 51 \\cdot 50 ... \\cdot 43}{10!}\\). From here, it's decently easy to just simplify down by factoring and get \\(\\frac{26 \\cdot 17 \\cdot 7 \\cdot 47 \\cdot 46 \\cdot 5 \\cdot 11 \\cdot\\ 43}\\) which we divide by \\(10\\) again for modulo \\(2\\). `,
        answer: '2',
        topic: 'modular arithmetic',
    },
    {
        title: `AMC 10A 2021 Spring Problem 20 <span class="material-symbols-outlined staricon">
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
        text: `In how many ways can the sequence \\(1,2,3,4,5\\) be rearranged so that no three consecutive terms are increasing and no three consecutive terms are decreasing?`,
        solution: `<b></b>We know each sequence of increasing or decreasing numbers must be of length \\(2\\). Thus, it must go increase, decrease, increase, decrease, or visa versa. </p>
        <p>With increase decrease increase decrease, the terms that you increase to have to be \\(3,4,5\\). That gives us \\(_3_5_, _5_3_, _4_5_, _5_4_\\). Notice that we cannot have \\(3,4\\) in any combination. The first option can be \\(13254\\) or \\(23154\\). The same is said for the second one, because it's the same
        thing but backwards. That gives \\(4\\). The last \\(2\\) can give you any combination for the remaining \\(3\\) which means \\(2 \\cdot 3! = 12\\). This gives \\(16\\). We double this in the case of decrease, increase, decrease, increase for \\(16 \\cdot 2 =32\\)`,
        answer: '32',
        topic: 'casework',
    },
    {
        title: `AMC 10A 2021 Spring Problem 23 <span class="material-symbols-outlined staricon">
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
        text: `Frieda the frog begins a sequence of hops on a \\(3 \\times 3\\) grid of squares, moving one square on each hope and choosing at random the direction of each hop-up, down, left, or right. She does not hop diagonally. When the direction of a hop would take Frieda off the grid, she "wraps around" and jumps to the opposite edge.
        For example if Frieda begins in the center square and makes two hops "up", the first hop would place her in the top row middle square, and the second hop would cause Frieda to jump to the opposite edge, landing in the bottom row
        middle square. Suppose Frieda starts from the center square, makes at most four hops at random, and stops hopping if she lands on a corner square. What is the probability that she reaches a corner square on one of the four hops?`,
        solution: `<b>\\(\\frac{25}{32}\\)</b><p>No matter where Frieda jumps the first time, she'll be adjacent to a corner. She has a \\(\\frac{1]{2}\\) chance of landing on one of the squares</p>
        <p>On the \\(\\frac{1}{2}\\) chance that she doesn't, she would either be in the center, or another side next to a corner, the opposite side. If on the center, she cannot reach a corner. However, if she's on the side \\(\\frac{1}{4}\\), she once again has a \\(\\frac{1}{2}\\) chance of jumping to a corner. This is a combined probability of \\(\\frac{1}{8}\\).</p>
        <p>If she got back to the center, she has to go to a side again. She has \\(2\\) turns left so she can potentially end up on another side with a \\(\\frac{1]{4} \\cdot \\frac{1}{8}\\).</p>
        <p>Finally, if her first jump was to a side, her second jump was in the same direction, landing her on the opposite side, and she jumps back, she has another \\(\\frac{1}{2}\\) of reaching a side on the last jump</p>
        <p>There's a \\(\\frac{1}{4} \\cdot \\frac{1}{4} \\cdot \\frac{1}{2} = \\frac{1}{32}\\). The total sum of the probabilities is \\(\\frac{1}{2}+ \\frac{1}{8} + \\frac{1}{8}+\\frac{1}{32}\\) which breaks down to \\(\\frac{25}{32}\\)`,
        type: 'mc',
        choices: ['\\(A) \\frac{9}{16}\\)', '\\(B) \\frac{5}{8}\\)', '\\(C) \\frac{3}{4}\\)', '\\(D) \\frac{25}{32}\\)', '\\(E) \\frac[13}{16}\\)'],
        answer: '\\(D) \\frac{25}{32}\\)',
        topic: "casework",
    },
    {
        title: `AMC 10A 2021 Spring Problem 25 <span class="material-symbols-outlined staricon">
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
        text: `How many ways are there to place \\(3\\) indistinguihsable red chips, \\(3\\) indistinguishable blue chips, and \\(3\\) indistinguishable green chips in the squares of a \\(3 \\times 3\\) grid so that no two chips of the same color
        are directly adjacent to each other, either vertically or horizontally?`,
        solution: `<b></b><p>We know, right off the bat, that the answer has to be a multiple of \\(6\\), because any combination needs to work when the colors are switched around  in \\(3!=6\\) ways</p>
        <p>Knowing we will eventually multiply by \\(6\\), we can start with one color, work the different ways around it, and then multiply by \\(6\\). In order to rationalize this best, I would start at either the corner of the middle.</p>
        <p>I personally started at the corner when I solved this. Our first row can have \\(R x R\\) or \\(R x y\\), where \\(x\\) and \\(y\\) are essentially interchangeable versions of other colors</p>
        <p>For \\(R x R\\), the value of \\(x\\) defines the rest. That means that there are \\(2\\) ways, since there are \\(2\\) values of \\(x\\) ((\\B, G\\)). For \\(R, x, y\\), we need \\(R\\)s to be arranged diagonally. The diagonals can be arranged in two ways, with two variants of \\(G\\) and \\(B\\) being switched, giving \\(4\\) possibilities. That gives \\(6 \\cdot 6\\) (because we can switch the colors around) which gives 
        \\(36\\)`,
        answer: '36',
        topic: 'casework',
    },
    {
        title: `AMC 10B 2021 Fall Problem 22 <span class="material-symbols-outlined staricon">
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
        text: `Ang, Ben, and Jasmin each have \\(5\\) blocks, colored red, blue, yellow, white, and green; and there are \\(5\\) empty boxes. Each of the people randomly and indepenedently of the other two people places one of their blocks into each box. The probability that at least one box 
        recieves \\(3\\) blocks of all of the same color is \\(\\frac{m}{n}\\), where \\(m\\) and \\(n\\) are relatively prime positive integers. What is \\(m+n?\\)`,
        solution: `<b>471</b><p>The number of ways for at least one box to have all of one color can be calculated by dividing it into three cattegories:</p>
        <p>Which one is all one color (\\(5\\) variations)</p>
        <p>Which color (\\(5\\) variations)</p>
        <p>What the other boxes are \\((4!)^3\\)</p>
        <p>We have \\(\\frac{5 \\cdot 5 \\cdot 4^3}{(5!)^3}\\). We find the denominator because each person individually has \\(5!\\) ways to find a box.</p>
        <p>The issue with this, however, is that it only accounts for one box. The question asks for at least one box. In order to account for this, we find \\(_{5}C_{2} \\cdot _{5}P_{2} \\cdot (4!)^3  - _{5}C_{2} \\cdot _{5}P_{2} \\cdot (3!)^3 - ... -_{5}C_{2} \\cdot _{5}P_{2} \\cdot (0!)^3 + _{5}C_{2} \\cdot _{5}P_{2} \\cdot (3!)^3)</p>
        <p>The reason for this is sort of tricky. It uses a trick called PIE, which calculates the size of the area between two probabilites (two cases by summing them and subtracting the intersections</p>
        <p>Calculating this out and simplifying gives us \\(\\frac{71}{400}\\) which gives \\(m+n=71+400=471\\)`,
        type: 'mc',
        choices: ['\\(A) 47\\)', '\\(B) 94\\)', '\\(C) 227\\)', '\\(D) 471\\)', '\\(E) 542\\)'],
        answer: '\\(D) 471\\)',
        topic: 'counting',
    },
    {
        title: `AMC 10A 2021 Fall Problem 9 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `When a certain unfair die is rolled, an even number is \\(3\\) times as likely to appear as an odd number. The die is rolled twice. What is the probability that the sum of the numbers rolled is even?</p>`,
        solution: `<b>\\(\\frac{5}{8}\\)</b><p>Let's first start by figuring out what the values of the number need to be. The question doesn't specify the number of face,s so let's just imagine it's a coin that is either even or odd (you can also imagine \\(1\\) or \\(2\\) but it's up to you)</p>
        <p>We have that \\(P(O)=\\frac{1}{4}\\) and \\(P(E)=\\frac{3}{4}\\) because \\(\\frac{3}{4}+\\frac{1}{4}=1\\) (you can solve it algebraicly but it's relatively trivial)</p>
        <p>\\(EE\\) and \\(OO\\). There are \\(\\frac{3}{4}^2\\) and \\(\\frac{1}{4}^2\\) chances which sum to \\(\\frac{9}{16}+\\frac{1}{16}=\\frac{10}{16}=\\frac{5}{8}\\)</p>`,
        type: 'mc',
        choices: ['\\(A) \\frac{3}{8}\\)', '\\(B) \\frac{4}{9}\\)', '\\(C) \\frac{5}{9}\\)', '\\(D) \\frac{9}{16}\\)', '\\(E) \\frac{5}{8}\\)'],
        answer: '\\(E) \\frac{5}{8}\\)',
        topic: 'algebraic manipulation',
    },
    {
        title: `AMC 10A 2021 Fall Problem 10 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `A school has \\(100\\) students and \\(5\\) teachers. In the first period, each studentis taking one class and each teacher is teacing one class. The
        enrollments in the classes are \\(50,20,20,5\\) and \\(5\\). Let \\(t\\) be the average value obtained if a teacher is picked at random and the number of students
        in their class is noted. Let \\(s\\) be the average be the average value obtained if a student was picked at random and the number of students in their class, including the student, is noted.
        What is \\(t-s\\)?`,
        type: 'mc',
        choices: ['\\(A) -18.5\\)', '\\(B) -13.5\\)', '\\(C) 0\\)', '\\(D) 13.5\\)', '\\(18.5\\)'],
        solution: `<b>\\(13.5\\)</b><p>Let's start with \\(t\\). We have \\(5\\) teachers total. \\(1\\) would say \\(50\\), \\(2\\) would say \\(20\\), and \\(2\\) would say \\(5\\). This sums to \\(50+2(20)+2(5)=100\\) which we divide by \\(5\\) for an 
        average value of \\(20\\). For \\(s\\), we have \\(\\frac{50(50)+40(20)+10(5)}{100}\\). This is pretty huge so we do some factoring and solve to get \\(33.5\\). \\(20-33.5=13.5\\)`,
        answer: '\\(B) -13.5\\)',
        topic: 'expected outcome'
    },
    {
     title: `AMC 10A 2021 Fall Problem 13 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
     used: false,
     difficulty: 3,
     text: `Each of \\(6\\) balls is randomly and independently painted either black or white with equal probability. What is the probability that every ball is different in color from more than half of the other \\(5\\) balls?`,
     type: 'mc',
     choices: ['\\(A) \\frac{1}{64}\\)', '\\(B) \\frac{1}{6}\\)', '\\(C) \\frac{1}{4}\\)', '\\(D) \\frac{5}{16}\\)', '\\(E) \\frac{1}{2}\\)'],
     solution: `<b>\\(\\frac{5}{16}\\)</b><p>All this question is asking is what the probability is that there are \\(3\\) white and \\(3\\) blue.</p>
     <p>We compute this by finding the total number of ways to pick \\(3\\) out of \\(6\\) to be black (so essentially \\(6\\) choose \\(3\\)) and divide that by the total number of colorings \\((2^6\\))</p>
     <p>This solves down to \\(\\frac{5}{16}\\)</p> 
     `,
     answer: '\\(D) \\frac{5}{16}\\)',
     topic: 'combinations',  
    },
    {
        title: `AMC 10A 2021 Fall Problem 18 <span class="material-symbols-outlined staricon">
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
        text: `A farmer's rectangular field is partitioned into a \\(2\\) by \\(2\\) grid of \\(4\\) rectangular sections as shown in the figure. In
        each section the farmer will plant one crop: corn, wheat, soybeans, or potatoes. The farmder does not want to grow corn and wheat in any two sections that share a border, and the farmer does not want to grow soybeans and potatoes in any two sections that share a border. 
        Given these restrictions, in how many ways can the farmer choose crops to plant in each of the four sections of the field?`,
        image: 'amc10202018.png',
        solution: `<b>84</b><p>Call corn, wheat, soybeans, and potatoes, \\(c,w,s,\\) and \\(p\\), respectively. The rules tell us, effectively, that \\(c\\) and \\(w\\) and then \\(s\\) and \\(p\\) have to be diagonal. Note also, that the question does not say that we have to use each crop once.</p>
        <p>If we do have all of one kind, the process is a bit complicated. The way I saw it, you take one pair, let's use \\(c\\) and \\(w\\). You know they have to be diagonal. There are \\(4\\) ways for them to be diagonal (2 in each orientation and then flipping the values), and for each of those \\(4\\), the values of \\(p, s\\) can
        be reversed, so there are \\(8\\) total there.</p>
        <p>If we have all of one kind, obviously there are just \\(4\\). </p>
        <p>If we have \\(2\\) kinds, it has to be ones that don't have restrictions against each other. For each group of \\(2\\), there are \\(4\\) choose \\(2\\) =  \\(6\\) ways. We can have \\(cs, cp, ws, wp\\) for a total of \\(6 \\cdot 4=24\\)</p>
        <p>Let's say we have \\(3\\) of one crop and \\(1\\) of another. Same process as before, there are \\(4\\) combinations for the types of crops, but then we double this because the order matters and then we do \\(4\\) choose \\(3\\) for \\(16\\). We double this, however, because we can switch which is \\(3\\) and which is \\(1\\)</p>
        <p>Finally, if we have a \\(2\\), \\(1\\), \\(1\\) situation. Effectively, a pair that cannot share a border, and then the other two are diagonal. There are \\(2\\) for the ones that must be diagonal, and then \\(2\\) ways to choose the \\(2\\) of a kind crop. There's \\(4\\) combinations. There are \\(2\\) ways to orient the diagonals and another \\(2\\) for switching the 
        order of the letters, so that gives \\(2^4=16\\)</p>
        $$
        8+4+24+32+16=84
        $$`,
        answer: '84',
        topic: 'casework',
    },
    {
        title: `AMC 10A 2021 Fall Problem 21 <span class="material-symbols-outlined staricon">
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
        text: `Each of the \\(20\\) balls is tossed independently and at random into one of the \\(5\\) bins. Let \\(p\\) be the probability that some bin ends up with \\(3\\) balls, another with \\(5\\) balls, and the other three with \\(4\\) balls each. Let
        \\(q\\) be the probability that every bin ends up with \\(4\\) balls. What is \\(\\frac{p}{q}\\)?`,
        solution: `<b>16</b><p>The actual concept for this isn't super complicated, it really just comes down to arithmetic and quick simplification</p>
        <p>The denominators for both \\(p\\) and \\(q\\) are gonna be \\(5^20\\) which cancels, so we don't worry about it. </p>
        <p>For \\(p\\) we do \\(5\\\) CHOOSE \\(1\\) \\(3\\) times (to pick which bin has \\(3, 4, 5\\)), and then we do \\(20\\) choose some number that represents the number of balls in each bin. </p>
        <p>For \\(q\\), we do \\(20\\) choose \\(4\\) repeatedly because we pick which balls go in each bin. The whole simplification is rather long, and a bit trivial, but it ends up at \\(16\\)`,
        answer: '16',
        topic: 'combinations',
    },
    {
        title: `AMC 10B 2021 Fall Problem 14 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `Una rolls \\(6\\) standard \\(6\\)-sided dice simultaneously and calculates the product of the \\(6\\) numbers obtained. What is the probability that the product is divisible by \\(4\\)?`,
        solution: `<b>'\\(\\frac{59}{64}\\)'</b><p>The product is divisible by \\(4\\) if you either roll at least one \\(4\\) or two \\(2\\)s, or a \\(2\\) and a \\(6\\), or a \\(6\\) and a \\(6\\). That's quite a handful. Instead, we find the chance that none of these happen. This happens when either the answer is odd or divisible by \\(2\\) and not \\(4\\)</p>
        <p>For it to be odd, we need all the factors to be odd. There's a \\(\\frac{1}{2}^6=\\frac{1}{64}\\) chance of this</p>
        <p>If it's divisble by \\(2\\) but not \\(4\\), we need \\(5\\) odds and then either a \\(2\\) or a \\(6\\). That's \\(\\frac{1}{2}^5 \\cdot \\frac{1}{3}=\\frac{1}{192}\\). However, since there are \\(6\\) positions that the \\(2\\) or \\(6\\) can be in, we multiply by \\(6\\) for \\(\\frac{1}{16}\\). We add these and subtract from \\(1\\) for \\(\\frac{59}{64}\\)</p>
        <h3> Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
        <p>When you have an incredibly hard or complex probability to calculate, it often helps you to focus on the other probability, assuming there are two cases. This is called complementary counting`,
        type: 'mc',
        choices: ['\\(A) \\frac{3}{4}\\)', '\\(B) \\frac{57}{64}\\)', '\\(C) \\frac{59}{64}\\)', '\\(D) \\frac{187}{192}\\)', '\\(E) \\frac{63}{64}\\)'],
        answer: '\\(C) \\frac{59}{64}\\)',
        topic: 'complementary counting',
    },
    {
        title: `AMC 10A 2022 Problem 9 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `A rectangle is partitioned into \\(5\\) regions as shown.  
        Each region is to be painted a solid color - red, orange, yellow, blue, or green - so that regions that touch are painted different colors,
         and colors can be used more than once.
         How many different colorings are possible?`,
        image: 'amc1020229.png',
        solution: `<b>540</b><p>We do casework based on the number of colors</p>
        <p>If we use \\(5\\) colors, we have \\(5! 120\\) ways to color it</p>
        <p>If we use \\(4\\) colors, we caneither have the top right and bottom left or the top left and bottom right, or bottom two corners. These are identical probabilities, so we'll just multiply by \\(3\\).</p>
        <p>There are \\(5\\) ways to choose the color repeated twice. There are \\(4\\) choose \\(3=4\\) ways to choose the remaining \\(3\\) colors and \\(3!=6\\) ways to order them. That gives us \\(5 \\cdot 4 \\cdot 6 =120\\). We multiply this by \\(3\\) for \\(360\\)</p>
        <p>Finally, if we have \\(3\\) colors. Once again, we use the corners. We have \\(5\\) choose \\(2=10\\) ways to choose the ones repeated, and we multiply that by \\(2\\). The last one has \\(3\\) possibilities. That gives \\(20 \\cdot 3 =60\\). Thus, we have \\(120+360+60=540\\)   `,
        answer: '540',
        topic: 'casework',
    },
    {
       title: `AMC 10A 2022 Problem 14 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
       used: false,
       difficulty: 3,
        text: `How many ways are there to split the integers \\(1\\) through \\(14\\) into \\(7\\) pairs such that in each pair, the greater number is at least \\(2\\) times the lesser number?`,
        solution: `<b>144</b><p>We know for a fact that \\((7,14)\\) has to be a pair. That gives \\((6,13)\\) or \\((6,12)\\). Consequently, \\((5,10), (5,11), (5,12), (5,13)\\), but the last two depend on the value that \\(6\\) is paired with</p>
        <p>\\(1,2,3,4\\) can be with any number. That being said, remmber that \\(8-14\\) cannot pair because for the smallest  value \\(8\\) we need \\(\\ge 16\\), which we don't have. Thus gives us \\(2\\) for \\(6\\), \\(3\\) for \\(5\\) (since it can't be one of \\(6\\)'s values) and \\(4\\) for 4, and so on so that we have \\(2 \\cdot 3 \\cdot 4!=144\\)`,
        answer: '144',
        topic: 'logic'
    },
    {
        title: `AMC 10A 2022 Problem 22 <span class="material-symbols-outlined staricon">
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
        text: `Suppose that \\(13\\) cards numbered \\(1,2,3,...,13\\) are arranged in a row. The task is to pick them up in numerically increasing order, working repeatedly from left to right. In the example below, cards \\(1,2,3\\) are picked up on the first pass, \\(4\\) and \\(5\\)
        on the second pass, \\(6\\) on the third pass, \\(7,8,9,10\\) on the fourth pass, and \\(11,12,13\\) on the fifth pass. For how many of the \\(13!\\) possible orderings of the cards will the \\(13\\) cards be picked up in exactly two passes?`,
        solution: `<b>8178</b><p>Let's find some shorter sequences and then work our way up. For the first \\(3\\) values, we have \\(4\\) sequences. We see \\((1,3,2), (2,1,3), (2,3,1), (3,1,2)\\). Trying with \\(4\\) gives \\(11\\). With \\(5\\) we have \\(26\\) so we set up \\(2^n-n-1\\). This is
        a trick called engineer's induction, finding a helpful pattern. Inputing \\(13\\) give \\(8178\\)`,
        answer: '8178',
        topic: 'patterns',
    },
    {
        title: `AMC 10A 2022 Problem 12 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `A pair of fair \\(6\\)-sided dice is rolled \\(n\\) times. What is the least value of \\(n\\) such that the probability that the sum of the numbers face up on a roll equals \\(7\\) at least once is greater than \\(\\frac{1}{2}\\)</p>`,
        solution: `<b></b><p>We know the probability of the sum being \\(7\\) is \\(\\frac{1}{6}\\) because each value has a pair that will make it add to \\(7\\). Since the first value doesn't matter, we have the probability is based on the second value, thus meaning that there's a
        probability of \\(\\frac{1}{6}\\). We can't exactly find the combined probability for \\(\\frac{1}{4}\\), so instead we use complementary counting, or finding the probability that it does NOT sum to \\(7\\), which is \\(1-\\frac{1}{6}\\), which is \\(\\frac{5}{6}\\). The probability of this after \\(n\\) rolls needs to be less than \\(\\frac{1}{2}\\), so we set up \\(\\frac{5}{6}^n < \\frac{1}{2}\\) and some experimentation with the ansewr choices gives us \\(n=4\\)`,
        type: 'mc',
        choices: ['\\(A) 2\\)', '\\(B) 3\\)', '\\(C) 4\\)', '\\(D) 5\\)', '\\(E) 6\\)'],
        answer: '\\(C) 4\\)',
        topic: 'complementary counting',
    },
    {
        title: `AMC 10A 2023 Problem 7 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        text: `Janet rolls a standard \\(6\\)-sided die \\(4\\) times and keeps a running total of the numbers she rolls. What is the probability that at some point, her runing total will equal \\(3\\)?`,
        solution: `<b>\\(\\frac{49}{216}\\)</b><p>She can't have a running total of \\(3\\) after more than \\(3\\) rolls. Let's find the probability that her running total is \\(3\\) after \\(1,2,3\\) rolls as different cases</p>
        <p>With \\(1\\) roll, she needs to run a \\(3\\), which is a \\(\\frac{1}{3}\\) chance</p>
        <p>With \\(2\\) rolls, she needs either a \\(2, 1,\\), or a \\(1, 2\\). Each of these have a probability of \\(\\frac{1}{6} \\cdot \\frac{1}{6}=\\frac{1}{36}\\) so the total probability is \\(\\frac{2}{36}=\\frac{1}{18}\\)</p>
        <p>For \\(3\\) rolls, we need three \\(1\\)s, with a \\(\\frac{1}{6}^3\\) probability, which works out to \\(\\frac{1}{216}\\)</p>
        <p>Adding all of these together gives us \\(\\frac{1}{6}+\\frac{1}{18}+\\frac{1}{216}=\\frac{49}{216}\\)`,
        type: 'mc',
        choices: ['\\(A) \\frac{2}{9}\\)', '\\(B) \\frac{49}{216}\\)', '\\(C) \\frac{25}{108}\\)', '\\(D) \\frac{17}{72}\\)', '\\(E) \\frac{13}{54}\\)'],
        answer: '\\(B) \\frac{49}{216}\\)',
        topic: 'casework',
    },
    {
        title: `AMC 10A 2023 Problem 13 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `A number ic chosen at random from among the first \\(100\\) positive integers, and a positive integer divisor of that number is chosen at
        What is the probability that the chosen divisor is divisble by \\(11\\)?`,
        solution: `<b>\\(\\frac{9}{200}\\)</b><p>First, we need to calculate the probability of the chosen integer having \\(11\\) as a factor at all. We have \\(11, 22, 33, 44, 55, 66, 77, 88, 99\\). That's \\(\\frac{9}{100}\\)</p>
        <p>We have \\(11\\), a \\(\\frac{1}{100}\\) chance of getting chosen. It has a prime factorization of \\(11\\) meaning that it has \\(2\\) factors, \\(1\\) divisible by \\(11\\) (being 11 itself). Thus, there's a \\(\\frac{1}{2}\\) for a combined probability of \\(\\frac{1}{200}\\)</p.
        <p>For \\(22\\) we have factors \\(1, 2, 11, 22\\). \\(2\\) of these are divisibleso we have \\(\\frac{1}{200}\\) again</p>
        <p>\\(33\\) gives \\(1,3,11,33\\), same pattern, so again \\(\\frac{1}{200}\\)</p>
        <p>We begin to realize a pattern, that each one is \\(\\frac{1}{2}\\), because each divisor has a pair (we have no perfect squares) so the probability is just \\(\\frac{1}{200} \\cdot {9} = \\frac{9}{200}\\)
        `    ,
        type: 'mc',
        choices: ['\\(A) \\frac{4}{100}\\)', '\\(B) \\frac{9}{200}\\)', '\\(C) \\frac{1}{20}\\)', '\\(D) \\frac{11}{200}\\)', '\\(E) \\frac{3}{50}\\)'],
        answer: '\\(B) \\frac{9}{200}\\)',
        topic: 'induction',
    },
    {
       title: `AMC 10A 2023 Problem 20 <span class="material-symbols-outlined staricon">
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
       text: `Each \\(3 \\times 3\\) grid of squares is colored red, white, blue, or green so that every \\(2 \\times 2\\) square contains one square of each color. One such coloring is shown on the right below.
       How many different colorings are possible?`,
       solution: `<b>72                              </b><p>Start at the top riht square. We have \\(4!\\) ways to arrange it. Next, bottom right, we have \\(3\\0 spaces left, and what we put there defines the rest, so we have \\(4! \\cdot 3 = 24 \\cdot 3 = 72\\)`,
       answer: '72',
       topic: 'counting', 
    },
    {
        title: `AMC 10B 2023 Problem 19 <span class="material-symbols-outlined staricon">
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
        text: `Sonya the frog chooses a point uniformly at random lying within the square \\([0,6] \\times [0,6]\\) in the coordinate plane and hops to that point. She then randomly chooses a distance uniformly at random from \\([0,1]\\), and a direction
        uniformly at random from {north, south, east, west}. All her choices are independent. She now hops the distance in the chosen direction. What is the probability that she lands outside ths square`,
        solution: `<b>\\(\\frac{1}{12}\\)</b><p>He can only land outside the square if he first hops onto a border square. There are \\(20\\) of these out of \\(36\\), which gives a \\(\\frac{5}{9}\\). For \\(16\\) of the border squares, you need to jump \\(1\\) in the right direction which gives a \\(\\frac{1}{2} \\cdot \\frac{1}{4}=\\frac{1}{8}\\) chance
        <p>For the other \\(4\\), you can jump in two directinos for a \\(\\frac{1}{4}\\) probability...We don't actually need the whole combined probability. We multiply the \\(\\frac{1}{8}\\) by the probability of her picking one of those squares which is \\(\\frac{16}{36}=\\frac{4}{9}\\) for a probability of \\(\\frac{1}{18}\\). We multiply 
        \\(\\frac{1}{4}) by \\(\\frac{4}{36}=\\frac{1}{9}\\) for a probability of \\(\\frac{1}{36}\\). Adding these together gives us \\(\\frac{1}{18}+\\frac{1}{36}=\\frac{1}{12}\\)`,
        type: 'mc',
        choices: ['\\(A) \\frac{1}{6}\\)', '\\(B) \\frac{1}{12}\\)', '\\(C) \\frac{1}{4}\\)', '\\(D) \\frac{1}{10}\\)', '\\(E) \\frac{1}{9}\\)'],
        answer: '\\(B) \\frac{1}{12}\\)',
        topic: 'casework',
    },
    {
        title: `AMC 10B 2023 Problem 21 <span class="material-symbols-outlined staricon">
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
        text: `Each of \\(2023\\) balls is randomly placed into one of \\(3\\) bins. Which of the following is closets to the probability that each of the bings will contain an odd number of balls?`,
        solution: `<b>\\(\\frac{1}{4}\\)</b><p>We know that every odd number is \\(2k+1\\) for some integer \\(k\\). We know each bin must have at least \\(1\\), so we find \\(1012\\) choose \\(2\\), effectively figuring out how many different variations we can have. We then divide this by the total number of 
        ways to sort it, which is of course, \\(2023\\) choose \\(3\\). This gives us a probability of \\(\\frac{1}{4}\\) after some simplification`,
        type: 'mc',
        choices: ['\\(A) \\frac{2}{3}\\)', '\\(B) \\frac{3}{10}\\)', '\\(C) \\frac{1}{2}\\)', '\\(D) \\frac{1}{3}\\)', '\\(E) \\frac{1}{4}\\)'],
        answer: `\\(E) \\frac{1}{4}\\)`,
        topic: 'combinations',
    }, 
    {
        title: `AMC 10A 2024 Problem 6 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 2,
        title: `What is the minimum number of successive swaps of adjacent letters in the string \\(ABCDEF\\) that are needed to change the string to \\(FEDCBA\\)? (For example, \\(3\\) swapps are required to chance \\(ABC\\) to \\(CBA\\); one such sequence of swaps is \\(ABC --> BAC --> BCA --> CBA\\).)`,
        solution: `<b>15</b><p>The easiest way to do this is to start by moving \\(A\\), and then \\(B\\), and then \\(C\\) and so on, which takes \\(5+4+3+2+1=15\\)`,
        answer: `15`,
        topic: 'logic',
    },
    {
       title: `AMC 10A 2024 Problem 9 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
       used: false,
       difficulty: 2,
       text: `In how many ways can \\(6\\) juniors and \\(6\\) seniors form \\(3\\) disjoint teams of \\(4\\) people so that each team has \\(2\\) juniors and \\(2\\) seniors?`,
       solution: `<b>1350</b><p>We start with the juniors. There are \\(6\\) choose \\(2=15\\) ways for them to make the first group, and then \\(4\\) choose \\(2=6\\) ways to choose the second. The last is set. That's \\(15 \\cdot 6\\), and just as many for the seniors. We  get
       \\(8100\\) but divide by \\(3!\\), which is the number of ways to arrange the group (because the order doesn't matter). This gives us \\(1350\\) </p>
       <h3>Common Mistake <SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN><SPAN CLASS="MATERIAL-SYMBOLS-OUTLINED">
EXCLAMATION
</SPAN></h3>
       <p>Don't forget to divide by \\(3!\\). A big part of math, especially competition math, is knowing exactly what you are doing, not just plugging numbers into equations. Understanding why and what happens is vital for solvingAMC 10 Problems`,
       type: 'mc',
       choices: ['\\(A) 720\\)', '\\(B) 1350\\)', '\\(C) 2700\\)', '\\(D) 3280\\)', '\\(E) 8100\\)'],
       answer: '\\(E) 1350\\)',
    },
    {
        title: `AMC 10A 2024 Problem 17 <span class="material-symbols-outlined staricon">
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
        text: `Two teams are in a best-two-out-of-three playoff: the teams will play at most \\(3\\) games, and the winner of the playoff is the first team to win \\(2\\) games. The 
        first game is played on Team A's homefield, and the remaining games are played on Team B's home field. Team A has a \\(\\frac{2}{3}\\) chance of winning at home, and it's probability when playing away from home is 
        \\(p\\). Outcomes of the games are independent. The probability that Team A wins the playoff is \\(\\frac{1}{2}\\). Then \\(p\\) can be written in the form \\(\\frac{1}{2}(m-\\sqrt{n})\\)where \\(m\\) and \\(n\\) are positive integers. What is \\(m+n\\)`,
        solution: `<b></b><p>Say A wins the first round. They have a \\(\\frac{2}{3}\\) chance of winning that, and a \\(p\\) chance of winning the next match, ending the playoffs. They have a \\(1-p\\) chance of loosing and a \\(p\\) chance of winning the last match. That gives \\(\\frac{2}{3}p+\\frac{2}{3}(1-p)p\\). If they lose the
        first match, a \\(\\frac{1}{3}\\) chance, they must win the next two games, so \\(\\frac{1}{3}p^2\\). This is all equal to \\(\\frac{1}{2}\\)</p>
        $$
        \\frac{2}{3}p+\\frac{2}{3}(1-p)p+\\frac{1}{3}p^2=\\frac{1}{2}
        $$
        <p>This gives \\(p=\\frac{4 \\pm \\sqrt{10}}{2}\\). It must be negative because \\(p\\) needs to be less than or equal to \\(1\\). We have \\(m=4\\) and \\(n=10\\) for \\(m+n=14\\)
        `,
        answer: '14',
        topic: 'casework',
    },
    {
        title: `AMC 10B 2024 Problem 17 <span class="material-symbols-outlined staricon">
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
        text: `In a race among \\(5\\) snails, there is at most one tie, but that tie can involve any number of snails. For example,
        the result of the race might be that Dazzler is first, Abby, Cyrus, and Elroy are tied for second; and Bruna is fifth. How many different
        results of the race are possible?`,
        solution: `<b>431</b><p>We do some casework based of snails in a tie</p>
        <p>For \\(5\\), there's \\(1\\), where they all tie for first</p>
        <p>For \\(4\\), we have \\(5\\) choose \\(4=5\\) ways to find which snails are in the tie. The remaining snail can be in \\(2\\) places, ahead or behind the tie. That gives \\(10\\)</p>
        <p>For \\(3\\) we have \\(5\\) choose \\(3=10\\) combinations for the tie. The remaining \\(2\\) can be either both in front, both in back, or on either side in \\(2!=2\\) orders, so that gives \\(600\\)</p>
        <p>For \\(2\\), we have \\(5\\) choose \\(2=10\\). We can have \\(3\\) in front, \\(2\\) in front, \\(1\\) in front, or \\(0\\) front in \\(3!=6\\0 ways which give us \\(4 \\cdot 6 \\cdot 10=240\\) ways.</p>
        <p>For \\(1\\) in a tie, or no ties, we have \\(5!=120\\) ways. Adding gives \\(1+10+20+240+120=413\\)`,
        answer:'431',
        topic: 'casework',
    },
    {
        title: `AMC 10B 2024 Problem 20 <span class="material-symbols-outlined staricon">
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
        text: `Three different pairs of shoes are placed in a row so that no left shoe is next to a right shoe from a different pair. In how many ways can these six shoes be lined up?`,
        solution: `<b>60</b><p>Let's do some casework. If we start with a left shoe, we have </p>
        <p>LRRLLR, where each shoe is being put with its pair. There are \\(2\\) variations of this, because the last \\(3\\) combinations for the starting pair and \\(2\\) ways to order the remaining ones. Thus,
        there are \\(6\\) ways to do this particular sequence</p>
        <p>LLRRRL, we have \\(3\\) possibilities for the first, \\(2\\) for the second, \\(1\\) for the thid, \\(1\\) for the forth, and essentially \\(1\\) for the rest. There's \\(6\\) here</p>
        <p>LRRRLL, we have \\(3, 1, 2, 1, 1, 1,\\), so \\(6\\) again</p>
        <p>A bit of induction tells us that most, if not all sequences will have \\(6\\). Thus, we find \\(10\\) potential patterns for \\(6 \\cdot 10\\)</p>`,
        type:'mc',
        choices: ['\\(A) 60\\)', '\\(B) 72\\)', '\\(C) 90\\)', '\\(D) 108\\)', '\\(E) 120\\)'],
        answer: '\\(A) 60\\)',
        topic: 'induction',
    },
    {
        title: `AMC 10B 2024 Problem 22 <span class="material-symbols-outlined staricon">
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
        text: `A group of \\(16\\) people will be partitioned into \\(4\\) indistinguishable \\(4\\)-person committees. Each committee will have one chairperson and one secretary. 
        The number of different ways to make these assignments can be written as \\(3^r M\\), where \\(r\\) and \\(M\\) are positive integers and \\(M\\) is not divisibly by \\(3\\). What is \\(r\\)?`,
        solution: `<b>5</b><p>We have \\(16\\) choose \\(4\\) ways to choose the first committee, and then \\(12\\) choose \\(4\\) for the second, and so on. We have \\(4!\\) ways to order the committees, but we divide by \\(4!\\) because they are indistinguishable. This gives us \\(\\frac{16!}{(4!)^5})</p>
        <p>Each group has \\(4 \\cdot 3 = 12\\) ways to pick the two roles. Thus, we have \\(\\frac{16!}{(4!)^5}\\cdot 12^4 which has \\(3^5\\) in the factorization, so we have \\(r=5\\))`,
        answer:'5',
        topic: 'prime factorization'
    },
    {
        title: `AMC 10A 2025 Problem 12 <span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span><span class="material-symbols-outlined staricon">
star
</span>`,
        used: false,
        difficulty: 3,
        text: `Carlos uses a \\(4\\)-digit passcode to unlock his computer. In his pascode, exatly one digit is even, exactly one (possibly different) digit is prime, and
        no digit is \\(0\\). How many \\(4\\)-digit passcodes satisfy these conditions?`,
        solution: `<b>464</b><p>Let's say that the even and prime are the same. Thus, we have \\(2\\) which can be in \\(4\\) different places. The remaining three must be odd composite numbers, which must be \\(9\\) or \\(1\\). That gives us \\(2^3 \\cdot 4 = 32\\) possibilities</p>
        <p>If the even and prime digit are different, we must have two values that are either\\(9\\) or \\(1\\). We need to have a \\(4,6,8\\) and a \\(3,5,7\\). We have \\(4\\) ways to place the even, \\(3\\) ways to place the prime, and \\(2\\) variants for the remaining ones, wihch gives, \\(4 \\cdot 3  \\cdot 3 \\cdot 3 \\cdot 2 \\cdot 2 =432\\)  
    <p>Adding these together gives us \\(432+32=464\\)`,
    answer: '464',
    topic: 'casework',
    },
    {
        title: `AMC 10A 2025 Problem 16 <span class="material-symbols-outlined staricon">
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
        text: `There are three jars. Each of three coins is placed in one of the three jars, chosen at random and independently of the placements of the other coins. What is the expected number of coins in a jar with the most coins?`,
        solution: `<b>\\(\\frac{17}{9}\\)</b><p>We calculate the probabiity of the higher jar having \\(x\\) number of coins</p>
        <p>Case 1: All 3. There are \\(3\\) choose \\(1\\) = \\(3\\) ways to pick which jar, and a \\(\\frac{1}{3}^3=\\frac{1}{27}\\) chance of them all ending up there. We have \\(\\frac{3}{27}  \\cdot 3 =\\frac{1}{3}\\), which we multiply by \\(3\\) because it's expected outcome</p>
        <p>Case 2: We have \\(3\\) choose \\(2=3\\) ways to pick which has \\(2\\), and \\(2\\) choose \\(1=2\\) ways to pick which has \\(1\\). There are \\(3\\) choose \\(2=3\\) ways to pick which coins are in the most, so we have \\(3 \\cdot 2 \\cdot 3 = 18\\) and then \\(\\frac{18}{27} \\cdot 2= \\frac{4}{3}\\)</p>
        <p>Case 3: They each have \\(1\\). There are \\(3!=6\\) ways for this to happen. We have \\(\\frac{6}{27}=\\frac{2}{9}\\).</p>
        <p>Adding these gives \\(\\frac{1}{3} +\\frac{4}{3} + \\frac{2}{9}=\\frac{17}{9}\\)</p>`,
        type: 'mc',
        choices: ['\\(A) \\frac{4}{3}\\)', '\\(B) \\frac{13}{9}\\)', '\\(C) \\frac{5}{8}\\)', '\\(D) \\frac{17}{9}\\)', '\\(E) 2\\)'],
        answer: '\\(D) \\frac{17}{9}\\)',
        topic: 'expected outcome',
    },
    {
        title: `AMC 10A 2025 Problem 25 <span class="material-symbols-outlined staricon">
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
        text: `A point \\(P\\) is chosen at random inside square \\(ABCD\\). The probability that \\(\\overline{AP}\\) is neither the shortest nor the longest side of \\(\\triangle APB\\) can be written as 
        \\(\\frac{a+b\\pi -c\\sqrt{d}}{e}\\, where \\(a,b,c,d\\) and \\(e\\\) are positive integers, \\(\\textup{gcd}(a,b,c,e)=1\\), and \\(d\\) is not divisible by the square of a prime. What is \\(a+b+c+d+e\\)? `,
        solution: `<b>25</b>Let's just assume that the height of the square is \\(1\\) and that \\(AB\\) is the top. The solution will work whatever you do, but this is forced simplification. Since we're dealing with probability instead of
        concrete area,we use whatever is simplest in a technique called "forced simplification".</p>
        <p>We can either have \\(AB>AP>BP\\) or \\(BP>AP>AB\\), so we'll do some casework based on that</p>
        <p>We divide the square in half vertically. For all points on the left, we have \\(AP < AB\\) and for all values on the right we have \\(AP>AB\\) (on the line gives \\(AP=AB\\) but that doesn't matter too much)
        Drawing a quarter arc of radius \\(1\\) centered around \\(A\\) gives us an area bounded such that inside \\(AP < AB\\)</p>
        <p> For our first case, \\(AB>AP>BP\\), we need to be inside the circle on the right. We draw a line from \\(A\\) to where the arc intercepts the line. This has length \\(1\\) and makes a \\(60\\) degree angle with \\(AB\\) (because the distance from \\(AD\\) is \\(\\frac{1}{2}\\) and the length is \\(1\\) so we figure through trig). 
        The area of the slice is \\(\\frac{\\pi}{6}\\). We subtract the area of the triangular part bounded by the line we drew, the vertical line, and half of \\(AB\\) which is \\(\\\\sqrt{3}{8}\\) (find the side lengths through pythag theorem. The total area of this space is \\(\\frac{\\pi}{6}-\\sqrt{3}{8}\\)</p>
        <p>For our second case, we're looking outside the arc but on the left of the line. For this, we'll find the area of the wedge made by the arc, \\(AD\\) and the line to the intersection, the area of the triangle (we found it before to be \\(\\frac{\\sqrt{3}}{8}\\)), and subtract it from \\(\\frac{1}{2}\\). The arc has an area of \\(\\frac{pi}{12}\\)so we have an area 
        of \\(\\frac{1}{2}-\\frac{\\pi}{12}-\\frac{\\sqrt{3}}{8}\\)</p>
        <p>We have the probability to be \\(\\frac{\\frac{\\pi}{6}-\\frac{\\sqrt{3}}{8}+\\frac{1}{2}-\\frac{\\pi}{12}-\\frac{\\sqrt{3}}{8}}{1}\\) which we simplify down to
        \\(\\frac{6+\\pi-3\\sqrt{3}}{12}\\) for \\(6+1+3+3+12=25\\)</p>
        `,
        answer: '25',
        topic: 'composite shapes',
    },
    {
        
    }
]

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
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"));
const questionChoices = document.getElementById("mc-container")
const submitSolutionButton = document.getElementById("submit-a-solution");
const submitSolutionForm = document.getElementById("submit-a-solution-form");
submitSolutionButton.addEventListener("click", function() {
        submitSolutionForm.style.display = 'block';
        submitSolutionButton.style.display = 'none';
})



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
    submitSolutionForm.style.display = "none";
    submitSolutionButton.style.display='block'
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
            btn.innerHTML = q.choices[i];
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
    const correctAnswer = questions[currentQuestion].answer.trim();
    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
            progressBarFunction();
            streakCount++;
            correctCount++;
        document.getElementById("streak-count").innerHTML = streakCount;
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
        document.getElementById("streak-count").innerHTML = streakCount;
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
    questionTitle.innerHTML = "All done!";
    questionText.innerHTML = "You've completed all questions.";
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
    document.getElementById("total-questions").innerHTML = questions.length;
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



// Update center card whenever carousel moves

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
    document.getElementById("streak-count").innerHTML = streakCount;

    // Hide dashboard
    document.getElementById("stats-dashboard").classList.add("hidden");

    // Show questions again
    loadQuestion(currentQuestion);
    problemsWrapper.classList.remove("hidden");
});




console.log(questions.length)

// ---------- Start ----------
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
document.getElementById("btn-signup").addEventListener("click", async () => {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  const username = document.getElementById("auth-username").value;
  const passwordCheck = document.getElementById("auth-password-check")
  if (!email || !password || !username) {
    document.getElementById("signup-error").innerHTML = "Please fill out all fields"
    return
  }
  if (password == passwordCheck){
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return alert(error.message);
  if (data.user) {
    await supabase.from('profiles').insert([
      { 
        id: data.user.id, 
        username: username, 
        probabilitySorted: questions,
        probabilityIndex: currentQuestion,
        probabilityStreak: streakCount
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
async function loadUserStats(userId) {
  const { data: profile, error } = await supabase
    .from('profiles')
   .select('id, username, probabilitySorted, probabilityIndex')
   .eq('id', userId)

  if (error) {
    console.error("Error downloading profile data:");
    return;
  }

  if (profile) {
    console.log(profile)
    let userProfile = profile[0]
    console.log(userProfile.username)
    questions = userProfile.probabilitySorted || questions;
    currentQuestion = userProfile.probabilityIndex || 0;
    document.getElementById("username-display").innerHTML = userProfile.username
    streakCount =  userProfile.probabilityStreak || 0
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
probabilitySorted: questions,
probabilityIndex: currentQuestion,
probabilityStreak: streakCount

    })
    .eq('id', userId); // ⚠️ CRITICAL: Ensure you only update THIS user's row!

  if (error) {
    console.error("Failed to sync stats to cloud database:", error.message);
  }

}