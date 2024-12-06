const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD',
    '#D4A5A5', '#9B59B6', '#3498DB', '#FF8C94', '#A8E6CF'
];

function getRandomPosition() {
    const padding = 100;
    return {
        x: Math.random() * (window.innerWidth - padding * 2) + padding,
        y: Math.random() * (window.innerHeight - padding * 2) + padding
    };
}

function centerFirstHeart() {
    const firstHeart = document.querySelector('.heart');
    if (!firstHeart) return;

    // Posiciona el corazón en el centro absoluto de la pantalla
    const heartSize = firstHeart.offsetWidth;
    const x = (window.innerWidth / 2) - (heartSize / 2);
    const y = (window.innerHeight / 2) - (heartSize / 2);
    
    firstHeart.style.left = `${x}px`;
    firstHeart.style.top = `${y}px`;
    firstHeart.style.color = colors[0];
}

function createHeart(event) {
    const container = document.getElementById('hearts-container');
    const newHeart = document.createElement('div');
    newHeart.className = 'heart';
    newHeart.onclick = (e) => createHeart(e);
    
    let x, y;
    if (event) {
        // Posición relativa al clic
        const containerRect = container.getBoundingClientRect();
        x = event.clientX - containerRect.left - 50;
        y = event.clientY - containerRect.top - 50;
        
        // Crear 2 corazones adicionales en posiciones aleatorias
        for (let i = 0; i < 2; i++) {
            const pos = getRandomPosition();
            const extraHeart = createExtraHeart(pos.x, pos.y);
            container.appendChild(extraHeart);
        }
    } else {
        const pos = getRandomPosition();
        x = pos.x;
        y = pos.y;
    }
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    newHeart.style.left = `${x}px`;
    newHeart.style.top = `${y}px`;
    newHeart.style.color = randomColor;
    
    const span = document.createElement('span');
    span.textContent = 'Feliz cumpleaños beba';
    newHeart.appendChild(span);
    
    container.appendChild(newHeart);
    
    // Animación de entrada
    newHeart.style.transform = 'scale(0)';
    setTimeout(() => {
        newHeart.style.transform = 'scale(1)';
    }, 50);
}

function createExtraHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.onclick = (e) => createHeart(e);
    
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    const span = document.createElement('span');
    span.textContent = 'Feliz cumpleaños beba';
    heart.appendChild(span);
    
    heart.style.transform = 'scale(0)';
    setTimeout(() => {
        heart.style.transform = 'scale(1)';
    }, 50);
    
    return heart;
}

// Centrar el corazón inicial y mantenerlo centrado al redimensionar
window.addEventListener('load', centerFirstHeart);
window.addEventListener('resize', centerFirstHeart);