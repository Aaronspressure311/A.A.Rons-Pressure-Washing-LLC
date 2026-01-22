console.log("A.A. Ron’s Pressure Washing App Loaded");

function showTab(tabId) {
  document.querySelectorAll("section").forEach(section => {
    section.style.display = "none";
  });

  const activeSection = document.getElementById(tabId);
  if (activeSection) {
    activeSection.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showTab("home");
});
