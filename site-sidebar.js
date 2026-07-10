import { createClient } from 'https://esm.sh/@supabase/supabase-js';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(() => {}), { once: true });
}

const supabaseURL = 'https://joevkictcfaoofqhbhgw.supabase.co';
const supabaseKey = 'sb_publishable_8Iat4psKXuFn91uT8yuw7g_2n3Buc5w';
const supabase = createClient(supabaseURL, supabaseKey);

let sidebar;
let width;

document.addEventListener('DOMContentLoaded', () => {
  // 1. Capture layout sizes precisely when the DOM structure is fully loaded
  width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  const sidebarPlaceholder = document.getElementById('sidebarPlaceholder');
  if (sidebarPlaceholder) {
    sidebarPlaceholder.innerHTML = `
      <nav id="sidebar" class="close">
        <ul>
          <li>
            <div id="sidebar-header" class='sidebar-header'>
              <button id="side-bar-toggle">
               <img src="assets/branding/saintly-icon.png" alt="Logo" class="logo">
              </button>
            </div>
          </li>
          <li>
            <a href="index.html">
              <svg xmlns="http://www.w3.org/2000/svg" class="iconsvg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
              <span class="dropdownText">Home</span>
            </a>
          </li>
          <li>
            <a href="dashboard.html" id="yourDashLink" style="display: none;">
              <span class="material-symbols-outlined iconsvg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">account_circle</span>
              <span class="dropdownText">User Profile</span> 
            </a>
            <a href="amc-10.html">
              <svg xmlns="http://www.w3.org/2000/svg" class="iconsvg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h168q13-36 43.5-58t68.5-22q38 0 68.5 22t43.5 58h168q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm80-80h280v-80H280v80Zm0-160h400v-80H280v80Zm0-160h400v-80H280v80Zm200-190q13 0 21.5-8.5T510-820q0-13-8.5-21.5T480-850q-13 0-21.5 8.5T450-820q0 13 8.5 21.5T480-790ZM200-200v-560 560Z"/></svg>
              <span class="dropdownText">AMC 10</span>
            </a>
          </li>
          <li>
            <button class="dropdown-btn" id="btn-subjects">
              <span class="dropdownText">Subjects</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M480-360 280-560h400L480-360Z"/>
              </svg>
            </button>
            <ul class="sub-menu">
              <li><a href="amc-10-algebra.html">Algebra</a></li>
              <li><a href="amc-10-geometry.html">Geometry</a></li>
              <li><a href="amc-10-number-theory.html">Number Theory</a></li>
              <li><a href="amc-10-combinatorics.html">Probability</a></li>
            </ul>
          </li>
          <li>
            <button class="dropdown-btn" id="btn-advprep">
              <span class="dropdownText">Advanced Prep</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M480-360 280-560h400L480-360Z"/>
              </svg>
            </button>
            <ul class="sub-menu">
              <li><a href="amc-10-adaptive-practice.html">Adaptive Practice</a></li>
              <li><a href="amc-10-practice-test.html">Practice Test</a></li>
            </ul>
            <a href="topics-dashboard.html">
              <span class="material-symbols-outlined iconsvg">book</span>
              <span class="dropdownText">Topics Dashboard</span>
            </a>
            <a href="partners.html">
              <span class="material-symbols-outlined">handshake</span>
              <span class="dropdownText">Our Partners</span>
            </a>
          </li>
          <li>
            <button class="dropdown-btn" id="btn-collabs">
              <span class="dropdownText">Collabs</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3">
                <path d="M480-360 280-560h400L480-360Z"/>
              </svg>
            </button>
            <ul class="sub-menu">
              <li><a href="solve-fire.html">Solvefire</a></li>
              <li><a href="yimo.html">STEMise + YIMO</a></li>
            </ul>
          </li>
          <li>
            <a class="changelogicon" href="updates.html">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#5985E1"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M11,8v5l4.25,2.52l0.77-1.28l-3.52-2.09V8H11z M21,10V3l-2.64,2.64C16.74,4.01,14.49,3,12,3c-4.97,0-9,4.03-9,9 s4.03,9,9,9s9-4.03,9-9h-2c0,3.86-3.14,7-7,7s-7-3.14-7-7s3.14-7,7-7c1.93,0,3.68,0.79,4.95,2.05L14,10H21z"/></g></g></svg>
              <span class="dropdownText">Change Log</span>
            </a>
          </li>
        </ul>
      </nav>
    `;
  }

  // 2. Safely grab references AFTER innerHTML layout injection completes
  sidebar = document.getElementById('sidebar');
  
  document.getElementById('side-bar-toggle')?.addEventListener('click', toggleSidebar);
  document.getElementById('btn-subjects')?.addEventListener('click', function() { toggleSubMenu(this); });
  document.getElementById('btn-advprep')?.addEventListener('click', function() { toggleSubMenu(this); });
  document.getElementById('btn-collabs')?.addEventListener('click', function() { toggleSubMenu(this); });

  updateMainMargin();
  updateTopBar();

  // 3. MOVED INSIDE DOMCONTENTLOADED: Run the auth state stream now that the DOM guarantees elements exist
// Run the auth state stream now that the DOM guarantees elements exist
  supabase.auth.onAuthStateChange(async (event, session) => {
    const link = document.getElementById("yourDashLink");

    if (!link) return; // Prevent console runtime errors if missing

    if (session && (event === 'SIGNED_IN' || event === 'INITIAL_SESSION')) {
      // Switch from 'block' to 'flex' to unlock alignment properties
      link.style.setProperty('display', 'flex', 'important');
      link.style.setProperty('align-items', 'center', 'important');
      // If the icon and text are glued together, add a gap matching your other links
      link.style.setProperty('gap', '5px', 'important'); 
      
      console.log("Sidebar Auth: User Session Found -> Displaying Dashboard Link");
    } else {
      link.style.setProperty('display', 'none', 'important');
      if (typeof runDiagnostic === "function") runDiagnostic();
      console.log("Sidebar Auth: User Logged Out -> Hiding Dashboard Link");
    }
  });
});

function toggleSidebar() {
  if (!sidebar) return;
  sidebar.classList.toggle('close');
  updateMainMargin();
  updateTopBar();
}

function toggleSubMenu(button) {
  const subMenu = button.nextElementSibling;
  if (subMenu) subMenu.classList.toggle('show');
  button.classList.toggle('rotate');
}

function updateMainMargin() {
  const main = document.querySelector('main');
  if (!main || !sidebar) return;

  if (sidebar.classList.contains('close')) {
    main.style.marginLeft = width > 768 ? '50px' : '30px';
    main.style.width = width > 768 ? 'calc(100% - 50px)' : 'calc(100% - 30px)';
  } else {
    main.style.marginLeft = width > 768 ? '190px' : '90px';
    main.style.width = width > 768 ? 'calc(100% - 190px)' : 'calc(100% - 90px)';
  }
}

function updateTopBar(){
  const topBar = document.getElementById('top-bar');
  if (!topBar || !sidebar) return;

  if (sidebar.classList.contains('close')) {
    topBar.style.marginLeft = width > 768 ? '50px' : '25px';
    topBar.style.width = width > 768 ? 'calc(100% - 50px)' : 'calc(100% - 25px)';
  } else {
    topBar.style.marginLeft = width > 768 ? '175px' : '80px';
    topBar.style.width = width > 768 ? 'calc(100% - 175px)' : 'calc(100% - 80px)';
  }
}
