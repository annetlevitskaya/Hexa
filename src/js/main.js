const slides = [
    {
        title: 'Для зала',
        price: '50',
        image: "url('./img/bedroom-1.png')",
        id: 1
    },
    {
        title: 'Для гостинной',
        price: '40',
        image: "url('./img/livingroom-2.png')",
        id: 2
    },
    {
        title: 'Для спальни',
        price: '35',
        image: "url('./img/bedroom-2.png')",
        id: 3
    },
    {
        title: 'Для кухни',
        price: '60',
        image: "url('./img/kitchen-2.png')",
        id: 4
    }
]

var currentSlideId = slides[0].id;

function setSlide(slide) {
    document.querySelector('.slide-text__subtitle').innerHTML = slide.title;
    document.querySelector('.slide-text__squere--number').innerHTML = slide.price;
    document.querySelector('.content').style.backgroundImage = slide.image;

    const activeRadio = document.querySelector('.slider__switch_circle_box--active');
    if (activeRadio) {
        activeRadio.classList.remove('slider__switch_circle_box--active');
    }

    const nextActiveRadioButton = document.querySelector(`.slider__switch_circle_box[data-id="${slide.id}"]`);
    if (nextActiveRadioButton) {
        nextActiveRadioButton.classList.add('slider__switch_circle_box--active');
    }

    currentSlideId = slide.id;
}

function ready() {
    var radioButtons = document.querySelectorAll('.slider__switch_circle_box');

    radioButtons.forEach(radio => {
        radio.addEventListener('click', function(){
            var dataId = radio.getAttribute('data-id');

            var slideElement = slides.find(el => el.id === parseInt(dataId));
            setSlide(slideElement);
        })
    });

    var sliderRightBtn = document.querySelector('.slider__switch_arrow--right');

    sliderRightBtn.addEventListener('click', function() {
        const currentSlideIndex = slides.findIndex(slide => slide.id === currentSlideId);

        let nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex >= slides.length) {
            nextSlideIndex = 0;
        }

        const nextSlide = slides[nextSlideIndex];
        setSlide(nextSlide);
    });

    var sliderLeftBtn = document.querySelector('.slider__switch_arrow--left');

    sliderLeftBtn.addEventListener('click', function() {
        const currentSlideIndex = slides.findIndex(slide => slide.id === currentSlideId);

        let previousSlideIndex = currentSlideIndex - 1;
        if (previousSlideIndex < 0) {
            previousSlideIndex = slides.length - 1;
        }

        const prevSlide = slides[previousSlideIndex];
        setSlide(prevSlide);
    });

    // mobile menu
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.navigation__list');

    burger.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    })
}

document.addEventListener("DOMContentLoaded", ready);