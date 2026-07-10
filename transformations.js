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
        if (i.topic == 'transformations'){
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
// --- Integrated Geometric Translation Widget Engine ---
// Note: The leading semicolon prevents an error with JavaScript's automatic semicolon insertion from the previous line.
;(function() {
  const canvas = document.getElementById('translation-canvas');
  if (!canvas) return; // Safeguard if the widget isn't loaded on the current page

  const ctx = canvas.getContext('2d');
  const sliderX = document.getElementById('trans-slider-x');
  const sliderY = document.getElementById('trans-slider-y');
  const labelX = document.getElementById('trans-x-val');
  const labelY = document.getElementById('trans-y-val');
  const txtRule = document.getElementById('trans-rule-text');
  const containerCoords = document.getElementById('trans-coord-list');

  // Math Grid Configurations
  const gridSize = 18; 
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = width / gridSize; 

  // Pre-Image Vertices (Triangle ABC)
  const originalVertices = [
    { label: 'A', x: -3, y: -2 },
    { label: 'B', x: 1, y: -2 },
    { label: 'C', x: -1, y: 2 }
  ];

  // Translates algebraic Cartesian points to screen space pixels
  function toCanvasCoords(cartX, cartY) {
    return {
      x: centerX + (cartX * scale),
      y: centerY - (cartY * scale) // Flip y-axis since browser canvases draw 0,0 from top-left
    };
  }

  // Draw Cartesian Coordinate Grid
function drawGrid() {
    ctx.lineWidth = 1;
    const halfGrid = gridSize / 2;
    
    // 1. Detect if your site is currently in dark mode
    const isDark = document.documentElement.classList.contains('dark');
    
    // 2. Define your Light vs Dark colors here!
    const axisColor = isDark ? '#6e707d' : 'rgb(222, 222, 236)';     // Center lines
    const squareColor = isDark ? '#2c2d35' : 'rgb(240, 240, 245)';   // Grid squares

    for (let i = -halfGrid; i <= halfGrid; i++) {
      // Vertical Grid Lines
      let posV = toCanvasCoords(i, 0);
      ctx.strokeStyle = (i === 0) ? axisColor : squareColor;
      ctx.beginPath(); ctx.moveTo(posV.x, 0); ctx.lineTo(posV.x, height); ctx.stroke();

      // Horizontal Grid Lines
      let posH = toCanvasCoords(0, i);
      ctx.strokeStyle = (i === 0) ? axisColor : squareColor;
      ctx.beginPath(); ctx.moveTo(0, posH.y); ctx.lineTo(width, posH.y); ctx.stroke();
    }

    // 3. Make the small 'x' and 'y' labels match the theme text color
    ctx.fillStyle = isDark ? '#8e95a5' : '#9e99aa';
    ctx.font = '10px sans-serif';
    ctx.fillText('x', width - 12, centerY - 5);
    ctx.fillText('y', centerX + 6, 12);
  }

  // Polygon renderer
  function drawShape(vertices, strokeColor, fillColor, isDashed) {
    ctx.save();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.setLineDash(isDashed ? [4, 4] : []);

    ctx.beginPath();
    vertices.forEach((v, index) => {
      let canvasPos = toCanvasCoords(v.x, v.y);
      if (index === 0) ctx.moveTo(canvasPos.x, canvasPos.y);
      else ctx.lineTo(canvasPos.x, canvasPos.y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    // Render vertex tags
    ctx.fillStyle = isDashed ? '#888b99' : '#ffffff';
    ctx.font = 'bold 12px monospace';
    vertices.forEach(v => {
      let canvasPos = toCanvasCoords(v.x, v.y);
      let offsetX = v.x >= 0 ? 5 : -14;
      let offsetY = v.y >= 0 ? -6 : 12;
      ctx.fillText(v.label, canvasPos.x + offsetX, canvasPos.y + offsetY);
    });
  }

  // Core drawing and mathematical tracking cycle
  function renderTranslationWidget() {
    const dx = parseInt(sliderX.value) || 0;
    const dy = parseInt(sliderY.value) || 0;

    // Update string status overlays
    labelX.innerText = dx >= 0 ? `+${dx}` : dx;
    labelY.innerText = dy >= 0 ? `+${dy}` : dy;

    const signX = dx >= 0 ? `+ ${dx}` : `- ${Math.abs(dx)}`;
    const signY = dy >= 0 ? `+ ${dy}` : `- ${Math.abs(dy)}`;
    txtRule.innerHTML = `(x, y) ➔ (x ${signX}, y ${signY})`;

    // Reset View Matrix
    ctx.clearRect(0, 0, width, height);
    drawGrid();

    // Calculate Image Matrix Coordinates
    const translatedVertices = originalVertices.map(v => ({
      label: v.label + "'",
      x: v.x + dx,
      y: v.y + dy
    }));

    // Draw Pre-Image (Original) and Target Image
    drawShape(originalVertices, '#ffb192', 'rgba(226, 109, 74, 0.15)', true);
    drawShape(translatedVertices, '#4A90E2', 'rgba(74, 144, 226, 0.15)', false);

    // Rebuild dynamic tracking table markup
    containerCoords.innerHTML = '';
    originalVertices.forEach((orig, idx) => {
      const trans = translatedVertices[idx];
      const row = document.createElement('div');
      row.site.cssText = "display: flex; justify-content: space-between; background: var(--background-color); padding: 6px 10px; border-radius: 4px; border: 1px solid var;";
      row.innerHTML = `
        <span style="color: #aaa;">${orig.label}(${orig.x}, ${orig.y})</span>
        <span style="color: #88b0ff;">➔</span>
        <span style="color: #4A90E2; font-weight: bold;">${trans.label}(${trans.x}, ${trans.y})</span>
      `;
      containerCoords.appendChild(row);
    });
  }

  // Input Listeners
  sliderX.addEventListener('input', renderTranslationWidget);
  sliderY.addEventListener('input', renderTranslationWidget);

  // Connect to your existing Saintly Math brightness button toggle
  const brightnessBtn = document.getElementById('brightness');
  if (brightnessBtn) {
    brightnessBtn.addEventListener('click', () => {
      // A tiny 10ms delay gives your core theme-switching code a moment to finish running
      setTimeout(renderTranslationWidget, 10);
    });
  }

  // Initial Paint Configuration execution 
  renderTranslationWidget();
  // Initial Paint Configuration execution 
  renderTranslationWidget();

})();
// Connect to your existing Saintly Math brightness button toggle
// --- Integrated Geometric Rotation Widget Engine (Theme Adaptive) ---
;(function() {
  const canvas = document.getElementById('rotation-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const sliderAngle = document.getElementById('rot-slider-angle');
  const labelAngle = document.getElementById('rot-angle-val');
  const txtRule = document.getElementById('rot-rule-text');
  const containerCoords = document.getElementById('rot-coord-list');

  const gridSize = 18; 
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = width / gridSize;

  // Offsetting triangle slightly from origin so the rotation path is clear & educational
  const originalVertices = [
    { label: 'A', x: 2, y: 1 },
    { label: 'B', x: 5, y: 1 },
    { label: 'C', x: 3, y: 4 }
  ];

  function toCanvasCoords(cartX, cartY) {
    return {
      x: centerX + (cartX * scale),
      y: centerY - (cartY * scale)
    };
  }

  function drawGrid() {
    ctx.lineWidth = 1;
    const halfGrid = gridSize / 2;
    
    // Light / Dark mode evaluation check matching your existing theme setup
    const isDark = document.documentElement.classList.contains('dark');
    const axisColor = isDark ? '#6e707d' : 'rgb(222, 222, 236)';
    const squareColor = isDark ? '#2c2d35' : 'rgb(240, 240, 245)';

    for (let i = -halfGrid; i <= halfGrid; i++) {
      // Vertical Lines
      let posV = toCanvasCoords(i, 0);
      ctx.strokeStyle = (i === 0) ? axisColor : squareColor;
      ctx.beginPath(); ctx.moveTo(posV.x, 0); ctx.lineTo(posV.x, height); ctx.stroke();

      // Horizontal Lines
      let posH = toCanvasCoords(0, i);
      ctx.strokeStyle = (i === 0) ? axisColor : squareColor;
      ctx.beginPath(); ctx.moveTo(0, posH.y); ctx.lineTo(width, posH.y); ctx.stroke();
    }

    ctx.fillStyle = isDark ? '#8e95a5' : '#9e99aa';
    ctx.font = '10px sans-serif';
    ctx.fillText('x', width - 12, centerY - 5);
    ctx.fillText('y', centerX + 6, 12);
  }

  function drawShape(vertices, strokeColor, fillColor, isDashed, isDark) {
    ctx.save();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.setLineDash(isDashed ? [4, 4] : []);

    ctx.beginPath();
    vertices.forEach((v, index) => {
      let canvasPos = toCanvasCoords(v.x, v.y);
      if (index === 0) ctx.moveTo(canvasPos.x, canvasPos.y);
      else ctx.lineTo(canvasPos.x, canvasPos.y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = isDark ? '#e3e2f0' : '#625c6e';
    ctx.font = 'bold 13px monospace';
    vertices.forEach(v => {
      let canvasPos = toCanvasCoords(v.x, v.y);
      let offsetX = v.x >= 0 ? 6 : -16;
      let offsetY = v.y >= 0 ? -6 : 14;
      ctx.fillText(v.label, canvasPos.x + offsetX, canvasPos.y + offsetY);
    });
  }

  function renderRotationWidget() {
    const angle = parseInt(sliderAngle.value) || 0;
    labelAngle.innerText = `${angle}°`;

    let ruleMarkup = "(x, y) ➔ (x, y)";
    let rotatedVertices = [];

    // Apply exact coordinate mappings specified in your introductory curriculum notes
    if (angle === 0 || angle === 360) {
      ruleMarkup = "(x, y) ➔ (x, y)";
      rotatedVertices = originalVertices.map(v => ({ label: v.label + "'", x: v.x, y: v.y }));
    } else if (angle === 90) {
      ruleMarkup = "(x, y) ➔ (-y, x)";
      rotatedVertices = originalVertices.map(v => ({ label: v.label + "'", x: -v.y, y: v.x }));
    } else if (angle === 180) {
      ruleMarkup = "(x, y) ➔ (-x, -y)";
      rotatedVertices = originalVertices.map(v => ({ label: v.label + "'", x: -v.x, y: -v.y }));
    } else if (angle === 270) {
      ruleMarkup = "(x, y) ➔ (y, -x)";
      rotatedVertices = originalVertices.map(v => ({ label: v.label + "'", x: v.y, y: -v.x }));
    }

    txtRule.innerHTML = ruleMarkup;

    ctx.clearRect(0, 0, width, height);
    drawGrid();

    const isDark = document.documentElement.classList.contains('dark');
    const preImageStroke = isDark ? 'rgba(255, 177, 146, 0.4)' : '#ffb192';
    const preImageFill = isDark ? 'rgba(255, 177, 146, 0.05)' : 'rgba(226, 109, 74, 0.15)';
    const imageStroke = isDark ? '#88B0FF' : '#4A90E2';
    const imageFill = isDark ? 'rgba(136, 176, 255, 0.15)' : 'rgba(74, 144, 226, 0.15)';

    // Render shapes
    drawShape(originalVertices, preImageStroke, preImageFill, true, isDark);
    drawShape(rotatedVertices, imageStroke, imageFill, false, isDark);

    // Populate Tracking Matrix Box Log Data
    containerCoords.innerHTML = '';
    originalVertices.forEach((orig, idx) => {
      const trans = rotatedVertices[idx];
      const row = document.createElement('div');
      row.site.cssText = "display: flex; justify-content: space-between; background: var(--background-color); padding: 6px 10px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--text-color);";
      row.innerHTML = `
        <span style="color: var(--text-variant);">${orig.label}(${orig.x}, ${orig.y})</span>
        <span style="color: var(--primary-color);">➔</span>
        <span style="color: var(--accent-color); font-weight: bold;">${trans.label}(${trans.x}, ${trans.y})</span>
      `;
      containerCoords.appendChild(row);
    });
  }

  sliderAngle.addEventListener('input', renderRotationWidget);

  // Cross-hook to your existing brightness button action
  const brightnessBtn = document.getElementById('brightness');
  if (brightnessBtn) {
    brightnessBtn.addEventListener('click', () => {
      setTimeout(renderRotationWidget, 15);
    });
  }

  renderRotationWidget();
})();
// --- Integrated Geometric Reflection Widget Engine (Theme Adaptive) ---
;(function() {
  const canvas = document.getElementById('reflection-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const sliderLine = document.getElementById('ref-slider-line');
  const labelLine = document.getElementById('ref-line-val');
  const txtRule = document.getElementById('ref-rule-text');
  const containerCoords = document.getElementById('ref-coord-list');

  const gridSize = 18; 
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = width / gridSize;

  // Asymmetric pre-image triangle placed strictly in Quadrant I to clearly show reflections
  const originalVertices = [
    { label: 'A', x: 2, y: 3 },
    { label: 'B', x: 6, y: 2 },
    { label: 'C', x: 4, y: 7 }
  ];

  function toCanvasCoords(cartX, cartY) {
    return {
      x: centerX + (cartX * scale),
      y: centerY - (cartY * scale)
    };
  }

  function drawGrid() {
    ctx.lineWidth = 1;
    const halfGrid = gridSize / 2;
    
    const isDark = document.documentElement.classList.contains('dark');
    const axisColor = isDark ? '#6e707d' : 'rgb(222, 222, 236)';
    const squareColor = isDark ? '#2c2d35' : 'rgb(240, 240, 245)';

    for (let i = -halfGrid; i <= halfGrid; i++) {
      // Vertical Lines
      let posV = toCanvasCoords(i, 0);
      ctx.strokeStyle = (i === 0) ? axisColor : squareColor;
      ctx.beginPath(); ctx.moveTo(posV.x, 0); ctx.lineTo(posV.x, height); ctx.stroke();

      // Horizontal Lines
      let posH = toCanvasCoords(0, i);
      ctx.strokeStyle = (i === 0) ? axisColor : squareColor;
      ctx.beginPath(); ctx.moveTo(0, posH.y); ctx.lineTo(width, posH.y); ctx.stroke();
    }

    ctx.fillStyle = isDark ? '#8e95a5' : '#9e99aa';
    ctx.font = '10px sans-serif';
    ctx.fillText('x', width - 12, centerY - 5);
    ctx.fillText('y', centerX + 6, 12);
  }

  // Highlights the current reflection line on the coordinate plane
  function drawMirrorLine(lineType, color) {
    ctx.save();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color;
    ctx.setLineDash([6, 4, 2, 4]); // Dash-dot pattern
    ctx.beginPath();

    if (lineType === 0) { // x-axis (y = 0)
      ctx.moveTo(0, centerY); ctx.lineTo(width, centerY);
    } else if (lineType === 1) { // y-axis (x = 0)
      ctx.moveTo(centerX, 0); ctx.lineTo(centerX, height);
    } else if (lineType === 2) { // y = x
      let p1 = toCanvasCoords(-9, -9); let p2 = toCanvasCoords(9, 9);
      ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
    } else if (lineType === 3) { // y = -x
      let p1 = toCanvasCoords(-9, 9); let p2 = toCanvasCoords(9, -9);
      ctx.moveTo(p1.x, p1.y); ctx.lineTo(p2.x, p2.y);
    }
    ctx.stroke();
    ctx.restore();
  }

  function drawShape(vertices, strokeColor, fillColor, isDashed, isDark) {
    ctx.save();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.setLineDash(isDashed ? [4, 4] : []);

    ctx.beginPath();
    vertices.forEach((v, index) => {
      let canvasPos = toCanvasCoords(v.x, v.y);
      if (index === 0) ctx.moveTo(canvasPos.x, canvasPos.y);
      else ctx.lineTo(canvasPos.x, canvasPos.y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = isDark ? '#e3e2f0' : '#625c6e';
    ctx.font = 'bold 13px monospace';
    vertices.forEach(v => {
      let canvasPos = toCanvasCoords(v.x, v.y);
      let offsetX = v.x >= 0 ? 6 : -16;
      let offsetY = v.y >= 0 ? -6 : 14;
      ctx.fillText(v.label, canvasPos.x + offsetX, canvasPos.y + offsetY);
    });
  }

  function renderReflectionWidget() {
    const mode = parseInt(sliderLine.value) || 0;
    
    let lineLabel = "x-axis (y = 0)";
    let ruleMarkup = "(x, y) ➔ (x, -y)";
    let reflectedVertices = [];

    // Calculate transformations based on standard reflection proofs
    switch(mode) {
      case 0:
        lineLabel = "x-axis (y = 0)";
        ruleMarkup = "(x, y) ➔ (x, -y)";
        reflectedVertices = originalVertices.map(v => ({ label: v.label + "'", x: v.x, y: -v.y }));
        break;
      case 1:
        lineLabel = "y-axis (x = 0)";
        ruleMarkup = "(x, y) ➔ (-x, y)";
        reflectedVertices = originalVertices.map(v => ({ label: v.label + "'", x: -v.x, y: v.y }));
        break;
      case 2:
        lineLabel = "line y = x";
        ruleMarkup = "(x, y) ➔ (y, x)";
        reflectedVertices = originalVertices.map(v => ({ label: v.label + "'", x: v.y, y: v.x }));
        break;
      case 3:
        lineLabel = "line y = -x";
        ruleMarkup = "(x, y) ➔ (-y, -x)";
        reflectedVertices = originalVertices.map(v => ({ label: v.label + "'", x: -v.y, y: -v.x }));
        break;
    }

    labelLine.innerText = lineLabel;
    txtRule.innerHTML = ruleMarkup;

    ctx.clearRect(0, 0, width, height);
    drawGrid();

    const isDark = document.documentElement.classList.contains('dark');
    const preImageStroke = isDark ? 'rgba(255, 177, 146, 0.4)' : '#ffb192';
    const preImageFill = isDark ? 'rgba(255, 177, 146, 0.05)' : 'rgba(226, 109, 74, 0.15)';
    const imageStroke = isDark ? '#88B0FF' : '#4A90E2';
    const imageFill = isDark ? 'rgba(136, 176, 255, 0.15)' : 'rgba(74, 144, 226, 0.15)';
    const mirrorLineColor = isDark ? '#e3e2f0' : '#e3e2f0';

    // Render components
    drawMirrorLine(mode, mirrorLineColor);
    drawShape(originalVertices, preImageStroke, preImageFill, true, isDark);
    drawShape(reflectedVertices, imageStroke, imageFill, false, isDark);

    // Populate Tracking Matrix Log Data
    containerCoords.innerHTML = '';
    originalVertices.forEach((orig, idx) => {
      const trans = reflectedVertices[idx];
      const row = document.createElement('div');
      row.site.cssText = "display: flex; justify-content: space-between; background: var(--background-color); padding: 6px 10px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--text-color);";
      row.innerHTML = `
        <span style="color: var(--text-variant);">${orig.label}(${orig.x}, ${orig.y})</span>
        <span style="color: var(--primary-color);">➔</span>
        <span style="color: var(--accent-color); font-weight: bold;">${trans.label}(${trans.x}, ${trans.y})</span>
      `;
      containerCoords.appendChild(row);
    });
  }

  sliderLine.addEventListener('input', renderReflectionWidget);

  // Hook directly into your core theme-switch script action
  const brightnessBtn = document.getElementById('brightness');
  if (brightnessBtn) {
    brightnessBtn.addEventListener('click', () => {
      setTimeout(renderReflectionWidget, 15);
    });
  }

  renderReflectionWidget();
})();
// --- Integrated Geometric Dilation Widget Engine (Theme Adaptive) ---
;(function() {
  const canvas = document.getElementById('dilation-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const sliderScale = document.getElementById('dil-slider-scale');
  const labelScale = document.getElementById('dil-scale-val');
  const txtRule = document.getElementById('dil-rule-text');
  const containerCoords = document.getElementById('dil-coord-list');

  const gridSize = 18; 
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const scale = width / gridSize;

  // A small initial shape near the origin so it doesn't clip when multiplied by a scale factor of 3
  const originalVertices = [
    { label: 'A', x: 1, y: 1 },
    { label: 'B', x: 3, y: 1 },
    { label: 'C', x: 1, y: 3 }
  ];

  function toCanvasCoords(cartX, cartY) {
    return {
      x: centerX + (cartX * scale),
      y: centerY - (cartY * scale)
    };
  }

  function drawGrid() {
    ctx.lineWidth = 1;
    const halfGrid = gridSize / 2;
    
    const isDark = document.documentElement.classList.contains('dark');
    const axisColor = isDark ? '#6e707d' : 'rgb(222, 222, 236)';
    const squareColor = isDark ? '#2c2d35' : 'rgb(240, 240, 245)';

    for (let i = -halfGrid; i <= halfGrid; i++) {
      // Vertical Lines
      let posV = toCanvasCoords(i, 0);
      ctx.strokeStyle = (i === 0) ? axisColor : squareColor;
      ctx.beginPath(); ctx.moveTo(posV.x, 0); ctx.lineTo(posV.x, height); ctx.stroke();

      // Horizontal Lines
      let posH = toCanvasCoords(0, i);
      ctx.strokeStyle = (i === 0) ? axisColor : squareColor;
      ctx.beginPath(); ctx.moveTo(0, posH.y); ctx.lineTo(width, posH.y); ctx.stroke();
    }

    ctx.fillStyle = isDark ? '#8e95a5' : '#9e99aa';
    ctx.font = '10px sans-serif';
    ctx.fillText('x', width - 12, centerY - 5);
    ctx.fillText('y', centerX + 6, 12);
  }

  // Draws lines from center (0,0) outwards to prove projection perspective
  function drawProjectionLines(dilatedVertices, color) {
    ctx.save();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color;
    ctx.setLineDash([3, 3]);
    
    const origin = toCanvasCoords(0, 0);

    dilatedVertices.forEach(v => {
      let target = toCanvasCoords(v.x, v.y);
      ctx.beginPath();
      ctx.moveTo(origin.x, origin.y);
      ctx.lineTo(target.x, target.y);
      ctx.stroke();
    });
    ctx.restore();
  }

  function drawShape(vertices, strokeColor, fillColor, isDashed, isDark) {
    ctx.save();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.setLineDash(isDashed ? [4, 4] : []);

    ctx.beginPath();
    vertices.forEach((v, index) => {
      let canvasPos = toCanvasCoords(v.x, v.y);
      if (index === 0) ctx.moveTo(canvasPos.x, canvasPos.y);
      else ctx.lineTo(canvasPos.x, canvasPos.y);
    });
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = isDark ? '#e3e2f0' : '#625c6e';
    ctx.font = 'bold 13px monospace';
    vertices.forEach(v => {
      let canvasPos = toCanvasCoords(v.x, v.y);
      let offsetX = v.x >= 0 ? 6 : -16;
      let offsetY = v.y >= 0 ? -6 : 14;
      ctx.fillText(v.label, canvasPos.x + offsetX, canvasPos.y + offsetY);
    });
  }

  function renderDilationWidget() {
    const k = parseFloat(sliderScale.value) || 1;
    labelScale.innerText = `${k}x`;
    txtRule.innerHTML = `(x, y) ➔ (${k}x, ${k}y)`;

    ctx.clearRect(0, 0, width, height);
    drawGrid();

    // Dilation coordinate engine computation
    const dilatedVertices = originalVertices.map(v => ({
      label: v.label + "'",
      x: v.x * k,
      y: v.y * k
    }));

    const isDark = document.documentElement.classList.contains('dark');
    const preImageStroke = isDark ? 'rgba(255, 177, 146, 0.4)' : '#ffb192';
    const preImageFill = isDark ? 'rgba(255, 177, 146, 0.05)' : 'rgba(226, 109, 74, 0.15)';
    const imageStroke = isDark ? '#88B0FF' : '#4A90E2';
    const imageFill = isDark ? 'rgba(136, 176, 255, 0.15)' : 'rgba(74, 144, 226, 0.15)';
    const projectionLineColor = isDark ? 'rgba(142, 149, 165, 0.3)' : 'rgba(158, 153, 170, 0.5)';

    // Render components
    drawProjectionLines(dilatedVertices, projectionLineColor);
    drawShape(originalVertices, preImageStroke, preImageFill, true, isDark);
    drawShape(dilatedVertices, imageStroke, imageFill, false, isDark);

    // Populate Tracking Matrix Log Data
    containerCoords.innerHTML = '';
    originalVertices.forEach((orig, idx) => {
      const trans = dilatedVertices[idx];
      const row = document.createElement('div');
      row.site.cssText = "display: flex; justify-content: space-between; background: var(--background-color); padding: 6px 10px; border-radius: 4px; border: 1px solid var(--border-color); color: var(--text-color);";
      row.innerHTML = `
        <span style="color: var(--text-variant);">${orig.label}(${orig.x}, ${orig.y})</span>
        <span style="color: var(--primary-color);">➔</span>
        <span style="color: var(--accent-color); font-weight: bold;">${trans.label}(${trans.x}, ${trans.y})</span>
      `;
      containerCoords.appendChild(row);
    });
  }

  sliderScale.addEventListener('input', renderDilationWidget);

  // Hook directly into your core theme-switch script action
  const brightnessBtn = document.getElementById('brightness');
  if (brightnessBtn) {
    brightnessBtn.addEventListener('click', () => {
      setTimeout(renderDilationWidget, 15);
    });
  }

  renderDilationWidget();
})();