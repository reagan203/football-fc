
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('dark-mode-toggle');

    toggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
