// Artworks data
const artworks = [
  {
    id: 1,
    title: "Tahimik na Gabi sa bitak Na Bato",
    artist: "VCENZO",
    category: "painting",
    image: "resources/images/visual_arts/Tahimikvcenzo.jpg",
    description:
      "depicts a tranquil night scene in a revolutionary encampment inspired by the Katipunan and the Biak-na-Bato Republic.",
    medium: "Oil on canvas",
    dimensions: "100 × 80 cm",
    year: "2024",
  },
  {
    id: 2,
    title: "Women Pounding Rice",
    artist: "Sofia Louise C. Zaballa",
    category: "painting",
    image: "resources/images/visual_arts/WomenPounding.jpg",
    description:
      "This painting was inspired by the casual Filipino afternoon snack, 'Linubak,' made by pounding cassava on a giant mortar and pestle called 'Lubakan' in Camarines Norte.",
    medium: "Oil on canvas",
    dimensions: "1080 x 1920",
    year: "May 2022",
  },
  {
    id: 3,
    title: "Threads of Ancestry",
    artist: "Ashley Marie Casili",
    category: "painting",
    image: "resources/images/visual_arts/Threads_Casili.png",
    description:
      "The artwork evokes strong presentation about the T'boli tribe of the Philippines, which are mostly known for their rich weaving traditions and distinctive clothing.",
    medium: "Digital Art/Application, IbispaintX",
    dimensions: "3000 x 3000 px",
    year: "2025",
  },
  {
    id: 4,
    title: "Batok, Stories, Identity",
    artist: "Mariella Angela M. Baleciado",
    category: "painting",
    image: "resources/images/visual_arts/Batok_Baleciado.jpg",
    description:
      "The piece honors the heritage of tattooing as a cultural language, where every mark carries a story of one's community, achievements, beliefs, and connection to the natural world.",
    medium: "Coffee, Paper, Ink",
    dimensions: "",
    year: "November 10 2025",
  },
  {
    id: 5,
    title: "Ina",
    artist: "Kent Steven Abillon",
    category: "painting",
    image: "resources/images/visual_arts/Ina_Abillon.png",
    description:
      "the devotion of the pilgrim to Ina. It represent the dedication and celebration of event where they experience a little or mini fluvial where bicolanos gather for the Sakay of Ina",
    medium: "Sony A711, Edited in Lightroom",
    dimensions: "1080 × 1350 pixels",
    year: "July 11 2025",
  },
  {
    id: 6,
    title: "Tribal Rhythm",
    artist: "Angeline Dela Cruz Marcaida",
    category: "sculpture",
    image: "resources/images/applied_arts/Tribal_Cons.jpg",
    description:
      "formations. Its bold structure highlights traditional ornamentation often found in indigenous cultures. The piece visually strikes a sense of strength and rooted identity.",
    medium: "metal beads, iron coiled wire strands.",
    dimensions: "20' length",
    year: "2022",
  },
  {
    id: 7,
    title: "The Blood of Our Kin",
    artist: "Karl Christian M. Garcia",
    category: "digital",
    image: "resources/images/literary_arts/bloodkin.jpg",
    description:
      "a contemporary poem that explores themes of decolonization and the reclamation of Filipino Identity. It reflects on the enduring effects of colonialism, the rich heritage of Filipino ancestors, and the importance of remembering and embracing one's roots.",
    medium: "Poem",
    dimensions: "Various dimensions",
    year: "November 24 2025",
  },
  {
    id: 8,
    title: "Lupang Sinilangan",
    artist: "Eman Rey Gases",
    category: "digital",
    image: "resources/images/literary_arts/Gases.jpg",
    description:
      "Ang tulang ito ay tungkol sa pagkakakilanlan at kasaysayan ng pilipino.",
    medium: "Poem",
    dimensions: "Various dimensions",
    year: "October 28 2025",
  },
  {
    id: 9,
    title: "Sa Dugo ng Aking Lahi",
    artist: "Paul Benedict R. Punzalan",
    category: "digital",
    image: "resources/images/literary_arts/Punzalan.jpg",
    description:
      "A reflection on decolonization and rediscovering Filipino identity, showing how our heritage endures in our blood despite history's changes and our ongoing return to our roots.",
    medium: "Digital Poetry",
    dimensions: "A4 Size",
    year: "2025",
  },
];

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

