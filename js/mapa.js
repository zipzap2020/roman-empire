// Podaci o gradovima
        const cities = {
            roma: {
                name: "Roma (Rome)",
                description: "The capital of the Roman Empire and center of civilization. Famous for the Colosseum, Forum, and seat of the Senate. The city had over one million inhabitants and was the political, economic, and cultural center of the empire.",
                x: 455,
                y: 350,
                url: "gradovi/roma.html"
            },
            constantinopolis: {
                name: "Constantinopolis (Constantinople)",
                url: "gradovi/constantinopolis.html",
                x: 670,
                y: 360
            },
            alexandria: {
                name: "Alexandria",
                url: "gradovi/alexandria.html",
                x: 710,
                y: 555
            },
            carthago: {
                name: "Carthago (Carthage)",
                url: "gradovi/carthago.html",
                x: 420,
                y: 445
            },
            athenae: {
                name: "Athenae (Athens)",
                url: "gradovi/athenae.html",
                x: 615,
                y: 420
            },
            londinium: {
                name: "Londinium (London)",
                url: "gradovi/londinium.html",
                x: 295,
                y: 170
            },
            jerusalem: {
                name: "Jerusalem",
                url: "gradovi/jerusalem.html",
                x: 790,
                y: 540
            },
            antiocheia: {
                name: "Antiochia (Antioch)",
                url: "gradovi/antiocheia.html",
                x: 795,
                y: 460
            }
        };

        // Učitaj SVG fajl
        fetch('./slike/mapa.svg')
            .then(response => response.text())
            .then(svgContent => {
                document.getElementById('map-container').innerHTML = svgContent;
                addCityMarkers();
            })
            .catch(error => {
                console.error('Error loading map:', error);
                document.getElementById('map-container').innerHTML = 
                    '<p style="color: red;">Error: Cannot load the map. Check if the "mapa.svg" file is in the same folder.</p>';
            });

        function addCityMarkers() {
            const svg = document.querySelector('#map-container svg');
            if (!svg) return;
            
            // Kreiraj grupu za gradove
            const citiesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            citiesGroup.setAttribute('id', 'cities-layer');
            
            // Dodaj markere za sve gradove
            Object.keys(cities).forEach(cityId => {
                const city = cities[cityId];
                
                // Kreiraj grupu za grad
                const cityMarker = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                cityMarker.setAttribute('class', 'city-marker');
                cityMarker.setAttribute('data-city', cityId);
                
                // Dodaj krug za marker
                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', city.x);
                circle.setAttribute('cy', city.y);
                circle.setAttribute('r', '7');
                
                // Dodaj tekst sa imenom grada
                const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                text.setAttribute('x', city.x);
                text.setAttribute('y', city.y - 15);
                text.setAttribute('text-anchor', 'middle');
                text.textContent = city.name.split('(')[0].trim();
                
                // Dodaj event listener za klik
                // Izbriši staru liniju sa showCityInfo i ubaci ovo:
cityMarker.addEventListener('click', () => {
        window.location.href = city.url;
});

// Ostatak ostaje skoro isti, ali dodajemo jednu liniju za kursor
cityMarker.style.cursor = "pointer"; // Ovo dodaj da korisnik vidi da može da klikne

cityMarker.appendChild(circle);
cityMarker.appendChild(text);
citiesGroup.appendChild(cityMarker);
            });
            
            svg.appendChild(citiesGroup);
        }

