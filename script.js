// Artworks data
const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Elena Rodriguez",
    category: "painting",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=1458&q=80",
    description:
      "A vibrant exploration of color and form that challenges traditional perspectives on abstract expressionism.",
    medium: "Oil on canvas",
    dimensions: "120 × 90 cm",
    year: "2023",
  },
  {
    id: 2,
    title: "Urban Echoes",
    artist: "Marcus Chen",
    category: "digital",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description:
      "Digital collage merging urban photography with algorithmic patterns and generative art techniques.",
    medium: "Digital print on archival paper",
    dimensions: "80 × 60 cm",
    year: "2023",
  },
  {
    id: 3,
    title: "Silent Dialogue",
    artist: "Sophie Williams",
    category: "sculpture",
    image:
      "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description:
      "Reclaimed wood and metal sculpture exploring the relationship between nature and industry.",
    medium: "Mixed media (wood, metal)",
    dimensions: "45 × 30 × 25 cm",
    year: "2023",
  },
  {
    id: 4,
    title: "Fleeting Moments",
    artist: "Alex Johnson",
    category: "photography",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description:
      "Street photography capturing ephemeral human interactions in urban environments.",
    medium: "Archival pigment print",
    dimensions: "60 × 40 cm",
    year: "2023",
  },
  {
    id: 5,
    title: "Chromatic Dreams",
    artist: "Elena Rodriguez",
    category: "painting",
    image:
      "https://images.unsplash.com/photo-1549289524-06cf8837ace5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description:
      "Oil on canvas exploring the subconscious through a vibrant color palette and fluid forms.",
    medium: "Oil on canvas",
    dimensions: "100 × 80 cm",
    year: "2023",
  },
  {
    id: 6,
    title: "Data Flow",
    artist: "Marcus Chen",
    category: "digital",
    image:
      "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description:
      "Generative art visualizing the invisible networks that connect our digital world.",
    medium: "Digital animation, limited edition print",
    dimensions: "90 × 60 cm",
    year: "2023",
  },
  {
    id: 7,
    title: "Earthen Vessels",
    artist: "Sophie Williams",
    category: "sculpture",
    image:
      "https://images.unsplash.com/photo-1565896314091-2be0b49b7f1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1476&q=80",
    description:
      "Ceramic forms inspired by ancient pottery techniques with contemporary aesthetics.",
    medium: "Stoneware clay",
    dimensions: "Various dimensions",
    year: "2023",
  },
  {
    id: 8,
    title: "Horizon Lines",
    artist: "Alex Johnson",
    category: "photography",
    image:
      "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1528&q=80",
    description:
      "Minimalist landscape photography exploring the boundary between earth and sky.",
    medium: "Archival pigment print",
    dimensions: "80 × 50 cm",
    year: "2023",
  },
  {
    id: 9,
    title: "Sol at Luna: Liberasyon",
    artist: "Sofia Louise C. Zaballa",
    category: "painting",
    image: "src/images/SolAtLuna.jpg",
    description:
      "Minimalist landscape photography exploring the boundary between earth and sky.",
    medium: "Oil on canvas",
    dimensions: "80 × 50 cm",
    year: "October 2021",
  },
  {
    id: 10,
    title: "Rooted Ancestry",
    artist: "Zabdiel Datoon",
    category: "painting",
    image: "src/images/Datoon_Zabdiel.jpeg",
    description:
      "Rooted Ancestry is a digital artwork by Zabdiel Datoon (November 2025) that honors the culture of indigenous Filipinos before colonization. It highlights iconic landscapes like the Banaue Rice Terraces, Chocolate Hills, Mayon Volcano, and the blue ocean, along with scenes of fishing, farming, pottery, and traditional patterns. The piece reminds us that Filipino identity is deeply connected to its pre-colonial roots and nature.",
    medium: "Digital Art",
    dimensions: "90 x 60 cm",
    year: "November 2025",
  },
];

