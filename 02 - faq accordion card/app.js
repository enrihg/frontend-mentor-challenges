const container = document.querySelectorAll('.container');

for (let i of container) {
    i.addEventListener('click', () => {
        console.log(i);

      
        if (i.firstElementChild.classList.contains("bold")){
            for (let i of container) {       
                removeClass (i);
            }
        }
        else {

            for (let i of container) {
                removeClass (i);
            }
            toggleClass (i);
        }
    })
}

function removeClass (a) {
    let i = a;
    i.firstElementChild.classList.remove("bold");
    i.firstElementChild.firstElementChild.classList.remove("rotate");
    i.lastElementChild.classList.remove("show-answer");
}

function toggleClass (a) {
    let i = a;
    i.firstElementChild.classList.toggle("bold");
    i.firstElementChild.firstElementChild.classList.toggle("rotate");
    i.lastElementChild.classList.toggle("show-answer");
}