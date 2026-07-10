
const { createClient } = window.supabase;
let lastPracticeStr
let loggedIn = false
let doneToday = false
let streakVar = 0
let longestStreak
const supabaseURL = 'https://joevkictcfaoofqhbhgw.supabase.co';
const supabaseKey = 'sb_publishable_8Iat4psKXuFn91uT8yuw7g_2n3Buc5w';
const supabase = createClient(supabaseURL, supabaseKey);
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const checkBtn = document.getElementById("check-btn");
const solutionDiv = document.getElementById("solution");
const solutionText = document.getElementById("solution-text");
const nextBtn = document.getElementById("next-btn");
const mcContainer = document.getElementById("mc-container");
const mcChoices = Array.from(document.querySelectorAll(".mc-choice"));
const questionChoices = document.getElementById("mc-container")
const problemsCard = document.getElementById("problems-card");
const problemsWrapper = document.getElementById("problems-card");
const confettiCanvas = document.getElementById("confetti-canvas");
const toggleBrightness = document.getElementById("brightness")
const carouselLight = document.querySelectorAll("carousel-logo-light")
const carouselDark = document.querySelectorAll("carousel-logo-dark")
const loginBtn = document.getElementById("btn-login")
let colorMode = 'light'

let colorModeTrue = localStorage.getItem("colorMode")
if  (colorModeTrue !== false){
       colorMode =  colorModeTrue
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
})

const myConfetti = confetti.create(confettiCanvas, {
    resize: true,
    useWorker: true
});
const questions = window.SaintlyQuestionBank.algebra;
const geometryQ = window.SaintlyQuestionBank.geometry;
const numTheoryQ = window.SaintlyQuestionBank.numberTheory
const probabilityQ = window.SaintlyQuestionBank.probability
const allQ = []
allQ.push(...questions)
allQ.push(...geometryQ)
allQ.push(...numTheoryQ)
allQ.push(...probabilityQ)
function getDailySeed() {
    const today = new Date();
  return parseInt(
    today.getFullYear().toString() +
    (today.getMonth() + 1).toString().padStart(2, "0") +
    today.getDate().toString().padStart(2, "0")
  );
}
function mulberry32(seed) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffleWithSeed(array, seed) {
  const rand = mulberry32(seed);
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}
function getDailyProblems(problems, count = 1) {
  const seed = getDailySeed();
  const shuffled = shuffleWithSeed(problems, seed);
  return shuffled.slice(0, count);
}
let q = 0;
function loadQuestion() {
    q = getDailyProblems(allQ)[0];
    mcChoices.forEach(btn => btn.disabled = false);


    questionTitle.innerHTML = q.title;
    questionText.innerHTML = q.text;

    solutionText.innerHTML = "";
    solutionDiv.style.display = "none";
    nextBtn.style.display = "none";

    // Reset
    answerInput.value = "";
    answerInput.style.display = "none";
    checkBtn.style.display = "none";
    mcContainer.classList.add("hidden");

    // ----- FREE RESPONSE -----
    // ----- MULTIPLE CHOICE -----
    if (q.type === "mc") {
        mcContainer.classList.remove("hidden");

        mcChoices.forEach((btn, i) => {
            btn.textContent = q.choices[i];
            btn.onclick = () => handleMCAnswer(q.choices[i]);
        });
    }
console.log(doneToday)
        if (doneToday == true){
        questionTitle.innerHTML=("You Already Did Today's Daily Problem!")
        questionText.innerHTML = ("Come back tomorrow for a new challenge!")
        questionText.style.color = "var(--accent-color)"
        checkBtn.style.display = "none";
        mcContainer.classList.add("remove")
        answerInput.style.display = "none !important"
        mcContainer.style.display = "none"
} else {
answerInput.style.display = "inline-block"   
checkBtn.style.display = "inline-block"
}
    if (window.MathJax) {
        MathJax.typesetPromise([questionText]).catch(()=>{});
        MathJax.typesetPromise([questionChoices]).catch(()=>{});
    }

}
loadQuestion()
checkBtn.addEventListener("click", function () {
        doneToday = true
const userAnswer = answerInput.value.trim();
    const correctAnswer = q.answer.trim();

            streakVar = parseInt(streakVar, 10) + 1;
        if (document.getElementById("streakText")) document.getElementById("streakText").innerHTML = streakVar + " Days";
        lastPracticeStr = String(new Date().toLocaleDateString());
        saveUserStatsToCloud()
    if (userAnswer === correctAnswer) {
        localStorage.setItem("doneToday", true);
        
        // Check if they already successfully practiced today

        solutionText.innerHTML = `<span class="material-symbols-outlined">
check
</span> Correct! ` + q.solution;

      // Existing confetti
       myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.2, y: 1 } });
        myConfetti({ particleCount: 160, spread: 200, origin: { x: 0.8, y: 1 } });



    } else if (userAnswer !== correctAnswer && solutionDiv.style.display === "none") {
        solutionText.innerHTML = `<span class="material-symbols-outlined">
close_small
</span> Incorrect. ` + q.solution;
        problemsWrapper.classList.add("shake");
        setTimeout(() => problemsWrapper.classList.remove("shake"), 400);
    }
    solutionDiv.style.display = "block";

    if (window.MathJax) {
        MathJax.typesetPromise([solutionDiv, questionText]).catch(()=>{});
    }
});
function handleMCAnswer(choice) {
    answerInput.value = choice; // reuse existing checker
    checkBtn.click();
mcChoices.forEach(btn => btn.disabled = true);
}
const privacyPolicyBtn = document.getElementById("privacyPolicyBtn")
const privacyPolicy = document.getElementById("privacyPolicy")
const termsAndConditions = document.getElementById("termsAndConditions")
      let helpOn = false;
  let helpBtn = document.getElementById('helpButton')