// Artists data
const artists = {
  elena: {
    name: "Elena Rodriguez",
    location: "Barcelona, Spain",
    bio: "Elena Rodriguez is a contemporary painter known for her vibrant exploration of identity through abstract forms and bold color palettes. With over 15 years of experience, her work has been exhibited in galleries across Europe and North America. Elena's unique approach combines traditional painting techniques with modern emotional expression, creating pieces that resonate deeply with viewers.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: {
      exhibitions: 15,
      awards: 3,
      artworks: 50,
      collections: 25,
    },
    social: {
      instagram: "@elenarodriguezart",
      twitter: "@elena_art",
      behance: "elenarodriguez",
    },
  },
  marcus: {
    name: "Marcus Chen",
    location: "Tokyo, Japan",
    bio: "Marcus Chen is a pioneering mixed media artist who seamlessly blends traditional techniques with cutting-edge digital elements. His interactive installations have captivated audiences worldwide, pushing the boundaries of what constitutes contemporary art. Marcus's work often explores the intersection of technology, nature, and human consciousness.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: {
      exhibitions: 12,
      awards: 5,
      artworks: 35,
      collections: 18,
    },
    social: {
      instagram: "@marcuschen.digital",
      twitter: "@marcuschen",
      behance: "marcuschen",
    },
  },
  sophie: {
    name: "Sophie Williams",
    location: "London, UK",
    bio: "Sophie Williams is an environmental sculptor renowned for her work with reclaimed materials. Her large-scale installations address pressing ecological issues while maintaining aesthetic beauty. Sophie's commitment to sustainability extends beyond her art, as she actively participates in environmental conservation projects and educates communities about sustainable art practices.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    stats: {
      exhibitions: 18,
      awards: 4,
      artworks: 40,
      collections: 22,
    },
    social: {
      instagram: "@sophiewilliams.sculpture",
      twitter: "@sophie_sculpts",
      behance: "sophiewilliams",
    },
  },
};

