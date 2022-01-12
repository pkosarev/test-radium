const content = document.querySelector('.main');

function hideContent() {
    content.style.display = 'none';
}

content.addEventListener('click', hideContent);

window.addEventListener('keypress', (e) => {
    if (e.keyCode == 32) {
        content.remove();
    }
});

