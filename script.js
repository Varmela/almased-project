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

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,



  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});