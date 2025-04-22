let counter = 1;
const coffeeLabels = {
    espresso:  'Эспрессо',
    capuccino: 'Капучино',
    cacao:     'Какао',
};

const milkLabels = {
    usual:    'обычное',
    'no-fat': 'обезжиренное',
    soy:      'соевое',
    coconut:  'кокосовое',
};

const extrasLabels = {
    'whipped cream': 'взбитыe сливки',
    marshmallow:     'зефирки',
    chocolate:       'шоколад',
    cinnamon:        'корица',
};

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
const p = document.getElementById("counter")
const thead = document.querySelector('#table tbody');
const lastDigit = [2, 3, 4]

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    const all = document.querySelectorAll('.beverage');
    let end = 'напитков'
    if (lastDigit.includes(counter % 10) && (Math.trunc(counter / 10) !== 1)) {
        end = 'напитка'
    } else if (counter % 10 === 1 && (Math.trunc(counter / 10) !== 1)) {
        end = 'напиток'
    }
    p.textContent = `Вы заказали ${all.length} ${end}`
    thead.replaceChildren()
    all.forEach(e => {
        const tr = document.createElement('tr');
        const info = getBeverageData(e);
        for (let j = 0; j < 3; j++) {
            const th = document.createElement('td');
            th.textContent = info[j];
            tr.appendChild(th);
        }
        thead.appendChild(tr);
    })
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

document.querySelectorAll('fieldset.beverage').forEach(fieldset => {
    const wrapper = document.createElement('div');
    wrapper.className = 'field';

    const label = document.createElement('span');
    label.className = 'label-text';
    label.textContent = 'И еще вот что';
    wrapper.appendChild(label);

    const textarea = document.createElement('textarea');
    textarea.rows = 3;
    textarea.style.display = 'block';
    textarea.style.marginTop = '5px';
    wrapper.appendChild(textarea);

    const output = document.createElement('div');
    output.style.marginTop = '8px';
    wrapper.appendChild(output);

    fieldset.appendChild(wrapper);

    textarea.addEventListener('input', () => {
        let text = textarea.value;
        text = text.replace(
            /(срочно|быстрее|побыстрее|скорее|поскорее|очень нужно)/gi,
            '<b>$1</b>'
        );
        output.innerHTML = text;
    });
});



