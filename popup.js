const title = document.querySelector('.modal-header__main-title');
const btn = document.querySelector('.modal-header__button');

btn.addEventListener('click', () => {
    title.style.color = "violet";
    title.innerHTML = "The title is changed!";
});
