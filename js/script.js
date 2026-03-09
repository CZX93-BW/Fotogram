/**
 * @typedef {Object} Image
 * @property {number} id 
 * @property {string} title 
 * @property {string} src 
 */

/** @type {Image[]} Array of images displayed in the gallery */
const images = [
  { id: 1, title: "Alaska", src: "assets/img/alaska.png" },
  { id: 2, title: "Anime", src: "assets/img/anime.png" },
  { id: 3, title: "Bluebird", src: "assets/img/bluebird.png" },
  { id: 4, title: "Hurricane", src: "assets/img/hurricane.png" },
  { id: 5, title: "Lake", src: "assets/img/lake.png" },
  { id: 6, title: "Moorente", src: "assets/img/moorente.png" },
  { id: 7, title: "Sea", src: "assets/img/sea.png" },
  { id: 8, title: "Snowbunting", src: "assets/img/snowbunting.png" },
  { id: 9, title: "Snowleopard", src: "assets/img/snowleopard.png" },
  { id: 10, title: "Travel", src: "assets/img/travel.png" },
  { id: 11, title: "Winter", src: "assets/img/winter.png" },
];

/** DOM element references */
const gallery = document.getElementById("gallery");
const dialog = document.getElementById("image-dialog");
const modalFigure = document.getElementById("modal-figure");
const counter = document.getElementById("image-counter");
const closeBtn = document.getElementById("close-dialog");
const prevBtn = document.getElementById("prev-button");
const nextBtn = document.getElementById("next-button");
const modalTitle = document.getElementById("modal-title");

/** Current index of the displayed image in the modal */
let currentIndex = 0;

/** Last focused element before opening the modal (for accessibility) */
let lastFocusedElement = null;

/**
 * Render all gallery items dynamically based on the `images` array
 */
function renderGallery() {
  gallery.innerHTML = "";
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    gallery.innerHTML += `
      <article class="gallery-item" data-index="${i}" tabindex="0">
        <figure>
          <img src="${img.src}" alt="${img.title}">
          <figcaption>${img.title}</figcaption>
        </figure>
      </article>
    `;
  }
}

/**
 * Render the modal content for the current image
 */
function renderModal() {
  const img = images[currentIndex];
  modalFigure.innerHTML = `<img src="${img.src}" alt="${img.title}"><figcaption>${img.title}</figcaption>`;
  counter.textContent = `${img.id}/${images.length}`;
  modalTitle.textContent = img.title;
}

/**
 * Open the modal and display the image at the specified index
 * @param {number} index - Index of the image to open
 */
function openImage(index) {
  lastFocusedElement = document.activeElement;
  currentIndex = index;
  renderModal();
  dialog.showModal();
  closeBtn.focus();
}

/**
 * Close the modal and return focus to the last focused element
 */
function closeModal() {
  dialog.close();
  lastFocusedElement?.focus();
}

/**
 * Show the next image in the modal
 */
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  renderModal();
}

/**
 * Show the previous image in the modal
 */
function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  renderModal();
}


/**
 * Registers all event listeners for gallery interaction,
 * modal navigation and keyboard accessibility
 */
function setEventlistener() {

  // Open modal via mouse click
  gallery.addEventListener("click", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item) openImage(+item.dataset.index);
  });

  // Open modal via keyboard (Enter or Space)
  gallery.addEventListener("keydown", (e) => {
    const item = e.target.closest(".gallery-item");
    if (item && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      openImage(+item.dataset.index);
    }
  });

  // Close modal
  closeBtn.addEventListener("click", closeModal);

  // Navigation buttons
  prevBtn.addEventListener("click", prevImage);
  nextBtn.addEventListener("click", nextImage);

  // Keyboard activation for navigation buttons
  prevBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      prevImage();
    }
  });

  nextBtn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      nextImage();
    }
  });

  // Global keyboard navigation while modal is open
  document.addEventListener("keydown", (e) => {
    if (!dialog.open) return;

    if (e.key === "Escape") {
      closeModal();
      return;
    }

    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  });

  // Close modal when clicking outside dialog content
  dialog.addEventListener("click", (e) => {
    const rect = dialog.getBoundingClientRect();

    if (
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom
    ) {
      closeModal();
    }
  });
}

/**
 * Initializes the application
 * Renders the gallery and registers all event listeners
 */
function init() {
  renderGallery();
  setEventlistener();
}

/**
 * Makes init globally accessible for the HTML onload attribute
 */
window.init = init;