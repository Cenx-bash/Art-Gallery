// Artworks data
const artworks = [
    {   //visual arts = painting
        //applied arts = sculpture
        //literary arts = digital
        //performance arts = photography
        id: 1,
         title: "Tahimik na Gabi sa bitak Na Bato",
        artist: "VCENZO",
        category: "painting",
        image: "resources/images/visual_arts/Tahimikvcenzo.jpg",
        description: "depicts a tranquil night scene in a revolutionary encampment inspired by the Katipunan and the Biak-na-Bato Republic.",
        medium: "Oil on canvas",
        dimensions: "100 × 80 cm",
        year: "2024"
    },
    {
        id: 2,
        title: "Women Pounding Rice",
        artist: "Sofia Louise C. Zaballa",
        category: "painting",
        image: "resources/images/visual_arts/WomenPounding.jpg",
        description: "This painting was inspired by the casual Filipino afternoon snack, “Linubak,” made by pounding cassava on a giant mortar and pestle called “Lubakan” in Camarines Norte. You can also use this to make other filipino snacks like “Tikoy” by pounding sticky rice.",
        medium: "Oil on canvas",
        dimensions: "1080 x 1920",
        year: "May 2022"
    },
    {
        id: 3,
        title: "Threads of Ancestry",
        artist: "Ashley Marie Casili",
        category: "painting",
        image: "resources/images/visual_arts/Threads_Casili.png",
        description: "The artwork evokes strong presentation about the T’boli tribe of the Philippines, which are mostly known for their rich weaving traditions and distinctive clothing.",
        medium: "Digital Art/Application, IbispaintX",
        dimensions: "3000 x 3000 px",
        year: "2025"
    },
    {
        id: 4,
        title: "Batok, Stories, Identity",
        artist: "Mariella Angela M. Baleciado",
        category: "painting",
        image: "resources/images/visual_arts/Batok_Baleciado.jpg",
        description: "The piece honors the heritage of tattooing as a cultural language, where every mark carries a story of one’s community, achievements, beliefs, and connection to the natural world.",
        medium: "Coffee, Paper, Ink",
        dimensions: "",
        year: "November 10 2025"
    },
    {
        id: 5,
        title: "Ina",
        artist: "Kent Steven Abillon",
        category: "painting",
        image: "resources/images/visual_arts/Ina_Abillon.png",
        description: "the devotion of the pilgrim to Ina. It represent the dedication and celebration of event where they experience a little or mini fluvial where bicolanos gather for the Sakay of Ina",
        medium: "Sony A711, Edited in Lightroom",
        dimensions: "1080 × 1350 pixels",
        year: "July 11 2025"
    },
    {
        id: 6,
        title: "Tribal Rhythm",
        artist: "Angeline Dela Cruz Marcaida",
        category: "sculpture",
        image: "resources/images/applied_arts/Tribal_Cons.jpg",
        description: "formations. Its bold structure highlights traditional ornamentation often found in indigenous cultures. The piece visually strikes a sense of strength and rooted identity.",
        medium: "metal beads, iron coiled wire strands.",
        dimensions: "20' length",
        year: "2022"
    },
    {
        id: 7,
        title: "The Blood of Our Kin",
        artist: "Karl Christian M. Garcia",
        category: "digital",
        image: "resources/images/literary_arts/bloodKin.jpg",
        description: "a contemporary poem that explores themes of decolonization and the reclamation of Filipino Identity. It reflects on the enduring effects of colonialism, the rich heritage of Filipino ancestors, and the importance of remembering and embracing one’s roots.",
        medium: "Poem",
        dimensions: "Various dimensions",
        year: "November 24 2025"
    },
    ,
    {
        id: 8,
        title: "Lupang Sinilangan",
        artist: "Eman Rey Gases",
        category: "digital",
        image: "resources/images/literary_arts/Gases.jpg",
        description: "Ang tulang ito ay tungkol sa pagkakakilanlan at kasaysayan ng pilipino.",
        medium: "Poem",
        dimensions: "Various dimensions",
        year: "October 28 2025"
    },
    
];

