//手機板側邊欄顯示/隱藏
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

//遊戲入口圖左右滑動
const scrollControls = document.querySelectorAll('.scroll-controls');
scrollControls.forEach(control => {
    const container = control.parentElement.nextElementSibling;
    if (!container) {
        return;
    }
    const validContainers = ['providers-logoBox', 'game-imgBox'];
    const isValidContainer = Array.from(container.classList).some(className => validContainers.includes(className));
    if (!isValidContainer) {
        return;
    }
    const leftBtn = control.querySelector('.scroll-left');
    const rightBtn = control.querySelector('.scroll-right');

    // 動態計算滑動距離（firstItem的寬度 + 間距）
    const firstItem = container.querySelector('.providers-logoimgBox') || container.querySelector('.game-entranceimgBox');
    const scrollDistance = firstItem ? firstItem.offsetWidth * 3 : 0;
    const updateButtonStates = () => {
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
});