// DOM Elements
const galleryGrid = document.getElementById("galleryGrid");
const filterButtons = document.querySelectorAll(".filter-btn");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
const lightbox = document.getElementById("lightbox");
const closeLightbox = document.querySelector(".close-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxArtist = document.getElementById("lightbox-artist");
const lightboxDescription = document.getElementById("lightbox-description");
const lightboxMedium = document.getElementById("lightbox-medium");
const lightboxDimensions = document.getElementById("lightbox-dimensions");
const lightboxYear = document.getElementById("lightbox-year");
const contactForm = document.getElementById("contactForm");
const commentForm = document.getElementById("commentForm");
const loadingScreen = document.getElementById("loading");
const heroCanvas = document.getElementById("heroCanvas");
const statNumbers = document.querySelectorAll(".stat-number[data-count]");
const artistModal = document.getElementById("artistModal");
const closeArtistModal = document.querySelector(".close-artist-modal");
const artistModalBody = document.getElementById("artistModalBody");
const takePhotoBtn = document.getElementById("takePhotoBtn");
const uploadPhotoBtn = document.getElementById("uploadPhotoBtn");
const cameraView = document.getElementById("cameraView");
const photosGrid = document.getElementById("photosGrid");
const commentsGrid = document.getElementById("commentsGrid");

// Enhanced Photobooth with User Session Management
class Photobooth {
  constructor() {
    this.photos = this.loadPhotos();
    this.photosGrid = document.getElementById("photosGrid");
    this.cameraView = document.getElementById("cameraView");
    this.takePhotoBtn = document.getElementById("takePhotoBtn");
    this.uploadPhotoBtn = document.getElementById("uploadPhotoBtn");
    this.fileInput = null;

    // Enhanced user management
    this.currentUser = this.getOrCreateUser();
    this.userPhotos = new Set(this.loadUserPhotos());

    this.stream = null;
    this.video = null;
    this.canvas = null;
    this.ctx = null;

    this.init();
  }

  getOrCreateUser() {
    let user = localStorage.getItem("photoboothUser");
    if (!user) {
      // Create new user with unique ID
      user = {
        id: this.generateUserId(),
        nickname: "",
        sessionId: this.generateSessionId(),
        created: new Date().toISOString(),
      };
      localStorage.setItem("photoboothUser", JSON.stringify(user));
    } else {
      user = JSON.parse(user);
    }
    return user;
  }

  generateUserId() {
    return "user_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now();
  }

  generateSessionId() {
    return "session_" + Math.random().toString(36).substr(2, 16);
  }

  loadUserPhotos() {
    return JSON.parse(localStorage.getItem("userPhotos") || "[]");
  }

  saveUserPhotos() {
    localStorage.setItem("userPhotos", JSON.stringify([...this.userPhotos]));
  }

  async init() {
    this.renderPhotos();
    this.setupEventListeners();
    await this.setupCamera();
    this.setupUserProfile();

    // Simulate checking for updates (in real app, this would be API calls)
    this.startUpdateChecker();
  }

  setupEventListeners() {
    if (this.takePhotoBtn) {
      this.takePhotoBtn.addEventListener("click", () => this.takePhoto());
    }
    if (this.uploadPhotoBtn) {
      this.uploadPhotoBtn.addEventListener("click", () => this.uploadPhoto());
    }
  }

  setupUserProfile() {
    // Create user profile section if it doesn't exist
    if (!document.querySelector(".user-profile-section")) {
      const photoboothContainer = document.querySelector(
        ".photobooth-container"
      );
      if (photoboothContainer) {
        const userProfileHTML = `
                    <div class="user-profile-section">
                        <h3>Your Profile</h3>
                        <div class="user-profile-form">
                            <div class="form-group">
                                <input type="text" id="userNickname" placeholder="Enter your nickname" value="${
                                  this.currentUser.nickname || ""
                                }">
                            </div>
                            <button class="btn btn-primary" id="saveNicknameBtn">
                                <i class="fas fa-save"></i> Save Nickname
                            </button>
                            <div class="current-user">
                                <p>User ID: <code class="user-id-display">${this.currentUser.id.slice(
                                  0,
                                  8
                                )}...</code></p>
                                <p>Currently posting as: <strong>${
                                  this.currentUser.nickname || "Anonymous"
                                }</strong></p>
                            </div>
                        </div>
                    </div>
                `;
        photoboothContainer.insertAdjacentHTML("afterbegin", userProfileHTML);

        // Add event listener for save button
        const saveBtn = document.getElementById("saveNicknameBtn");
        const nicknameInput = document.getElementById("userNickname");

        saveBtn.addEventListener("click", () => {
          const newNickname = nicknameInput.value.trim();
          if (newNickname) {
            this.saveCurrentUser(newNickname);
            this.showNotification("Nickname saved!");
          } else {
            this.showNotification("Please enter a nickname", "error");
          }
        });

        // Save on Enter key
        nicknameInput.addEventListener("keypress", (e) => {
          if (e.key === "Enter") {
            saveBtn.click();
          }
        });
      }
    }
  }

  saveCurrentUser(nickname) {
    this.currentUser.nickname = nickname;
    this.currentUser.lastUpdated = new Date().toISOString();
    localStorage.setItem("photoboothUser", JSON.stringify(this.currentUser));

    // Update the display
    const currentUserElement = document.querySelector(".current-user");
    if (currentUserElement) {
      currentUserElement.innerHTML = `
                <p>User ID: <code class="user-id-display">${this.currentUser.id.slice(
                  0,
                  8
                )}...</code></p>
                <p>Currently posting as: <strong>${nickname}</strong></p>
            `;
    }

    // Update photos with new nickname
    this.photos.forEach((photo) => {
      if (photo.userId === this.currentUser.id) {
        photo.author = nickname || "Anonymous";
      }
    });
    this.savePhotos();
    this.renderPhotos();
  }

  async setupCamera() {
    if (!this.cameraView) return;

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 640,
          height: 480,
          facingMode: "user",
        },
      });

      this.video = document.createElement("video");
      this.canvas = document.createElement("canvas");
      this.ctx = this.canvas.getContext("2d");

      this.video.srcObject = this.stream;
      this.video.play();

      this.cameraView.innerHTML = "";
      this.cameraView.appendChild(this.video);
    } catch (error) {
      console.error("Error accessing camera:", error);
      this.showCameraPlaceholder("Camera access denied or not available");
    }
  }

  takePhoto() {
    if (!this.video || !this.ctx) {
      this.showNotification("Camera not ready", "error");
      return;
    }

    // Set canvas dimensions to match video
    this.canvas.width = this.video.videoWidth;
    this.canvas.height = this.video.videoHeight;

    // Draw current video frame to canvas
    this.ctx.drawImage(this.video, 0, 0);

    // Convert to data URL and create photo object
    const imageData = this.canvas.toDataURL("image/jpeg");
    this.savePhoto(imageData);
  }

  uploadPhoto() {
    if (!this.fileInput) {
      this.fileInput = document.createElement("input");
      this.fileInput.type = "file";
      this.fileInput.accept = "image/*";
      this.fileInput.addEventListener("change", (e) =>
        this.handleFileSelect(e)
      );
    }

    this.fileInput.click();
  }

  handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.match("image.*")) {
      this.showNotification("Please select an image file", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.savePhoto(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  savePhoto(imageData) {
    // Use nickname if available, otherwise "Anonymous"
    const author = this.currentUser.nickname || "Anonymous";

    const photo = {
      id: Date.now() + "_" + this.currentUser.id,
      image: imageData,
      author: author,
      userId: this.currentUser.id,
      userSession: this.currentUser.sessionId,
      timestamp: new Date().toISOString(),
      time: "Just now",
      likes: 0,
      likedBy: [], // Track who liked the photo
    };

    this.photos.unshift(photo);
    this.userPhotos.add(photo.id);
    this.savePhotos();
    this.saveUserPhotos();
    this.renderPhotos();
    this.showNotification("Photo added to gallery!");

    // Show preview
    this.showPhotoPreview(imageData);

    // In real app: this.uploadToServer(photo);
  }

  showPhotoPreview(imageData) {
    if (!this.cameraView) return;

    this.cameraView.innerHTML = `
            <div class="photo-preview">
                <img src="${imageData}" alt="Your photo">
                <div class="preview-info">
                    <p>Posted as: <strong>${
                      this.currentUser.nickname || "Anonymous"
                    }</strong></p>
                </div>
                <div class="preview-actions">
                    <button class="btn btn-primary retake-btn">
                        <i class="fas fa-redo"></i> Retake
                    </button>
                    <button class="btn confirm-btn">
                        <i class="fas fa-check"></i> Confirm
                    </button>
                </div>
            </div>
        `;

    // Add event listeners to buttons
    const retakeBtn = this.cameraView.querySelector(".retake-btn");
    const confirmBtn = this.cameraView.querySelector(".confirm-btn");

    retakeBtn.addEventListener("click", () => this.retakePhoto());
    confirmBtn.addEventListener("click", () => this.confirmPhoto());
  }

  retakePhoto() {
    this.setupCamera();
  }

  confirmPhoto() {
    this.setupCamera();
  }

  renderPhotos() {
    if (!this.photosGrid) return;

    this.photosGrid.innerHTML = "";

    if (this.photos.length === 0) {
      this.photosGrid.innerHTML = `
                <div class="no-photos">
                    <i class="fas fa-camera"></i>
                    <p>No photos yet. Be the first to share your gallery experience!</p>
                </div>
            `;
      return;
    }

    this.photos.forEach((photo) => {
      const photoElement = this.createPhotoElement(photo);
      this.photosGrid.appendChild(photoElement);
    });
  }

  createPhotoElement(photo) {
    const isOwner = photo.userId === this.currentUser.id;
    const hasLiked = photo.likedBy.includes(this.currentUser.id);

    const div = document.createElement("div");
    div.className = "photo-item";
    div.innerHTML = `
            <img src="${photo.image}" alt="Gallery Photo">
            <div class="photo-info">
                <span class="photo-author">${this.escapeHtml(
                  photo.author
                )}</span>
                <span class="photo-time">${photo.time}</span>
                ${
                  isOwner
                    ? '<span class="photo-owner-badge">Your Photo</span>'
                    : ""
                }
            </div>
            <div class="photo-overlay">
                <button class="photo-like-btn ${
                  hasLiked ? "liked" : ""
                }" data-id="${photo.id}">
                    <i class="${hasLiked ? "fas" : "far"} fa-heart"></i>
                    <span class="like-count">${photo.likes}</span>
                </button>
                ${
                  isOwner
                    ? `
                <button class="photo-delete-btn" data-id="${photo.id}">
                    <i class="fas fa-trash"></i>
                </button>
                `
                    : ""
                }
            </div>
        `;

    // Add event listeners
    const likeBtn = div.querySelector(".photo-like-btn");
    const deleteBtn = div.querySelector(".photo-delete-btn");

    likeBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      this.likePhoto(photo.id);
    });

    if (isOwner && deleteBtn) {
      deleteBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        this.deletePhoto(photo.id);
      });
    }

    // Add click to view larger
    div.addEventListener("click", () => this.viewPhoto(photo));

    return div;
  }

  likePhoto(photoId) {
    const photo = this.photos.find((p) => p.id === photoId);
    if (!photo) return;

    const hasLiked = photo.likedBy.includes(this.currentUser.id);

    if (hasLiked) {
      // Unlike
      photo.likes = Math.max(0, photo.likes - 1);
      photo.likedBy = photo.likedBy.filter((id) => id !== this.currentUser.id);
      this.showNotification("Photo unliked");
    } else {
      // Like
      photo.likes += 1;
      photo.likedBy.push(this.currentUser.id);
      this.showNotification("Photo liked!");
    }

    this.savePhotos();
    this.renderPhotos();
  }

  deletePhoto(photoId) {
    const photo = this.photos.find((p) => p.id === photoId);
    if (!photo || photo.userId !== this.currentUser.id) {
      this.showNotification("You can only delete your own photos", "error");
      return;
    }

    if (confirm("Are you sure you want to delete this photo?")) {
      this.photos = this.photos.filter((photo) => photo.id !== photoId);
      this.userPhotos.delete(photoId);
      this.savePhotos();
      this.saveUserPhotos();
      this.renderPhotos();
      this.showNotification("Photo deleted");
    }
  }

  viewPhoto(photo) {
    const isOwner = photo.userId === this.currentUser.id;
    const hasLiked = photo.likedBy.includes(this.currentUser.id);

    // Create lightbox for photo viewing
    const lightbox = document.createElement("div");
    lightbox.className = "photo-lightbox";
    lightbox.innerHTML = `
            <div class="lightbox-content">
                <span class="close-lightbox">&times;</span>
                <img src="${photo.image}" alt="Gallery Photo">
                <div class="lightbox-info">
                    <div class="lightbox-author-info">
                        <span class="photo-author">${this.escapeHtml(
                          photo.author
                        )}</span>
                        ${
                          isOwner
                            ? '<span class="photo-owner-badge">Your Photo</span>'
                            : ""
                        }
                        <span class="photo-time">${photo.time}</span>
                    </div>
                    <div class="lightbox-actions">
                        <button class="like-btn ${
                          hasLiked ? "liked" : ""
                        }" data-id="${photo.id}">
                            <i class="${hasLiked ? "fas" : "far"} fa-heart"></i>
                            <span class="like-count">${photo.likes}</span>
                        </button>
                        <button class="download-btn">
                            <i class="fas fa-download"></i> Download
                        </button>
                        ${
                          isOwner
                            ? `
                        <button class="delete-btn" data-id="${photo.id}">
                            <i class="fas fa-trash"></i> Delete
                        </button>
                        `
                            : ""
                        }
                    </div>
                </div>
            </div>
        `;

    document.body.appendChild(lightbox);

    // Event listeners for lightbox
    const closeBtn = lightbox.querySelector(".close-lightbox");
    const likeBtn = lightbox.querySelector(".like-btn");
    const downloadBtn = lightbox.querySelector(".download-btn");
    const deleteBtn = lightbox.querySelector(".delete-btn");

    closeBtn.addEventListener("click", () => lightbox.remove());
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) lightbox.remove();
    });

    likeBtn.addEventListener("click", () => {
      this.likePhoto(photo.id);
      lightbox.remove();
    });

    downloadBtn.addEventListener("click", () => {
      this.downloadPhoto(photo);
      lightbox.remove();
    });

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => {
        this.deletePhoto(photo.id);
        lightbox.remove();
      });
    }
  }

  downloadPhoto(photo) {
    const link = document.createElement("a");
    link.href = photo.image;
    link.download = `gallery-photo-${photo.id}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showNotification("Photo downloaded!");
  }

  showCameraPlaceholder(message) {
    if (!this.cameraView) return;

    this.cameraView.innerHTML = `
            <div class="camera-placeholder">
                <i class="fas fa-camera-slash"></i>
                <p>${message}</p>
                <button class="btn retry-camera-btn">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            </div>
        `;

    const retryBtn = this.cameraView.querySelector(".retry-camera-btn");
    retryBtn.addEventListener("click", () => this.setupCamera());
  }

  startUpdateChecker() {
    // Simulate checking for new photos from other users
    setInterval(() => {
      this.checkForUpdates();
    }, 10000); // Check every 10 seconds
  }

  checkForUpdates() {
    // In a real app, this would fetch from a server
    // For now, we'll just reload from localStorage to simulate updates
    const oldCount = this.photos.length;
    this.photos = this.loadPhotos();

    if (this.photos.length !== oldCount) {
      this.renderPhotos();
      this.showNotification("Gallery updated with new photos!");
    }
  }

  loadPhotos() {
    try {
      const saved = localStorage.getItem("photoboothPhotos");
      return saved ? JSON.parse(saved) : this.getDefaultPhotos();
    } catch (error) {
      console.error("Error loading photos:", error);
      return this.getDefaultPhotos();
    }
  }

  savePhotos() {
    try {
      localStorage.setItem("photoboothPhotos", JSON.stringify(this.photos));
    } catch (error) {
      console.error("Error saving photos:", error);
    }
  }

  getDefaultPhotos() {
    return [
      {
        id: 1,
        image:
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        author: "Gallery Visitor",
        userId: "default_user",
        userSession: "default_session",
        timestamp: new Date().toISOString(),
        time: "Today",
        likes: 3,
        likedBy: ["default_user"],
      },
    ];
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  showNotification(message, type = "success") {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${
                  type === "success" ? "check" : "exclamation"
                }-circle"></i>
                <span>${message}</span>
            </div>
        `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => notification.classList.add("show"), 100);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}

