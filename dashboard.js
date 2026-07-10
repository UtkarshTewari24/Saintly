
const questions = window.SaintlyQuestionBank.algebra;
const geometryQ = window.SaintlyQuestionBank.geometry
const numTheoryQ = window.SaintlyQuestionBank.numberTheory
const probabilityQ = window.SaintlyQuestionBank.probability
let perTopic = []
let index = 0
const hintBtn = document.getElementById("hintBtn")
const seeStep = document.getElementById("seeStep")
const hintText = document.getElementById("hint")
const stepOne = document.getElementById("stepOne")
const stepOneText = document.getElementById("stepOneText")
const strikeOne = document.getElementById("strikeOne")
const strikeTwo = document.getElementById("strikeTwo")
const strikeThree = document.getElementById("strikeThree")
const strikesContainer = document.getElementById("strikesContainer")
const solutionDiv = document.getElementById("solution");
const solutionText = document.getElementById("solution-text");
const nextBtn = document.getElementById("next-btn");
let strikes  = 2
// ---------- Start ----------
let userRating = 1200
let userRatingGeometry = 1200
let userRatingProbability = 1200
let userRatingNumTheory= 1200
let userRatingAll = 1200
const toggleBrightness = document.getElementById("brightness")
let colorMode = 'light'
let diagnosticCorrect = 0
let diagnosticAlgebraTotal = 1
let diagnosticGeometryTotal = 1
let diagnosticNumTheoryTotal = 1
let diagnosticProbabilityTotal = 1
let diagnosticAlgebraCorrect = 0
let diagnosticGeometryCorrect= 0
let diagnosticNumTheoryCorrect= 0
let diagnosticProbabilityCorrect = 0
let colorModeTrue = localStorage.getItem("colorMode")
let textColor = "#e3e2f0"
let algebraTotal = 0
let geometryTotal = 0
let numTotal = 0
let probTotal = 0
let algebraWrong = 0
let geometryWrong = 0
let numWrong = 0
let probWrong = 0
let TOPIC_GLOSSARY = []
let TOPIC_GLOSSARY_SOLVEFIRE = []
let TOPIC_GLOSSARY_YIMO = []
let backgroundColor = "rgb(253, 253, 255)"
if  (colorModeTrue !== false){
       colorMode =  colorModeTrue
 if (colorMode === 'dark'){
                colorMode = 'dark';
                document.documentElement.style.colorScheme = 'dark'; 
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                toggleBrightness.textContent = "sunny"
                localStorage.setItem("colorMode", "dark")
                textColor = "#e3e2f0"
                backgroundColor = "#222329"

        } else {
                colorMode = 'light';
                document.documentElement.style.colorScheme = 'light';
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
                toggleBrightness.textContent = "bedtime"
                localStorage.setItem("colorMode", "light")
                textColor = "#625c6e"
                backgroundColor = "rgb(253, 253, 255)"
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
      textColor = "#e3e2f0"
  } else {
      root.classList.add('light');
      root.classList.remove('dark');
      textColor = "#625c6e"
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
                textColor = "#625c6e"
                backgroundColor="rgb(253, 253, 255)"
                updateRadarChart()
                updateBarGraph()
        } else {
                colorMode = 'dark';
                document.documentElement.style.colorScheme = 'dark';
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                toggleBrightness.textContent = "sunny"
                localStorage.setItem("colorMode", colorMode)
                textColor = "#e3e2f0"
                backgroundColor = "#222329"
                updateRadarChart()
                updateBarGraph()
        }
});
// Gets the live computed color string from your CSS :root

function getThemeColor(variableName) {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
}
let usernameStr = ""
let totalAttempts = 0
let totalWrong = 0
let averageAccuracy = 0
let mistake = 0
let unfamiliar = 0
let stuck = 0
const helpPannel = document.getElementById("helpPannel")
const { createClient } = window.supabase;
const supabaseURL = 'https://joevkictcfaoofqhbhgw.supabase.co';
const supabaseKey = 'sb_publishable_8Iat4psKXuFn91uT8yuw7g_2n3Buc5w';
const supabase = createClient(supabaseURL, supabaseKey);
      let helpOn = false;
  let helpBtn = document.getElementById('helpButton')
