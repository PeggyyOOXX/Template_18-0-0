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



const container = document.querySelector('.providers-logoBox');
const leftBtn = document.querySelector('.scroll-left');
const rightBtn = document.querySelector('.scroll-right');
const scrollDistance = 260 + 500;
const updateButtonStates = () => {   // 開頭/結尾時禁用按鈕
    leftBtn.disabled = container.scrollLeft <= 0;
    rightBtn.disabled = container.scrollLeft >= container.scrollWidth - container.clientWidth;
};
updateButtonStates();
leftBtn.addEventListener('click', () => {   // 向左滑動
    container.scrollLeft -= scrollDistance;
});
rightBtn.addEventListener('click', () => {   // 向右滑動
    container.scrollLeft += scrollDistance;
});
container.addEventListener('scroll', updateButtonStates);   // 監聽滾動