// Artists data
const artists = {
    elena: {
        name: "Elena Rodriguez",
        location: "Barcelona, Spain",
        bio: "Elena Rodriguez is a contemporary painter known for her vibrant exploration of identity through abstract forms and bold color palettes. With over 15 years of experience, her work has been exhibited in galleries across Europe and North America. Elena's unique approach combines traditional painting techniques with modern emotional expression, creating pieces that resonate deeply with viewers.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        stats: {
            exhibitions: 15,
            awards: 3,
            artworks: 50,
            collections: 25
        },
        social: {
            instagram: "@elenarodriguezart",
            twitter: "@elena_art",
            behance: "elenarodriguez"
        }
    },
    marcus: {
        name: "Marcus Chen",
        location: "Tokyo, Japan",
        bio: "Marcus Chen is a pioneering mixed media artist who seamlessly blends traditional techniques with cutting-edge digital elements. His interactive installations have captivated audiences worldwide, pushing the boundaries of what constitutes contemporary art. Marcus's work often explores the intersection of technology, nature, and human consciousness.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        stats: {
            exhibitions: 12,
            awards: 5,
            artworks: 35,
            collections: 18
        },
        social: {
            instagram: "@marcuschen.digital",
            twitter: "@marcuschen",
            behance: "marcuschen"
        }
    },
    sophie: {
        name: "Sophie Williams",
        location: "London, UK",
        bio: "Sophie Williams is an environmental sculptor renowned for her work with reclaimed materials. Her large-scale installations address pressing ecological issues while maintaining aesthetic beauty. Sophie's commitment to sustainability extends beyond her art, as she actively participates in environmental conservation projects and educates communities about sustainable art practices.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        stats: {
            exhibitions: 18,
            awards: 4,
            artworks: 40,
            collections: 22
        },
        social: {
            instagram: "@sophiewilliams.sculpture",
            twitter: "@sophie_sculpts",
            behance: "sophiewilliams"
        }
    }
};