// Enhanced Freedom Wall with User Management
class FreedomWall {
  constructor() {
    this.comments = this.loadComments();
    this.commentsGrid = document.getElementById("commentsGrid");
    this.commentForm = document.getElementById("commentForm");
    this.commentName = document.getElementById("commentName");
    this.commentMessage = document.getElementById("commentMessage");

    // User management
    this.currentUser = this.getOrCreateUser();
    this.userComments = new Set(this.loadUserComments());

    this.init();
  }

  getOrCreateUser() {
    let user = localStorage.getItem("freedomWallUser");
    if (!user) {
      user = {
        id: this.generateUserId(),
        name: "",
        sessionId: this.generateSessionId(),
        created: new Date().toISOString(),
      };
      localStorage.setItem("freedomWallUser", JSON.stringify(user));
    } else {
      user = JSON.parse(user);
    }
    return user;
  }

  generateUserId() {
    return "user_" + Math.random().toString(36).substr(2, 9) + "_" + Date.now();
  }

  generateSessionId() {
    return "session_" + Math.random().toString(36).substr(2, 16);
  }

  loadUserComments() {
    return JSON.parse(localStorage.getItem("userComments") || "[]");
  }

  saveUserComments() {
    localStorage.setItem(
      "userComments",
      JSON.stringify([...this.userComments])
    );
  }

