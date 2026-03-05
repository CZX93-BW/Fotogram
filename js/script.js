// --- Data ---
const IMAGE_DATA = [
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

// --- Templates ---
function renderGalleryItem(image) {
  return `
    <article class="gallery-item" data-id="${image.id}" tabindex="0">
      <figure>
        <img src="${image.src}" alt="${image.title}">
        <figcaption>${image.title}</figcaption>
      </figure>
    </article>
  `;
}

function renderDialogContent(image) {
  return `
    <img src="${image.src}" alt="${image.title}">
    <figcaption>${image.title}</figcaption>
  `;
}

// --- Gallery ---
const GALLERY = document.getElementById("gallery");

function initGallery() {
  GALLERY.innerHTML = "";
  IMAGE_DATA.forEach(image => {
    GALLERY.innerHTML += renderGalleryItem(image);
  });
  addGalleryEvents();
}

function addGalleryEvents() {
  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => openDialog(item.dataset.id));
    item.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openDialog(item.dataset.id);
      }
    });
  });
}

// --- Modal ---
const DIALOG = document.getElementById("image-dialog");
const FIGURE = document.getElementById("modal-figure");
let currentIndex = 0;

function openDialog(id) {
  currentIndex = IMAGE_DATA.findIndex(img => img.id == id);
  updateDialog();
  DIALOG.showModal();
}

function updateDialog() {
  FIGURE.innerHTML = renderDialogContent(IMAGE_DATA[currentIndex]);
}

// --- Modal Controls ---
function initModal() {
  const closeBtn = document.getElementById("close-dialog");
  const prevBtn = document.getElementById("prev-button");
  const nextBtn = document.getElementById("next-button");

  if (closeBtn) closeBtn.addEventListener("click", () => DIALOG.close());
  if (prevBtn) prevBtn.addEventListener("click", showPrev);
  if (nextBtn) nextBtn.addEventListener("click", showNext);

  DIALOG.addEventListener("click", e => {
    if (e.target === DIALOG) DIALOG.close();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") DIALOG.close();
  });
}

function showPrev() {
  currentIndex = (currentIndex - 1 + IMAGE_DATA.length) % IMAGE_DATA.length;
  updateDialog();
}

function showNext() {
  currentIndex = (currentIndex + 1) % IMAGE_DATA.length;
  updateDialog();
}

// --- Init ---
function init() {
  initGallery();
  initModal();
}

init();