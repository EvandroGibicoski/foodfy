const modelOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for(let card of cards) {
    card.addEventListener("click", function() {
        const imageId = card.getAttribute('id');
        modelOverlay.classList.add('active');
        modelOverlay.querySelector('img').src = `../assets/${imageId}`;
    });
};

const modalClose = documento.querySelector('.modal-close');
    modalClose.addEventListener("click", function() {
        modelOverlay.classList.remove('active');
    });