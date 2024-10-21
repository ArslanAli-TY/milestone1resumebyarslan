// script.js

// Add event listeners to links
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        window.open(link.href, '_blank');
    });
});