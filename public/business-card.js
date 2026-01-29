// ========== FUNCIONALIDAD QR MODAL ==========
let qrGenerated = false;

function toggleQR() {
    const modal = document.getElementById('qr-modal');
    modal.classList.add('active');
    
    if (!qrGenerated) {
        const card = document.querySelector('.business-card');
        const qrUrl = card.getAttribute('data-qr-url') || window.location.href;
        generateQR(qrUrl);
        qrGenerated = true;
    }
}

function generateQR(url) {
    const container = document.getElementById('qr-code-container');
    container.innerHTML = '';
    
    // Usar QRCode con new para crear instancia
    new QRCode(container, {
        text: url,
        width: 220,
        height: 220,
        colorDark: '#070a2a',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

function closeQR() {
    const modal = document.getElementById('qr-modal');
    modal.classList.remove('active');
}

window.addEventListener('click', function(e) {
    const modal = document.getElementById('qr-modal');
    if (e.target === modal) {
        closeQR();
    }
});

window.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeQR();
    }
});

function downloadQR() {
    const canvas = document.querySelector('#qr-code-container canvas');
    if (canvas) {
        const link = document.createElement('a');
        link.download = 'codigo-qr.png';
        link.href = canvas.toDataURL();
        link.click();
    }
}

// ========== COPIAR AL PORTAPAPELES ==========
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        const btn = event.target.closest('.copy-btn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.style.background = 'var(--card-secondary)';
        
        setTimeout(function() {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 1500);
    });
}