let accountTrue = false
let accountBtn = document.getElementById("accountBtn")
let accountPannel = document.getElementById("accountPannel")
let overlay = document.getElementById("overlay")
accountBtn.addEventListener("click", function () {
        let account = true

    document.getElementById("no-account").addEventListener("click", function() {
    if (account === false){
        account = true
        document.getElementById("login").style.display = "block"
        document.getElementById("signup").style.display = "none"
                document.getElementById("no-account").innerHTML = "Don't have an account? Sign up!"
    } else {
        document.getElementById('login').style.display = "none"
        account = false
        document.getElementById("signup").style.display = "block"
        document.getElementById("no-account").innerHTML = "Already have an account? Log in!"
    }
    })
    helpPannel.style.display  = "none"
    if (accountTrue === false){
        accountPannel.style.display = "block"
        overlay.style.display = "block"
        accountTrue = true
    } else {
        accountPannel.style.display = "none"
        overlay.style.display = "none"
        accountTrue = false
    }
})
overlay.addEventListener("click", function(){
    if (helpOn === true){
        helpPannel.style.display = "none";
        overlay.style.display = "none"; 
        helpOn = false;
    } 
    if (accountTrue === true){
        accountPannel.style.display = "none"
        overlay.style.display = "none"
        accountTrue = false
    }
})
helpBtn.addEventListener("click", function () {
    if (helpOn === true){
        helpPannel.style.display = "none";
        overlay.style.display = "none"; 
        helpOn = false;
    } else {
        helpPannel.style.display = "block";
        overlay.style.display = "block";
        helpOn = true
    }
});
//-----------------------Authentication--------------------------
document.getElementById("btn-signup").addEventListener("click", async () => {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  const username = document.getElementById("auth-username").value;
  const checkPassword = document.getElementById("auth-password-check").value
  if (!email || !password || !username) {
    document.getElementById("signup-error").innerHTML = "Please fill out all fields"
    return;
  }
    if (password === checkPassword) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return alert(error.message);
  if (data.user) {
    await supabase.from('profiles').insert([
      { 
        id: data.user.id, 
        username: username, 
      }
    ]);
    
    alert("Account created!");
    
    document.getElementById('accountPannel').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById("username-display").innerHTML = username
  }
  } else {
    document.getElementById("signup-error").innerHTML = "Passwords do not match"
  }
});
async function loadUserStats(userId) {
  const { data: profile, error } = await supabase
    .from('profiles')
   .select('id, username, probabilityIndex, algebraIndex, numTheoryIndex, geometryIndex, algebraTotal, geometryTotal, numTotal, probTotal, algebraWrong, geometryWrong, numWrong, probWrong, algebraTotalSolvefire, geometryTotalSolvefire, numTotalSolvefire, probTotalSolvefire, algebraWrongSolvefire, geometryWrongSolvefire, numWrongSolvefire, probWrongSolvefire, algebraTotalYimo, geometryTotalYimo, numTotalYimo, probTotalYimo, algebraWrongYimo, geometryWrongYimo, numWrongYimo, probWrongYimo, longestStreak, elo, mistake, unfamiliar, stuck, mistakeSolvefire, unfamiliarSolvefire, stuckSolvefire, mistakeYimo, unfamiliarYimo, stuckYimo, TOPICGLOSSARY, TOPICGLOSSARYSolvefire, TOPICGLOSSARYYimo')
   .eq('id', userId)

  if (error) {
    console.error("Error downloading profile data:");
    return;
  }

  if (profile) {
    let userProfile = profile[0]
    totalAttempts = userProfile.algebraTotal + userProfile.geometryTotal + userProfile.numTotal + userProfile.probTotal + userProfile.algebraTotalSolvefire + userProfile.geometryTotalSolvefire + userProfile.numTotalSolvefire + userProfile.probTotalSolvefire + userProfile.algebraTotalYimo + userProfile.geometryTotalYimo + userProfile.numTotalYimo + userProfile.probTotalYimo || 0
    totalWrong = userProfile.algebraWrong + userProfile.geometryWrong + userProfile.numWrong + userProfile.probWrong + userProfile.algebraWrongSolvefire + userProfile.geometryWrongSolvefire + userProfile.numWrongSolvefire + userProfile.probWrongSolvefire + userProfile.algebraWrongYimo + userProfile.geometryWrongYimo + userProfile.numWrongYimo + userProfile.probWrongYimo || 0
    averageAccuracy = totalAttempts > 0 ? Math.round(((totalAttempts - totalWrong) / totalAttempts) * 100) : 0
    usernameStr = userProfile.username
    mistake = userProfile.mistake + userProfile.mistakeSolvefire + userProfile.mistakeYimo
    unfamiliar = userProfile.unfamiliar + userProfile.unfamiliarSolvefire + userProfile.unfamiliarYimo
    stuck = userProfile.stuck + userProfile.stuckSolvefire + userProfile.stuckYimo
    document.getElementById("longestStreak").innerHTML = `${userProfile.longestStreak} Days`
    document.getElementById("username-display").innerHTML = userProfile.username
    document.getElementById('avgAccuracy').innerHTML = `${averageAccuracy}%`
    document.getElementById('questionsSolved').innerHTML = `${totalAttempts}`
    document.getElementById("title").innerHTML = `${userProfile.username}'s Dashboard`
    document.getElementById("eloRating").innerHTML = `${userProfile.elo}`
    algebraTotal = userProfile.algebraTotal + userProfile.algebraTotalSolvefire + userProfile.algebraTotalYimo
    geometryTotal = userProfile.geometryTotal + userProfile.geometryTotalSolvefire + userProfile.geometryTotalYimo
    numTotal = userProfile.numTotal + userProfile.numTotalSolvefire + userProfile.numTotalYimo
    probTotal = userProfile.probTotal + userProfile.probTotalSolvefire + userProfile.probTotalYimo
    algebraWrong = userProfile.algebraWrong + userProfile.algebraWrongSolvefire + userProfile.algebraWrongYimo
    geometryWrong = userProfile.geometryWrong + userProfile.geometryWrongSolvefire + userProfile.geometryWrongYimo
    numWrong = userProfile.numWrong + userProfile.numWrongSolvefire + userProfile.numWrongYimo
    probWrong = userProfile.probWrong + userProfile.probWrongSolvefire + userProfile.probWrongYimo
    TOPIC_GLOSSARY = userProfile.TOPICGLOSSARY || [];
    TOPIC_GLOSSARY_YIMO = userProfile.TOPICGLOSSARYYimo || [];
    TOPIC_GLOSSARY_SOLVEFIRE = userProfile.TOPICGLOSSARYSolvefire || [];
    document.getElementById('btn-dashboard').innerHTML = userProfile.username
    
  } 
  updateBarGraph()
  updateRadarChart()
  updatePieChart()
}
const loginBtn = document.getElementById("btn-login");
loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("login-email").value.trim()
    const password = document.getElementById("login-password").value
    if (!email || !password) {
        
document.getElementById("login-error").innerHTML = "Please Input Both Fields"
    return;
  }
  loginBtn.disabled = true;
