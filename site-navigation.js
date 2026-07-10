const navBarPlaceholder = document.getElementById("topBarPlaceholder");
const navBar = `<nav id = "top-bar">
  <a class="aContainer" href="index.html">Home</a>
  <div class="center-align">
  <button class='topBtn' onclick="window.location.href='index.html'">
  <img class="fullLogo" src="assets/branding/saintly-full-logo.png">
  </button>
  </div>
  <div class="right-align">
  <span class="material-symbols-outlined airplane helpButton" id="helpButton">

send
</span>
<span onclick="window.location.href='volunteer.html'"class="material-symbols-outlined volunteerButton">
volunteer_activism
</span>
    </div>
</nav>`
navBarPlaceholder.innerHTML = navBar;