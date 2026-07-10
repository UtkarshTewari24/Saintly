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
// Main Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const questions = window.SaintlyQuestionBank.algebra;
const geometryQ = window.SaintlyQuestionBank.geometry;
const numTheoryQ = window.SaintlyQuestionBank.numberTheory
const probabilityQ = window.SaintlyQuestionBank.probability
const allQ = []
allQ.push(...questions)
allQ.push(...geometryQ)
allQ.push(...numTheoryQ)
allQ.push(...probabilityQ)



//------------Division Modeling-------------------
const numerator = document.getElementById("numerator")
const denominator = document.getElementById("denominator")
const fracLabel = document.getElementById("fracRepLabel")
const fracRepTwo = document.getElementById('fracRepTwo')
let numeratorVal = numerator.value
let denominatorVal = denominator.value
function numeratorUpdate(){
    document.getElementById("numeratorLabel").innerHTML = `Numerator: \\(${numerator.value}\\)`
    MathJax.typesetPromise([document.getElementById('numeratorLabel')]).catch(()=>{})
    numeratorVal = numerator.value
    fracLabel.innerHTML = `\\(${numeratorVal} \\div ${denominatorVal} = ${numeratorVal / denominatorVal}\\)`
    MathJax.typesetPromise([fracLabel]).catch(()=>{})
    fracRepTwo.innerHTML = `\\(\\frac{${numeratorVal}}{${denominatorVal}}\\)`
    MathJax.typesetPromise([fracRepTwo]).catch(()=>{})
    updatePieChart()
    updateRatio()

}
function denominatorUpdate(){
    document.getElementById("denominatorLabel").innerHTML = `Denominator: \\(${denominator.value}\\)`
    MathJax.typesetPromise([document.getElementById('denominatorLabel')]).catch(()=>{})
    denominatorVal = denominator.value
    fracLabel.innerHTML = `\\(${numeratorVal} \\div ${denominatorVal} = ${numeratorVal / denominatorVal}\\)`
    MathJax.typesetPromise([fracLabel]).catch(()=>{})
    fracRepTwo.innerHTML = `\\(\\frac{${numeratorVal}}{${denominatorVal}}\\)`
    MathJax.typesetPromise([fracRepTwo]).catch(()=>{})
    updatePieChart()
    updateRatio()
}
numerator.addEventListener("input", function(){
    numeratorUpdate()
})
denominator.addEventListener("input", function(){
    denominatorUpdate()
})
function updatePieChart() {
    const n = parseInt(document.getElementById("numerator").value);
    const d = parseInt(document.getElementById("denominator").value);
    const wedge = document.getElementById("pieWedge");
    
    // 1. Calculate the percentage and angle
    const percent = n / d;
    const angle = percent * 360;
    
    // 2. Math for the Arc Path
    // We start at the top (100, 20) and rotate clockwise
    const radius = 80;
    const centerX = 100;
    const centerY = 100;
    
    // Convert angle to radians
    const radians = (angle - 90) * Math.PI / 180.0;
    
    // Calculate the end point of the arc
    const x = centerX + (radius * Math.cos(radians));
    const y = centerY + (radius * Math.sin(radians));
    
    // If the fraction is more than 50%, the SVG needs a "large arc flag"
    const largeArcFlag = percent > 0.5 ? 1 : 0;
    
    // Create the "d" attribute for the path
    // M: Move to center, L: Line to top, A: Arc command, Z: Close path
    let dPath;
    if (percent >= 1) {
        // Just draw a full circle if fraction is 1/1 or more
        dPath = `M 100 100 m -80 0 a 80 80 0 1 0 160 0 a 80 80 0 1 0 -160 0`;
    } else {
        dPath = [
            "M", centerX, centerY,
            "L", centerX, centerY - radius,
            "A", radius, radius, 0, largeArcFlag, 1, x, y,
            "Z"
        ].join(" ");
    }
    
    wedge.setAttribute("d", dPath);
    
    // 3. Update the fraction label text
    if (window.MathJax) MathJax.typeset();
}

