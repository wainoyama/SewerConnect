        var map = L.map('map').setView([13.8241, 121.3542], 13); 

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        L.marker([13.8241, 121.3542]).addTo(map)
            .bindPopup('Libato, San Juan, Batangas')
            .openPopup();

        function bookSewer(sewerName) {
            Swal.fire({
                title: 'Book ' + sewerName,
                text: 'Would you like to book ' + sewerName + ' for your sewing needs?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#26395B',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, book now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Booked!',
                        'Your booking with ' + sewerName + ' has been confirmed.',
                        'success'
                    )
                }
            })
        }