const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".sidebar-overlay");
const toggleBtn = document.querySelector(".toggle-sidebar");
const sidebarButtons = document.querySelectorAll(".sidebar .pagelink-button");
toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("show");
});
overlay.addEventListener("click", () => {
    sidebar.classList.remove("show");
});
sidebarButtons.forEach(button => {
    button.addEventListener("click", () => {
      sidebar.classList.remove("show");
    });
  });