// Call this inside your existing update functions!
const ratio1 = document.getElementById("ratio1")
const ratio2 = document.getElementById("ratio2")
const ratio3 = document.getElementById("ratio3")
const ratio4 = document.getElementById("ratio4")
const ratio5 = document.getElementById("ratio5")
const ratio6 = document.getElementById("ratio6")
const ratio7 = document.getElementById("ratio7")
const ratio8 = document.getElementById("ratio8")
const ratio9 = document.getElementById("ratio9")
const ratio10 = document.getElementById("ratio10")
function updateRatio(){
        document.getElementById("ratioLabel").innerHTML = `\\(${numeratorVal}:${denominatorVal}\\)`
        MathJax.typesetPromise([document.getElementById("ratioLabel")]).catch(()=>{})
        if (numeratorVal == 1) {
                ratio2.style.display = "none"
                ratio3.style.display = "none"
                ratio4.style.display = "none"
                ratio5.style.display = "none"
        } else if (numeratorVal == 2){
                console.log(numeratorVal)
                ratio2.style.display = "inline-block"
                ratio3.style.display = "none"
                ratio4.style.display = "none"
                ratio5.style.display = "none"
        } else if (numeratorVal == 3){
                ratio2.style.display = "inline-block"
                ratio3.style.display = "inline-block"
                ratio4.style.display = "none"
                ratio5.style.display = "none"     
        } else if (numeratorVal == 4){
                ratio2.style.display = "inline-block"
                ratio3.style.display = "inline-block"
                ratio4.style.display = "inline-block"
                ratio5.style.display = "none"
        } else if (numeratorVal == 5){
                ratio2.style.display = "inline-block"
                ratio3.style.display = "inline-block"
                ratio4.style.display = "inline-block"
                ratio5.style.display = "inline-block"
        }
        
        if (denominatorVal == 1) {
                ratio7.style.display = "none"
                ratio8.style.display = "none"
                ratio9.style.display = "none"
                ratio10.style.display = "none"
        } else if (denominatorVal == 2){
                ratio7.style.display = "inline-block"
                ratio8.style.display = "none"
                ratio9.style.display = "none"
                ratio10.style.display = "none"
        } else if (denominatorVal == 3){
                ratio7.style.display = "inline-block"
                ratio8.style.display = "inline-block"
                ratio9.style.display = "none"
                ratio10.style.display = "none"     
        } else if (denominatorVal == 4){
                ratio7.style.display = "inline-block"
                ratio8.style.display = "inline-block"
                ratio9.style.display = "inline-block"
                ratio10.style.display = "none"
        } else if (denominatorVal == 5){
                ratio7.style.display = "inline-block"
                ratio8.style.display = "inline-block"
                ratio9.style.display = "inline-block"
                ratio10.style.display = "inline-block"
        }
}
updateRatio()
function startChop() {
    let numStr = document.getElementById("sevenInput").value;
    const display = document.getElementById("chopAnimation");
    display.innerHTML = ""; // Clear previous

    if (!numStr || numStr.length < 2) {
        display.innerHTML = "<p style='color: red; font-size: 1rem;'>Enter at least a 2-digit number!</p>";
        return;
    }

    runChopStep(numStr, display);
}

function runChopStep(numStr, display) {
    if (numStr.length < 2) {
        let finalNum = parseInt(numStr);
        let resultText = (finalNum % 7 === 0) ? 
            `<b style="color: var(--primary-color);">${finalNum} is divisible by 7</b>` : 
            `<b style="color: var(--accent-color);">${finalNum} is not divisible by 7.</b>`;
        display.innerHTML += `<p>${resultText}</p>`;
        return;
    }

    // 1. Separate the last digit
    let rest = numStr.slice(0, -1);
    let lastDigit = numStr.slice(-1);
    let doubled = parseInt(lastDigit) * 2;
    let newNum = parseInt(rest) - doubled;

    // 2. Create the visual "Chop"
    let stepHtml = document.createElement("div");
    stepHtml.style.marginBottom = "15px";
    stepHtml.innerHTML = `
        <span style="color: #88B0FF;">${rest}</span><span style="color: var(--accent-color); text-decoration: line-through;">${lastDigit}</span> 
        <span style="font-size: 1rem;"> → (${lastDigit} × 2 = ${doubled})</span><br>
        <span>${rest} - ${doubled} = <b>${newNum}</b></span>
    `;
    display.appendChild(stepHtml);

    // 3. Pause, then do it again if the number is still large
    if (newNum > 99 || newNum < -99) {
        setTimeout(() => runChopStep(newNum.toString(), display), 1500);
    } else {
        setTimeout(() => {
            let isDiv = newNum % 7 === 0;
            display.innerHTML += `<p>${newNum} is ${isDiv ? "" : "not"} a multiple of 7</p>`;
        }, 1000);
    }
}
function trachtenberg12(inputNum) {
    let numStr = "0" + inputNum; // Always pad with a leading zero
    let result = "";
    let carry = 0;
    let steps = [];

    // Loop from right to left
    for (let i = numStr.length - 1; i >= 0; i--) {
        let current = parseInt(numStr[i]);
        let neighbor = (i === numStr.length - 1) ? 0 : parseInt(numStr[i + 1]);
        
        // The Rule: (Double the digit) + neighbor + any carry from previous step
        let work = (current * 2) + neighbor + carry;
        
        // Calculate the digit to write down and the new carry
        let digitToWrite = work % 10;
        carry = Math.floor(work / 10);
        
        result = digitToWrite.toString() + result;

        // Save the step for your UI animation
        steps.push({
            digit: current,
            neighbor: neighbor,
            calculation: `(${current} × 2) + ${neighbor} + carry(${carry > 0 ? carry : 0})`,
            resultSoFar: result
        });
    }

    // Clean up: remove leading zero if it exists
    if (result.startsWith("0")) result = result.substring(1);

    return { finalAnswer: result, process: steps };
}async function showTrachtenberg12() {
    const num = document.getElementById("trachInput").value;
    const output = document.getElementById("trachSteps");
    const data = trachtenberg12(num);
    
    output.innerHTML = ""; // Clear old steps

    for (let step of data.process) {
        let div = document.createElement("div");
        div.className = "trach-step-card";
        div.innerHTML = `
            <p>Scanning digit <b>${step.digit}</b>...</p>
            <code>${step.calculation} = ${step.resultSoFar[0]}</code>
            <p>Current Result: <b>${step.resultSoFar}</b></p>
        `;
        output.prepend(div); // Add newest step to the top
        await new Promise(r => setTimeout(r, 800)); // Animation pause
    }
}

