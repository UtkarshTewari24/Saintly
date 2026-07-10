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
//---------------------------------Actual Functions Fr 
const canvas = document.getElementById('triangleCanvas');
const ctx = canvas.getContext('2d');

let vertices = [
  { x: 250, y: 60, label: 'A' },
  { x: 110, y: 320, label: 'B' },
  { x: 390, y: 320, label: 'C' }
];

let activeLineTypes = {
  medians: true,
  altitudes: false,
  bisectors: false,
  perpendiculars: false
};

let draggedVertex = null;

function getDistance(p1, p2) {
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
}

function projectPointOnLine(p, lineStart, lineEnd) {
  const dx = lineEnd.x - lineStart.x;
  const dy = lineEnd.y - lineStart.y;
  const lenSq = dx * dx + dy * dy;
  if (lenSq === 0) return lineStart;
  const t = ((p.x - lineStart.x) * dx + (p.y - lineStart.y) * dy) / lenSq;
  return {
    x: lineStart.x + t * dx,
    y: lineStart.y + t * dy
  };
}

function lineIntersection(p1, p2, p3, p4) {
  const den = (p1.x - p2.x) * (p3.y - p4.y) - (p1.y - p2.y) * (p3.x - p4.x);
  if (Math.abs(den) < 1e-6) return null;
  const t = ((p1.x - p3.x) * (p3.y - p4.y) - (p1.y - p3.y) * (p3.x - p4.x)) / den;
  return {
    x: p1.x + t * (p2.x - p1.x),
    y: p1.y + t * (p2.y - p1.y)
  };
}

function getMousePos(canvas, evt) {
  const rect = canvas.getBoundingClientRect();
  const clientX = evt.touches ? evt.touches[0].clientX : evt.clientX;
  const clientY = evt.touches ? evt.touches[0].clientY : evt.clientY;
  return {
    x: (clientX - rect.left) * (canvas.width / rect.width),
    y: (clientY - rect.top) * (canvas.height / rect.height)
  };
}