// Freedom Wall Elements
const commentsGrid = document.getElementById("commentsGrid");
const commentNameInput = document.getElementById("commentName");
const commentMessageInput = document.getElementById("commentMessage");

// Photobooth Elements
const takePhotoBtn = document.getElementById("takePhotoBtn");
const uploadPhotoBtn = document.getElementById("uploadPhotoBtn");
const submitPhotoBtn = document.getElementById("submitPhotoBtn");
const photoFileInput = document.getElementById("photoFileInput");
const cameraView = document.getElementById("cameraView");
const photosGrid = document.getElementById("photosGrid");
const videoFeed = document.getElementById("videoFeed");
const canvasSnapshot = document.getElementById("canvasSnapshot");
const cameraPlaceholder = document.getElementById("cameraPlaceholder");
const filterOptions = document.querySelectorAll(".filter-option");

// Preview Modal Elements
const previewModal = document.querySelector(".preview-modal");
const previewImage = document.querySelector(".preview-image");
const closePreviewBtn = document.querySelector(".close-preview");
const discardPhotoBtn = document.getElementById("discardPhotoBtn");
const confirmPhotoBtn = document.getElementById("confirmPhotoBtn");

// Global State
let currentPhotoDataURL = null;
let stream = null;
let currentFilter = "none";
let cameraFacingMode = "user";
let isCapturing = false;
let freedomWall = null;
let photobooth = null;

// Enhanced Notification System
class NotificationSystem {
  constructor() {
    this.notificationQueue = [];
    this.isShowing = false;
    this.init();
  }

  init() {
    // Create notification container
    const style = document.createElement("style");
    style.textContent = `
      .custom-notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 4px;
        color: white;
        font-weight: 500;
        z-index: 9999;
        transform: translateX(100%);
        opacity: 0;
        transition: transform 0.3s ease, opacity 0.3s ease;
        max-width: 300px;
      }
      .custom-notification.show {
        transform: translateX(0);
        opacity: 1;
      }
      .notification-success {
        background: #4CAF50;
        border-left: 4px solid #2E7D32;
      }
      .notification-error {
        background: #F44336;
        border-left: 4px solid #C62828;
      }
      .notification-info {
        background: #2196F3;
        border-left: 4px solid #0D47A1;
      }
    `;
    document.head.appendChild(style);
  }

  show(message, type = "info", duration = 3000) {
    const notification = {
      message,
      type,
      duration,
      timestamp: Date.now(),
    };

    this.notificationQueue.push(notification);
    this.processQueue();
  }

  processQueue() {
    if (this.isShowing || this.notificationQueue.length === 0) return;

    this.isShowing = true;
    const notification = this.notificationQueue.shift();
    this.createNotificationElement(notification);
  }

  createNotificationElement({ message, type, duration }) {
    const notification = document.createElement("div");
    notification.className = `custom-notification notification-${type}`;
    notification.setAttribute("role", "alert");
    notification.setAttribute("aria-live", "assertive");
    notification.textContent = message;

    document.body.appendChild(notification);

    // Trigger reflow for animation
    notification.offsetHeight;

    notification.classList.add("show");

    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
        this.isShowing = false;
        this.processQueue();
      }, 300);
    }, duration);
  }
}

// Enhanced Freedom Wall Class
class FreedomWall {
  constructor() {
    this.comments = [];
    this.isLoading = false;
    this.notificationSystem = new NotificationSystem();
    this.init();
  }

  init() {
    this.loadComments();
    this.setupEventListeners();
  }

