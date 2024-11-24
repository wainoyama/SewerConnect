document.addEventListener('DOMContentLoaded', function() {
    // Initialize map
    var map = L.map('map').setView([13.8241, 121.3542], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([13.8241, 121.3542]).addTo(map)
        .bindPopup('Libato, San Juan, Batangas')
        .openPopup();

    // Toggle menu for mobile
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Contact data
    const contacts = [
        {
            name: "Lerma Molar",
            image: "./assets/lerma.JPG",
            cellphone: "09603816635",
            email: "lermamolar@example.com",
            facebook: "https://www.facebook.com/share/18ARft1qnD/?mibextid=LQQJ4d"
        },
        {
            name: "Matilde Ronquillo Andes",
            image: "./assets/matilde.JPG",
            cellphone: "09287756302",
            email: "matildeandes@example.com",
            facebook: "https://www.facebook.com/share/18KYPHfeoT/?mibextid=LQQJ4d"
        },
        {
            name: "Gregoria Porto",
            image: "./assets/porto.JPG",
            cellphone: "09817503346",
            email: "gregoriaporto@example.com",
            facebook: "https://www.facebook.com/share/1GrfNxhKkY/?mibextid=LQQJ4d"
        },
        {
            name: "Juliet Monteroso",
            image: "./assets/juliet.JPG",
            cellphone: "09500359844",
            email: "julietmonteroso@example.com",
            facebook: "https://www.facebook.com/share/1CvvfoEkmh/?mibextid=LQQJ4d"
        },
        {
            name: "Renante Masenas",
            image: "./assets/Renante.jpg",
            facebook: "https://www.facebook.com/share/1Adxop157Y/?mibextid=LQQJ4d"
        },
        {
            name: "Jovita Fancubit",
            image: "./assets/jovita.JPG",
            cellphone: "09317692758",
            email: "jovitafancubit@example.com",
            facebook: "https://www.facebook.com/share/184yA3M8XG/?mibextid=LQQJ4d"
        }
    ];

    // Populate contacts
    const contactGrid = document.getElementById('contact-grid');
    contacts.forEach(contact => {
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card';
        contactCard.innerHTML = `
            <img src="${contact.image}" alt="${contact.name}">
            <h3>${contact.name}</h3>
            ${contact.cellphone ? `<p>Cellphone: ${contact.cellphone}</p>` : ''}
            ${contact.email ? `<p>Email: ${contact.email}</p>` : ''}
            <p><a href="${contact.facebook}" target="_blank">Facebook Profile</a></p>
            <button onclick="bookSewer('${contact.name}')">Book</button>
        `;
        contactGrid.appendChild(contactCard);
    });

    // Researcher data
    const researchers = [
        { name: "Mary Grace A. Aclan", image: "./assets/researchers/aclan.JPG" },
        { name: "Kim Ariola", image: "./assets/researchers/kim.JPG" },
        { name: "Marc Lester L. Garma", image: "./assets/researchers/garma.JPG" }
    ];

    // Populate researchers
    const researcherGrid = document.getElementById('researcher-grid');
    researchers.forEach(researcher => {
        const researcherCard = document.createElement('div');
        researcherCard.className = 'researcher-card';
        researcherCard.innerHTML = `
            <img src="${researcher.image}" alt="${researcher.name}">
            <h3>${researcher.name}</h3>
        `;
        researcherGrid.appendChild(researcherCard);
    });

    // Sample photos data
    const samplePhotos = {
        materials: [
            { src: "./assets/about us/mats (1).jpg", caption: "Materyales" },
            { src: "./assets/about us/mats (2).jpg", caption: "Materyales" },
            { src: "./assets/about us/mats (3).jpg", caption: "Materyales" },
            { src: "./assets/about us/mats (4).jpg", caption: "Materyales" },
        ],
        process: [
            { src: "./assets/about us/process.jpg", caption: "Proseso" },
            { src: "./assets/about us/process (1).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (2).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (3).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (4).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (5).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (6).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (7).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (8).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (9).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (10).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (11).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (12).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (13).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (14).jpg", caption: "Proseso" },
            { src: "./assets/about us/process (15).jpg", caption: "Proseso" },
        ],
        finalProduct: [
            { src: "./assets/about us/f.jpg", caption: "Final Products" },
            { src: "./assets/about us/f(1).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(2).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(3).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(4).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(5).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(6).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(7).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(8).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(9).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(10).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(11).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(12).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(13).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(14).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(15).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(16).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(17).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(18).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(19).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(20).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(21).jpg", caption: "Final Products" },
            { src: "./assets/about us/f(22).jpg", caption: "Final Products" },
        ]
    };

    // Populate sample photos
    function populatePhotoGrid(gridId, photos, category) {
        const grid = document.getElementById(gridId);
        photos.forEach((photo, index) => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.caption}">
                <div class="caption">${photo.caption}</div>
            `;
            photoItem.addEventListener('click', () => openPhotoModal(category, index));
            grid.appendChild(photoItem);
        });
    }

    populatePhotoGrid('materials-grid', samplePhotos.materials, 'materials');
    populatePhotoGrid('process-grid', samplePhotos.process, 'process');
    populatePhotoGrid('final-product-grid', samplePhotos.finalProduct, 'finalProduct');

    // Photo modal functionality
    const photoModal = document.getElementById('photo-modal');
    const modalTitle = document.getElementById('modal-title');
    const photoScroll = document.getElementById('photo-scroll');
    const closeBtn = document.getElementsByClassName('close')[0];

    function openPhotoModal(category, startIndex) {
        modalTitle.textContent = getCategoryTitle(category);
        photoScroll.innerHTML = '';
        samplePhotos[category].forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.caption;
            img.title = photo.caption;
            photoScroll.appendChild(img);
        });
        photoModal.style.display = 'block';
        photoScroll.scrollTop = 0;
        const startImg = photoScroll.children[startIndex];
        if (startImg) {
            startImg.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    function getCategoryTitle(category) {
        switch(category) {
            case 'materials':
                return 'Mga Materyales';
            case 'process':
                return 'Proseso ng Paggawa';
            case 'finalProduct':
                return 'Mga Tapos na Produkto';
            default:
                return 'Mga Larawan';
        }
    }

    closeBtn.onclick = function() {
        photoModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == photoModal) {
            photoModal.style.display = 'none';
        }
    }
});

// Booking function with SweetAlert
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

