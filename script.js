const garden = document.querySelector('.garden');

// Fungsi untuk membuat bunga mawar
function createRose() {
    const rose = document.createElement('div');
    rose.classList.add('rose');

    const stem = document.createElement('div');
    stem.classList.add('stem');

    const leaf = document.createElement('div');
    leaf.classList.add('leaf');

    rose.appendChild(stem);
    rose.appendChild(leaf);

    // Posisi acak di dalam layar
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    rose.style.left = `${x}px`;
    rose.style.top = `${y}px`;

    // Ukuran acak
    const size = Math.random() * 0.5 + 0.5; // Ukuran antara 0.5x dan 1x
    rose.style.transform = `scale(${size})`;

    // Animasi delay acak
    const delay = Math.random() * 2;
    rose.style.animationDelay = `${delay}s`;

    garden.appendChild(rose);
}

// Membuat banyak bunga mawar
for (let i = 0; i < 50; i++) {
    createRose();
}