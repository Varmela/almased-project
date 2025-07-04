document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.menu-toggle');
  const LinksList  = document.querySelector('.links');

  if (!toggleButton || !LinksList) return;

  //open or close when the menu is clicked
  toggleButton.addEventListener('click', (e) => {
    e.stopPropagation();
    LinksList.classList.toggle('open');
  });

  // Close the menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (!LinksList.contains(e.target) && !toggleButton.contains(e.target)) {
      LinksList.classList.remove('open');
    }
  });
});

new Swiper('.energy-swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.energy-swiper .swiper-button-next',
    prevEl: '.energy-swiper .swiper-button-prev'
  }
});



document.addEventListener('DOMContentLoaded', () => {
  // Instantiate Glide only if the carousel exists on the page
  const glideRoot = document.querySelector('.benefits-glide');
  if (!glideRoot || typeof Glide === 'undefined') return;

  new Glide(glideRoot, {
    type: 'carousel',
    perView: 3,
    gap: 0,
    margin: 0,
    breakpoints: {
      1024: { perView: 2 },
      600:  { perView: 1 }
    }
  }).mount();
});



// info-swiper.js
document.addEventListener('DOMContentLoaded', () => {
  new Swiper('.info-swiper', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.info-next',
      prevEl: '.info-prev'
    }
  });
});