const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    alert("Login Error: " + error.message);
    loginBtn.disabled = false;
    loginBtn.innerText = "Login";
    return;
  }
  document.getElementById('accountPannel').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
  accountTrue = false
  await loadUserStats(data.user.id);
  loginBtn.disabled = false;
})
const logoutBtn = document.getElementById('btn-logout');

logoutBtn.addEventListener('click', async () => {
            document.getElementById("login").style.display = "block"
  const { error } = await supabase.auth.signOut();
  if (error) {
    alert("Error logging out: " + error.message);
    return;
  }
  alert("You have been logged out successfully!");
  window.location.reload();
});

const deleteAccountBtn = document.getElementById('btn-delete-account');

if (deleteAccountBtn) {
  deleteAccountBtn.addEventListener('click', async () => {
    const confirmed = confirm("Are you absolutely sure you want to delete your account? This will permanently erase your math rankings, diagnostic logs, and history. This action cannot be undone.");
    if (!confirmed) return;
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const userId = session.user.id;
    const { error: dbError } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId);
    if (dbError) {
      alert("Error erasing profile data: " + dbError.message);
      return;
    }
    await supabase.auth.signOut();
    alert("Your account records and progress have been completely erased.");
    window.location.reload();
  });
}

document.getElementById("btn-signup").addEventListener("click", async () => {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  const username = document.getElementById("auth-username").value;
  if (!email || !password || !username) {
    document.getElementById("signup-error").innerHTML = "Please fill out all fields"
    return;
  }
  const { data, error } = await supabase.auth.signUp({ email, password })
  if (error) return alert(error.message);
  if (data.user) { 
    await supabase.from('profiles').insert([
      { 
        id: data.user.id, 
        username: username, 
      }
    ]);
    alert("Account created!");
    document.getElementById('accountPannel').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById("username-display").innerHTML = username
  }
})
supabase.auth.onAuthStateChange(async (event, session) => {
  const accountBtn = document.getElementById('accountBtn');
  const logoutBtn = document.getElementById('btn-logout');
  const loginBtn = document.getElementById('btn-login');
  const signup = document.getElementById('no-account');
  const login = document.getElementById('login');
  const usernameDisplay = document.getElementById("username-display");
  const createAccount = document.getElementById("no-account")
  const deleteAccount = document.getElementById("btn-delete-account")
  const usernameDisplayModal = document.getElementById("btn-dashboard")
  if (session && (event === 'SIGNED_IN' || event === 'INITIAL_SESSION')) {
    if (logoutBtn) logoutBtn.style.display = 'block';
    if (login) login.style.display = "none";
    if (createAccount) createAccount.style.display = "none"
    if (deleteAccount) deleteAccount.style.display = "block"
    if (usernameDisplayModal) usernameDisplayModal.style.display = "block" 
  const { data: profile, error } = await supabase
loadUserStats(session.user.id)
loadUserPercentileBadges(session.user.id)


  } else  {

    if (logoutBtn) logoutBtn.style.display = 'none';
    if (login) login.style.display = "block";
    if (usernameDisplay) usernameDisplay.innerHTML = "Log In";
    if (createAccount) createAccount.style.display = "block"
    if (deleteAccount) deleteAccount.style.display = "none"
    if (usernameDisplayModal) usernameDisplayModal.style.display = "none" 

  }
});

