(function () {
const questions = [
    {
title: `AMC 10A 2020 Problem 17 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
used: false,
difficulty: 3,
rating: 1200,
text: `<p>Define</p>
$$
P(x)=(x-1^2)(x-2^2)...(x-100^2)
$$
<p>How many integers \\(n\\) are there such that \\(P(n) \\leq 0\\)?`,
type: 'mc',
choices: ['\\(A) 4900\\)', '\\(B) 4950\\)', '\\(C) 5000\\)', '\\(D) 5050\\)', '\\(E) 5100\\)'],
solution: `<b>5100</b><p>If \\(P(n)=0\\), that already gives us \\(100\\) values, because each different term can be a \\(0\\)</p>
<p>If we don't, we have \\(50\\) ranges for which it works, because every other range between zeroes changes the number of negative factors</p>
<p>Notice that this gives a bunch of differences of squares, which, when expanded just gives the sum of numbers from \\(1\\) to \\(100\\) that sums to \\(5000\\). We have \\(5000+100=5100\\)`,
answer: '\\(E) 5100\\)',
topic: 'counting',
hint: `Think about the "ranges" for which \\(P(x) < 0\\) and for which \\(P(x) > 0\\) and how they interact sequentially (think about how the ranges affect the number of negative factors).`,
step: "Divide all values of \\(P(x)\\) into \\(100\\) ranges based on how they affect the factors of \\(P(x)\\)"
    },
    {
    title:`AMC 10A 2021 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
    used: false, 
    difficulty: 3,
rating: 1200,
    text: `Values for \\(A,B,C,\\) and \\(D\\) are to be selected from \\({1,2,3,4,5,6}\\) without replacement (i.e. no two letters have the same value). How many ways are there to make such choices so that the two curves \\(y=Ax^2+b\\) and \\(y=Cx^2+D\\) intersect? (The order in which the curves are listed does not matter; for example, the choices \\(A=3, B=2, C=4, D=1)\\) is considered the same as the choices \\(A=4, B=1, C=3, D=2)\\)`, 
    type: 'mc', 
    choices: ['\\(A) 30\\)', '\\(B) 60\\)', '\\(C) 90\\)', '\\(D) 180\\)', '\\(E) 360\\)'], 
    answer: '\\(C) 90\\)', 
    solution: `<b>90</b><p>Some basic logic tells us that for every value, it will give two parabolas that intersect, this is because we just get differently stretched hyperbola at different z-offsets. This is because there are no negatives to worry about, essentially. Thus, we do \\(6\\) choose \\(2\\) times \\(4\\) choose \\(2=90\\)`, 
    topic: 'logic', 
    hint: `Think about how transformations work with quadratics and parabolas`,
    step: "Try graphing the equation with arbitrary values of \\(A,B,C,\\) and \\(D\\)"
    },
    {
        title: `AMC 10B 2024 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Real numbers \\(a,b,\\) and \\(c\\) have arithmetic mean of \\(0\\). The arithmetic mean of \\(a^2,b^2\\) and \\(c^2\\) is \\(10\\). What is the arithmetic 
        mean of \\(ab, ac, bc\\)?`,
        type: 'mc',
        choices: ['\\(A) -5\\)', '\\(B) \\frac{-10}{3}\\)', '\\(C) \\frac{-10}{9}\\)', '\\(D) 0\\)', '\\(E) \\frac{10}{9}\\)'],
        solution: `<b>-5</b><p>We have that \\(\\frac{a+b+c}{3}=0\\) so \\(a+b+c=0\\). Squaring this gives \\(a^2+b^2+c^2+2ab+2bc+2ac=0\\).</p>
        <p>We know that \\(\\frac{a^2+b^2+c^2}{3}=10\\) so \\(a^2+b^2+c^2=30\\) and \\(2ab+2bc+2ac=-30\\). We have that \\(ab+bc+ac=-15\\) and we divide by \\(3\\) for \\(-5\\)`,
        answer: '\\(A) -5\\)',
        topic: 'factoring',
        hint: `Try writing out what these statements actually mean, and then relating them to quadratic and factored equations.`,
        step: "Solve for \\(a+b+c\\) and square it"
    },
{ 
    title: `AMC 10A 2025 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
    used: false, 
    difficulty: 2,
rating: 1000, 
    text: `Suppose \\(a\\) and \\(b\\) are real numbers. When the polynomial \\(x^3+x^2+ax+b\\) is divided by \\(x-1\\), the remainder is \\(4\\). When the polynomial is divided by \\(x-2\\), the remainder is \\(6\\). What is \\(b-a\\)?`, 
    solution: `<b>18</b><p>We do synthetic division, effectively treating \\(a\\) and \\(b\\) like numbers. We end up with \\(a+b+2=4\\) and \\(2a+b+12=6\\). We solve for \\(a=-8\\), \\(b=10\\), so \\(10-(-8)=18\\)`, 
    choices: ['\\(A) 14\\)','\\(B) 15\\)', '\\(C) 16\\)', '\\(D) 17\\)', '\\(E) 18\\)'], 
    answer: '\\(E) 18\\)', 
    topic: 'division',
    type: "mc",
    hint: `Try using synthetic division`,
    step: "Do synthetic division and treat \\(a\\) and \\(b\\) as constants to get algebraic equations that you can solve to find the variables"
},
    {
        used: false,
        difficulty: 1,
rating: 800,
        title: `AMC 10A 2025 Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        text: `A team of students is going to compete against a team of teachers in a trivia contest. The 
        total number of students and teachers is \\(15\\). Ash, a cousin of one of the students, wants to 
        join the contest. If ash plays with the students, the average age on that team will increase from 
        \\(12\\) to \\(14\\). If Ash plays with the teachers, the average age on that team will decrease from \\(55\\) to \\(52\\).
        How old is Ash?`,
        type: 'mc',
        choices: ['\\(A) 28\\)', '\\(B) 29\\)', '\\(C) 30\\)', '\\(D) 32\\)', '\\(E) 31\\)'],
        solution: `<b>28</b><p>We have \\(s\\) students and \\(t\\) teachers. We have that \\(\\frac{12s+a}{s+1}=14\\) and \\(\\frac{55t+a}{a+1}=52\\) and also that \\(t+s=15\\). We find that \\(a=28\\)`,
        answer: '\\(A) 28\\)',
        topic: 'algebraic manipulation',
        hint: `Set up an algebraic equation and solve`,
        step: "Solve the equations \\(\\frac{12s+a}{s+1}=14\\) and \\(\\frac{55t+a}{a+1}=52\\) and \\(t+s=15\\)"
    },
    {
        used: false,
        difficulty: 1,
rating: 800,
        title: `AMC 10B 2022 Problem 4 <span class="material-symbols-outlined">
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
<h3>Common Mistake<span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
<p>The easiest way to mess up this problem is by misinterpreting what the question is asking. Notice that it asks for the 700th hiccup, but the first hiccup is already accounted for. Make sure to read thoroughly and not to fall for the trick of calculating the duration of 700 hiccups instead of 699.`,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topic: "word problems",
        hint: `Make sure you don't over or under count! Be careful when converting units`,
        step: "Find how much time epapsed in \\(699\\) hiccups (not \\(700\\) because the first one doesn't count)"
    },
    {
        used: false,
        difficulty: 1,
rating: 800,
        title: `AMC 10A 2021 Spring Problem 3 <span class="material-symbols-outlined">
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

<h3>Common Mistake<span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
<p>Make sure you understand wwhy the first number is \\(\\times 10\\) the other. This intuition isn't just important for this question, but questions in general`,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topic: "algebraic manipulation",
        hint: 'write an algebraic equation, and think about the relationship between the two numbers',
        step: "Write the equation \\(x+10x=17402\\) because the larger number is \\(10 \\times \\) the smaller one"
    },
    {
        used: false,
        difficulty: 1,
rating: 800,
        title: `AMC 10A 2021 Spring Problem 1 <span class="material-symbols-outlined">
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
        topic: "arithmetic",
        hint: "Compute with simple arithmetic, expand if nescessary",
        step: "Solve each term seperately"
    },
    {
        used: false,
        difficulty: 1,
rating: 800,
        title: `AMC 10A 2023 Problem 1 <span class="material-symbols-outlined">
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
        hint: "Set up an algebraic equation relating the two",
        step: "Use the expressions \\(8(h+1)\\) and \\(12h\\) to model the distance that each person travels"

    },
    {
        used: false,
        difficulty: 2,
rating: 1000,
        title: `AMC 10A 2025 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
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
        
        <h3>Common Mistake<span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Remember what you are solving for. An easy mistake is to forget the \\(y=f(x-a)\\) entirely, which will make the question infinitely more confusing.`,
        topic: "functions and graphing",
        hint: "Since we are substituting for \\(x-a\\) when \\(x=1\\), we can substitute that in for \\(x\\).",
        step: "Factor out \\(100x\\) and substitute \\(1-a\\) for \\(x\\)"
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
        answer: "\\(A) -120\\)",
        solution: `<b> -120 </b> <p>Pure intuition tells is that \\(10!\\) is going to be less than \\(7! \\cdot 6!\\), but let's expand that further.</p>
        <p> First let's consider the definition of a factorial, and expand it all out: </p>
        $$
        10 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1
        $$
        $$
        7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1
        $$
        $$
        6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1
        $$
        <p>Note that the majority of \\(10!\\) overlaps with \\(7!\\). If we can account for the other numbers, \\(10\\), \\(9\\), and \\(8\\), we can prove that the second term is larger.</p> 
        <p>\\(10\\) is \\(5 \\cdot 2 \\), which we can find in \\(6!\\) </p>
        <p> With the numbers we have left, we can't get \\(9\\) or \\(8\\), but we can we can confidently say that the remaining product is greater than \\(6!\\). This means that \\(10!\\) is less than \\(7! \\cdot 6!\\), meaning that the answer would be negative. Since there is only one negative answer, the answer must be -120. </p>
        <p> On the AMC 10, it is not always the best option to compute everything. Due to the time constraint, if you see an answer that is different, or if you have a strong intuition, it could be strategic to go with that. </p> 
        
        <h3>Common Mistake<span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Don't overcomplicate! Be sure to read the whole question, with all answers first. If one sticks out, ask yourself why. No need to solve a whole factorial when you can ues logic.</p>`,
        topic: "logic",
        hint:"Which answer sticks out?",
        step: "Expand the factorial",
    },
    {
        used: false,
        difficulty: 1,
rating: 800,
        title: `AMC 10B 2024 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        text: "For how many integer values \\(x\\) is \\(|2x| \\le 7\\pi \\)",
        type: "fr",
        answer: "19",
        solution: `<b> 19 </b> <p> First, let's get an approximation for \\(7\\pi\\). Assuming \\(\\pi = 3.14\\) we can just multiply them and find the nearest integer that is less than or equal to the product. Since 0.14 is a relatively small decimal, it's pretty intuitive that this integer is \\(21\\). Knowing this, we can rewrite our question to </p>
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
        <p>From here, we know that the bounds are \\(x = 10\\) and \\(x = -10\\). Counting all integers between these two numbers yields 19, because 0 can only be counted once. </p>
        <h3>Common Mistake<span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Don't double-count 0. An easy mistake to make is thinking the answer is 10+10, but remember that 0 can only be counted once. You can also just check that the answer is 19 by counting on your fingers(yes you'd have to reset, but it is a decent way to assure youreslf of your answer.)</p>
        `,
        topic: "inequalities",
        hint: "What is \\(7\\pi\\) equal to? Can we do casework in this situation?",
        step: "Find the closest integer value of \\(7\\pi\\)"
    },
    {
        used: false,
        difficulty: 3,
rating: 1200,
        title: `AMC 10B 2024 Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
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
        topic: "algebraic manipulation",
        hint: "Simplify \\(\\sqrt{1183}\\) and solve in terms of that...(just try it it will make sense)",
        step: "Rewrite \\(1183\\) as \\(13\\sqrt{7}\\) and \\(sqrt{x}\\) as \\(a\\sqrt{7}\\) and \\(\\sqrt{y}\\) as \\(b\\sqrt{7}\\)"
    },
    {
        used: false,
        difficulty: 3,
rating: 1200,
        title: `AMC 10B 2024 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
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
        <h3>Common Mistake<span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>While you don't have to, and really shouldn't, try to graph out every point on coordinate grid, it definitely helps to have a sketch and get an idea of what you are solving for. Also, both of the equations were some sort of way of building on common functions/equations. Make sure you know your basics so that you can expand further!</p>`,
        topic: "functions and graphing",
        hint: "Try to graph it! Even if you don't have desmos or a graphing calculator on the real test, it helps to make a rough sketch",
        step: "Recognize that \\(|x|+|y| \\le 8\\\\) is a square rotated \\(45^\\circ\\) with vertices with \\(x\\) and \\(y\\) values at \\(8\\), \\(-8\\) on some axis"
    },
    {
        used: false,
        difficulty: 5,
rating: 1600,
        title: `AMC 10B 2024 Problem 24 <span class="material-symbols-outlined">
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
        <h3>Common Mistake<span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Don't forget that you can sum decimals to get an integer. Be careful not to assume that the values all have to be integers`,
        topic: "modular arithmetic",
        hint: "Break it down into cases, and then consider the divisibility of \\(2022, 2023, 2024,\\) and \\(2025\\)",
        step: "Find a rule for the remainders of each term"
    },
    {   
        used: false,
        difficulty: 1,
rating: 800,
        title: `AMC 10A 2024 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        text: "What is the value of \\(9901 \\cdot 101 - 99 \\cdot 10101 \\)?",
        answer: "2",
        solution: `<b>2</b>
        <p>There are a LOT of ways to solve this one, so I suggest you check the link attatched below to see all, especially because a question like this can really easily take up time. The most straightforward, and in my opinion easy, solution is direct computation. Howver, this takes time that we may not have on the AMC 10. However, here is a decently fast solution that I find easy to understand as well.
        <p>Notice that \\(9901\\) is equal to \\((99 \\cdot 110) + 1\\) and \\(10101\\) is equal to \\((100 \\cdot 101)+1\\). Knowing this, we arrange the equation to be \\(101(99 \\cdot 100 +1) - 99(101 \\cdot 100 + 1)\\), or \\(101(99 \\cdot 100)+101-99(101 \\cdot 100)+99\\) which solves down to \\(2\\).
        <a>https://artofproblemsolving.com/wiki/index.php?title=2024_AMC_10A_Problems/Problem_1</a>`,
        topic: "factoring",
        hint: "How can you factor \\(9901\\) and \\(10101\\) to have common terms (Hint, you might have to add or subtract something)",
        step: "Factor \\(9901\\) as \\((99 \\cdot 110)+1\\) and \\(10101\\) as \\(100(100 \\cdot 101) + 1\\)"
    },
    {   
        used: false,
        difficulty: 1,
rating: 800,
        title: `AMC 10A 2024 Problem 2 <span class="material-symbols-outlined">
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
        hint: "Set up the algebraic equations and insert every variable you can",
        step: "Insert the variables you know into the equations given"
    },
    {
        title: `AMC 10A 2024 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: "The product of \\(3\\) integers is \\(60\\). What is the least posible positive sum of the 3 integers.",
        type: "mc",
        used: false,
        difficulty: 2,
rating: 1000,
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
        <b>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></b>
        <p>Don't forget that you can always use \\(1\\) and the number itself as factors. In situations like these, the more options you give yourself, the better.`,
        topic: "prime factorization",
        hint: "What factors could you be missing in the prime factorization?",
        step: "Find the prime factorization"
    },
    {
        title: `AMC 10A 2024 Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: "Amy, Bomani, Charlie, and Daria work in a chocolate factory. On Monday, Amy, Bombani, and Charlie started working at \\(1:00 PM\\) and were able to pack \\(4, 3\\) and \\(3\\) packages, respectively, every \\(3\\) minutes. At some later time Daria joined the group and was able to pack \\(5\\) packages every \\(4\\) minutes. Together they finished packing \\(450\\) packages at exactly \\(2:45 PM\\). At what time did Daria join the group?",
        type: "mc",
        used: false,
        difficulty: 2,
rating: 1000,
        choices: ["\\(A) 1:25 PM\\)", "\\(B) 1:35 PM\\)", "\\(C) 1:45 PM\\)", "\\(D) 1:55 PM\\)", "\\(E) 2:05 PM\\)"],
        answer: "\\(A) 1:25 PM\\)",
        solution: `<b> 1:25 PM </b><p>To solve this, let's first find out how many packages Amy, Bomani, and Charlie made in total. We know that they worked for \\(1\\) hour and \\(45\\) minutes, or \\(105\\) minutes. We don't really have to find the 
        exact rate that they each pack packages at because \\(105\\) is divisible by \\(3\\). Since we know that alltogether they make \\(4+3+3=10\\) packages every 3 minutes, we divid \\(105\\) by \\(3\\) to get \\(35\\) and multiply by 10. In the time they worked, they made
        350 packages alltogether. This means that Daria made the reamining  \\(450-350=100\\) packages. Since he makes \\(5\\) packages every \\(4\\) minutes, we first divide \\(\\frac{100}{5}=20\\) and then multiply \\(20 \\cdot 4\\) to find how long he needs in minutes, whcih works out to be \\(80\\) minutes. \\(80\\) minutes is an hour and \\(20\\) minutes, and an hour and \\(20\\) minutes before \\(2:45 PM\\) is \\(1:25 PM\\).</p>`,
        topic: "systems of equations",
        hint: "How many packages do Amy, Bombani, and Charlie make altogether? How much does Daria need to make?",
        step: "Find out how many packages Amy, Bombani, and Charlie make in \\(3\\) minutes"
    },
    {
        title: `AMC 10A 2024 Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: "How many ordered pairs of integers \\((m,n)\\) satisfy \\(\\sqrt{n^2-49}=m\\)",
        type: "mc",
        used: false,
        difficulty: 3,
rating: 1200,
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
        <h3>Common Mistake<span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Don't forget to keep going and really think everything through. Some answers are a lot more simple than you think, so take a moment to reflect and look at the question. Since you don't need to answer every question to qualify for AIME, don't worry too much about time if it comes at the cost of getting something right.</p>
        `,
        topic: "algebraic manipulation",
        hint: "What equation does this look like? (Hint: think right triangles)",
        step: "Take out the root and and rewrite so that the constant is on one side",
    },
    {
        title: `AMC 10A 2024 Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: "Zelda played the <i>Adventures of Math</i> game on August 1 and scored \\(1,700\\) points. She continued to play daily over the next \\(5\\) days. The bar chart below shows the daily change in her score compared to the day before. (For example, Zelda's score on August 2 was \\(1,700+80=1,780\\) points.) What was Zelda's average score in points over the \\(6\\) days? <b>Do not put a comma in your answer</b> ",
        type: "fr",
        used: false,
        image: "assets/question-diagrams/amc-10-2024-problem-12.png",
        difficulty: 3,
rating: 1200,
        answer: "1715",
        solution: `<b>1715</b><p>Notice that we do not have to actually calculate the totals on each day. If we calculate the averages of the scores relative to the original \\(1700\\) and add that to \\(1700\\) it will have the same effect. Recall that the numbers are relative to the day before, not the starting score. WIth this, set up the following equation:
        $$
        1700+\\frac{80-10-20+40+0}{6}
        $$
        <p> Which solves to \\(1715\\)</p>`,
        topic: "arithmetic",
        hint: "How much do the scores deviate from the original value?",
        step: "Find the deviation from the original score by finding how they relate to each other"
    },
    {
        title: `AMC 10A 2024 Problem 23 <span class="material-symbols-outlined">
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
        text: "Integers \\(a, b,\\) and \\(c\\) satisfy \\(ab+c=100\\), \\(bc+a=87\\), and \\(ca+b=60\\). What is \\(ab+bc+ca\\)?",
        type: "mc",
        choices: ["\\(A) 212\\)", "\\(B) 247\\)", "\\(C) 258\\)", "\\(D) 276\\)", "\\(E) 284\\)"],
        used: false,
        difficulty: 5,
rating: 1600,
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
        hint:   "What operations can you do with the equations to solve for \\(a, b,\\) and \\(c\\)? How can we use the information that \\(a, b\\) and \\(c\\) must all be integers? Can any of them be negative?",
        step: "Add the first two equations and factor to find all possible values for \\(b\\)"
    },
    {
        title: `AMC 10B 2023 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        text: `Mrs. Jones is pouring orange juice into four identical glasses for her four sons. She fills the first three glasses completely but runs out of juice when the fourth glass is only \\(\\frac{1}{3}\\) full. What fraction of a glass must Mrs. Jones pour from each of the first three glasses into the fourth glass so that all four glasses will have the same amount of juice?`,
        type: "mc",
        used: false,
        difficulty: 1,
rating: 800,
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
        hint: "You don't have to use exact numbers, jus try to find the relations and use ratios",
        step: "Assign a variable for the portion of the pitcher in each of the first \\(3\\) cups, and create an equation to solve for \\(x\\)"
    },
    {
        title: `AMC 10B 2023 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        text: `Carlos went to a sports store to buy running shoes. Running shoes were on sale with prices reduced by \\(20%\\) on every pair of shoes. Carlos also knew that he had to pay a 
        \\(7.5%\\) sales tax on the discounted price. He had \\(43\\) dollars. What is the origina (before discount) price of the most expensive shoes he could afford to buy?`,
        used: false,
        difficulty: 1,
rating: 800,
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
        topic: "percents",
        hint: "Try to set up an algebraic equation using the decimal form of percents.",
        step: "Use the equation \\(1.085(0.8x)=43\\)"
    },
    {
        title: `AMC 10B 2023 Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        text: `Maddy and Lara see a list of numbers written on a blackboard. Maddy adds \\(3\\) to each number in the list and finds that the sum of her new numbers is \\(45\\). Lara multiplies each number in the list by \\(3\\) and finds that the sum of her new numbers is also \\(45\\). How many numbers are written on the blcakboard?`,
        used: false,
        difficulty: 1,
rating: 800,
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
        choices: ['\\(A) 10\\)', '\\(B) 11\\)', '\\(C) 12\\)', '\\(D) 13\\)', '\\(E) 14\\)'],
        hint: "Try writing an algebraic equation to model the number of terms and the sum",
        step: "First find the sum of values on the board prior to any alteration"
    },
    {
        title:`AMC 10B 2023 Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: `<p>When the roots of the polynomial</p>
        $$
        P(x)=(x-1)^1(x-2)^2(x-3)^3...(x-10)^10
        $$
        <p>are removed from the number line, what remains is the union of 11 disjoint open interavls. On how many of these intervals is \\(P(x)\\) positive?`,
        used: false,
        difficulty: 3,
rating: 1200,
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
        hint: "What conditions in the factors make \\(P(x)\\) negative? What conditions make the intervals negative?",
        step: "Write down the different ranges and see which ones make an even number of odd powers negative. Try to find a pattern"
    },
    {
        title: `AMC 10B 2023 Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 3,
rating: 1200,
        text: `What is the area of the region on the coordinate plane defined by
        $$
        ||x|-1|+||y|-1| \\le 1?
        $$`,
        type: "fr",
        answer: "8",
        solution: `<b>8</b><p>If you have graph paper or just scratch paper you can easily draw this out and see that it is 4 diamonds around the origin. However, let's explain why that is.</p>
        <p>I always like to think of absolute value graphs as "cases" because it combines a bunch of different linear graphs. In this case, we see that the different "cases" in which the slope and \\(y\\) intercept and \\(x\\) intercept are positive, negative etc. A general rule when you see equations that look like \\(|x|+|y| < z\\) is that it will include squares of some sort.</p>
        <p>Returning to the question, we know that the intercepts are at \\(\\pm 1\\). We use the pythagorean theorem to find that the side lengths of the squares are \\(\\sqrt{2}\\), and square that to find that they all have areas of \\(2\\). Since there are four squares, we multiply that by four and find a final solution of \\(8\\)`,
        topic: "functions and graphing",
        hint: "Try to graph this. It doesn't have to be accurate, but it helps to visualize the shape.",
        step: "Graph by using casework for \\(x\\) is positive or negative and \\(y\\) is positive or negative"
    },
    {
        title: `AMC 10B 2023 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 3,
rating: 1200,
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
        hint: "Try to manipulate the RHS and see what you can bound the possible solutions by",
        step: "By adding \\(mn\\)n on both sides, derive that \\((m+n)^2=mn(mn+1)\\)"
    },
    {
        title: `AMC 10B 2023 Problem 22 <span class="material-symbols-outlined">
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
rating: 1600,
        text: "How many distinct values \\(x\\) satisfy \\(\\lfloor{x}^2\\rfloor-3x+2=0\\) where \\(\\lfloor{x}\\rfloor\\) denotes the largest integer less than or equal to \\(x\\)",
        used: false,
        type: "mc",
        choices: ["\\(A) Infinitely Many\\)", "\\(B) 4\\)", "\\(C) 2\\)", "\\(D) 3\\)", "\\(E) 0\\)"],
        answer: "\\(B) 4\\)",
        solution: `<b>4</b><p>By factoring the equation into \\((x-2)(x-1)=0\\), we can easily find two solutions, \\(1\\) and \\(2\\). Those are the only integer solutions. Now let's look at real numbers in general.</p>
        <p>We rewrite the equation as \\(\\lfloor{x}^2\\rfloor=3x-2\\). This tells us that a linear graph is equal to the exponential progression of another graph. Since we have a square on one side, and a square of an integer, we know that the LHS must be \\(geq 0\\). If it is \\(0\\), that gives \\(\\frac{2}{3}\\). We can test a few other values within 
        reason for \\(\\lfloor{x}^2\\rfloor\\), \\(1\\) gives us \\(x=1\\), we knew that. \\(4\\) gives us \\(2\\), once again,we knew that. \\(9\\) gives us \\(\\frac{11}{3}\\)). \\(16\\) gives us \\(\\frac{18}{3}\\) which is greater than \\(5\\). From here on out, we can make the
        conjecture that the values of \\(x\\) won't fit the floor function, giving us \\(4\\) solutions`,
        topic: "floor functions",
        hint: "Imagine the behavior in a normal graph, and then consider the floor",
        step: "Rewrite has \\(\\lfloor{x}^2\\rfloor=3x-2\\)"
    },
    {
        title: `AMC 10A 2023 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        difficulty: 1,
rating: 800,
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
        topic: "speed-distance-time",
        hint: "Write equations modeling the distances from City A",
        step: "Use the equations \\(d=18h\\) and \\(d=45-h\\) to model the distance from City A as a function of \\(h\\)"
    },
    {
        title: `AMC 10A 2023 Problem 2 <span class="material-symbols-outlined">
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
        topic: "systems of equations",
        hint: "Try setting up an algebraic equation to relate the values",
        step: "Use the equatoin \\(\\frac{1}{3}p+3 \\frac{1}{2}o=\\frac{3}{4}p+\\frac{1}{2}o\\)"
    },
    {
        title: `AMC 10A 2023 Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: `Barb the baker has developed a new temperature scale for her bakery called the Breadus scale, which is a linear function of the Fahrenheit scale. Bread rises at \\(110\\) degrees Fahrenheit which is \\(0\\) degrees on the Breadus scale. Bread is baked at \\(350\\) degrees Fahrenheit, which is \\(100\\) degrees on the Breadus scale. Breada is done when its internal temperature is \\(200\\) degrees Farenheit. What is this, in degrees, on the Breadus scale? Answer as a decimal.`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        topic: "systems of equations",
        hint: "Use the constraints and given information to make a linearequations",
        step: "Solve the equation \\(350=100m+110\\)"

    },
    {
        title: `AMC 10A 2023 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: `Maureen is keeping track of the mean of her quiz scores this semester. If Maureen scores an \\(11\\) on the next quiz, her mean will increase by \\(1\\). If she scores an \\(11\\) on each of the next three quizzes, her mean will increase by \\(2\\). What is the mean of her scores currently?`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        topic: "averages",
        hint:"You can use the equation for averages\\(\\frac{\\textup{sum of }n}{n}\\) to create a system of equations.",
solution: "Write the equations \\(\\frac{mn + 11}{n+1}=m+1\\) and \\(\\frac{mn+33}{n+3}=m+2\\) where \\(m=\\) mean and \\(n=\\) tests she has taken"
    },
    {
        title: `AMC 10B 2022 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        difficulty: 1,
rating: 800,
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
        hint: "You can use basic arithmetic to solve this",
        step: "Substitute everything in and solve the equation \\(|1-|2-3||-||1-2|-3|\\)"
    },
    {
        title: `<span class="material-symbols-outlined">
star
</span>`,
        difficulty: 1,
rating: 800,
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
        <h3>Disclaimer <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Realistically, if this solution is too hard to follow, you can solve by brute force. While eloquent solutions like these may be faster, what's most important is that it makes sense to you. Don't worry about taking too long on a question. Quality \\(>\\) Quantity is what matters in AMC 10. `,
        topic: "algebraic manipulation",
        hint: "How can you apply difference of squares to the original equation?",
        step: "Use the difference of squares in the denominator to rewrite \\(\\frac{(1+\\frac{1}{3})(1+\\frac{1}{5})(1+\\frac{1}{7})}{\\sqrt{(1+\\frac{1}{3})(1+\\frac{1}{5})(1+\\frac{1}{7})} \\sqrt{(1-\\frac{1}{3})(1-\\frac{1}{5})(1-\\frac{1}{7})})}\\)"
    },
    {
        title: `AMC 10B 2022 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 2,
rating: 1000,
        used: false,
        text: `For how many values of the constant \\(k\\) will the polynomial \\(x^2+kx+36\\) have two distinct integer roots?`,
        answer: "8",
        solution: `<b>8</b><p>To solve, start by finding how many integer factors \\(36\\) has. We find that the prime factorization is \\(2^2 \\cdot 3^2\\), which means that \\(36\\) has \\(3 \\times 3 = 9\\) factors that could be roots of the equation.</p>
        <p>That doesn't mean that \\(9\\) is our solution, however. Recall that \\(36\\) is a perfect square, so having \\(6\\) as a factor would mean that \\(6\\) is the ONLY factor. That doesn't meet our criteria, so we effectively ignore it and know that there are \\(8\\) values for \\(k\\)`,
        topic: "quadratics",
        type: "fr",
        hint: "The number of pairs of factors of \\(36\\) is related to the number of values for \\(k\\)",
        step: "Find the number of factors of \\(36\\) and the number of factor pairs"
    },
    {
        title: `AMC 10B 2022 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        difficulty: 2,
rating: 1000,
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
        <h3>Disclaimer <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>This solution uses a trick called Engineer's Induction, which is essentially the assumption of validity in patterns. While it is not always right, I find that in situations like this, it can save time for the AMC 10. If you disagree and/or have time, always feel free to solve on your own.`,
        topic: "induction",
        hint: "Is there any pattern to the sums of \\(\\frac{n-1}{n!}\\)",
        step: "List the sums of the first \\(1, 2, 3\\) etc. values"
    }, 
    {
        title: `AMC 10B 2022 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 3,
rating: 1200,
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
        hint: "How can you create a system of equations using the sum of series?",
        step: "Solve for \\(a\\) by setting up a ratio between the equations for \\(S_{3n}\\) and \\(S_{n}\\) and finding the possible values for \\(a\\)"
    },
    {
        title: `AMC 10B 2022 Problem 21 <span class="material-symbols-outlined">
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
rating: 1600,
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
        <h3>Solving hint <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        Don't be afraid to just mess around. If you made it to question 21, that's great already, so go with your gut and try to reason things out. The using \\(K\\) and \\(Q\\) isn't nescessarily mathematically founded, it's just a literal interpretation of the question
        `
        ,
        answer: "23",
        topic: "algebraic manipulation",
        hint: "Try to think about the remainders and coefficients not so much as equations, but numbers and constants. What does it mean for a value divided by another value to have a remainder of a certain thing? Can you write an expression for that?",
        step: "Use the expressions \\(K(x^2+x+1)+(x+2)\\) and \\((x^2+1)(Y) + (2x+1)\) and set them equal to each other (\\(K\\) and \\(Y\\) are not nescessarily constant)"
    },
    {
        title: `AMC 10B 2022 Problem 24 <span class="material-symbols-outlined">
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
rating: 1600,
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
        <p>Just imagine we're taking the slope of the graph of \\(f(f(x))\\) (or the double derivative)</p>
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
        topic: "functions and graphing", 
        hint: "How can you relate this to the slope formula to predict the value of \\(f(x)\\)?",
        step: "Input \\(f(800)\\) and \\(f(400\\) as the inputs for \\(x\\) and \\(y\\), then find the maximum value of \\(f(800)-f(400)\\)"
    }, 
    {
        title: `AMC 10A 2022 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        difficulty: 1,
rating: 800, 
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
        hint: "Try solving this using basic arithmetic",
        step: "Solve by brute force and arithmetic using the rules for fractions"
    },
    {
    title: `AMC 10A 2022 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
    difficulty: 1,
rating: 800,
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
    topic: "speed-distance-time",
    hint: "Start by finding his speed",
    step: "Find Mike's speed (distance divided by time)"
    }, 
    {
        title: `AMC 10A 2022 Problem 3 <span class="material-symbols-outlined">
star
</span>`, 
        difficulty: 3,
rating: 1200,
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
        hint: "Use variables to show the relationship between the numbers?",
        step: "Write equations to describe every rule listed in the question"
    
    },
    {
        title: `AMC 10A 2022 Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `In some countries, automobile fuel efficiency is measured in liters per \\(100\\) kilometers while other countries use miles per gallon.
        Suppose that \\(1\\) kilometer equals \\(m\\) miles, and \\(1\\) gallon equals \\(l\\) liters. Which of the following gives the fuel efficiency in liters per \\(100\\) kilometers for 
        a car that gets \\(x\\) miles per gallon?`,
        type: 'mc', 
        choices: ["\\(A) \\frac{x}{100lm}\\)", "\\(B) \\frac{xlm}{100}\\)", "\\(C) \\frac{lm}{100x}\\)", "\\(D) \\frac{100}{xlm}\\)", "\\(E) \\frac{100lm}{x}\\)"],
        solution: `<b>\\(\\frac{100lm}{x}\\)</b><p>We know that a car that gets \\(x\\) miles per gallon needs \\(\\frac{100}{x}\\) gallons to go \\(100\\) miles. If one gallon is equal to \\(l\\) miles, we multiply that by \\(l\\). We now have \\(\\frac{100l}{x}\\), which tells us how many liters it takes to travel \\(100\\) miles. We see only one answer that has \\(100lm\\) in the numerator
        so we know that the answer is \\(\\frac{100lm}{x}\\).`,
        answer: "\\(E) \\frac{100lm}{x}\\)",
        topic: "word problems", 
        hint: "Use logic and set up an equation to manipulate",
        step: "Find the number of gallons needed to go \\(100\\) miles"

    },
    {
        title: `AMC 10A 2022 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,     
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
        hint: "How does squaring and absolute value affect the equation?",
        step: "Go operation by operation with \\(-a\\)"

    },
    {
        title: `AMC 10A 2022 Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 3,
rating: 1200,
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
        topic: "exponents",
        hint: "How can you use exponents to express this equation?",
        step: "Rewrite \\(\\frac{1}{4096}\\) in base \\(2\\)"
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
        used: false,
        difficulty: 4,
rating: 1400,
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
        hint: "How can you write the terms in relation to the rest using exponents?",
        step: "Write equations such as \\(x+y=57\\), \\(x+d+yr=60\\), and so on?"
    },
    {
        title: `AMC 10B Fall 2021 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: "What is the value of \\(1234+2341+3412+4123\\)?",
        solution: `<b>11110</b><p>With something like this, it's simply easier to just brute force your way through. Add the values and find that it is \\(11110\\).</p>
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>If you can brute force it, don't be afraid to. Sometimes, especially towards the start, it's better to get all the easy questions done than to wate time trying to find an eloquent solution.</p>`,
        answer: "11110",
        type: "fr",
        topic: "arithmetic",
        hint: "Is this something you can brute force or solve with arithmetic?",
        step: "Solve with basic arithmetic"
    },
    {
        title: `AMC 10B Fall 2021 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
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
        hint: "How can you factor and simplify this? Is this something you can brute force, if possible?",
        step: "Solve with arithmetic"
    },
    {
        title: `AMC 10B Fall 2021 Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text:`At noon on a certain day, Minneapolis is \\(N\\) degrees warmer than St. Louis. At \\(4:00\\) the temperature in Minneapolis has fallen by 
        \\(5\\) degrees while the temperature in St. Louis has risen by \\(3\\) degrees, at which time the temperatures in the two cities differ by \\(2\\) degrees.
        What is the product of all possible values of \\(N\\).`,
        type: "fr",
        solution: `<b>60</b><p>There are two possibilities: One in which the temperature in St. Louis ends up warmer, and one in which the temperature in Minneapolis ends up warmer.</p>
        <p>Consider the first case: Using pure logic, we know that the temperatures would've had to have started \\(6\\) degrees apart</p>
        <p>In the second case, the temperatures are \\(5+3+2=10\\) degrees apart</p>
        <p>\\(6 \\cdot 10 = 60\\)</p>`,
        answer: "60",
        topic: 'logic',
        hint: "How can you divide this into cases? What are the possible ways in which the difference can be \\(2\\), given those contstraints?",
        step: "Calculate two cases, on ein which St. Louis ends up warmer, and another where Minneapolis ends up warmer"
    },
    {
        title: `AMC 10B Fall 2021 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        hint: "What 4 cattegories can we divide the knights into? How many are in each cattegory?",
        step:  "Try breaking this down into cattegories: Magical Red Knights, Nonmagical Red Knights, Magical Blue Knights, Non Magical Blue Knights. You might not have to calculate each one, but look at those instead of Red and Blue vs Magic and Non-Magic",
    },
    {
        title: `AMC 10B Fall 2021 Problem 22 <span class="material-symbols-outlined">
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
rating: 1600,
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
        topic: "modular arithmetic",
        hint: "Can you find a pattern for the values of \\(S_{n}\\), and from there, find a attern for the remainders modulo \\(3\\)?",
        step: "Find the first few values of \\(S_{n}\\) and find a pattern"
    },
    {
        title: `AMC 10A Fall 2021 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `What is the value of \\(\\frac{(2112-2021)^2}{169}\\)?`,
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
        hint: "Subtract \\(2112-2021\\) and see if you can solve by prime factorization",
        step: "Reduce \\(2112-2021=91\\) into \\(13 \\cdot 7\\)"
    },
    {
        title: `AMC 10A Fall 2024 Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
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
        topic: "speed-distance-time",
        hint: "Try breaking down the trip into seperate parts and solving the time of those independently",
        step: "Find the total time for each route and each segment of each route individually"
    },
    {
        title: `AMC 10A Fall 2021 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Make sure you remember to divide by \\(40\\), not \\(41\\). If you want to check why it is \\(40\\), try drawing \\(3\\) lines. Notice that there are 
        \\(2\\) spcaes contained within them, not \\(3\\). This occurs because in order for a "space" to be formed, it needs to be confined on both sides, meaning the last line doesn't have something
        to confine the space attatched to it.</p>
        `,
        answer: "8",
        topic: "word problems",
        hint: "Be careful not to over count! You can start by finding how long each movement goes by counting the intervals between poles.",
        step: "Find the total number of spaces betewen poles (not poles!) and the distance between them"
    },
    {
        title: `AMC 10A Fall 2021 Problem 11  <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 3,
rating: 1200,
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
        hint: "How far does the ship move when Emily goes from back to front and vicsa versa? It has to do with the ship covering it's own distance.",
        step: "Going from back to front, the ship travels \\(210-x\\) and from front to back \\(x-42\\)"
    },
    {
        title: `AMC 10A 2021 Fall Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200, 
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
        <h3>Common  Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>If you do chose to graph, be as careful as you can with graphing things, because, especially when looking for solutions, you need as much to be accurate as possible</p>`,
        topic: "functions and graphing",
        hint: "What is the shape of the second graph? What happens when you square an absolute value graph (use casework, if you don't know)?",
        step: "Graph a parabola and two diamonds. Where do they intersect?"
    },
    {
        title: `AMC 10A Fall 2021 Problem 16<span class="material-symbols-outlined">
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
rating: 1400,
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
        hint: "Calculate the symetry of each operation independently and the effect they have on each other",
        step: "Start by calculating the symetry of \\(|\\lfloor x \\rfloor|\\)"
    },
    {
        title: `AMC 10A Fall 2021 Problem 20 <span class="material-symbols-outlined">
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
rating: 1400,
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
        hint: "What equation gives us the number of solutions for a quadratic equation?",
        step: "Use the discriminant \\(b^2 -4ac\\) and find the values of \\(b\\) and \\(c\\) that let the discriminant be greater than \\(0\\)"
    },
    {
        title: `AMC 10B Spring 2021 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `How many integer values of \\(x\\) satisfy \\(|x| < 3\\pi\\)?`,
        solution: '<b>19</b><p>We know that \\(3 \\pi \\approx 9\\). Thus, \\(x\\) can be all values between \\(-9\\) and \\(9\\), inclusive. We count or just use logic and find that there are \\(19\\) such values</p>',
        answer: "19",
        topic: "inequalities",
        type: "fr",
        hint: "What is \\(3\\pi\\) equal to?",
        step: '\\(Approximate \\(3\\pi\\) as \\(\\aprox 9\\)'
    },
    {
        title: `AMC 10B Spring 2021 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        type: "mc",
        choices: ["\\(A) 0\\)", "\\(B) 4\\sqrt{3} -6 \\)", "\\(C) 6\\)", "\\(D) 4 \\sqrt{3}\\)", "\\(E) 4\\sqrt{3} +6 \\)" ],
        text: `What is the value of \\(\\sqrt{(3-2\\sqrt{3})^2}+\\sqrt{(3+2\\sqrt{3})^2}\\)?`,
        answer: "\\(D) 4 \\sqrt{3}\\)",
        solution: `<b>\\(4 \\sqrt{3}\\)</b><p>At first, it may seem intuitive to ignore the squaring and root and just solve, because those take the inverses, right? Not exactly.</p>
        <p>Recall that squaring makes everything positive. We first need to check if anything is negative, because that will affect the result.</p>
        <p> \\(\\sqrt{3}\\) is slightly more than \\(1.5\\), meaning that \\(2\\sqrt{3}\\) is greater than \\(3\\). The squared value in the first term is negative. Squaring this and taking the square root gives the absolute value instead, which is 
        \\(2\\sqrt{3}-3\\). \\(3+2\\sqrt{3}\\) remains the same when squared and taken the root of, so we just add and get a final answer of \\(4\\sqrt{3}\\).</p>
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>If it sounds like a trick question, chances are that it is. Think through things carefuly and recall what squaring and other such things really does, asie frm what is obvious</p>`,
        topic: "squares",
        hint: "Squaring is not exactly the inverse of roots, it makes everything positive",
        step: "Solve staying aware that squaring makes numbers positive no matter what"
    },
    {
        title: `AMC 10B Spring 2021 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
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
        hint: "Set up a system of equations equating the number of students on the debate team from both classes, and another relating the total number of students in the program.",
        step: "Use the equations \\(s=28-j\\) and \\(0.25j=2.8-0.1j\\)"
    },
    {
        title: `AMC 10B Spring 2021 Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `At a math contest, 57 students are wearing blue shirts, and another 75 students are wearing yellow shirts. The 132 students are assigned into 66 pairs. 
        In exactly 23 of these pairs, both students are wearing blue shirts. In how many pairs are both students wearing yellow shirts?`,
        type: `fr`,
        solution: `<b>32</b><p>If there are \\(23\\) pairs where both students are wearing blue shirts than, alltogether, those students are wearing \\(23 \\cdot 2 = 46\\) blue shirts. The rest of the blue shirts must be worn with yellow
        shirts, so there are \\(57-46=11\\) pairs with one blue and one yellow. We've accounted for \\(23+11=34\\) pairs, so the remaining \\(32\\) must both be wearing yellow shirts.`,
        answer: "32",
        topic: "word problems",
        hint: "How many students in blue shirts are left to be in a `mix-matched` pair",
        step: "Find how many total students are in a pair where both are blue, and then how many are in a mix-matched. The remaining are yellow"
    },
    {
        title: `AMC 10B Spring 2021 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        hint: "Use the equation for averages, but instead of having the concrete values, use ratios",
        step: "Use the equation \\(\\frac{(84 \\cdot 3) + (70 \\cdot 4)}{7}\\)"
    },
    {
        title: `AMC 10B Spring 2021 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        hint: "You may not be able to solve for \\(x\\), but can you solve for some different value relating to \\(x\\), (for example, \\(x^2\\)",
        step: "Factor \\(x^3\\) out of the second equation and thensquare the first to solve for \\(x^2\\)"
    },
    {
        title: `AMC 10B Spring 2021 Problem 19 <span class="material-symbols-outlined">
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
rating: 1400,
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
        hint: "How can you change the averages equation to account for the different scenarios listed",
        step: "Call the sum of all values in \\(S\\), \\(s\\). Call the largest value \\(x\\) and the smallest value \\(y\\). Call the number of values in \\(S\\), \\(n\\). We can set up the following equations:</p> \\(\\frac{s-x}{n-1}=32\\), \\(\\frac{s-x-y}{n-2}=35\\),\\(\\frac{s-y}{n-1}=40\\), \\(x-y=72\\)"
    },
    {
        title: `AMC 10A 2021 Spring Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        difficulty: 2,
rating: 1000,
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
        topic: "systems of equations",
        hint: "What is the relation between the values, and how can you use that to make an equation?",
        step: "Solve the equations \\(p=3l\\) and \\(2600=p+l\\)"
    },
    {
        title: `AMC 10A 2021 Spring Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
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
        hint: "What kind of sequence or series models this?",
        step: "Write an arithmetic sequence with common difference \\(7\\) and \\(30\\) terms"
    },
    {
        title: `AMC 10A 2021 Spring Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `The quiz scores of a class with \\(k>12\\) students have  a mean of \\(8\\). The mean of a collection of \\(12\\) of these quiz scores is \\(14\\). What is the mean of the reamining 
        quiz scores in terms of \\(k\\)?`,
        solution: `<b></b><p>We know that the sum of the \\(12\\) scores who averaged \\(14\\) is \\(12 \\cdot 14 = 168\\). Likewise, we know that the sum of all of the tests is \\(8k\\). The average of the reamining tests is the sum of the remaining test scores divided by \\(k-12\\).</p>
        <p>The sum of the remaining test scores can be expressed as \\(8k-168\\), or the total minus the ones that were counted in the average of the \\(12\\). We know the number of remaining tests is equal to \\(k-12\\), so we set that up as a fraction:</p>
        $$
        \\frac{8k-168}{k-12}
        $$`,
        type: "mc",
        choices: [ `\\(A) \\frac{14-8}{k-12} \\)`,  `\\(B) \\frac{8k-168}{k-12} \\)`,  `\\(C) \\frac{14}{2}-\\frac{8}{k} \\)`,  `\\(D) \\frac{14(k-12)}{k^2} \\)`,  `\\(E) \\frac{14(k-12)}{8k} \\)`],
        answer: `\\(B) \\frac{8k-168}{k-12} \\)`,
        topic: `algebraic manipulation`,
        hint: "What is the sum of the scores minus the sum of the \\(12\\) scores that average to \\(14\\)? How many students are left? How can you use those to find the average?",
        step: "Find the sums of the \\(12\\) scores and total scores"
    },
    {
        title: `AMC 10A Spring 2021 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Chantal and Jean start hiking from a trailhead toward a fire tower. Jean is wearing a heavy backpack and walks slower. Chantal starts walking at \\(4\\) miles per hour. Halfway to the tower, the trail
        becomes really steep, and Chantal slows down to \\(2\\) miles per hour. After reaching the tower, she immediately turns around and descends the steep part of the trail at \\(3\\) miles per hour. She meets Jean at the halfway point.
        What was Jean's average speed, in miles per hour, until they met.`,
        type: "mc",
        choices: ["\\(A) \\frac{12}{13}\\)", "\\(B) 1\\)", "\\(C) \\frac{13}{12}\\)", "\\(D) \\frac{24}{13}\\)", "\\(E) 2\\)"],
        solution: `<b>\\(\\frac{12}{13}\\)</b>Recall that speed is the ratio between distance and time. Since there are no constraints on either, we can set distance or time to whatever we want and solve for the other value. That being said, we want our answer to be as simple as possible. To me, that means
        using whole numbers. We know that we're dealing with a fraction, so let's make the distance the LCM of \\(2\\), \\(4\\), and \\(6\\), which is \\(12\\). Since the path is split in half, each half can be \\(12\\) miles, with the total length being \\(48\\) miles. We know the first leg takes \\(\\frac{12}{4}=3\\) hours, going uphill the second half takes \\(\\frac{12}{2}=6\\) hours, and going downhill it takes \\(\\frac{12}{3}=4\\) hours for a total length of \\(3+6+4=13\\) hours. </p>
        <p>Jean has thus traveled \\(12\\) miles for \\(13\\) hours with a total speed of \\(\\frac{12}{13}\\).</p>
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Don't be afraid to take advantage of the ambiguity of the problem. Because we know we ar dealing with ratios of which we are not given. We use this wisely and intentionaly to make the values easier for us to use and understand.</p>`,
        answer: "\\(C) \\frac{13}{12}\\)",
        topic: `speed-distance-time`,
        hint: "Since there are very little constants given and our answer pertains to ratios, we don't have to use set values can can instead focus on using values that make it easier for us to solve",
        step: "Assume the distance is the LCM of \\(2,4,6,12\\)"
    },
    {
        title: `AMC 10A Spring 2021 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        hint: "What values can you eliminate based on properties of squares?",
        step: "Expand and rewrite as \\(x^2+1)(y^2+1\\)"
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
rating: 1200,
        text: `All the roots of the polynomial \\(z^6-10z^5+Az^4+Bz^3+Cz^2+Dz+16\\) are positive integers, possibly repeated. What is the value of \\(B\\)?`,
        solution: `<b></b><p>By Vieta's rules, we know that the product of all \\(6\\) factors is \\(16\\). If this intuition doesn't make sense, try messing around with basic quadratics and factoring for a bit.</p>
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
        discipline: 'algebra',
        hint: "How can we apply Vieta's rule to this? What are the prime factors of \\(16\\)?",
        step: "Find the prime factoriation of \\(16\\) and a set of \\(6\\) factors that sum to \\(10\\)"
    },
    {
        title: `AMC 10A 2021 Spring Problem 16 <span class="material-symbols-outlined">
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
rating: 1400,
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
        <p>It's not exact because we know that there are multiple items valued at \\(142\\), but we can still count that as our answer.</p>`,
        answer: "\\(C) 142\\)",
        solution: "word problems",
        topic: `series`,
        hint: "At what `index` or location, is the median in? How can you find the length of the pattern, and use that to in turn find the location of the median?",
        step: "Use the equation for the sum of all integers less than \\(n\\), \\(\\frac{n(n+1)}{2}\\) to find the total number of terms in the sequence?"
    },
    {
        title: `AMC 10A 2021 Spring Problem 18 <span class="material-symbols-outlined">
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
rating: 1400,
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
        topic: `composite functions`,
        hint: "Look at the answer choices and see which ones work with the function",
        step: "Rewrite each as \\(f (\\textup{numerator} )= f ( \\frac{\\textup{numerator}}{\\textup{denominator}} \\cdot \\textup{denominator})) \\)."
    },
    {
        title: `AMC 10A 2021 Spring Problem 19 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 4,
rating: 1400,
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
        hint: "What is the LHS and what is the RHS an equation for?",
        step: "Identify that the LHS is a circle and the RHS is its radius. Solve with casework"

    },
    {
        title: `AMC 10A 2021 Spring Problem 22 <span class="material-symbols-outlined">
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
rating: 1600, 
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
        hint: "How can we algebraicly express the page numbers that Hiram's roomate took?",
        step: "Use the equations \\(2x-1\\) and \\(2y\\) to find the page numbers of the sheets hiram's roomate took and \\(2y-2x+2\\) for the total number of sheets taken"
    },
    {
        title: `AMC 10B 2020 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        difficulty: 1,
rating: 800,
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
        hint: "Try solving with arithmetic",
        step: "Rewrite eliminating the double negatives"
    },
    {
        title: `AMC 10B 2020 Problem 3 <span class="material-symbols-outlined">
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
rating: 800,
hint: "Try writing out the relations in the variables before you use numbers, and then substitue everything in",
step: "Write \\(y:x\\) as \\(3:2:1:6\\)"
    },
    {
        title: `AMC 10B 2020 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Especialy in cases like these that are solving for "how many", you don't need to solve \\(x\\) or \\(y\\) for a clear and concrete answer. Instead, sometimes use logic, knowledge,
        and induction to save time.`,
        answer: '4',
        topic: 'squares',
        hint: "Try to rewrite the equation and bound it with what we know about squares",
        step: "Move all the terms to one side, and then rewrite as a square such that \\(x^2020+(y-1)^2-1=0\\) or \\(x^2020+(y-1)^2=1\\), and treat it like a diophantine equation"
    },
    {
        title: `AMC 10A 2020 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `<p>What is the value of</p>
        $$
        x=\\frac{3}{4}+\\frac{5}{12}-\\frac{1}{3}?
        $$`,
        type: 'mc',
        choices: ['\\(A) -\\frac{2}{3}\\)', '\\(B) \\frac{7}{36}\\)', '\\(C)) -\\frac{7}{12}\\)', '\\(D) \\frac{2}{3}\\)', '\\(E) \\frac{5}{6}\\)'],
        solution: `<b>\\(\\frac{5}{6}\\)</b><p>Solve</p>
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
        hint: "Try to solve this with arithmetic",
        step: "Convert to have the same denominator"
    },
    {
        title: `AMC 10A 2020 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800, 
        text: `The numbers \\(3, 5, 7, a\\) and \\(b\\) have an average (arithmetic mean) of \\(15\\). What is the average of \\(a\\) and \\(b\\)?`,
        type: 'fr',
        solution: '<b></b><p>The sum of the \\(5\\) values must be equal to \\(15 \\cdot 5=75\\). If we subtract \\(3,5, \\) and \\(7\\), we can find \\(a+b=75-3-5-7=60\\). The average of \\(a\\) and \\(b\\) is equal to \\(\\frac{a+b}{2}=\\frac{60}{2}=30\\).</p>',
        answer: '30',
        topic: 'averages',
        hint: "How can we manipulate the equation for averages to exclude or account only for \\(a\\) and \\(b\\)",
        step: "Find the sum of all the numbers in the set"
    },
    {
        title: `AMC 10A 2020 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800, 
        text: `<p>Assuming \\(a \\neq 3, b \\neq 4, c \\neq 5\\), what is the value in simplest form of the following expression?</p>
        $$
        \\frac{a-3}{5-c} \\cdot \\frac{b-4}{3-a} \\cdot \\frac{c-5}{4-b}
        $$
        `,
        type: 'mc',
        choices: ['\\(A) -1\\)', '\\(B) 1\\)', '\\(C) \\frac{abc}{60}\\)', '\\(D) \\frac{1}{abc}-\\frac{1}{60}\\)', '\\(E) \\frac{1}{60}-\\frac{1}{abc}\\)' ],
        solution: `<b>-1</b><p>Notice that \\(a-3 = -(3-a)\\), \\(b-4=-(4-b)\\), and \\(c-5=-(5-c)\\). Using this, we eliminate via cross multiplication. We end up with \\(-1^3=-1\\)</p>`,
        answer: '\\(A) -1\\)',
        topic: 'algebraic manipulation',
        hint: "How can you factor this so that you can cross-multiply?",
        step: "Rewrite \\(a-3=-(3-a)\\), \\(b-4=4-b\\), and \\(c-5=-(5-c)\\)"
    },
    {
        title: `AMC 10A 2020 Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `A driver travels for \\(2\\) hours at \\(60\\) miles per hour, during which her car gets \\(30\\) miles per gallon of 
        gasoline. She is paid \\($0.5\\) per mile, and her only expense is gasoline, at \\($2.00\\) per gallon. What is her net rate of pay, in dollars per hour, after this expense?`,
        type: 'fr',
        solution: `<b>26</b><p>The driver travels \\(2 \\cdot 60=120\\) miles and earns \\(120 \\cdot 0.5=$60\\). Her car uses \\(\\frac{120}{30}=4\\) gallons of gas which costs her \\(4 \\cdot 2=$8\\). She thus made \\(60-8=$52\\) dollars over the course of the 
    \\(2\\)hours. We divide this by \\(2\\) to get the dollars per hour, which is \\($26\\). `,
    answer: '26',
    topic: 'speed-distance-time',
    hint: "Use rates to find the distance traveled before finding the cost",
    step: "Multiply the time by speed to find the distance she travels"
    },
    {
        title: `AMC 10A 2020 Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
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
        <p>Two more solutions are \\(8\\) and \\(4\\). We add this to get \\(8+4+6=18\\)</p>
        `,
        answer: '18',
        topic: 'casework',
        hint: "How can you split this into cases based on the meaning of absolute value?",
        step: "Find the two values that \\(x^2-12x=34\\) can be equal to and solve with casework"
    },
    {
        title: `AMC 10A 2020 Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Even though this never explicity states to use an arithmetic series, we can always try to find a sequence/series  whenever we see a pattern in numbers.
        A lot of what we know about sequences and series has already been proven, so we can use that to our advantage and save time.</p>
        `,
        answer: '9900',
        topic: 'series',
        hint: "What is the pattern, and what is the sum of each group? Is there a pattern to that?",
        step: "Find the pattern of adding 3 subtracting 4 and make a conjecture about the common difference"
    },
    {
        title: `AMC 10A 2020 Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
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
        hint: "Don't forget that some numbers might be duplicates, and calculate the total number of values",
        step: "Find the number of squares below and above \\(2020\\)"
    },
    {
        title: `AMC 10A 2020 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
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
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>You don't nescessarily have to solve for \\(x\\) and \\(y\\). Instead, just try to use algebraic manipulation and try to thin WHY they give you the information they did</p>
        `,
        answer: '\\(D) 440\\)',
        topic: 'algebraic manipulation',
        hint: "How can we create a quadratic out of the two equations we are given to solve for \\9x\\) and \\(y\\)?",
        step: "Rewrite the entire second equation into one fraction"
    },
    {
        title: `AMC 10A 2020 Problem 21 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `<p>There exists a unique strictly increasing sequence of nonnegative integers \\(a_{1} < a_{2}} < ... < a_{k}}\\) such that 
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
        hint: "How does this relate to the sum of powers?",
        step: "Rewrite \\(2^289\\) as \\((2^17)^2\\) and \\(2^17\\) as \\(x\\)"
    },
];
const geometryQ = [
    {
        title: `AMC 10B 2020 Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Points \\(P\\) and \\(Q\\) lie in a plane with \\(PQ=8\\). How many locations for point \\(R\\) in this plane are there such that the triangle with vertices \\(P, Q,\\) and \\(R\\) is a right triangle with 
        area \\(12\\) square units?`,
        type: 'mc',
        choices: ['\\(A) 2\\)', '\\(B) 4\\)', '\\(C) 6\\)', '\\(D) 8\\)', '\\(E) 12\\)'],
        answer: '\\(C) 8\\)',
        solution: `<b>8</b><p>\\(PQ\\) is a leg or a hypotenuse. If it is a leg, there are \\(4\\) places. We can visualize this by putting it on the \\(y-\\) axis on a coordinate plane and finding \\(4\\) diferent places for it to go. </p>
        <p>If it is a hypotenuse, there are also \\(4\\), because it can go in either direction, and each side length is interchangeable. \\(4+4=8\\)`,
        topic: 'triangles',  
        hint: "What are the classifications for the types of sides of a right triangle?",
        step: "Calculate the number of places \\(R\\) can go if \\(PQ\\) is a leg, and then the number of places \\(R\\) can go if \\(PQ\\) is a hypotenuse"
    },
    {
        title: `AMC 10A 2025 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: `
<p>A semicircle has diameter \\(\\overline{AB}\\) and chord \\(\\overline{CD}\\) of length \\(16\\) parallel to \\(\\overline{AB}\\). A smaller semicircle with diameter on \\(\\overline{AB}\\) and tangent to \\(\\overline{CD}\\) is cut from the larger semicircle, as shown below. What is the area of the shaded space?
        `,
        choices: ['\\(A) 16\\pi\\)', '\\(B) 24\\pi\\)', '\\(C) 32\\pi\\)', '\\(D) 48\\pi\\)', '\\(E) 64\\pi\\)'],
        answer: `\\(C) 32\\pi\\)`,
        image: "assets/question-diagrams/amc-10a-2025.png",
        answer: "32pi",
        difficulty: 2,
rating: 1000,
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
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Make sure to take advantage of the inherent simplicity of the problem. If there's something you can ignore, or if there is extraneous information, just don't ues it.`,
        video: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        topic: "estimation",
        hint: "Exactly how small can the smaller semicircle be?",
        step: "Negate the smaller semicircle alltogether"
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
        image: "assets/question-diagrams/amc-10a-2025-problem-13.png",
        difficulty: 3,
rating: 1200,
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
hint: "What kind of series can you use to model the area of the shaded squares?",
step: "Assume the side length of the largest square is \\(1\\) and then write an infinite geometric series with \\(a_{1}=1\\) and \\(r=-k^2\\) to model the area"
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
        image: "assets/question-diagrams/amc-10a-2025-problem-15.png",
        answer: "0.375",
        difficulty: 3,
rating: 1200,
        solution: `<b>0.375</b><p>My first step would be to label everything. In my drawing, I also included that \\(\\angle ACB\\) is equal to angle \\(\\angle ECD\\) by vertical angles. This also means that \\(\\triangle ABC\\) and \\(\\triangle ECD \\) are similar</p><br><img src='assets/question-diagrams/amc-10a-problem-13-solution-step-1.png' style='max-width:100%; height:auto;' />
        <p>Next, let's label \\(BC\\) as \\(x\\) so that we can calculate some metric for each other side using the pythagorean theorem, \\(a^2+b^2=c^2\\).</p><br><img src='assets/question-diagrams/amc-10a-problem-13-solution-step-2.png' style='max-width:100%; height:auto;' />
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
        hint: "Which triangles are similar?",
        step: "Set up the expression \\(\\frac{CD}{EC}=\\frac{BC}{CA}\\) because ratios of corresponding side lengths in similar polygons are equal"
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
rating: 1400,
        answer: "21",
        solution: `<b>21</b><p>Just because \\(a\\) and \\(b\\) have to be integers doesn't nescessarily mean that \\(r\\), the common ratio, has to be. A common mistake would be to just find the smallest prime factor of \\(720\\) and multiply that, but if we use a smaller ratio, we can minimize \\(b\\) even further.</p>
        <p>\\(r\\) must be greater than \\(1\\) in order to fuffil the rule that \\(a<720<b\\). We can write it as a fraction \\(\\frac{y}{x}) where \\(y>x\\), but \\(y\\) and \\(x\\) are as close as possible without breaking this rule, in order to minimize \\(r\\).</p> 
        <p>Knowing that we want \\(x\\) and \\(y\\) to be close, we can start by finding the integer factors closest to \\(\\sqrt{720}\\). They need \\(x\\) and \\(y\\) to be factors of \\(720\\) because both multiplying and dividing by \\(frac{y}{x}\\) needs to yield an integer, meaning that \\(\\frac{720}{x}\\) and \\(\\frac{720}{y}\\) both need to be integers. We don't know what this is, because it's irrational, but we do know that \\(\\sqrt{625}\\) is \\(25\\). If we square \\(16\\) we get \\(676\\) (iykyk) and squaring \\(17\\) gets us \\(729\\), thus we know that \\(\\sqrt{720}\\) is between \\(16\\) and \\(17\\). We take the prime factorization of \\(720\\) and try to find nearby values. Doing this, we can find \\(16\\) and \\(15\\). This means \\(r\\) can be \\(\\frac{16}{15}\\).</p>
        <p>Multiply \\(720 \\cdot \\frac{16}{15}\\ = 678\\). Now add \\(6+7+8\\) and get a final answer of \\(21\\).</p>
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Read the wording of the quesiton carefully. A common mistake is to just multiply by \\(2\\), because that seems like the smallest thing we can multiply by to get another integer, but don't forget the possibility of multiplying by fractions.</p>`,
        topic: "geometric sequences",
        hint: "Does the common ratio \\(r\\) have to be an integer?",
        step: "Understand that \\(r\\) must be a fraction \\(\\frac{y}{x}\\) such that \\(y\\) and \\(x\\) are both factors of \\(720\\) and are as close as possible"
    },
    {
        title: `AMC 10A 2020 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        hint: "Find the surface area of each `side` independently",
        step: "The non-top and bottom all have surface areas of \\(1^2+2^2+[...]+7^2\\). The top and bottom have surface areas of \\(7^2\\)"
    },
    {
        title: `AMC 10A 2020 Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: 'Triangle \\(AMC\\) is isoceles with \\(AM = CM\\). Medians \\(\\overline{MV}\\) and \\(\\overline{CU}\\) are perpendicular to each other, and \\(MV=CU=12\\). What is the area of \\(\\triangle AMC\\)?',
        image: "assets/question-diagrams/amc-10-2020-problem-12.png",
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
        topic: 'medians',
        hint: "Use median theorem",
        step: "Use median theorem to set up that  \\(\\overline{PC} = 2\\overline{UP}\\) and \\(\\overline{MP}=2\\overline{VP}\\) and also that \\(\\overline{PC}+\\overline{UP}=\\overline{MP}+\\overline{VP}=12\\)"

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
rating: 1400,
     text: `As shown in the figure below, a rectangular dodecahedron (the polyhedron consisting of \\(12\\) congruent rectangular pentagonal faces) floats in space with two horizontal faces. Note
     that there is a ring of five slanted faces adjacent to the top face, and a ring of five slanted faces adjacent to the bottom face.How many ways are there
     to move from the top face to the bottom face via a sequence of adjacent faces so that each face is visited at  most once and moves are not permitted from the bottom ring to the top ring.</p>`,
     image: "amc10202019.png",
     solution: `<b>810</b>Your first move gives you \\(5\\) choices to go to. If you continue going around the top, you can go in \\(2\\) directions, with each direction having \\(3\\) possibilites of where you stop. We can also go straigt down, which adds another possibilityThere are
     \\(5 \\cdot 3\\ cdot 3= 45\\) ways to go through the top row. After that, there are \\(2\\) different plcaes to start the bottom ring at. After this, it's just the same \\(3 \\cdot 3\\), which means \\(2 \\cdot 3 \\cdot 3\\) or \\(18\\) ways to complete bottom row. 
     \\(18 \\cdot 45 = 810\\)</p>
     <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
     <p>Don't waste time counting how many ways you can go. Not only is it a waste of time and difficult to keep track of, you should be able to tell by the answer choices that it just isn't convenient. Instead, blend probability and counting into geometry to optimize your answer.</p>
     `,
     type: 'mc',
     choices: ['\\(A) 125\\)', '\\(B) 250\\)', '\\(C) 405\\)', `\\(D) 640\\)`, '\\(E) 810\\)'],
     answer: '\\(E) 810\\)',
     topic: 'counting',
     hint: "Calculate the number of places you can go after each move",
     step: "You start with \\(5\\) options. Going around the top gives you \\(2\\) directions with \\(3\\) posibilities. Follow the same logic to find more paths!"
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
rating: 1400,
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
        topic: 'area of composite shapes',
        hint: "How can you divide the shape into smaller parts?",
        step: "Divide the shape into two trianles: \\(ABC\\) and \\(ADC\\)"
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
rating: 1600,
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
        hint: "You can set the following rules: You cannot use two reflections or two rotations of \\(180^\\circ\\) degrees",
        step: "Using the constraints set up in the hint, do casework for the number of rotations you use"
    },
    {
        title: `AMC 10B 2020 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `Carl has \\(5\\) cubes of sidelenght \\(1\\), and Kate has \\(5\\) cubes of side length \\(2\\). What is the total volume of the \\(10\\) cubes?`,
        type: 'fr',
        answer: '45',
        solution: '<b>45</b><p>The area of a cube is equal to the side length cubed. Thus, we cube the side lengths to get that the cubes have volumes of \\(1\\) and \\(8\\), respectively. We multiply these by \\(5\\) and add them to get \\(5+40=45\\)',
        topic: 'volume',
        hint: "What are the volumes of their cubes individually?",
        step: "Carl's cubes have volume \\(5 \\cdot 1^3\\) and Kate's have \\(5 \\cdot 2^3\\)"
    },
    {
        title: `AMC 10B 2020 Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `<p>The acute angles of a right triangle are \\(a^\\circ\\) and \\(b^\\circ\\), where \\(a > b\\) and both \\(a\\) and \\(b\\) are prime numbers. What is the least possible value of \\(b\\)?`,
        type: "mc",
        choices: ["\\(A) 2\\)", "\\(B) 3\\)", "\\(C) 5\\)", "\\(D) 7\\)", "\\(E) 11\\)"],
        solution: `<b>7</b><p>We are looking for the smallest number \\(b\\) such that \\(90-b\\) is prime. We know, just by pure logic, that \\(b\\) can't be \\(2\\) or \\(5\\), because the prior would make \\(a\\) even and the latter would make \\(a\\) a multiple of \\(5\\). We try the remaining answers:</p>
        <p>\\(90-3=87\\) is not prime because we know by the divisiblity rule of \\(3\\) that \\(8+7=15\\) which is divisible by \\(3\\), thus \\(87\\) is divisible by \\(3\\)</p>
        <p>\\(90-7=83\\). We can run a few divisiblity checks, and as far as we can see, it's a prime number. Thus, our answer is \\(7\\).`,
        answer: "\\(D) 7\\)",
        topic: 'prime numbers',
        hint: "How can you test this with the answer choices?",
        step: "Since all of the answer choices are prime, and you know that \\(a+b=90\\) by triangle angle sum theorem, find \\(a=90-b\\) and test if it is prime"
    },
    {
        title: `AMC 10B 2020 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        hint: "What is the radius of the new cone?",
        step: "Find the radius of a circle with circumfrence \\(\\frac{3}{4}\\) of the original, and use the pythagorean theorem to find the height"

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
rating: 1200,
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
        topic: 'coordinate grid',
        hint: "What pattern do you notice with the direction and net distance?",
        step: "Calculate his net distance after the first few movements and find a pattern (you may have to use modular arithmetic)"
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
rating: 1200,
        text: `As shown in the figure below, six semicircles lie in the interior of a rectangular hexagon with side length \\(2\\) so that the diameters of the semicircles coincide with the sides of the hexagon.
        What is the area of the shaded region - inside the hexagon but outside all of the semicircles?`,
        type: 'mc',
        choices: ['\\(A) 6\\sqrt{3}-3\\pi\\)', '\\(B) \\frac{8\\sqrt{3}}{2}-2\\pi\\)','\\(C) \\frac{3\\sqrt{3}}{2}-\\frac{\\pi}{3}\\)', '\\(D) 3\\sqrt{3} - \\pi\\)', '\\(E) \\frac{9\\sqrt{3}}{2}-\\pi\\)'],
        image: "assets/question-diagrams/amc-10-2020-problem-14.png",
        solution: `<b>\\(A) 6\\sqrt{3}-3\\pi\\)</b><p>We start by finding the total area of the hexagon. This is a lot easier if you know the area of a hexagon, but a lot of us won't have that tidbit of information memorized, so let's derive it</p>
        <p>First off, a regular hexagon is composed of \\(6\\) equilateral triangles, in this case of side length \\(2\\). Once again, if you know the area of an equilateral triangle, that will make things easier, but here's a quick rundown:</p>
        <p>An equilateral triangle has \\(2\\) right triangles in it, with the longest leg being the height. We know, by the pythagorean theorem that \\(1^2+b^2=2^2\\) so \\(b=\\sqrt{3}\\). We find that the area is equal to \\(\\sqrt{3}\\), for a total
        hexagonal area of \\(6\\sqrt{3}\\).</p>
        <p>We can't just find the area of all the semicircles and erase, however, because they overlap and the overlaping shape would be, frankly, a pain to find the area of. </p>
        <p>We can, however, divide the semicircle into parts. If we were to draw a line through the two points on each overlap, we're left with a few trapezoids with rounded tops. If we draw another two lines, from the top points of the trapezoid, we end up with \\(2\\) equilateral triangles
        and a section of a circle. These triangles have side lengths \\(1\\) for areas of \\(\\frac{\\sqrt{3}}{4}\\). There are \\(12\\) of these for a combined area of \\(3\\sqrt{3}). The segments of circles have angles of \\(60\\) degrees, meaning they are all \\(\\frac{1}{6}\\) of a circle. We don't have to worry
        too much about this, though, because there are \\(6\\) anyways. They all have radius of \\(1\\) for a combined area of \\(pi\\). Thus, the total area is \\(6 \\sqrt{3}-3\\sqrt{3}-\\pi). 
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Don't give up because you don't know a certain formula, like the area of a hexagon. You can always use preexisting knowledge and logic to derive it, like we did in the example.</p>`,
        answer: `\\(A) 6\\sqrt{3}-3\\pi\\)`,
        topic: `hexagons`,
        hint: "Each semicircle can be divided into a trapezoid and a segment of a circle, or a \\(60^\\circ\\) fragment of a circle with two triangles next to it (divide the hexagon into equilateral triangles)",
        step: "After finding the area of the hexagon, draw lines through the two intersections of each semicircle, connec it to make a trapezoid, and then divide the trapezoid into \\(3\\) triangles. You'll end up with two equilateral triangles and a \\(60\\circ\\) section of a circle"
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
rating: 1400,
        used: false,
        text: `Let \\(B\\) be a right rectangular prism (box) with edges lengths \\(1, 3\\) and \\(4,\\) together with its interior. For
        real \\(r \\ge 0\\), let \\(S(r)\\) be the set of points in \\(3\\) -dimensional space that lie within a distance \\(r\\) of some point in \\(B\\).
        The volume of \\(S(r)\\) can be expressed as \\(ar^3+b^2+cr+d\\) where \\(a, b, c\\) and \\(d\\) are positive real numbers. What is \\(\\frac{bc}{ad}\\)</p>`,
        type: 'mc',
        choice: ['\\(A) 6\\)', '\\(B) 19\\)', '\\(C) 24\\)', '\\(D) 26\\)', '\\(E) 38\\)'],
        solution: `<b>19</b><p>Let's first try to digest exactly what this means</p>
        <p>This took me a while to fully understand, but essentially, we're finding the volume of a shape where the boundaries are all \\(r\\) units away from the edges and faces of \\(B\\). If you want to draw this out, it looks like a rounded rectangular prism</p>
        <p>We can work backwards, because that's what is most simple. \\(d\\) is a constant doesn't depend on \\(r\\). Thus, it must be the unchanging area of \\(B\\) which is \\(1 \\cdot 3 \\cdot 4 = 12\\).</p>
        <p>\\(c\\) uses \\(r\\) which tells us that there is something with a dimension of \\(r\\). We can interpret this as the extension of the faces. If you don't get why, try drawing it out. Each of the extensions will have a volume of \\(r \\cdot\\) the lengths of the adjacent edges. Since there are 
        two of each, we know that we have to double all so we end up with \\(c=2((1 \\cdot 3)+(3 \\cdot 4)(4 \\cdot 1))=38\\)</p>
        <p>With \\(b\\) we're dealing with \\(r^2\\). Assuming there are no squares, we see that \\(r^2\\) is, however, used in the equation for an area of a circle or the volume of a cylinder. We know that there are quarter cylinders on each edge, \\(12\\) total. Since there are \\(3\\) types and \\(4\\) of each, we don't
        bother much with the quarters and just find the volumes. We know the radius is \\(r^2\\) so we know that \\(b\\) is really just \\(\\pi+3\\pi+4\\pi=8\\pi\\)</p>
        <p>Finally, \\(a\\) must be tied to the only remaining parts, the \\(\\frac{1}{8}\\) spheres on each corner. These all have radius \\(r\\) so \\(a=\\frac{4}{3}\\pi\\)</p>
        <p>Now that we have everything, we just find the ratio:</p>
        $$
        \\frac{38 \\cdot 8\\pi}{\\frac{4}{3}\\pi \\cdot 12} =19
        $$
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>Don't be afraid to draw things. It can help save time and make it easier to conceptualize nuanced problems like these</p>`,
        answer: '\\(B) 19\\)',
        topic: 'rounded rectangles',
        hint: "What you're finding is the volume of a rounded rectangular prism",
        step: "Define what each value \\(a, b, c, d\\) is related to (\\(d\\) is just the volume of \\(B\\), \\(a\\) is the spherical components, \\(b\\) is the cylindrical components, and \\(c\\) is the faces extended"
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
rating: 1600,
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
        topic: 'geometric manipulation',
        hint: "\\(FI^2\\) is half the area of an isoceles righ ttriangle with side length \\(FI\\)",
        step: "Extend \\(FB\\) and \\(IE\\) until they meet and form two right triangles \\(EBK\\) and \\(FIK\\)"
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
rating: 1200,
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
        hint: "What is the relationship between the volumes of cylinders with double or half the radius?",
        step: "Find the ratio of the volumes if they have the same height",
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
rating: 1200,
        text: 'What is the volume of a tetrahedron \\(ABCD\\) with edge lengths \\(AB=2, AC=3, AD=4, BC=\\sqrt{13}, BD=2\\sqrt{5}\\), and \\(CD=5\\)?',
        type: 'fr',
        solution: `<b>4</b><p>The first thing I want to clarify: a tetrahedron is like a pyramid with a triangular base. Now that that's cleared, the first thing I noticed as that \\(AC, AD\\) and \\(CD\\) form a right triangle by being a pythagorean triple.
        A bit more calculation and we see that \\(AB, AC\\) and \\(BC\\) is also a right triangle and \\(AB, AD\\) and \\(BD=2\\sqrt{5}\\). Now, let's try to draw it out and connect the sides that are right triangles</p>
        <p>I used \\(\\triangle ACD\\) as the base, simply because I found the integers would probably be the best to work with. We know the height is equal to \\(AB\\), or \\(2\\) and then procede to use the formula for volume of a pyramid. Since the \\(\\frac{1}{2}\\) and \\(\\frac{1}{3}\\) cancel with \\(2\\) and \\(3\\), we just end up with \\(4\\)</p>`,
        answer: '4',
        topic: 'pyramids',
        hint: "Use the pythagorean triples to find the base triangles",
        step: "Arrange the tetrahedron (or draw it out) and use the formula of a pyramid times 2"
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
rating: 1400,
        text: `Trapezoid \\(ABCD\\) has \\(\\overline{AB} || \\overline{CD}, BC = CD = 43\\), and \\(\\overline{AD} \\perp \\overline{BD}\\). Let
        \\(O\\( be the intersection of the diagonals \\(\\overline{AC}\\) and \\(\\overline{BD}\\) and let \\(P\\) be the midpoint of \\(\\overline{BD}\\). Given that
        \\(OP=11\\), the length \\(AD\\) can be written in the form \\(m\\sqrt{n}\\), where \\(m\\) and \\(n\\) are positive integers and \\(n\\) is not divisible by the square of any prime. What is \\(m+n\\)?`,
        solution: `<b></b><p>Start by drawing a basic diagram. Basic logic tels us that \\(D\\) and \\(B\\) are obtuse so we draw an odd kite shape that is resting on \\(DC\\). Call the angle at \\(A\\) \\(x\\). Since \\(\\triangle ABD\\) is right,
        \\(\\angle ABD\\) is \\(90-x\\). By alternate interior, \\(BDC\\) is also equal to this, and by isoceles triangle theorem, as is \\(DBC\\). \\(C\\) is equal to \\(2x\\). This gives us similar triangles \\(\\triangle ABD ~ \\triangle DPC ~ \\triangle BPC\\) and \\(\\triangle DOC ~ \\triangle DOA\\).</p>
        <p>Since \\(P\\) is the midpoint of \\(BD\\), \\(\\triangle BPC = \\frac{1}{2} \\triangle BDA\\). Thus, \\(BA = 86\\) and, by the same logic, \\(DO=22\\). We can then find that \\(BD = 66\\) so by pythagorean theorem, \\(AD=4\\sqrt{190}\\).\\(4+190=194\\).`,
        answer: '194',
        topic: 'similar triangles',
        hint: "Label all of the angles",
        step: "Label all of the angles to find similar triangles. From there, use the fact that \\(P\\) is the midpoint of \\(BD\\) to establish a ratio"
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
rating: 1600,
        text: `Let \\(ABCDEF\\) be an equiangular hexagon. The lines \\(AB\\), \\(CD\\), and \\(EF\\) determine a triangle with area \\(192\\sqrt{3}\\), and the lines \\(BC\\), \\(DE\\), and \\(FA\\) determine a triangle with area 
        \\(192\\sqrt{3}\\), and the lines \\(BC\\), \\(DE\\), and \\(FA\\) determine a triangle with area \\(324\\sqrt{3}\\). The perimeter of hexagon \\(ABCDEF\\) can be expressed as \\(m+n\\sqrt{p}\\), where \\(m, n\\) and \\(p\\) are positive integers and \\(p\\) is not divisible by the square of any prime. What is \\(m+n+p\\)?`,
        answer: '55',
        solution: `<b>55</b><p>We know the hexagon is equiangular so each interior angle measures \\(120^\\circ\\) degrees.</p>
        <p>These angles make straight angles with \\(60^\\circ\\) degree angles such that if you extend two lines and skip the one in the middle (e.g. \\(BC\\) and \\(AF\\)) you get an equiangulateral triangle.</p>
        <p>Continuing this logic gives that both triangles are equilateral. We use the formula for the area of a triangle, \\(\\frac{\\sqrt{3}}{4}s^2\\) to find that the side lengths are equal to \\(36\\) and \\(16\\sqrt{3}\\)</p>
        <p>We note that if we were to add all the line segments that get extended to form sides of the triangle, they will equal one side length. Thus, the perimeter is equal to \\(36+16\\sqrt{3}\\) for \\(m+n+p=36+16+3=55\\)`,
        topic: `hexagons`,
        hint: "Both triangles are equialateral",
        step: "Use the formula for the area of a equilateral triangle to find the side length"
    },
    {
        title: `AMC 10B 2021 Spring  Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `In a plane, four circles with radii \\(1, 3, 5,\\) and \\(7\\) are tangent at line \\(l\\) at the same point \\(A\\) but they may be on either side of \\(l\\). Region \\(S\\) consists of all the 
        points that lie inside exactly one of the four circles. What is the maximum possible area of region \\(S\\)?`,
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
        hint: "There are two cases that give the same answer",
        step: "You can nest the circle of radius \\(1\\) in radius \\(3\\), and that in something else because that limits the amount to exclude."
    },
    {
        title: `AMX 10B 2021 Spring Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        hint: "Work backwards",
        step: "Work backwards by reflecting \\((-6,3)\\) accross \\(y=-x\\) first. This forces you to use the function (\\(x,y) -> (y,x)\\)"
    },
    {
        title: `AMC 10B 2021 Spring Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `An inverted cone with base radius \\(12\\)cm and height \\(18\\)cm is full of water. The water is poured into a tall cylinder whose horizontal base has a radius of \\(24\\) cm. What is the height in centimeters of the water in the cylinder?`,
        type: 'fr',
        solution: '<b>1.5</b><p>The volume of the water in the cone is \\(12^2 \\cdot \\pi \\cdot 18 \\ cdot \\frac{1}{3} = 864\\pi\\). We divide this by \\(24^2\\pi=576\\pi\\) for a final answer of \\(1.5\\)</p>',
        answer: '1.5',
        topic: 'volume',
        hint: "Work backwards to find the area of the water in the cone and then the height in the cylinder",
        step: "Find the volume of the water in the cone as  \\(12^2 \\cdot \\pi \\cdot 18 \\ cdot \\frac{1}{3} = 864\\pi\\)"
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
rating: 1200,
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
   hint: "Write two expressions for the inner brownies and then for the outer brownies",
   step: "Set up expressions for the inner brownies and for the outer brownies: with dimensions \\(x\\) and \\(y\\), the interior \\((x-2)(y-2)=\\frac{xy}{2}\\)"
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
rating: 1200,
        text: `Three equally spaced parallel llines intersect a circle, creating three chords of lengths \\(38\\), \\(38\\), and \\(34\\). What is the distance between two adjacent parallel lines?`,
        answer: '6',
        type: 'fr',
        solution: `<b>6</b><p>The two longest chords must be of equal distance  from the diameter that is parallel to the lines. We'll call this distance \\(x\\).</p>
        <p>It then follows that the distance between two lines is \\(2x\\). If we draw a line from the circle  of the rectangle to the points in which the chords intersect the circle and a line perpendicular to the parallel lines, we
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
        topic: 'chords',
        hint: "What is the distance between the two \\(38\\)s and the diameter (express algebraicly)",
        step: "Draw lines from the center of the circle to the midpoints of the chords, and fron the center to the point where the chords intersect the circle, making right triangles with hypotenuss equal to the radii"
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
rating: 1400,
        used: false,
        text: 'The figure is constructed from 11 line segments, each of which has length \\(2\\). The area of pentagon \\(ABCDE\\) can be written as \\(\\sqrt{m}+\\sqrt{n}\\) where \\(m\\) and \\(n\\) are positive integers. What is \\(m+n\\)?',
        image: 'assets/question-diagrams/amc-10-2021-problem-20.png',
        solution: `<b>23</b><p>We break \\(ABCDE\\) into \\(3\\) triangles by drawing lines through \\(AC\\) and \\(AD\\), then ignoring all other lines except for those and the perimeter.</p>
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
        hint: "User Heron's Formula",
        step: "Draw lines \\(AC\\) and \\(AD\\) and then use Heron's formula \\(\\frac{1}{2} \\sin(C) ab\\)"
    },
    {
        title: `AMC 10A Fall 2021 Problem 2 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `Menakara has a \\(4 \\times 6\\) index card. If she shortens the length of one side of this card by \\(1\\) inch, the 
        card would have an area of \\(18\\) square inches. What would the area of the card be in square inches if she shortens the length of the other side by \\(1\\) inch?`,
        solution: '<b>20</b><p>We notice immediately that the shortened side is the \\(4\\) because \\(6\\cdot 3=18\\), so we just switch it around and multiply \\(4\\cdot5=20\\)',
        answer: '20',
        topic: 'area',
        hint: "Find the prime factorization of \\(18\\)",
        solution: "Find out which side she had to cut to get an area of \\(1\\)"
    },
    {
        title: `AMC 10A Fall 2021 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `As shown in the figure below, point \\(E\\) lies on the opposite half plane determined by line \\(CD\\) from point \\(A\\) so that \\(\\angle CDE = 110^\\circ\\). Point
        \\(F\\) lies on \\(\\overline{AD}\\) so that \\(DE=DF\\), and \\(ABCD\\) is a square. What is the degree measure of \\(\\angle AFE\\)?`,
        solution: `<b>170</b><p>We see that \\(\\angle ADE = 270-110=160\\). Since \\(\\triangle DFE\\) is isoceles, we know that the base angles \\(\\angle EFD\\) and \\(\\angle DEF \\) measure \\(10^\\circ\\). \\(AFE=180-10=170^\\circ\\)`,
        image: 'assets/question-diagrams/amc-10-2020-problem-7.png',
        answer: '170',
        topic: 'angle relationships',
        hint: "Angle \\(EFD\\) and Angle \\(F\\) are congruent because triangle \\(FED\\) is isoceles",
        step: "Find the measure of angle \\(EDF\\)"
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
rating: 1200,
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
        topic: 'circumcircles',
        hint: "How would you find the center of the circumcircle",
        step: "Draw the figure discribed, then draw the perpendicular bisectors of \\(AB\\) and \(AC\\). You'll find that \\(ABO\\) (where \\(O\\) is the center of the circle of radius \\(5\\sqrt{2}\\) is similar to the triangles bounded by the perpendicular bisectors, \\(AB\\), and the diameter of the circumcircle"
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
rating: 1400,
        text: `An architect is building a structure that will place vertical pillars at the verticies of regular hexagon \\(ABCDEF\\), which is lying horizontally on the ground. The six pillars will hold up a flat solar panel that
        will not be parallel to the ground. The heights of pillars \\(A, B\\) and \\(C\\) are \\(12, 9,\\) and \\(10\\) meters, respectively. What is the height, in meters, of the pillar at \\(E\\)?`,
        type: 'mc',
        choices: ["\\(A) 9\\)", "\\(B) 6\\sqrt{3}\\)", "\\(C) 8\\sqrt{3}\\", "\\(D) 17\\)", "\\(E) 12\\sqrt{3}\\)"],
        solution: `<b>17</b><p>Since the hexagon is flat, we know that any line must have a constant slope. We can call point \\(G\\) the center of the hexagon</p>
        <p>The slope of \\(\\overline{AB}\\) is \\(3\\), assuming that the distance between the points is \\(1\\). We know that \\(\\overline{FC}\\) is parallel to \\(\\overline{AB}\\), so \\(G\\) has to have a height of \\(13\\). The slope from \\(B\\) to \\(G\\) is \\(4\\), and we must continue this through \\(E\\) for \\(E\\) has a height of \\(13+4=17\\).`,
        answer: "\\(D) 17\\)",
        topic: "slope",
        hint: "Each line must have a constant slope",
        step: "Find the 'slope' of \\(AB\\) and use that to find the rest of the values"
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
rating: 1400,
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
        topic: 'rounded rectangles',
        hint: "The paths traced are a rounded square and a smaller square",
        step: "Find the area of the rounded corners and add the edges for \\(2A\\)"
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
rating: 1600,
        text: `Inside a right circular cone with base radius \\(5\\) and height \\(12\\) are three congruent spheres with radius \\(r\\). Each sphere is tangent to the other two spheres and also tangent to the
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
        topic: "inscribed circles",
        answer: "\\(B)\\frac{90=40\\sqrt{3}}{11}\\)",
        hint: "What cross sections can you take to model this? How can we use centroids and medians to find the distance from the cener?",
        step: "Draw a cross section from the bottom, and another from the side such that you can see one full sphere (you only need half the cylinder). Label the values you can and then, with the bottom cross section, draw a triangle using the centers of each sphere. Use medians to find the distance from the center of the cylinder"
    },
    {
        title: `AMC 10B 2021 Fall Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        difficulty: 1,
rating: 800,
        used: false,
        text: `What is the area of the shaded figure shown below?`,
        image: `assets/question-diagrams/amc-10-2021-problem-1.png`,
        type: 'fr',
        solution: `<b>6</b><p>Find the area of the whole rectangle that encloses everything, than subtract some parts out:</p>
        $$
        4 \\cdot 5 - (\\frac{1}{2}(4 \\cdot 2) + 2(\\frac{1}{2}(2 \\cdot 5))) = 20-4-10=6`,
        answer: '6',
        topic: 'area',
        hint : "Find the whole thing, then remove",
        step: "Find the area of the whole rectangle"
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
rating: 1200,
        used: false,
        text: `A regular hexagon of side length \\(1\\) is inscribed in a circle. Each minor arc of the circle determined by a side of the hexagon is reflected over that side. What is the area of the region bounded by these \\(6\\) reflected arcs?`,
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
        hint: "Each curve is \\(\\frac{1}{6}\\) of a circle minus an equilateral triangle",
        step: "To find the area of each curve, find \\(\\frac{1}{6}\\) of a circle with a radius equal to that of the side length of the hexagon. Then, remove the equilateral triangle with the same side length"
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
rating: 1200,
        used: false,
        text: `A square with side length \\(3\\) is inscribed in an isoceles triangle with one side of the square along the bae ofthe triangle. A square with side length \\(2\\) has two vertices on the other square and the other two sides of the triangle, as shown. What is the area of the triangle?`,
        image: 'assets/question-diagrams/amc-10-2020-problem-13.png',
        solution: `<b>\\(20\\frac{1}{4}\\)</b>We start by labeling all the sides we know. Since \\(3-2=1\\) and \\(1\\div 2= \\frac{1}{2}\\), we know that the sides on either side of the smaller square have lengths of \\(\\frac{1}{2}\\). Since the slanted sides of the triangle are straight, they must 
        have the same slope throughout. We find that the slope of the section we found jut before is \\(\\frac{2}{\\frac{1}{2}}=4\\). Thus, the lenghts on either side of the bottom triangle must be long enough to make the slope \\(4\\), so \\(\\frac{3}{4}\\). The total base length of the triangle is \\(3+\\frac{3}{4}+\\frac{3}{4}=\\frac{9}{2}\\).</p>
        <p>The height of the small triangle above the smaller square is \\(4\\), ,because the length of side of a half triangle is \\(1\\) and the slope must stay constant. Thus, the total height is \\(3+2+4=9\\) for a total area of \\(9 \\cdot \\frac{9}{2} \\cdot \\frac{1}{2}=20\\frac{1}{4}\\)`,
        type: 'mc',
        choices: ['\\(A) 19\\frac{1}{4}\\)', '\\(B) 20\\frac{1}{4}\\)', '\\(C) 21\\frac{3}{4}\\)', '\\(D) 22\\frac{1}{2}\\)', '\\(E) 23\\frac{3}{4}\\)'],
        answer: '\\(B) 20\\frac{1}{4}\\)',
        topic: 'area',
        hint: "Use the slope to find the base length",
        step: "Label everything you can =P"
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
rating: 1200,
        text: `In square \\(ABCD\\), points \\(P\\) and \\(Q\\) lie on \\(\\overline{AD}\\) and \\(\\overline{AB}\\), respectively.
        Segments \\(\\overline{BP}\\) and \\(\\overline{CQ}\\) intersect at right angles at \\(R\\) with \\(BR=6\\) and \\(PR=7\\). What is the area of the square?`,
        image: 'assets/question-diagrams/amc-10-2021-problem-15.png',
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
    hint: "What is the relation betwen triangles \\(RBQ\\), \\(CBQ\\) and \\(CRB\\)?",
    step: "Use the following equations that utilize the pythagorean theorem: \\(6^2+RC^2=CB^2, 6^2+RQ^2+QB^2, CB^2+QB^2=(RC+RQ)^2\\)"
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
rating: 1400,
     text: `Three identical square sheets of paper each with side length \\(6\\) are stacked on top of each other. The middle sheet is rotated clockwise \\(30^\\circ\\) about its center and the top sheet is rotated clockwise \\(60^\\circ\\) about its center, resulting in the $24$-sided polygon shown in the figure below. 
     The area of this polygon can be expressed in the form \\(a-b\\sqrt{c}\\), where \\(a, b\\) and \\(c\\) are positive integers, and $c$ is not divisible by the square of any prime. What is \\(a+b+c?\\)`,
     image: 'assets/question-diagrams/amc-10-2021-problem-18.png',
    solution: `<b>147</b><p>By drawing lines fron the...indented..? parts of each point, we can see that the figure is divided into \\(11\\) kite-shaped figures. Now, dividing these in half by drawing a line from the 
    protruding point/vertex to the center, we have \\(24\\) triangles to deal with. Looking at these, my first instinct was to find the altitiude where the base is \\(\\frac{\\sqrt{6^2+6^2}}{2}=3\\sqrt{2}\\). We know this because the side lengths of the squares is \\(6\\), and we find the whole diagonal length and then divide by \\(2\\). </p>
    <p>At this point, I got stuck trying to find the altitude, although I'm not enitrely sure it's impossible and will try to look at it again</p>
    <p>We can notice, however, that since the angle  at the furthermost vertex is \\(90\\) degrees, we can make a square by extending the lines adjacent to that vertex and meeting them with perpendicular lines frm the origin. This creates a square. If we use the equation \\((3\\sqrt{2})^2=2x^2\\), we know that the side lengths are equal to \\(3\\). We know that the right triangles on the sides of the
    square, the ones that we created by creating the square, are \\(30-60-90\\), because we rotated each sheet by \\(30^\\circ\\). Thus, to find the top edge of the right triangle, we just find \\(3\\cdot \\tan(30)=\\sqrt{3}\\). That means that the edge of the original triangles we had, those opposite the center, have a dimension of \\(3-\\sqrt{3}\\) and the altitude is just \\(3\\), so the total
    area is \\(\\frac{9-3\\sqrt{3}}{2}\\). There are \\(24\\) of these for a total of \\(108-36\\sqrt{3}\\) and \\(108+36+3=147\\)`,
    answer: '147',
    topic: 'trigonometry',
    hint: "You need to use trigonometry for this problem",
    step: "Divide one of th esquares into 4 smaller squares of equal size (so like corners), and inside each of those, two congruent triangles that make a kite (modeling the corner)"
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
rating: 1600,
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
       hint: "Use induction to find a pattern",
       step: "There isn't really a first step for this, but the logic follows that there is an intersection twice for each side on the lesser-side-lengthed polygon"
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
rating: 1600,
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
        <p>Side note, if you wanted to not assign variables and just calculate, you can also use the pythagorean theorem and find that \\(a=\\frac{\\sqrt{10}}{10}\\) and do the rest of the calculations from there. This ibt is extraneous, but if you like using numbers more than ratios, it may help
        `,
        answer:'67',
        topic: 'similar triangles',
        hint: "Use the pythagorean theorem to solve for the relationship between the side lengths of the small triangles adjacent to the square",
        solution: "Label every point and find that the triangles bounded by the perimeter of the large square and the two marked quadrilaterals are similar with a ratio of \\(3\\). Then, use the pythagorean theorem to solve for the side lengths"
    },
    {
        title: `AMC 10A 2022 Problem 5 <span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 1,
rating: 800,
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
        hint: "The convex holygon leaves right triangles that you can `erase` from the area of the whole square",
        step: "Draw a convex holygon that leaves two right triangles. The side lenghts are \\(1-s\\) and \\(s\\)"
    },
    {
        title: `AMC 10A 2022 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        image: 'assets/question-diagrams/amc-10-2022-problem-10.png',
        hint: "Use the pythagorean theorem and quadratic equations",
        step: "Use the equations \\(a^2+b^2=8^2\\) and \\((a-2)^2+(b-2)^2=4\\sqrt{2}^2\\)"
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
rating: 1200,
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
        hint: "\\(AD\\) and \\(AC\\) are transversals",
        step: "Draw the diagram and use \\(AD\\) and \\(AC\\) as transversals to make similar triangles"
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
rating: 1200,
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
        hint: "Notice any pythagorean triples?",
        step: "Notice that \\(15\\) and \\(20\\) make a pythagorean triple. This can help us find the diameter of the circle"
    },
    {
        title: `AMC 10A 2022 Problem 21 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        difficulty: 4,
rating: 1400,
        used: false,
        text: `A bowl is formed by attatching four rectangular hexagons of side \\(1\\) to acquire a square of side \\(1\\). The edges of the adjacent hexagons coincide, as shown in the figure. 
        What is the are of the octagon obtained by joining the top eight vertices of the four hexagons, situated on the rim of the bowl?`,
        type:'mc',
        choices: ['\\(A) 6\\)', "\\(B) 7\\)", "\\(C) 5+2\\sqrt{2}\\)", "\\(D) 8\\)", "\\(E) 9\\)"],
        image: 'assets/question-diagrams/amc-10-2022-problem-20.png',
        solution: `<b>7</b><p>We know that the interior angles of a regular and thus equiangular octagon are \\(135^\\circ\\). If we look at the vertice where two octagons and a triangle intersect, and imagine it in two dimensions, we see that the remaining angle, the one of the triangle, becomes \\(360-135-135=90\\). The triangles are right triangles with legs \\(1\\) for a hypotneuse of \\(\\sqrt{2}\\)</p>
        <p>Technically, the lsat bit of informatioin is extraneous, but it can be used in other situations. We can draw a square outside the octagon that is tangent at the side lengths of \\(1\\). This square has an area of \\(9\\). However, there are \\(4\\) cutout triangles of side length \\(1\\) and altitude \\(1\\) so we remove \\(2\\). Thus, the
        remaining area is \\(7\\)`,
        topic: 'area',
        answer: '\\(B) 7\\)',
        hint: "What type of triangles are there?",
        step: "In a 2D projection, we see that the angle of the triangle must be \\(360-135-135\\) because the measure of a regular octagon is \\(135\\). Another way to think of it is that if we made a net, the triangles should expand out and make the octagon into a rectangle"
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
rating: 1600,
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
        hint: "How can you force simplify this?",
        step: "Assume the height of the trapezoid is 0 =P"                                                                                                                                                                                                                                                                                                                                      
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
rating: 1600,
        text: `<p>Let \\(R, S\\) and \\(T\\) be squares that have vertices at lattice points (i.e., points whose coordinates are both integers) in the coordinate plane, together with their interiors. The
        bottom edge of each square is on the \\(x-\\)axis. The left edge of \\(R\\) and the right edge of \\(S\\) are on the \\(y-\\)axis, and \\(R\\) contains \\(\\frac{9}{4}\\) as amny lattice points as does \\(S\\). The 
        top two vertices of \\(T\\) are in \\(R\\cup S\\), and \\(T\\) contains \\(\\frac{1}{4}\\) of the lattice points contained in \\(R\\cup S\\). See the figure (not drawn to scale)</p>
        <p>The fraction of lattice points in \\(S\\) that are in \\(S \\cap T\\) is \\(27\\) times the fraction of lattice points in \\(R\\) that are in \\(R \\cap T\\). What 
        is the minimum possible value of the edge length of \\(R\\) plus the edge length of \\(S\\) plus the edge length of \\(T\\)?`,
        image: "assets/question-diagrams/amc-10-2022-problem-25.png",
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
        hint: "The number of lattice points in a square is \\((r+1)^2\\)",
        step: "Use the equation in the hint and substitute values for \\(r+1\\) to form a relationship between the side lengths of \\(r, s\\) and \\(t\\)"
    },
    {
        title: `AMC 10B 2022 Problem 2 <span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 1,
rating: 800,
        text: `In rhombus \\(ABCD\\), point \\(P\\) lies on segment \\(\\overline{AD}\\) so that \\(\\overline{BP} \\perp \\overline{AD}, AP=3\\), and
        \\(PD=2\\). What is the area of \\(ABCD\\)? (Note: The figure is not drawn to scale.)`,
        image: 'assets/question-diagrams/amc-10-2022-problem-2.png',
        type: 'mc',
        choices: ['\\(A) 3\\sqrt{5}\\)', '\\(B) 10\\)', '\\(C) 6\\sqrt{5}\\)', '\\(D) 20\\)', '\\(E) 25\\)'],
        solution: `<b>20</b><p>We know that \\(AD=2+3=5\\) and that, because a rhombus is an equilateral parallelogram, \\(\\AB=5\\) as well. By 
        pythagorean theorem we know that \\(BP\\) is \\(b\\) in \\(3^2+b^2=5^2\\) so \\(b=\\sqrt{16}=4\\). That makes the total area \\(4 \\cdot 5=20\\)`,
        answer: '\\(D) 20\\)',
        topic: 'pythagorean theorem',
        hint: "If \\(BP \\perp AD\\), what kind of triangle does that make",
        step: "Draw the figure such that \\(APB\\) is a right triangle"
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
rating: 1400,
        text: `The diagram below shows a rectangle with side lengths \\(4\\) and \\(8\\) and a square with side length \\(5\\). Three vertices of the square lie on three different sides of the
        rectangle, as shown. What is the area of the region inside both the square and the rectangle?`,
        image: "assets/question-diagrams/amc-10-2022-problem-16.png",
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
        hint: "Find the measures of the right triangle with pythagorean triples",
        step: "Consider the bottom right triangle to have dimensions \\(3 \\times 4\\)"
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
rating: 1400,
text:"Let \\(ABCD\\) be a rhombus with \\(\\angle ADC=46^\\circ\\). Let \\(E\\) be the midpoint of \\(\\overline{CD}\\) and let \\(F\\) be the point on \\(\\overline{BE}\\) such that \\(\\overline{AF}\\) is perpendicular to \\(\\overline{BE}\\) What is the degreee measure of \\(\\angle BFC\\)? ",
        solution: `<b>113</b><p>We can extend lines \\(\\overline{AD}\\) and \\(\\overline{BE}\\) until they intersect at a point we call point \\(G\\).
        We then draw a circle centered at \\(G\\ that has \\(A\\), \\(F\\), and \\(C\\) on it. We know that \\(\\angle EDG\\) is equal to \\(180-46=134\\). By power of a point and inscribed angles, 
        we know that \\(\\angle EFC=\\frac{1}{2}\\angle EDG = 67\\) (iykyk). We also know that \\(\\angle EFC\\) makes a linear pair with \\(\\angle BFC\\) so \\(m\\angle BFC=180-67=133^\\circ\\).`,
        answer: '133',
        topic: 'power of a point',
        type: 'fr',
        hint: "Use power of a point",
        step: "Extend \\(AD\\) and \\(BE\\) to make a point called point \\(G\\)"
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
rating: 1200,
        text: `A square of area \\(2\\) is inscribed in a square of area \\(3\\), creating four congruent triangles, as shown below. What
        is the ratio of the shorter leg to the longer leg in the shaded right triangle?`,
        image: `assets/question-diagrams/amc-10-2023-problem-11.png`,
        solution: `<b>\\(2-\\sqrt{3}\\)</b><p>Call the short side of the right triangle \\(a\\) and the long side \\(b\\). We know that \\(a^2+b^2=2\\) and that \\(a+b=\\sqrt{3}\\) so \\(b=\\sqrt{3}-a\\)</p>
        <p>We substitute that back in to find that \\(a^2+(\\sqrt{3}-a)^2=2) so \\(a^2+3-2\\sqrt{3}+a^2=2\\) and \\(2a^2-2\\sqrt{3}+1=0\\). This really ends up being a pain to 
        factor, so we just use the quadratic formula:
        \\(\\frac{2\\sqrt{3}\\pm \\sqrt{12-8}}{4}=\\frac{\\sqrt{3}\\pm 1}{2}\\). We set up \\(\\frac{\\frac{\\sqrt{3}-1}{2}}{\\frac{\\sqrt{3}+1}{2}}\\) which we simplify to \\(\\frac{\\sqrt{3}-1}{\\sqrt{3}+1}\\) which we solve by
        conjugates for \\(2-\\sqrt{3}\\)`,
        type: 'mc',
        choices: ['\\(A) \\frac{1}{5}\\)', '\\(B) \\frac{1}{4}\\)', '\\(C) 2-\\sqrt{3}\\)', '\\(D) \\sqrt{3}-\\sqrt{2}\\)', '\\(E) \\sqrt{2}-1\\)'],
        answer: '\\(C) 2-\\sqrt{3}\\)',
        topic: 'pythagorean theorem',
        hint: "Use the pythagorean theorem and have designated variables for the short and long sides",
        step: "Let \\(a\\) be the short side and \\(b\\) be the long side. We have that \\(a^2+b^2=2\\) and that \\(a+b=\\sqrt{3}\\)"
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
rating: 1200,
        text: `Abdul and Chiang are standing \\(48\\) feet apart in a field. Bharat is standing in the same field as far from Abdul as possible so that the angle formed
        by his lines of sight to Abdul and Chiang measures \\(60^\\circ\\). What is the square of the distance (in feet) between Abdul and Bharat?`,
        solution: `<b>3072</b><p>We know that Bharat is furthest from Abdul when he is perpendicular to the line between Abdul and Chiang. We know that this causes a \\(30-60-90\\) right triangle. We know that \\(\\frac{48}{x}=\\sin(60)\\) so \\(\\frac{48}{x}=\\sqrt{3}{2}\\)
        which means that \\(x=\\frac{96}{\\sqrt{3}\\). We square this which gives us \\(3072\\)`,
        answer: '3072',
        topic: 'trigonometry',
        hint: "Use double and additive trig identities",
        step: "Create a \\(30-60-90\\) triangle by placing Bharat perpendicular to the line of sight between Abdul and Chiang"
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
rating: 1200,
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
        hint: "Try to find a pattern",
        step: 'Find the first few shaded areas and create an arithmetic series detailing the common difference between them'
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
rating: 1400,
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
        hint: "Do you recognize any pythagorean triples",
        step: "Test out values to find pythagorean triples. Identify the pythagorean triples that you know "
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
rating: 1400,
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
        hint: "How can you apply Euler's Formula to this?",
        step: "Use Euler's Formula that \\(\\textup{Vertices}+\\textup{Faces}-\\textup{Edges}=2\\). Find the number of `collisions` to be the number of edges on all rhombi divided by 2"
    },
    {
        title: `AMC 10A 2023 Problem 22 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>
<span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
rating: 1400,
        text: `Circle \\(C_{1}\\) and \\(C_{2}\\) each have radius \\(1\\), and the distance betwen their centers is \\(\\frac{1}{2}\\). Circle \\(C_{3}\\) is the largest circle internally tangent to both \\(C_{1}\\) and \\(C_{2}\\).
        Cirlce \\(C_{4}\\) is internally tangent to both \\(C_{1}\\) and \\(C_{2}\\) and externaly tangent to \\(C_{3}\\). What is the radius of \\(C_{4}\\)?`,
        image: 'assets/question-diagrams/amc-10-2023-problem-18.png',
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
        hint: "How can you connect the centers of the triangles to create a right triangle and use the pythagorean theorem?",
        steps: "First, find the radius of \\(C_{3}\\), then connect  the centers of \\(C_{3}, C_{4}\\) and \\(C_{1}\\)"
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
rating: 1600,
        text: `Six regular hexagonal blocks of side length \\(1\\) unit are arranged inside a regular hexagonal frame. Each block lies along an inside edge of the frame and is aligned with two other blocks, as shown in the figure below. The distance from any corner of the frame to the nearest vertex of a block is \\(\\frac{3}{7} unit). What is 
        the area of the region isde the frame not occupied by the blocks?`,
        image: 'assets/question-diagrams/amc-10-2023-problem-24.png',
        solution: `<b>\\(\\frac{9\\sqrt{3}}{2}\\)</b><p>We can extend the side of a block to make a triangle and a parallelogram.</p>
        <p>The triangle has a side length of \\(1-\\frac{3}{7}=\\frac{4}{7}\\). The longer side of the parallelogram is \\(1+\\frac{4}{7}\\). The shorter side is \\(\\frac{3}{7}\\). Thus,the total side length of the large hexagon is \\(1+1+\\frac{4}{7}+\\frac{3}{7}=3\\) for an area of \\(\\frac{27\\sqrt{3}}{2}\\).</p>
        <p>The areas of the blocks are each \\(\\frac{3\\sqrt{3}}{2}\\) for a total of \\(\\frac{18\\sqrt{3}}{2}\\) We subtract this to find that the remaining area is \\(\\frac{27\\sqrt{3}}{2}-\\frac{18\\sqrt{3}}{2}=\\frac{9\\sqrt{3}}{2}\\)`,
        topic: 'hexagons',
        type: 'mc',
        choices: ['\\(A) \\frac{13\\sqrt{3}}{2}\\)', '\\(B) \\frac{216\\sqrt{3}}{49}\\)', '\\(C) \\frac{9\\sqrt{3}}{2}\\)', '\\(D) \\frac{14\\sqrt{3}}{3}\\)', '\\(E) \\frac{243\\sqrt{3}}{49}\\)'],
        answer: '\\(C) \\frac{9\\sqrt{3}}{2}\\)',
        hint: "What shapes can you make in the space not occupied by the smaller hexagons?",
        step: "Extend the side of one base to make a small triangle and a long parallelogram"
    },
    {
        title: `AMC 10B 2023 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
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
        topic: 'circumcircles',
        hint: "Where is a circumcircle centered?",
        step: "Find the radius by dividing the hypotenuse by 2"
    },
    {
        title: `AMC 10B 2023 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 1,
rating: 800,
        text: `Square \\(ABCD\\) is rotated \\(20^\\circ\\) clockwise about its center to obtain square \\(EFGH\\), as shown below. What is the degree measure of \\(\\angle EAB\\)?`,
        solution: `<b>\\(35^\\circ\\)</b><p>The first thing that occurred to me to find was where the \\(20^\\circ\\) was actually expressed, since it's not super obvious from the image. HOWEVER, if we were to draw a point at the center of both squares, let's call it
        \\(I\\) and draw line segments \\(\\overline{AI}\\) and \\(\\overline{EI}\\) than we do indeed get a \\(20^\\circ\\) angle</p>
        <p>This bit of information, although helpful in conceptualizing the process, is not altogether nescessary. We need to find \\(\\angle EAB\\) which, because of power of a point, is \\(\\frac{1}{2} \\angle EIB\\). We know that \\(\\angle EFB\\) is \\(90^\\circ\\) and that 
        \\(\\angle BIF = 20^\\circ\\) so it follows that \\(\\angle EIB=90-20=70\\). Thus, \\(\\angle EAB=\\frac{70}{2}=35\\)</p>`,
        type: 'mc',
        choices: ['\\(A) 24^\\circ\\)', '\\(B) 35^\\circ\\)', '\\(C) 30^\\circ\\)', '\\(D) 32^\\circ\\)', '\\(E) 20^\\circ\\)'],
        answer: '\\(B) 35^\\circ\\)',
        image: 'assets/question-diagrams/amc-10-2023-problem-7.png',
        topic: 'power of a point',
        hint: "How can use the power of a point in this situation?",
        step: "Draw lines from \\(A\\) and \\(E\\) to the center \\(I\\)"
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
rating: 1400,
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
         hint: "How can you model edge length and face area using algebra? How can you use the difference of squares and factoring to model the expression we are solving for?",
         step: "Use the equations \\(2(a+b+c)=13\\) and \\(2(ab+bc+ac)=\\frac{11}{2}\\) to model the sum of the edges and faces, respectively"
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
rating: 1400,
        text: `Four coungruent semicircles are drawn on the surface of a sphere with radius \\(2\\), as shown, creating a close curve that divides the surface into two congruent regions. The
        length of the curve is \\(\\pi\\sqrt{n}\\). What is \\(n\\)?`,
        image: 'assets/question-diagrams/amc-10-2023-problem-20.png',
        type: 'mc',
        choices: ['\\(A) 32\\)', '\\(B) 12\\)', '\\(C) 48\\)', '\\(D) 36\\)', '\\(E) 27\\)'],
        solution: `<b>32</b><p>From the picture, we can pretty confidently see that the four points, which we can call \\(A, B, C,\\) and \\(D\\) are coplanar. This essentially means we can take a cross section  that "slices" the sphere and 
        shows us a circle with \\(A, B, C,\\) and \\(D\\) on each edge. The circle has a radius of \\(2\\), as given in the question. We can try to find the distance between points, because that would give us the diameter of each arc which we could use to find the radius.</p>
        <p>The radii of the crossection circle are \\(2\\) and form a right angle when we draw them from \\(A\\) and \\(B\\) to the center of the circle. Thus, we can use the pythagorean theorem to find the distance is \\(2\\sqrt{2}\\). The radius is \\(\\sqrt{2}\\) and the total length of the curve is the sum of the \\(4\\) arcs, which is just \\(2\\) times 
        the circumfrence of a circle with radius \\(\\sqrt{2}\\). Said circumfrence is \\(2\\sqrt{2}\\pi\\) for a total length of \\(4\\sqrt{2}\\pi\\) and \\(4^2\\cdot 2=32\\) so that is our answer`,
        answer: '\\(A) 32\\)',
        topic: 'arc length',
        hint: "How can you use a cross section to model this>",
        step: "Take a cross section because the endpoints of the arcs \\(A,B,C,D\\) are all coplanar. From there you hvae a circle with radius \\(2\\) and all the points on the circumfrence. The diameter of the arcs is the distance between the points"
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
rating: 1600,
     text: 'A regular pentagon with area \\(1+\\sqrt{5}\\) is printed on paper and cut out. All five vertices are folded to the center of the pentagon, creating a smaller pentagon. What is the area of the new pentagon?',
      solution: `<b>\\(\\sqrt{5}-1\\)</b><p>When we fold a pentagon, or any regular polygon, so that it forms another regular polygon of the same sort, we notice two things:</p>
      <p>1) The inner polygon is rotated (idk this helped me visualize it)</p>
      <p>2) The vertices of the new, smaller polygon are colinear with the center of the polygon and the midpoint of the edges of the larger polygon,
      and visa versa (with the midpoints of the smaller andges and the vertices of the larger one). Not only that, the midpoint of the edge of the smaller polygon is situated on the midpoint of a line between the center and the vertex of the larger polygon.</p>
      <p>We know that by drawing lines from the vertices to the center of the polygon splits the pentagon into \\(5\\) isoceles triangles with vertex angles of \\(\\frac{360}{5}=72\\).</p>
      <p>If we draw an altitude by bisecting the vertex angle and connecting it to the midpoint of the opposite edge. This gives us two right triangles with angle measures of \\(\\frac{72}{2}=36\\) and \\(90-36=54\\).</p>
      <p>We know the shorter leg has a measure of \\(\\frac{\\sqrt{5}+1}{2}\\) so we can use some trigonometry to find the length of th hypotenuse, then divide that by \\(2\\) to find the altitude of the smaller isoceles triangles that make up the smaller
      pentagon, and from there the side lengths. The math for this turns out to be pretty robust and involves angle identities, so I won't go too far into it, but the basic process is outlined above.`,
      type: 'mc',
      choices: ['\\(A) 4-\\sqrt{5}\\)', '\\(B) \\sqrt{5}-1\\)', '\\(C) 8-3\\sqrt{5}\\)', '\\(D) \\frac{\\sqrt{5}+1}{2}\\)', '\\(E) \\frac{2+\\sqrt{5}}{3}\\)'],
      answer: '\\(B) \\sqrt{5}-1\\)',
      topic: 'trigonometry',
      hint: "Where can you draw lines to divide the polygon into triangles?",
      step: "Draw lines from the vertices to the center, and then again fron the midpoints to the center to divide the shape into smaller triangles"
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
rating: 1200,
        text: `One side of an equilateral triangle of height \\(24\\) lies on line \\(l\\). A circle of radius \\(12\\) is tangent to line \\(l\\) and is externally tangent to the triangle. The area of the region exterior to the trinagle and the circle and bounded by the triangle, the circle, and line \\(l\\) can be
        written as \\(a\\sqrt{b}-c\\pi\\) where \\(a, b,\\) and \\(c\\) are positive integers and \\(b\\) is not divisible by the square of any prime. What is \\(a+b+c\\)?`,
        solution: `<b>74</b><p>We start by drawing the radii connecting the center of the circle to the point of intersections with the circle and triangle and the circle and \\(l\\). The angle between the triangle and \\(l\\) on the EXTERIOR is \\(180-60=120\\) and 
        by power of a point, we know that the angle of the radii is half of that, being \\(60\\). </p>
        <p>We then draw a line that bisects the \\(60\\) degree angle between the radii and extend it until it reaches \\(l\\). This creates two right triangles bounded by the radii, the line we just drew, and either the edge of the triangle or line \\(l\\). We know one side length already, \\(12\\) and we use \\(\\tan (30^\\circ)=\\frac\\{sqrt{3}}{3}\\)
        to find that the shorter side is equal to \\(4\\sqrt{3}\\). We can then find the area of the triangle (note we don't divide by \\(2\\) because there are two triangles) and find the area is \\(48\\sqrt{3}\\). That's the whole area of the wedge, but we want to take out the part that is included in the circle, which is just \\(\\frac{1}{6}\\) of the total
        area of the circle, so \\(\\frac{12^2\\pi}{6}=24\\pi\\). So, we have our area to be \\(48\\sqrt{3}-24\\pi\\) meaning \\(a=48, b=3, c=24\\), thus \\(a+b+c=48+3+24=75\\)
        `,
        answer: 75,
        topic: 'area',
        hint: "How can you bind a section bounded by the triangle, the line \\(l\\) and two radii of the circle?",
        step: "Draw a kite with a diagonal from the point wher ethe triangle meets \\(l\\) to the center of the circle, and congruent sides of the side of the triangle and \\(l\\) as well as two radii of the circle"
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
rating: 1400,
        text: 'All of the rectangles in the figure below, which is drawn to scale, are similar to the enclosing rectangle. Each number represents the area of the rectangle. What is length \\(AB\\)?',
        image: 'assets/question-diagrams/amc-10-2024-problem-16.png',
        solution: `<b>\\(10\\sqrt[4]{2}\\)</b><p>We know by the answer choices that the side lengths are probably not integers. That sucks for us. We ARE however told that the rectangle is drawn to scale. This helps a whole lot.</p>
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
topic: 'similarity',
hint: "Label as many values as possible",
step: "Draw the diagram and label everything you can with variables"
    },
    {
        title: `AMC 10B 2024 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `A rectangle has integer length sides and an area of 2024. What is the least possible perimeter of the rectangle?`,
        solution: `<b>180</b><p>We know that the perimeter will be smallest when the the side lengths are as close to each other as possible (if you don't know this try using a few smaller tests and make a conjecture)</p>
        <p>We know that \\(\\sqrt{2025}=45\\) so we're looking for something near \\(45\\). Obviously, \\(45\\) is not a factor, but \\(44\\) is. The dimensions are \\(44\\) and \\(46\\) for a combined perimeter of \\(44+46+44+46=180\\)`,
        type: 'fr',
        topic: 'optimization',
        answer: '180',
        hint: "When does the smallest perimeter occur? Try using smaller values to make a conjecture",
        step: "Because the smallest perimeter occurs when the factors are closest to each other, find the factors of \\(2024\\) that are nearest to each other"
    },
    {
        title: `AMC 10B 2024 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 2,
rating: 1000,
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
        hint: "Is there anything you can simplify about this question? What do they not explicitly define?",
        step: "Draw the points on a coordinate grid. Since a lot is left unclear, assume a square with side length \\(1\\)"

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
rating: 1200,
        text: `In the figure below \\(WXYZ\\) is a rectangle with \\(WX=4\\) and \\(WZ=8\\). Point \\(M\\) lies \\(\\overline{XY}\\),
        point \\(A\\) lies on \\(\\overline{YZ}\\) and \\(\\angle WMA\\) is a right angle. The areas of \\(triangle WXM\\) and \\(\\triangle WAZ\\) are equal. What is the area of \\(\\triangle WMA?\\)`,
        image: 'assets/question-diagrams/amc-10-2024-problem-11.png',
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
        hint: "Which triangles are similar?",
        step: "Call \\(XM=x\\) and \\(MY=8-x\\) and set up a similar triangles ratio"
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
rating: 1600,
        text: `Two straight pipes (circular cylinders) with radii \\(1\\) and \\(\\frac{1}{4}\\), lie parallel in contact on a flat floor. The 
        figure below shows a head-on view. What is the sum of the possible radii of a third parallel pipe lying on the same floor and in contact with both? `,
        image: `assets/question-diagrams/amc-10-2024-problem-21.png`,
        type: 'mc',
        choices: ['\\(A) \\frac{1}{9}\\)', '\\(B) 1\\)', '\\(C) \\frac{10}{9}\\)', '\\(D) \\frac{11}{9}\\)', '\\(E) \\frac{19}{9}\\)'],
        solution: `<b>\\(\\frac{10}{9}\\)</b>By the diagram, there are two places we can put a circle tangent to both: Between the two in the space enclosed by them or to the right of the smaller one so that it 'goes over' the smaller one's center.</p>
        <p>We know the distance between the center points of the two circles is \\(\\frac{5}{4}\\) and can be described as the hypotenuse of a right triangle with a vertical leg down from the center of the large circle and a horizontal line from the small circle of lengths \\(\\frac{3}{4}\\) and an unkown value, respectively</p>
        <p>If we were to draw lines from the centers of the two preexisting circles to the center of the "3rd circle", the one we draw between them, it also forms a right triangle with the same hypotenuse and legs \\(1+r\\) and \\(\\frac{1}{4}+r). We also label the horizontal distance between the centers ofthe two smallest circles to be 
        \\(x\\)</p>
        <p>Drawing a horizontal line from the center of the smallest circle and a vertical line down from the center of the second smallest circle gives us another right triangle with hypotenuse \\(r+\\frac{1}{4}\\) and legs \\(x\\) and \\(\\frac{1}{4}-r\\)
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
        topic: 'tangent circles',
        hint: "What right triangles can you draw?",
        step: "Find the distance between the centers of all the circles and draw right triangles to use the pythagorena theorem to find them"
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
        hint: "How can you write a systems of equations to relate the values?",
        step: "Use the equations \\(3c+1=7a\\), \\(3a+1=2b\\) and \\(3b+1=2c\\)"
    },
    {
        title: `AMC 10A 2025 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `How many isosceles triangles are there with positive area whose side lengths are all positive integers and whose longest side has length \\(2025\\)?`,
        solution: `<b>3037</b><p>We know that the sum of two sides must be greater than the remaining side. We evaluate two cases:</p>
        <p>1) The longest side is the base side, the one opposite the vertex angle, measures \\(2025\\). The side angles must be greater than \\(\\frac{2025}{2}=2=1012.5\\) and must be less than \\(2024\\), thus there are \\(1012\\) possible values</p>
        <p>2) The longest sides are the two side angles. In that case, the base the angle can be anywhere from \\(1\\) to \\(2024\\). Thus, there  are \\(2024+1012+1=3037\\) ways (adding \\(1\\) for the equilateral triangle)`,
        topic: 'triangles',
        answer: '3037',
        hint: "What rules do we have about the side lengths of triangles",
        step: "Split up into two cases where the longest side is the base side, and then that hte longest sides are the legs"
    },
    {
        title: `AMC 10A 2025 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `In an equilateral triangle, each interior angle is trisected by a pair of rays. The intersection of the interiors of the middle \\(20^\\circ\\)-angle at each evertex is the
        interior of a convex hexagon. What is the degree measure of the smallest angle of this hexxagon?`,
        choices: ['\\(A) 80\\)', '\\(B) 90\\)', '\\(C) 100\\)', '\\(D) 110\\)', '\\(E) 120\\)'],
        answer: '\\(C) 100\\)',
        type: 'mc',
        solution:  `<b>100</b><p>We notice that there is an isoceles triangle formed withthe base of the equilateral triangle and the two rays that make a \\(20^\\circ\\) angle off out it (I recommend drawing this). The vertex
        angle is \\(180-20-20=140\\). By vertical angles, one of the angles of the hexagon is equal to that. Doing this for each side gives \\(3\\) angles of \\(140^\\circ\\). Since we know that the sum of the angles must be \\((6-2)(180)=720\\) we find
        \\(\\frac{720-140-140-140}{3}=100\\)`,
        topic: 'triangles',
        hint: "Draw it out! What kinds of triangles do you see?",
        step: "Just draw and keep labeling everything you know =P"
    }

];
const numTheoryQ = [
    {
title: `AMC 10A 2025 Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
used: false,
difficulty: 3,
rating: 1200,
text: `The sequence \\(1,x,y,z\\) is arithmetic. The sequence \\(1,p,q,z\\) is geometric. Both sequences are strictly increasing and contain only integers, and 
\\(z\\) is as small as possible. What is the value of \\(x+y+z+p+q\\)?`,
type: 'mc',
choices: ['\\(A) 66\\)', '\\(B) 91\\)', '\\(C) 103\\)', '\\(D) 132\\)', '\\(E) 149\\)'],
solution: `<b>149</b><p>Let's call the common difference \\(d\\) and the common ratio \\(a\\). We have that \\(z=1+3d\\) and \\(z=a^3\\). We're looking for the smallest values of \\(a\\) and \\(d\\).</p>
<p>We need the smallest value \\(a\\) such that \\(a^3-1\\) is divisible by \\(3\\). \\(a=2\\) gives us \\(\\frac{7}{3}\\). \\(a=3\\) gives \\(\\frac{26}{3}\\). \\(a=4\\) gives \\(d=\\frac{63}{3}=21\\). We thus have \\(4+16+64+22+43=149\\)`,
answer: '\\(E) 149\\)',
topic: 'series',
hint: "How can you create two equations for \\(z\\) using common difference \\(d\\) and common ratio \\(a\\) such that \\(z\\) is as small as possible?",
step: "Use the equations \\(z=1+3d\\) and \\(z=a^3\\) where \\(d\\) is the common difference and \\(a\\) is the common ratio. How small can you make \\(a\\) and \\(d\\)?"
    },
    {
title: `AMC 10B 2023 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
used: false,
difficulty: 2,
rating: 1000,
text: `The numbers \\(16\\) and \\(25\\) are a pair of consecutive positive squares whose difference is \\(9\\). How many pairs of consectuve positive perfect squares have a distance of less than or 
equal to \\(2023\\)?`,
type: 'mc',
choices: ['\\(A) 674\\)', '\\(B) 1011\\)', '\\(C) 1010\\)', '\\(D) 2019\\)', '\\(E) 2017\\)'],
solution: `<b>674</b><p>The difference between squares can be mapped as a line with equation \\(2n+1\\). We're looking for how many values of \\(n\\) satisfy \\(2n+1 \\leq 2023\\). Solving for \\(n\\), we get \\(n \\leq 1011\\). Thus, we have \\(n=1011\\)</p>`,
answer: '\\(B) 1011\\)',
topic: 'squares',
hint: "What pattern do you notice in the differences of squares?",
step: "Write out the first few differences of squares : \\(1, 3, 5\\). Model this with the equation \\(2n+1\\)"

    },
    {
        title: `AMC 10A 2020 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `A single bench section at a school event can hold either \\(7\\) adults or \\(11\\) children. When \\(N\\) bench sections are connected end to end, an equal number of adults and children seated together will occupy the bench space. What is the least positive
        integer value of \\(N\\)?`,
        type: 'mc',
        choices: ['\\(A) 9\\)', '\\(B) 18\\)', '\\(C) 27\\)','\\(D) 36\\)', '\\(E) 77\\)'],
        answer: '\\(B) 18\\)',
        solution: `<b>18</b><p>The number of each that will be seated is the LCM of \\(11\\) and \\(7\\) which is \\(77\\). Thus, we need \\(11\\) benches for the adults and \\(7\\) for the children for \\(N=11+7=18\\)`,
        topic: 'LCM',
        hint: "Use the LCM to find how many children and how many adults can be seated",
        step: "The number of children and adults individually that can be seated is the LCM of \\(11\\) and \\(7\\) which is \\(77\\)"
    },
    {
title: `AMC 10B 2020 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
used: false,
difficulty: 2,
rating: 1000,
text: 'How many positive even multipes of \\(3\\) less than \\(2020\\) are perfect squares?',
choices: ['\\(A) 7\\)', '\\(B) 8\\)', '\\(C) 9\\)', '\\(D) 10\\)', '\\(E) 12\\)'],
type: 'mc',
solution: `<b>7</b><p>What this is really saying is how many multiples of \\(6\\) less than \\(2020\\) are perfect squares. We know it has to be even, so it must have at least
one factor of \\(2\\), which is included in the \\(6\\). We know \\(2020\\) is close to \\(2025=45^2\\). \\(\\frac{45}{6}\\) is roughly \\(7\\), so we get that as our answer`,
answer: '\\(A) 7\\)',
topic: 'squares',
    },
    {
        title: `AMC 10B 2023 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Let \\(L_{1}=3, L_{2}=3\\) and \\(L_{n+2}=L_{n+1}+L_{n}\\) for \\(n \\geq 1\\). How many terms in the sequence \\(L_{1},L_{2},L_{3}...L_{2023}\\) are even>`,
        solution: `<b>674</b><p>Let's do some induction. We have \\(1,3,4,7,11,18,29,47,76...\\). It goes odd, odd, even, odd, odd, even, odd, odd even. That means every \\(3\\), there is an even . We have \\(\\frac{2023}{3}=674\\) with  remainder of \\(1\\). That gives, \\(674\\) evens`,
        type: 'mc',
        choices: ['\\(A) 673\\)', '\\(B) 1011\\)', '\\(C) 675\\)', '\\(D) 1010\\)', '\\(E) 674\\)'],
        answer: '\\(E) 674\\)',
        topic: 'induction',
        hint: "What pattern do you see in the first few values?",
        step: "Write out the values and find that there is a pattern with whic hare even and which are odd"
    },
    {
        title: `AMC 10A 2023 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `An integer is assigned to each vertex of a cube. The value of an edge is defined to be the
        sum of the values of the two vertices it touches, and the value of a face is defined to be the
        sum of the values of the four edges surrounding it. The value of the cube is defined as the
        sum of the values of its six faces. Suppose the sum of the integers assigned to the vertices
        is \\(21\\). What is the value of the cube?`,
        solution: `<b>126</b><p>Notice that each vertice is a part of \\(3\\) edges. Thus, the sum of all the edges would be \\(3(21)=63\\). Each edge is calculated twice, so the sum becomes \\(2(63)=126\\)`,
        type: 'mc',
        choices: ['\\(A) 42\\)', '\\(B) 63\\)', '\\(C) 84\\)', '\\(D) 126\\)', '\\(E) 252\\)'],
        answer: '\\(D) 126\\)',
        topic: 'logic',
        hint: "How many edges is each vertice a part of? How many faces is each edge apart of?",
        step: "Because each vertice is `apart of` three edges, it gets counted \\(3\\) times. We now now that the sum of the edges is \\(3(21)=63\\). Follow the same logic for the edges and faces"
    
    },
    {
        title: `AMC 10A 2020 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `How many \\(4\\)-digit positive integers (that is integers between \\(1000\\) and \\(9999\\), inclusive) having only even digits are 
        divisible by \\(5\\)?`,
        solution: `<b>100</b><p>Since it has to be divisible by \\(5\\), we need it to end with \\(5\\) or \\(0\\). Since it must have all even digits, it must end with \\(0\\).
        From here, the first digit can be \\(2,4,6,8\\), the second and third can be \\(0,2,4,6,8\\), and the last is \\(0\\). That gives \\(4 \\times 5 \\times 5 \\times 1 = 100\\)`,
        type: 'mc',
        choices: ['\\(A) 80\\)', '\\(B) 100\\)', '\\(C) 125\\)', '\\(D) 200\\)', '\\(E) 500\\)'],
        answer: '\\(B) 100\\)',
        topic: 'logic',
        hint: "What are the rules for divisibility by \\(5\\)? How many even numbers are there?",
        step: "Since we know that the last digit must be \\(0\\), find the number of combinations for each of the different digits"
    },
    {
        title: `AMC 10A 2020 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `The \\(25\\) integers from \\(-10\\) to \\(14\\), inclusive, can be arranged to form a \\(5\\)-by-\\(5\\) square in which the sum of the numbers in each row, the sum of the numbers in each column, and the sum of the
        numbers along each of the main diagonals are all the same. What is the value of the common sum?`,
        solution: `<b>10</b><p>Notice that there are multiple ways to do this, if anything because of rotational symmetry. This alone tells us that finding "the exact solution" isn't best</p>
        <p>Each number appears once. Thus, if we take the entire sum,that would give us the sum of all the rows to each other, or all the columns to each other. Since there are \\(5\\) rows/columns, we know that we can just take the total sum an divide by \\(5\\)</p>
        <p>We use the equation for the sum of all integers less than \\(n\\) which is  \\(\\frac{n(n-1)}{2}\\). We find solve this for \\(n=15\\) and then subtract \\(n=10\\). This ends up being</p>
        $$
        \\frac{15\\cdot 14}{2}-\\frac{11\\cdot 10}{2}=
        $$
        $$
        105-55
        $$
        $$
        50
        $$
        <p>Hint, this is also just 14+13+12+11=50</p>
        <p>Divide by \\(5\\)</p>
        $$
        \\frac{50}{5}=10
        $$`,
        answer: '10',
        topic: 'logic',
        hint: "There are multiple solutions, don't waste time trying to find the right one. Notice that the common sum is ALWAYS the same.",
        step: "Find the common sum as the total sum divided by \\(5\\)"
    },
    {
        title: `AMC 10A 2024 Problem 24 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: `<p>Let \\(n\\) be the least positive integer greater than \\(1000\\) for which \\(\\textup{gcd}(63, n + 120)=21 \\textup {and gcd}(n+63, 120)=60\\)`,
        choices: ['\\(A) 12\\)', '\\(B) 15\\)', '\\(C) 18\\)', '\\(D) 21\\)', '\\(E) 24\\)'],
        answer: '\\(C) 18\\)',
        solution: `<b>18</b><p>Since \\(n+63\\) must be divisible by \\(60\\), we know it must end in \\(7\\). Thus, we are looking for a multiple of \\(21\\) greater than \\(1000\\) such that it ends in \\(7\\). Thus, the thing we are multiplying
        \\(21\\) by must end in \\(7\\). We know that \\(\\frac{1000}{21}\\) is roughly equal to \\(50\\). HOWEVER, it can't be \\(57\\) because the \\(GCD\\) would be greater for the first rule (it would be \\(63\\)). We try the next possible value: \\(67\\) (iyky). This is prime, so we don't have to worry about other 
        \\(\\textup{gcd}\\)s. We multiply \\(67\\cdot 21=1407\\) then \\(1407-120+63=1350\\) which is not divisible by \\(120\\). We keep trying this process until we get to \\(97\\) which works and makes \\(n=1917\\) for \\(1+9+1+7=18\\)`,
        topic: 'factoring',
        type: 'mc',
        used: false,
        difficulty: 4,
rating: 1400,
hint: "What factor of \\(60\\) can you use to find the last digit of \\(n\\)?",
step: "Realize that the units digit of \\(n\\) must be \\(7\\) because \\(n+63\\) must end in \\(0\\). Find the smallest value of \\(n\\) such that \\(n+120\\) is divisible by \\(21\\) but not \\(63\\)"
    },
    {
        title: `AMC 10B 2020 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Driving along a highway, Megan noticed that her odometer showed \\(1591\\) (miles). This number is a palindrome-it reads the same forward and backward. Then \\(2\\) hours later,
        the odometer displayed the next higher palindrome. What was her average speed, in miles per hour, during this \\(2\\)-hour period?`,
        solution: `<b>55</b><p>We don't actually want to focus on the ones digit, because, when it comes down to that, it won't matter as much. We start bigger. We know that we want the next number to be as small as possible, so then we ideally stay in the \\(10,000\\)s territory. We then have \\(1 x x x 1\\). We, ideally,
        want to keep the thousands and tens place as \\(5\\), but, because the middle number is \\(9\\), that's not possible. Thus, we bring those up to \\(6\\) and make the middle number \\(0\\) for \\(16061\\). Her speed is \\(\\frac{16061-15951}{2}=\\frac{110}{2}=55\\)`,
        answer: '55',
        type: 'fr',
        hint: "Start from the larger digits and work inwards",
        step: "Find the greatest palindrome that fits in \\(1xyx1\\)"
    },
    {
        title: `AMC 10B 2020 Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `<p>The decimal representation of</p>
        $$
        \\frac{1}{20^20}
        $$
        <p>consists of a string of zeros after the decimal point, followed by a \\(9\\) and then several more digits. How many zeroes are in that intial string of zeros after the decimal point?</p>`,
        solution: `<b>26</b><p>Start by writting the equation with a base \\(10\\). We can write \\(\\frac{1}{2^20 \\cdot 10^20}\\) and then try to get the \\(2^20\\) out of the denominator</p>
        $$
        \\frac{1}{2^20 \\cdot 10^20} \\cdot \\frac{5^20}{5^20} = \\frac{5^20}{10^40}\\
        $$
        <p>There will be \\(40\\) trailing zeroes by the denominator, but that still leaves the issue of the numerator. We brute force to find that there are \\(14\\) digits and realizie that what we are solving for is \\(40-14=26\\)`,
        answer: '26',
        topic: 'exponents',
        hint: "How can you rewrite this in base \\(10\\)?",
        step: "Rewrite as \\(\\frac{1}{10^20 \\cdot 2^20\\}\\) and multiply by \\(\\frac{5^20}{5^20}\\) to get \\(2^20\\) out of the denominator. "
    },
    {
        title: `AMC 10B 2020 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `Steve wrote the digits \\(1, 2, 3, 4,\\) and \\(5\\) in order repeatedly from left to right, forming a list of \\(10,000\\) digits beginning \\(123451234512...\\) He then erased every third digit from his list (that is the \\(3\\)rd, \\(6\\)th, \\(9\\)th...digits from the left),
        the erased every fourth digit from the resulting list (that is the \\(4\\)th, \\(8\\)th, \\(12\\)th,...digits from the left in what remained), and then erased every fifth digit from what remained at that point. What is the sum of the three digits that were in the positions of \\(2019, 2020, 2021\\)?`,
        solution: `<b>11</b><p>This problem really isn't as complicated as it may look. Yes, at a glance, it is long winded. However, the key to this problem is realizing that every few runs, there will be a pattern.</p>
        <p>When we erase the \\(3\\)rd, we know that it will erase the numbers \\(3, 1, 4, 2, 5\\), in that order. Whenever you erase the \\(5\\), you reset the pattern. We can write out the sequence until it reaches \\(5\\) or even just find the least common multiple of \\(3,5\\) which is \\(15\\). That being said, however, we have to 
        remove \\(5\\) values, so we are now left with a pattern of length \\(10\\):</p>
        $$
        1, 2, 4, 5, 2, 3, 5, 2, 5
        $$
        <p>We repeat this process  for removing the \\(4\\)th. We can't look for \\(5\\), anymore though, because the cycle is not of length \\(5\\). Well, to be exact, we still look for \\(5\\), but the \\(5\\) at the end of the previous cycle It gets a bit longer because the LCM of \\(10\\) and \\(4\\) is \\(20\\), and we'd be left with \\(20-5=15\\) values</p>
        $$
        1, 2, 4, 2, 3, 5, 3, 4, 1, 4, 5, 2, 5, 1, 3
        $$
        <p> We do this one more time for a cycle of length LCM(\\(5, 15\\))\\(=15\\) and we erase \\(3\\) so there are \\(12\\)</p>
        $$
        1, 2, 4, 2, 5, 3, 4, 1, 5, 2, 5, 1
        $$
        <p>There are \\(12\\), so we find the ones in the spaces of \\(2019, 2020, 2021\\) mod \\(12\\), which are \\(4, 2, 5\\) which sum to \\(11\\)</p>
        `,
        answer: '11',
        topic: 'modular arithmetic',
        hint: "The lengths of the new cycles are the LCM of \\((\\textup{# we are erasing},\\textup{original cycle length})-\\textup{number of numbers erased}\\) ",
        step: "Use the equtaion for cycle length to find the final cycle, erasing enough values and checking your work. From there, you can use modular arithmetic with the final cycle length"
    },
    {
        title: `AMC 10B 2020 Problem 16 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `Bela and Jenn play the following game on the closed interval \\([0,n]\\) of the real number line, where \\(n\\) is a fixed integer greater than \\(4\\). They take turns playing, with Bela going first. At his first turn,
        Bela chooses any real number in the interval \\([0,n]\\). Thereafter, the player whose turn it is chooses a real number that is more than one unit away from all numbers previously chosen by either player. A player unable to choose such a number loses. Using optimal strategy, which player will win the game?`,
        type: 'mc',
        choices: ['\\(A) \\textup{Bela will always in}\\)', '\\(B) \\textup{Jenn will always win.}\\)', '\\(C) \\textup{Bela will win if and only if}  n  \\textup{is odd}\\)', '\\(D) \\textup{Jenn will win if an only if}  n  \\textup{is oddd}\\)', '\\(E) \\textup{Jenn will win if and only if} n>8\\)'],
        solution: `<b>Bella will always win</b><p>This is essentially trial and error. You look at each answer, find the case in which that happens, and test. Notice that even though there are ways for Jenn to win, if Bela plays the best way possible, she'll always win. That is to say, Bela can always win if she wants. Thus, Bela will always win</p>
        <p>The reason for this, more specifically, is Bela can divide the section into two halves, and if Jenn every completley occupies one half, then Bela must be able to do that for the opposite side`,
        answer: '\\(A) \\textup{Bela will always in}\\)',
        topic: 'casework',
        hint: "What is the optimal strategy? How can Bela achieve symetry?",
        step: "Realize that Bela's first move should always be to try to split the interval in half"
    },
    {
        title: `AMC 10B 2020 Problem 22 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `What is the remainder when \\(2^202 + 202\\) is idivided by \\(2^101+2^51+1\\)?`,
        solution: `<b>201</b><p>If \\(x=2^50\\), we can substitute \\(\\frac{4x^4+202}{2x^2+2x+1}\\) we factor out \\((2x^2+2x+1)(2x^2-2x+1)+201\\) in the numerator and divide out the denominator for \\(2x^2-2x+2\\) which we solve to be \\(201\\)</p>`,
        answer: '201',
        topic: 'factoring',
        hint: "What value in exponential form can you substitute into the expressions to simplify?",
        step: "Substitute \\(x=2^50\\) in and factor the denominator out of the numerator"
    }, 
    {
        title: `AMC 10A 2021 Spring Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 2,
rating: 1000,
        text: `<p>Tom has a collection of \\(13\\) snakes, \\(4\\) of which are purple and \\(5\\) of which are happy. He observes that</p>
        <p>All of his happy snakes can add</p>
        <p>None of his purple snakes can subtract</p>
        <p>All of his snakes that can't subtract also can't add</p>
        <p>Which of these conclusions can be drawn about Tom's snakes?</p>`,
        type: 'mc',
        choices: ['\\(A\\) Purple snakes can add', '\\(B\\) Purple snakes are happy', '\\(C\\) Snakes that can add are purple', '\\(D\\) Happy snakes are not purple', "\\(E\\) Happy snakes can't subtract"],
        solution: `<b>Happy snakes are not purple</b><p>Let's start by using what is given to find a bit more. If no purple snakes can subtract, then all purple snakes can't subtract and thus, by the third rule, cannot add. Happy snakes, however, must be able to add. Thus, happy snakes cannot be purple</p>`,
        answer: '\\(D\\) Happy snakes are not purple',
        topic: 'logic',
        hint: "Using the rules add more rules and bounds",
        step: "Using the provided information realize that none of the purple snakes can add. What does that mean about the connection between happy and purple snakes?"
    },
    {
        title: `AMC 10A 2021 Spring Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 2,
rating: 1000,
        text: `<p>When a student multiplied the number \\(66\\) by the repeating decimal,</p>
        $$
        1.abab...\\underline{1}.\\overline{ab},
        $$
        <p>Where \\(a\\) and \\(b\\) are digits, he did not notice the notation and just multiplied \\(66\\) times \\(\\underline{1}.\\underline{a}\\underline{b}\\). Later, he found that his answer is \\(0.5\\) less than the
        correct answer. What is the \\(2\\)-digit number \\(ab\\)`,
        solution: `<b>75</b><p>Let's express what the question gives us algebraicly. We have that \\(66(1.\\overline{ab})=66(1.ab)+0.5\\). We notice a common factor for the decimals so we bring them to one side and factor: \\(66(1.\\overline{ab}-1.ab)-0.5\\). </p>
        <p>From here, I'll admit the math is shady. I'm honestly not sure if this is something you can actually do. That being said, we effectively solve for \\(ab\\) as if it were one variable (recall that \\(ab\\) are not being multiplied, it is just the digit representation).</p>
        $$
        66(0.00ab)=0.5
        $$
        $$
        0.00ab=0.\\overline{75}
        $$
        $$
        ab=75.7575755
        $$
        <p>Based on the answer choices, assume \\(75\\)        `,
        type: 'mc',
        choices: ['\\(A) 15\\)', '\\(B) 30\\)', '\\(C) 45\\)', '\\(D) 60\\)', '\\(E) 75\\)'],
        answer: '\\(E) 75\\)',
        topic: 'algebraic manipulation',
        hint: "Write an equation and treat \\(ab\\) as a variable for the digit representation",
        step: "Write the equation \\(66(1.\\overline{ab})=66(1.ab)+0.5\\) and subtract \\(66(1.ab\\) to get \\(66(1.\\overline{ab}-1.ab)-0.5\\)"
    },
    {
        title: `AMC 10A 2021 Spring Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `<p>Which of the following is equivalent to</p>
        $$
        (2+3)(2^2+3^2)(2^4+3^4)(2^8+3^8)(2^16+3^16)(2^32+3^32)(2^64+3^64)
        $$`,
        type: 'mc',
        choices: ['\\(A) 3^127+2^127\\)', '\\(B) 3^127+2^127+2\\cdot 3^63 + 3 \\cdot 2^63\\)', '\\(C) 3^128 - 2^128\\)', '\\(D) 3^128 + 2^128\\)', '\\(E) 5^127\\)'],
        answer: '\\(C) 3^128 - 2^128\\)',
        solution: `<b>\\(3^128 - 2^128\\)</b><p>We rewrite using the sum/difference of squares. We notice that we can write \\(2+3=\\frac{2^2-3^2}{2-3}\\). The next is \\(2^2+3^2=\\frac{2^4-3^4}{2^2-3^2}\\). When we multiply these two together, the numerator of the first and the denominator of the secound 
        will cancel out, leaving us with \\(\\frac{2^4-3^4}{2-3}\\). Continuing on with this pattern eventually leaves us with</p>`,
        topic: 'factoring',
        hint: "How can you rewrite with the difference of squares?",
        step: "Write each factor as \\(2^n+3^n\\frac{2^{2n}-3^{2n}}{2^n-3^n}\\) You should be able to cross multiply"
    },
    {
        title: `AMC 10A 2021 Spring Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 2,
rating: 1000,
        text: `For which of the following integers \\(b\\) is the base-\\(b\\) number \\(2021_{b}-221_{b}\\) not divisible by \\(3\\)?`,
        type: 'mc',
        choices: ['\\(A) 3\\)', '\\(B) 4\\)', '\\(C) 6\\)', '\\(D) 7\\)', '\\(E) 8\\)'],
        solution: `<b>8</b><p>Let's start by unwinding what base \\(b\\) numbers mean. Essentially, you keep counting up, but when you reach the number of the base you are (say \\(10\\)), you reset the place (as in tens place) you are in back to \\(0\\) and then add another digit starting at\\(1\\). </p>
        <p>Thus, the way we convert bases is by dividng the number by the base, finding the remainder, writing that as a digit, then taking the quotient (w/o remainder), dividing by the base again, taking the remainder, etc. etc.</p>
        <p>This is honestly easy enough to brute force. With base \\(3\\), we get \\(2202212-812\\). We can honestly just keep doing this until we get \\(8\\) as our answer OR we notice that the bases are probably going to have some relation to the remainder mod \\(3\\) and since \\(8\\) is the only one with 
        an exclusive remainder when divided by \\(3\\) (\\(2\\)), it's porbably the answer`,
        topic: 'bases',
        answer: '\\(E) 8\\)',
        hint: "What are the remainders of each number divided by \\(3\\)?",
        step: "Find the remainders of each divided by \\(3\\). Which one is different?"

    }, 
    {
        title: `AMC 10B 2021 Spring Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Mr. Zhou places all the integers from \\(1\\) to \\(225\\) into a \\(15\\) by \\(15\\) grid. he places \\(1\\) in the middle square (eighth row and eighth column) and places other numbers one by one clockwise, as shown in part in the diagram below.
        What is the sum of the greatest number and the last number that appear in the second row from the top?`,
        image: "assets/question-diagrams/amc-10-2021-problem-8.png",
        solution: `<b>367</b><p>We work backwards for this. We know that the entire top row has \\(15\\) terms being with \\(15\\) largest terms of the sequence. We also know by induction that the leftmost term in a row is the largest. Thus, the largest term in the second row is \\(225-15=210\\). The smallest we can find by working backwards. Starting from \\(225\\) again, we have 
        \\(15\\) for the top row, \\(14\\) for the left, \\(14\\) for the bottom, \\(13\\) for the right, and \\(12\\) for the second top row. We subtract all of this from \\(225\\) for \\(157\\) and add this to \\(210\\) for answer \\(367\\) `,
        answer: '367',
        topic: 'logic',
        hint: "What terms are in the first row? Work backwards",
        step: "Start by finding the largest term in the second row by finding \\(225-15=210\\). Keep working backwards"
    },
    {
        title: `AMC 10B 2021 Spring Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`, 
        used: false,
        difficulty: 3,
rating: 1200,
        text: 'Let \\(N=34\\cdot 34 \\cdot 63 \\cdot 270\\). What is the ratio of the sum of the odd divisors of \\(N\\) to the sum of the even divisors of \\(N\\)',
        type: 'mc',
        choices: ['\\(A) 1:16', '\\(B) 1:15\\)', '\\(C) 1:14\\)', '\\(D) 1:8\\)', '\\(E) 1:3\\)'],
        soltuion: `<b>1:14</b><p>We start by finding the prime factorization. We break up \\(34\\) into \\(2 \\cdot 17\\), \\(63\\) into \\(3^2 \\cdot 7\\) and \\(270\\) into \\(3^3 \\cdot 2 \\cdot 5\\) for a prime factorization of \\(2^3 \\cdot 3^5 \\cdot 5 \\cdot 7 \\cdot 17^2\\). Every even factor must have a factor of \\(2, 4\\) or \\(8\\), and
        each odd factor must be able to be multipled by \\(2, 4, \\) or \\(8\\), so the sum ratio is \\(1:2+4+8=1:14\\)`,
        answer: "\\(C) 1:14\\)",
        topic: "prime factorization",    
        hint: "What is the prime factorization of \\(N\\)? What is the prime factorization of the factors of \\(N\\)? For each odd factor, what and how many even factors must there be?",
        step: "Find the prime factorization of \\(N\\)"
    },
    {
        title: `AMC 10B 2021 Spring Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        text: "Let \\(n\\) be a positive integer and \\(d\\) be a digit such that the value of the numeral \\(32d\\) in base \\(n\\) equals \\(263\\), and the value of the numeral \\(324\\) in base \\(n\\) equals the value of the numeral  \\(11d1\\) in base six. What is \\(n+d\\)",
        used: false,
        difficulty: 3,
rating: 1200,
        solution: `<b></b><p>Recall that when we want to change a number in base \\(x\\) into base \\(10\\), we multiply the number in each digits place to \\(x\\) to the whatever-th place power (eg 2 for 100, 3 for a thousand). Thus, \\(32d\\), a base \\(n\\) number, is equal to \\(3n^2+2n+d=263\\). The second fact tell us that \\(3n^2+2n+4=216+36+6d+1\\). We solve for \\(d\\) and \\(n\\), or if we can, \\(n+d\\) directly</p>
        $$
        3n^2+2n+d=263
        $$
        $$
        3n^2+2n+4=216+36+6d+1
        $$
        $$
        3n^2+2n=263-d
        $$
        $$
        3n^2+2n=249+6d
        $$
        $$
        263-d=249+6d
        $$
        $$
        14=7d
        $$
        $$
        d=2
        $$
        <p>Substitute back in</b>
        $$
        3n^2+2n+2=263
        $$
        $$
        3n^2+2n-261=0
        $$
        <p>Quadratic formula for \\(n=9\\) with \\(n+d=9+2=11\\)</p>
        `,
        answer: '11',
        topic: 'bases',
        hint: "How do you convert base \\(n\\) numbers to base \\(10\\)?",
        step: "Write that \\(3n^2+2n+d=263\\) and \\(3n^2+2n+4=6^3+6^2+6d+1\\)"
    },
    {
        title: `AMC 10B 2021 Spring Problem 16 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `Call a positive integer an uphill integer if every digit is strictly greater than the previous digit. For example, \\(1357\\), \\(89\\) and \\(5\\) are all uphill integers, but \\(32\\), \\(1240\\) and \\(466\\), are not. How many uphill integers are divisble by \\(15\\)`,
        solution: `<b>6</b><p>First off, we know it must end with a \\(5\\) because it needs ot end in \\(5\\) or \\(0\\) to be divisible by \\(15\\) and uphill integers can't end in \\(0\\)</p>
        <p>Next, we know that the digits need to sum to a number divisible by \\(3\\). We compute with using casework by the number of digits</p>
        <p>Case 1: \\(15\\) and \\(45\\) work. Notice we needed to get a number that was congruent to \\(1\\) modulo \\(3\\)</p>
        <p>Case 2: (3 digits) \\(135), \\(345\\). Since we need numbers that sum to \\(1\\) modulo \\(3\\), we know that one of the numbers must be \\(3\\)</p>
        <p>Case 3: (4 digits)) \\(1245\\),  by the same logic above, essentially but we can't use \\(3\\) (like in Case 1)</p>
        <p>Case 4: (5 digits) \\(12345\\) is the only uphill 5 digit number and it works, so we have \\(6\\) total that fit the criteria `,
        topic: 'casework',
        answer: '6',
        hint: "How can you split this into cases?",
        step: "Divide into cases by the number of digits"
    },
    {
        title: `AMC 10B 2021 Spring Problem 17 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `Ravon, Oscar, Aditi, Tyrone, and Kim play a card game. Each persion is given \\(2\\) cards out of a set of cards numbered \\(1, 2, 3, ..., 10\\). The score of a player is the sum of the numbers of their cards. The 
        scores of the players are as follows: Ravon-\\(11\\), Oscar-\\(4\\), Aditi-\\(7\\), Tyrone-\\(16\\), Kim-\\(17\\). Which of the following statements is true?`,
        type: 'mc',
        choices: ['\\(A) \\textup{Ravon was given card } 3\\)', '\\(B) \\textup{Aditi was given card } 3\\)', '\\(C) \\textup{Ravon was given card } 4\\)', '\\(D) \\textup{Aditi was given card } 4\\)', '\\(A) \\textup{Tyrone was given card } 7\\)'],
        solution: `<b>Ravon was given card \\(4\\)</b><p>We calculate each answer choice individually</p>
        <p>A: Ravon must have \\(8\\) then. Oscar has no other choices for a number, because he has to have \\(3\\) and \\(1\\). This makes B impossible too</p>
        <p>C: Ravon must also have \\(7\\). This means that Kim must have \\(8\\) and \\(9\\). Tyrone has \\(6\\) and \\(10\\). We get that Oscar has \\(3\\) and \\(1\\) so Aditi has \\(2\\) and \\(5\\). This checks out</p>`,
        ansewr: '\\(C) \\textup{Ravon was given card} 4\\)',
        topic: "casework",
        hint: "What can you deduce based on each answer choice?",
        step: "Follow the logic for each option"
    },
    {
        title: `AMC 10A 2021 Fall Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: "The six-digit number \\(20210A\\) is prime for only one digit \\(A\\). What is \\(A\\)?",
        type: 'fr',
        solution: `<b>9</b><p>Obviously, we know the answer can't end in an even number because then it would be divisible by \\(2\\)</p>
        <p>We also know that the sum of digits cannot be divisible by \\(3\\). As it stands, the sum of the digits are \\(2+0+2+1+0=5\\). We need to cross out any
        numbers that are congruent to \\(1\\) modulo \\(3\\), so that takes out \\(1\\) and \\(7\\). That brings it down to \\(3\\) and \\(9\\).</p>
        <p>We then try both cases and divide by prime numbers. Starting with \\(7\\). Neither \\(202103\\) or \\(202109\\) work. Next, \\(11\\). \\(202103\\) is, so we know that 
        our answer is \\(9\\)`,
        answer: '9',
        topic: 'logic',
        hint: "What divisibility rules do you know?",
        step: "Use every divisibility you know to eliminate as many values as possible"
    },
    {
        title: `AMC 10A 2021 Fall Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `A two-digit positive integer is said to be \\(cuddly\\) if it is equal to the sum of its nonzero tens digit and the square of its units digit. How many two-digit positive integers are cuddly?`,
        solution: `<b>1</b><p>We take the definition we are given and rewrite it into an equation. Call \\(x\\) the tens digit and \\(y\\) the units digit. We have that our number, that has to be \\(cuddly\\) is equal to \\(10x+y\\) and that it must be equal to \\(x+y^2\\) so we write \\(10x+y=x+y^2\\) or
        \\(9x=y^2-y\\). We then proceed to try out values of \\(y\\) between \\(0\\) and \\(9\\)</p>
        <p>\\(0\\): \\(x\\) must be equal to \\(0\\) so this doesn't work</p>
        <p>\\(1\\): \\(9x=1-1=0\\) so once again \\(x=0\\). This won't satisfy the two digit rule</p>
        <p>\\(2\\): \\(9x=4-2=2\\) so \\(x=\\frac{2}{9}\\). Obviously, \\(\\frac{2}{9}\\) cannot be a digit. This isn't possible</p>
        <p>\\(3\\): \\(9x=9-3=6\\) once again, not an integer solution for \\(x\\)</p>
        <p>\\(4\\): \\(9x=16-4=12\\) so still no integer</p>
        <p>\\(5\\): \\(9x=25-5\\) same issue</p>
        <p>\\(6\\): \\(9x=36-6\\) same issue</p>
        <p>\\(7\\): \\(9x=49-7\\)</p>
        <p>\\(8\\): \\(9x=64-8=56\\)</p>
        <p>\\(9\\): \\(9x=81-9\\) so \\(x=8\\)</p>
        <p>There is \\(1\\) solution`,
        answer: '1',
        topic: 'algebraic manipulation',
        hint: "What equation can you use to model this? How can you split this into cases?",
        step: "With tens digit \\(x\\) and unit digits \\(y\\), use \\(10x+y=x+y^2\\)"
    },
    {
       title: `AMC 10A 2021 Fall Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
       used: false,
       difficulty: 3,
rating: 1200,
       text: `The base-nine representaiton of the number \\(N\\) is  \\(27,006,000,052_{nine}\\). What is the remainder when \\(N\\) is divided by \\(5\\)?`,
       solution: `<b>3</b><p>Brute forcing this is not an option, because we'd be calculating \\(9\\) to the \\(10\\)th power. Notice that the remainder when divided by \\(5\\) only depends on the last digit so we don't have to calculate that much. We know that to convert\\(N\\) back into base \\(10\\) we follow essentially \\(2\\cdot9^10 + 7 \\cdot 9^9\\) etc. However,
       even if we only focus on the units digit that is annoying to calculate \\(9\\) to that many powers. However, when we multiply, we only need to find the units digits of the two numbers we multiply to find the units digit of the product. And luckily, a lot of exponents follow patterns when it comes to units digits. Let's try it with \\(9\\) and make a conjecture:</p>
       $$
       9^0=1
       $$
       $$
       9^1=9
       $$
       $$
       9^2=81
       $$
       $$
       9^3=729
       $$
       <p>The units digits alternate between \\(1\\) and \\(9\\). Since there are so many zeroes in the base \\(9\\) representation, that also makes things easier. We find the sum \\(2+5+6+3+2=18\\) which is congruent to \\(3\\) modulo \\(5\\)`,
       answer: '3',
       topic: 'bases',
       hint: "Which digit is remainder modulo \\(5\\) dependent on?",
       step: "Since you only need to calculate the units digit, find a pattern for the units digit of powers of \\(9\\)"
    },
    {
        title: `AMC 10A Fall 2021 Problem 23 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `For each positive integer \\(n\\), let \\(f_{1}(n)\\) be twice the number of positive integer divisors of \\(n\\), and for \\(j \\ge 2\\), let \\(f_{j}(n)=f_{1}(f_{j-1}(n))\\). For how many values of \\(n \\ge 50\\) is \\(f_{50}(n)=12\\)?`,
        solution: `<b>10</b><p>Let's first explain what this is saying. Essentially, for \\(f_{j}\\) you continuously use the function until you get down to \\(1\\). With \\(f_{50}\\) that looks like \\(f_{1}(f_{1}(f_{1}))\\) \\(50\\) times. Considering 
        how complex this is, there's probably a better way to solve it. </p>
        <p>That in mind, we try to figure out what we need for \\(f_{1}(n)=12\\) anyways. We need \\(6\\) positive integer divisors or a prime factorization that either looks like \\(x^5\\), or \\(x^2 \\cdot y\\). We can think of a few numbers that fit this:</p>
        <p>\\(12\\) which is \\(2^2 \\cdot 3\\)</p>
        <p>Now let's focus on \\(12\\). This is interesting because when you input it, it outputs \\(12\\) every time. Therefore, we know that \\(f_{50}(n)=12\\). Thus, any value that outputs \\(12\\) for \\(f_{1}(n)=12\\) will always output \\(12\\). We just need to find all the values that fit</[>
        <p>\\(32=2^5\\)</p>
        <p>\\(18=3^2 \\cdot 2)</p>
        <p>\\(20=2^2 \\cdot 5\\)</p>
        <p>\\(45=3^2 \\cdot 5\\)</p>
        <p>\\(50 = 5^2 \\cdot 2\\)</p>
        <p>\\(28 = 2^2 \\cdot 7\\)</p>
        <p>\\(44 = 2^2 \\cdot 11\\)</p>
        <p>We don't nescessarily know, however, that \\(f_{1}(n)\\) has to equal \\(12\\). If \\(f_{1}(n)\\) is equal to any other of those, it would also work out.</p>
        <p>Working our way up from the bottom we know that for \\(f_{1}=18\\), the prime factorization must be \\(x^8\\) or \\(x^2 \\cdot y^2\\). With prime factors, that gives us possible values of 
        \\(36\\) and only \\(36\\)</p>
        <p>Next is \\(20\\). This means that we need \\(x^9\\), or \\(x \\cdot y^4\\). This is possible with \\(48\\).</p>
        <p>Next is \\(28\\). This gives us \\(x^13\\) or \\(x \\cdot 2^7\\). None of these are possible,and thus no values of \\(f_{1}\\) above this are possible</p>
        <p>This gives us values \\(12, 18, 20, 28, 32, 40, 44, 45, 48, 50\\) which is \\(10\\) potential values. `,
        answer: '10',
        topic: 'prime factorization',
        hint: "What this is saying is that for \\(f_{j}\\), you continue using the function until you get down to \\(1\\) factor (a prime number) For \\(f_{50}(n)=12\\), that means \\(f_{1}(n)=12\\), or a value of \\(n\\) where there are \\(6\\) positve integer divisors",
        step: "Find values that have \\(6\\) positive integer divisors"
    },
    {
        title: `AMC 10B Fall 2021 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `The expression \\(\\frac{2021}{2020}-\\frac{2020}{2021}\\) is equal to the fraction \\(\\frac{p}{q}\\) in which \\(p\\) and \\(q\\) are positive integers whose greatest common divisor is \\(1\\). What is \\(p\\)?`,
        solution: `<b>4041</b><p>We know that adjacent, or consecutive, numbers are always relatively prime. Thus, we don't really have to worry about simplifying. We just have to find the numerator. You could probalby brute force this if you really wanted to, but let's be sensible about it. For \\(x=2020\\) we have \\(\\frac{x+1}{x} - \\frac{x}{x+1}\\) which ends up as \\(\\frac{(x+1)(-x-1) -x^2}{x(x+1)}\\). Substitute back
        for numerator of \\(4041\\)`,
        answer: '4041',
        topic: 'algebraic manipulation',
        hint: "How can you simplify this with a variable expression? What do we know about adjacent numbers and relative primes?",
        step: "For \\(x=2020\\) we have \\(\\frac{x+1}{x} - \\frac{x}{x+1}\\) which ends up as \\(\\frac{(x+1)(-x-1) -x^2}{x(x+1)}\\)"
    },
    {
        title: `AMC 10B Fall 2021 Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `Let \\(n=8^2022\\). Which of the following is equal to \\(\\frac{n}{4}\\)?`,
        type: 'mc',
        choices: ['\\(A) 4^1010\\)', '\\(B) 2^2022\\)', '\\(C) 8^2018\\)', '\\(D) 4^3031\\)', '\\(E) 4^3032\\)'],
        solution: `<b></b><p>We can simplify this if we write the numerator and denominator as exponents with the same base. We know that \\(8=2^3\\) so \\(8^2022=2^6066\\). We also know that \\(4=2^2\\) so we are looking for \\(\\frac{2^6066}{2^2}=2^6064\\). We can 
        rewrite this as \\(4^3032\\)`,
        answer: '\\(E) 4^3032\\)',
        topic: 'exponents',
        hint: "How can you simplify the base?",
        step: "Rewrite both in base \\(2\\)"
    },
    {
        title: `AMC 10B Fall 2021 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `The least positive integer with exactly \\(2021\\) distinct positive divisors can be written in the form of \\(m \\cdot 6^k\\), where \\(m\\) and \\(k\\) are integers and \\(6\\) is not a divisor of \\(m\\). What is \\(m+k\\)?`,
        solution: `<b>58</b><p>We know that \\(6^k\\) can be written as \\(2^k \\cdot 3^k\\). We also know that the number of divisors a number has is equal to the product of \\(1\\) plus the powers in its prime facotrization. Thus, \\(2021 = 2 \\cdot (k+1)^2\\), but that's not possible because the
        powers have to be integers and \\(2021\\) is odd. That is, unless \\(m\\) is not prime. We now know for sure that \\(m\\) cannot be prime OR must be a facotr of \\(6\\). Returning to our way of finding the number of factors, we note that \\(2021=43 \\cdot 47\\) which we can find by using \\(45^2\\) and going for closer values. We know that the prime factorization must be \\(2^46 \\cdot 3^42\\) or \\(2^4 \\cdot 6^42\\) for \\(m=16\\) and \\(k=42\\) and an answer of \\(58\\) `,
        answer: '58',
        topic: 'prime factorization',
        hint: "How do you find the number of positive divisors of a number using the prime factorization?",
        step: "Rewrite the prime factorization as \\(m \\cdot 2^k \\cdot 3^k\\)"
    },
    {
        title: `AMC 10B Fall 2021 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Call a fraction \\(\\frac{a}{b}\\), not nescessarily in simplest form, special if \\(a\\) and \\(b\\) are positive integers whose sum is \\(15\\). How many distinct integers can be written as the sum of two, not nescessarily different, special fractions?`,
        solution: `<b>11</b><p>First find all the special fractions</p>
        $$
        \\frac{1}{14},\\frac{2}{13},\\frac{3}{12},\\frac{4}{11},\\frac{5}{10},\\frac{6}{9},\\frac{7}{8},\\frac{8}{7},\\frac{9}{6},\\frac{10}{5},\\frac{11}{4},\\frac{12}{3},\\frac{13}{2},\\frac{14}{1}
        $$
        <p>We can write this in simplest form and then focus on only numbers with the same denominator</p>
        $$
        \\frac{1}{14},\\frac{2}{13}.\\frac{1}{4},\\frac{4}{11},\\frac{1}{2},\\frac{2}{3},\\frac{7}{8},\\frac{8}{7},\\frac{3}{2},2,\\frac{11}{4},4,\\frac{13}{2},14
        $$
        <p>First whole numbers. There are \\(3\\) of these, \\(2, 4, 14\\) for possible values, \\(4,6,16,8,18\\)</p>
        <p>Next is halves: \\(\\frac{1}{2}, \\frac{3}{2}, \\frac{13}{2}\\) for values \\(1, 2, 7, 3, 8, 13\\). The \\(8\\) overlaps so we knoly have \\(11\\) values</p>
        <p>Thirds don't repeat. As a matter of fact, no other values repeat except for quarters: \\(\\frac{1}{4}, \\frac{11}{4}\\) which can only be \\(3\\). not an original solution. There are \\(11\\) solutions`,
        answer: '11',
        topic: 'casework',
        hint: "How can you divide the total special fractions into groups and use casework?",
        step: "Find all special fractions: \\(\\frac{1}{14},\\frac{2}{13},\\frac{3}{12},\\frac{4}{11},\\frac{5}{10},\\frac{6}{9},\\frac{7}{8},\\frac{8}{7},\\frac{9}{6},\\frac{10}{5},\\frac{11}{4},\\frac{12}{3},\\frac{13}{2},\\frac{14}{1}\\)"
    },
    {
        title: `AMC 10B 2021 Fall Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficutly: 2,
        text: `The greatest prime number that is a divisor of \\(16384\\) is \\(2\\) because \\(16384=2^14\\). What is the sum of the digits of the greatest prime number that is a divisor of \\(16383\\)?`,
        solution: `<b></b><p>\\(16383=16384-1=2^14-1\\) which we recognize via difference of squares to be \\((2^7+1)(2^7-1)\\). We compute these seperately. \\(2^7=128\\) so we have \\(129\\) and \\(127\\). The latter is composite, being able to be factored down into \\(3 \\cdot 43\\), but the other is prime. So we have \\(1+2+7=10\\)</p>
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>If it looks like a trick question, it is. It is rare for the AMC 10 to given extraneous information or reqiure you to know the prime factorization of \\(16,383\\). Just by the nature of the question, be suspicious and asume there is a clever way to take the prime factorizaiton that isn't just factor trees</p>`,
        topic: 'prime factorization',
        answer: 10,
        hint: "Where does the difference of squares play in in the base \\(2\\) representation of \\(16384\\)?",
        step: "Rewrite \\(16383\\) as \\(16384-1=2^14-1\\) and use prime factorization"
    },
    {
        title: `AMC 10B 2021 Fall Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Forty slips of paper numbered \\(1\\) to \\(40\\) are placed in a hat. Alice and Bob each draw one number from the hat without replacement, keeping their numbers hidden from each other.
        Alice says "I can't tell who has the larger number." Then Bob says, "I know who has the larger number." Alice says, "You do?" Is your number prime?" Bob replies, "Yes." Alice says, "In that case, if I multiply your number by \\(100\\) and add my number, the result is a perfect square," What is the sum of the two numbers drawn from the hat?`,
        solution: `<b>27</b><p>Let's break this down individually:</p>
        <p>By Alice's first statement, we know that she does NOT have either \\(1\\) or \\(40\\), because she would know if she had one of those</p>
        <p>Since Bob knows, we know he MUST have \\(1, 40, 2\\) or \\(39\\). Since he now knows that Alice doesn;t have \\(1\\) or \\(40\\), he could have one of the latter \\(2\\) and discount \\(1\\) or \\(40\\)</p>
        <p>Bob mentions that his number is prime. The only prime number in the list was \\(2\\). Thus, he has \\(2\\).</p>
        <p>Alice multiplies \\(2 \\cdot 100\\) and adds \\(x\\) such that the result is a perfect square. The only perfect square between \\(201\\) and \\(240\\) is \\(225\\) so Alice has \\(25\\). The sum, then, is \\(27\\)`,
        answer: '27',
        topic: 'logic',
        hint: "What numbers can we eliminate or prove with each statement?",
        step: "Go step by step and eliminate or add values. For example, the first statement tells us Alice cannot have \\(1\\) or \\(40\\)"
    },
    {
        title: `AMC 10B 2021 Fall Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `Which of the following conditions is sufficient to guarantee that integers \\(x, y,\\) and \\(z\\) satisfy the equation \\(x(x-y)+y(y-z)+z(z-x)=1\\)?`,
        type: 'mc',
        choices: ['\\(A) x>y\\) and \\(y=z\\)', '\\(B) x=y-1\\) and \\(y=z-1\\)', '\\(C) x=z+1\\) and \\(y=x+1\\)', '\\(D) x=z\\) and \\(y-1=x\\)', '\\(E) x+y+z=1\\)'],
        solution: `<b>\\(x=z\\) and \\(y-1=x\\)</b><p>Let's compute this for each option</p>
        <h3>A</h3>
        <p>We know that the first term is going to be some positive value. We know the second term is going to be \\(0\\) and the last term is going to be some negative value. By substitution we have \\(x^2-xy+y^2-xy=1\\) which is the same as \\((x-y)^2\\) where \\(x>y\\). This isnt enough to gaurantee</p>
        <h3>B</h3>
        <p>\\((z-2)(-3)+(z-1)(-1)+z(z-2)=-3z+6-z+1+2z-2=-2z+5=1\\), which we can't guarauntee</p>
        <h3C</h3>
        <p>\\((z+1)(-1)+(z+2)(2)+z=1\\), once again, doesn't simplify perfectly</p>
        <h3>D</h3>
        <p>\\(z(-1)+z+1+=1\\) so this is nescessarily true</p>`,
        answer: '\\(D) x=z\\) and \\(y-1=x\\)',
        topic: 'algebraic manipulation',
        hint: "Solve each answer choive individually",
        step: "Go through each answer choice and see if it fits what we are given"
    },
    {
        title: `AMC 10B Fall 2021 Problem 19 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `Let \\(N\\) be a positive integer \\(7777...777\\) a \\(313\\)-digit number where each digit is a \\(7\\). Let \\(f(r)\\) be the leading digit of the \\(r\\)th root of \\(N\\). What is \\(f(2)+f(3)+f(4)+f(5)+f(6)\\)?`,
        solution: `<b>8</b><p>We can make a few basic rules. The first is that dividing by any power of \\(10\\) does not change the leading digit, because it just adds \\(0\\)s, which are insignificant. From this, we don't concern ourselves with the whole \\(313\\) digit thing and instead only focus on the leading digits of \\(7.777...\\) after a bunch of roots. We approximate that the sum ends up being
        \\(2+1+1+3+1=8\\)</p>
        <h3> Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>While there is a hack that makes this easier, if I'm being completely honest, you don't need to solve this one. If you made it to \\(19\\), it's better to check your answers or scan for easier ones that you can solve rather than struggling with such a cumbersome problem like this. Strategy is just as important as mathematical skill when it comes to competitions like these!</p>`,
        answer: '8',
        topic: 'logic',
        hint: "Can you ignore the trailing \\(7\\)s?",
        step: "Do your best to approximate each value based on patterns of the roots of \\(7\\)"
    },
    {
        title: `AMC 10A 2022 Problem 7 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `The least common multiple of a positive integer \\(n\\) and \\(18\\)  is \\(180\\) and te greatest common divisor of \\(n\\) and \\(45\\) is \\(15\\). What is the sum of digits of \\(n\\)?`,
        solution: `<b>3</b><p>We know by the second rule that \\(n\\) must be \\(15\\) or \\(30\\). However, the \\(LCM\\) of \\(18\\) and \\(15\\) isn't \\(180\\), it's \\(90\\), so we know \\(n=30\\) for a sum of digits \\(3\\)`,
        answer: '3',
        topic: 'logic',
        hint: "What does each value limit our possible values of \\(n\\) to?",
        step: "Find the values that each statement limits our value of \\(n\\) to. For instance, for the first, \\(n=15\\) or \\(n=30\\)"
    },
    {
        title: `AMC 10A 2022 Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `A dataset consists of \\(6\\) (not distinct) positive integers \\(1,7,5,2,5\\) and \\(X\\). The average (arithmetic mean) of the \\(6\\) numbers equals a value in the data set. What is the sum of all possible values of \\(X\\)?`,
        solution: `<b>32</b><p>By the definition of a mean, we know that the sum of the numbers must be equal to \\(6 \\cdot 1 = 6, 6 \\cdot 7 = 42, 6 \\cdot 5 = 30\\) or \\(6 \\cdot 2 = 12\\). The current sum is \\(20\\) so \\(X\\) must be equal to \\(10\\) or \\(22\\) for a sum of \\(32\\)`,
        answer: '32',
        topic: 'averages',
        hint: "What must the sum of the numbers be?",
        step: "Find the some of the digits currently and what the sum of the digits needs to be"
    },
    {
        title: `AMC 10A 2022 Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `<p>On Halloween, \\(31\\) children walked into the principal's office asking for candy. They can be classified into three types: Some always lie; some always tell the truth; and some alternately lie and tell the truth. The alternaters arbitrarily choose their first response, either a lie or the truth, but each subsequent statement has the opposite truth value from its predecessor. The principal asked everyone the same three questions in this order.</p>
        <p>"Are you a truth-teller?" The principal gave a piece of candy to each of the $22$ children who answered yes.</p>
        <p>"Are you an alternater?" The principal gave a piece of candy to each of the $15$ children who answered yes.</p>
        <p>"Are you a liar?" The principal gave a piece of candy to each of the $9$ children who answered yes.</p>
        <p>How many pieces of candy did the principal give to the children who always tell the truth?`,
        solution: `<b></b><p>Let's go at this rule by rule</p>
        <p>For the first question, all truth tellers say yes, all liars say yes, and all alternaters who lied first say yes. The remaining \\(31-22=9\\) students are alternaters who said the truth</p>
        <p>For the second question, all the liars say yes and all the alternaters who lied to begin with say yes. There were \\(31-15=16\\) students who said no, but \\(9\\) of those are the alternaters from the first round. There are \\(16-9=7\\) truthtellers</p>
        <p>Since we are looking for students who always tell the truth, and truthtellers will only get candy once, they got \\(7\\) pieces of candy all together.</p>`,
        answer: '7',
        topic: 'logic',
        hint: "What can you tell by each rule?",
        step: "Look at each rule independently and see what you can figure out. For example, the first rule tellus us that \\(32-22=9\\) students are alternaters who said the truth the first time"
    },
    {
        title: `AMC 10A 2022 Problem 17 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `How many three-digit positive integers \\(abc\\) are there whose nonzero digits \\(a, b,\\) and \\(c\\) satisfy \\(0.\\overline{abc}=\\frac{1}{3}(0.\\overline{a}+0.\\overline{b}+0.\\overline{c})\\)?`,
        solution: `<b>13</b><p>We know that \\(0.\\overline{a}=\\frac{a}{9}\\). If you don't know why, try that out with any integer less than \\(10\\). Anyways, we rewrite RHS (right hand side) to \\(\\frac{abc}{27}\\). For the LHS
        we divide by \\(999\\) but make the numerator a 3 digit number \\(100a+10b+c\\) for \\(\\frac{100a+10b+c}{999}\\). We rewrite the entire equation as \\(100a+10b+c=37a+37b+37c\\) which we can solve for by solving for \\(a\\) and factoring out the GCD until we get \\(7a+3b+4c\\). Since \\((1,1,1)\\) is a solution, we 'scale that up' for every digit, whikch gives us 
        \\(9\\) solutions. But, there's still more. By trying different values for \\(a\\) and kinda just toying around with it, we get \\((4,8,1), (5,1,8), (5,9,2), (6,2,9)\\) which leaves us with \\(13\\) solutions`,
        answer: '13',
        topic: 'algebraic manipulation',
        hint: "What is \\(0.\\overline{a}\\) equal to as a fraction? What about \\(\\frac{0.\\overline{ab}\\), and so on?",
        step: "Rewrite the RHS using fractions (\\(\\frac{a}{9}=0.\\overline{a}\\)"
    },
    {
        title: `AMC 10A 2022 Problem 19 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `<p>Define L_{n} as the least common multiple of all the integers from \\(1\\) to \\(n\\) inclusive. There is a unique integer \\(h\\) such that</p>
        $$
        \\frac{1}{1}+\\frac{1}{2}+\\frac{1}{3}+...+\\frac{1}{17}=\\frac{h}{L_{17}}
        $$
        <p>What is the remainder when \\(h\\) is divided by \\(17\\)?</p>`,
        solution: `Let's first find what \\(L_{17}\\) is. We do this by finding the prime factorization of all the numbers, then taking the highest power of each prime factor:</p>
        $$
        1, 2^1, 3^1, 2^2, 5, 2 \\cdot 3, 7, 2^3, 3^2, 2 \\cdot 5, 11, 2^2 \\cdot 3, 13, 2 \\cdot 7, 3 \\cdot 5, 2^4, 17
        $$
        $$
        L_{17}=2^4 \\cdot 3 ^2 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13 \\cdot 17
        $$
        <p>Now, we don't actually have to compute all of this because, in the end, the crazy thing is we don't have to compute \\(h\\). Because each term is a whole number, we only need to look at the last term, since we know the other ones will eventually come out to some multiple of \\(17\\). Thus, we focus on the remainder of \\(\\frac{L_{17}}{17}\\) divided by \\(17\\). We take
        \\(17\\) out of the prime factorization, so we now just have \\(\\frac{2^4 \\cdot 3^2 \\cdot 5 \\cdot 7 \\cdot 11 \\cdot 13}{17}\\) which is honestly simple enough to brute force for an answer of  \\(5\\)</p>
        `,
        answer: '5',
        topic: 'prime factorization',
        hint: "What is \\(L_{17}\\)?",
        step: "Find \\(L_{17}\\) by finding the prime factorization of all positive integers \\(\\leq 17\\)"
    },
    {
        title: `AMC 10A 2022 Problem 24 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `How many strings of length \\(5\\) formed from the digits \\(0,1,2,3,4\\) are there such that for each \\(j \\in {1,2,3,4},\\) at least \\(j\\) of the digits are less than \\(j\\)?
        (For example \\(02214\\) satisfies this condition because it contains at least \\(1\\) digit less than \\(1\\), at least \\(2\\) digits less than \\(2\\) at least \\(3\\) digits less than \\(3\\), and at least \\(4\\) digits less than \\(4\\). The string \\(23404\\) does not satisfy the condition
        because it does not contain at least \\(2\\) digits less than \\(2\\).)`,
        type: 'mc',
        choices: ['\\(A) 500\\)', '\\(B) 625\\)', '\\(C) 1089\\)', '\\(D) 1199\\)', '\\(E) 1296\\)'],
        solution: `<b>1296</b><p>In my opinion, the easier way to solve this is to just split it up into cases to make it easier. The easiest way to do this is by the number of different digits:</p>
        <p>With only one digit, we can have \\(00000\\)</p>
        <p>With two digits, we can have \\(01111\\), \\(00111\\), \\(00111\\), \\(01111\\), \\(00002\\), \\(00022\\), \\(00222\\), \\(00003\\), \\(00033\\), \\(00004\\). BUT the order does count. With \\(4\\) \\(0'\\)s, the alternate digit can go \\(5\\) places and, so there are \\(4 \\cdot 5\\) for this. For three zeroes,
        there are \\(10\\) ways for each because the non-zero can be take up \\(\\frac{5!}{2!(5-3)!}=10\\). There are \\(30\\). Keep going with this logic to find \\(75\\) strings.</p>
        <p>With three digits, there must be a \\(0\\), and a \\(1\\) or a \\(2\\) or both, in addition to other digits. By the same logic as above, there are \\(500) ways to do this (this is the hardest to compute, and I don't want to write out all \\(20\\) ways to get the numbers)</p>
        <p>With \\(4\\) there are \\(600\\) strings (once again, kinda a pain to solve)</p>
        <p>\\(5\\) is just \\(01234\\) which can be written in \\(5!=120\\) ways</p>
        <p>\\(1+75+500+600+120=1296\\)</p>`,
        answer: '\\(E) 1296\\)',
        topic: 'casework',
        hint: "How can you split this into cases?",
        step: "Split this into cases by the total number of digits (e.g. only \\(0\\)s, \\(0\\)s and one other, etc.)"
    },
    {
        title: `AMC 10B 2022 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `How many three-digit positive integers have an odd number of even digits?`,
        type: 'mc',
        choices: ['\\(A) 150\\)', '\\(B) 250\\)', '\\(C) 350\\)', '\\(D) 450\\)', '\\(E) 550\\)'],
        solution: `<b>450</b><p>What's tricky about this is that we're doing with \\(2\\) issues, getting an odd number of even digits, and the placement of those even digits. We break it up into cases:</p>
        <p><b>One even digit</b>There are \\(5\\) even digits and \\(5\\) odd digits.  When the leading digit is even, there are \\(4 \\cdot 5\\cdot 5 =100\\) because the first digit cannot be \\(0\\). For the other two, there are \\(5 \\cdot 5 \\cdot 5=125\\)</p>
        <p><b>Three even digits</b><p> (4 \\cdot 5\\cdot 5=100\\). We find \\(100+100+125+125=450\\)`,
        answer: '\\(D) 450\\)',
        topic: 'casework',
        hint: "How many even digits can there be, in total?",
        step: "Break this up into cases by the number of even digits, and the locations of those even digits (because some even digits cannot be in the hundreds place)"
    },
    {
        title: `AMC 10B 2022 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `How many of the first ten numbers of the sequence \\(121, 11211, 1112111,...\\) are prime numbers?`,
        type: 'mc',
        choices: ['\\(A) 0\\)', '\\(B) 1\\)', '\\(C) 2\\)', '\\(D) 3\\)', '\\(E) 4\\)'],
        solution: `<b>0</b><p>We can write each number as \\(110+11, 11100+111, 1111000+1111\\), respectively. We can factor all of these into \\(10^{n\\textup{th power}}+1 \\cdot\\)a number comprised of as many \\(1\\)s as \\(n\\). Since this holds true for all, there are always at least \\(2\\) factors and thus \\(0\\) primes`,
        answer: '\\(A) 0\\)',
        topic: 'factoring',
        hint: "How can you rewrite this and factor it?",
        step: "Rewrite as \\(110+11, 11100+111, 1111000+1111\\) or  \\(10^{n\\textup{th power}}+1 \\cdot\\)a number comprised of as many \\(1\\)s as \\(n\\)"
    },
    {
        title: `AMC 10B 2022 Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `<p>Consider the following \\(100\\) sets of \\(10\\) elements each:</p>
        $$
        {1,2,3,...,10},
        $$
        $$
        {11,12,13...,20}
        $$
        $$
        {21,22,23,...,30}
        $$
        $$
        {991,992,993,...1000}
        $$
        <p>How many of these sets contain exactly two multiples of \\(7\\)?</p>
        `,
        solution: `<b>42</b><p>Let's look at a few multiples of \\(7\\) and see if we can discern a pattern:</p>
        $$
        7, 14, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 112, 119, 126, 133, 140 ...
        $$
        <p>We see that the pattern of \\(7\\)s in each set goes \\(1,1,1,1,2,1,1,2,1,2,1,2,1,1,1,2\\).Disregarding the first five, we see a pattern of sets of \\(7\\) so we calculate \\(\\frac{100-5}{7} \\cdot 3 + 1=41\\) but then we also notice the modulo \\(4\\) gives us another one so we have \\(42\\)`,
        answer: '42',
        topic: 'patterns',
        hint: "What pattern do you see in the number of \\(7\\)s in each?",
        step: "Using the numbers \\(1-100\\) what pattern can you find in the number of \\(7\\)s in a set"
    },
    {
        title: `AMC 10B 2022 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Camila writes down five positive integers. The unique mode of these integers is \\(2\\) greater than their median, and the median is \\(2\\) greater than their arithmetic mean. What is the least possible value for the mode?`,
        solution: `<b></b><p>Let's call our values \\(a, b, c, d, e\\). We know one value must happen at least more than once, because there is a unique mode. Call \\(e\\) and \\(d\\) the mode values and \\(c\\) the median. We have that \\(\\frac{a+b+c+2d}{5}+2=c=d-4\\). We then use the answer choices from here</p>
        <p>If the mode is \\(5\\) then \\(c\\) must be equal to \\(3\\) and the mean is \\(1\\) which isn't possible</p>
        <p>If the mode is \\(7\\) then \\(c=5\\), the mean is \\(3\\) so the values sum to a negative value, also not possible</p>
        <p>If the mode is \\(9\\) then \\(c=7\\), the mean is \\(5\\), still not possible</p>
        <p>If the mode is \\(11\\) then \\(c=9\\), the mean is \\(7\\) with the remaining values summing to \\(4\\). This is possible. We have our answer is \\(11\\)`,
        type: 'mc',
        choices: ['\\(A) 5\\)', '\\(B) 7\\)', '\\(C) 9\\)', '\\(D) 11\\)', '\\(E) 13\\)'],
        answer: '\\(D) 11\\)',
        topic: 'averages',
        hint: "Use the answer choices",
        step: "Divide into cases for the \\(5\\) answer choices and work to see which one works"
    },
    {
        title: `AMC 10B 2022 Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `All the high schools in a large school district are involved in a fundraiser selling T-shirts. Which of the choices below is logically equivalent to the statement "No school bigger than Euclid HS sold more T-shirts than Euclid HS"?`,
        type: 'mc',
        choices: ['\\(A)\\) All schools smaller than Euclid HS sold fewer T-shirt than Euclid HS', '\\(B)\\) No school that sold more T-shirts than Euclid HS is bigger than Euclid HS', '\\(C)\\) All schools bigger than Euclid HS sold fewer shirts T-shirts than Euclid HS', '\\(D)\\) All schools that sold fewer T-shirts than Euclid HS are smaller than Euclid HS.', '\\(E)\\) All schools smaller than Euclid HS sold more T-shirts than Euclid HS'],
        solution: `<b>No school that sold more T-shirts than Euclid HS is bigger than Euclid HS</b><p>This isn't really the sort of question I can explain. Effectively, go through each answe rand see whether or not they match</p>
        <p>The first one can't be right because the given info doesn't say anything about smaller schools</p>
        <p>The second hsa to be right because it's rephrasing it. If no school bigger than Euclid sold more than Euclid, that means any school that did sell more was smaller</p>`,
        answer: '\\(B)\\) No school that sold more T-shirts than Euclid HS is bigger than Euclid HS',
        topic: 'logic',
        hint: "Use logic =P",
        step: "Look through each answer choice and see if it makes sense"
    },
    {
        title: `AMC 10B 2022 Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `The positive difference between a pair of primes is equal to \\(2\\), and the positive difference between the cubes of the two primes is \\(31106\\). What is the sum of the digits of the least prime that is greater than those two primes?`,
        solution: `<b>16</b><p>We write the given info as the equations \\(x-y=2\\) and \\(x^3-y^3=31106\\). We solve by substitution</p>
        $$
        x=2+y
        $$
        $$
        y^3+6y^2+12y+8-y^3=31106
        $$
        $$
        (y-73)(y+71)=0
        $$
        <p>We have values \\(71, 73\\) with the next highest prime being \\(79\\) for \\(7+9=16\\)</p>`,
        answer: `16`,
        topic: 'algebraic manipulation',
        hint: "What equation can you write for this?",
        step: "Use the equations \\(x-y=2\\) and \\(x^3-y^3=31106\\)"
    },
    {
        title: `AMC 10B 2022 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `Suppose that \\(S\\) is a subset of \\({1,2,3,...,25}\\) such that the sum of any two (not nescessarily distinct) elements of \\(S\\) is never an element of \\(S\\) What is the maximum number of elements \\(S\\) may contain?`,
        solution: `<b>13</b><p>Essentially, we just need doubling the smallest value to be greater than the largest value, \\(25\\). This occurs when the smallest value is greater than \\(\\frac{25}{2}\\), so we have a smallest value \\(13\\) for \\(13\\) elements`,
        answer: '13',
        topic: 'logic',
        hint: "What does this say about the smallest value in \\(S\\)?",
        step: "Realize that doubling the smallest value must be greater than the largest value"
    },
    {
        title: `AMC 10B 2022 Problem 17 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `One of the following numbers is not divisible by any prime number less than \\(10\\). Which is it?`,
        choices: ['\\(A) 2^606 -1\\)', '\\(B) 2^606 +1\\)', '\\(C) 2^607 -1', '\\(D) 2^607 + 1\\)', `\\(E) 2^607 + 3&607\\)`],
        solution: `<b>2^607-1</b><p>This is a really difficult one, if I'm being honest. I doubt you would actually want/have time to do this in its entirety on a test</p>
        <p>There are a few solutions for this, but my favorite does not require any advanced knowledge. All you have to do is recall that exponents create patterns in the units digit. By finding the pattern for units digits in \\(2\\) (2,4,8,6\\), we know that the units digits are \\(3,5,7,8,5\\) (we find the pattern for \\(3\\) for the ast one), repsectively</p>
        <p>Right off the bat, we know that \\(B\\) and \\(E\\) are divisible by \\(5\\). We have \\(3\\) options left. Using modular arithmetic, we find \\(A\\) and \\(D\\) to be divisible by \\(3\\) which leaves us just with \\(C\\).`,
        answer: '\\(C) 2^607 -1',
        topic: 'modular arithmetic',
        hint: "What do we know about patterns in the units digit? How can we use this to eliminate choices?",
        step: "Eliminate two choices by finding what the units digit is"
    },
    {
        title: `AMC 10A 2023 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: "How many positive perfect squares less than \\(2023\\) are divisible by \\(5\\)?",
        solution: `<b>8</b><p>We know that for a perfect square to be divisible by \\(5\\), its root should be a multiple of \\(5\\). We just need to find what square of a number divisible of \\(5\\) is closest to and less than \\(2023\\). We know that 
        \\(2023\\) is closed to \\(2025=45^2\\), so we're looking at \\(44\\), which has \\(\\frac{44}{8}=8\\frac{4}{5}\\) \\(5's\\) so there are \\(8\\) total`,
        answer: '8',
        topic: "squares",
        hint: "We are looking for perfect squares whose square root is divisible by \\(5\\)",
        step: "Find the square root of a number close ot \\(2023\\). This will tell us where we need to start from"
    },
    {
        title: `AMC 10A 2023 Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `How many digits are in the base \\(10\\) representation of \\(8^5 \\cdot 5^1 \\cdot 15^5\\)?`,
        type: 'mc',
        choices: ['\\(A) 14\\)', '\\(B) 15\\)', '\\(C) 16\\)', '\\(D) 17\\)', '\\(E) 18\\)'],
        solution: `<b>18</b><p>We break this down into its prime factorization. We have \\(8^5=2^15, 15^5=3^5 \\cdot 5^5\\) for a total \\(2^15 \\cdot 5^15 \\cdot 3^5\\). We know there are \\(15\\) trailing zeroes, but we also need to find
        the number of digits in \\(3^5\\) which we can brute force to find \\(243\\) so there are \\(18\\) digits`,
        answer: '\\(E) 18\\)',
        topic: 'prime factorization',
        hint: "How can you express this in scientific form using the prime factorization",
        step: "Break down into prime factorization \\(2^15 \\cdot 5^15 \\cdot 3^5\\) and rearrange into scientific notation"
    },
    {
        title: `AMC 10A 2023 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `A digital display shows the current date as an \\(8\\)-digit integer consisting of a \\(4\\)-digit year, followed by a \\(2\\)idigit month, followed by a \\(2\\)-digit date within the month. For example, Arbor Day this year
        is displayed as \\(20230428\\). For how many dates in \\(2023\\) does each digit appear an even number of times in the \\(8\\)-digit display for that date?`,
        solution: `<b>9</b><p>The first digit must be \\(0\\) or \\(1\\). The first \\(4\\) digits are set. We know we need at least one more \\(3\\) and one more \\(0\\). If the month as a \\(0\\), we can have Jan \\(13\\)th, Jan \\(31\\)st, Feb \\(23\\)th, March \\(11\\)th, March \\(22\\)nd, Oct \\(13\\)th, Oct \\(31\\)st. For the \\(0\\) NOT in the month, we have November \\(3\\)rd and \\(30\\)th`,
        answer: '9',
        topic: "casework",
        hint: "What dates are set? How can you break this down into casework",
        step: "Realize that the first \\(4\\) numbers and the \\(5\\)th number are set (the \\(5\\)th number has two options). Break down into cases for wether the \\(5\\)th is \\(1\\) or \\(0\\)"
    },
    {
        title: `AMC 10A 2023 Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `<p>How many three-digit positive integers \\(N\\) satisfy the following properties?</p>
        <p>The number \\(N\\) is divisible by \\(7\\)</p>
        <p>The number formed by reversing the digits of \\(N\\) is divisible by \\(5\\)</p>`,
        solution: `<b>14</b><p>It's reverse must be divisible by \\(5\\), so we know it must end in \\(5\\) or \\(0\\) in the hundredths place. The latter is not possible, so we're looking for how many numbers between \\(500\\) and \\(599\\) are divisible by \\(7\\). We divide both of these and take the difference</p>
        $$
        \\frac{599}{7}=85
        $$
        $$
        \\frac{500}{7}=71
        $$
        $$
        85=71=14
        $$`,
        answer: '14',
        topic: 'logic',
        hint: "What number must be in the hundreds place?",
        step: "Because you know that the reverse must be divisible by \\(5\\), you know that it must be between \\(500\\) and \\(599\\). Find as many numbers divisible by \\(7\\) as you can"
    },
    {
        title: `AMC 10A 2023 Problem 16 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `In a table tennis tournament every participant played every other participant exactly once. Although there were twice as many right-handed players as left-handed players, the number of games won by left-handed players was \\(40%\\) more than the number of games won by right-handed players. (There were no ties and no ambidextrous players.) What is the total number of games played?`,
        solution: `<b>48</b>The total number of games \\(x\\) is equal to those won by the right-handed players plus those won by the left hand players \\(y+z\\), respectively. We know that \\(y=1.4z\\) so we have \\(x=2.4z\\). Since all values must be integers, we know that \\(x\\) must be divisible by \\(12\\). That gives us \\(36\\) and \\(48\\). Since each game is decided by choosing \\(2\\) people, we need \\(x\\) choose \\(2\\) to be 
        possible, which is only possible for \\(48\\)`,
        type: 'mc',
        choices: ['\\(A) 15\\)', '\\(B) 36\\)', '\\(C) 45\\)', '\\(D) 48\\)', '\\(E) 66\\)'],
        answer: '\\(D) 48\\)',
        topic: 'logic',
        hint: "What equations relate the wins by left hand players and wins by right handed players?",
        step: "Use the equations \\(x=y+z\\) and \\(y=1.4z\\) for \\(x=\\) total number of games, \\(y=\\) right hand wins"
    },
    {
        title: `AMC 10A 2023 Problem 23 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `<b></b><p>If the positive integer \\(c\\) has positive integer divisors \\(a\\) and \\(b\\) with \\(c=ab\\), then \\(a\\) and \\(b\\) are said to be \\(complementary\\) divisors of \\(c\\). Suppose that \\(N\\) is a positive integer that has one complementary pair of divisors that differ by \\(20\\) and another pair of complementary divisors that differ by \\(23\\). What is the sum of the digits of \\(N\\)?`,
        solution: `<b></b><p>We have that \\(N=x^2+20x\\) and \\(N=y^2+23y\\). We know by logic that \\(x>y\\) and \\(x+20 < y+23\\). We can descripte the relationship as either \\(x=y+1\\) or \\(x=y+2\\), because if we went any higher, it would defy the second rule we set. We create the following equations:</p>
        $$
        y^2+23y=y^2+22y+21
        $$
        $$
        y^2+23y=y^2+24y+44
        $$
        <p>Solve</p>
        $$
        0=-y+21
        $$
        $$
        y=21
        $$
        <p>Since the other one becomes negative, we have \\(y=21\\) and input that to find \\(x=22\\). We have \\(N=924\\) for sum of digits \\(15\\)`,
        answer: '15',
        topic: 'algebraic manipulation',
        hint: "What equations can you write to model the two situations? How can you reduce it down to only two variables?",
        step: "Use the equations \\(x(x+20)=N\\) and \\(y(y+23)=N\\) Notice that \\(x>y\\) but also \\(x+20<y+23\\)"
    },
    {
        title: `AMC 10B 2023 Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `What is the units digit of \\(2022^2023 + 2023^2022\\)?`,
        solution: `<b>7</b><p>We need to understand that unit digits are cyclic to best comprehend this. For \\(2\\), it goes \\(2,4,8,6,\\), so the units digit of \\(2022^2023=8\\). For \\(3\\) it's \\(3,9,7,1\\) so the unit digit is \\(9\\). Addint this gives \\(17\\). Thus, the units digit is \\(7\\)`,
        answer: '7',
        topic: 'powers',
        hint: "What property of units digits and exponents make it easy to predict the unit digt?",
        step: "Realize that since units digits are cyclic, you can use the cycles \\(2,4,8,6\\) and \\(3,9,7,1\\) to model the units digits of the two exponential values"
    },
    {
        title: `AMC 10B 2023 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 4,
rating: 1400,
        text:`You are playing a game. A \\(2 \\times 1\\) rectangle covers two adjacent squares (oriented either horizontally or vertically) of a\\(3\\times 3\\) grid of squares, but you are
         not told which two squares are covered. Your goal is to find at least one square that is covered by the rectangle. A "turn" consists of you guessing a square, after which you are told whether that square is covered by the hidden rectangle. What is the minimum number of turns you need to ensure 
        that at least one of your guessed squares is covered by the rectangle?`,
        solution: `<b>4</b><p>There are \\(\\frac{(3 \\times 3)!}{2!((3 \\times 3)-2)!}=36\\) ways to choose \\(2\\) squares, but, because we need them to be adjacent, thee are really only \\(12\\) (because there are \\(4\\) corner squares with \\(2\\) orientations and \\(4\\) non-corner edge squares with \\(1\\). </p>
        <p>The best first choice is the middle square, since that contains \\(4\\) rectangles. There are \\(8\\) left, right? Not exactly, because chosing the middle square requrires you to  We then pick a corner (or side) which contains \\(2\\). In the worst case scenario, where we don't get anything, we then proceed to the opposite corner. If, once gain that is empty, we nknow there's one in the final corner, so that gives us \\(4\\) tries`,
        answer: '4',
        topic: 'logic',
        hint: "What pattern do you need to gaurantee you pick one",
        step: "You need a checkerboard pattern to gaurantee that you pick something. What pattern requires the least number of squares",
    },
    {
        title: `AMC 10B 2023 Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `Suzzane went to the bank and withdrew \\($800\\). The teller gave her this amount of using \\($20\\) bills, \\($50\\) bills, and \\($100\\) bills, with at least one of each denominator. How many different collections of bills could Suzanne have recieved?`,
        solution: `<b>21</b><p>We write the equation as \\(2x+5y+10z=80\\) (we divide by \\(10\\)) and solve by casework using the smallest denominaton</p>
        <p>There is one \\(2\\). There's \\(78\\) left, which sin't nescessary unless we have more \\(2\\)s. We must have some multiple of \\(5\\) \\(2\\)s</p>
        <p>There are \\(5\\) \\(2\\)s. There's \\(70\\). We can do casework from this with different amounts of \\(10\\)s. There are \\(6\\) ways for this to happen</p>
        <p>There are \\(10\\) \\(2\\)s. There's \\(60\\) left so \\(5\\) ways</p>
        <p>There are \\(15\\) \\(2\\)s with \\(50\\) left and thus \\(4\\)</p>
        <p>And so on and so on until we reach \\(1\\). We then have \\(6+5+4+3+2+1=21\\)`,
        answer: '21',
        type: 'fr',
        topic: 'casework',
        hint: "What equation can you use to model the number of each type of bill (hint: you need to use a variable for the number of each type of bill)? The number of \\($20\\) bills must be divisible by what?",
        step: "Write the equation \\(20x+50y+100z=800\\) or \\(2x+5y+10z=80\\) for \\(x=\\) number of \\($20\\), \\(y=\\) number of \\($50\\) and \\(z=\\) number of \\($100\\). Notice that the number of \\($20\\) must be divisible by \\(5\\)"
    },
    {
        title: `AMC 10B 2023 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `What is the least positive integer \\(m\\) such that \\(m \\cdot 2! \\cdot 3! \\cdot 4! \\cdot 5! ... 16!\\) is a perfect square?`,
        solution: `<b></b><p>The sequence, which we'll call \\(S\\) is a perfect square when each number appears an even number of times in the prime factorization. We expand and find that \\(2!, 4!, 6!...16!\\) will all have odd exponents</p>
        <p>Thus, we just need \\(m \\cdot 2\\cdot 4 \\cdot 6 ... 16\\) to be a perfect square which we factorize and find \\(m=70\\) at lowest`,
        answer: '70',
        topic: 'prime factorization',
        hint: "What must be true in the prime factorization for it to be a perfect square?",
        step: "Find the prime factorization and find what numbers you need to multiply to make the powers even"
    },
    {
        title: `AMC 10B 2023 Problem 16 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `Define an \\(upno\\) to be a positive integer of \\(2\\) or more digits where the digits are strictly increasing moving left to right. Similarly, define a \\(downo\\) to be a positive integer of \\(2\\) or more digits where the digits are strictly decreasing moving eft to right. For instance, the number
        \\(258\\) is an upno and \\(8620\\) is a downo. Let \\(U\\)  equal to the total number of \\(upnos\\) and let \\(D\\) equal the total number of \\(downos\\). What is \\(|U-D|\\)`,
        solution: `<b>512</b><p>First off, notice that \\(upno\\)s can never include \\(0\\). There are \\(10\\) possible numbers for \\(downo\\)s and \\(9\\) for \\(upno\\)s. Each number can either be used as a part of the \\(upno/downo\\) or not, because there will always be a way to arrange it. Thus, we have \\(2^10\\) ways to make a \\(downo\\) and \\(2^9\\) ways to make an \\(upno\\)</p>
        <p>That being said, that solution overcounts, because it accounts for situations where there are no digits or only one digit. We thus need to subtract \\(11\\) from the downos and \\(10\\) from the upnos. We have\\(2^10-11-2^9+10\\)`,
        type:'mc',
        choices: ['\\(A) 512\\)', '\\(B) 10\\)', '\\(C) 0\\)', '\\(D) 9\\)', '\\(E) 511\\)'],
        topic: 'casework',
        hint: "What digit cannot appear in upnos? How can you use exponents to express the total number of upnos and downos?",
        step: "Since upnos can't have a \\(0\\), there are \\(9\\) digits that can be in an upno and \\(10\\) in downos. $Each digit is either included or not, so there are close to \\(2^9\\) and \\(2^10\\) total number of upnos and downos, respectively. Be careful not to overcount, though"
    },
    {
        title: `AMC 10B 2023 Problem 18 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `<p>Suppose \\(a, b,\\) and \\(c\\) are positive integers such that</p>
        $$
        \\frac{a}{14}+\\frac{b}{15}=\\frac{c}{210}
        $$
        <p>Which of the following statements are necessarily true?</p>
        <p>\\(I.\\) If \\(\\textup{gcd}(a,14)=1\\) or \\(\\textup{gcd}(b,15)=1\\) or both, then \\(\\textup{gcd}(c,210)=1\\)</p>
        <p>\\(II.\\) If \\(\\textup{gcd}(c,210)=1\\), then \\(\\textup{gcd}(a,14)=1\\) or \\(\\textup{gcd}(b,15)=1\\) or both</p>
        <p>\\(III.\\) \\(\\textup{gcd}(c,210)=1\\) if and only if \\(\\textup{gcd}(a,14)=\\textup{gcd}(b,15)=1\\)</p>`,
        type: 'mc',
        choices: ['\\(A) I, II, \\textup{and} III\\)', '\\(B) I \\textup{only}\\)', '\\(C) I \\textup{and} II \\textup{only}\\)', '\\(D) III \\textup{only}\\)', '\\(E) II \\textup{and} III \\textup{only}\\)'],
        solution: `<b>E</b><p>The first one isn't true. If you don't know why, try \\(\\frac{3}{2}+\\frac{2}{6}\\) which would simpify into something in the \\(6\\)th territory, because you can simplify one.</p>
        <p>The second one is true...I'm not really sure how to explain it but we can try induction and simple intuition + logic. I sorta just asummed, if I'm being honest. What it's really telling us is that if the RHS is in simplest form, 
        one of the LHS fractions must be in simplest form. This checks out because it means we can't simplify more</p>
        <p>Since there is no option for just \\(II\\\), we know that it must be \\(II\\) and \\(III\\)`,
        answer:'\\(E) II \\textup{and} III \\textup{only}\\)',
        topic: 'logic',
        hint: "Which one can you prove conclusively? What does that narrow our answer choices to? Realize that a \\(\\textup{gcd}\\) of \\(1\\) means it cannot be simplified",
        step: "Find counterexamples to disprove some of the statements"
    },
    {
        title: `AMC 10A 2024 Problem 3 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `What is the sum of the digits of the smallest prime that can be written as a sum of \\(5\\) distinct primes?`,
        solution: `<b>7</b><p>We know that the smallest prime would be the sum of the \\(5\\) smallest primes. However, the smallest prime is \\(2\\) which, when summed with \\(4\\) other odd numbers, would become even. Thus, we can't use \\(2\\). We try the next \\(5\\) smallest prime numbers \\(3, 5, 7, 11, 13\\). This sums to \\(39\\). Still not prime. We substitute \\(13\\) for \\(17\\) which gives us \\(43\\). We have that \\(4+3=7\\)`,
        answer: '7',
        topic: 'primes',
        hint: "What are the \\(5\\) smallest prime? What primes can we NOT use?",
        step: "Find the \\(6\\) smallest primes, we can't use \\(2\\) because it would make an even number"
    },
    {
        title: `AMC 10A 2024 Problem 4 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `The number \\(2024\\) is written as the sum of not nescessarily distinct two-digit numbers. What is the least number of two-digit numbers needed to write this sum?`,
        solution: `<b></b><p>We want to use as many large numbers as possible so that we use as little two digit numbers of possible. Obviously, the largest 2-digit number is \\(99\\) so divide \\(2024\\) by that: \\(\\frac{2024}{99} = 20\\) with remainder \\(44\\). There are thus \\(21\\) two digit numbers.`,
        answer: '21',
        topic: 'arithmetic',
        hint: "How can we minimize the number of two digit numbers we use?",
        step: "Add \\(99\\) as many times as possible"
    },
    {
        title: `AMC 10A 2024 Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `What is the least value of \\(n\\) such that \\(n!\\) is a multiple of \\(2024\\)?`,
        solution: `<b>23</b><p>We find the prime factorization of \\(2024\\) to be \\(2^3 \\cdot 11 \\cdot 23\\). The highest prime number is \\(23\\) in this, so it must be at least \\(23\\)`,
        answer: '23',
        topic: 'prime factorization',
        hint: "What is the prime factorization of \\(2024\\)?",
        step: "Find the prime factorization of \\(2024\\). The prime factorization of \\(n!\\) needs to include all of those factors"
    },
    {
        title: `AMC 10A 2024 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `The product of three integers is \\(60\\). What is the least possible positive sum of the three integers?`,
        solution: `<b>3</b><p>We know that the sum is minimized when factors are nearest to each other. However, we are not told that the factors have to be positive, just the sum. We still want to numbers to be close, however.</p>
        <p>We list the prime factorization as \\(2^2\\cdot 3 \\cdot 5\\). What we CAN do is have one be \\(1\\). Thus, we take the closest thing to the square root, \\(6\\) and \\(10\\) and make the \\(6\\) and \\(1\\) negative for a sum of \\(3\\) `,
        type: 'mc',
        choices: ['\\(A) 2\\)', '\\(B) 3\\)', '\\(C) 5\\)', '\\(D) 6\\)', '\\(E) 13\\)'],
        answer: '\\(B) 3\\)',
        topic: "optimization",
        hint: "The numbers do NOT have to be positive, and can be 1 =P",
        step: "Find the two factors closest to each other and use \\(1\\) as one of the factors"
    },
    {
        title: `AMC 10A 2024 Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Consider the following operation. Given a positive integer \\(n\\), if \\(n\\) is a multiple of \\(3\\), then you replace \\(n\\) by \\(\\frac{n}{3}\\). If \\(n\\) is not a multiple of \\(3\\), then you replace \\(n\\) by \\(n+10\\).
        For example, beginning with \\(n=4\\), this procedure gives\\(4\\rightarrow 14 \\rightarrow 24\\rightarrow 8 \\rightarrow 18 \\rightarrow 6\\rightarrow 2 \\rightarrow 12\\rightarrow ...\\). Suppose you start with \\(n=100\\). What value results if you perform this operation exactly \\(100\\) times `,
        solution: `<b></b><p>Let's try this a few times and see if we can make a conjecture. We have \\(100 \\rightarrow 110 \\rightarrow 120 \\rightarrow 40 \\rightarrow 50 \\rightarrow 60\\rightarrow 20 \\rightarrow 30\\). From here, the sequence repeats \\(20, 30,10\\). We use some modular arithmetic</p>
        We find the remainder of \\(\\frac{100-5}{3}\\) to be \\(2\\). Thus, we have the second term in the sequence \\(30\\)`,
        answer: '30',
        topic: 'modular arithmetic',
        hint: "Is there any pattern?",
        step: "Do it a few times and try to make a pattern =P"
    },
    {
        title: `AMC 10A 2024 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `Let \\(M\\) be the greatest integer such that both \\(M+1213\\) and \\(M+3773\\) are perfect squares. What is the units digit of \\(M\\)?`,
        solution:  `<b>8</b><p>Write equations \\(M+1213=x^2\\) and (M+3773=(x+y)^2\\). It's sort of trivial that \\(y\\) should be as small as possible</p>
        <p>If you don't get why, think of it this way: Imagine the square root parent function. That's similar to what's happening, if you call the enitre \\(LHS\\) \\(x\\) and the \\(RHS\\) \\(y\\).</p>
        <p>Recall that the slope of the graph diminishes over time. What that tells us is that as \\(x\\) becomes larger, the difference between the roots decreases</p>
        <p>Ok, back to the problem. We want to minimize the difference, \\(y\\) should equal \\(1\\), right? Not exactly. Since both constants are odd and \\(M\\) must be constant for both equations, they will either both be
        odd or even. If the root is only one away, then the square should be odd and even. Thus, we need to use \\(2\\) for \\(y\\) instead. We now have</p>
        $$
        M+1213=x^2
        $$
        $$
        M+3773=(x+2)^2
        $$
        $$
        3733-1213=x^2+4x+4-x^2
        $$
        $$
        2520=4x+4
        $$
        $$
        2516=4x
        $$
        $$
        x=629
        $$
        <p>We find the square of this to be \\(395641\\) and subtract \\(1213\\) for a units digit of \\(8\\)</p>`,
        answer: '8',
        topic: 'powers',
        hint: "How can you write an equation that represents this using \\(x^2\\) and \\((x+y)^2\\)?",
        step: "Write the equations \\(M+1213=x^2\\) and \\(M+3773=(x+y)^2\\)"
    },
    {
        title: `AMC 10A 2024 Problem 18 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `There are exactly \\(K\\) positive integers \\(5 \\le b \\le 2024\\) such that the base-\\(b\\) integer \\(2024_{b}\\) is divisible by \\(16\\)(where \\(16\\) is in base ten). What is the sum of the digits of \\(K\\)?`,
        solution: `<b>20</b><p>We convert \\(2024_{b}\\) to base \\(10\\) by creating the equation \\(2b^3+2b+4\\). We need \\(\\frac{2b^3+2b+4}{16}\\) to be a whole numberWe can simplify this down by writing
        \\(\\frac{b^3+b}{8}+\\frac{1}{4}\\) is a whole number. We thus have that \\(\\frac{b^3+b}{8}=\\frac{3}{4}+x\\) where \\(x\\) is effectively any whole number. This is similar to how you would solve a sine graph, if that makes sense</p>
        <p>We solve for every different value of \\(x\\)</p>
        <p>When \\(x=0\\) we have </p>
        $$
        b^3+b=24
        $$
        <p>We can't solve this, not as an integer, at least that works. Also, we need numbers within the range \\(5 \\le b \\le 2024\\)</p>
        <p>Since the question specifies integers, that's what we look for. Also, instead of just solving for a certain value, we make things a lot easier for us by just seeing if we can get \\(b^3+b+2\\) to be \\(0 \\textup{mod} 8\\)</p>
        <p>We start with \\(b=5\\) which gives \\(125+5+2=132\\) which leaves a remainder of \\(4\\)</p>
        <p>For \\(b=6\\) we have a reaminder of \\(0\\)</p>
        <p>For \\(b=7\\) we have\\(0\\)</p>
        <p>For \\(b=8\\) we have \\(2\\)</p>
        <p>Obviously, we don't want to keep going like this, because that'd take a bunch of time. What we do instead is find a pattern. Notice (if you keep going) that every for every \\(8\\) values, \\(3\\) are divisible by \\(8\\). We multiply \\(759\\) by \\(\\frac{3}{8}\\) but then subtract one for the 
        value of \\(b\\) that is out of range (\\(b=3\\)). We add \\(7+5+8=20\\)
        `,
        answer: '20',
        topic: 'bases',
        hint: "How can you create and simplify an expression for this?",
        step: "Use the expression \\(\\frac{2b^3+2b+4}{16}\\) and simplify it. You'll be looking for a certain value \\(\\textup{mod} 8\\)"
    },
    {
        title: `AMC 10A 2024 Problem 20 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `<p>Let \\(S\\) be a subset of \\({1,2,3,...,2024}\\) such that the following two conditions hold:</p>
        <p>If \\(x\\) and \\(y\\) are distinct elements of \\(S\\), then \\(|x-y|>2\\)</p>
        <p>If \\(x\\) and \\(y\\) are distinct odd elements of \\(S\\), then \\(|x-y|>6\\)</p>
        <p>What is the maximum possible number of elements in \\(S\\)?`,
        solution: `<b>608</b><p>The difference beween two odd numbers must be at least \\(8\\) because it has to be greater than \\(6\\) and the difference between odd numbers must be even.</p>
        We find that if we start at \\(1\\) we find \\(252\\) elements, with the highest being \\(2017\\). We now work on the 1st rule</p>
        <p>Let's start at \\(1\\). We can't have \\(2\\) or \\(3\\) so the next one must be \\(4\\). This gives us a total of \\(506\\) elements. However, it also leaves us with a lot of...empty space. What would happen if we made the difference between odd numbers bigger?</p>
        <p>Let's make the differnece \\(10\\). We have a highest value of \\(2021\\) for \\(203\\) total odd numbers. Adding the evens, we can do \\(4\\) and \\(8\\). This gives us \\(609\\), but remember to subtract one at the top that would go out of range</p>
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>The most obvious solution isn't always the right one. Notice how it was surprisingly simple for such a hard question, the first solution, I mean..? That's a sign that you can probably spend a few more minutes at the very least checking your answer and looking for contradictions`,
        type: 'mc',
        choices: ['\\(A) 436\\)', '\\(B) 506\\)', '\\(C) 608\\)', '\\(D) 654\\)', '\\(E) 675\\)'],
        answer: '\\(C) 608\\)',
        topic: 'optimization',
        hint: "What the rules tell us is that there is a minimum distance between all and odd numbers in the subset \\(S\\). It can also be higher though, that might be the key ;P",
        step: "Realize that the difference between even numbers must be at least \\(7\\) and find the possible values"
    },
    {
        title: `AMC 10A 2024 Problem 21 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `The numbers, in order, of each row and the numbers, in order, of each column of a \\(5 \\times 5\\) array of integers form an arithmetic progression of length \\(5\\). The numbers in positions \\((5,5), (2,4), (4,3),\\) and \\((3,1)\\) are \\(0,47,16,\\) and \\(12\\) respectively. What number 
        is in position \\((1,2)\\)?`,
        solution: `<b>29</b><p>Just off the bat, this is a really annoying problem to solve. There is quite a bit of algebra in it, and honestly, if I saw this on the AMC 10 I would skip it. That being said, here's how to solve it</p>
        <p>We start at \\(0\\) and label the values vertically and horizontally intersecting it. We call the vertical ones \\(x, 2x, 3x, 4x\\) and the horizontal ones \\(y, 2y, 3y, 4y\\). Now, we see that the relationship for the middle column is \\(2b-16\\). It then follows that the values in that column are \\(2b, 16, 32-2b, 48-4b,64-6b\\)</p>
        <p>We see a relationship in the second row, you add \\(4b\\). Thus, \\(3a=48+4b\\). We also note that the relationship for the third row is \\(10-b\\). Thus, \\(2a=52-4b\\). we solve the system of equations</p>
        $$
        3a+48+4b
        $$
        $$
        2a=52-4b
        $$
        $$
        5a=100
        $$
        $$
        a=20
        $$
        $$
        b=3
        $$
        <p>We have \\(4a=80\\) and \\(64-6b=46\\) for a difference of \\(17\\) so we have an answer of \\(46-17=29\\)`,
        answer: '29',
        topic: 'series',
        hint: "Use algebraic equations to model each square with different variables for the common differences",
        step: "You can label the vertical rows at the bottom \\(x,2x,3x,4x\\), the rightmost column  \\(y,2y,3y,4y\\), etc. with different variables and different labels for the different places"
    },
    {
        title: `AMC 10B 2024 Problem 1 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `In a long line of people arranged left to right, the \\(1013\\)th person from the left is also the \\(1010\\)th person from the right. How many people are in the line?`,
        solution: `<b>2022</b><p>This is easy, right? I mean you just add them? Nope, because the issue with that is you would count the person twice. What you do instead is add and subtract \\(1\\) for \\(1013+1010-1=2022\\)</p>
        <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>This is a prime example of how the AMC 10 can be tricky. Especially for earlier problems like these, be very careful not to lose easy points, especially given that you are penalized for wrong answers</p>`,
        topic: 'logic',
        type: 'mc',
        choices: ['\\(A) 2021\\)', '\\(B) 2022\\)', '\\(C) 2023\\)', '\\(D) 2024\\)', '\\(E) 2025\\)'],
        answer: '\\(D) 2024\\)',
        hint: "What is overcounted?",
        step: "Add and then account for overcounting"
    },
    {
        title: `AMC 10B 2024 Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `<p>In the following expression, Melanie changed some of the plus signs to minus signs:</p>
        $$
        1+3+5+7+...+97+99
        $$
        <p>When the new expression was evaluated, it was negative. What is the least number of plus signs that Melanie could've changed to minus signs?`,
        solution: `<b>15</b><p>We have the sum of the first \\(n\\) odd numbers to be \\(n^2\\) so the original equation sums to \\(2500\\). Obviously, we make all the highest numbers negative. To find the sum of the highest 
        odd numbers to be \\(2500-(50-x)^2\\) which must be greater than \\(1250\\). We solve</p>
        $$
        2500-(50-x)^2>1250
        $$
        $$
        2500-x^2+100x-2500 > 1250
        $$
        $$
        -x^2+100x>1250
        $$
        <p>We see that \\(15\\) is the least value of \\(x\\) that fits this</p>`,
        type: 'mc',
        choices: ['\\(A) 14\\)', '\\(B) 15\\)', '\\(C) 16\\)', '\\(D) 17\\)', '\\(E) 18\\)'],
        topic: 'inequalities',
        hint: "Use the formula \\(n^2\\) to find the total sum of odd numbers",
        step: "Use the equation \\(2500-(50-x)^2\\) to model the sum of the highest \\(n\\) odds. What does that have to be higher than?"
    },
    {
        title: `AMC 10B 2024 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `What is the remainder when \\(7^2024 + 7^2025 + 7^2026\\) is divided by \\(19\\)?`,
        solution: `<b>0</b><p>We factor out \\(7^2024\\) for \\(7^2024(1+7+49)\\) or \\(7^2024(57)\\). Since \\(57\\) is divisible by \\(19\\) (being \\(19 \\cdot 3\\)\\), we have a remainder of \\(0\\)`,
        topic: 'factoring',
        answer: '0',
        hint: "How can you factor this?",
        step: "Factor out \\(7^2024\\)"
    },
    {
       title: `AMC 10B 2024 Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
       used: false,
       difficulty: 2,
rating: 1000,
       text: `Let \\(N\\) be the product of all the positive integer divisors of \\(42\\). What is the units digit of \\(N\\)?`,
       solution: `<b>6</b><p>Through pure logic, we know that the product of all divisors of \\(42\\) will be some power of \\(42\\).</p>
       <p>The prime factorization of \\(42\\) is \\(2 \\cdot 3 \\cdot 7\\) for a total of \\(8\\) factors and \\(4\\) factor pairs. Thus, \\(42\\) is raised to the \\(4\\)th power. </p>
       <p>The units digit will follow a pattern, so we just find the pattern for \\(2\\) to be \\(2, 4, 8, 6\\). Thus, the units digit is \\(6\\)` ,
       answer: '6',
       topic: 'prime factorization',
       hint: "How can you find all of the prime factors of \\(48\\)",
       step: "Find the prime factorization and find how many factors there are through that"
    },
    {
        title: `AMC 10B 2024 Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `A group of \\(100\\) students from different countries meet at a mathematics competition. Each student speaks the same number of languages, and, for every pair of students \\(A\\) and \\(B\\), student \\(A\\)
        and \\(B\\), student \\(A\\) speaks some language that student \\(B\\) does not speak, and student \\(B\\) speaks some language that student \\(A\\) does not speak. What is the least possible total 
        number of languages spoken by all students?`,
        solution: `<b>9</b><p>What the question is asking is how many languages there need to be such that picking any random two students guarantees that they don't have the same combination of languages. We need for each student to have a unique combination of languages</p>
        <p>Using the answer choices, we go through them each and arduously find a number for which of \\(n\\) choosing \\(x\\) languages leads to over \\(100\\) possibilities. What that means is that there's more than \\(100\\) combinations of languages, thus meaning each student has their own individual one. We start with \\(9\\).</p>
        <p>Logic dictates that they can't all speak one language, or two. We try three which gives \\(\\frac{9!}{3!6!}=84\\). Next try \\(\\frac{9!}{4!5!}=126\\) This works so we have our answer to be \\(9\\)`,
        type: 'mc',
        choices: ['\\(A) 9\\)', '\\(B) 10\\)', '\\(C) 12\\)', '\\(D) 51\\)', '\\(E) 100\\)'],
        topic: 'combinations',
        hint: "There need to be over \\(100\\) combinations of languages",
        step: "Go through the different answers to find an option where \\(n\\) (the answer choice) choose \\(a\\) languages gives over \\(100\\) combinations"
    },
    {
        title: `AMC 10B 2024 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `A list of \\(9\\) real numbers consists of \\(1, 2.2, 3.2, 5.2, 6.2\\) and \\(7\\) as well as \\(x, y,\\) and \\(z\\) with \\(x \\le y \\le z\\). The range of the list is \\(7\\) and the mean and the median are both positive integers. how many ordered triples \\(x,y,z\\) are possible?`,
        solution: `<b>3</b><p>We either have \\(x=0\\) or \\(z=8\\) and that \\(y\\) must be the medain. The sum of all the numbers must be divisible by \\(9\\) in order for the mean to be a whole number. The current sum is \\(24.8\\) so the remaining numbers must sum to \\(2.2, 11.2, 20.2\\). \\(2.2\\) isn't possible unless we hvae a negative \\(x\\), which we can't without 
        disrupting the range. For \\(11.2\\), we know that the median \\(y\\) must be between \\(3.2\\) and \\(5.2\\) so it's either \\(4\\) or \\(5\\). The prior makes \\(x\\) and \\(z\\) which contradicts our previous statement but is still correct (lesson in oversimplifaction, not always the best) and the latter gives \\(0\\) and \\(6.2\\)</p>
        <p>For \\(20.2\\) we need as many high numbers as possible so we have \\(z=8\\). This leaves \\(12.2\\) left and we know that \\(y\\) must be an integer and the median. However, that's not possible. \\(y\\) must be greater so that we can "offset" the median. (gee I'm contradicting myself quite a bit) that gives a median of \\(x=6\\) for \\(y=6.2\\) and \\(3\\) possible answers`,
        type: 'mc',
        choices: ['\\(A) 1\\)', '\\(B) 2\\)', '\\(C) 3\\)', '\\(D) 4\\)', '\\(E) \\textup{infinitely many}\\)'],
        answer: '\\(C) 3\\)',
        topic: 'logic',
        hint: "What do the remaining numbers need to sum to? What must the median be?",
        step: "Focus on the different values that the sum can be and how to achieve those while keeping an integer median"
    },
    {
        title: `AMC 10B 2024 Problem 16 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `Jerry likes to play with numbers. One day, he wrote all the integers from \\(1\\) to \\(2024\\) on the whiteboard. Then he repeatedly chose four numbers on the whiteboard, erased them, and replaced them by either their sum or their product. (For example, Jerry's first step might have been to erase
        \\(1,2,3\\) and \\(5\\), and then write either \\(11\\) their sum, or \\(30\\) their product, on the whiteboard). After repeatedly performing this operation, Jerry noticed that all the remaining numbers on the whiteboard were odd. What is the maximum possible number of integers on the whiteboard at that time?
        `,
        solution: `<b>1010</b><p>We eliminate all answers except \\(1010\\) and \\(1013\\) right off the bat because we know that the number of remaining integers must be congruent modulo \\(3\\) to \\(2024\\). This is because we rmeove a net \\(3\\) integers each round, so that needs to stay constant</p>
        <p>Assuming Jerry uses the best strategy, he would remove \\(3\\) even integers and \\(1\\) odd and take the sum of them because that would sum to an odd number no matter what. There are \\(\\frac{2024}{2}=1012\\) even integers so eventually he hits a roadblock and is left with one even integer and \\(1012\\) odd integers (because for every odd integer he took away he added one). He then proceeds to get another odd integer by adding the even to \\(3\\) odds which removes \\(2\\0 but adds \\(1\\) for \\(1010\\)`,
        type: 'mc',
        choices: ['\\(A) 1010\\)', '\\(B) 1011\\)', '\\(C) 1012\\)', '\\(D) 1013\\)', '\\(E) 1014\\)'],
        answer: '\\(A) 1010\\)',
        topic: 'logic',
        hint: "What is Jerry's optimal strategy?",
        step:"Realize that Jerry's starting strategy should be to remove \\(3\\) even integers and \\(1\\) odd until he runs out of even integers"
    },
    {
        title: `AMC 10B 2024 Problem 18 <span class="material-symbols-outlined">
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
rating: 1600,
        text: "How many different remainders can result when the \\(100\\textup{th}\\) power of any integer is divided by \\(125\\)?",
        solution: `<b>2</b><p>Any integer can be written as \\(5x, 5x+1, 5x+2, 5x+3, 5x+4\\). When we raise these to the \\(100\\)th power, they will leave specific remainders. For \\(5x\\) it leaves \\(0\\) because the \\(5\\) effectively "handles" the \\(125\\). Not quite sure how else to explain it. We also notice that \\(5x+4 = 5(x+1)-1\\) and the same logic for \\(5x+3\\). \\(5x \\pm 1\\) or \\(2\\) give remainder of \\(1\\) (see link for more complex proof)</p>`,
        answer: '2',
        topic: 'factoring',
        hint: "How can you simplify the integers using \\(5x+n\\)?",
        step: "Realize that there are only \\(5\\) types of integers mod \\(5\\). Use this to calculate for \\(125\\)"
    },
    {
        title: `AMC 10B 2024 Problem 23 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `<p>The Fibonacci numbers are defined by \\(F_{1}=1, F_{2}=1,\\) and \\(F_{n}=F_{n-1}+F_{n-2}\\) for \\(n \\ge 3\\) What is</p>
        $$
        \\frac{F_{2}}{F_{1}}+\\frac{F_{4}}{F_{2}}+\\frac{F_{6}}{F_{3}}+...+\\frac{F_{20}}{F_10}}?
        $$`,
        solution: `<b>319</b><p>So...if you really wanted to, you could brute force this if nescessary. It sucks, yes, but if you run out of time, it's what you gotta do. It's also not that bad...when I saw this problem I thought it would go all the way up to \\(2024\\) so at least there's that</p>
        <p>Now the actual solving. We try our best to find a pattern. We compute the first few values to be \\(1\\), \\(3\\), \\(4\\), \\(7\\), \\(11\\)...This is familiar, right? That's because it is similar to the Fibbonaci sequence itself! We keep going to find the remaining values to be 
        \\(1, 3, 4, 7, 11, 18, 29, 47, 76, 123\\) which sum to \\(319\\). You could also find a few patterns here. For instance, you can write the conjecture that the next term is the sum of the last two values`,
        answer: '319',
        topic: 'patterns',
        hint: "What pattern do you notice? Look at the the two values before to find the next",
        step: "Compute the first few values and find the pattern"
    },
    {
        title: `AMC 10A 2025 Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `<p>Consider the sequence of positive integers</p>
        $$
        1,2,1,2,3,2,1,2,3,4,3,2,1,2,3,4,5,4,3,2,1,2,3,4,5,6,5,4,3,2,1,2,...
        $$
        <p>What is the \\(2025\\)th term in this sequence?`,
        solution: `<b>45</b>Let's try to find a pattern. The most obvious one pertains to \\(1\\)s because those appear the most. We have ones in positions \\(1,3,7,13,18\\). The difference between these are consecutively larger even numbers (\\(+2,+4,+6\\)). </p>
        <p>We know the sum of the first \\(n\\) even numbers is \\(n(n+1)\\) which we modify to be \\(n(n+1)+1\\) to fit our predicament. Keep in mind that we're calling the first \\(1\\) the \\(0\\)th. We now try to find the one nearest to \\(2025\\). We solve</p>
        $$
        n^2+n-1=2025
        $$
        <p>This won't yield a rational number, but we try \\(n=44\\) because we know \\(2025=45^2\\) so it must be close to there. That gives us \\(1981\\). We subtract \\(2025-1981\\) and get \\(44\\) but add \\(1\\) to account for the \\(1\\) at the start 
        `,
        type: 'mc',
        choices: ['\\(A) 5\\)', '\\(B) 15\\)', '\\(C) 16\\)', '\\(D) 44\\)', '\\(E) 45\\)'],
        answer: '\\(E) 45\\)',
        topic: 'patterns',
        hint: "Look at the pattern for the location of the \\(1\\)s",
step: "Realize that the location of the \\(1\\)s is increasing by increasing even numbers. We can use this to find how many sequences of `hills` there are, and then find the `remainder`"    },
    {
        title: `AMC 10A 2025 Problem 8 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `<p>Agnes writes the following four statements on a blank piece of paper</p>
        <p> - At least one of these statements is true</p>
        <p> - At least two of these statements are true</p>
        <p> - At least two of these statements are false</p>
        <p> - At least one of these statements is false</p>
        <p>Each statement is either true or false. How many false statements did Agnes write on the paper?`,
        solution: `<b>1</b><p>Let's work our way through each one</p>
        <p>If the first one is true, it fuffils itself. If it is false then everything else must also be false. Then, the last statement must be false and none of the statements can be false. That's a contradiction so the first one is true</p>
        <p>If the second one is true, both the first and second statements are fufilled. If it is false then everything else is false, and we reach the same issue as before</p>
        <p>If the third statement is true, then it creates a contradiction because we already have three true statements. The third statement is false</p>
        <p>The last one has to be true because we already proved one is false</p>
        <p>There is only one false statement</p>`,
        type: 'mc',
        choices: ['\\(A) 0\\)', '\\(B) 1\\)', '\\(C) 2\\)', '\\(D) 3\\)', '\\(E) 4\\)'],
        answer: `\\(B) 1\\)`,
        topic: 'logic',
        hint: "Follow the logic and see where it goes =P",
        step: "Work through the statements one by one and follow how it affects the truth statements of the others"
    },
    {
        title: `AMC 10A 2025 Problem 17 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `Let \\(N\\) be the unique positive integer such that dividng \\(273436\\) by \\(N\\) leaves a remainder of \\(16\\) and dividing \\(272760\\) by \\(N\\) leaves a remainder of \\(15\\). What is the tens digit of \\(N\\)?`,
        solution: `<b>4</b><p>We have that \\(x \\cdot N + 16 = 273436\\) and that \\(y \\cdot N + 15 = 272760\\). We can also rewrite this into
        \\(x \\cdot N = 273420\\) and \\(y \\cdot N = 272745\\). We effectively need the \\(GCF\\) of the two constants. </p>
        <p>We start with some prime factorization. We get \\(273420 = 2^2 \\times 3^2 \\times 5 \\times 7^2 \\times 31\\) and \\(272745=3^2 \\cdot 5 \\cdot 11 \\cdot 19 \\cdot 29\\) so we have an overlaping \\(3^2 \\times 5\\) which gives \\(45\\) for a tens digit of \\(4\\)</p>`,
        answer: '4',
        topic: `prime factorization`,
        hint: "How can you express this algebraicly? How can you find the GCF with prime factorizatoin?",
        step: "Use the equations \\(x \\cdot N + 16 = 273436\\) and that \\(y \\cdot N + 15 = 272760\\). Find the \\(GCF\\) after isolated the variables"
    },
    {
        title: `AMC 10A 2025 Problem 24 <span class="material-symbols-outlined">
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
        difficulty: 4,
rating: 1400,
        text: `Call a positive integer fair if no digit is used more than once, it has no \\(0\\)s and no digit is adjacent to two
        greater digits. For example, \\(196, 23\\) and \\(12463\\) are fair, but \\(1546, 320,\\) and \\(34321\\) are not. How many fair positive integers are there?`,
        type: 'mc',
        choices: ['\\(A) 511\\)', '\\(B) 2584\\)', '\\(C) 9841\\)', '\\(D) 17711\\)', '\\(E) 19682\\)'],
        solution: `<b>\\(9841\\)</b><p>What the restraint about not being adjacent to two greater numbers effectively tells us that the number has to be strictly ascending or descending. Call the highest number \\(n\\). For every digit where \\(x < n\\) \\(x\\) must be before, after, or not included. That gives \\(3^{n-1}\\). We 
        compute the sum of the arithmetic series for all values of \\(n\\) which gives \\(9841\\)`,
        answer: `\\(C) 9841\\)`,
        topic: 'series',
        hint: "With a highest value \\(n\\), how many options are there for another digit \\(x\\)?",
        step: "Because for highest digit value \\(n\\), each other digit can be ascending, descending, not included, there are \\(3^{n-1}\\) positions. Calculate this for all possible values of \\(n\\)"
    },
    {
        title: `AMC 10B 2021 Spring Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `The ages of Jonie's four cousins are distinct single-digit positive integers. Two of the cousin's
        ages multiplied together gives \\(24\\) while the other two multiply to \\(30\\). What is the sum of the ages of Jonie's four cousins?`,
        type: 'mc',
        choices: ['\\(A) 21\\)', '\\(B) 22\\)', '\\(C) 23\\)', '\\(D) 24\\)', '\\(E) 25\\)'],
        solution: `<b>22</b><p>The ones that multiply to \\(24\\) can either be \\(3, 8\\) or \\(6,4\\). The \\(30\\) must be \\(6,5\\), and since they are distinct, we have \\(3+8+5+6=22\\)`,
        answer: '\\(B) 22\\)',
        topic: 'logic',
        hint: "This is a diophantine equation, all values must be integers. What do we know then about the factors of \\(24\\)?",
        step: "Find the possible factors of \\(24\\)"
    }
]
const probabilityQ = [
    {
title: `AMC 10B 2021 Fall Problem 16 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
used: false,
difficulty: 3,
rating: 1200,
text: `Five balls are arranged around a circle. Chris chooses two adjacent balls at random and
interchanges them. Then Silva does the same, with her choice of adjacent balls to
 interchange being independent of Chris's. What is the expected number of balls that occupy
  their original positions after these two successive transpositions?`,
  type: 'mc',
  choices: ['\\(A) 1.6\\)', '\\(B) 1.8\\)', '\\(C) 2.0\\)', '\\(D) 2.2\\)', '\\(E) 2.4\\)'],
  solution: `<b>2.2</b><p>The first switch doesn't matter. We do casework. </p>
  <p>One case is that she switches them back ,we have \\(5\\). This is a \\(\\frac{1}{5}\\) chance so we have \\(1\\)</p>
  <p>Next is switching one that hasn't been swapper. Then we have \\(2\\). There are \\(2\\) ways for this to happen so \\(\\frac{4}{5}\\)</p>
  <p>Finally, two different ones. There are \\(2\\) ways for this to happen with \\(1\\) left for \\(\\frac{2}{5}\\). Adding these gives \\(2.2\\)`,
answer: '\\(D) 2.2\\)',
topic: 'expected value',
hint: "What are the three types of switches Silvia can make in relation to Chris's?",
step: "Split into cases based on how many of Chris's balls Silvia picks"
    },
    {
title: `AMC 10A 2025 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
used: false,
difficulty: 3,
rating: 1200,
text: `Six chairs are arranged around a round table. Two students and two teachers randomly select four of the chairs to
sit in. What is the probability that the two students will sit in two adjacent chairs and the two teachers will also sit in two adjacent chairs?`,
type: 'mc',
choices: ['\\(A) \\frac{1}{6}\\)', '\\(B) \\frac{1}{5}\\)', '\\(C) \\frac{2}{9}\\)', '\\(D) \\frac{3}{13}'],
solution: `<b>\\(frac{1}{5}\\)</b><p>The first student has \\(6\\) places they can sit in. The second has a \\(5\\), but only \\(2\\) of which fuffil the requirements of being adjacent. This would be \\(6 \\times 2\\). Of the remaining seats, we can't just do \\(4 \\cdot 2\\), because some seats that the teachers pick,
particularly the ones adjacent to students, cannot gurantee two adjacent seats next to them.If we were to draw this out, we would see that there are \\(3\\) pairs of adjacent seats, and we multiply this by \\(2\\), because the order in which the students sit there can switch.</p>
<p>There are \\(6 \\cdot 5 \\cdot 4 \\cdot 3=360\\) arrangements for them for a probability of \\(\\frac{12 \\cdot 6}{360}=\\frac{1}{5}\\)
<p>`,
answer: '\\(B) \\frac{1}{5}\\)',
topic: 'counting',
hint: "How can you find the number of ways for the teachers to sit without overcounting",
step: "Find the number of places where the students can sit (assuming students first) with \\(6 \\cdot 2\\) because the first student can sit in \\(6\\) places and has \\(2\\) seats adjacent to it."
    },
    {
title: `AMC 10A 2020 Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
used: false,
difficulty: 3,
rating: 1200,
text: `A frog sitting at the point \\((1,2)\\) begins a sequence of jumps, where each jump is parallel to one of the cordinate axes and has length \\(1\\), and the
direction of eacn jump (up, down, right, or left) is chosen independently at random. The sequence ends when the frog reaches a side of the square with vertices \\((0,0), (0,4), (4,4),\\) and \\((4,0)\\). 
What is the probability that the sequence of jumps ends on a vertical side of the square?`,
type: 'mc',
choices: ['\\(A) \\frac{1}{2}\\)', '\\(B) \\frac{5}{8}\\)', '\\(C) \\frac{2}{3}\\)', '\\(D) \\frac{3}{4}\\)', '\\(E) \\frac{7}{8}\\)',
],
topic: 'casework',
solution: `<b>\\(\\frac{5}{8}\\)</b><p>We do casework based on the first jump.</p>
<p>Jumping left gives us a vertical side already, so a \\(\\frac{1}{4}\\) chance</p>
<p>Jumping right gives us the center, so a \\(\\frac{1}{2} \\cdot \\frac{1}{4}=\\frac{1}{8}\\)</p>
<p>Jumping up and jumping down both hit corners with diagonal symetry, which gives \\(\\frac{1}{2}\\) chance. We have \\(\\frac{1}{2} \\cdot \\frac{1}{2}\\)</p>
<p>Adding these up gives us \\(\\frac{5}{8}\\)</p>`,
answer: '\\(B) \\frac{5}{8}\\)',
hint: "How can you break this down into cases?",
step: "Break this down into cases ofr the first jump and add the probabilities. For instance, jumping left already lands you on an edge, so that's already a \\(\\frac{1}{4}\\) chance"
    },
    {
        title: `AMC 10A 2020 Problem 15 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        uesd: false,
        difficulty: 3,
rating: 1200,
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
        hint: "How can you find the perfect squares factors of \\(12!\\) using the prime factorization",
        step: "Expand the factorial and find the prime factorization. Remember that even powers mean perfect squares"
    },
    {
        title: `AMC 10A 2020 Problem 16 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `A point is chosen at random witin the square in the coordinate plane whose vertices are \\((0,0), (2020,0), (2020,2020),\\) and \\((0,2020)\\). The 
        probability that the point is within \\(d\\) units of a lattice point is \\(\\frac{1}{2}\\). (A point \\((x,y)\\) is a lattice point if \\(x\\) and \\(y\\) are both integers.) What is \\(d\\) to the nearest tenth?`,
        type: 'mc',
        choices: ['\\(A) 0.3\\)', '\\(B) 0.4\\)', '\\(C) 0.5\\)', '\\(D) 0.6\\)', '\\(E) 0.7\\)'],
        solution: `<b>0.4</b><p>First things first: the dimensions of the square as a whole should not matter. Thus, we break the shape down into the smallest units possible, a \\(1 \\times 1\\) square. This square has \\(4\\) lattice points and an area of \\(1\\)</p>
        <p>To be within \\(d\\) of a lattice point, it should be within a circle of radius \\(d\\), or in our case a quarter-circle bounded by the edges. There are \\(4\\) corners, so \\(4\\) of these circles. The area of these should be \\(\\frac{1}{2}\\) so that there is exactly a \\(\\frac{1]{2}\\) chance of the selected 
        point bein within the circle. We thus have that \\(\\pi d^2 = \\frac{1]{2}\\}. We use \\(\\pi=3.14\\) and simply approximate for \\(d=0.4\\)` ,
        answer: '\\(B) 0.4\\)',
        topic: 'composite shapes',
        hint: "The dimensions of the square don't matter. Try this with a \\(1 \\times 1\\) square",
        step: "Try with a \\(1 \\times 1\\) square. You're looking for the area that is within a circle of radius \\(\\frac{1}{2}\\) of a lattice point, so try drawing those circles and finding the are"
    },
    {
        title: `AMC 10A 2020 Problem 25 <span class="material-symbols-outlined">
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
rating: 1600,
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
        hint: "We need a situation where Jason has a better chance then completely rerolling and then rolling one dice. The probability must then be above \\(\\frac{1}{6}\\) for just one, how about for rerolling all \\(3\\)?",
        step: "Find the minimum probability or expected gain from rerolling two dice by finding the probability first of winning by rerolling all \\(3\\). After that, test combinations of rerolls that would yield a higher probability"
    },
    {
        title: `AMC 10B 2020 Problem 5 <span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 1,
rating: 800,
        text: `How many distinguishable arrangements are there of \\(1\\) brown tile, \\(1\\) purple tile, \\(2\\) green tiles, and \\(3\\) yellow tiles in a row from left to right?`,
        solution: `<b>420</b><p>All we have to do for this is find the total number of combination and then divide the ways to arrange the tiles of the same color</p>
        <p>We have \\(\\frac{7!}{3! \\cdot 2!}=420\\)<p><b>Solution by snowflake:</b><p>Call all brown tiles B, all purple tiles P, all green tiles G, and all yellow tiles Y. Then, it's just the amount of 'words' you can form. Since there are 7 total characters, and 3 Y repeats and 2 G repeats, it's just \\(\\frac{7!}{(3! \\cdot 2!)} = \\frac{5040}{12} = 420\\)`,
        answer: '420',
        type:'fr',
        topic: 'counting',
        hint: "What should you divide the total number of combinations by",
        step: "Find the total number of combinations \\(7!\\) and divide by the number of ways to arrange tiles of the same color"
    },
    {
        title: `AMC 10B 2020 Problem 11 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `Ms. Carr asks her students to read any \\(5\\) of the \\(10\\) books on a reading list. Harold randomly selects \\(5\\) books from the list, and Betty does the same. What is the probability that there are exactly \\(2\\) books that they select?`,
        type: 'mc',
        choices: ['\\(A) \\frac{1}{8}\\)', '\\(B) \\frac{5}{36}\\)', '\\(C) \\frac{14]{45}\\)}', '\\(D) \\frac{25}{63}\\)', '\\(E) \\frac{1}{2}\\)'],
        solution: `<b>\\(\\frac{25}{63}\\)</b><p>We can start with Harold. It doesn't really matter what he picks as long as Betty picks \\(2\\) of the same. There are \\(5\\) choose \\(2\\) ways for this, so \\(10\\) and \\(5\\) choose \\(3\\) ways to pick the remaining ones, which is also \\(10\\) (since she is picking fom the \\(5\\) remaining ones</p>
        <p>There are \\(5\\) choose \\(10=252\\) ways for a total ratio of \\(\\frac{100}{252}=\\frac{50}{126}=\\frac{25}{63}\\) `,
        answer: '\\(E) \\frac{25}{63}\\)',
        topic: 'combinations',
        hint: "Imagine Betty picks from two sets, the ones Harold didn't pick and the ones he did. How many does she need from each set?",
        step: "Find how many choices Betty has by doing \\(5 \\textup{choose} 3\\) for the ones he didnt (bc there are five left and she picks three) and \\(5 \\textup{choose} 2\\) for the remaining \\(2\\) (from the set he picked. "
    },
    {
        title: `AMC 10B 2020 Problem 18 <span class="material-symbols-outlined">
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
rating: 1400,
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
        hint: "What different orders of colors can this happen with?",
        step: "Find the possible orders to be \\(RRBB, RBR, RBBR\\) and the same with switching \\(R\\) and \\(B\\). Compute each of these individually"
    },
    {
        title: `AMC 10B 2020 Problem 17 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `There are \\(10\\) people standing equally spaced around a circle. Each person knows exactly \\(3\\) of the other \\(9\\) people: the \\(2\\) people standing next to him or her, as well as the person directly across the circle.
        How many ways are there for the \\(10\\) people to split up into \\(5\\) pairs so that the members of each pair know each other?`,
        solution: `<b>13</b><p>We use the circle to visualize. Notice that we can just pair everybody with the person next to them. That would give us \\(2\\) cases because we can pair clockwise or counterclockwise</p>
        <p>If we pair across, we can only do so for odd numbers of crosses, because if it were even, it would leave people without people next to them</p>
        <p>With \\(1\\) cross, there are \\(5\\) ways to do it (\\(5\\) potential crosses). With \\(3\\), the need to all be adjacent so to not "strand" anybody without another person next to them. There are \\(5\\) ways to do this</p>
        <p>Finally, with all crosses, we have \\(1\\) way for a total of \\(2+5+5+1=13\\)`,
        answer: '13',
        topic: 'casework',
        hint: "Where is there symmetry in this? How many `crosses` can you make when pairing opposite",
        step: "Calculate with casework by the total number of 'crosses' or pairs accross "
    },
    {
        title: `AMC 10B 2020 Problem 19 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `In a certain card game, a player is dealt a hand of \\(10\\) cards from a deck of \\(52\\) distinct cards. The number of distinct (unordered) hands that can be deal to the player can be written as \\(158A00A4AA0\\). What is the digit \\(A\\)?`,
        solution: `<b>2</b><p>What we're really looking for is the tens digit of \\(52\\) choose \\(10\\) or \\(\\frac{52!}{10!(42!)}\\) which simplifies down to \\(\\frac{52 \\cdot 51 \\cdot 50 ... \\cdot 43}{10!}\\). From here, it's decently easy to just simplify down by factoring and get \\(\\frac{26 \\cdot 17 \\cdot 7 \\cdot 47 \\cdot 46 \\cdot 5 \\cdot 11 \\cdot\\ 43}\\) which we divide by \\(10\\) again for modulo \\(2\\). `,
        answer: '2',
        topic: 'modular arithmetic',
        hint: "Find the tens digit of \\(52 \\textup{choose} 10\\)",
        step: "Find \\(\\frac{52!}{42! \\cdot 10!}\\) and factor out as much as possible"
    },
    {
        title: `AMC 10A 2021 Spring Problem 20 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `In how many ways can the sequence \\(1,2,3,4,5\\) be rearranged so that no three consecutive terms are increasing and no three consecutive terms are decreasing?`,
        solution: `<b></b>We know each sequence of increasing or decreasing numbers must be of length \\(2\\). Thus, it must go increase, decrease, increase, decrease, or visa versa. </p>
        <p>With increase decrease increase decrease, the terms that you increase to have to be \\(3,4,5\\). That gives us \\(_3_5_, _5_3_, _4_5_, _5_4_\\). Notice that we cannot have \\(3,4\\) in any combination. The first option can be \\(13254\\) or \\(23154\\). The same is said for the second one, because it's the same
        thing but backwards. That gives \\(4\\). The last \\(2\\) can give you any combination for the remaining \\(3\\) which means \\(2 \\cdot 3! = 12\\). This gives \\(16\\). We double this in the case of decrease, increase, decrease, increase for \\(16 \\cdot 2 =32\\)`,
        answer: '32',
        topic: 'casework',
        hint: "What must the order of increases and decreases be? Split into cases based on where the larger `increases` go",
        step: "Fill in how many values there are for these options \\(_3_5_, _5_3_, _4_5_, _5_4_\\)"
    },
    {
        title: `AMC 10A 2021 Spring Problem 23 <span class="material-symbols-outlined">
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
rating: 1600,
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
        hint: "Follow the different paths and find the probabilities. You don't have to follow everything though, be sure to use symmetry to make things easier",
        step: "First start with the first jump, which always puts Freida next to a corner. She has a \\(\\frac{1}{2}\\) chance. What happens if she doesn't take that chance?"
    },
    {
        title: `AMC 10A 2021 Spring Problem 25 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `How many ways are there to place \\(3\\) indistinguihsable red chips, \\(3\\) indistinguishable blue chips, and \\(3\\) indistinguishable green chips in the squares of a \\(3 \\times 3\\) grid so that no two chips of the same color
        are directly adjacent to each other, either vertically or horizontally?`,
        solution: `<b></b><p>We know, right off the bat, that the answer has to be a multiple of \\(6\\), because any combination needs to work when the colors are switched around  in \\(3!=6\\) ways</p>
        <p>Knowing we will eventually multiply by \\(6\\), we can start with one color, work the different ways around it, and then multiply by \\(6\\). In order to rationalize this best, I would start at either the corner of the middle.</p>
        <p>I personally started at the corner when I solved this. Our first row can have \\(R x R\\) or \\(R x y\\), where \\(x\\) and \\(y\\) are essentially interchangeable versions of other colors</p>
        <p>For \\(R x R\\), the value of \\(x\\) defines the rest. That means that there are \\(2\\) ways, since there are \\(2\\) values of \\(x\\) ((\\B, G\\)). For \\(R, x, y\\), we need \\(R\\)s to be arranged diagonally. The diagonals can be arranged in two ways, with two variants of \\(G\\) and \\(B\\) being switched, giving \\(4\\) possibilities. That gives \\(6 \\cdot 6\\) (because we can switch the colors around) which gives 
        \\(36\\)`,
        answer: '36',
        topic: 'casework',
        hint: "Focus on starting with one color from the corner. Notice that our answer must be divisible by \\(6\\) because the colors need to be interchangeable",
        step: "Solve the first row or column for what values there can be, and then use that to solve for the rest."
    },
    {
        title: `AMC 10B 2021 Fall Problem 22 <span class="material-symbols-outlined">
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
rating: 1600,
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
        hint: "There are three characteristics that define the situations: Which box is all one color, what color, and the combinations for the other colors. That being said, be careful not to over count",
        step: "Find the number of ways for ONLY ONE box, and then account for the overcounting"
    },
    {
        title: `AMC 10A 2021 Fall Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `When a certain unfair die is rolled, an even number is \\(3\\) times as likely to appear as an odd number. The die is rolled twice. What is the probability that the sum of the numbers rolled is even?</p>`,
        solution: `<b>\\(\\frac{5}{8}\\)</b><p>Let's first start by figuring out what the values of the number need to be. The question doesn't specify the number of faces so let's just imagine it's a coin that is either even or odd (you can also imagine \\(1\\) or \\(2\\) but it's up to you)</p>
        <p>We have that \\(P(O)=\\frac{1}{4}\\) and \\(P(E)=\\frac{3}{4}\\) because \\(\\frac{3}{4}+\\frac{1}{4}=1\\) (you can solve it algebraicly but it's relatively trivial)</p>
        <p>\\(EE\\) and \\(OO\\). There are \\(\\frac{3}{4}^2\\) and \\(\\frac{1}{4}^2\\) chances which sum to \\(\\frac{9}{16}+\\frac{1}{16}=\\frac{10}{16}=\\frac{5}{8}\\)</p>`,
        type: 'mc',
        choices: ['\\(A) \\frac{3}{8}\\)', '\\(B) \\frac{4}{9}\\)', '\\(C) \\frac{5}{9}\\)', '\\(D) \\frac{9}{16}\\)', '\\(E) \\frac{5}{8}\\)'],
        answer: '\\(E) \\frac{5}{8}\\)',
        topic: 'algebraic manipulation',
        hint: "Use some forced simplification and imagine the die is a coin =P. Also, use the rules for what combinations of numbers sum to even",
        step: "Use the probabilities \\(\\frac{1}{4}\\) and \\(\\frac{3}{4}\\) and calculate the probabilities of \\(EE\\) and \\(OO\\)"
    },
    {
        title: `AMC 10A 2021 Fall Problem 10 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `A school has \\(100\\) students and \\(5\\) teachers. In the first period, each studentis taking one class and each teacher is teacing one class. The
        enrollments in the classes are \\(50,20,20,5\\) and \\(5\\). Let \\(t\\) be the average value obtained if a teacher is picked at random and the number of students
        in their class is noted. Let \\(s\\) be the average be the average value obtained if a student was picked at random and the number of students in their class, including the student, is noted.
        What is \\(t-s\\)?`,
        type: 'mc',
        choices: ['\\(A) -18.5\\)', '\\(B) -13.5\\)', '\\(C) 0\\)', '\\(D) 13.5\\)', '\\(18.5\\)'],
        solution: `<b>\\(13.5\\)</b><p>Let's start with \\(t\\). We have \\(5\\) teachers total. \\(1\\) would say \\(50\\), \\(2\\) would say \\(20\\), and \\(2\\) would say \\(5\\). This sums to \\(50+2(20)+2(5)=100\\) which we divide by \\(5\\) for an 
        average value of \\(20\\). For \\(s\\), we have \\(\\frac{50(50)+40(20)+10(5)}{100}\\). This is pretty huge so we do some factoring and solve to get \\(33.5\\). \\(20-33.5=13.5\\)`,
        answer: '\\(B) -13.5\\)',
        topic: 'expected outcome',
        hint: "Use the formula for expected outcome \\(\\textup{outcome} \\times \\textup{probability of that outcome}\\)",
        step: "Use the formula for expected outcome to find the expected outcome for the students and teachers"
    },
    {
     title: `AMC 10A 2021 Fall Problem 13 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
     used: false,
     difficulty: 3,
rating: 1200,
     text: `Each of \\(6\\) balls is randomly and independently painted either black or white with equal probability. What is the probability that every ball is different in color from more than half of the other \\(5\\) balls?`,
     type: 'mc',
     choices: ['\\(A) \\frac{1}{64}\\)', '\\(B) \\frac{1}{6}\\)', '\\(C) \\frac{1}{4}\\)', '\\(D) \\frac{5}{16}\\)', '\\(E) \\frac{1}{2}\\)'],
     solution: `<b>\\(\\frac{5}{16}\\)</b><p>All this question is asking is what the probability is that there are \\(3\\) white and \\(3\\) blue.</p>
     <p>We compute this by finding the total number of ways to pick \\(3\\) out of \\(6\\) to be black (so essentially \\(6\\) choose \\(3\\)) and divide that by the total number of colorings \\((2^6\\))</p>
     <p>This solves down to \\(\\frac{5}{16}\\)</p> 
     `,
     answer: '\\(D) \\frac{5}{16}\\)',
     topic: 'combinations',  
     hint: "There need to bbe \\(3\\) and \\(3\\). How many ways can you pick \\(3\\) from \\(6\\)?",
     step: "Find \\(6 \\textup{choose} 3\\) and divide by the total number of ways to color "
    },
    {
        title: `AMC 10A 2021 Fall Problem 18 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `A farmer's rectangular field is partitioned into a \\(2\\) by \\(2\\) grid of \\(4\\) rectangular sections as shown in the figure. In
        each section the farmer will plant one crop: corn, wheat, soybeans, or potatoes. The farmder does not want to grow corn and wheat in any two sections that share a border, and the farmer does not want to grow soybeans and potatoes in any two sections that share a border. 
        Given these restrictions, in how many ways can the farmer choose crops to plant in each of the four sections of the field?`,
        image: 'assets/question-diagrams/amc-10-2020-problem-18.png',
        solution: `<b>84</b><p>Call corn, wheat, soybeans, and potatoes, \\(c,w,s,\\) and \\(p\\), respectively. The rules tell us, effectively, that \\(c\\) and \\(w\\) and then \\(s\\) and \\(p\\) have to be diagonal. Note also, that the question does not say that we have to use each crop once.</p>
        <p>If we have two crops, the process is a bit complicated. The way I saw it, you take one pair, let's use \\(c\\) and \\(w\\). You know they have to be diagonal. There are \\(4\\) ways for them to be diagonal (2 in each orientation and then flipping the values), and for each of those \\(4\\), the values of \\(p, s\\) can
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
        hint: "Divide this into cases by the total number of different crops you have",
        step: "Divide this into cases by the total number of different crops you have. For instance, for  one crop there are obviously \\(4\\) ways"
    },
    {
        title: `AMC 10A 2021 Fall Problem 21 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `Each of the \\(20\\) balls is tossed independently and at random into one of the \\(5\\) bins. Let \\(p\\) be the probability that some bin ends up with \\(3\\) balls, another with \\(5\\) balls, and the other three with \\(4\\) balls each. Let
        \\(q\\) be the probability that every bin ends up with \\(4\\) balls. What is \\(\\frac{p}{q}\\)?`,
        solution: `<b>16</b><p>The actual concept for this isn't super complicated, it really just comes down to arithmetic and quick simplification</p>
        <p>The denominators for both \\(p\\) and \\(q\\) are gonna be \\(5^20\\) which cancels, so we don't worry about it. </p>
        <p>For \\(p\\) we do \\(5\\\) CHOOSE \\(1\\) \\(3\\) times (to pick which bin has \\(3, 4, 5\\)), and then we do \\(20\\) choose some number that represents the number of balls in each bin. </p>
        <p>For \\(q\\), we do \\(20\\) choose \\(4\\) repeatedly because we pick which balls go in each bin. The whole simplification is rather long, and a bit trivial, but it ends up at \\(16\\)`,
        answer: '16',
        topic: 'combinations',
        hint: "What this is really asking is the number of ways for the opportunity in \\(p\\), and then the number of ways for the opportunity in \\(q\\)",
        step: "Find that \\(p=5 \\textup{choose} 1 \\cdot 3 \\cdot 20 \\textup{choose} [3,4,5]\\). Use the same logic for \\(q\\)"
    },
    {
        title: `AMC 10B 2021 Fall Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `Una rolls \\(6\\) standard \\(6\\)-sided dice simultaneously and calculates the product of the \\(6\\) numbers obtained. What is the probability that the product is divisible by \\(4\\)?`,
        solution: `<b>'\\(\\frac{59}{64}\\)'</b><p>The product is divisible by \\(4\\) if you either roll at least one \\(4\\) or two \\(2\\)s, or a \\(2\\) and a \\(6\\), or a \\(6\\) and a \\(6\\). That's quite a handful. Instead, we find the chance that none of these happen. This happens when either the answer is odd or divisible by \\(2\\) and not \\(4\\)</p>
        <p>For it to be odd, we need all the factors to be odd. There's a \\(\\frac{1}{2}^6=\\frac{1}{64}\\) chance of this</p>
        <p>If it's divisble by \\(2\\) but not \\(4\\), we need \\(5\\) odds and then either a \\(2\\) or a \\(6\\). That's \\(\\frac{1}{2}^5 \\cdot \\frac{1}{3}=\\frac{1}{192}\\). However, since there are \\(6\\) positions that the \\(2\\) or \\(6\\) can be in, we multiply by \\(6\\) for \\(\\frac{1}{16}\\). We add these and subtract from \\(1\\) for \\(\\frac{59}{64}\\)</p>
        <h3> Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
        <p>When you have an incredibly hard or complex probability to calculate, it often helps you to focus on the other probability, assuming there are two cases. This is called complementary counting`,
        type: 'mc',
        choices: ['\\(A) \\frac{3}{4}\\)', '\\(B) \\frac{57}{64}\\)', '\\(C) \\frac{59}{64}\\)', '\\(D) \\frac{187}{192}\\)', '\\(E) \\frac{63}{64}\\)'],
        answer: '\\(C) \\frac{59}{64}\\)',
        topic: 'complementary counting',
        hint: "Use complementary counting",
        step: "Find the probabilities \\(1) \\textup{there are no even numbers rolled}\\) and \\(2) \\textup{that the only even number rolled is a 2 or a 6\\)",
    },
    {
        title: `AMC 10A 2022 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `A rectangle is partitioned into \\(5\\) regions as shown.  
        Each region is to be painted a solid color - red, orange, yellow, blue, or green - so that regions that touch are painted different colors,
         and colors can be used more than once.
         How many different colorings are possible?`,
        image: 'assets/question-diagrams/amc-10-2022-problem-9.png',
        solution: `<b>540</b><p>We do casework based on the number of colors</p>
        <p>If we use \\(5\\) colors, we have \\(5! 120\\) ways to color it</p>
        <p>If we use \\(4\\) colors, we caneither have the top right and bottom left or the top left and bottom right, or bottom two corners. These are identical probabilities, so we'll just multiply by \\(3\\).</p>
        <p>There are \\(5\\) ways to choose the color repeated twice. There are \\(4\\) choose \\(3=4\\) ways to choose the remaining \\(3\\) colors and \\(3!=6\\) ways to order them. That gives us \\(5 \\cdot 4 \\cdot 6 =120\\). We multiply this by \\(3\\) for \\(360\\)</p>
        <p>Finally, if we have \\(3\\) colors. Once again, we use the corners. We have \\(5\\) choose \\(2=10\\) ways to choose the ones repeated, and we multiply that by \\(2\\). The last one has \\(3\\) possibilities. That gives \\(20 \\cdot 3 =60\\). Thus, we have \\(120+360+60=540\\)   `,
        answer: '540',
        topic: 'casework',
        hint: "Do casework based on the number of colors used",
        step: "Split into cases for using \\(5\\) colors and \\(4\\) colors, then multiply by \\(5!\\) for the different combinations of colors"
    },
    {
       title: `AMC 10A 2022 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
       used: false,
       difficulty: 3,
rating: 1200,
        text: `How many ways are there to split the integers \\(1\\) through \\(14\\) into \\(7\\) pairs such that in each pair, the greater number is at least \\(2\\) times the lesser number?`,
        solution: `<b>144</b><p>We know for a fact that \\((7,14)\\) has to be a pair. That gives \\((6,13)\\) or \\((6,12)\\). Consequently, \\((5,10), (5,11), (5,12), (5,13)\\), but the last two depend on the value that \\(6\\) is paired with</p>
        <p>\\(1,2,3,4\\) can be with any number. That being said, remmber that \\(8-14\\) cannot pair because for the smallest  value \\(8\\) we need \\(\\ge 16\\), which we don't have. Thus gives us \\(2\\) for \\(6\\), \\(3\\) for \\(5\\) (since it can't be one of \\(6\\)'s values) and \\(4\\) for 4, and so on so that we have \\(2 \\cdot 3 \\cdot 4!=144\\)`,
        answer: '144',
        topic: 'logic',
        hint: "Do casework by the smallest number",
        step: "Find what the largest smallest number can be and do casework"
    },
    {
        title: `AMC 10A 2022 Problem 22 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `Suppose that \\(13\\) cards numbered \\(1,2,3,...,13\\) are arranged in a row. The task is to pick them up in numerically increasing order, working repeatedly from left to right. In the example below, cards \\(1,2,3\\) are picked up on the first pass, \\(4\\) and \\(5\\)
        on the second pass, \\(6\\) on the third pass, \\(7,8,9,10\\) on the fourth pass, and \\(11,12,13\\) on the fifth pass. For how many of the \\(13!\\) possible orderings of the cards will the \\(13\\) cards be picked up in exactly two passes?`,
        solution: `<b>8178</b><p>Let's find some shorter sequences and then work our way up. For the first \\(3\\) values, we have \\(4\\) sequences. We see \\((1,3,2), (2,1,3), (2,3,1), (3,1,2)\\). Trying with \\(4\\) gives \\(11\\). With \\(5\\) we have \\(26\\) so we set up \\(2^n-n-1\\). This is
        a trick called engineer's induction, finding a helpful pattern. Inputing \\(13\\) give \\(8178\\)`,
        answer: '8178',
        topic: 'patterns',
        hint: "Try using smaller sequences (e.g. from 1-3) and see if you can find a pattern",
        step: "Try this with 1-3, then 1-4, and so on until you find the pattern"
    },
    {
        title: `AMC 10B 2022 Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `A pair of fair \\(6\\)-sided dice is rolled \\(n\\) times. What is the least value of \\(n\\) such that the probability that the sum of the numbers face up on a roll equals \\(7\\) at least once is greater than \\(\\frac{1}{2}\\)</p>`,
        solution: `<b></b><p>We know the probability of the sum being \\(7\\) after two rolls is \\(\\frac{1}{6}\\) because each value has a pair that will make it add to \\(7\\). Since the first value doesn't matter, we have the probability is based on the second value, thus meaning that there's a
        probability of \\(\\frac{1}{6}\\). We can't exactly find the combined probability for \\(\\frac{1}{2}\\), so instead we use complementary counting, or finding the probability that it does NOT sum to \\(7\\), which is \\(1-\\frac{1}{6}\\), which is \\(\\frac{5}{6}\\). The probability of this after \\(n\\) rolls needs to be less than \\(\\frac{1}{2}\\), so we set up \\(\\frac{5}{6}^n < \\frac{1}{2}\\) and some experimentation with the ansewr choices gives us \\(n=4\\)`,
        type: 'mc',
        choices: ['\\(A) 2\\)', '\\(B) 3\\)', '\\(C) 4\\)', '\\(D) 5\\)', '\\(E) 6\\)'],
        answer: '\\(C) 4\\)',
        topic: 'complementary counting',
        hint: "Use complementary counting and set up an exponential equation",
        step: "Find the probability \\(x\\) that the sum is NOT \\(7\\) and find \\(x^n<\\frac{1}[2}\\)"
    },
    {
        title: `AMC 10A 2023 Problem 7 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
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
        hint: "Do casework with the number of rolls",
        step: "Divide into cases for \\(1,2\\) and \\(3\\) rollls and find the probabilities. For example, with one roll you need \\(3\\) which gives a probability of \\(\\frac{1}{6}\\)"
    },
    {
        title: `AMC 10A 2023 Problem 14 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `A number is chosen at random from among the first \\(100\\) positive integers, and a positive integer divisor of that number is chosen at
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
        hint: "Start by finding which numbers can be picked that would have \\(11\\) has a factor",
        step: "Find the multiples of \\(11\\) that are \\(leq 100\\) to be \\(11,22,33,44,55,66,77,88,99\\) and find the probability for each of these"
    },
    {
       title: `AMC 10A 2023 Problem 20 <span class="material-symbols-outlined">
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
rating: 1400,
       text: `Each \\(3 \\times 3\\) grid of squares is colored red, white, blue, or green so that every \\(2 \\times 2\\) square contains one square of each color. One such coloring is shown on the right below.
       How many different colorings are possible?`,
       solution: `<b>72                              </b><p>Start at the top right square. We have \\(4!\\) ways to arrange it. Next, bottom left, we have \\(3\\) spaces left, and what we put there defines the rest, so we have \\(4! \\cdot 3 = 24 \\cdot 3 = 72\\)`,
       answer: '72',
       topic: 'counting', 
       hint: "Two well chosen `blocks` of \\(2\\times 2\\) can define the rest",
       step: "Find the combinations for one corner, then the diagonal corner. That will define the rest"
    },
    {
        title: `AMC 10B 2023 Problem 19 <span class="material-symbols-outlined">
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
rating: 1400,
        text: `Sonya the frog chooses a point uniformly at random lying within the square \\([0,6] \\times [0,6]\\) in the coordinate plane and hops to that point. She then randomly chooses a distance uniformly at random from \\([0,1]\\), and a direction
        uniformly at random from {north, south, east, west}. All her choices are independent. She now hops the distance in the chosen direction. What is the probability that she lands outside ths square`,
        solution: `<b>\\(\\frac{1}{12}\\)</b><p>She can only land outside the square if she first hops onto a border square. There are \\(20\\) of these out of \\(36\\), which gives a \\(\\frac{5}{9}\\). For \\(16\\) of the border squares, you need to jump \\(1\\) in the right direction which gives a \\(\\frac{1}{2} \\cdot \\frac{1}{4}=\\frac{1}{8}\\) chance
        <p>For the other \\(4\\), you can jump in two directinos for a \\(\\frac{1}{4}\\) probability...We don't actually need the whole combined probability. We multiply the \\(\\frac{1}{8}\\) by the probability of her picking one of those squares which is \\(\\frac{16}{36}=\\frac{4}{9}\\) for a probability of \\(\\frac{1}{18}\\). We multiply 
        \\(\\frac{1}{4}) by \\(\\frac{4}{36}=\\frac{1}{9}\\) for a probability of \\(\\frac{1}{36}\\). Adding these together gives us \\(\\frac{1}{18}+\\frac{1}{36}=\\frac{1}{12}\\)`,
        type: 'mc',
        choices: ['\\(A) \\frac{1}{6}\\)', '\\(B) \\frac{1}{12}\\)', '\\(C) \\frac{1}{4}\\)', '\\(D) \\frac{1}{10}\\)', '\\(E) \\frac{1}{9}\\)'],
        answer: '\\(B) \\frac{1}{12}\\)',
        topic: 'casework',
        hint: "Where must her first jump be? What are the chances from there?",
        step: "Find the probability of landing on a border square that is NOT a corner, and then on a corner square. From those, multiply them by the probability of jumping out from that square."
    },
    {
        title: `AMC 10B 2023 Problem 21 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `Each of \\(2023\\) balls is randomly placed into one of \\(3\\) bins. Which of the following is closets to the probability that each of the bins will contain an odd number of balls?`,
        solution: `<b>\\(\\frac{1}{4}\\)</b><p>We know that every odd number is \\(2k+1\\) for some integer \\(k\\). We know each bin must have at least \\(1\\), and then we need to add groups of 2 frm there so we find \\(1012\\) choose \\(2\\), effectively figuring out how many different variations we can have for the groups of 2. We then divide this by the total number of 
        ways to sort it. We use a technique called stars and bars to do this. We thus have \\(2023+3-1 \\textup{choose} 2\\). Dividing this gives \\(\\frac{1}{4})`,
        type: 'mc',
        choices: ['\\(A) \\frac{2}{3}\\)', '\\(B) \\frac{3}{10}\\)', '\\(C) \\frac{1}{2}\\)', '\\(D) \\frac{1}{3}\\)', '\\(E) \\frac{1}{4}\\)'],
        answer: `\\(E) \\frac{1}{4}\\)`,
        topic: 'combinations',
        hint: "First find how to do it such that the numbers are always odd. You can do this by distributing in groups of \\(2\\)",
        step: "Find the number of ways to distribute as groups of \\(2\\) and divide that by the total number of ways to distribute (in stars and bars)"
    }, 
    {
        title: `AMC 10A 2024 Problem 6 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 2,
rating: 1000,
        text: `What is the minimum number of successive swaps of adjacent letters in the string \\(ABCDEF\\) that are needed to change the string to \\(FEDCBA\\)? (For example, \\(3\\) swapps are required to chance \\(ABC\\) to \\(CBA\\); one such sequence of swaps is \\(ABC --> BAC --> BCA --> CBA\\).)`,
        solution: `<b>15</b><p>The easiest way to do this is to start by moving \\(A\\), and then \\(B\\), and then \\(C\\) and so on, which takes \\(5+4+3+2+1=15\\)`,
        answer: `15`,
        topic: 'logic',
        hint: "Move \\(A\\) to the back, and then \\(B\\) and so on",
        step: "Systematically move fron front to back using \\(A\\) first. Do this for the rest and sum the number of moves"
    },
    {
       title: `AMC 10A 2024 Problem 9 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
       used: false,
       difficulty: 2,
rating: 1000,
       text: `In how many ways can \\(6\\) juniors and \\(6\\) seniors form \\(3\\) disjoint teams of \\(4\\) people so that each team has \\(2\\) juniors and \\(2\\) seniors?`,
       solution: `<b>1350</b><p>We start with the juniors. There are \\(6\\) choose \\(2=15\\) ways for them to make the first group, and then \\(4\\) choose \\(2=6\\) ways to choose the second. The last is set. That's \\(15 \\cdot 6\\), and just as many for the seniors. We  get
       \\(8100\\) but divide by \\(3!\\), which is the number of ways to arrange the group (because the order doesn't matter). This gives us \\(1350\\) </p>
       <h3>Common Mistake <span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span><span class="material-symbols-outlined">
exclamation
</span></h3>
       <p>Don't forget to divide by \\(3!\\). A big part of math, especially competition math, is knowing exactly what you are doing, not just plugging numbers into equations. Understanding why and what happens is vital for solvingAMC 10 Problems`,
       type: 'mc',
       choices: ['\\(A) 720\\)', '\\(B) 1350\\)', '\\(C) 2700\\)', '\\(D) 3280\\)', '\\(E) 8100\\)'],
       answer: '\\(E) 1350\\)',
       hint: "How many ways are there to make groups of two by class",
       step: "Starting with one of the classes, lets say juniors, find the number of ways to make groups of \\(2\\), and then more and more groups of \\(2\\) with who is lef"
    },
    {
        title: `AMC 10A 2024 Problem 17 <span class="material-symbols-outlined">
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
rating: 1400,
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
        hint: "Consider what happens when they lose or win the first game",
        step: "Do casework based on whether or not they win or lose the first game and, following the right logic, you should get the chance of winning after winning the first game to be \\(\\frac{2}{3}p+\\frac{2}{3}(1-p)p\\). Try your best to see what happens if they lose"
    },
    {
        title: `AMC 10B 2024 Problem 17 <span class="material-symbols-outlined">
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
rating: 1400,
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
        hint: "Use casework",
        step: "Divide into cases by the number of snails in the tie"
    },
    {
        title: `AMC 10B 2024 Problem 20 <span class="material-symbols-outlined">
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
rating: 1400,
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
        hint: "The number of variants for each `pattern` of lefts and rights is constant",
        step: "Find patterns of lefts and rights and find how many they each have (it should be the same for all)"
    },
    {
        title: `AMC 10B 2024 Problem 22 <span class="material-symbols-outlined">
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
rating: 1600,
        text: `A group of \\(16\\) people will be partitioned into \\(4\\) indistinguishable \\(4\\)-person committees. Each committee will have one chairperson and one secretary. 
        The number of different ways to make these assignments can be written as \\(3^r M\\), where \\(r\\) and \\(M\\) are positive integers and \\(M\\) is not divisibly by \\(3\\). What is \\(r\\)?`,
        solution: `<b>5</b><p>We have \\(16\\) choose \\(4\\) ways to choose the first committee, and then \\(12\\) choose \\(4\\) for the second, and so on. We have \\(4!\\) ways to order the committees, but we divide by \\(4!\\) because they are indistinguishable. This gives us \\(\\frac{16!}{(4!)^5})</p>
        <p>Each group has \\(4 \\cdot 3 = 12\\) ways to pick the two roles. Thus, we have \\(\\frac{16!}{(4!)^5}\\cdot 12^4 which has \\(3^5\\) in the factorization, so we have \\(r=5\\))`,
        answer:'5',
        topic: 'prime factorization',
        hint: "Start by organizing the comittees and multiply by how to organize the chairperson and secretary within the comittees",
        step: "Start by orgaizing the number of comittees with \\(\\16 \\textup{choose} 12 \\textup{choose} 4 \\cdot 8 \\{choose} 4\\) divided by \\(4!\\) because the order of the comitees does not matter. Now, find the number of ways of organizing each comittee"
    },
    {
        title: `AMC 10A 2025 Problem 12 <span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span><span class="material-symbols-outlined">
star
</span>`,
        used: false,
        difficulty: 3,
rating: 1200,
        text: `Carlos uses a \\(4\\)-digit passcode to unlock his computer. In his pascode, exatly one digit is even, exactly one (possibly different) digit is prime, and
        no digit is \\(0\\). How many \\(4\\)-digit passcodes satisfy these conditions?`,
        solution: `<b>464</b><p>Let's say that the even and prime are the same. Thus, we have \\(2\\) which can be in \\(4\\) different places. The remaining three must be odd composite numbers, which must be \\(9\\) or \\(1\\). That gives us \\(2^3 \\cdot 4 = 32\\) possibilities</p>
        <p>If the even and prime digit are different, we must have two values that are either\\(9\\) or \\(1\\). We need to have a \\(4,6,8\\) and a \\(3,5,7\\). We have \\(4\\) ways to place the even, \\(3\\) ways to place the prime, and \\(2\\) variants for the remaining ones, wihch gives, \\(4 \\cdot 3  \\cdot 3 \\cdot 3 \\cdot 2 \\cdot 2 =432\\)  
    <p>Adding these together gives us \\(432+32=464\\)`,
    answer: '464',
    topic: 'casework',
    hint: "What must the remaining digits be?",
    step: "First, split up into cases based on whether or not the prime number is \\(2\\). Use basic counting to solve the rest"
    },
    {
        title: `AMC 10A 2025 Problem 16 <span class="material-symbols-outlined">
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
rating: 1400,
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
        hint: "The formula for expected outcome is \\(\\textup{value of outcome} \\times \\textup{probability of that outcome}\\) for all different values of outcomes. You can divide this into three cases",
        step: "Divide into cases by what the highest jar has and calculate the probability"
    },
    {
        title: `AMC 10A 2025 Problem 25 <span class="material-symbols-outlined">
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
rating: 1600,
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
        hint: "How can you divide the square geometrically to account for the side lengths",
        step: "Divide vertically in half (with \\(AB\\) at the top) where to the left \\(AP<AB\\) and to the right \\(AP>AB\\). Next, draw a circle of radius equal to the side lentgh around \\(A\\). The area inside that ensures \\(AP<AB\\)"
    },
    

]
const allQ = []
allQ.push(...questions)
allQ.push(...geometryQ)
allQ.push(...numTheoryQ)
allQ.push(...probabilityQ)
window.SaintlyAllQuestions = allQ;
})();
