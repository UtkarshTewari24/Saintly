
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

//Understanding The Question =====================================================================================================
// Understanding What Its Asking For Question
  const problemOneA = document.getElementById("problemOneA")
  const problemOneB = document.getElementById("problemOneB")
  const problemOneC = document.getElementById("problemOneC")
  const problemOneD = document.getElementById("problemOneD")
  const problemOneE = document.getElementById("problemOneE")
  const solutionOne = document.getElementById("solutionOne")
  const exampleOne = document.getElementById("exampleOne")
  const exampleTwo = document.getElementById("exampleTwo")
  problemOneA.innerHTML = "\\(A) 25\\)"
  problemOneB.innerHTML = "\\(B) 20\\)"
  problemOneC.innerHTML = "\\(C) 15\\)"
  problemOneD.innerHTML = "\\(D) 10\\)"
  problemOneE.innerHTML = "\\(E) 1.10\\)"
  exampleOne.innerHTML = `A cart rolls down a hill, traveling \\(5\\) inches the first second and accelerating so that during each successive \\(1\\) second time interval, it travels \\(7\\) inches more than during the previous \\(1\\) second interval.
        The card takes \\(30\\) seconds to reach the bottom of the hill. How far, in inches, does it travel?`
exampleTwo.innerHTML = `The number of bacteria in a colony doubles every \\(21\\) hours. If there are \\(1,000,000\\) bacteria at \\(12:00 \\textup{PM}\\) on Monday, on what day will the colony first have at least \\(2,000,000,000\\) bacteria?`
  let alreadyCorrectOne = false
  problemOneA.addEventListener("click", function() {

    if (alreadyCorrectOne === true){
       solutionOne.innerHTML = "<b>Correct!</b><p>The question specifically mentions that he must have at least of each time. 25 dimes ensures $2.50 right off the bat, meaning it doesn't leave any options for anything else. "
        problemOneA.style.backgroundColor = "var(--accent-color)"
        problemOneA.disabled = true;
        problemOneB.disabled = true;
        problemOneC.disabled = true;
        problemOneD.disabled = true;
        problemOneE.disabled = true;
    } else  {
           solutionOne.innerHTML = "<b>Correct!</b><p>The question specifically mentions that he must have at least of each time. 25 dimes ensures $2.50 right off the bat, meaning it doesn't leave any options for anything else.</p><p>Can you cross out one more answer? "
        problemOneA.style.backgroundColor = "var(--accent-color)"
        problemOneA.disabled = true;
        problemOneB.disabled = false;
        problemOneC.disabled = false;
        problemOneD.disabled = false;
        problemOneE.disabled = false; 
    }
        alreadyCorrectOne = true
    solutionOne.style.display = "block";
   
  });
  problemOneE.addEventListener("click", function(){
    if (alreadyCorrectOne === true){
       solutionOne.innerHTML = "<b>Correct!</b><p>You can't have a non-integer number of dimes "
        problemOneE.style.backgroundColor = "var(--accent-color)"
        problemOneA.disabled = true;
        problemOneB.disabled = true;
        problemOneC.disabled = true;
        problemOneD.disabled = true;
        problemOneA.disabled = true;
    } else  {
           solutionOne.innerHTML = "<b>Correct!</b><p>You can't have a non-integer number of dimes</p><p>Can you cross out one more answer? "
        problemOneE.style.backgroundColor = "var(--accent-color)"
        problemOneE.disabled = true;
        problemOneA.disabled = false;
        problemOneB.disabled = false;
        problemOneC.disabled = false;
        problemOneD.disabled = false;
        problemOneE.disabled = false; 
    }
        alreadyCorrectOne = true
    solutionOne.style.display = "block";
  })
  problemOneB.addEventListener("click", function(){
    incorrectAnswerOne()
  })
  problemOneC.addEventListener("click", function(){
    incorrectAnswerOne()
  })
  problemOneD.addEventListener("click", function(){
    incorrectAnswerOne()
  })
  function incorrectAnswerOne(){
    solutionOne.innerHTML = "<b>Incorrect</b><p>Try again! Look back at the question and make sure you understand what it's asking for.</p>"
    solutionOne.style.display = "block";
  }
      if (window.MathJax) {
        MathJax.typesetPromise([problemOneA]).catch(()=>{});
        MathJax.typesetPromise([problemOneB]).catch(()=>{});
        MathJax.typesetPromise([problemOneC]).catch(()=>{});
        MathJax.typesetPromise([problemOneD]).catch(()=>{});
        MathJax.typesetPromise([problemOneE]).catch(()=>{});
    }



