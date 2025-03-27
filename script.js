function cambiarColor() {
    const colores = ['#f4a261', '#2a9d8f', '#e76f51', '#264653', '#8ab17d'];
    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}