  loadComments() {
    try {
      const savedComments = localStorage.getItem("freedomWallComments");
      if (savedComments) {
        this.comments = JSON.parse(savedComments);
        this.displayComments();
      } else {
        this.loadDefaultComments();
      }
    } catch (error) {
      console.error("Error loading comments:", error);
      this.loadDefaultComments();
    }
  }

  loadDefaultComments() {
    this.comments = [
      {
        id: Date.now() - 1000,
        name: "Henry",
        text: "ZT13!",
        timestamp: new Date("2025-12-01").toISOString(),
        likes: 5,
      },
      {
        id: Date.now() - 2000,
        name: "Camille Kristine",
        text: ":>",
        timestamp: new Date("2025-12-01").toISOString(),
        likes: 3,
      },
      {
        id: Date.now() - 3000,
        name: "Kat",
        text: "wow",
        timestamp: new Date("2025-12-01").toISOString(),
        likes: 8,
      },
    ];
    this.saveComments();
    this.displayComments();
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

  async submitComment(name, text) {
    if (!name.trim() || !text.trim()) {
      this.notificationSystem.show(
        "Please enter both name and message",
        "error"
      );
      return false;
    }

    if (text.length > 500) {
      this.notificationSystem.show(
        "Message must be less than 500 characters",
        "error"
      );
      return false;
    }

    this.isLoading = true;

    // Show loading state
    const submitBtn = commentForm.querySelector(".submit-btn");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Posting...';
    submitBtn.disabled = true;

    try {
      // Simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 800));

      const comment = {
        id: Date.now(),
        name: this.sanitizeInput(name),
        text: this.sanitizeInput(text),
        timestamp: new Date().toISOString(),
        likes: 0,
      };

      this.comments.unshift(comment);
      this.saveComments();
      this.addCommentToDOM(comment);

      this.notificationSystem.show("Comment posted successfully!", "success");
      commentForm.reset();

      // Scroll to the new comment
      const firstComment = commentsGrid.firstElementChild;
      if (firstComment) {
        firstComment.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      return true;
    } catch (error) {
      console.error("Error submitting comment:", error);
      this.notificationSystem.show(
        "Error posting comment. Please try again.",
        "error"
      );
      return false;
    } finally {
      this.isLoading = false;
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }

  sanitizeInput(input) {
    const div = document.createElement("div");
    div.textContent = input;
    return div.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  addCommentToDOM(comment) {
    const commentElement = this.createCommentElement(comment);

    // Add with animation
    commentElement.style.opacity = "0";
    commentElement.style.transform = "translateY(-20px)";

    commentsGrid.insertBefore(commentElement, commentsGrid.firstChild);

    // Trigger animation
    setTimeout(() => {
      commentElement.style.transition =
        "opacity 0.3s ease, transform 0.3s ease";
      commentElement.style.opacity = "1";
      commentElement.style.transform = "translateY(0)";
    }, 10);

    // Limit displayed comments
    this.limitDisplayedComments();
  }

  createCommentElement(comment) {
    const commentElement = document.createElement("div");
    commentElement.className = "comment-card";
    commentElement.dataset.id = comment.id;

    const formattedDate = this.formatDate(comment.timestamp);
    const timeAgo = this.getTimeAgo(comment.timestamp);

    commentElement.innerHTML = `
      <div class="comment-header">
        <div class="comment-avatar">
          <i class="fas fa-user"></i>
        </div>
        <div class="comment-info">
          <h4>${comment.name}</h4>
          <span class="comment-date" title="${formattedDate}">${timeAgo}</span>
        </div>
      </div>
      <p class="comment-text">${comment.text}</p>
      <div class="comment-actions">
        <button class="comment-action-btn" onclick="freedomWall.likeComment(${comment.id})">
          <i class="fas fa-heart"></i> <span class="like-count">${comment.likes}</span>
        </button>
        <button class="comment-action-btn" onclick="freedomWall.copyComment(${comment.id})">
          <i class="fas fa-copy"></i> Copy
        </button>
      </div>
    `;

    return commentElement;
  }

  displayComments() {
    commentsGrid.innerHTML = "";

    if (this.comments.length === 0) {
      commentsGrid.innerHTML = `
        <div class="no-comments">
          <i class="fas fa-comment-slash"></i>
          <p>No comments yet. Be the first to share your thoughts!</p>
        </div>
      `;
      return;
    }

    this.comments.forEach((comment, index) => {
      const commentElement = this.createCommentElement(comment);
      commentsGrid.appendChild(commentElement);
      // Set animation delay
      commentElement.style.animationDelay = `${index * 0.1}s`;
    });
  }

  likeComment(commentId) {
    const comment = this.comments.find((c) => c.id === commentId);
    if (comment) {
      comment.likes++;
      this.saveComments();

      // Update UI
      const commentElement = document.querySelector(
        `.comment-card[data-id="${commentId}"]`
      );
      if (commentElement) {
        const likeCount = commentElement.querySelector(".like-count");
        if (likeCount) {
          likeCount.textContent = comment.likes;
          likeCount.style.animation = "pulse 0.5s ease";
          setTimeout(() => (likeCount.style.animation = ""), 500);
        }
      }
    }
  }

  copyComment(commentId) {
    const comment = this.comments.find((c) => c.id === commentId);
    if (comment) {
      const textToCopy = `${comment.name}: ${comment.text}`;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() =>
          this.notificationSystem.show(
            "Comment copied to clipboard!",
            "success"
          )
        )
        .catch(() =>
          this.notificationSystem.show("Failed to copy comment", "error")
        );
    }
  }

  limitDisplayedComments() {
    const maxComments = 50;
    const displayedComments = Array.from(commentsGrid.children);

    if (displayedComments.length > maxComments) {
      displayedComments.slice(maxComments).forEach((comment) => {
        comment.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        comment.style.opacity = "0";
        comment.style.transform = "translateY(20px)";

        setTimeout(() => {
          if (comment.parentNode) {
            comment.parentNode.removeChild(comment);
          }
        }, 300);
      });
    }
  }

  formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  getTimeAgo(timestamp) {
    const now = new Date();
    const commentDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now - commentDate) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000)
      return `${Math.floor(diffInSeconds / 86400)}d ago`;

    return commentDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  }

  setupEventListeners() {
    if (commentForm) {
      commentForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (this.isLoading) return;

        const name = commentNameInput.value.trim();
        const message = commentMessageInput.value.trim();

        await this.submitComment(name, message);
      });
    }

