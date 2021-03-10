const mainQuote = document.querySelector(".main__quote");
const mainImg = document.querySelector(".img-container__img");
const TanyaQuote = document.querySelector(".Tanya-quote");
const JohnQuote = document.querySelector(".John-quote");
const imgDisplacer = document.querySelector(".img__displacer");
const displacerArrow = document.querySelectorAll(".displacer__arrow");
const leftArrow = document.querySelector(".fa-angle-left");
const rightArrow = document.querySelector(".fa-angle-right");


imgDisplacer.addEventListener('click', (ev) => {
    if (ev.target == leftArrow || ev.target.children[0] == leftArrow) {
        mainImg.classList.toggle("John-img");
        TanyaQuote.classList.toggle("hidden");
        JohnQuote.classList.toggle("hidden");

    } else if (ev.target == rightArrow || ev.target.children[0] == rightArrow) {
        mainImg.classList.toggle("John-img");
        TanyaQuote.classList.toggle("hidden");
        JohnQuote.classList.toggle("hidden");
    
    }
});

