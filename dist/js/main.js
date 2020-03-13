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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHNsaWRlcyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn0JTQu9GPINC30LDQu9CwJyxcbiAgICAgICAgcHJpY2U6ICc1MCcsXG4gICAgICAgIGltYWdlOiBcInVybCgnLi9pbWcvYmVkcm9vbS0xLnBuZycpXCIsXG4gICAgICAgIGlkOiAxXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn0JTQu9GPINCz0L7RgdGC0LjQvdC90L7QuScsXG4gICAgICAgIHByaWNlOiAnNDAnLFxuICAgICAgICBpbWFnZTogXCJ1cmwoJy4vaW1nL2xpdmluZ3Jvb20tMi5wbmcnKVwiLFxuICAgICAgICBpZDogMlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ9CU0LvRjyDRgdC/0LDQu9GM0L3QuCcsXG4gICAgICAgIHByaWNlOiAnMzUnLFxuICAgICAgICBpbWFnZTogXCJ1cmwoJy4vaW1nL2JlZHJvb20tMi5wbmcnKVwiLFxuICAgICAgICBpZDogM1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ9CU0LvRjyDQutGD0YXQvdC4JyxcbiAgICAgICAgcHJpY2U6ICc2MCcsXG4gICAgICAgIGltYWdlOiBcInVybCgnLi9pbWcva2l0Y2hlbi0yLnBuZycpXCIsXG4gICAgICAgIGlkOiA0XG4gICAgfVxuXVxuXG52YXIgY3VycmVudFNsaWRlSWQgPSBzbGlkZXNbMF0uaWQ7XG5cbmZ1bmN0aW9uIHNldFNsaWRlKHNsaWRlKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXRleHRfX3N1YnRpdGxlJykuaW5uZXJIVE1MID0gc2xpZGUudGl0bGU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXRleHRfX3NxdWVyZS0tbnVtYmVyJykuaW5uZXJIVE1MID0gc2xpZGUucHJpY2U7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBzbGlkZS5pbWFnZTtcblxuICAgIGNvbnN0IGFjdGl2ZVJhZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fc3dpdGNoX2NpcmNsZV9ib3gtLWFjdGl2ZScpO1xuICAgIGlmIChhY3RpdmVSYWRpbykge1xuICAgICAgICBhY3RpdmVSYWRpby5jbGFzc0xpc3QucmVtb3ZlKCdzbGlkZXJfX3N3aXRjaF9jaXJjbGVfYm94LS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXh0QWN0aXZlUmFkaW9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuc2xpZGVyX19zd2l0Y2hfY2lyY2xlX2JveFtkYXRhLWlkPVwiJHtzbGlkZS5pZH1cIl1gKTtcbiAgICBpZiAobmV4dEFjdGl2ZVJhZGlvQnV0dG9uKSB7XG4gICAgICAgIG5leHRBY3RpdmVSYWRpb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdzbGlkZXJfX3N3aXRjaF9jaXJjbGVfYm94LS1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBjdXJyZW50U2xpZGVJZCA9IHNsaWRlLmlkO1xufVxuXG5mdW5jdGlvbiByZWFkeSgpIHtcbiAgICB2YXIgcmFkaW9CdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNsaWRlcl9fc3dpdGNoX2NpcmNsZV9ib3gnKTtcblxuICAgIHJhZGlvQnV0dG9ucy5mb3JFYWNoKHJhZGlvID0+IHtcbiAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGRhdGFJZCA9IHJhZGlvLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXG4gICAgICAgICAgICB2YXIgc2xpZGVFbGVtZW50ID0gc2xpZGVzLmZpbmQoZWwgPT4gZWwuaWQgPT09IHBhcnNlSW50KGRhdGFJZCkpO1xuICAgICAgICAgICAgc2V0U2xpZGUoc2xpZGVFbGVtZW50KTtcbiAgICAgICAgfSlcbiAgICB9KTtcblxuICAgIHZhciBzbGlkZXJSaWdodEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3N3aXRjaF9hcnJvdy0tcmlnaHQnKTtcblxuICAgIHNsaWRlclJpZ2h0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTbGlkZUluZGV4ID0gc2xpZGVzLmZpbmRJbmRleChzbGlkZSA9PiBzbGlkZS5pZCA9PT0gY3VycmVudFNsaWRlSWQpO1xuXG4gICAgICAgIGxldCBuZXh0U2xpZGVJbmRleCA9IGN1cnJlbnRTbGlkZUluZGV4ICsgMTtcbiAgICAgICAgaWYgKG5leHRTbGlkZUluZGV4ID49IHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG5leHRTbGlkZUluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5leHRTbGlkZSA9IHNsaWRlc1tuZXh0U2xpZGVJbmRleF07XG4gICAgICAgIHNldFNsaWRlKG5leHRTbGlkZSk7XG4gICAgfSk7XG5cbiAgICB2YXIgc2xpZGVyTGVmdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZXJfX3N3aXRjaF9hcnJvdy0tbGVmdCcpO1xuXG4gICAgc2xpZGVyTGVmdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zdCBjdXJyZW50U2xpZGVJbmRleCA9IHNsaWRlcy5maW5kSW5kZXgoc2xpZGUgPT4gc2xpZGUuaWQgPT09IGN1cnJlbnRTbGlkZUlkKTtcblxuICAgICAgICBsZXQgcHJldmlvdXNTbGlkZUluZGV4ID0gY3VycmVudFNsaWRlSW5kZXggLSAxO1xuICAgICAgICBpZiAocHJldmlvdXNTbGlkZUluZGV4IDwgMCkge1xuICAgICAgICAgICAgcHJldmlvdXNTbGlkZUluZGV4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwcmV2U2xpZGUgPSBzbGlkZXNbcHJldmlvdXNTbGlkZUluZGV4XTtcbiAgICAgICAgc2V0U2xpZGUocHJldlNsaWRlKTtcbiAgICB9KTtcblxuICAgIC8vIG1vYmlsZSBtZW51XG4gICAgY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlcicpO1xuICAgIGNvbnN0IG5hdk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbl9fbGlzdCcpO1xuXG4gICAgYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG5hdk1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgIH0pXG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHJlYWR5KTsiXSwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