let myChart = null
function updateBarGraph() {
    const xValues = ["Unfamiliar With Topic", "Stuck / Reached Dead End", "Arithmetic Issue"];
    const yValues = [unfamiliar, stuck, mistake];
    const barColors = ["#88B0FF", "#88B0FF", "#88B0FF"];
    const ctx = document.getElementById("barChart");
    myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: xValues,
            datasets: [{
                backgroundColor: barColors,
                data: yValues,
                borderRadius: 6 // Optional: makes it look more "Saintly"
            }]
        },
        options: {
            responsive: true,
scales: {
                x: {
                    grid: { color: textColor }, // Dynamic gridlines
                    ticks: { color: textColor } // Dynamic label text
                },
                y: {
                    grid: { color: textColor },
                    ticks: { color: textColor }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}
let myRadarChart = null
function updateRadarChart(){
                    const data = {
        labels: 
        ["Algebra", "Geometry", "Number Theory", "Probability"],
        datasets: [{label: "Incorrect", 
            data: [algebraWrong, geometryWrong, numWrong, probWrong], borderColor: '#ffb192', backgroundColor: '#fff0eb'
        },
        {label: "Attempted", 
            data: [algebraTotal, geometryTotal, numTotal, probTotal], borderColor: '#88B0FF', backgroundColor: '#ebf3ff'
        },
]

    }
            if (colorMode  === 'dark'){
                const data = {
        labels: 
        ["Algebra", "Geometry", "Number Theory", "Probability"],
        datasets: [{label: "Incorrect", 
            data: [algebraWrong, geometryWrong, numWrong, probWrong], borderColor: '#ffb192', backgroundColor: '#fff0eb'
        },
        {label: "Attempted", 
            data: [algebraTotal, geometryTotal, numTotal, probTotal], borderColor: '#88B0FF', backgroundColor: '#88B0FF'
        },
]
        }      
        }

if (myRadarChart) {
        myRadarChart.destroy();
    }

    // 3. Create the chart
    const ctx = document.getElementById('radarChart').getContext('2d');
    myRadarChart = new Chart(ctx, {
        type: 'radar',
        data: data,
 options: {
    scales: {
      r: {
        // 1. Change color of the category labels (e.g., "Speed", "Strength")
        pointLabels: {
          color: textColor, 
          font: {
            size: 14
          }
        },
        // 2. Change color of the numbers on the radial axis
        ticks: {
          color: textColor,
          showLabelBackdrop: false,

        }
      }
    },
    plugins: {
      // 3. Change color of the legend text
      legend: {
        labels: {
          color: textColor
        }
      }
    }
  }

    })
}
let pieChart = null;

function updatePieChart() {
    if (pieChart) {
        pieChart.destroy();
    }

    const ctx = document.getElementById("pieChart");
    if (!ctx) return; // Guard clause in case the element isn't on the current page

    // 1. Create a dictionary to accumulate errors: { topicId: { name: "...", errors: X } }
    const combinedData = [];

    // 2. Helper function to cleanly parse and merge any glossary array
    function mergeGlossary(glossaryArray) {
        if (!Array.isArray(glossaryArray)) return;
        glossaryArray.forEach(topic => {
            if (topic && topic.id) {
                const topicId = topic.id;
                const topicName = topic.name || topicId;
                const errorCount = parseInt(topic.errors, 10) || 0;
                if ((combinedData.every(user => user.name !== topicId) == true)) {
                  let push = {name: `${topicId}`,
                errors: 0}
                combinedData.push(push)
                }
                combinedData[combinedData.length - 1].errors += errorCount;
            }
        });
    }
    mergeGlossary(TOPIC_GLOSSARY)
    mergeGlossary(TOPIC_GLOSSARY_YIMO)
    mergeGlossary(TOPIC_GLOSSARY_SOLVEFIRE)
    let xValues = []
    let yValues = []
    Object.keys(combinedData).forEach(topicId => {
        const item = combinedData[topicId];
        if (item.errors > 0) {
            xValues.push(item.name);
            yValues.push(item.errors);
        }
    });
    if (xValues.length === 0) {
        return;
    }
pieChart = new Chart("pieChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      data: yValues,
      backgroundColor: ["#88B0FF", "#c7deff", "#FFB192", "#ffd0c0"],
      borderColor: backgroundColor
    }]
  },
options: {
    plugins: {
      legend: {
        labels: {
          color: textColor
        }
      }
    }
  }
});
let max = 0
let worstTopic = ""
console.log(combinedData)
combinedData.forEach(i => {
  if (i.errors > 0){
    worstTopic = i.name
  }
})
let allQ = []
allQ.push(...questions)
allQ.push(...geometryQ)
allQ.push(...numTheoryQ)
allQ.push(...probabilityQ)
console.log(allQ)
allQ.forEach(i => {
  if (i.topic === worstTopic){
    perTopic.push(i)
  }
})
document.getElementById('prevErrorText').innerHTML = worstTopic
console.log(perTopic)
console.log(max)
console.log(worstTopic)
shuffleArray(perTopic)
loadQuestion()
}
function loadQuestion() {
      stepOne.style.display = "none"
    hintBtn.style.display = "none"
    hintText.style.display = "none"
    seeStep.style.display = "none"
  strikes = 2
  let problem = perTopic[index]
  document.getElementById("question-title").innerHTML = problem.title
  document.getElementById("question-text").innerHTML = problem.text
      if (window.MathJax) {
        MathJax.typesetPromise([document.getElementById('question-title')]).catch(()=>{});
        MathJax.typesetPromise([document.getElementById('question-text')]).catch(()=>{});
    }
}

