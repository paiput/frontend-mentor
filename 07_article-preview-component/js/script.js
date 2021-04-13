const card = document.querySelector('.card');
const shareButton = document.querySelector('.user__share-btn');
const shareButtonContainer = document.querySelector('.share-btn__container');

// toggles adding or removing the .hidden class to each div when you click the share-icon
card.addEventListener('click', (event) => {
    if (event.target.classList.contains('user__share-btn')) {
        shareButtonContainer.classList.toggle('hidden');
        shareButton.classList.toggle('active-btn')
    }
    else if (event.target.parentNode.classList.contains('user__share-btn')) {
        shareButtonContainer.classList.toggle('hidden');
        shareButton.classList.toggle('active-btn')
    } // This else if is because if you click exactly on the icon it doesn't count as if you clicked the button
})

