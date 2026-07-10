
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
        if (i.topic == 'prime factorization'){
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


//----------------------Factor Tree----------------------------------
function getPrimeFactors(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return [i, n / i];
    }
    return null; // It's prime
}

function createNode(value, isPrime = false) {
    const div = document.createElement('div');
    div.className = isPrime ? 'node prime' : 'node';
    div.innerHTML = `<span>${value}</span>`;
    return div;
}

function buildTree(n, container) {
    const factors = getPrimeFactors(n);
    
    if (!factors) {
        // Prime leaf node
        container.appendChild(createNode(n, true));
        return;
    }

    const parent = createNode(n);
    const branchContainer = document.createElement('div');
    branchContainer.className = 'branches';

    const left = document.createElement('div');
    const right = document.createElement('div');

    buildTree(factors[0], left);
    buildTree(factors[1], right);

    branchContainer.appendChild(left);
    branchContainer.appendChild(right);
    
    container.appendChild(parent);
    container.appendChild(branchContainer);
}
function generateTree() {
    const val = parseInt(document.getElementById('factorInput').value);
    const output = document.getElementById('treeOutput');
    output.innerHTML = ''; 
    if (val > 1) {
        buildTree(val, output);
        // Small timeout ensures the browser has painted the nodes before we measure them
        setTimeout(drawLines, 50); 
    }
}
document.getElementById("factorize").addEventListener("click", function() {
    generateTree()
})
function drawLines() {
    const treeContainer = document.getElementById('treeOutput');
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    
    // Make the SVG cover the entire tree area
    svg.style.position = 'absolute';
    svg.style.top = '0';
    svg.style.left = '0';
    svg.style.width = '100%';
    svg.style.height = '100%';
    svg.style.pointerEvents = 'none'; // So you can still click nodes
    treeContainer.style.position = 'relative'; 
    treeContainer.appendChild(svg);

    const nodes = treeContainer.querySelectorAll('.node');
    
    nodes.forEach(node => {
        const branches = node.nextElementSibling;
        if (branches && branches.classList.contains('branches')) {
            const children = branches.querySelectorAll(':scope > div > .node');
            
            children.forEach(child => {
                const parentRect = node.getBoundingClientRect();
                const childRect = child.getBoundingClientRect();
                const containerRect = treeContainer.getBoundingClientRect();

                const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
                
                // Calculate coordinates relative to the container
                line.setAttribute("x1", parentRect.left + parentRect.width / 2 - containerRect.left);
                line.setAttribute("y1", parentRect.bottom - containerRect.top);
                line.setAttribute("x2", childRect.left + childRect.width / 2 - containerRect.left);
                line.setAttribute("y2", childRect.top - containerRect.top);
                
                line.setAttribute("stroke", "#88B0FF");
                line.setAttribute("stroke-width", "2");
                svg.appendChild(line);
            });
        }
    });
}
// Helper function: Euclidean Algorithm for two numbers
// Helper: GCF of two numbers
function findGcfTwo(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Helper: LCM of two numbers
function findLcmTwo(a, b) {
    if (a === 0 || b === 0) return 0;
    return (a * b) / findGcfTwo(a, b);
}

// Main function to process the list
function calculateGCFandLCM() {
    const inputElement = document.getElementById('lcmInput');
    const outputElement = document.getElementById('lcmOutput');
    
    // Clean and parse input string into integers
    const numbers = inputElement.value
        .split(',')
        .map(num => parseInt(num.trim(), 10))
        .filter(num => !isNaN(num) && num > 0);

    if (numbers.length < 2) {
        outputElement.innerHTML = "<span class='error-text'>Please enter at least two valid numbers.</span>";
        return;
    }

    // Reduce across the array to find total GCF and LCM
    const finalGcf = numbers.reduce((acc, curr) => findGcfTwo(acc, curr));
    const finalLcm = numbers.reduce((acc, curr) => findLcmTwo(acc, curr));

    // Display results using your exact Saintly theme design
    outputElement.innerHTML = `
        <div class="solution">
            <span>GCF: ${finalGcf}</span>
        </div>
        <div class="solution">
            <span>LCM: ${finalLcm}</span>
        </div>
    `;
}
document.getElementById('gcfButton').addEventListener("click", function(){
        calculateGCFandLCM()
})