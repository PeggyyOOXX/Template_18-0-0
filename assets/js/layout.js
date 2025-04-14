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

    const firstItem = container.querySelector('.providers-logoimgBox') || container.querySelector('.game-entranceimgBox');   // 動態計算滑動距離
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



//favoritesicon點擊添加/移除active
const favoriteIcons = document.querySelectorAll('.favoritesicon');
favoriteIcons.forEach(icon => {
    icon.addEventListener('click', () => {
        icon.classList.toggle('active');
    });
});



//header點擊顯示/隱藏細節
const buttons = {
    'btn-notify': document.querySelector('.notify-popupBox'),
    'btn-player': document.querySelector('.player-popupBox'),
    'btn-gamewallet': document.querySelector('.gamewallet-popupBox')
};
const allPopups = Object.values(buttons);

function hideAllPopups() {
    allPopups.forEach(popup => {
        popup.style.display = 'none';
    });
}

Object.keys(buttons).forEach(buttonClass => {   // 各別按鈕綁定事件
    const button = document.querySelector(`.${buttonClass}`);
    const popup = buttons[buttonClass];
    if (button && popup) {
        button.addEventListener('click', () => {
            if (popup.style.display === 'none') {
                hideAllPopups();
                popup.style.display = 'block';
            } else {
                popup.style.display = 'none';
            }
        });
    }
});



//登入註冊頁面-彈窗連結
const lrallPopups = document.querySelectorAll('.loginregister-popupBox');
const resetpasswordBox = document.querySelector('.resetpasswordBox');
const registerBox = document.querySelector('.registerBox');
const loginBox = document.querySelector('.loginBox');
const enterotpBox = document.querySelector('.enterotpBox');
const newpasswordBox = document.querySelector('.newpasswordBox');
const resetsuccessBox = document.querySelector('.resetsuccessBox');

const forgotLink = document.querySelector('.lr-inputforgot');
const directionsloginLink = document.querySelector('.lr-directionslogin');
const registerButton = document.querySelector('.btn-lr-register');
const sendotpButton = document.querySelector('.btn-sendotp');
const verifyotpButton = document.querySelector('.btn-verifyotp');
const resetpwButton = document.querySelector('.btn-resetpw');
const loginnowButton = document.querySelector('.btn-loginnow');
const backButton = document.querySelectorAll('.btn-arrow');

let historyStack = [];   // 追蹤彈窗歷史
function hidelrAllPopups() {   // 隱藏所有彈窗
    lrallPopups.forEach(popup => {
        popup.style.display = 'none';
    });
}
function showPopup(popup) {   // 顯示彈窗並記錄到歷史
    hidelrAllPopups();
    popup.style.display = 'block';
    if (historyStack[historyStack.length - 1] !== popup) {
        historyStack.push(popup);
    }
}
function goBack() {   // 返回上一個彈窗
    if (historyStack.length > 1) {
        historyStack.pop();
        const previousPopup = historyStack[historyStack.length - 1];
        hidelrAllPopups();
        previousPopup.style.display = 'block';
    }
}

forgotLink.addEventListener('click', () => {   // 點擊ForgotPW
    showPopup(resetpasswordBox);
});
registerButton.addEventListener('click', () => {   // 點擊btn-RegisterNow
    showPopup(registerBox);
});
directionsloginLink.addEventListener('click', () => {   // 點擊LoginNow
    showPopup(loginBox);
});
sendotpButton.addEventListener('click', () => {   // 點擊btn-SendOTP
    showPopup(enterotpBox);
});
verifyotpButton.addEventListener('click', () => {   // 點擊btn-VerifyOTP
    showPopup(newpasswordBox);
});
resetpwButton.addEventListener('click', () => {   // 點擊btn-Reset password
    showPopup(resetsuccessBox);
});
loginnowButton.addEventListener('click', () => {   // 點擊btn-Login now
    showPopup(loginBox);
});
backButton.forEach(button => {   // 點擊返回箭頭
    button.addEventListener('click', () => {
        goBack();
    });
});

showPopup(loginBox);   // 初始化並加入歷史