let accountTrue = false
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
// Example: Sending a random math problem
function myFunctionTwo(){
        termsAndConditions.style.display = "block"
        overlay.style.display = "block"
}
function myFunction(){
                privacyPolicy.style.display = "block"
                overlay.style.display = "block"
}

//-----------------------Authentication--------------------------
document.getElementById("btn-signup").addEventListener("click", async () => {
    
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;
  const username = document.getElementById("auth-username").value;
  const passwordCheck = document.getElementById("auth-password-check").value
  if (!email || !password || !username) {
    document.getElementById("signup-error").innerHTML = "Please fill out all fields"
    return
  }
  if (password === passwordCheck){
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) return alert(error.message);
  if (data.user) {
        console.log("trying")
if (doneToday === true){
        console.log('done today')
    await supabase.from('profiles').insert([
      { 
        id: data.user.id, 
        username: username, 
        streakDaily: 1,
        lastPractice: String(new Date().toLocaleDateString()),
        doneToday: true,
      }
    ]);
} else {
        console.log('not done today')
    await supabase.from('profiles').insert([
      { 
        id: data.user.id, 
        username: username, 
                streakDaily: 0,
                lastPractice: null,
                doneToday: false,
      }
    ]); 

}
    
    alert("Account created!");
    
    document.getElementById('accountPannel').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById("username-display").innerHTML = username
  }
  } else {
    document.getElementById("signup-error").innerHTML = "Passwords do not match"
    return
  }
})
async function loadUserStats(userId) {
        const streakText = document.getElementById('streakText')
        console.log("Loading user stats for user ID:", userId);
  const { data: profile, error } = await supabase
    .from('profiles')
   .select('id, username, streakDaily, lastPractice, doneToday, longestStreak')
   .eq('id', userId)

  if (error) {
    console.error("Error downloading profile data:");
    return;
  }

  if (profile) {
        if (!profile || profile.length === 0) {
    console.log("Profile row not created yet");
    return;
}
        
    let userProfile = profile[0]
    document.getElementById("username-display").innerHTML = userProfile.username
    if (streakText) streakText.innerHTML = userProfile.streakDaily + " Days"
    doneToday = userProfile.doneToday
    console.log(doneToday)
    lastPracticeStr = userProfile.lastPractice
    let newDate = String(new Date().toLocaleDateString())
    console.log(newDate)
    longestStreak = userProfile.longestStreak
    if (lastPracticeStr !== newDate) {
        console.log("New day detected, resetting daily practice status.")
        doneToday = false
        saveUserStatsToCloud() 
    }
    document.getElementById("btn-dashboard").innerHTML = userProfile.username
    loadQuestion()
  } 
}
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
  loggedIn = true
  // 3. Pull their ELO data out of the database (Step 2 below)
  await loadUserStats(data.user.id);
  
  // Reset button state
  loginBtn.disabled = false;
  loadQuestion()

})
const logoutBtn = document.getElementById('btn-logout');

