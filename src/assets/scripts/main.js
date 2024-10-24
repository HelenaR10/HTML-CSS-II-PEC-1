/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

import img1 from '/src/assets/images/slider__img.webp';
import img2 from '/src/assets/images/slider__img2.webp';
import img3 from '/src/assets/images/slider__img3.webp';

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

const sliderImages = [img1, img2, img3];
const sliderButtons = document.querySelector('.slider__buttons');
const imgSlider = document.querySelector('.slider__img');
const contentPage = document.querySelector('.content');
const literatureSection = contentPage.querySelector('.literature');
const architectureSection = contentPage.querySelector('.architecture');
const gastronomySection = contentPage.querySelector('.gastronomy');
const idlenessSection = contentPage.querySelector('.idleness');


document.addEventListener('click', (e) => {
  const currentElement = e.target;

  switch (true) {
    //Cambio dinámico de las imágenes del Slider
    case currentElement.classList.contains('slider__button'):
      const activeButton = sliderButtons.querySelector('.slider__button--activated');
      activeButton.classList.remove('slider__button--activated');
      currentElement.classList.add('slider__button--activated');
      imgSlider.src = sliderImages[currentElement.dataset.src];
      break;

    //Scroll dinámico a las secciones de interés
    case currentElement.classList.contains('fa-book-open'):
      literatureSection.scrollIntoView({behavior: 'smooth'});
      break;
      
    case currentElement.classList.contains('fa-landmark'):
      architectureSection.scrollIntoView({behavior: 'smooth'});
      break;

    case currentElement.classList.contains('fa-champagne-glasses'):
      gastronomySection.scrollIntoView({behavior: 'smooth'});
      break;

    case currentElement.classList.contains('fa-puzzle-piece'):
      idlenessSection.scrollIntoView({behavior: 'smooth'});
      break;
  
  }
});

