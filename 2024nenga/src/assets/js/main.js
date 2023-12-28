/* --------- 　ここから編集禁止  ------------- */
console.info(
  "\n %c Orelop Static - https://github.com/hilosiva/orelop-static \n",
  "color: #66ffa5; background: #001010; padding:8px 0;"
);
import.meta.glob(["../img/**"]);
/* --------- 　ここまで編集禁止  ------------- */

/* -----------------------------------------------------
FVアニメーション
------------------------------------------------------ */
const messageTitle = document.getElementById("js_messageTitle");
const animationTitle = document.getElementById("js_animationTitleText");
const animationText = document.getElementById("js_text");
const mizuhikiAnimations = document.querySelectorAll(".js_mizuhiki");

mizuhikiAnimations.forEach(mizuhikiAnimation => {
    mizuhikiAnimation.addEventListener("animationend", () => {
      animationTitle.classList.add("is_show");
    });
});


setTimeout(() => {
  animationText.classList.add("is_show");
}, 6000);

window.addEventListener("load", ()=> {
  messageTitle.classList.add("is_show");
});

/* -----------------------------------------------------
タブメニュー
------------------------------------------------------ */
const tabBtns = document.querySelectorAll(".js_tab_btn");
const tabPanels = document.querySelectorAll(".js_tab_panel");

tabBtns.forEach((tabBtn) => {
  tabBtn.addEventListener("click", () => {
    // クリックされた時に属性値をリセットする
    tabBtns.forEach((tabBtn) => {
      tabBtn.classList.remove("is_select");
      tabBtn.setAttribute("aria-selected", false);
      tabBtn.tabIndex = -1;
    });

    // クリックされたボタンの属性値を切り替える
    tabBtn.classList.toggle("is_select");
    tabBtn.setAttribute("aria-selected", true);
    tabBtn.tabIndex = 0;

    tabPanels.forEach((tabPanel) => {
      const tabBtnId = tabBtn.id;
      const tabPanelbel = tabPanel.getAttribute("aria-labelledby");

      if (tabBtnId === tabPanelbel) {
        tabPanel.classList.add("is_show");
        tabPanel.tabIndex = 0;
        tabPanel.inert = false;
      } else {
        tabPanel.classList.remove("is_show");
        tabPanel.tabIndex = -1;
        tabPanel.inert = false;
      }
    });
  });
});

/* -----------------------------------------------------
 スクロールアニメーション
------------------------------------------------------ */
// ターゲット要素を取得
const targets = document.querySelectorAll(".js_fadeIn, .js_fade");
const shareTitle = document.getElementById("js_shareTitle");
const shareBtn = document.getElementById("js_shareBtn");

// オプション
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.25,
};

// IntersectionObserverの登録
const observer = new IntersectionObserver(intersect, options);

// ターゲット要素としてオブザーバメソッドに登録する
targets.forEach((target) => {
  observer.observe(target);
});

// 交差したときに実行するコールバック関数
function intersect(entries) {
  entries.forEach((entry) => {
    // ターゲット要素が交差したら以下の処理を行う
    if (entry.isIntersecting) {
      entry.target.classList.add("is_show");
      if (entry.target === shareTitle) {
        shareTitle.addEventListener("transitionend", () => {
          shareBtn.classList.add("is_show");
        });
      }
      observer.unobserve(entry.target); //監視を終了する
    }
  });
}