function drawVisualizer() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Dynamic parsing of colors based on Saintly site.css active light/dark state
  const computed = getComputedStyle(document.documentElement);
  const primaryColor = computed.getPropertyValue('--primary-color').trim() || '#88B0FF';
  const accentColor = computed.getPropertyValue('--accent-color').trim() || '#88b0ff';
  const textColor = computed.getPropertyValue('--text-color').trim() || '#625c6e';
  
  const [A, B, C] = vertices;
  
  // Triangle Perimeter Outline
  ctx.beginPath();
  ctx.moveTo(A.x, A.y);
  ctx.lineTo(B.x, B.y);
  ctx.lineTo(C.x, C.y);
  ctx.closePath();
  ctx.strokeStyle = primaryColor;
  ctx.lineWidth = 3;
  ctx.stroke();
  
  // 1. Medians (Centroid G)
  if (activeLineTypes.medians) {
    const mA = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
    const mB = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
    const mC = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
    const centroid = { x: (A.x + B.x + C.x) / 3, y: (A.y + B.y + C.y) / 3 };
    
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#88b0ff';
    ctx.setLineDash([4, 4]);
    ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(mA.x, mA.y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(B.x, B.y); ctx.lineTo(mB.x, mB.y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(C.x, C.y); ctx.lineTo(mC.x, mC.y); ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.beginPath(); ctx.arc(centroid.x, centroid.y, 5, 0, Math.PI * 2); ctx.fillStyle = '#88b0ff'; ctx.fill();
    ctx.fillStyle = textColor; ctx.font = '12px "National Park"'; ctx.fillText('G (Centroid)', centroid.x + 8, centroid.y - 4);
  }
  
  // 2. Altitudes (Orthocenter H)
  if (activeLineTypes.altitudes) {
    const hA = projectPointOnLine(A, B, C);
    const hB = projectPointOnLine(B, A, C);
    const hC = projectPointOnLine(C, A, B);
    const H = lineIntersection(A, hA, B, hB) || { x: 250, y: 200 };
    
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#88b0ff';
    ctx.setLineDash([3, 3]);
    ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(hA.x, hA.y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(B.x, B.y); ctx.lineTo(hB.x, hB.y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(C.x, C.y); ctx.lineTo(hC.x, hC.y); ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.beginPath(); ctx.arc(H.x, H.y, 5, 0, Math.PI * 2); ctx.fillStyle = '#88b0ff'; ctx.fill();
    ctx.fillStyle = textColor; ctx.font = '12px "National Park"'; ctx.fillText('H (Orthocenter)', H.x + 8, H.y - 4);
  }
  
  // 3. Angle Bisectors (Incenter I)
  if (activeLineTypes.bisectors) {
    const a = getDistance(B, C);
    const b = getDistance(A, C);
    const c = getDistance(A, B);
    const sum = a + b + c;
    const I = {
      x: (a * A.x + b * B.x + c * C.x) / sum,
      y: (a * A.y + b * B.y + c * C.y) / sum
    };
    const iA = lineIntersection(A, I, B, C) || I;
    const iB = lineIntersection(B, I, A, C) || I;
    const iC = lineIntersection(C, I, A, B) || I;
    
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = '#88b0ff';
    ctx.setLineDash([5, 3]);
    ctx.beginPath(); ctx.moveTo(A.x, A.y); ctx.lineTo(iA.x, iA.y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(B.x, B.y); ctx.lineTo(iB.x, iB.y); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(C.x, C.y); ctx.lineTo(iC.x, iC.y); ctx.stroke();
    ctx.setLineDash([]);
    
    ctx.beginPath(); ctx.arc(I.x, I.y, 5, 0, Math.PI * 2); ctx.fillStyle = '#88b0ff'; ctx.fill();
    ctx.fillStyle = textColor; ctx.font = '12px "National Park"'; ctx.fillText('I (Incenter)', I.x + 8, I.y - 4);
  }
  
  // 4. Perpendicular Bisectors (Circumcenter O)
  if (activeLineTypes.perpendiculars) {
    const mA = { x: (B.x + C.x) / 2, y: (B.y + C.y) / 2 };
    const mB = { x: (A.x + C.x) / 2, y: (A.y + C.y) / 2 };
    const mC = { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
    
    const dA = { x: -(C.y - B.y), y: C.x - B.x };
    const dB = { x: -(C.y - A.y), y: C.x - A.x };
    const O = lineIntersection(mA, { x: mA.x + dA.x, y: mA.y + dA.y }, mB, { x: mB.x + dB.x, y: mB.y + dB.y }) || { x: 250, y: 220 };
    
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = accentColor;
    ctx.setLineDash([6, 4]);
    
    function extendBiLine(midPoint, circumPoint) {
      const dx = circumPoint.x - midPoint.x;
      const dy = circumPoint.y - midPoint.y;
      ctx.beginPath();
      ctx.moveTo(midPoint.x - dx * 2, midPoint.y - dy * 2);
      ctx.lineTo(midPoint.x + dx * 3, midPoint.y + dy * 3);
      ctx.stroke();
    }
    
    extendBiLine(mA, O);
    extendBiLine(mB, O);
    extendBiLine(mC, O);
    ctx.setLineDash([]);
    
    ctx.beginPath(); ctx.arc(O.x, O.y, 5, 0, Math.PI * 2); ctx.fillStyle = accentColor; ctx.fill();
    ctx.fillStyle = textColor; ctx.font = '12px "National Park"'; ctx.fillText('O (Circumcenter)', O.x + 8, O.y - 4);
  }
  
  // Interactive Vertices Handles
  vertices.forEach(v => {
    ctx.beginPath();
    ctx.arc(v.x, v.y, 8, 0, Math.PI * 2);
    ctx.fillStyle = primaryColor;
    ctx.fill();
    ctx.strokeStyle = '#88B0FF';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.fillStyle = textColor;
    ctx.font = 'bold 14px "National Park"';
    ctx.fillText(v.label, v.label === 'A' ? v.x - 5 : (v.label === 'B' ? v.x - 18 : v.x + 14), v.label === 'A' ? v.y - 14 : v.y + 5);
  });
}

// Mouse Down Event Handler
canvas.addEventListener('mousedown', e => {
  const pos = getMousePos(canvas, e);
  vertices.forEach(v => {
    if (getDistance(pos, v) < 16) {
      draggedVertex = v;
      canvas.style.cursor = 'grabbing';
    }
  });
});

// Mouse Move Event Handler
canvas.addEventListener('mousemove', e => {
  const pos = getMousePos(canvas, e);
  if (draggedVertex) {
    draggedVertex.x = Math.max(15, Math.min(canvas.width - 15, pos.x));
    draggedVertex.y = Math.max(15, Math.min(canvas.height - 15, pos.y));
    drawVisualizer();
  } else {
    let isHovering = false;
    vertices.forEach(v => {
      if (getDistance(pos, v) < 16) isHovering = true;
    });
    canvas.style.cursor = isHovering ? 'pointer' : 'grab';
  }
});

// Global Window Clear Drag Handle
window.addEventListener('mouseup', () => {
  draggedVertex = null;
  if (canvas) canvas.style.cursor = 'grab';
});

// Mobile Optimization Touch Listeners
canvas.addEventListener('touchstart', e => {
  if(e.touches.length === 1) {
    const pos = getMousePos(canvas, e);
    vertices.forEach(v => {
      if (getDistance(pos, v) < 22) {
        draggedVertex = v;
        e.preventDefault();
      }
    });
  }
}, { passive: false });

canvas.addEventListener('touchmove', e => {
  if (draggedVertex && e.touches.length === 1) {
    const pos = getMousePos(canvas, e);
    draggedVertex.x = Math.max(15, Math.min(canvas.width - 15, pos.x));
    draggedVertex.y = Math.max(15, Math.min(canvas.height - 15, pos.y));
    drawVisualizer();
    e.preventDefault();
  }
}, { passive: false });

canvas.addEventListener('touchend', () => {
  draggedVertex = null;
});

// Feature Activation UI Toggles
function hookToggle(elementId, typeKey) {
  const btn = document.getElementById(elementId);
  btn.addEventListener('click', () => {
    activeLineTypes[typeKey] = !activeLineTypes[typeKey];
    if (activeLineTypes[typeKey]) {
      btn.style.backgroundColor="#88b0ff"
      btn.style.color = '#ffffff'
    } else {
      btn.style.color = '#88b0ff';
      btn.style.backgroundColor = 'transparent';
    }
    drawVisualizer();
  });
}

hookToggle('btn-medians', 'medians');
hookToggle('btn-altitudes', 'altitudes');
hookToggle('btn-bisectors', 'bisectors');
hookToggle('btn-perpendiculars', 'perpendiculars');

// Execution init
drawVisualizer();

// Watch loop to capture dark/light mode switches via top navbar cleanly
setInterval(drawVisualizer, 400);