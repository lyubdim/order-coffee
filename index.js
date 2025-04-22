document.addEventListener('DOMContentLoaded', () => {
    function addDeleteButtons() {
        document.querySelectorAll('fieldset.beverage').forEach(fieldset => {
            if (fieldset.querySelector('.delete-beverage')) return;
            
            fieldset.style.position = 'relative';
            
            const btn = document.createElement('button');
            btn.type = 'button';
            btn.innerHTML = '&times;';           
            btn.classList.add('delete-beverage');
            Object.assign(btn.style, {
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'transparent',
                border: 'none',
                fontSize: '18px',
                cursor: 'pointer',
                lineHeight: '1'
            });
            
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
