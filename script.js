const panels = document.querySelectorAll(".panel");
// If we only use querySelector it will select the first one and ignore rest
// Once we use querySelectorAll it brings all panels into node list - Array

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