//Sorting Arithmetic vs Geometric Series Keywords
const subjectToSort = document.getElementById("subjectToSort")
const sortArithmetic = document.getElementById("sortArithmetic")
const sortGeometric = document.getElementById("sortGeometric")
const sortExplanation = document.getElementById("sortExplanation")
const nextSort = document.getElementById("nextSort")
const seriesTable = document.getElementById("seriesTable")
const subjectsToSort = [
    {
        item: "Common Difference",
        type: "Arithmetic",
        explanation: "In Arihmetic Series, the common difference is the constant amount that each term increases by"
    },
    {
        item: "Common Ratio",
        type: "Geometric",
        explanation: "In Geometric Series, the common ratio is the constant factor by which each term is multiplied to get the next term"
    },
    {
        item: "Linear Growth",
        type: "Arithmetic",
        explanation: "If you see a question mention linear growth, it means a constant value is added each time, which is a characteristic of an arithmetic sequence."
    },
    {
        item: "Exponential Growth",
        type: "Geometric",
        explanation: "If you see a question mention exponential growth, it means the value is multiplied by a constant factor each time, which is a characteristic of a geometric sequence."
    },
    {
        item: "Addition",
        type: "Arithmetic",
        explanation: "In a situation where addition is repeated, it is an arithmetic series"
    },
    {
        item: "Multiplication",
        type: "Geometric",
        explanation: "In a situation where multiplication is repeated, it is a geometric series"
    },
    {
        item: "Double",
        type: "Geometric",
        explanation: "If you see a question mention doubling, it is a geometric series with a common ratio of 2"
    },
    {
        item: "Triple",
        type: "Geometric",
        explanation: "If you see a question mention tripling, it is a geometric series with a common ratio of 3"
    },
    {
        item: "Half",
        type: "Geometric",
        explanation: "If you see a question mention halving, it is a geometric series with a common ratio of 0.5"
    },
    {
        item: "Constant Acceleration affecting DISTANCE",
        type: "Geometric",
        explanation: "If you see a question mention constant acceleration affecting distance, it is a geometric series because the velocity, or difference, is constantly growing"
    },
    {
        item: "Constant Acceleration affecting DISTANCE",
        type: "Geometric",
        explanation: "If you see a question mention constant acceleration affecting distance, it is a geometric series because the velocity, or difference, is constantly growing"
    },
    {
        item: "Constant Acceleration affecting VELOCITY",
        type: "Arithmetic",
        explanation: "Acceleration is the velocity of velocity. If the acceleration is constant, we know the velocity grows by a set value each time, which is a characteristic of an arithmetic sequence."
    },
    {
        item: "Constant Velocity",
        type: "Arithmetic",
        explanation: "If you see a question mention constant velocity affecting distance, it is an arithmetic series because the distance is increasing by a constant factor each time"
    },

]
shuffleArray(subjectsToSort)
let index = 0
subjectToSort.innerHTML = subjectsToSort[index].item
sortArithmetic.addEventListener("click", function(){
            sortExplanation.style.display = "block";
        if (subjectsToSort[index].type === "Arithmetic"){
            updateTable("Arithmetic", subjectsToSort[index].item)
            sortExplanation.innerHTML = "<b>Correct!</b><p>" + subjectsToSort[index].explanation + "</p>"
            nextSort.style.display = "block";
            sortGeometric.disabled = true
        } else {
            sortExplanation.innerHTML = `<b>Incorrect</b><p>Try again, which type of series does ${subjectsToSort[index].item} indicate?</p>`
                nextSort.style.display = "none";
        }
    })
    sortGeometric.addEventListener("click", function(){
                sortExplanation.style.display = "block";
        if (subjectsToSort[index].type === "Geometric"){
                    updateTable("Geometric", subjectsToSort[index].item)
            sortExplanation.innerHTML = "<b>Correct!</b><p>" + subjectsToSort[index].explanation + "</p>"
            sortArithmetic.disabled = true
            nextSort.style.display = "block";

        } else {
            sortExplanation.innerHTML = `<b>Incorrect</b><p>Try again, which type of series does ${subjectsToSort[index].item} indicate?</p>`
                nextSort.style.display = "none";
        }
    })
    nextSort.addEventListener("click", function(){
        if (index < subjectsToSort.length - 1){
            index += 1
            subjectToSort.innerHTML = subjectsToSort[index].item
        sortExplanation.style.display = "none";
    nextSort.style.display = "none"
    sortArithmetic.disabled = false
    sortGeometric.disabled = false
        } else {
            subjectToSort.innerHTML = "Great Job! You have finished this activity"
            sortArithmetic.style.display = "none"
            sortGeometric.style.display = "none"
            nextSort.style.display = "none"
            sortExplanation.style.display = "none"
        }
    })
