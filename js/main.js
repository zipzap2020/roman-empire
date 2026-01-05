document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById('cardTrack');
    const btnLeft = document.getElementById('prevBtn');
    const btnRight = document.getElementById('nextBtn');
    const cards = document.querySelectorAll('.card-item');

    if (!track || !btnLeft || !btnRight) return;

    // Funkcija koja određuje koja je kartica u centru
    const updateActiveCard = () => {
        let centerPoint = track.getBoundingClientRect().left + track.offsetWidth / 2;
        
        cards.forEach(card => {
            const cardRect = card.getBoundingClientRect();
            const cardCenter = cardRect.left + cardRect.width / 2;
            
            // Ako je centar kartice blizu centra kontejnera (tolerancija 100px)
            if (Math.abs(centerPoint - cardCenter) < 150) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });
    };

    // Prati skrol za promenu fokusa
    track.addEventListener('scroll', updateActiveCard);

    // Pomeranje na klik
    const scrollStep = () => cards[0].offsetWidth + 20;

    btnRight.addEventListener('click', () => {
        const maxScroll = track.scrollWidth - track.clientWidth;
        if (track.scrollLeft >= maxScroll - 10) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: scrollStep(), behavior: 'smooth' });
        }
    });

    btnLeft.addEventListener('click', () => {
        if (track.scrollLeft <= 10) {
            track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' });
        } else {
            track.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
        }
    });

    // Inicijalno pokreni da prva kartica dobije fokus
    updateActiveCard();
});