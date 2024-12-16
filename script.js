// Funksjon for å vise et varsel når et bilde klikkes på
document.querySelectorAll('.image-item img').forEach(image => {
    image.addEventListener('click', () => {
        alert('Du klikket på et bilde!');
    });
});
