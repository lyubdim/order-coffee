let counter = 1;

function addDeleteButton(fieldSet) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'delete-beverage';
    btn.innerHTML = '&times;';

    btn.addEventListener('click', e => {
        console.log('clicked');
        const all = document.querySelectorAll('.beverage');
        if (all.length > 1) {
            fieldSet.remove();
        }
    });

    fieldSet.appendChild(btn);
}



const addButton = document.getElementsByClassName("add-button")[0];
const fieldSet = document.getElementsByClassName("beverage")[0];
addDeleteButton(fieldSet);
const form = document.querySelector("form");
addButton.addEventListener("click",  e => {
    counter++;
    const newFieldSet =  fieldSet.cloneNode(true);
    newFieldSet.children[0].textContent = `Напиток №${counter}`;
    const all = document.querySelectorAll('.beverage');
    const referenceNode = form.children[all.length];
    addDeleteButton(newFieldSet);
    form.insertBefore(newFieldSet, referenceNode);
});

const submitBtn = document.querySelector('.submit-button');
const orderModal = document.getElementById('orderModal');
const closeOrderBtn = document.getElementById('closeOrderModal');

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    orderModal.classList.add('active');
});

closeOrderBtn.addEventListener('click', () => {
    orderModal.classList.remove('active');
});

orderModal.addEventListener('click', e => {
    if (e.target === orderModal) {
        orderModal.classList.remove('active');
    }
});
