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
/* wrap ALL Swiper inits in one DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {

  new Swiper('.energy-swiper', {
    direction:'horizontal',
    loop:true,
    navigation:{
      prevEl:'.energy-swiper .swiper-button-prev',
      nextEl:'.energy-swiper .swiper-button-next'
    }
  });

  new Swiper('.hero-swiper', {
    effect:'fade',
    loop:true,
    autoplay:{ delay:4000, disableOnInteraction:false },
    speed:800
  });

   new Swiper('.info-swiper', {
    slidesPerView : 1,
    loop          : true,  
    navigation    : {
    nextEl : '.swiper-button-next2',  
    prevEl : '.swiper-button-prev2'   
    }
  });

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

