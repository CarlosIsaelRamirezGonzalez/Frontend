const search = document.querySelector('.search');
const input = document.querySelector('.input');
const button = document.querySelector('.btn');

button.addEventListener('click', () => {
    search.classList.add('active');
    input.focus()
});

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        search.classList.remove('active');
        input.value = "";
    }
});