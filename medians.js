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
const allQ = window.SaintlyAllQuestions



//--------------Final Question---------------
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"))
const mcContainer = document.getElementById("mc-container");
const questionChoices = document.getElementById("mc-container")
const topicQ = []
let currentQuestion = 0
allQ.forEach(i => {
        if (i.topic == 'casework'){
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

//--------------------------Actual Functions fr fr-------------------------
// Data Presets
const PRESET_ODD = [12, 3, 7, 19, 5, 8, 14];
const PRESET_EVEN = [8, 2, 15, 11, 4, 9];

// State Machine Variables
let inputMode = 'odd'; // 'odd' | 'even' | 'custom'
let phase = 0;         // 0: Unsorted, 1: Sorted, 2: Crossing, 3: Done
let rawData = [];
let sortedData = [];
let leftPointer = -1;
let rightPointer = -1;
let medianIndices = [];

// DOM Elements
const numRow = document.getElementById('number-row');
const boardLabel = document.getElementById('board-label');
const expText = document.getElementById('explanation-text');
const btnNext = document.getElementById('btn-next');
const btnReset = document.getElementById('btn-reset');
const customArea = document.getElementById('custom-input-area');
const customInput = document.getElementById('custom-input');

// Initialize Application
function init() {
  setupEventListeners();
  resetDemo();
}

function setupEventListeners() {
  document.getElementById('btn-odd').addEventListener('click', (e) => switchMode('odd', e.target));
  document.getElementById('btn-even').addEventListener('click', (e) => switchMode('even', e.target));
  document.getElementById('btn-custom').addEventListener('click', (e) => switchMode('custom', e.target));
  document.getElementById('btn-apply').addEventListener('click', resetDemo);
  btnNext.addEventListener('click', handleNextStep);
  btnReset.addEventListener('click', resetDemo);
}

function switchMode(mode, targetBtn) {
  inputMode = mode;
  document.querySelectorAll('.radio-btn').forEach(btn => btn.classList.remove('active'));
  targetBtn.classList.add('active');
  
  if (mode === 'custom') {
    customArea.classList.remove('hidden');
  } else {
    customArea.classList.add('hidden');
  }
  resetDemo();
}

function resetDemo() {
  phase = 0;
  leftPointer = -1;
  rightPointer = -1;
  medianIndices = [];
  
  if (inputMode === 'odd') {
    rawData = [...PRESET_ODD];
  } else if (inputMode === 'even') {
    rawData = [...PRESET_EVEN];
  } else {
    rawData = customInput.value
      .split(',')
      .map(num => parseInt(num.trim(), 10))
      .filter(num => !isNaN(num));
  }
  
  sortedData = [...rawData].sort((a, b) => a - b);
  btnNext.style.display = 'inline-block';
  render();
}

function handleNextStep() {
  // Phase 0 -> Phase 1: Sort items
  if (phase === 0) {
    phase = 1;
    render();
    return;
  }

  // Phase 1 -> Phase 2: Initialize Pointers
  if (phase === 1) {
    phase = 2;
    leftPointer = 0;
    rightPointer = sortedData.length - 1;
    render();
    return;
  }

  // Phase 2: Run through inward step execution
  if (phase === 2) {
    const nextLeft = leftPointer + 1;
    const nextRight = rightPointer - 1;

    if (nextLeft > nextRight) {
      medianIndices = [leftPointer];
      phase = 3;
    } else if (nextLeft === nextRight) {
      medianIndices = [nextLeft];
      phase = 3;
    } else if (nextRight - nextLeft === 1) {
      leftPointer = nextLeft;
      rightPointer = nextRight;
      medianIndices = [nextLeft, nextRight];
      phase = 3;
    } else {
      leftPointer = nextLeft;
      rightPointer = nextRight;
    }
    render();
  }
}

function render() {
  numRow.innerHTML = '';
  
  if (phase === 0) {
    boardLabel.textContent = 'Current Raw Dataset (Unsorted):';
    btnNext.textContent = 'Sort Dataset';
    
    rawData.forEach(num => {
      const box = document.createElement('div');
      box.className = 'number-box';
      box.textContent = num;
      numRow.appendChild(box);
    });
  } else {
    if (phase === 1) {
      boardLabel.textContent = 'Step 1: Sort the data from least to greatest';
      btnNext.textContent = 'Start Crossing Out';
    } else if (phase === 2) {
      boardLabel.textContent = 'Step 2: Cross out values from the outside edges';
      btnNext.textContent = 'Cross Out Next Pair';
    }

    sortedData.forEach((num, idx) => {
      const box = document.createElement('div');
      box.className = 'number-box';
      
      const span = document.createElement('span');
      span.textContent = num;
      box.appendChild(span);

      // Evaluate visual states based on pointer calculations
      if (phase >= 2 && idx < leftPointer) {
        box.classList.add('crossed');
      } else if (phase >= 2 && idx > rightPointer) {
        box.classList.add('crossed');
      } else if (phase === 2 && idx === leftPointer) {
        box.classList.add('current');
        box.insertAdjacentHTML('beforeend', '<div class="sub-label">Min</div>');
      } else if (phase === 2 && idx === rightPointer) {
        box.classList.add('current');
        box.insertAdjacentHTML('beforeend', '<div class="sub-label">Max</div>');
      } else if (phase === 3 && medianIndices.includes(idx)) {
        box.classList.add('median-active');
        box.insertAdjacentHTML('beforeend', '<div class="sub-label">Median</div>');
      }
      
      numRow.appendChild(box);
    });

    if (phase === 3) {
      btnNext.style.display = 'none';
      const isOdd = sortedData.length % 2 !== 0;
      let medianVal;
      let innerHTML = `<strong>Process Complete!</strong><br>`;
      
      if (isOdd) {
        medianVal = sortedData[medianIndices[0]];
        innerHTML += `Since the dataset size is odd, exactly one middle number remains. The median is <strong>${medianVal}</strong>.`;
      } else {
        const n1 = sortedData[medianIndices[0]];
        const n2 = sortedData[medianIndices[1]];
        medianVal = ((n1 + n2) / 2).toFixed(1);
        innerHTML += `Since the dataset size is even, two middle numbers remain (<strong>${n1}</strong> and <strong>${n2}</strong>). We find their average:<br><span class="math-text">(${n1} + ${n2}) / 2 = ${medianVal}</span>`;
      }
      
      expText.innerHTML = `<div class="result-box">${innerHTML}</div>`;
    }
  }
}

// Run component on load
init();