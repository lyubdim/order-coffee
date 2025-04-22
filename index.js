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
