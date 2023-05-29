const form = document.querySelector('.rating__card');
const submitScreen = document.querySelector('.submit__screen');
const ratingButtons = document.querySelectorAll('.button__rate');
const rate = document.querySelector('#rate');

for (let button of ratingButtons) {  
    button.onclick = function () {
        rate.innerHTML = button.innerHTML;
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if( 1<rate.innerHTML || rate.innerHTML <6){
        submitScreen.classList.remove('disabled');
        form.classList.add('disabled');
    } else alert('please select a number'); 
});
