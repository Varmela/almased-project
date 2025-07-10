
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


/*  ALL Swiper inits in one DOMContentLoaded */
document.addEventListener('DOMContentLoaded', () => {



 new Glide('.hero-glide', {
  type: 'carousel',
  autoplay: 4000,
  animationDuration: 800,
  perView: 1,
  gap: 0
}).mount();

});
document.addEventListener('DOMContentLoaded', () => {

  /*  BENEFITS  */
  const benefitsGlideRoot = document.querySelector('.benefits-glide');
  if (benefitsGlideRoot && typeof Glide !== 'undefined') {
    new Glide(benefitsGlideRoot, {
      type: 'carousel',
      perView: 3,
      gap: 0,
      breakpoints: {
        1024: { perView: 2 },
        600 : { perView: 1 }
      }
    }).mount();
  }

  /* INFO (doctor)*/
  const infoGlideRoot = document.querySelector('.info-glide');   
  if (infoGlideRoot && typeof Glide !== 'undefined') {
    new Glide(infoGlideRoot, {
      type   : 'carousel',
      perView: 1,
      gap    : 0,
      rewind : true          
    }).mount();
  }


    const energyGlideRoot = document.querySelector('.energy-glide');
  if (energyGlideRoot && typeof Glide !== 'undefined') {
    new Glide(energyGlideRoot, {
      type   : 'carousel',
      perView: 1,
      gap    : 0,
      rewind : true       
    }).mount();
  }
});