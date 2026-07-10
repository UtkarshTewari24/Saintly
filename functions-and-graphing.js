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



//------------------------Linear Equations-------------------
let xInput = "1"
let yInput = "0"
function updateTrace() {
    // 1. Get values from 
    // input fields
     xInput = document.getElementById('slope').value;
     yInput = document.getElementById('yIntercept').value;
     if (xInput == ""){
        xInput = "1"
     }
     if (yInput == ""){
        yInput = "0"
     }

    // 2. Convert string input into arrays (e.g., "5, 6" -> [5, 6])
    const newYArray = [parseInt(yInput), (parseInt(yInput)+parseInt(xInput))]
    const newXArray = [0,1]
    for (let i=2; i<100; i++){
        newYArray.push((parseInt(yInput))+(parseInt(xInput) * i))
        newXArray.push(i)
    }
    
    // 3. Update the plot efficiently
    // Note: Restyle expects nested arrays for x/y data updates
    var data = {
        x: [newXArray],
        y: [newYArray],
        type: 'scatter',
        line: {color: '#88B0FF'}
    };
    Plotly.restyle('myDiv', data)
    
}
document.getElementById("slope").addEventListener("input", updateTrace)
document.getElementById("yIntercept").addEventListener("input", updateTrace)
var trace1 = {
  x: [0, 100],
  y: [0,100],
  type: 'scatter',
  line: {color: '#88B0FF'}
};


var set = [trace1];

Plotly.newPlot('myDiv', set);



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
//------------------------Quadratic------------------------
const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.quadraticCurveTo(110, 250, 200, 20);
ctx.stroke();

//------------------------Exponential----------------------
let b = 2
let xArray = []
let yArray = []
var exponentsPlot = {
        x: [],
        y: [],
        type: 'scatter'
        
}
for (let i = 0; i < 11; i+= 0.001){
        let y = (b ** i)
        xArray.push(i)
        yArray.push(y)
        exponentsPlot = {
                x: xArray,
                y: yArray,
                type: 'scatter',
                line: {color: '#88B0FF'}
        }
}
var setTwo = exponentsPlot
Plotly.newPlot('exponentialGraph', [setTwo])
let trace = {
        x: [],
        y: [],
        type: 'scatter',
                    mode: 'lines',
            line: { color: '#88B0FF', width: 3 }
}



//-----------------------------Inverse-------------------------------
function drawGraph() {
    const exprString = document.getElementById('eqInput').value;
    
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

        trace = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            line: { color: '#88B0FF', width: 3 }
        };

        const layout = {
            xaxis: { range: [-10, 10], title: 'x' },
            yaxis: { range: [-10, 10], title: 'y' },
            hovermode: 'closest'
        };
        
        const graphTitle = document.getElementById("graphTitle")
        graphTitle.innerHTML = `Graph of \\(${exprString}\\)`
        MathJax.typesetPromise([graphTitle]).catch(()=>{})
        Plotly.newPlot('graphPlot', [trace], layout);
        
    } catch (err) {
    }
}
const inverse = document.getElementById('inverseBtn')
inverse.addEventListener("click", function(){
        const yNew = []
        const traceX = trace.x.map(value => value)
        traceX.forEach(i => {
        yNew.push(i)
        })
        const xNew = []
        const traceY = trace.y.map(value => value)
        traceY.forEach(i => {
                xNew.push(i)
        })
        let inverse = {
                x: xNew,
                y: yNew,
                type: 'scatter',
                mode: 'lines',
                name: 'inverse'
        }
        const dottedX = []
        const dottedY = []
        for (let i = 0; i < 100; i++){
             dottedX.push(i)
             dottedY.push(i)   
        }
        let dottedLine = {
                x: dottedX,
                y: dottedY,
                type: 'scatter',
                line: {dash: 'dot', color: '#5D5D66' },
                mode: 'lines',
                name: 'line of reflection',
        }
        var layout = {
  yaxis: {
    scaleanchor: "x",
    scaleratio: 1
  }
};


        var inverted = [trace, inverse, dottedLine]
        Plotly.newPlot('graphPlot', inverted, layout)
})
drawGraph();


//----------------------------Absolute Value-------------------------
let absoluteValueTrace = {
        x: [],
        y: [],
        type: 'scatter'
}
function drawAbsoluteValue() {
    const exprString = document.getElementById('absoluteValueInput').value;
    
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

        absoluteValueTrace = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            line: { color: '#88B0FF', width: 3 }
        };

        const layout = {
            xaxis: { range: [-10, 10], title: 'x' },
            yaxis: { range: [-10, 10], title: 'y' },
            hovermode: 'closest'
        };
        
        const graphTitle = document.getElementById("absoluteValueTitle")
        graphTitle.innerHTML = `Graph of \\(${exprString}\\)`
        MathJax.typesetPromise([graphTitle]).catch(()=>{})
        Plotly.newPlot('absoluteValuePlot', [absoluteValueTrace], layout);
        
    } catch (err) {
    }
}
document.getElementById("absoluteValueBtn").addEventListener("click", function(){
const traceY = absoluteValueTrace.y.map(value => value)
const traceX = absoluteValueTrace.x.map(value => value)
const newY = []
traceY.forEach(i => {
        if (i < 0){
                let replace = (i * -1)
                newY.push(replace)
        } else {
                newY.push(i)
        }
        var absoluteTraced = {
                x: traceX,
                y: newY,
                mode: 'lines',
                type: 'scatter',
                line: {color: '#ffb192'}
        }
                var layout = {
  yaxis: {
    scaleanchor: "x",
    scaleratio: 1
  }
}
        let data = [absoluteValueTrace, absoluteTraced]
        Plotly.newPlot('absoluteValuePlot', data, layout)
})
})
drawAbsoluteValue()


//------------------Floor Function--------------------
let floorTrace = {
        x: [],
        y: [],
        type: 'scatter'
}
function drawFloor() {
    const exprString = document.getElementById('floorInput').value;
    
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

        floorTrace = {
            x: xValues,
            y: yValues,
            type: 'scatter',
            mode: 'lines',
            line: { color: '#88B0FF', width: 3 }
        };

        const layout = {
            xaxis: { range: [-10, 10], title: 'x' },
            yaxis: { range: [-10, 10], title: 'y' },
            hovermode: 'closest'
        };
        
        const graphTitle = document.getElementById("floorTitle")
        graphTitle.innerHTML = `Graph of \\(${exprString}\\)`
        MathJax.typesetPromise([graphTitle]).catch(()=>{})
        Plotly.newPlot('floorPlot', [floorTrace], layout);
        
    } catch (err) {
    }
}
document.getElementById("floorBtn").addEventListener("click", function(){
const traceY = floorTrace.y.map(value => value)
const traceX = floorTrace.x.map(value => value)
const newY = []
traceY.forEach(i => {
        let replace = Math.floor(i)
        newY.push(replace)

})
        var floorTraced = {
                x: traceX,
                y: newY,
                mode: 'lines',
                type: 'scatter',
                line: {color: '#ffb192'}
        }
                var layout = {
  yaxis: {
    scaleanchor: "x",
    scaleratio: 1
  }
}
        let data = [floorTrace, floorTraced]
        Plotly.newPlot('floorPlot', data, layout)
})
drawFloor()

//--------------Final Question---------------
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"))
const mcContainer = document.getElementById("mc-container");
const questionChoices = document.getElementById("mc-container")
const topicQ = []
let currentQuestion = 0
allQ.forEach(i => {
        if (i.topic == 'functions and graphing'){
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