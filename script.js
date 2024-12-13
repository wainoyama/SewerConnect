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
        },
        {
            name: "test",
            image: "",
            cellphone: "09553447568",
            email: "jpreytapogi@gmail.com",
            facebook: ""
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
            <button onclick="bookSewer('${contact.name}', '${contact.email}')">Book</button>
        `;
        contactGrid.appendChild(contactCard);
    });

    const researchers = [
        { name: "Mary Grace A. Aclan", image: "./assets/researchers/aclan.JPG", fb: "https://www.facebook.com/share/18HysXDnMM/?mibextid=LQQJ4d" },
        { name: "Kim Ariola", image: "./assets/researchers/kim.JPG", fb: "https://www.facebook.com/share/1Co6mu4i8C/?mibextid=LQQJ4d" },
        { name: "Marc Lester L. Garma", image: "./assets/researchers/garma.JPG", fb: "https://www.facebook.com/share/1EkAVwXFdL/?mibextid=LQQJ4d" }
    ];
    
    const researcherGrid = document.getElementById('researcher-grid');
    researchers.forEach(researcher => {
        const researcherCard = document.createElement('div');
        researcherCard.className = 'researcher-card';
        researcherCard.innerHTML = `
            <img src="${researcher.image}" alt="${researcher.name}">
            <h3><a href="${researcher.fb}" target="_blank">${researcher.name}</a></h3>
        `;
        researcherGrid.appendChild(researcherCard);
    });

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
            { src: "./assets/about us/f (1).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (2).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (3).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (4).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (5).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (6).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (7).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (8).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (9).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (10).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (11).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (12).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (13).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (14).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (15).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (16).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (17).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (18).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (19).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (20).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (21).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (22).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (23).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (24).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (25).jpg", caption: "Final Products" },
            { src: "./assets/about us/f (26).jpg", caption: "Final Products" }
        ]
    };

    const sampleVideos = [
        { src: "./assets/home/samp_vid (1).mp4", caption: "Video 1" },
        { src: "./assets/home/samp_vid (2).mp4", caption: "Video 2" },
        { src: "./assets/home/samp_vid (3).mp4", caption: "Video 3" }
    ];

    const groupPhotos = [
        { src: "./assets/home/g (1).jpg", caption: "Group Photo 1" },
        { src: "./assets/home/g (2).jpg", caption: "Group Photo 2" },
        { src: "./assets/home/g (3).jpg", caption: "Group Photo 3" },
        { src: "./assets/home/g (4).jpg", caption: "Group Photo 4" }
    ];

    const ITEMS_PER_PAGE = 12;

    function populatePhotoGrid(gridId, photos, category) {
        const grid = document.getElementById(gridId);
        grid.innerHTML = '';
        
        photos.slice(0, ITEMS_PER_PAGE).forEach((photo, index) => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
                <div class="caption">${photo.caption}</div>
            `;
            photoItem.addEventListener('click', () => openPhotoModal(category, index));
            grid.appendChild(photoItem);
        });

        if (photos.length > ITEMS_PER_PAGE) {
            const loadMoreButton = document.createElement('button');
            loadMoreButton.textContent = 'Load More';
            loadMoreButton.className = 'load-more-button';
            loadMoreButton.addEventListener('click', () => loadMorePhotos(gridId, photos, category));
            grid.parentNode.appendChild(loadMoreButton);
        }
    }

    function loadMorePhotos(gridId, photos, category) {
        const grid = document.getElementById(gridId);
        const currentCount = grid.children.length;
        const nextBatch = photos.slice(currentCount, currentCount + ITEMS_PER_PAGE);

        nextBatch.forEach((photo, index) => {
            const photoItem = document.createElement('div');
            photoItem.className = 'photo-item';
            photoItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
                <div class="caption">${photo.caption}</div>
            `;
            photoItem.addEventListener('click', () => openPhotoModal(category, currentCount + index));
            grid.appendChild(photoItem);
        });

        if (grid.children.length >= photos.length) {
            grid.parentNode.querySelector('.load-more-button').style.display = 'none';
        }
    }

    function populateVideoGrid(gridId, videos) {
        const grid = document.getElementById(gridId);
        videos.forEach((video, index) => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = `
                <video src="${video.src}" controls></video>
                <div class="caption">${video.caption}</div>
            `;
            grid.appendChild(videoItem);
        });
    }

    function populateGroupPhotos(containerId, photos) {
        const container = document.getElementById(containerId);
        photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.caption;
            img.className = 'group-photo';
            img.title = photo.caption;
            container.appendChild(img);
        });
    }

    populatePhotoGrid('materials-grid', samplePhotos.materials, 'materials');
    populatePhotoGrid('process-grid', samplePhotos.process, 'process');
    populatePhotoGrid('final-product-grid', samplePhotos.finalProduct, 'finalProduct');
    populateVideoGrid('video-grid', sampleVideos);
    populateGroupPhotos('group-photos', groupPhotos);

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

    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(tabId) {
        tabContents.forEach(content => {
            content.style.display = 'none';
        });
        tabLinks.forEach(link => {
            link.classList.remove('active');
        });

        const selectedTab = document.getElementById(tabId);
        const selectedLink = document.querySelector(`[data-tab="${tabId}"]`);

        if (selectedTab && selectedLink) {
            selectedTab.style.display = 'block';
            selectedLink.classList.add('active');
        }

        // Show/hide the map based on the selected tab
        const mapElement = document.getElementById('map');
        if (mapElement) {
            mapElement.style.display = tabId === 'home' ? 'block' : 'none';
        }
    }

    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const tabId = this.getAttribute('data-tab');
            showTab(tabId);
        });
    });

    // Show the default tab (home) on page load
    showTab('home');
});

function bookSewer(sewerName, sewerEmail) {
    Swal.fire({
        title: 'Book ' + sewerName,
        html:
            '<form id="bookingForm">' +
            '<input id="customerName" name="customerName" class="swal2-input" placeholder="Your Name" required>' +
            '<input id="customerPhone" name="customerPhone" class="swal2-input" placeholder="Your Phone Number" required>' +
            '<input id="customerEmail" name="customerEmail" class="swal2-input" type="email" placeholder="Your Email" required>' +
            '<input id="projectDate" name="projectDate" class="swal2-input" type="date" placeholder="Expected Completion Date" required>' +
            '<textarea id="projectDescription" name="projectDescription" class="swal2-textarea" placeholder="Project Description" required></textarea>' +
            '</form>',
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Book Now',
        cancelButtonText: 'Cancel',
        preConfirm: () => {
            const form = document.getElementById('bookingForm');
            if (!form.checkValidity()) {
                Swal.showValidationMessage('Please fill in all required fields');
                return false;
            }
            const formData = new FormData(form);
            formData.append('sewerName', sewerName);
            formData.append('sewerEmail', sewerEmail);

            return fetch('booking/book_sewer.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(text => {
                try {
                    return JSON.parse(text);
                } catch (error) {
                    console.error('Error parsing JSON:', text);
                    throw new Error('Server response was not valid JSON');
                }
            })
            .then(data => {
                if (data.success) {
                    return data.message;
                } else {
                    throw new Error(data.message || 'An unknown error occurred');
                }
            });
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Booked!', result.value, 'success');
        }
    }).catch(error => {
        console.error('Booking error:', error);
        Swal.fire('Error', error.message, 'error');
    });
}