function ready() {
    var menu = document.querySelector('.nav__menu');
    var navigation = document.querySelector('.navigation');

    menu.addEventListener('click', function() {
        navigation.classList.toggle('show')
    })

    var searchBtn = document.querySelector('.search');
    var searchContainer = document.querySelector('.search__input_container');

    searchBtn.addEventListener('click', function() {
        searchContainer.classList.toggle('show')
    })
}

document.addEventListener("DOMContentLoaded", ready);