// DOM Elements
const galleryGrid = document.getElementById('galleryGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navbar = document.querySelector('.navbar');
const lightbox = document.getElementById('lightbox');
const closeLightbox = document.querySelector('.close-lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxArtist = document.getElementById('lightbox-artist');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxMedium = document.getElementById('lightbox-medium');
const lightboxDimensions = document.getElementById('lightbox-dimensions');
const lightboxYear = document.getElementById('lightbox-year');
const contactForm = document.getElementById('contactForm');
const commentForm = document.getElementById('commentForm');
const loadingScreen = document.getElementById('loading');
const heroCanvas = document.getElementById('heroCanvas');
const statNumbers = document.querySelectorAll('.stat-number[data-count]');
const artistModal = document.getElementById('artistModal');
const closeArtistModal = document.querySelector('.close-artist-modal');
const artistModalBody = document.getElementById('artistModalBody');
const takePhotoBtn = document.getElementById('takePhotoBtn');
const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
const cameraView = document.getElementById('cameraView');
const photosGrid = document.getElementById('photosGrid');
const commentsGrid = document.getElementById('commentsGrid');

// Initialize the application
function initApp() {
    try {
        // Check if gallery grid exists
        if (!galleryGrid) {
            console.error('Gallery grid element not found');
            return;
        }
        
        displayArtworks(artworks);
        setupEventListeners();
        initCanvasAnimation();
        startLoadingAnimation();
        loadSampleComments();
        loadSamplePhotos();
    } catch (error) {
        console.error('Error initializing app:', error);
        // Ensure loading screen hides even if there's an error
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
        }
    }
}

// Display artworks in the gallery
function displayArtworks(artworksToShow) {
    galleryGrid.innerHTML = '';
    
    artworksToShow.forEach(artwork => {
        const artworkElement = document.createElement('div');
        artworkElement.classList.add('artwork-card');
        artworkElement.setAttribute('data-category', artwork.category);
        
        artworkElement.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}" class="artwork-img">
            <div class="artwork-overlay">
                <h3 class="artwork-title">${artwork.title}</h3>
                <p class="artwork-artist">${artwork.artist}</p>
            </div>
        `;
        
        artworkElement.addEventListener('click', () => openLightbox(artwork));
        galleryGrid.appendChild(artworkElement);
    });
}

// Filter artworks by category
function filterArtworks(category) {
    if (category === 'all') {
        displayArtworks(artworks);
    } else {
        const filteredArtworks = artworks.filter(artwork => artwork.category === category);
        displayArtworks(filteredArtworks);
    }
}

function openLightbox(artwork) {
    const mediaContainer = document.getElementById("lightboxMedia"); 
    mediaContainer.innerHTML = ""; // Clear previous content

    let mediaElement;

    // Determine media type
    if (artwork.type === "youtube") {
        mediaElement = document.createElement("iframe");
        mediaElement.src = artwork.iframe;  
        mediaElement.width = "100%";
        mediaElement.height = "450";
        mediaElement.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        mediaElement.allowFullscreen = true;

    } else if (artwork.type === "pdf") {
        mediaElement = document.createElement("iframe");
        mediaElement.src = artwork.iframe; 
        mediaElement.width = "100%";
        mediaElement.height = "600";

    } else {
        // Default: image
        mediaElement = document.createElement("img");
        mediaElement.src = artwork.image;
        mediaElement.alt = artwork.title;
        mediaElement.classList.add("lightbox-img");
    }

    mediaContainer.appendChild(mediaElement);

    // Text content
    lightboxTitle.textContent = artwork.title;
    lightboxArtist.textContent = `By ${artwork.artist}`;
    lightboxDescription.textContent = artwork.description;
    lightboxMedium.textContent = artwork.medium;
    lightboxDimensions.textContent = artwork.dimensions;
    lightboxYear.textContent = artwork.year;

    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeLightboxFunc() {
    lightbox.classList.remove("active");
    document.body.style.overflow = "auto";

    // Stop videos when closing
    const mediaContainer = document.getElementById("lightboxMedia");
    mediaContainer.innerHTML = "";
}

// Open artist profile modal
function openArtistModal(artistId) {
    const artist = artists[artistId];
    if (!artist) return;
    
    artistModalBody.innerHTML = `
        <div class="artist-profile">
            <div class="artist-profile-image">
                <img src="${artist.image}" alt="${artist.name}">
            </div>
            <div class="artist-profile-info">
                <h2>${artist.name}</h2>
                <p class="artist-profile-location">
                    <i class="fas fa-map-marker-alt"></i> ${artist.location}
                </p>
                <p class="artist-profile-bio">${artist.bio}</p>
                
                <div class="artist-profile-stats">
                    <div class="artist-profile-stat">
                        <span class="number">${artist.stats.exhibitions}</span>
                        <span class="label">Exhibitions</span>
                    </div>
                    <div class="artist-profile-stat">
                        <span class="number">${artist.stats.awards}</span>
                            <span class="label">Awards</span>
                    </div>
                    <div class="artist-profile-stat">
                        <span class="number">${artist.stats.artworks}</span>
                        <span class="label">Artworks</span>
                    </div>
                </div>
                
                <div class="social-links">
                    <a href="#"><i class="fab fa-instagram"></i> ${artist.social.instagram}</a>
                    <a href="#"><i class="fab fa-twitter"></i> ${artist.social.twitter}</a>
                    <a href="#"><i class="fab fa-behance"></i> ${artist.social.behance}</a>
                </div>
            </div>
        </div>
    `;
    
    artistModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close artist modal
function closeArtistModalFunc() {
    artistModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Initialize canvas animation for hero section
function initCanvasAnimation() {
    const canvas = heroCanvas;
    
    // Check if canvas exists
    if (!canvas) {
        console.warn('Hero canvas element not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.warn('Canvas context not supported');
        return;
    }
    
    // Set canvas size
    function setCanvasSize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    // Particle system
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
            this.color = `rgba(230, 177, 126, ${Math.random() * 0.3 + 0.1})`;
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw connecting lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(230, 177, 126, ${0.2 * (1 - distance / 150)})`;
                    ctx.lineWidth = 0.5;
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        
        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Animate statistics counters
function animateCounters() {
    // Check if we have stat elements
    if (statNumbers.length === 0) {
        console.warn('No statistic counter elements found');
        return;
    }
    
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        // Add validation for target
        if (isNaN(target)) {
            console.warn('Invalid data-count value:', stat.getAttribute('data-count'));
            return;
        }
        
        const duration = 2000;
        const step = target / (duration / 16);
        
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current);
        }, 16);
    });
}

