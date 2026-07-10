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


//--------------Final Question---------------
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"))
const mcContainer = document.getElementById("mc-container");
const questionChoices = document.getElementById("mc-container")
const topicQ = []
let currentQuestion = 0
allQ.forEach(i => {
        if (i.topic == 'similar triangles'){
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
//----------------------------------Actual functions fr fr---------------------------------
// Base measurements for Reference Triangle (3-4-5 base geometry scaling factor = 30)
const BASE_X = 30;
const BASE_Y = 170;
const STATIC_W = 120; // 4 * 30
const STATIC_H = 90;  // 3 * 30

// Selectors
const slider = document.getElementById('scale-slider');
const scaleVal = document.getElementById('scale-value');
const polyDynamic = document.getElementById('poly-dynamic');

// Label Selectors
const lblE = document.getElementById('lbl-E');
const lblF = document.getElementById('lbl-F');
const sideD = document.getElementById('side-d');
const sideE = document.getElementById('side-e');
const sideF = document.getElementById('side-f');

// Ratio Readout Selectors
const txtA = document.getElementById('ratio-a-text');
const txtB = document.getElementById('ratio-b-text');
const txtC = document.getElementById('ratio-c-text');
const finA = document.getElementById('final-ratio-a');
const finB = document.getElementById('final-ratio-b');
const finC = document.getElementById('final-ratio-f'); // Map directly to DOM items below

function updateSimilarity() {
  const k = parseFloat(slider.value);
  
  // Update state display text
  scaleVal.textContent = k.toFixed(1);

  // Compute new vector vertices for triangle DEF
  const newWidth = STATIC_W * k;
  const newHeight = STATIC_H * k;
  
  const ptD_x = BASE_X;
  const ptD_y = BASE_Y;
  const ptE_x = BASE_X + newWidth;
  const ptE_y = BASE_Y;
  const ptF_x = BASE_X;
  const ptF_y = BASE_Y - newHeight;

  // Render the altered polygon points attribute string
  polyDynamic.setAttribute('points', `${ptD_x},${ptD_y} ${ptE_x},${ptE_y} ${ptF_x},${ptF_y}`);

  // Reposition floating letter coordinate markers dynamically
  lblE.setAttribute('x', ptE_x + 5);
  lblF.setAttribute('y', ptF_y - 5);

  // Calculate proportional mathematical lengths
  const lenF = (4 * k).toFixed(1);
  const lenE = (3 * k).toFixed(1);
  const lenD = (5 * k).toFixed(1);

  // Update dynamic side labels
  sideF.textContent = `f = ${lenF}`;
  sideE.textContent = `e = ${lenE}`;
  sideD.textContent = `d = ${lenD}`;

  // Shift text label tracking coordinates inside the canvas coordinate space
  sideF.setAttribute('x', BASE_X + newWidth / 2 - 10);
  sideE.setAttribute('y', BASE_Y - newHeight / 2);
  sideD.setAttribute('x', BASE_X + newWidth / 2 + 10);
  sideD.setAttribute('y', BASE_Y - newHeight / 2 - 10);

  // Update live fraction calculations 
  txtC.textContent = `${lenF} / 4`;
  txtB.textContent = `${lenE} / 3`;
  txtA.textContent = `${lenD} / 5`;

  // Display evaluated quotients 
  const computedFactor = k.toFixed(2);
  document.getElementById('final-ratio-c').textContent = computedFactor;
  document.getElementById('final-ratio-b').textContent = computedFactor;
  document.getElementById('final-ratio-a').textContent = computedFactor;
}

// Bind listener input event loop initialization 
slider.addEventListener('input', updateSimilarity);

// Execute render run-through on initial file script parse
updateSimilarity();