//--------------Final Question---------------
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"))
const mcContainer = document.getElementById("mc-container");
const questionChoices = document.getElementById("mc-container")
const topicQ = []
let currentQuestion = 0
allQ.forEach(i => {
        if (i.topic == 'arithmetic'){
                topicQ.push(i)
        }
})
shuffleArray(topicQ)
function loadQuestion(){
        let topicQuestion = topicQ[currentQuestion]
        document.getElementById("question-title").innerHTML = topicQuestion.title
        document.getElementById("question-text").innerHTML = topicQuestion.text
        mcChoices.forEach(btn => btn.disabled = false)
            document.getElementById("solution-text").innerHTML = ""
    document.getElementById("solution").style.display = "none"
    document.getElementById("next-btn").style.display = "none"
    
    document.getElementById("answer-input").value = ""
            document.getElementById("answer-input").style.display = "none"
    document.getElementById("check-btn").style.display = "none"
    mcContainer.classList.add("hidden")

    if (!topicQuestion.type || topicQuestion.type === "fr") {
        document.getElementById("answer-input").style.display = "inline-block"
        document.getElementById("check-btn").style.display = "inline-block"
    }
    if (topicQuestion.type === "mc") {
        mcContainer.classList.remove("hidden")

        mcChoices.forEach((btn, i) => {
            btn.textContent = topicQuestion.choices[i];
            btn.onclick = () => handleMCAnswer(topicQuestion.choices[i])
        });
    }
    if (window.MathJax) {
        MathJax.typesetPromise([document.getElementById("question-text")]).catch(()=>{})
        MathJax.typesetPromise([questionChoices]).catch(()=>{})
    }
}
function handleMCAnswer(choice) {
    document.getElementById("answer-input").value = choice; // reuse existing checker
    document.getElementById("check-btn").click();
mcChoices.forEach(btn => btn.disabled = true);
}
document.getElementById("check-btn").addEventListener("click", function(){
        const userAnswer = document.getElementById("answer-input").value
        const correctAnswer = topicQ[currentQuestion].answer
        const solutionText = document.getElementById("solution-text")
        const nextBtn = document.getElementById("next-btn")
        const solution = document.getElementById("solution")
        if (userAnswer === correctAnswer){
                solutionText.innerHTML = "Correct!" + topicQ[currentQuestion].solution
        } else {
            solutionText.innerHTML = "Incorrect" + topicQ[currentQuestion].solution    
        }
        solution.style.display = "block"
        nextBtn.style.display = "block"
        solutionText.style.display = "block"
        MathJax.typesetPromise([solution]).catch(()=>{})
})
document.getElementById("next-btn").addEventListener("click", function() {
        let subtract = (topicQ.length - 1)
        const correct = (currentQuestion === subtract)
        if (correct === true){
                currentQuestion = 0
                shuffleArray(topicQ)
                loadQuestion()
        } else if (currentQuestion < topicQ.length){
                currentQuestion += 1
                loadQuestion()
        } 
        
})
loadQuestion()