// Start loading animation
function startLoadingAnimation() {
    const percentageElement = document.querySelector('.loading-percentage');
    
    // If percentage element exists, show progress numbers
    if (percentageElement) {
        let progress = 0;
        const interval = setInterval(() => {
            progress += 1;
            percentageElement.textContent = `${progress}%`;
            
            if (progress >= 100) {
                clearInterval(interval);
                hideLoadingScreen();
            }
        }, 25);
    } else {
        // Fallback: simple timeout without percentage
        setTimeout(hideLoadingScreen, 2500);
    }
}

function hideLoadingScreen() {
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
        loadingScreen.style.display = 'none';
        // Only animate counters if they exist
        if (statNumbers.length > 0) {
            animateCounters();
        }
    }, 500);
}

// Load sample comments
function loadSampleComments() {
    const sampleComments = [
    ];
    
    sampleComments.forEach(comment => {
        addCommentToGrid(comment);
    });
} 

// Add comment to grid
function addCommentToGrid(comment) {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment-card');
    
    commentElement.innerHTML = `
        <div class="comment-header">
            <div class="comment-avatar">
                <i class="fas fa-user"></i>
            </div>
            <div class="comment-info">
                <h4>${comment.name}</h4>
                <span class="comment-date">${comment.date}</span>
            </div>
        </div>
        <p class="comment-text">${comment.text}</p>
    `;
    
    commentsGrid.appendChild(commentElement);
}

// Load sample photos
function loadSamplePhotos() {
    const samplePhotos = [
    ];
    
    samplePhotos.forEach(photo => {
        addPhotoToGrid(photo);
    });
}

// Add photo to grid
function addPhotoToGrid(photo) {
    const photoElement = document.createElement('div');
    photoElement.classList.add('photo-item');
    
    photoElement.innerHTML = `
        <img src="${photo.image}" alt="Gallery Photo">
        <div class="photo-info">
            <span class="photo-author">${photo.author}</span>
            <span class="photo-time">${photo.time}</span>
        </div>
    `;
    
    photosGrid.appendChild(photoElement);
}

// Simulate taking a photo
function takePhoto() {
    // In a real implementation, this would use the device camera
    // For demo purposes, we'll use a placeholder
    cameraView.innerHTML = `
        <div class="camera-placeholder">
            <i class="fas fa-check-circle" style="color: #4CAF50;"></i>
            <p>Photo captured! Ready to share.</p>
        </div>
    `;
    
    // Add the new photo to the grid
    const newPhoto = {
        image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        author: "You",
        time: "Just now"
    };
    
    addPhotoToGrid(newPhoto);
    
    showNotification('Photo captured and added to the gallery!');
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter artworks
            const filter = button.getAttribute('data-filter');
            filterArtworks(filter);
        });
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Lightbox close
    closeLightbox.addEventListener('click', closeLightboxFunc);
    
    // Close lightbox when clicking outside the content
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightboxFunc();
        }
    });
    
    // Artist modal close
    closeArtistModal.addEventListener('click', closeArtistModalFunc);
    
    // Close artist modal when clicking outside
    artistModal.addEventListener('click', (e) => {
        if (e.target === artistModal) {
            closeArtistModalFunc();
        }
    });
    
    // Artist profile links
    document.querySelectorAll('.view-profile').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const artistId = link.getAttribute('data-artist');
            openArtistModal(artistId);
        });
    });
    
    // Contact form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real application, you would send this data to a server
        console.log('Contact form submitted:', { name, email, message });
        
        // Show success message
        showNotification('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
    });
    
    // Comment form submission
    commentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('commentName').value;
        const message = document.getElementById('commentMessage').value;
        
        if (name && message) {
            const newComment = {
                name: name,
                date: 'Just now',
                text: message
            };
            
            addCommentToGrid(newComment);
            showNotification('Thank you for your comment!');
            commentForm.reset();
        }
    });
    
    // Photobooth functionality
// Element references
const takePhotoBtn = document.getElementById('takePhotoBtn');
const uploadPhotoBtn = document.getElementById('uploadPhotoBtn');
const submitPhotoBtn = document.getElementById('submitPhotoBtn');
const photoFileInput = document.getElementById('photoFileInput');
const cameraView = document.getElementById('cameraView');
const photosGrid = document.getElementById('photosGrid');
const videoFeed = document.getElementById('videoFeed');
const canvasSnapshot = document.getElementById('canvasSnapshot');
const cameraPlaceholder = document.getElementById('cameraPlaceholder');

