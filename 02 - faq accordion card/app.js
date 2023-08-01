const container = document.querySelectorAll('.container');
console.log(container);

for (let i of container) {
    i.addEventListener('click', () => {
        console.log(i);
        i.lastElementChild.classList.toggle("hidden");
    })
}
