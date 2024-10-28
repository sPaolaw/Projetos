// scripts.js

document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a');
    
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            // Verifica se o link deve abrir em uma nova aba
            if (!link.hasAttribute('href') || link.getAttribute('href').startsWith('#')) {
                return; // Não faz nada para links internos ou sem href
            }
            
            // Impede o comportamento padrão do link
            event.preventDefault();
            
            // Abre o link em uma nova aba
            window.open(link.getAttribute('href'), '_blank');
        });
    });
});
