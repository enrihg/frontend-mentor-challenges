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


//Form Validation

