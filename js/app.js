const btn = document.querySelector('.header__button_first')
const btnThird = document.querySelector('.help__order')
const btnFourth = document.querySelector('.header__button_translate')
const modal = document.querySelector('.modal')

btnFourth.addEventListener('click', () => {
    modal.classList.add('open')
})

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        modal.classList.remove('open')
        body.classList.remove('lock')
    }
})

document.querySelector('.modal .form').addEventListener('click', event => {
    event._isClickWithInModal = true;
    body.classList.remove('lock')
});

modal.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
        event.currentTarget.classList.remove('open');
        body.classList.remove('lock')
});


btn.addEventListener('click', () => {
    modal.classList.add('open')
})

btnThird.addEventListener('click', () => {
    modal.classList.add('open')
})