logoutBtn.addEventListener('click', async () => {
  loadQuestion()
            document.getElementById("login").style.display = "block"
  // 1. Call Supabase to clear the secure cloud session
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

    // 3. Clear their specific user row from your public profiles table
    const { error: dbError } = await supabase
      .from('profiles')
      .delete()
      .eq('id', userId);

    if (dbError) {
      alert("Error erasing profile data: " + dbError.message);
      return;
    }

    await supabase.auth.signOut();

    localStorage.clear();
    loadQuestion()

    alert("Your account records and progress have been completely erased.");
    window.location.reload();
  });
}
supabase.auth.onAuthStateChange(async (event, session) => {
  const accountBtn = document.getElementById('accountBtn');
  const logoutBtn = document.getElementById('btn-logout');
  const loginBtn = document.getElementById('btn-login');
  const signup = document.getElementById('no-account');
  const login = document.getElementById('login');
  const usernameDisplay = document.getElementById("username-display");
  const createAccount = document.getElementById("no-account")
  const deleteAccount = document.getElementById("btn-delete-account")
  const streakText = document.getElementById("streakText")
  const usernameDisplayModal = document.getElementById("btn-dashboard")

  // A. Check if a secure user session actually exists
  if (session && (event === 'SIGNED_IN' || event === 'INITIAL_SESSION')) {
    console.log("Secure adaptive practice session discovered for:", session.user.email);
        loadUserStats(session.user.id)
    // Toggle UI display blocks safely
    if (logoutBtn) logoutBtn.style.display = 'block';
    if (login) login.style.display = "none";
    if (createAccount) createAccount.style.display = "none"
    if (deleteAccount) deleteAccount.style.display = "block"
    if (usernameDisplayModal) usernameDisplayModal.style.display = "block"

    // 1. Fetch cloud records safely using correct lowercase columns
   
document.getElementById("streakText").innerHTML = streakVar + "Days"  
  } else  {
    console.log("No user session found. Reverting adaptive practice to Guest defaults.");

    
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (login) login.style.display = "block";
    if (usernameDisplay) usernameDisplay.innerHTML = "Log In";
    if (createAccount) createAccount.style.display = "block"
    if (deleteAccount) deleteAccount.style.display = "none"
    if (usernameDisplayModal) usernameDisplayModal.style.display = "none"
    // Reset runtime math parameters back to baseline
streakVar = 0
lastPracticeStr = null
doneToday = false
if (streakText) streakText.innerHTML = "Log In To Track Your Streak!"  
  
  }
});
  async function saveUserStatsToCloud() {
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  if (sessionError || !session) {
    return
  }
  if (streakVar > longestStreak){
  const userId = session.user.id;
  const { data, error } = await supabase
    .from('profiles')
    .update({
        streakDaily: streakVar,
        lastPractice: lastPracticeStr,
        doneToday: doneToday,
        longestStreak: streakVar
    })
    .eq('id', userId)

  if (error) {
    console.error("Failed to sync stats to cloud database:", error.message);
  }
  } else {
  const userId = session.user.id;
  const { data, error } = await supabase
    .from('profiles')
    .update({
        streakDaily: streakVar,
        lastPractice: lastPracticeStr,
        doneToday: doneToday
    })
    .eq('id', userId)

  if (error) {
    console.error("Failed to sync stats to cloud database:", error.message);
  }
  }


}
function reset() {
        const d1 = new Date(lastPracticeStr)
        const d2 = new Date(new Date().toLocaleDateString())
          const diffMs = Math.abs(d2 - d1);
  const oneDayMs = 24 * 60 * 60 * 1000;

  return diffMs > oneDayMs;
}
if (reset() === true){
        streakVar = 0
}
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