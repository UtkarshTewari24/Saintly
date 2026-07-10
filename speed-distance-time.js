
// Main Functions
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
import Chart from 'https://esm.sh/chart.js/auto';
const allQ = window.SaintlyAllQuestions


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
//--------------Final Question---------------
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"))
const mcContainer = document.getElementById("mc-container");
const questionChoices = document.getElementById("mc-container")
const topicQ = []
let currentQuestion = 0
allQ.forEach(i => {
        if (i.topic == 'speed-distance-time'){
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


//-----------------------------Actual Functions Fr Fr------------------------------
const incorrectBtns = Array.from(document.querySelectorAll(".incorrect"))
incorrectBtns.forEach(btn => {
        console.log("clicked")
        btn.addEventListener("click", function() {
                document.getElementById("sdt-hint").style.display = "block"
        })
})
const correct = document.getElementById("correct")
correct.addEventListener("click", function() {
        document.getElementById("solution-text-sdt").style.display = "block"
        document.getElementById("sdt-hint").style.display = "none"
        incorrectBtns.forEach(btn => {
                btn.disabled = true
        })

});
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


