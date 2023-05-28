const form = document.querySelector('.rating__card');
const submitScreen = document.querySelector('.submit__screen');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    submitScreen.classList.remove('disabled');
    form.classList.add('disabled');
});