  init() {
    this.renderComments();
    this.setupEventListeners();
    this.setupUserProfile();
    this.startUpdateChecker();
  }

  setupEventListeners() {
    this.commentForm.addEventListener("submit", (e) => {
      e.preventDefault();
      this.submitComment();
    });
  }

  setupUserProfile() {
    // Auto-fill name if user has set it before
    if (this.currentUser.name && this.commentName) {
      this.commentName.value = this.currentUser.name;
    }
  }

  submitComment() {
    const name = this.commentName.value.trim();
    const message = this.commentMessage.value.trim();

    if (!name || !message) {
      this.showNotification(
        "Please fill in both name and message fields",
        "error"
      );
      return;
    }

    // Save user name for future use
    if (name !== this.currentUser.name) {
      this.currentUser.name = name;
      this.currentUser.lastUpdated = new Date().toISOString();
      localStorage.setItem("freedomWallUser", JSON.stringify(this.currentUser));
    }

    const comment = {
      id: Date.now() + "_" + this.currentUser.id,
      name: name,
      message: message,
      userId: this.currentUser.id,
      userSession: this.currentUser.sessionId,
      timestamp: new Date().toISOString(),
      date: this.formatDate(new Date()),
      likes: 0,
      likedBy: [],
    };

    this.comments.unshift(comment);
    this.userComments.add(comment.id);
    this.saveComments();
    this.saveUserComments();
    this.renderComments();
    this.clearForm();
    this.showNotification("Comment posted successfully!");
  }

