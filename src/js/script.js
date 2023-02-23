const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      menuItem = document.querySelectorAll('.menu__list li')

hamburger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('active')
        })
});

