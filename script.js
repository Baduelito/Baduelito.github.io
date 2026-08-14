// ============================================================
// ELEMENTOS
// ============================================================
const pantallaInicio = document.getElementById('pantalla-inicio');
const invitacionCompleta = document.getElementById('invitacion-completa');
const btnAbrir = document.getElementById('btn-abrir');
const btnMusica = document.getElementById('btn-musica');
const audio = document.getElementById('musica');

// ============================================================
// ABRIR INVITACIÓN (Botón "Ábreme")
// ============================================================
btnAbrir.addEventListener('click', function() {
    // Animación de salida del sobre
    const sobre = document.querySelector('.sobre-flecha');
    sobre.style.transition = 'all 0.6s ease';
    sobre.style.transform = 'scale(1.3) rotate(10deg)';
    sobre.style.opacity = '0';

    // Ocultar pantalla de inicio después de la animación
    setTimeout(() => {
        pantallaInicio.style.display = 'none';
        invitacionCompleta.style.display = 'block';
        
        // Reproducir música
        audio.play().catch(() => {
            console.log('El navegador bloqueó el autoplay. Usa el botón de música.');
        });
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 700);
});

// ============================================================
// CONTROL DE MÚSICA
// ============================================================
let musicaActiva = true;

btnMusica.addEventListener('click', function() {
    if (musicaActiva) {
        audio.pause();
        btnMusica.textContent = '🔇';
        musicaActiva = false;
    } else {
        audio.play();
        btnMusica.textContent = '🔊';
        musicaActiva = true;
    }
});

// ============================================================
// CUENTA REGRESIVA
// ============================================================
// 📅 CAMBIA ESTA FECHA por la de tu evento
const fechaEvento = new Date('September 19, 2026 19:00:00 GMT-0600').getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaEvento - ahora;

    if (diferencia < 0) {
        document.getElementById('dias').textContent = '00';
        document.getElementById('horas').textContent = '00';
        document.getElementById('minutos').textContent = '00';
        document.getElementById('segundos').textContent = '00';
        return;
    }

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

actualizarContador();
setInterval(actualizarContador, 1000);