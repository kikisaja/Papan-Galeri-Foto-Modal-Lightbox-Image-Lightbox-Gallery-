// --- AMBIL ELEMEN DOM ---
const galleryItems = document.querySelectorAll(".gallery-item");
const lightboxModal = document.getElementById("lightbox-modal");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const btnClose = document.getElementById("btn-close");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");

// Kumpulkan data semua foto galeri
const galleryData = Array.from(galleryItems).map((item) => {
    return {
        src: item.querySelector("img").src,
        caption: item.getAttribute("data-caption")
    };
});

let currentIndex = 0;

// --- 1. BUKA LIGHTBOX ---
function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add("active");
}

// --- 2. PERBARUI KONTEN LIGHTBOX ---
function updateLightboxContent() {
    const current = galleryData[currentIndex];
    lightboxImg.src = current.src;
    lightboxCaption.textContent = current.caption;
}

// --- 3. TUTUP LIGHTBOX ---
function closeLightbox() {
    lightboxModal.classList.remove("active");
}

// --- 4. NAVIGASI PREV & NEXT ---
function showPrev() {
    currentIndex = (currentIndex - 1 + galleryData.length) % galleryData.length;
    updateLightboxContent();
}

function showNext() {
    currentIndex = (currentIndex + 1) % galleryData.length;
    updateLightboxContent();
}

// --- EVENT LISTENERS ---
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        openLightbox(index);
    });
});

btnClose.addEventListener("click", closeLightbox);
btnPrev.addEventListener("click", showPrev);
btnNext.addEventListener("click", showNext);

// Tutup modal jika mengklik area luar konten
lightboxModal.addEventListener("click", (e) => {
    if (e.target === lightboxModal) {
        closeLightbox();
    }
});

// Kontrol Keyboard (Esc untuk tutup, Panah Kiri/Kanan untuk navigasi)
document.addEventListener("keydown", (e) => {
    if (!lightboxModal.classList.contains("active")) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
});
