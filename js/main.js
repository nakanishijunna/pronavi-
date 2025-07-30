/*=================================================
ローディングアニメーション　担当：かおり
===================================================*/
const loaderContainer = document.querySelector(".loader-container");

window.addEventListener("load", () => {
  loaderContainer.classList.add("hidden");
});

/*=================================================
メインビジュアルの画像スライドショー表示
===================================================*/
let current = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);

/*=================================================
メインビジュアルを過ぎた後、navを表示
===================================================*/
// window.addEventListener("scroll", () => {
//   const nav = document.querySelector("nav");
//   const triggerHeight = window.innerHeight;

//   if (window.scrollY >= triggerHeight) {
//     nav.classList.add("show");
//   } else {
//     nav.classList.remove("show");
//   }
// });

/*=================================================
よくある質問のQA箱表示
===================================================*/
const questions = document.querySelectorAll(".faq-item .question");

questions.forEach((q) => {
  q.addEventListener("click", () => {
    const faqItem = q.closest(".faq-item");
    const answer = faqItem.querySelector(".answer");

    // 閉じているなら開く／開いてるなら閉じる
    const isOpen = faqItem.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".answer").style.display = "none";
    });

    if (!isOpen) {
      faqItem.classList.add("open");
      answer.style.display = "block";
    }
  });
});


/*=================================================
グラデが始まったらナビゲーションをフェードアウトする
===================================================*/
const nav = document.querySelector("nav");
const grad = document.querySelector(".grad-container");
const triggerHeight = window.innerHeight; // メインビジュアルの高さの目安

function updateNavVisibility() {
  const gradRect = grad.getBoundingClientRect();
  const gradIsVisible =
    gradRect.bottom > 0 && gradRect.top < window.innerHeight;

  if (window.scrollY >= triggerHeight && !gradIsVisible) {
    nav.classList.add("show");
    nav.classList.remove("erase");
  } else if (gradIsVisible) {
    nav.classList.remove("show");
    nav.classList.add("erase");
  } else {
    nav.classList.remove("show");
    nav.classList.remove("erase");
  }
}

window.addEventListener("scroll", updateNavVisibility);
window.addEventListener("load", updateNavVisibility); //初期状態でも判定する

/*=================================================
ハイブリッドスクロール
===================================================*/
("use strict");

document.addEventListener("DOMContentLoaded", () => {
  //horizontal scroll
  const stickyContainers = document.querySelectorAll(".horizontal_scroll");

  stickyContainers.forEach((stickyContainer) => {
    //get elements
    const stickyItem = stickyContainer.querySelector(".sticky");
    const scroller = stickyContainer.querySelector(".scroll-section");
    scroller.classList.add("nobar");

    //set sticky height
    const updateStickyHeight = () => {
      const stickyHeight =
        scroller.scrollWidth - scroller.clientWidth + stickyItem.clientHeight;
      stickyContainer.style.setProperty(
        "--sticky-container-height",
        `${stickyHeight}px`
      );
    };
    updateStickyHeight();
    new ResizeObserver(updateStickyHeight).observe(scroller);
    new ResizeObserver(updateStickyHeight).observe(stickyItem);

    //sync scroll
    const syncScroll = () => {
      const rect = stickyContainer.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        scroller.scrollLeft = window.scrollY - stickyContainer.offsetTop;
      } else if (rect.bottom < window.innerHeight) {
        scroller.scrollLeft = scroller.scrollWidth - scroller.clientWidth;
      } else {
        scroller.scrollLeft = 0;
      }
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.addEventListener("scroll", syncScroll, { passive: true });
            syncScroll();
          } else {
            window.removeEventListener("scroll", syncScroll);
          }
        });
      },
      { threshold: 0 }
    );
    observer.observe(stickyContainer);

    //end of forEach
  });

  //end of DOMContentLoaded
});


/*=================================================
フェードイン
===================================================*/
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fadeIn');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('is-active');
    }
  });
});

/*=================================================
参加者の声カードめくり
===================================================*/
const cards = document.querySelectorAll('.card-images', '.voice-text');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio >= 0.5) {
      entry.target.classList.add('is-visible');
    } else {
      entry.target.classList.remove('is-visible');
    }
  });
}, {
  threshold: [0.8] //要素が80％画面に入ったら反応
});

cards.forEach(card => observer.observe(card));

/*=================================================
ハイブリッドスクロール
===================================================*/

