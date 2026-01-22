console.log("A.A. Ron’s Pressure Washing App Loaded");

function showTab(tabId) {
  document.querySelectorAll("section").forEach(section => {
    section.style.display = "none";
  });

  const active = document.getElementById(tabId);
  if (active) {
    active.style.display = "block";
  }
}

// Show Home tab when page loads
document.addEventListener("DOMContentLoaded", () => {
  showTab("home");
});