  renderComments() {
    if (!this.commentsGrid) return;

    this.commentsGrid.innerHTML = "";

    if (this.comments.length === 0) {
      this.commentsGrid.innerHTML = `
                <div class="no-comments">
                    <i class="fas fa-comments"></i>
                    <p>No comments yet. Be the first to share your thoughts!</p>
                </div>
            `;
      return;
    }

    this.comments.forEach((comment) => {
      const commentElement = this.createCommentElement(comment);
      this.commentsGrid.appendChild(commentElement);
    });
  }

  createCommentElement(comment) {
    const isOwner = comment.userId === this.currentUser.id;
    const hasLiked = comment.likedBy.includes(this.currentUser.id);

    const div = document.createElement("div");
    div.className = "comment-card";
    div.innerHTML = `
            <div class="comment-header">
                <div class="comment-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div class="comment-info">
                    <h4>${this.escapeHtml(comment.name)} 
                        ${
                          isOwner
                            ? '<span class="comment-owner-badge">You</span>'
                            : ""
                        }
                    </h4>
                    <span class="comment-date">${comment.date}</span>
                </div>
            </div>
            <p class="comment-text">${this.escapeHtml(comment.message)}</p>
            <div class="comment-actions">
                <button class="like-btn ${hasLiked ? "liked" : ""}" data-id="${
      comment.id
    }">
                    <i class="${hasLiked ? "fas" : "far"} fa-heart"></i>
                    <span class="like-count">${comment.likes}</span>
                </button>
                ${
                  isOwner
                    ? `
                <button class="delete-btn" data-id="${comment.id}">
                    <i class="fas fa-trash"></i>
                </button>
                `
                    : ""
                }
            </div>
        `;

    const likeBtn = div.querySelector(".like-btn");
    likeBtn.addEventListener("click", () => this.likeComment(comment.id));

    if (isOwner) {
      const deleteBtn = div.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", () => this.deleteComment(comment.id));
    }

    return div;
  }

  likeComment(commentId) {
    const comment = this.comments.find((c) => c.id === commentId);
    if (!comment) return;

    const hasLiked = comment.likedBy.includes(this.currentUser.id);

    if (hasLiked) {
      // Unlike
      comment.likes = Math.max(0, comment.likes - 1);
      comment.likedBy = comment.likedBy.filter(
        (id) => id !== this.currentUser.id
      );
      this.showNotification("Comment unliked");
    } else {
      // Like
      comment.likes += 1;
      comment.likedBy.push(this.currentUser.id);
      this.showNotification("Comment liked!");
    }

    this.saveComments();
    this.renderComments();
  }

  deleteComment(commentId) {
    const comment = this.comments.find((c) => c.id === commentId);
    if (!comment || comment.userId !== this.currentUser.id) {
      this.showNotification("You can only delete your own comments", "error");
      return;
    }

    if (confirm("Are you sure you want to delete this comment?")) {
      this.comments = this.comments.filter(
        (comment) => comment.id !== commentId
      );
      this.userComments.delete(commentId);
      this.saveComments();
      this.saveUserComments();
      this.renderComments();
      this.showNotification("Comment deleted");
    }
  }

  startUpdateChecker() {
    setInterval(() => {
      this.checkForUpdates();
    }, 10000);
  }

