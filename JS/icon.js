document.addEventListener('DOMContentLoaded', () => {
    const kebersihanIcon = document.getElementById('kebersihan-icon');

    setInterval(() => {
        if (kebersihanIcon.style.animation) {
            kebersihanIcon.style.animation = '';
        } else {
            kebersihanIcon.style.animation = 'wave 2s infinite';
        }
    }, 2000);
});