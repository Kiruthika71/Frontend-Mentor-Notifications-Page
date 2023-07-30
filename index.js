const button = document.querySelector('.mark-all');
const unread = document.querySelector('.unread');
const number = document.querySelector('.number');

button.addEventListener('click', () => {
    document.querySelectorAll('.notifications').forEach(e => {
        e.classList.remove('unread');
    });
    document.querySelector('.number').innerText = '0';
})

unread.addEventListener('click', () => {
    unread.classList.remove('unread');
})