  checkForUpdates() {
    const oldCount = this.comments.length;
    this.comments = this.loadComments();

    if (this.comments.length !== oldCount) {
      this.renderComments();
      this.showNotification("Freedom Wall updated with new comments!");
    }
  }

  clearForm() {
    this.commentName.value = this.currentUser.name || "";
    this.commentMessage.value = "";
  }

  formatDate(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return "Just now";
    if (diffMins < 60)
      return `${diffMins} minute${diffMins === 1 ? "" : "s"} ago`;
    if (diffHours < 24)
      return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;

    return date.toLocaleDateString();
  }

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  loadComments() {
    try {
      const saved = localStorage.getItem("freedomWallComments");
      return saved ? JSON.parse(saved) : this.getDefaultComments();
    } catch (error) {
      console.error("Error loading comments:", error);
      return this.getDefaultComments();
    }
  }

  saveComments() {
    try {
      localStorage.setItem(
        "freedomWallComments",
        JSON.stringify(this.comments)
      );
    } catch (error) {
      console.error("Error saving comments:", error);
    }
  }

  getDefaultComments() {
    return [
      {
        id: 1,
        name: "Art Lover",
        message:
          "The Beyond Boundaries exhibition is absolutely breathtaking! The way different cultures and mediums blend together is pure magic.",
        userId: "default_user",
        userSession: "default_session",
        timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
        date: "2 hours ago",
        likes: 3,
        likedBy: ["default_user"],
      },
      {
        id: 2,
        name: "Creative Soul",
        message:
          "Elena Rodriguez's use of color is inspiring. I could stare at her paintings for hours and find new details every time!",
        userId: "default_user_2",
        userSession: "default_session_2",
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
        date: "1 day ago",
        likes: 5,
        likedBy: ["default_user", "default_user_2"],
      },
    ];
  }

  showNotification(message, type = "success") {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerHTML = `
            <div class="notification-content">
                <i class="fas fa-${
                  type === "success" ? "check" : "exclamation"
                }-circle"></i>
                <span>${message}</span>
            </div>
        `;

    document.body.appendChild(notification);

    setTimeout(() => notification.classList.add("show"), 100);

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 3000);
  }
}

// Initialize the application
function initApp() {
  try {
    // Check if gallery grid exists
    if (!galleryGrid) {
      console.error("Gallery grid element not found");
      return;
    }

    displayArtworks(artworks);
    setupEventListeners();
    initCanvasAnimation();
    startLoadingAnimation();
  } catch (error) {
    console.error("Error initializing app:", error);
    // Ensure loading screen hides even if there's an error
    if (loadingScreen) {
      loadingScreen.style.display = "none";
    }
  }
}

