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

const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

draggables.forEach(drag => {
    drag.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault(); // Required to allow a drop
        zone.classList.add('hovered');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('hovered');
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        zone.classList.remove('hovered');
        
        const dragId = e.dataTransfer.getData('text');
        const dragElement = document.getElementById(dragId);
        
        // Check if correct
        if (dragElement.getAttribute('data-match') === zone.id) {
            zone.classList.add('correct');
            dragElement.classList.add("correct")
            zone.appendChild(dragElement); // Snap item into the box
            dragElement.style.cursor = 'default';
            dragElement.setAttribute('draggable', 'false');
        }
    });
});


// ======================== Reverse PEMDAS =====================================
const reversePemdasArray = [
    { equation: `\\(2x = 4\\)`, answer: `\\div`, explanation: "Divide by 2 to undo multiplication." },
    { equation: `\\(x + 5 = 12\\)`, answer: `-`, explanation: "Subtract 5 to undo addition." },
    { equation: `\\(\\frac{x}{3} = 7\\)`, answer: `\\times`, explanation: "Multiply by 3 to undo division." },
    { equation: `\\(x - 8 = 2\\)`, answer: `+`, explanation: "Add 8 to undo subtraction." },
    { equation: `\\(10 = x + 3\\)`, answer: `-`, explanation: "Subtract 3 to isolate x." },
    { equation: `\\(-4x = 16\\)`, answer: `\\div`, explanation: "Divide by -4 to undo multiplication." },
    { equation: `\\(x + 1.5 = 5\\)`, answer: `-`, explanation: "Subtract 1.5." },
    { equation: `\\(\\frac{x}{-2} = 10\\)`, answer: `\\times`, explanation: "Multiply by -2." },
    { equation: `\\(12 = 4x\\)`, answer: `\\div`, explanation: "Divide by 4." },
    { equation: `\\(x - \\frac{1}{2} = \frac{3}{2}\\)`, answer: `+`, explanation: "Add 1/2 to both sides." },
    // Introducing 2-step (Focusing on what to do FIRST)
    { equation: `\\(2x + 3 = 11\\)`, answer: `-`, explanation: "Undo addition/subtraction FIRST (SADMEP)." },
    { equation: `\\(\\frac{x}{4} - 1 = 5\\)`, answer: `+`, explanation: "Add 1 first before dealing with the fraction." },
    { equation: `\\(5x - 7 = 13\\)`, answer: `+`, explanation: "Add 7 first." },
    { equation: `\\(\\frac{x}{2} + 10 = 15\\)`, answer: `-`, explanation: "Subtract 10 first." },
    { equation: `\\(3 = 9x + 12\\)`, answer: `-`, explanation: "Subtract 12 first." },
    { equation: `\\(100 = 10x - 50\\)`, answer: `+`, explanation: "Add 50 first." },
    { equation: `\\(\\frac{x}{10} + 0.5 = 2.5\\)`, answer: `-`, explanation: "Subtract 0.5 first." },
    { equation: `\\(14 = 2x - 6\\)`, answer: `+`, explanation: "Add 6 first." },
    { equation: `\\(1 - x = 5\\)`, answer: `-`, explanation: "Subtract 1 first (the leading positive constant)." },
    { equation: `\\(22 = \\frac{x}{3} + 4\\)`, answer: `-`, explanation: "Subtract 4 first." }
];
shuffleArray(reversePemdasArray)
const addition = document.getElementById("addition")
const subtraction = document.getElementById("subtraction")
const multiplication = document.getElementById("multiplication")
const division = document.getElementById("division")
const reversePEMDASEquation = document.getElementById("reversePEMDASEquation")
const reversePemdasSolution = document.getElementById("reversePemdasSolution")
const reversePemdasSolutionText = document.getElementById("reversePemdasSolutionText")
const reversePemdasNext = document.getElementById("reversePemdasNext")
addition.innerHTML = '\\(+\\)'
subtraction.innerHTML = '\\(-\\)'
multiplication.innerHTML = '\\(\\times\\)'
division.innerHTML = '\\(\\div\\)'
MathJax.typesetPromise([addition]).catch(()=>{})
MathJax.typesetPromise([subtraction]).catch(()=>{})
MathJax.typesetPromise([multiplication]).catch(()=>{})
MathJax.typesetPromise([division]).catch(()=>{})
let reversePemdasIndex = 0
let currentQuestionReversePEMDAS = reversePemdasArray[reversePemdasIndex]
function loadReversePemdas(){
    reversePemdasSolution.style.display = "none"
    reversePemdasSolutionText.style.display = "none"
    reversePemdasNext.style.display = "none"
    currentQuestionReversePEMDAS = reversePemdasArray[reversePemdasIndex]
    reversePEMDASEquation.innerHTML = currentQuestionReversePEMDAS.equation
    MathJax.typesetPromise([reversePEMDASEquation]).catch(()=>{});
}
addition.addEventListener("click", function(){
    if (currentQuestionReversePEMDAS.answer = '+'){
        reversePemdasSolution.style.display = "block"
        reversePemdasSolutionText.innerHTML = "Correct!" + currentQuestionReversePEMDAS.explanation
    } else {
        reversePemdasSolution.style.display = "block"
        reversePemdasSolutionText.innerHTML = "Incorrect!" + currentQuestionReversePEMDAS.explanation    
    }
    reversePemdasNext.style.display = "block"
    reversePemdasSolutionText.style.display = "block"
})
subtraction.addEventListener("click", function(){
    if (currentQuestionReversePEMDAS.answer = '+'){
        reversePemdasSolution.style.display = "block"
        reversePemdasSolutionText.innerHTML = "Correct!" + " " + currentQuestionReversePEMDAS.explanation
    } else {
        reversePemdasSolution.style.display = "block"
        reversePemdasSolutionText.innerHTML = "Incorrect!" + " " + currentQuestionReversePEMDAS.explanation    
    }
    reversePemdasNext.style.display = "block"
    reversePemdasSolutionText.style.display = "block"
})
multiplication.addEventListener("click", function(){
    if (currentQuestionReversePEMDAS.answer === '+'){
        reversePemdasSolution.style.display = "block"
        reversePemdasSolutionText.innerHTML = "Correct! " + " " + currentQuestionReversePEMDAS.explanation
    } else {
        reversePemdasSolution.style.display = "block"
        reversePemdasSolutionText.innerHTML = "Incorrect! " + " " + currentQuestionReversePEMDAS.explanation    
    }
    reversePemdasNext.style.display = "block"
    reversePemdasSolutionText.style.display = "block"
})
division.addEventListener("click", function(){
    if (currentQuestionReversePEMDAS.answer === '+'){
        reversePemdasSolution.style.display = "block"
        reversePemdasSolutionText.innerHTML = "Correct!" + " " + currentQuestionReversePEMDAS.explanation
    } else {
        reversePemdasSolution.style.display = "block"
        reversePemdasSolutionText.innerHTML = "Incorrect!" + " " + currentQuestionReversePEMDAS.explanation    
    }
    reversePemdasNext.style.display = "block"
    reversePemdasSolutionText.style.display = "block"
})
reversePemdasNext.addEventListener("click", function(){
    reversePemdasIndex += 1
    if (reversePemdasIndex < reversePemdasArray.length) {
        loadReversePemdas()
    } else {
        reversePemdasIndex = 0
        shuffleArray(reversePemdasArray)
        loadReversePemdas()
    }
})
let sum
loadReversePemdas()
const slider = document.getElementById('bSlider');
slider.oninput = function() {
    const bHalf = this.value / 2;
    document.getElementById('b-side').style.width = bHalf + "px";
    document.getElementById('b-bottom').style.height = bHalf + "px";
    
    // Update the "Missing Corner" dimensions
    const corner = document.getElementById('missing-corner');
    corner.style.width = bHalf + "px";
    corner.style.height = bHalf + "px";
    console.log(bHalf)
 sum = (bHalf / 10) * (bHalf / 10)
console.log(sum)
    const shutup = document.getElementById('bVal')
    shutup.innerHTML = `Equation: \\(x^2 + ${(this.value / 10).toFixed(1)}x + ${sum.toFixed(5)}\\)`;
    
    if (sum > 4){
        document.getElementById('missing-corner').innerHTML = sum.toFixed(1)
            document.getElementById('missing-corner').style.textAlign = "center"
    document.getElementById('missing-corner').style.textJustify = "center !important"
    document.getElementById('missing-corner').style.color = "var(--primary-color)"
    } else {
        document.getElementById('missing-corner').innerHTML = ""
    }
    MathJax.typesetPromise([shutup]).catch(()=>{})
}
slider.oninput()

function fillCorner() {
    document.getElementById('missing-corner').style.display = "block";
    const val = (slider.value / 20); // Scaled for display
}
fillCorner()
const subs = document.querySelectorAll(".substitute")
function substitute(){
        console.log("subbing")
        subs.forEach(sub => {
                sub.innerHTML = '\\(u\\)'
                MathJax.typesetPromise([sub]).catch(()=>{})
                sub.classList.add("u")
        })
}




//--------------Final Question---------------
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"))
const mcContainer = document.getElementById("mc-container");
const questionChoices = document.getElementById("mc-container")
const topicQ = []
let currentQuestion = 0
allQ.forEach(i => {
        if (i.topic == 'algebraic manipulation'){
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