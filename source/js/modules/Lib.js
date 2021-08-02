export function Lib() {

  const burger = document.querySelector('.main-header__burger');
  const sectionBurger = document.querySelector('.main-header__nav');

  if (burger != null) {
    burger.addEventListener('click', () => {
      console.log('work')
      sectionBurger.classList.toggle('main-header__nav--active');
      burger.classList.toggle('main-header__burger--active');
      document.querySelector('body').classList.toggle('overflowHid')
    })
  }


  const sliderFirstMain = document.querySelectorAll('.mainSlider');


  for (let i = 1; i < sliderFirstMain.length; i++) {
    sliderFirstMain[i].style.display = 'none';
  }

  const sliderFirstPrev = document.querySelectorAll('.paginationFirstSlider-pagination');


  sliderFirstPrev.forEach((item) => {


    item.addEventListener('click', (e) => {


      e.preventDefault();

      for (let val of sliderFirstMain) {


        if (item.dataset.imgprev === val.dataset.img) {
          val.style.display = 'block';
        } else val.style.display = 'none';

      }

    })

  })


  let scrollAge = document.querySelectorAll('.scrollBar .item');


  if (scrollAge != null) {

    scrollAge[0].classList.add('active-age');

    scrollAge.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        for (let val of scrollAge) {
          val.classList.remove('active-age')
        }
        e.target.classList.toggle('active-age');

      })
    })
  }
  const swiperProv = document.querySelector('.mySwiper');

  if (swiperProv != null) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 2006) + "</span>";
        },
      },
    });


    var swiper = new Swiper(".mySwiper1", {
      slidesPerView: "auto",
    });
  }


}
