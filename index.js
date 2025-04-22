document.addEventListener('DOMContentLoaded', () => {
    function addDeleteButtons() {
        document.querySelectorAll('fieldset.beverage').forEach(fieldset => {
            if (fieldset.querySelector('.delete-beverage')) return;

            const btn = document.createElement('button');
            btn.type = 'button';
            btn.className = 'delete-beverage';
            btn.innerHTML = '&times;';

            btn.addEventListener('click', () => {
                const all = document.querySelectorAll('fieldset.beverage');
                if (all.length > 1) {
                    fieldset.remove();
                }
            });

            fieldset.appendChild(btn);
        });
    }

    addDeleteButtons();
});
let counter = 1;

const addButton = document.getElementsByClassName("add-button")[0];
const fieldSet = document.getElementsByClassName("beverage")[0];
const form = document.querySelector("form");
addButton.addEventListener("click",  e => {
    counter++;
    const newFieldSet =  fieldSet.cloneNode(true);
    newFieldSet.children[0].textContent = `Напиток №${counter}`;
    const referenceNode = form.children[counter - 1];
    form.insertBefore(newFieldSet, referenceNode);
});