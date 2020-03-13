const slides = [
    {
        title: 'Для зала',
        price: '50',
        image: "url('../../img/bedroom-1.png')",
        id: 1
    },
    {
        title: 'Для гостинной',
        price: '40',
        image: "url('../../img/livingroom-2.png')",
        id: 2
    },
    {
        title: 'Для спальни',
        price: '35',
        image: "url('../../img/bedroom-2.png')",
        id: 3
    },
    {
        title: 'Для кухни',
        price: '60',
        image: "url('../../img/kitchen-2.png')",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlcyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn0JTQu9GPINC30LDQu9CwJyxcbiAgICAgICAgcHJpY2U6ICc1MCcsXG4gICAgICAgIGltYWdlOiBcInVybCgnLi4vLi4vaW1nL2JlZHJvb20tMS5wbmcnKVwiLFxuICAgICAgICBpZDogMVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ9CU0LvRjyDQs9C+0YHRgtC40L3QvdC+0LknLFxuICAgICAgICBwcmljZTogJzQwJyxcbiAgICAgICAgaW1hZ2U6IFwidXJsKCcuLi8uLi9pbWcvbGl2aW5ncm9vbS0yLnBuZycpXCIsXG4gICAgICAgIGlkOiAyXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn0JTQu9GPINGB0L/QsNC70YzQvdC4JyxcbiAgICAgICAgcHJpY2U6ICczNScsXG4gICAgICAgIGltYWdlOiBcInVybCgnLi4vLi4vaW1nL2JlZHJvb20tMi5wbmcnKVwiLFxuICAgICAgICBpZDogM1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ9CU0LvRjyDQutGD0YXQvdC4JyxcbiAgICAgICAgcHJpY2U6ICc2MCcsXG4gICAgICAgIGltYWdlOiBcInVybCgnLi4vLi4vaW1nL2tpdGNoZW4tMi5wbmcnKVwiLFxuICAgICAgICBpZDogNFxuICAgIH1cbl1cblxudmFyIGN1cnJlbnRTbGlkZUlkID0gc2xpZGVzWzBdLmlkO1xuXG5mdW5jdGlvbiBzZXRTbGlkZShzbGlkZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS10ZXh0X19zdWJ0aXRsZScpLmlubmVySFRNTCA9IHNsaWRlLnRpdGxlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS10ZXh0X19zcXVlcmUtLW51bWJlcicpLmlubmVySFRNTCA9IHNsaWRlLnByaWNlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jykuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gc2xpZGUuaW1hZ2U7XG5cbiAgICBjb25zdCBhY3RpdmVSYWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3N3aXRjaF9jaXJjbGVfYm94LS1hY3RpdmUnKTtcbiAgICBpZiAoYWN0aXZlUmFkaW8pIHtcbiAgICAgICAgYWN0aXZlUmFkaW8uY2xhc3NMaXN0LnJlbW92ZSgnc2xpZGVyX19zd2l0Y2hfY2lyY2xlX2JveC0tYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgY29uc3QgbmV4dEFjdGl2ZVJhZGlvQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNsaWRlcl9fc3dpdGNoX2NpcmNsZV9ib3hbZGF0YS1pZD1cIiR7c2xpZGUuaWR9XCJdYCk7XG4gICAgaWYgKG5leHRBY3RpdmVSYWRpb0J1dHRvbikge1xuICAgICAgICBuZXh0QWN0aXZlUmFkaW9CdXR0b24uY2xhc3NMaXN0LmFkZCgnc2xpZGVyX19zd2l0Y2hfY2lyY2xlX2JveC0tYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgY3VycmVudFNsaWRlSWQgPSBzbGlkZS5pZDtcbn1cblxuZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgdmFyIHJhZGlvQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zbGlkZXJfX3N3aXRjaF9jaXJjbGVfYm94Jyk7XG5cbiAgICByYWRpb0J1dHRvbnMuZm9yRWFjaChyYWRpbyA9PiB7XG4gICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBkYXRhSWQgPSByYWRpby5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKTtcblxuICAgICAgICAgICAgdmFyIHNsaWRlRWxlbWVudCA9IHNsaWRlcy5maW5kKGVsID0+IGVsLmlkID09PSBwYXJzZUludChkYXRhSWQpKTtcbiAgICAgICAgICAgIHNldFNsaWRlKHNsaWRlRWxlbWVudCk7XG4gICAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB2YXIgc2xpZGVyUmlnaHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19zd2l0Y2hfYXJyb3ctLXJpZ2h0Jyk7XG5cbiAgICBzbGlkZXJSaWdodEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50U2xpZGVJbmRleCA9IHNsaWRlcy5maW5kSW5kZXgoc2xpZGUgPT4gc2xpZGUuaWQgPT09IGN1cnJlbnRTbGlkZUlkKTtcblxuICAgICAgICBsZXQgbmV4dFNsaWRlSW5kZXggPSBjdXJyZW50U2xpZGVJbmRleCArIDE7XG4gICAgICAgIGlmIChuZXh0U2xpZGVJbmRleCA+PSBzbGlkZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBuZXh0U2xpZGVJbmRleCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBuZXh0U2xpZGUgPSBzbGlkZXNbbmV4dFNsaWRlSW5kZXhdO1xuICAgICAgICBzZXRTbGlkZShuZXh0U2xpZGUpO1xuICAgIH0pO1xuXG4gICAgdmFyIHNsaWRlckxlZnRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX19zd2l0Y2hfYXJyb3ctLWxlZnQnKTtcblxuICAgIHNsaWRlckxlZnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSBzbGlkZXMuZmluZEluZGV4KHNsaWRlID0+IHNsaWRlLmlkID09PSBjdXJyZW50U2xpZGVJZCk7XG5cbiAgICAgICAgbGV0IHByZXZpb3VzU2xpZGVJbmRleCA9IGN1cnJlbnRTbGlkZUluZGV4IC0gMTtcbiAgICAgICAgaWYgKHByZXZpb3VzU2xpZGVJbmRleCA8IDApIHtcbiAgICAgICAgICAgIHByZXZpb3VzU2xpZGVJbmRleCA9IHNsaWRlcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcHJldlNsaWRlID0gc2xpZGVzW3ByZXZpb3VzU2xpZGVJbmRleF07XG4gICAgICAgIHNldFNsaWRlKHByZXZTbGlkZSk7XG4gICAgfSk7XG5cbiAgICAvLyBtb2JpbGUgbWVudVxuICAgIGNvbnN0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXInKTtcbiAgICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb25fX2xpc3QnKTtcblxuICAgIGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBuYXZNZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbiAgICB9KVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCByZWFkeSk7Il0sImZpbGUiOiJtYWluLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