    // Auto-resize textarea
    if (commentMessageInput) {
      commentMessageInput.addEventListener("input", function () {
        this.style.height = "auto";
        this.style.height = Math.min(this.scrollHeight, 200) + "px";
      });
    }
  }
}

// Enhanced Photobooth Class
class Photobooth {
  constructor() {
    this.photos = [];
    this.currentFilter = "none";
    this.stream = null;
    this.isCapturing = false;
    this.notificationSystem = new NotificationSystem();
    this.init();
  }

  init() {
    this.loadPhotos();
    this.setupEventListeners();
    this.setupFilterButtons();
  }

  loadPhotos() {
    try {
      const savedPhotos = localStorage.getItem("photoboothGallery");
      if (savedPhotos) {
        this.photos = JSON.parse(savedPhotos);
        this.displayPhotos();
      } else {
        this.loadSamplePhotos();
      }
    } catch (error) {
      console.error("Error loading photos:", error);
      this.loadSamplePhotos();
    }
  }

  loadSamplePhotos() {
    this.photos = [
      {
        id: Date.now() - 1000,
        image:
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        author: "Gallery Visitor",
        timestamp: new Date("2025-12-01T10:30:00").toISOString(),
        filter: "none",
        likes: 12,
      },
      {
        id: Date.now() - 2000,
        image:
          "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60",
        author: "Art Enthusiast",
        timestamp: new Date("2025-12-01T09:15:00").toISOString(),
        filter: "sepia",
        likes: 8,
      },
    ];
    this.savePhotos();
    this.displayPhotos();
  }