// Display artworks in the gallery
function displayArtworks(artworksToShow) {
  galleryGrid.innerHTML = "";

  artworksToShow.forEach((artwork) => {
    const artworkElement = document.createElement("div");
    artworkElement.classList.add("artwork-card");
    artworkElement.setAttribute("data-category", artwork.category);

    artworkElement.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}" class="artwork-img">
            <div class="artwork-overlay">
                <h3 class="artwork-title">${artwork.title}</h3>
                <p class="artwork-artist">${artwork.artist}</p>
            </div>
        `;

    artworkElement.addEventListener("click", () => openLightbox(artwork));
    galleryGrid.appendChild(artworkElement);
  });
}

// Filter artworks by category
function filterArtworks(category) {
  if (category === "all") {
    displayArtworks(artworks);
  } else {
    const filteredArtworks = artworks.filter(
      (artwork) => artwork.category === category
    );
    displayArtworks(filteredArtworks);
  }
}

// Open lightbox with artwork details
function openLightbox(artwork) {
  lightboxImg.src = artwork.image;
  lightboxImg.alt = artwork.title;
  lightboxTitle.textContent = artwork.title;
  lightboxArtist.textContent = `By ${artwork.artist}`;
  lightboxDescription.textContent = artwork.description;
  lightboxMedium.textContent = artwork.medium;
  lightboxDimensions.textContent = artwork.dimensions;
  lightboxYear.textContent = artwork.year;

  lightbox.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close lightbox
function closeLightboxFunc() {
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto";
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

  artistModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close artist modal
function closeArtistModalFunc() {
  artistModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// Initialize canvas animation for hero section
function initCanvasAnimation() {
  const canvas = heroCanvas;

  // Check if canvas exists
  if (!canvas) {
    console.warn("Hero canvas element not found");
    return;
  }

  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.warn("Canvas context not supported");
    return;
  }

  // Set canvas size
  function setCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  setCanvasSize();
  window.addEventListener("resize", setCanvasSize);

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
          ctx.strokeStyle = `rgba(230, 177, 126, ${
            0.2 * (1 - distance / 150)
          })`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach((particle) => {
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
    console.warn("No statistic counter elements found");
    return;
  }

  statNumbers.forEach((stat) => {
    const target = parseInt(stat.getAttribute("data-count"));
    // Add validation for target
    if (isNaN(target)) {
      console.warn(
        "Invalid data-count value:",
        stat.getAttribute("data-count")
      );
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
  const percentageElement = document.querySelector(".loading-percentage");

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
  loadingScreen.style.opacity = "0";
  setTimeout(() => {
    loadingScreen.style.display = "none";
    // Only animate counters if they exist
    if (statNumbers.length > 0) {
      animateCounters();
    }
  }, 500);
}

// Setup event listeners
function setupEventListeners() {
  // Filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");
      // Filter artworks
      const filter = button.getAttribute("data-filter");
      filterArtworks(filter);
    });
  });

  // Mobile menu toggle
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Lightbox close
  closeLightbox.addEventListener("click", closeLightboxFunc);

  // Close lightbox when clicking outside the content
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightboxFunc();
    }
  });

  // Artist modal close
  closeArtistModal.addEventListener("click", closeArtistModalFunc);

  // Close artist modal when clicking outside
  artistModal.addEventListener("click", (e) => {
    if (e.target === artistModal) {
      closeArtistModalFunc();
    }
  });

  // Artist profile links
  document.querySelectorAll(".view-profile").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const artistId = link.getAttribute("data-artist");
      openArtistModal(artistId);
    });
  });

  // Contact form submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // In a real application, you would send this data to a server
    console.log("Contact form submitted:", { name, email, message });

    // Show success message
    showNotification(
      "Thank you for your message! We will get back to you soon."
    );

    // Reset form
    contactForm.reset();
  });

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;
      console.log("Newsletter subscription:", email);
      showNotification("Thank you for subscribing to our newsletter!");
      newsletterForm.reset();
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

// Show notification
function showNotification(message) {
  const notification = document.createElement("div");
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
    notification.style.transform = "translateX(0)";
  }, 100);

  // Animate out and remove
  setTimeout(() => {
    notification.style.transform = "translateX(100%)";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Global instances
let freedomWall;
let photobooth;

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initApp();

  // Initialize Freedom Wall
  if (document.getElementById("commentsGrid")) {
    freedomWall = new FreedomWall();
  }

  // Initialize Photobooth
  if (document.getElementById("photosGrid")) {
    photobooth = new Photobooth();
  }
});

// Add enhanced CSS styles
const enhancedStyles = `
    .user-profile-section {
        background: var(--primary);
        padding: 2rem;
        border: 1px solid rgba(255, 255, 255, 0.1);
        margin-bottom: 2rem;
        grid-column: 1 / -1;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .user-profile-section h3 {
        color: var(--accent);
        margin-bottom: 1.5rem;
        font-size: 1.3rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }

    .user-profile-section h3::before {
        content: "👤";
        font-size: 1.2rem;
    }

    .user-profile-form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .user-profile-form .form-group {
        width: 100%;
        margin-bottom: 0;
    }

    .user-profile-form input {
        width: 100%;
        max-width: 400px;
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        color: var(--text);
        padding: 12px 16px;
        border-radius: 4px;
        transition: var(--transition);
    }

    .user-profile-form input:focus {
        outline: none;
        border-color: var(--accent);
        background: rgba(255, 255, 255, 0.08);
    }

    .current-user {
        color: var(--text-secondary);
        font-size: 0.9rem;
        margin-top: 1rem;
        padding: 0.8rem 1rem;
        background: rgba(230, 177, 126, 0.1);
        border-left: 3px solid var(--accent);
    }

    .current-user strong {
        color: var(--accent);
    }

    .user-id-display {
        font-family: monospace;
        background: rgba(255,255,255,0.1);
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
    }

    .photo-owner-badge, .comment-owner-badge {
        background: var(--accent);
        color: var(--primary);
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 0.7rem;
        margin-left: 8px;
        font-weight: 600;
    }

    .photo-like-btn.liked, .like-btn.liked {
        color: #ff4757;
        border-color: #ff4757;
    }

    .lightbox-author-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
    }

    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent);
        color: var(--primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        font-weight: 600;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
    }

    .notification.error {
        background: #ff4757;
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .notification.show {
        transform: translateX(0);
    }

    @media (max-width: 768px) {
        .user-profile-form input {
            max-width: none;
        }
        
        .current-user {
            font-size: 0.8rem;
        }
        
        .lightbox-author-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
        }
    }
`;

// Add the styles to the document
if (!document.querySelector("#enhanced-styles")) {
  const styleElement = document.createElement("style");
  styleElement.id = "enhanced-styles";
  styleElement.textContent = enhancedStyles;
  document.head.appendChild(styleElement);
}
