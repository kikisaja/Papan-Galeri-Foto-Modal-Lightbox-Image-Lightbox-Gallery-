# 🖼️ Image Lightbox Gallery (Papan Galeri Foto Modal / Lightbox)

Aplikasi galeri foto interaktif (*Image Lightbox Gallery*) berbasis JavaScript yang memungkinkan pengguna memperbesar foto pilihan ke dalam tampilan modal *overlay* lengkap dengan deskripsi dan tombol navigasi slide.

---

## 🎯 Konsep Pembelajaran RPL / Pemrograman Web

1. **DOM Data Attributes (`data-*`):**
   Menyimpan informasi sumber gambar dan teks deskripsi kustom langsung di dalam markup HTML agar mudah diakses oleh skrip JavaScript.
2. **Array Index Navigation (Looping Modulo):**
   Menggunakan operasi aritmatika modulo `(index + 1) % length` untuk mengatur perpindahan tombol *Next* dan *Prev* secara melingkar tanpa batas.
3. **Modal Overlay & Keyboard Events:**
   Mengatur visibilitas kontainer pop-up melalui kelas `.active` serta mendengarkan penekanan tombol keyboard (`Escape`, `ArrowLeft`, `ArrowRight`) untuk pengalaman pengguna yang optimal.

---

## 📂 Struktur Folder Proyek

```text
├── index.html       # Grid galeri foto, tombol item, & kontainer modal lightbox
├── style.css        # Desain Neobrutalism pink-pop, overlay latar gelap, & tombol navigasi
└── script.js        # Logika pemetaan data galeri, event klik, & kontrol keyboard
