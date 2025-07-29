/*=================================================
ローディングアニメーション　担当：かおり
===================================================*/
const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', () =>{
  loaderContainer.classList.add('hidden');
});

/*=================================================
メインビジュアルの画像スライドショー表示
===================================================*/
let current = 0;
const slides = document.querySelectorAll('.slide');

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);


/*=================================================
メインビジュアルを過ぎた後、navを表示
===================================================*/
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  const triggerHeight = window.innerHeight;

  if (window.scrollY >= triggerHeight) {
    nav.classList.add('show');
  } else {
    nav.classList.remove('show');
  }
});

/*=================================================
よくある質問のQA箱表示
===================================================*/
const questions = document.querySelectorAll('.faq-item .question');

questions.forEach(q => {
  q.addEventListener('click', () => {
    const faqItem = q.closest('.faq-item');
    const answer = faqItem.querySelector('.answer');

    // 閉じているなら開く／開いてるなら閉じる
    const isOpen = faqItem.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(item => {
      item.classList.remove('open');
      item.querySelector('.answer').style.display = 'none';
    });

    if (!isOpen) {
      faqItem.classList.add('open');
      answer.style.display = 'block';
    }
  });
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
