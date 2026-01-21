console.log("A.A. Ron’s Pressure Washing App Loaded");
function showTab(tabId) {
  document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

// Show Home tab by default
showTab('home');
