# 🗿 Situs Batu Kenong Bondowoso - AR Learning Platform

Platform pembelajaran interaktif berbasis Augmented Reality (AR) untuk mengenal Situs Batu Kenong Bondowoso dengan desain game-like yang menarik dan mobile-friendly.

## 📱 Preview

Website ini menampilkan:
- Splash screen animasi dengan desain game retro
- Tutorial langkah-demi-langkah yang jelas
- Loading screen sebelum masuk AR
- Tampilan 3D interaktif dengan 6 batu yang dapat diklik
- Popup informasi (teks, gambar, video) untuk setiap batu
- Fixed navigation bar untuk navigasi mudah
- Galeri foto situs dengan overlay informasi
- Design mobile-first yang responsif

## 🎯 User Flow

```
START → Tutorial → AR (3D View) ⇄ Gallery
  ↓         ↓            ↓            ↓
Home     Home         Home         Home
```

1. **Splash Screen**: Tekan START untuk mulai
2. **Tutorial**: Pelajari cara menggunakan (3 langkah) → Tekan "Coba Sekarang"
3. **Loading**: Animasi loading 3 detik
4. **AR Page**: 
   - Lihat 6 batu 3D yang berputar
   - Klik batu untuk lihat info (popup dengan teks/video/gambar)
   - Gunakan navigasi: 🏠 Home atau 🖼️ Gallery
5. **Gallery**: Lihat koleksi foto, navigasi: 🏠 Home atau 🗿 3D View

## 🎯 Fitur Utama

1. **Splash Screen Menarik**
   - Animasi bouncing dan floating
   - Tombol START dengan efek shimmer
   - Dekorasi batu mengambang

2. **Tutorial Interaktif**
   - 3 langkah mudah dipahami
   - Desain card-based
   - Call-to-action jelas

3. **AR 3D Experience** (Tanpa Scan!)
   - 6 batu 3D interaktif dengan animasi rotasi
   - Click untuk popup info (teks/video/gambar)
   - Loading screen sebelum masuk
   - Kontrol kamera: Drag untuk lihat, WASD untuk bergerak
   - Hover effect pada setiap batu

4. **Fixed Navigation Bar**
   - Selalu terlihat di atas
   - Quick access: Home & Gallery/3D View
   - Mobile-optimized dengan icon

5. **Info Popup**
   - Tampil saat klik batu
   - Mendukung: Teks panjang, Video YouTube, Gambar
   - Close button & click outside to close
   - Smooth animations

6. **Mobile-Friendly**
   - Touch-optimized interactions
   - Responsive design untuk semua ukuran layar
   - Haptic feedback (vibration)
   - Keyboard shortcuts (H=Home, G=Gallery, ESC=Close)
   - PWA-ready

## 🛠️ Tech Stack

### Frontend
- **HTML5** - Struktur semantic
- **CSS3** - Styling modern dengan:
  - CSS Variables untuk theming
  - CSS Grid & Flexbox untuk layout
  - CSS Animations untuk interaktivitas
  - Media queries untuk responsiveness
- **Vanilla JavaScript** - Interaktivitas tanpa framework

### AR Technology
- **A-Frame** (v1.4.2) - Framework untuk Web3D/WebVR
- **Tanpa marker** - Direct 3D rendering, no camera scanning
- **Interactive 3D objects** - 6 different stone geometries with click handlers

### Fonts
- **Press Start 2P** - Font game retro untuk judul
- **Quicksand** - Font modern untuk body text

### Design System
```css
Color Palette:
- Primary: #D2691E (Chocolate)
- Secondary: #8B4513 (SaddleBrown)
- Accent: #FFD700 (Gold)
- Background: #F4E8D0 (Cornsilk)
- Text: #2C1810 (Dark Brown)
```

## 📦 Struktur File

```
project/
├── index.html          # Main HTML file
├── style.css           # Stylesheet dengan animasi
├── script.js           # JavaScript untuk interaktivitas
├── README.md           # Dokumentasi (file ini)
├── vercel.json         # Konfigurasi Vercel
└── package.json        # Dependencies (optional untuk Vercel)
```

## 🚀 Deployment

### Opsi 1: Vercel (Recommended)

**Langkah Deploy:**

1. **Install Vercel CLI (optional)**
   ```bash
   npm install -g vercel
   ```

