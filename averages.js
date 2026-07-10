
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
        if (i.topic == 'averages'){
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

//----------------------Actual Functions fr fr----------------------------//
function findArithmeticMean(){
        const a = document.getElementById("a").value
        const b = document.getElementById("b").value
        document.getElementById("output").innerHTML = `\\(\\frac{${a}+${b}}{2}=${((parseInt(a) + parseInt(b)) / 2)}\\)`
        MathJax.typesetPromise([document.getElementById("output")]).catch(()=>{})
}

document.getElementById("a").addEventListener("input", function() {
    findArithmeticMean()
})
document.getElementById("b").addEventListener("input", function() {
    findArithmeticMean()
})
function findGeometricMean(){
        const a = document.getElementById("aGeometric").value
        const b = document.getElementById("bGeometric").value
        document.getElementById("outputGeometric").innerHTML = `\\(\\sqrt{${a}\\times ${b}}=${Math.sqrt(parseInt(a) * parseInt(b))}\\)`
        MathJax.typesetPromise([document.getElementById("outputGeometric")]).catch(()=>{})
}

document.getElementById("aGeometric").addEventListener("input", function() {
    findGeometricMean()
})
document.getElementById("bGeometric").addEventListener("input", function() {
    findGeometricMean()
})

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
updateAvgSpeed()
updateAvgSpeed()