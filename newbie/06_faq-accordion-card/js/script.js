const main = document.querySelector('.main');
const itemTitles = document.querySelectorAll('.item__title');
const titlesArrows = document.querySelectorAll('.title__arrow');
const itemsTextContainer = document.querySelectorAll('.item__text-container');
const boxIllustration = document.querySelector('.illustration-box--desktop');

const showText = (targetElement) => {
    for (item of itemsTextContainer) {
        item.classList.remove('item__text-container--show');
    }

    targetElement.classList.add('item__text-container--show');
}

const activateTitle = (targetElement) => {
    for (title of itemTitles) {
        title.classList.remove('active');
    }

    targetElement.classList.add('active');
}

const rotateArrow = (targetElement) => {
    for (arrow of titlesArrows) {
        arrow.classList.remove('rotate-arrow');
    }

    targetElement.classList.add('rotate-arrow');
}

main.addEventListener('click', (e) => {
    if (e.target.classList.contains('item__title')) {
        showText(e.target.nextElementSibling);
        activateTitle(e.target);
        rotateArrow(e.target.firstElementChild);

    } else if (e.target.classList.contains('title__arrow')) {
        showText(e.target.parentElement.nextElementSibling);
        activateTitle(e.target.parentElement);
        rotateArrow(e.target);
        
    }
});

main.addEventListener('mouseenter', () => {
    boxIllustration.classList.add('move-left');    
});
main.addEventListener('mouseleave', () => {
    boxIllustration.classList.remove('move-left');
});