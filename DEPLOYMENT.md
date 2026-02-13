# 🚀 Quick Deployment Guide

## Vercel (Paling Mudah & Direkomendasikan)

### Method 1: Deploy via GitHub (No Command Line)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```

2. **Deploy di Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Login dengan GitHub
   - Click "New Project"
   - Import repository Anda
   - Click "Deploy"
   - **Selesai!** Domain otomatis: `https://project-name.vercel.app`

### Method 2: Deploy via CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Ikuti prompt
   - Pilih scope/team
   - Konfirmasi settings
   - **Selesai!**

### Method 3: Drag & Drop

1. Zip semua file project
2. Buka [vercel.com/new](https://vercel.com/new)
3. Drag & drop file zip
4. **Selesai!**

---

## Netlify (Alternatif Mudah)

### Method 1: Drag & Drop

1. Buka [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag folder project
3. **Selesai!** Domain: `https://random-name.netlify.app`

### Method 2: Deploy via Git

1. Push ke GitHub (sama seperti Vercel)
2. Login ke [netlify.com](https://netlify.com)
3. "New site from Git"
4. Pilih repository
5. Deploy settings: (biarkan default untuk static site)
6. Click "Deploy"
7. **Selesai!**

---

## GitHub Pages (Gratis Selamanya)

1. **Push ke GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/username/repo-name.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Buka repository di GitHub
   - Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `root`
   - Save

3. **Akses Website**
   - URL: `https://username.github.io/repo-name`
   - Tunggu 1-2 menit untuk build

---

## Firebase Hosting (Google)

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login**
   ```bash
   firebase login
   ```

3. **Initialize**
   ```bash
   firebase init hosting
   ```
   - Pilih "Create new project" atau "Use existing"
   - Public directory: `.` (current directory)
   - Single-page app: `No`
   - GitHub integration: (optional)

4. **Deploy**
   ```bash
   firebase deploy
   ```

5. **Akses Website**
   - URL: `https://project-id.web.app`
   - atau custom domain

---

## Cloudflare Pages

1. **Push ke GitHub** (sama seperti Vercel)

2. **Deploy di Cloudflare**
   - Login ke [pages.cloudflare.com](https://pages.cloudflare.com)
   - "Create a project"
   - Connect GitHub account
   - Select repository
   - Build settings: (default untuk static site)
   - "Save and Deploy"

---

## Perbandingan Platform

| Platform | Gratis | Custom Domain | SSL | Build Time | CDN |
|----------|--------|---------------|-----|------------|-----|
| **Vercel** | ✅ | ✅ | ✅ | Fast | ✅ |
| **Netlify** | ✅ | ✅ | ✅ | Fast | ✅ |
| **GitHub Pages** | ✅ | ✅ | ✅ | Medium | ✅ |
| **Firebase** | ✅ | ✅ | ✅ | Fast | ✅ |
| **Cloudflare** | ✅ | ✅ | ✅ | Fastest | ✅ |

---

## 🎯 Rekomendasi

### Untuk Pemula
→ **Vercel** atau **Netlify** (drag & drop)

### Untuk Developer
→ **Vercel** (best CLI experience)

### Untuk Open Source
→ **GitHub Pages** (terintegrasi dengan repo)

### Untuk Enterprise
→ **Cloudflare Pages** (performance terbaik)

---

## Custom Domain Setup

### Di Vercel
1. Project Settings → Domains
2. Add domain
3. Update DNS records di domain provider:
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   ```

### Di Netlify
1. Domain Settings → Add custom domain
2. Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   ```

### Di GitHub Pages
1. Settings → Pages → Custom domain
2. Update DNS:
   ```
   Type: A
   Name: @
   Values:
   - 185.199.108.153
   - 185.199.109.153
   - 185.199.110.153
   - 185.199.111.153
   ```

---

## Testing Checklist

Setelah deploy, test:
- [ ] Website loading dengan benar
- [ ] Semua halaman berfungsi
- [ ] AR camera permission berfungsi
- [ ] Responsive di mobile
- [ ] HTTPS aktif (https://)
- [ ] Custom domain (jika ada)

---

## Troubleshooting

### "404 Not Found"
- Pastikan `index.html` ada di root folder
- Check routing configuration
- Clear cache & hard reload

### "AR tidak berfungsi"
- Pastikan menggunakan HTTPS
- Test di browser modern (Chrome/Safari)
- Izinkan camera permission

### "Deploy gagal"
- Check error logs
- Pastikan semua file ter-commit
- Verifikasi `vercel.json` syntax

---

## 💡 Pro Tips

1. **Auto Deploy**: Push ke GitHub → auto deploy (Vercel/Netlify)
2. **Preview Deploys**: Setiap PR mendapat preview URL
3. **Rollback**: Mudah rollback ke versi sebelumnya
4. **Analytics**: Enable analytics untuk tracking visitors
5. **Environment Variables**: Set di platform dashboard

---

**Happy Deploying! 🚀**
