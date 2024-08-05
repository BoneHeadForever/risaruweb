document.addEventListener('DOMContentLoaded', (event) => {
    // Sayfa yüklendiğinde bir alert göster
    alert('Renkli web sitemize hoş geldiniz!');

    // Alert butonuna tıklandığında bir alert göster
    const alertButton = document.getElementById('alertButton');
    alertButton.addEventListener('click', () => {
        alert('Bu bir uyarıdır!');
    });

    // Pop-up işlemleri
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');
    
    // Sayfa yüklendiğinde pop-up göster
    popup.style.display = 'flex';

    // Kapatma butonuna tıklandığında pop-up gizle
    closePopup.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    // Pop-up dışında bir yere tıklandığında pop-up gizle
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
