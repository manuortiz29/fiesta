const titulo = document.getElementById('titulo');
const colores = document.querySelectorAll('.color');
const reiniciarBtn = document.getElementById('reiniciar');
const contador = document.getElementById('contador');

let votos = {};

colores.forEach(color => {
    color.addEventListener('click', () => {
        titulo.style.backgroundColor = color.classList[1];
        // Reproducir sonido (requiere una biblioteca de audio)
        // new Audio('aplauso.mp3').play();

        // Contar votos
        if (votos[color.classList[1]]) {
            votos[color.classList[1]]++;
        } else {
            votos[color.classList[1]] = 1;
        }

        // Mostrar color más popular
        let colorMasPopular = Object.keys(votos).reduce((a, b) => votos[a] > votos[b] ? a : b);
        contador.textContent = `El color es: ${colorMasPopular}`;

        // Reiniciar temporizador
        clearTimeout(timeout);
        timeout = setTimeout(reiniciar, 10000);
    });
});

function reiniciar() {
    colores.forEach(color => {
        color.style.backgroundColor = '';
    });
    titulo.style.backgroundColor = '';
    contador.textContent = '';
    votos = {};
}

let timeout = setTimeout(reiniciar, 10000);

reiniciarBtn.addEventListener('click', reiniciar);