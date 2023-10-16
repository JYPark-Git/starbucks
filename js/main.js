const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function() {
  //gsap.to(요소, 지속시간, 옵션)
  if(window.scrollY > 500) {
    //배지 숨기기
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
    // badgeEl.classList.add('hide');

    //to-top 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0,
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
    // badgeEl.classList.remove('hide');
    
    //to-top 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
  // gsap 활용하지 않고 처리 - class hide 활용(SELF)
  // const isHide = badgeEl.classList.contains('hide');
  // setTimeout(() => {
  //   if( badgeEl.classList.contains('hide') ) {
  //     if(!isHide) {
  //       badgeEl.style.display = 'none';
  //     }
  //   } else {
  //     if(isHide) {
  //       badgeEl.style.display = 'block';
  //     }
  //   }
  // }, .6);
}, 300));

toTopEl.addEventListener('click', function() {
  gsap.to(window, .7, {
    scrollTo: 0,
  })
});



const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: .7 * (index + 1),
    opacity: 1,
  })
});

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
});

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl : '.promotion .swiper-prev',
    nextEl : '.promotion .swiper-next',
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl : '.awards .swiper-prev',
    nextEl : '.awards .swiper-next',
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion;
  if(isHidePromotion) {
    promotionEl.classList.add('hide');
  } else {
    promotionEl.classList.remove('hide');
  }
});

//랜덤 함수(소수점 2째 자리)
function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(0));
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,  //보여질 여부 감시할 요소
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller())
    ;
});