document.getElementById("check-btn").addEventListener('click', function() {
    const userAnswer = document.getElementById("answer-input").value.trim();
    const correctAnswer = perTopic[index].answer.trim();
    if (userAnswer === correctAnswer && nextBtn.style.display==="none") {
            nextBtn.style.display = "inline-block";
    stepOne.style.display = "none"
    hintBtn.style.display = "none"
    hintText.style.display = "none"
    seeStep.style.display = "none"
        solutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + perTopic[index].solution;
                solutionDiv.style.display = "block";
    solutionText.style.display = "block"
    nextBtn.style.display = "inline-block";
    } else if (userAnswer !== correctAnswer && nextBtn.style.display === "none") {
        if (strikes ==  2){
                hintBtn.innerHTML  = "Show Hint"
        strikeOne.style.color = "var(--primary-color) !important"
        hintBtn.style.display = "inline"

        document.getElementById("problems-card").classList.add("shake");
        setTimeout(() => document.getElementById("problems-card").classList.remove("shake"), 400);
        strikes -= 1
    } else  if (strikes === 1){
        seeStep.style.display = "inline"
        strikeTwo.style.color = "var(--primary-color) !important"
        strikes -= 1
    } else {
        strikeThree.style.color = "var(--primary-color) !important"
            solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect` + perTopic[index].solution
                solutionDiv.style.display = "block";
    solutionText.style.display = "block"
    nextBtn.style.display = "inline-block";
    stepOne.style.display = "none"
    hintBtn.style.display = "none"
    hintText.style.display = "none"
    seeStep.style.display = "none"
}

    }
    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, document.getElementById("question-text")]).catch(()=>{});
    }
})

hintBtn.addEventListener("click", function(){
        if (hintText.style.display === "none"){
                hintText.style.display = "block"
                hintBtn.innerHTML = "Hide Hint"
             hintText.innerHTML = perTopic[index].hint
                MathJax.typesetPromise([hintText]);
        } else {
                hintText.style.display = "none"
                hintBtn.innerHTML = "Show Hint"
        }
})
seeStep.addEventListener("click", function() {
        if (stepOne.style.display === "none"){
                stepOne.style.display = "block"
                seeStep.innerHTML = "Hide First Step"
             stepOne.innerHTML = perTopic[index].step
                MathJax.typesetPromise([stepOne]);
        } else {
                stepOne.style.display = "none"
                seeStep.innerHTML = "See The First Step"
        }        
})
nextBtn.addEventListener("click", function() {
  if (index < (perTopic.length - 1)) {
    index += 1
  } else {
    index = 0
    shuffleArray(perTopic)
  }
  loadQuestion()
  solutionDiv.style.display = "none"
  hintText.style.display = "none"
  hintBtn.style.display = "none"
  seeStep.style.display = "none"
  stepOne.style.display = "none"
})
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 1. Fetch data for the global top-10 leaderboard display board
async function loadGlobalLeaderboard() {
    const { data: topUsers, error } = await supabase
        .from('profiles')
        .select('id, elo, algebraTotal, geometryTotal, numTotal, probTotal,username')
        .order('elo', { ascending: false }) // Sort highest Elo down
        .limit(10); // Grab top 10 performers

    if (error) {
        console.error("Leaderboard load crash:", error.message);
        return;
    }
document.getElementById("leaderboardTitleOne").innerHTML = topUsers[0].username
document.getElementById("percentOne").innerHTML = topUsers[0].elo
document.getElementById("leaderboardTitleTwo").innerHTML = topUsers[1].username
document.getElementById("percentTwo").innerHTML = topUsers[1].elo
document.getElementById("leaderboardTitleThree").innerHTML = topUsers[2].username
document.getElementById("percentThree").innerHTML = topUsers[2].elo
document.getElementById("leaderboardTitleFour").innerHTML = topUsers[3].username
document.getElementById("percentFour").innerHTML = topUsers[3].elo
document.getElementById("leaderboardTitleFive").innerHTML = topUsers[5].username
document.getElementById("percentFive").innerHTML = topUsers[5].elo
}

// 2. Fetch the current logged-in user's exact percentile statistics
async function loadUserPercentileBadges(userId) {
    const { data, error } = await supabase
        .rpc('get_user_percentiles', { target_user_id: userId });

    if (error || !data || data.length === 0) {
        console.error("Failed calculating telemetry percentiles:", error);
        return;
    }

    const stats = data[0];
    
    // Inject custom percentile badges directly into your analytics dashboard markup
    const eloBadge = document.getElementById("elo-percentile-text");
    const problemBadge = document.getElementById("problem-percentile-text");
    const streakBadge = document.getElementById("streak-percentile-text")
    const averageBadge = document.getElementById("average-percentile-text")

    if (eloBadge) {
        eloBadge.innerHTML = ` <p>${stats.elo_top_percentile}th percentile</p> Rank #${stats.elo_rank} globally`;
        eloBadge.style.textAlign = "center"
    }
    if (problemBadge) {
        problemBadge.innerHTML = `<p>${stats.problems_top_percentile}th percentile </p>Rank #${stats.problems_rank} globally`;
        problemBadge.style.textAlign = "center"
    }
    if (streakBadge) {
        streakBadge.innerHTML = `<p>${stats.streak_top_percentile}th percentile </p>Rank #${stats.streak_rank} globally`;
        streakBadge.style.textAlign = "center"
    }
    if (averageBadge){
        averageBadge.innerHTML = `<p>${stats.accuracy_top_percentile}th percentile </p>Rank #${stats.accuracy_rank} globally`
        averageBadge.style.textAlign = "center"
    }
}
loadGlobalLeaderboard()
const resetBtn = document.getElementById("btn-request-reset");

if (resetBtn) {
  resetBtn.addEventListener("click", async () => {
    const email = document.getElementById("login-email").value;

    if (!email) {
      alert("Please enter your email address first.");
      return;
    }

    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.origin + '/update-password.html',
    });

    if (error) {
      console.error("Reset request failed:", error.message);
      alert("Error: " + error.message);
    } else {
      alert("Check your inbox! A secure password reset link has been sent.");
    }
  });
}