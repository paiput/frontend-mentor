const nav = document.querySelector('.header__nav');

const buttonContainer = document.querySelectorAll('.ul__li');
const navButtons = document.querySelectorAll('.li__button');
const buttonsArrows = document.querySelectorAll('.li__button-arrow');

const responsiveNav = document.querySelector('.responsive-nav');
const navHamburger = document.querySelector('.nav__hamburger');
const imgSection1 = document.querySelector('.img-section1');
const imgSection3 = document.querySelector('.img-section3');

if (screen.width >= 1024) {

    navButtons.forEach(button => {

        button.addEventListener('mouseover', () => {
            button.firstElementChild.classList.add('rotate-arrow');
            button.nextElementSibling.classList.remove('hidden');
        });
    
        // buttonContainer includes both the button and the box that is displayed when hovering the mouse over the button
        buttonContainer.forEach(buttonC => {
            buttonC.addEventListener('mouseleave', () => {
                navButtons.forEach(button => {
                    button.nextElementSibling.classList.add('hidden');
                    button.firstElementChild.classList.remove('rotate-arrow');
                });
            });
        });
    });
}


if (screen.width < 1024) {
    
    // hides header's links container because there will be a hamburger menu
    responsiveNav.classList.add('hidden');

    // changes some images' url
    imgSection1.setAttribute('src', "assets/images/illustration-editor-mobile.svg");
    imgSection3.setAttribute('src', "assets/images/illustration-laptop-mobile.svg");

    // changes each arrow's color
    buttonsArrows.forEach(arrow => {
        arrow.setAttribute('src', "assets/images/icon-arrow-dark.svg");
    });

    // changes the hamburger into a cross or viceversa, and shows or hides the nav menu
    navHamburger.addEventListener('click', () => {
        navHamburger.classList.toggle('change');
        responsiveNav.classList.toggle('hidden');
    });

    navButtons.forEach(button => {

        const toggleDropwDown = () => {

            if (button.nextElementSibling.classList.contains('hidden')) {
                navButtons.forEach(button => {
                    button.nextElementSibling.classList.add('hidden');
                });
                button.nextElementSibling.classList.toggle('hidden');
                button.firstElementChild.classList.add('rotate-arrow');
            } else {
                navButtons.forEach(button => {
                    button.nextElementSibling.classList.add('hidden');
                    button.firstElementChild.classList.remove('rotate-arrow');
                });
            }
            
            // This corrects a little error with the rotation of the arrows when clicking the button
            navButtons.forEach(button => {
                if (button.nextElementSibling.classList.contains('hidden')) {
                    button.firstElementChild.classList.remove('rotate-arrow');
                }
            });
        }
        
        button.addEventListener('click', toggleDropwDown);
    });
}