// Global state variables
let currentPhotoDataURL = null;
let stream = null;

// Notification placeholder
function showNotification(message) {
    console.log(`[Notification] ${message}`);
}

// Enable/disable submit button
function enableSubmitButton(isEnabled) {
    submitPhotoBtn.disabled = !isEnabled;
    if (isEnabled) submitPhotoBtn.classList.add('btn-primary');
    else submitPhotoBtn.classList.remove('btn-primary');
}

// Stop camera stream
function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
}

// Take snapshot from camera
function takeSnapshot() {
    const context = canvasSnapshot.getContext('2d');

    canvasSnapshot.width = videoFeed.videoWidth;
    canvasSnapshot.height = videoFeed.videoHeight;

    context.drawImage(videoFeed, 0, 0, canvasSnapshot.width, canvasSnapshot.height);

    currentPhotoDataURL = canvasSnapshot.toDataURL('image/png');
    enableSubmitButton(true);

    videoFeed.style.display = 'none';
    canvasSnapshot.style.display = 'block';

    stopCamera();
    showNotification('Photo captured! Click "Submit Photo" to save.');
}

// Start camera feed
async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: "environment" },
            audio: false
        });

        videoFeed.srcObject = stream;

        videoFeed.onloadedmetadata = () => {
            videoFeed.play();

            cameraPlaceholder.style.display = 'none';
            canvasSnapshot.style.display = 'none';
            videoFeed.style.display = 'block';

            showNotification('Camera active. Click again to capture.');
        };

    } catch (err) {
        console.error("Camera error:", err);
        showNotification('Camera access denied. Please allow camera permission.');
        cameraPlaceholder.style.display = 'flex';
    }
}

// Handle Take Photo button logic
takePhotoBtn.addEventListener('click', () => {
    if (!stream) {
        startCamera();
    } else {
        takeSnapshot();
    }
});

// Handle Upload Photo
uploadPhotoBtn.addEventListener('click', () => {
    stopCamera();
    photoFileInput.click();
});

photoFileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    stopCamera();

    if (file) {
        const reader = new FileReader();

        reader.onloadend = () => {
            currentPhotoDataURL = reader.result;
            enableSubmitButton(true);

            cameraView.innerHTML = `
                <img src="${currentPhotoDataURL}" 
                     alt="Uploaded Photo" 
                     style="width:100%; height:100%; object-fit:cover;">
            `;

            showNotification('Photo uploaded. Ready to submit.');
        };

        reader.readAsDataURL(file);
    } else {
        currentPhotoDataURL = null;
        enableSubmitButton(false);
        showNotification('Upload canceled.');
    }
});

// Submit Photo (add to gallery)
submitPhotoBtn.addEventListener('click', () => {
    if (!currentPhotoDataURL) {
        showNotification('No photo to submit.');
        return;
    }

    const fileName = photoFileInput.files[0] ? photoFileInput.files[0].name : 'Photobooth Snap';

    const newGalleryItem = createGalleryItem(currentPhotoDataURL, fileName);
    photosGrid.prepend(newGalleryItem);

    currentPhotoDataURL = null;
    enableSubmitButton(false);
    photoFileInput.value = '';
    stopCamera();

    cameraView.innerHTML = `
        <div class="camera-placeholder" id="cameraPlaceholder">
            <i class="fas fa-camera"></i>
            <p>Click "Take Photo" to activate your camera or "Upload Photo".</p>
        </div>
    `;

    showNotification("Photo submitted and added to gallery.");
});

// Build gallery item
function createGalleryItem(fileURL, fileName) {
    const item = document.createElement('div');
    item.classList.add('photo-item');

    item.innerHTML = `
        <img src="${fileURL}" alt="${fileName}">
        <div class="photo-info">
            <span class="photo-author">Guest</span>
            <span class="photo-time">${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</span>
        </div>
    `;

    return item;
}
    
    // Newsletter form submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = newsletterForm.querySelector('input[type="email"]').value;
            console.log('Newsletter subscription:', email);
            showNotification('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent);
        color: var(--primary);
        padding: 1rem 1.5rem;
        border-radius: 0;
        font-weight: 600;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);
