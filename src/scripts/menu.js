document.addEventListener('DOMContentLoaded', () => {
    const checkLinks = () => {
        const links = document.querySelectorAll('nav a'); // Selecciona los enlaces
        console.log('Enlaces encontrados:', links); // Verifica si los enlaces están presentes

        if (links.length > 0) { // Si los enlaces están presentes
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            console.log('Página actual:', currentPage);

            links.forEach(link => {
                const linkHref = link.getAttribute('href');
                console.log('Comprobando enlace:', linkHref);

                if (linkHref.replace('/', '') === currentPage) {
                    console.log(`Ocultando enlace: ${linkHref}`);
                    link.style.display = 'none';
                }
            });
        } else {
            setTimeout(checkLinks, 100); // Reintenta si los enlaces no están listos
        }
    };

    checkLinks();
});
