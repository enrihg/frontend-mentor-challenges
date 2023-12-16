const cardHolderName = document.querySelector('#cardholder-name');
const editableCardHolderName = document.querySelector('#editable-cardholder-name');
const cardNumber = document.querySelector('#card-number');
const editableCardNumber = document.querySelector('#editable-card-number');
const expireMonth = document.querySelector('#expire-month');
const editableExpireMonth = document.querySelector('#editable-expire-month');
const expireYear = document.querySelector('#expire-year');
const editableExpireYear = document.querySelector('#editable-expire-year');
const cardCvc = document.querySelector('#card-cvc');
const editableCardCvc = document.querySelector('#editable-card-cvc');

cardHolderName.addEventListener('input', (e) => {
    editableCardHolderName.textContent = cardHolderName.value;
});

cardNumber.addEventListener('input', (e) => {
    editableCardNumber.textContent = cardNumber.value;
})

expireMonth.addEventListener('input', (e) => {
    editableExpireMonth.textContent = expireMonth.value;
})

expireYear.addEventListener('input', (e) => {
    editableExpireYear.textContent = expireYear.value;
})

cardCvc.addEventListener('input', (e) => {
    editableCardCvc.textContent = cardCvc.value;
})


/*Form Validation*/
const confirmButton = document.querySelector('.confirm-button');
const allInput = document.querySelectorAll('input');
const allErrorMessage = document.querySelectorAll('.error-message');

confirmButton.addEventListener('click', () => {
    for(let i= 0; i< allInput.length; i++) {
        if(allInput[i].value == ""){
            allErrorMessage[i].innerHTML = 'Can\'t be blank';
            allErrorMessage[i].style.visibility = 'visible';
            allInput[i].classList.add('error');
        }
        else {
            allErrorMessage[i].style.visibility = 'hidden';
            allInput[i].classList.add('success');
            allInput[i].classList.remove('error');
        }
    }
})