function updateTable(type, text) {
const table = document.getElementById("seriesTable")
let lastRow = table.rows.length - 1;
const rows = Array.from(table.rows)
let found = false
if (type === "Arithmetic"){
    if (table.rows[lastRow].cells[0].innerHTML !== ""){
        console.log("adding row")
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell1.innerHTML = text
    }
    rows.forEach(row => {
        if (found === false){
        if (row.cells[0].innerHTML === ""){
            row.cells[0].innerHTML = text
            found = true
        }
        }
    })
} else if (type === "Geometric"){
if (type === "Geometric"){
    if (table.rows[lastRow].cells[1].innerHTML !== ""){
        console.log("adding row")
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        cell2.innerHTML = text
    }
    rows.forEach(row => {
        if (found === false){
        if (row.cells[1].innerHTML === ""){
            row.cells[1].innerHTML = text
            found = true
        }
    }
    })
}
}
}



//Modeling The Question =====================================================================================================
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

//----------Special Cases
const SDTArray = allQ.filter(q => q.topic === "speed-distance-time")
const SDTTitle = document.getElementById("question-title-SDT")
const SDTtext = document.getElementById("question-text-SDT")
const mcContainerSDT = document.getElementById("mc-container-SDT")
const checkAnswerSDT = document.getElementById("check-btn-SDT")
const answerInputSDT = document.getElementById("answer-input-SDT")
const solutionTextSDT = document.getElementById("solution-text-SDT")
const solutionSDT = document.getElementById("solution-SDT")
const mcChoicesSDT = Array.from(document.querySelectorAll(".mc-choiceSDT"));
const nextBtnSDT = document.getElementById("next-btn-SDT")
shuffleArray(SDTArray)
console.log(SDTArray)
let SDTindex = 0
let currentQuestionSDT = SDTArray[0]
function loadSDT(index){
    solutionSDT.style.display = "none"
    nextBtnSDT.style.display = "none"
    checkAnswerSDT.style.display = "inline-block"
    mcContainerSDT.classList.add("hidden")
    answerInputSDT.style.display = "inline-block"
    answerInputSDT.value = ""
    currentQuestionSDT = SDTArray[index]
    SDTTitle.innerHTML = currentQuestionSDT.title
    SDTtext.innerHTML = currentQuestionSDT.text
    if (currentQuestionSDT.type === "mc") {
        mcContainerSDT.classList.remove("hidden");
        answerInputSDT.style.display = "none"
        checkAnswerSDT.style.display = "none"
        mcChoicesSDT.forEach((btn, i) => {
            console.log("mc")
            btn.disabled = false
            btn.textContent = currentQuestionSDT.choices[i];
            btn.onclick = () => handleMCAnswerSDT(currentQuestionSDT.choices[i])
            MathJax.typesetPromise([btn]).catch(()=>{})
        });
    }
            MathJax.typesetPromise([SDTtext]).catch(()=>{});
}
checkAnswerSDT.addEventListener("click", function(){
    const userAnswer = answerInputSDT.value.trim()
    const correctAnswer = currentQuestionSDT.answer
    if (userAnswer === correctAnswer){
        solutionTextSDT.innerHTML = `Correct!` + currentQuestionSDT.solution
    } else {
        solutionTextSDT.innerHTML = 'Incorect' + currentQuestionSDT.solution
    }
    solutionSDT.style.display = "block"
            MathJax.typesetPromise([solutionTextSDT]).catch(()=>{});
    nextBtnSDT.style.display = "inline-block"
})
nextBtnSDT.addEventListener("click", function(){
    SDTindex += 1
    if (SDTindex === (SDTArray.length - 1)){
        SDTindex = 0
        shuffleArray(SDTArray)
    }
    loadSDT(SDTindex)
})
loadSDT(SDTindex)
function handleMCAnswerSDT(choice) {
    console.log("clicked")
    answerInputSDT.value = choice; // reuse existing checker
    checkAnswerSDT.click();
    if (nextBtnSDT.style.display !== "none"){
mcChoicesSDT.forEach(btn => btn.disabled = true);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const r1 = document.getElementById("runner1");
    const r2 = document.getElementById("runner2");
    const headStartSlider = document.getElementById("headStartSlider");
    const leaderSpeedSlider = document.getElementById("leaderSpeedSlider");
    const chaserSpeedSlider = document.getElementById("chaserSpeedSlider");
    
    const eqLeader = document.getElementById("eqLeader");
    const eqChaser = document.getElementById("eqChaser");
    const explanation = document.getElementById("sdtExplanation");
    const catchLine = document.getElementById("catchUpLine");

    function updateRace() {
        const d1_start = parseFloat(headStartSlider.value); 
        const s1 = parseFloat(leaderSpeedSlider.value); 
        const s2 = parseFloat(chaserSpeedSlider.value); 
        
        // Update Equation Text
        eqLeader.innerHTML = `\\(d = ${s1}t + ${d1_start}\\)`;
        eqChaser.innerHTML = `\\(d = ${s2}t\\)`;

        // Visual Start Positions
        r1.style.left = `${d1_start}%`;
        r2.style.left = `0%`;

        // Logic: s1*t + headstart = s2*t  =>  headstart = (s2 - s1)*t
        if (s2 <= s1) {
            catchLine.style.display = "none";
            explanation.innerHTML = "If the Chaser isn't faster than the Leader, they will <span style='color:red'>never catch up!</span>";
        } else {
            const relativeSpeed = s2 - s1;
            const timeToCatch = d1_start / relativeSpeed;
            const catchPoint = s2 * timeToCatch;

            if (catchPoint <= 100) {
                catchLine.style.display = "block";
                catchLine.style.left = `${catchPoint}%`;
                explanation.innerHTML = `They meet at \\(t = ${timeToCatch.toFixed(2)}\\) hours, which is \\(d = ${catchPoint.toFixed(1)}\\) miles out.`;
            } else {
                catchLine.style.display = "none";
                explanation.innerHTML = "They eventually meet, but it's off the edge of this track!";
            }
        }
        
        MathJax.typesetPromise([eqLeader, eqChaser, explanation]).catch(()=>{});
    }

    [headStartSlider, leaderSpeedSlider, chaserSpeedSlider].forEach(s => s.addEventListener("input", updateRace));
    updateRace();
});
const avgSpeed = document.getElementById("avgSpeed")
const avgOneLabel = document.getElementById('avgOneLabel')
const avgOne = document.getElementById("avgOne")
const avgOneTime = document.getElementById("avgOneTime")
let oneTime = 5.5
let twoTime = 5.5
let oneSpeed = 55
let twoSpeed = 55
avgOne.addEventListener("input", updateLabelOne)
avgOne.addEventListener("input", updateAvgSpeed)
function updateLabelOne(){
    avgOneLabel.innerHTML = `Speed: ${avgOne.value} mph`
    let time = (avgOne.value / 10)
    oneTime = time
    oneSpeed = avgOne.value
    avgOneTime.innerHTML = `Time \\(\\frac{${avgOne.value}}{10}=${time}\\) hrs`
    MathJax.typesetPromise([avgOneTime]).catch(()=>{});
    MathJax.typesetPromise([avgOneLabel]).catch(()=>{});
}
const avgTwoLabel = document.getElementById("avgTwoLabel")
const avgTwo = document.getElementById("avgTwo")
const avgTwoTime = document.getElementById("avgTwoTime")
avgTwo.addEventListener("input", updateLabelTwo)
avgTwo.addEventListener("input", updateAvgSpeed)
function updateLabelTwo(){
    avgTwoLabel.innerHTML = `Speed: ${avgTwo.value} mph`
    let time = (avgTwo.value / 10)
    twoTime = time
    twoSpeed = avgTwo.value
    avgTwoTime.innerHTML = `Time: \\(\\frac{${avgTwo.value}}{10}=${time}\\) hrs`
    MathJax.typesetPromise([avgTwoTime]).catch(()=>{});
    MathJax.typesetPromise([avgTwoLabel]).catch(()=>{});
}
function updateAvgSpeed(){
    let avgSpeedVar = Math.round((((oneTime * oneSpeed) + (twoTime * twoSpeed)) / (oneTime + twoTime)), 5)
    avgSpeed.innerHTML = `Average Speed: \\(\\frac{${oneSpeed} \\times ${oneTime} + ${twoSpeed} \\times ${twoSpeed}}{${oneTime}+${twoTime}}=${avgSpeedVar}\\)`
    MathJax.typesetPromise([avgSpeed]).catch(()=>{});
}
updateAvgSpeed
function updateVectors() {
    const boatMag = parseFloat(document.getElementById("magBoat").value);
    const currMag = parseFloat(document.getElementById("magCurrent").value);
    const currAngleDeg = parseFloat(document.getElementById("angleCurrent").value);
    document.getElementById("angleVal").innerText = currAngleDeg;

    // 1. Convert to Radians (Boat is always pointing 0 deg / North for simplicity)
    const boatRad = -90 * (Math.PI / 180); // Pointing UP
    const currRad = (currAngleDeg - 90) * (Math.PI / 180); 

    // 2. Component Math (v_total_x = v1_x + v2_x)
    const bx = boatMag * Math.cos(boatRad);
    const by = boatMag * Math.sin(boatRad);
    const cx = currMag * Math.cos(currRad);
    const cy = currMag * Math.sin(currRad);

    const rx = bx + cx;
    const ry = by + cy;
    const rMag = Math.sqrt(rx*rx + ry*ry);
    const rAngle = Math.atan2(ry, rx) * (180 / Math.PI);

    // 3. Update Visuals
    document.getElementById("boatVector").style.width = boatMag + "px";
    document.getElementById("boatVector").style.transform = `rotate(${-90}deg)`;

    document.getElementById("currentVector").style.width = currMag + "px";
    document.getElementById("currentVector").style.transform = `rotate(${currAngleDeg - 90}deg)`;

    document.getElementById("resultantVector").style.width = rMag + "px";
    document.getElementById("resultantVector").style.transform = `rotate(${rAngle}deg)`;

    const explanation = document.getElementById("vectorExplanation");
    explanation.innerHTML = `
        Object Movement: \\(${boatMag}\\) units North <br>
        Current/Wind: \\(${currMag}\\) units at \\(${currAngleDeg}^\\circ\\) <br>
        <b>Resultant Speed: \\(${rMag.toFixed(1)}\\) units</b>
        <p>You calculate your movement b finding the sin of the angle times the magnitude and adding it to the object movement. Notice, we do not need cosine
        because we are going directly verticaly.</p>
    `;
    MathJax.typesetPromise([explanation]).catch(()=>{});
}

["magBoat", "magCurrent", "angleCurrent"].forEach(id => {
    document.getElementById(id).addEventListener("input", updateVectors);
});
updateVectors();


//--------------Final Question---------------
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"))
const mcContainer = document.getElementById("mc-container");
const questionChoices = document.getElementById("mc-container")
const topicQ = []
let currentQuestion = 0
allQ.forEach(i => {
        if (i.topic == 'word problems'){
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