2. **Deploy via CLI**
   ```bash
   vercel
   ```
   
   Atau **Deploy via GitHub:**
   - Push code ke GitHub repository
   - Login ke [vercel.com](https://vercel.com)
   - Import repository
   - Click "Deploy"

3. **Konfigurasi Otomatis**
   - Vercel akan otomatis detect static site
   - Deploy selesai dalam hitungan detik
   - Dapatkan URL production: `https://your-project.vercel.app`

**File `vercel.json`:**
```json
{
  "version": 2,
  "name": "batu-kenong-ar",
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### Opsi 2: Netlify

1. Drag & drop folder ke [Netlify Drop](https://app.netlify.com/drop)
2. Atau deploy via Git:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Deploy
   netlify deploy
   ```

### Opsi 3: GitHub Pages

1. Push ke GitHub repository
2. Settings → Pages → Deploy from branch `main`
3. Website akan live di `https://username.github.io/repo-name`

### Opsi 4: Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Init
firebase init hosting

# Deploy
firebase deploy
```

## 🔧 Setup Lokal

1. **Clone atau Download Project**
   ```bash
   git clone <repository-url>
   cd batu-kenong-ar
   ```

2. **Buka dengan Live Server**
   - Gunakan VS Code dengan extension "Live Server"
   - Atau Python:
     ```bash
     python -m http.server 8000
     ```
   - Atau Node.js:
     ```bash
     npx http-server
     ```

3. **Akses di Browser**
   ```
   http://localhost:8000
   ```

## 📱 Testing

### Desktop Browser
- Chrome/Edge (Recommended)
- Firefox
- Safari

### Mobile Browser
- Chrome Mobile (Android)
- Safari (iOS)

### AR Testing
- No marker needed - langsung tampil 3D objects
- Klik batu untuk melihat popup info
- Drag mouse untuk rotate view
- WASD atau arrow keys untuk move camera
- Test interaktivity: hover dan click effects

## 🎨 Customization

### Mengganti Warna Theme
Edit variabel di `style.css`:
```css
:root {
    --primary: #D2691E;      /* Warna utama */
    --secondary: #8B4513;    /* Warna sekunder */
    --accent: #FFD700;       /* Warna aksen */
}
```

### Mengganti Font
Edit import di `style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

### Menambah Halaman Baru
1. Tambah HTML section di `index.html`
2. Tambah styling di `style.css`
3. Tambah navigation logic di `script.js`

## 🔒 Browser Permissions

Website memerlukan izin:
- **Vibration** - Untuk haptic feedback (optional)

*Note: Tidak memerlukan akses kamera karena ini adalah 3D rendering, bukan AR scanning*

## ⚡ Performance Optimization

Sudah diterapkan:
- ✅ Minified assets (production ready)
- ✅ CSS animations (GPU accelerated)
- ✅ Lazy loading images
- ✅ Service Worker ready (PWA)
- ✅ Mobile-optimized touch events
- ✅ Viewport meta tags
- ✅ No external heavy libraries (kecuali AR.js)

## 🐛 Troubleshooting

### 3D objects tidak muncul
- Tunggu loading screen selesai (3 detik)
- Refresh halaman
- Pastikan JavaScript enabled
- Gunakan browser modern (Chrome/Safari/Edge)

### Popup tidak muncul saat klik batu
- Pastikan klik tepat pada objek 3D
- Coba klik pada nomor di atas batu
- Check console untuk error (F12)

### Layout rusak di mobile
- Clear browser cache
- Pastikan viewport meta tag ada
- Test di Chrome DevTools mobile emulator

### Animasi lag
- Gunakan browser modern
- Tutup tab lain yang berat
- Disable browser extensions
- Reduce window size untuk performance

## 📚 Resources

- [A-Frame Documentation](https://aframe.io/docs/)
- [AR.js Documentation](https://ar-js-org.github.io/AR.js-Docs/)
- [Vercel Documentation](https://vercel.com/docs)
- [Web AR Best Practices](https://immersive-web.github.io/webxr-ar-module/)

## 🎯 Best Practices Implemented

1. **Mobile-First Design**
   - Touch-optimized interactions
   - Large tap targets (min 44x44px)
   - Responsive typography
   - Optimized for thumb navigation

2. **Performance**
   - Minimal JavaScript dependencies
   - CSS-only animations where possible
   - Efficient DOM manipulation
   - No jQuery or heavy frameworks

3. **Accessibility**
   - Semantic HTML
   - ARIA labels where needed
   - Keyboard navigation support
   - High contrast colors

4. **UX Design**
   - Clear navigation hierarchy
   - Immediate feedback on interactions
   - Loading states
   - Error handling with user-friendly messages

5. **Code Quality**
   - Clean, commented code
   - Consistent naming conventions
   - Modular JavaScript functions
   - CSS variables for maintainability

## 🔮 Future Enhancements

- [ ] Multi-marker AR support
- [ ] 3D model customization
- [ ] User authentication
- [ ] Progress tracking
- [ ] Quiz/game mechanics
- [ ] Offline mode (PWA)
- [ ] Multi-language support
- [ ] Social sharing with preview images
- [ ] Analytics integration

## 📄 License

Free to use for educational purposes.

## 👨‍💻 Developer Notes

### Mengapa Static Site?
- **Zero server cost** - Deploy gratis di Vercel/Netlify
- **Fast loading** - No server processing
- **Easy maintenance** - Hanya HTML/CSS/JS
- **Scalable** - CDN distribution otomatis
- **Secure** - No server vulnerabilities

### Mengapa Direct 3D Rendering (bukan AR scanning)?
- **No barriers** - Tidak perlu print marker atau izin kamera
- **Immediate experience** - Langsung lihat 3D objects
- **Better UX** - Lebih mudah digunakan untuk edukasi
- **Cross-platform** - Bekerja di semua device tanpa masalah
- **Focus on content** - User fokus pada informasi, bukan teknis scanning
- **Performance** - Lebih ringan dari AR.js dengan camera tracking

### Keuntungan A-Frame Standalone:
- **Lightweight** - Hanya load core A-Frame (~200KB)
- **Interactive** - Full mouse/touch/keyboard controls
- **Customizable** - Mudah modify 3D objects dan interactions
- **Educational** - Fokus pada konten pembelajaran, bukan teknologi AR

### Production Checklist
- [ ] Test di multiple devices
- [ ] Optimize images
- [ ] Setup custom domain
- [ ] Enable HTTPS
- [ ] Add analytics
- [ ] Setup error monitoring
- [ ] Create favicon
- [ ] Add meta tags for SEO
- [ ] Test AR with physical markers
- [ ] Add loading states

---

**Made with ❤️ for Indonesian Cultural Heritage Education**

Untuk pertanyaan atau bug report, silakan buat issue di repository.
