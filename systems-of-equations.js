
// Main Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const allQ = window.SaintlyAllQuestions




//-------------------------------Fininding Solutions (Nonlinear)------------------------------
const solutionTextWord = document.getElementById("solutionTextWord")
let graphOne = {
    x: [],
    y: [],
    type: 'scatter',
    mode: 'lines',
    line: {color: '#88B0FF', width: 3}
}
let graphTwo = {
    x: [],
    y: [],
    type: 'scatter',
    mode: 'lines',
    line: {color: '#ffb192', width: 3}
}
let exprString = 'x^2'
let exprStringTwo = 'x'
function drawGraphOne() {
    exprString = document.getElementById('eqInputOne').value;
    const xValues = [];
    const yValues = [];
      try {
        const expr = math.compile(exprString);

        for (let x = -10; x <= 10; x += 0.1) {
            let scope = { x: x };
            let y = expr.evaluate(scope);
            
            xValues.push(x);
            yValues.push(y);
        }
            graphOne = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            line: { color: '#88B0FF', width: 3 }
        };
        const graphTitle = document.getElementById("twoGraphTitle")
        graphTitle.innerHTML = `Graph of \\(${exprString}\\) and \\(${exprStringTwo}\\)`
        MathJax.typesetPromise([graphTitle]).catch(()=>{})
        Plotly.newPlot('twoGraphPlot', [graphOne, graphTwo]);
        

    } catch (err) {
        console.error('Error occurred while evaluating the expression:', err);
    }
}
function drawGraphTwo() {
    exprStringTwo = document.getElementById('eqInputTwo').value;
    const xValues = [];
    const yValues = [];
      try {
        const expr = math.compile(exprStringTwo);

        for (let x = -10; x <= 10; x += 0.1) {
            let scope = { x: x };
            let y = expr.evaluate(scope);
            
            xValues.push(x);
            yValues.push(y);
        }
            graphTwo = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            line: { color: '#ffb192', width: 3 }
        };
        const graphTitle = document.getElementById("twoGraphTitle")
        graphTitle.innerHTML = `Graph of \\(${exprString}\\) and \\(${exprStringTwo}\\)`
        MathJax.typesetPromise([graphTitle]).catch(()=>{})
        Plotly.newPlot('twoGraphPlot', [graphOne, graphTwo]);
        

    } catch (err) {
        console.error('Error occurred while evaluating the expression:', err);
    }
}
function findSolution(){
    console.log("clicked")
    const solutionsX = []
    const solutionsY = []
    const solutionSet = []
    let exprStringOne = document.getElementById("eqInputOne").value
    let exprStringTwoTwo = document.getElementById("eqInputTwo").value
        const exprSolve = math.compile(exprStringOne)
        const exprTwoSolve = math.compile(exprStringTwoTwo)
    for (let x= -50; x < 50; x += 0.01){
        console.log("running")
        let scope= { x: x}
        let yOne = exprSolve.evaluate(scope)
        let yTwo = exprTwoSolve.evaluate(scope)
        if (Math.abs(yOne - yTwo) < 0.01){
            solutionsX.push(Math.round((x*1000)) / 10000)
            let yOneRounded = Math.round((yOne * 10000)) / 10000
            solutionsY.push(Math.round(yOne))
            console.log(solutionsX)
        }
    }
    let index = 0
    solutionsX.forEach(i => {
        let push = `(${i}, ${solutionsY[index]})`
        solutionSet.push(push)
        index += 1
        console.log(solutionSet)
        console.log("operation done")
    })
    if (solutionsX.length === 0){
        console.log("no solutions")
        solutionTextWord.innerHTML = "No Solutions (notice that our simulation cannot always increment every solution and is not always accurate)"
    } else {
        solutionTextWord.innerHTML = `\\(${solutionSet}\\) (notice that our simulation cannot always increment every solution and is not always accurate)`
    }
    MathJax.typesetPromise([solutionTextWord]).catch(()=>{})
}
drawGraphOne()
drawGraphTwo()

//----------------------------Diophantine-----------------------------
const nonDiophantineEquation = document.getElementById("nonDiophantineEquation")
nonDiophantineEquation.innerHTML = '\\(x+y=10\\)'
MathJax.typesetPromise([nonDiophantineEquation]).catch(()=>{})
let nonDiophantineAnswer = 10;
const nonDiophantineInput = document.getElementById("nonDiophantineSlider")
const nonDiophantineOutput = document.getElementById("nonDiophantineOutput")
const nonDiophantineLabel = document.getElementById("nonDiophantineExampleLabel")
nonDiophantineLabel.innerHTML = '\\(x=\\)'
function updateSliders(){
    console.log("running")
    let xCont= parseFloat(nonDiophantineInput.value)
    nonDiophantineAnswer = 10 - xCont 
    nonDiophantineLabel.innerHTML = `\\(x=${xCont}\\)`
    nonDiophantineOutput.innerHTML = `\\(y=${nonDiophantineAnswer}\\)`
    MathJax.typesetPromise([nonDiophantineLabel]).catch(()=>{})
    MathJax.typesetPromise([nonDiophantineOutput]).catch(()=>{})
}
updateSliders()
nonDiophantineInput.addEventListener("input", updateSliders)

const diophantineEquation = document.getElementById("diophantineEquation")
diophantineEquation.innerHTML = '\\(x+y=10\\)'
MathJax.typesetPromise([diophantineEquation]).catch(()=>{})
let diophantineAnswer = 10;
const diophantineInput = document.getElementById("diophantineSlider")
const diophantineOutput = document.getElementById("diophantineOutput")
diophantineOutput.innerHTML = '\\(y=5\\)'
MathJax.typesetPromise([diophantineOutput]).catch(()=>{})
const diophantineLabel = document.getElementById("diophantineExampleLabel")
diophantineLabel.innerHTML = '\\(x=5\\)'
MathJax.typesetPromise([diophantineLabel]).catch(()=>{})
function updateStepSlider(){
    console.log("running")
    let xCont= parseFloat(diophantineInput.value)
    diophantineAnswer = 10 - xCont 
    diophantineLabel.innerHTML = `\\(x=${xCont}\\)`
    diophantineOutput.innerHTML = `\\(y=${diophantineAnswer}\\)`
    MathJax.typesetPromise([diophantineLabel]).catch(()=>{})
    MathJax.typesetPromise([diophantineOutput]).catch(()=>{})
}
updateSliders()
diophantineInput.addEventListener("input", updateStepSlider)

//-----------Final Question----------------

//--------------Final Question---------------
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"))
const mcContainer = document.getElementById("mc-container");
const questionChoices = document.getElementById("mc-container")
const topicQ = []
let currentQuestion = 0
allQ.forEach(i => {
        if (i.topic == 'systems of equations'){
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
    } else {
        console.log("isMC")
        mcContainer.classList.remove("hidden")

        mcChoices.forEach((btn, i) => {
                console.log("labeling btns")
                let text = (topicQuestion.choices[i])
                console.log(text)
            btn.innerHTML = text;
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