  savePhotos() {
    try {
      localStorage.setItem("photoboothGallery", JSON.stringify(this.photos));
    } catch (error) {
      console.error("Error saving photos:", error);
    }
  }

  async startCamera() {
    if (this.stream) {
      this.stopCamera();
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.notificationSystem.show(
        "Camera not supported on this device",
        "error"
      );
      return;
    }

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: this.cameraFacingMode || "user",
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      videoFeed.srcObject = this.stream;

      videoFeed.onloadedmetadata = () => {
        videoFeed.play();

        // Show camera UI
        videoFeed.style.display = "block";
        canvasSnapshot.style.display = "none";
        cameraPlaceholder.style.display = "none";

        this.notificationSystem.show(
          "Camera ready! Click capture button to take photo.",
          "success"
        );
      };
    } catch (error) {
      console.error("Error accessing camera:", error);

      if (error.name === "NotAllowedError") {
        this.notificationSystem.show(
          "Camera access denied. Please enable camera permissions.",
          "error"
        );
      } else if (error.name === "NotFoundError") {
        this.notificationSystem.show(
          "No camera found on this device.",
          "error"
        );
      } else {
        this.notificationSystem.show(
          "Error accessing camera. Please try again.",
          "error"
        );
      }

      cameraPlaceholder.style.display = "flex";
    }
  }

  stopCamera() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
  }

  async capturePhoto() {
    if (!this.stream || this.isCapturing) return;

    this.isCapturing = true;

    try {
      // Show countdown
      await this.showCountdown();

      // Capture
      const photoData = await this.takeSnapshot();

      // Show preview
      this.showPreview(photoData);
    } catch (error) {
      console.error("Error capturing photo:", error);
      this.notificationSystem.show("Error capturing photo", "error");
    } finally {
      this.isCapturing = false;
    }
  }

  async showCountdown() {
    const countdownOverlay = document.querySelector(".countdown-overlay");
    if (!countdownOverlay) return;

    countdownOverlay.classList.add("active");

    for (let i = 3; i > 0; i--) {
      countdownOverlay.textContent = i;
      await this.sleep(1000);
    }

    countdownOverlay.classList.remove("active");
  }

  async takeSnapshot() {
    const context = canvasSnapshot.getContext("2d");

    // Set canvas dimensions to match video
    canvasSnapshot.width = videoFeed.videoWidth;
    canvasSnapshot.height = videoFeed.videoHeight;

    // Draw video frame
    context.drawImage(
      videoFeed,
      0,
      0,
      canvasSnapshot.width,
      canvasSnapshot.height
    );

    // Apply filter
    this.applyCanvasFilter(context);

    // Show flash effect
    this.showFlashEffect();

    // Get image data
    const photoData = canvasSnapshot.toDataURL("image/jpeg", 0.8);

    // Stop camera
    this.stopCamera();

    return photoData;
  }

  applyCanvasFilter(context) {
    const canvas = context.canvas;
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    switch (this.currentFilter) {
      case "grayscale":
        for (let i = 0; i < data.length; i += 4) {
          const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
          data[i] = avg;
          data[i + 1] = avg;
          data[i + 2] = avg;
        }
        context.putImageData(imageData, 0, 0);
        break;

      case "sepia":
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          data[i] = Math.min(255, r * 0.393 + g * 0.769 + b * 0.189);
          data[i + 1] = Math.min(255, r * 0.349 + g * 0.686 + b * 0.168);
          data[i + 2] = Math.min(255, r * 0.272 + g * 0.534 + b * 0.131);
        }
        context.putImageData(imageData, 0, 0);
        break;

      case "contrast":
        const contrast = 1.5;
        const factor = (259 * (contrast + 255)) / (255 * (259 - contrast));
        for (let i = 0; i < data.length; i += 4) {
          data[i] = factor * (data[i] - 128) + 128;
          data[i + 1] = factor * (data[i + 1] - 128) + 128;
          data[i + 2] = factor * (data[i + 2] - 128) + 128;
        }
        context.putImageData(imageData, 0, 0);
        break;

      case "blur":
        context.filter = "blur(2px)";
        context.drawImage(canvasSnapshot, 0, 0);
        break;

      case "hue":
        context.filter = "hue-rotate(90deg) saturate(1.5)";
        context.drawImage(canvasSnapshot, 0, 0);
        break;
    }
  }

  showFlashEffect() {
    const flash = document.querySelector(".capture-flash");
    if (flash) {
      flash.style.animation = "captureFlash 0.5s ease";
      setTimeout(() => (flash.style.animation = ""), 500);
    }
  }

  showPreview(photoData) {
    if (previewModal && previewImage) {
      previewImage.src = photoData;
      previewModal.classList.add("active");
      document.body.style.overflow = "hidden";

      this.currentPhotoDataURL = photoData;
      this.enableSubmitButton(true);
    }
  }

  closePreview() {
    if (previewModal) {
      previewModal.classList.remove("active");
      document.body.style.overflow = "auto";
      this.currentPhotoDataURL = null;
      this.enableSubmitButton(false);
    }
  }

  handleFileUpload(file) {
    if (!file || !file.type.startsWith("image/")) {
      this.notificationSystem.show("Please select a valid image file", "error");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      this.notificationSystem.show("Image size must be less than 5MB", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      this.currentPhotoDataURL = e.target.result;
      this.showPreview(this.currentPhotoDataURL);
    };
    reader.readAsDataURL(file);
  }

  submitPhoto() {
    if (!this.currentPhotoDataURL) {
      this.notificationSystem.show("No photo to submit", "error");
      return;
    }

    const photo = {
      id: Date.now(),
      image: this.currentPhotoDataURL,
      author: "Anonymous",
      timestamp: new Date().toISOString(),
      filter: this.currentFilter,
      likes: 0,
    };

    this.photos.unshift(photo);
    this.savePhotos();
    this.addPhotoToDOM(photo);

    // Reset
    this.currentPhotoDataURL = null;
    this.enableSubmitButton(false);
    this.closePreview();

    // Reset camera view
    cameraPlaceholder.style.display = "flex";
    canvasSnapshot.style.display = "none";
    videoFeed.style.display = "none";

    this.notificationSystem.show("Photo submitted to gallery!", "success");
  }

  addPhotoToDOM(photo) {
    const photoElement = this.createPhotoElement(photo);

    // Add with animation
    photoElement.style.opacity = "0";
    photoElement.style.transform = "scale(0.8)";

    photosGrid.insertBefore(photoElement, photosGrid.firstChild);

    // Trigger animation
    setTimeout(() => {
      photoElement.style.transition = "opacity 0.3s ease, transform 0.3s ease";
      photoElement.style.opacity = "1";
      photoElement.style.transform = "scale(1)";
    }, 10);

    // Limit gallery size
    this.limitGallerySize();
  }

  createPhotoElement(photo) {
    const photoElement = document.createElement("div");
    photoElement.className = "photo-item";
    photoElement.dataset.id = photo.id;

    const timeAgo = this.getTimeAgo(photo.timestamp);

    photoElement.innerHTML = `
      <img src="${photo.image}" alt="Gallery Photo" loading="lazy">
      <div class="photo-info">
        <span class="photo-author">${photo.author}</span>
        <span class="photo-time">${timeAgo}</span>
      </div>
    `;

    photoElement.addEventListener("click", () => this.viewPhoto(photo));

    return photoElement;
  }

  displayPhotos() {
    photosGrid.innerHTML = "";

    if (this.photos.length === 0) {
      photosGrid.innerHTML = `
        <div class="no-photos">
          <i class="fas fa-camera"></i>
          <p>No photos yet. Be the first to share!</p>
        </div>
      `;
      return;
    }

    this.photos.forEach((photo) => {
      const photoElement = this.createPhotoElement(photo);
      photosGrid.appendChild(photoElement);
    });
  }

  viewPhoto(photo) {
    const modal = document.createElement("div");
    modal.className = "preview-modal active";
    modal.style.zIndex = "3000";

    const formattedDate = this.formatDate(photo.timestamp);

    modal.innerHTML = `
      <div class="preview-content" style="max-width: 800px;">
        <button class="close-preview" onclick="this.parentElement.parentElement.remove(); document.body.style.overflow='auto'">
          <i class="fas fa-times"></i>
        </button>
        <img src="${photo.image}" class="preview-image" alt="Gallery Photo">
        <div class="photo-details">
          <div class="photo-meta">
            <span><i class="fas fa-user"></i> ${photo.author}</span>
            <span><i class="fas fa-clock"></i> ${formattedDate}</span>
            <span><i class="fas fa-filter"></i> ${photo.filter}</span>
            <span><i class="fas fa-heart"></i> ${photo.likes} likes</span>
          </div>
          <div class="photo-actions">
            <button class="btn-like" onclick="photobooth.likePhoto(${photo.id})">
              <i class="fas fa-heart"></i> ${photo.likes}
            </button>
            <button class="btn" onclick="photobooth.downloadPhoto('${photo.image}', 'gallery_photo_${photo.id}.jpg')">
              <i class="fas fa-download"></i> Download
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = "hidden";
  }

  likePhoto(photoId) {
    const photo = this.photos.find((p) => p.id === photoId);
    if (photo) {
      photo.likes++;
      this.savePhotos();

      // Update UI in modal
      const likeBtn = document.querySelector(
        `.btn-like[onclick*="${photoId}"]`
      );
      if (likeBtn) {
        likeBtn.innerHTML = `<i class="fas fa-heart"></i> ${photo.likes}`;
        likeBtn.style.animation = "pulse 0.5s ease";
        setTimeout(() => (likeBtn.style.animation = ""), 500);
      }

      this.notificationSystem.show("Photo liked!", "success");
    }
  }

  downloadPhoto(dataUrl, filename) {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.notificationSystem.show("Photo downloaded!", "success");
  }

  limitGallerySize() {
    const maxPhotos = 50;
    const displayedPhotos = Array.from(photosGrid.children);

    if (displayedPhotos.length > maxPhotos) {
      displayedPhotos.slice(maxPhotos).forEach((photo) => {
        photo.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        photo.style.opacity = "0";
        photo.style.transform = "scale(0.8)";

        setTimeout(() => {
          if (photo.parentNode) {
            photo.parentNode.removeChild(photo);
          }
        }, 300);
      });
    }
  }

  applyFilter(filterId) {
    this.currentFilter = filterId;

    // Update active filter button
    filterOptions.forEach((btn) => {
      btn.classList.remove("active");
      if (btn.getAttribute("data-filter") === filterId) {
        btn.classList.add("active");
      }
    });

    // Reapply filter to current photo if exists
    if (this.currentPhotoDataURL) {
      const img = new Image();
      img.onload = () => {
        const context = canvasSnapshot.getContext("2d");
        canvasSnapshot.width = img.width;
        canvasSnapshot.height = img.height;
        context.drawImage(img, 0, 0);
        this.applyCanvasFilter(context);
        this.currentPhotoDataURL = canvasSnapshot.toDataURL("image/jpeg", 0.8);

        // Update preview
        if (previewImage) {
          previewImage.src = this.currentPhotoDataURL;
        }
      };
      img.src = this.currentPhotoDataURL;
    }
  }

  flipCamera() {
    this.cameraFacingMode =
      this.cameraFacingMode === "user" ? "environment" : "user";
    this.stopCamera();
    this.startCamera();
  }

  enableSubmitButton(isEnabled) {
    submitPhotoBtn.disabled = !isEnabled;
    if (isEnabled) {
      submitPhotoBtn.classList.add("btn-primary");
      submitPhotoBtn.style.animation = "pulse 2s infinite";
    } else {
      submitPhotoBtn.classList.remove("btn-primary");
      submitPhotoBtn.style.animation = "";
    }
  }

  formatDate(timestamp) {
    return new Date(timestamp).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  getTimeAgo(timestamp) {
    const now = new Date();
    const photoDate = new Date(timestamp);
    const diffInSeconds = Math.floor((now - photoDate) / 1000);

    if (diffInSeconds < 60) return "Just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}h ago`;

    return photoDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  setupFilterButtons() {
    filterOptions.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");
        this.applyFilter(filter);
      });
    });
  }

  setupEventListeners() {
    if (takePhotoBtn) {
      takePhotoBtn.addEventListener("click", () => this.startCamera());
    }

    if (uploadPhotoBtn) {
      uploadPhotoBtn.addEventListener("click", () => photoFileInput.click());
    }

    if (submitPhotoBtn) {
      submitPhotoBtn.addEventListener("click", () => this.submitPhoto());
    }

    if (photoFileInput) {
      photoFileInput.addEventListener("change", (e) => {
        const file = e.target.files[0];
        if (file) {
          this.handleFileUpload(file);
        }
      });
    }

    // Preview modal event listeners
    if (closePreviewBtn) {
      closePreviewBtn.addEventListener("click", () => this.closePreview());
    }

    if (discardPhotoBtn) {
      discardPhotoBtn.addEventListener("click", () => {
        this.closePreview();
        this.notificationSystem.show("Photo discarded", "info");
      });
    }

    if (confirmPhotoBtn) {
      confirmPhotoBtn.addEventListener("click", () => this.submitPhoto());
    }

    // Clean up on page unload
    window.addEventListener("beforeunload", () => {
      this.stopCamera();
    });

    // Handle visibility change
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.stopCamera();
      }
    });

    // Close preview modal with Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && previewModal.classList.contains("active")) {
        this.closePreview();
      }
    });

    // Close preview modal when clicking outside
    previewModal.addEventListener("click", (e) => {
      if (e.target === previewModal) {
        this.closePreview();
      }
    });
  }
}

