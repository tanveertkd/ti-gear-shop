const btnPrev = document.querySelector('.carousel-btn-prev');
const btnNext = document.querySelector('.carousel-btn-next');
let carouselPosition = 1;

const nextCarouselImage = _ => showCarouselImage(carouselPosition+=1);
const prevCarouselImage = _ => showCarouselImage(carouselPosition-=1);

const showCarouselImage = pos => {
    const carouselImages = document.querySelectorAll('.carousel-slide');

    if(pos>carouselImages.length) carouselPosition = 1;

    if(pos<1) carouselPosition = carouselImages.length;

    for(let i=0; i<carouselImages.length; i++){
        carouselImages[i].style.display = 'none';
    }
    carouselImages[carouselPosition-1].style.display = 'flex';
}

showCarouselImage(carouselPosition);
btnNext.addEventListener('click', nextCarouselImage);
btnPrev.addEventListener('click', prevCarouselImage);