// Initialize global instances
const notificationSystem = new NotificationSystem();

// Initialize the application
function initApp() {
  try {
    // Check if gallery grid exists
    if (!galleryGrid) {
      console.error("Gallery grid element not found");
      return;
    }

    // Initialize modules
    freedomWall = new FreedomWall();
    photobooth = new Photobooth();

    // Setup core functionality
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
      <img src="${artwork.image}" alt="${artwork.title}" class="artwork-img" loading="lazy">
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

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Validate
      if (!name || !email || !message) {
        notificationSystem.show("Please fill in all fields", "error");
        return;
      }

      if (!/^\S+@\S+\.\S+$/.test(email)) {
        notificationSystem.show("Please enter a valid email address", "error");
        return;
      }

      // In a real application, you would send this data to a server
      console.log("Contact form submitted:", { name, email, message });

      // Show success message
      notificationSystem.show(
        "Thank you for your message! We will get back to you soon.",
        "success"
      );

      // Reset form
      contactForm.reset();
    });
  }

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]').value;

      if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
        notificationSystem.show("Please enter a valid email address", "error");
        return;
      }

      console.log("Newsletter subscription:", email);
      notificationSystem.show(
        "Thank you for subscribing to our newsletter!",
        "success"
      );
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

  // Keyboard shortcuts
  document.addEventListener("keydown", (e) => {
    // Escape key closes modals
    if (e.key === "Escape") {
      if (lightbox.classList.contains("active")) {
        closeLightboxFunc();
      }
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", initApp);

// Make instances available globally for HTML onclick handlers
window.freedomWall = freedomWall;
window.photobooth = photobooth;
window.openLightbox = openLightbox;
