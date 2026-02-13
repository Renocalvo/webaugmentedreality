// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const guidePage = document.getElementById('guide-page');
const arPage = document.getElementById('ar-page');
const arLoading = document.getElementById('ar-loading');
const galleryPage = document.getElementById('gallery-page');
const infoPopup = document.getElementById('infoPopup');
const popupTitle = document.getElementById('popupTitle');
const popupBody = document.getElementById('popupBody');
const popupClose = document.getElementById('popupClose');

// Gallery modal elements
const imageModal = document.getElementById('imageModal');
const imageModalClose = document.getElementById('imageModalClose');
const imageModalImg = document.getElementById('imageModalImg');
const imageModalTitle = document.getElementById('imageModalTitle');
const imageModalDesc = document.getElementById('imageModalDesc');

// Buttons
const startBtn = document.getElementById('startBtn');
const testBtn = document.getElementById('testBtn');
const tryArBtn = document.getElementById('tryArBtn');
const homeBtn = document.getElementById('homeBtn');
const homeBtn2 = document.getElementById('homeBtn2');
const galleryBtn = document.getElementById('galleryBtn');
const arBtn2 = document.getElementById('arBtn2');

// Navigation state
let currentPage = 'splash';
let arSceneReady = false;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    showSplashScreen();
    setupARScene();
});

// Setup all event listeners
function setupEventListeners() {
    // Start button - go to tutorial
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            navigateToPage('guide');
        });
    }

    if (testBtn) {
        testBtn.addEventListener('click', () => {
            window.location.href = 'https://forms.gle/JgLD8nJYnETu2X6N9';  // Ganti dengan URL Google Form yang sesuai
        });
    }
    // Try AR button - go to AR with loading
    if (tryArBtn) {
        tryArBtn.addEventListener('click', () => {
            showARWithLoading();
        });
    }

    // Navigation buttons
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            navigateToPage('splash');
        });
    }

    if (homeBtn2) {
        homeBtn2.addEventListener('click', () => {
            navigateToPage('splash');
        });
    }

    if (galleryBtn) {
        galleryBtn.addEventListener('click', () => {
            navigateToPage('gallery');
        });
    }

    if (arBtn2) {
        arBtn2.addEventListener('click', () => {
            showARWithLoading();
        });
    }

    // Popup close
    if (popupClose) {
        popupClose.addEventListener('click', closePopup);
    }

    // Close popup when clicking outside
    if (infoPopup) {
        infoPopup.addEventListener('click', (e) => {
            if (e.target === infoPopup) {
                closePopup();
            }
        });
    }

    // Gallery modal close
    if (imageModalClose) {
        imageModalClose.addEventListener('click', closeImageModal);
    }

    if (imageModal) {
        // Klik area gelap (bukan konten) untuk menutup
        imageModal.addEventListener('click', (e) => {
            if (e.target === imageModal) {
                closeImageModal();
            }
        });
    }

    // Gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            showImageModal(item);
        });
    });

    // Add touch feedback
    addTouchFeedback();
}

// Navigation function
function navigateToPage(pageName) {
    // Hide all pages
    splashScreen.classList.remove('active');
    guidePage.classList.remove('active');
    arPage.classList.remove('active');
    galleryPage.classList.remove('active');

    // Show selected page
    switch(pageName) {
        case 'splash':
            splashScreen.classList.add('active');
            currentPage = 'splash';
            break;
        case 'guide':
            guidePage.classList.add('active');
            currentPage = 'guide';
            break;
        case 'ar':
            arPage.classList.add('active');
            currentPage = 'ar';
            break;
        case 'gallery':
            galleryPage.classList.add('active');
            currentPage = 'gallery';
            break;
        default:
            guidePage.classList.add('active');
            currentPage = 'guide';
    }

    // Play sound
    playSound('navigate');
}

// Show AR with loading screen
function showARWithLoading() {
    // Show loading screen
    arLoading.classList.add('active');
    
    // Simulate loading (3 seconds)
    setTimeout(() => {
        arLoading.classList.remove('active');
        navigateToPage('ar');
    }, 3000);
}

// Setup AR Scene interactions
function setupARScene() {
    // Wait for A-Frame to be ready
    const checkAFrame = setInterval(() => {
        const scene = document.querySelector('a-scene');
        if (scene && scene.hasLoaded) {
            clearInterval(checkAFrame);
            arSceneReady = true;
            console.log('AR Scene ready');
            
            // Setup object interactions
            setupObjectInteractions();
        }
    }, 500);

    // Timeout after 10 seconds
    setTimeout(() => {
        clearInterval(checkAFrame);
        if (!arSceneReady) {
            console.warn('AR Scene not ready after timeout');
        }
    }, 10000);
}

// Setup interactions for AR objects
function setupObjectInteractions() {
    // Find all interactive objects
    const interactiveObjects = document.querySelectorAll('.interactive-object');
    
    interactiveObjects.forEach(obj => {
        // Add click/tap event
        obj.addEventListener('click', () => {
            const objectId = obj.getAttribute('id');
            showObjectInfo(objectId);
        });

        // Add hover effects for desktop
        obj.addEventListener('mouseenter', () => {
            obj.setAttribute('scale', '1.1 1.1 1.1');
        });

        obj.addEventListener('mouseleave', () => {
            obj.setAttribute('scale', '1 1 1');
        });
    });
}

// Show object information popup
function showObjectInfo(objectId) {
    let title = '';
    let content = '';

    // Object information data
    const objectInfo = {
        'batuKenong': {
            title: 'Batu Kenong',
            content: `
                <p><strong>Batu Kenong</strong> adalah salah satu megalit yang ditemukan di Situs Batu Kenong, Bondowoso.</p>
                <p>Batu ini memiliki bentuk unik menyerupai kenong (alat musik tradisional), dengan bagian atas yang menonjol.</p>
                <p>Diperkirakan berasal dari zaman megalitikum dan digunakan untuk keperluan ritual atau upacara adat.</p>
            `
        },
        'dolmen': {
            title: 'Dolmen',
            content: `
                <p><strong>Dolmen</strong> adalah struktur batu besar yang menyerupai meja, terdiri dari batu datar yang ditopang oleh batu-batu lainnya.</p>
                <p>Di Situs Batu Kenong, dolmen diduga digunakan sebagai tempat sesaji atau altar untuk ritual.</p>
                <p>Struktur ini menunjukkan kemampuan teknis masyarakat prasejarah dalam mengolah dan menyusun batu besar.</p>
            `
        },
        'menhir': {
            title: 'Menhir',
            content: `
                <p><strong>Menhir</strong> adalah batu tegak yang ditanam ke dalam tanah, biasanya digunakan sebagai penanda atau simbol.</p>
                <p>Menhir di Situs Batu Kenong kemungkinan digunakan sebagai penanda tempat pemujaan atau makam.</p>
                <p>Keberadaan menhir menunjukkan sistem kepercayaan dan praktik spiritual masyarakat megalitikum.</p>
            `
        },
        'sarkofagus': {
            title: 'Sarkofagus',
            content: `
                <p><strong>Sarkofagus</strong> adalah peti kubur yang terbuat dari batu, digunakan untuk menyimpan jenazah.</p>
                <p>Di Situs Batu Kenong, sarkofagus menunjukkan praktik penguburan yang kompleks dan penghormatan terhadap orang yang meninggal.</p>
                <p>Bentuk dan ukuran sarkofagus bervariasi, mencerminkan status sosial atau peran dalam masyarakat.</p>
            `
        },
        'batuLingga': {
            title: 'Batu Lingga',
            content: `
                <p><strong>Batu Lingga</strong> adalah batu yang berbentuk silindris atau memanjang, sering dikaitkan dengan simbol kesuburan.</p>
                <p>Di Situs Batu Kenong, batu lingga menunjukkan pengaruh kepercayaan Hindu-Buddha atau tradisi lokal yang mengadopsi simbol tersebut.</p>
                <p>Lingga biasanya digunakan dalam ritual kesuburan dan pemujaan.</p>
            `
        }
    };

    // Get info for specific object
    if (objectInfo[objectId]) {
        title = objectInfo[objectId].title;
        content = objectInfo[objectId].content;
    } else {
        title = 'Informasi';
        content = '<p>Informasi objek tidak tersedia.</p>';
    }

    // Show popup
    openPopup(title, content);
}

// Popup functions
function openPopup(title, content) {
    popupTitle.textContent = title;
    popupBody.innerHTML = content;
    infoPopup.classList.add('active');
    
    // Play sound
    playSound('popup');
}

function closePopup() {
    infoPopup.classList.remove('active');
    
    // Play sound
    playSound('click');
}

// Show splash screen with animation
function showSplashScreen() {
    // Add initial animations
    setTimeout(() => {
        const header = splashScreen.querySelector('.page-header');
        if (header) {
            header.classList.add('animate');
        }
    }, 500);

    setTimeout(() => {
        const buttons = splashScreen.querySelector('.action-buttons');
        if (buttons) {
            buttons.classList.add('animate');
        }
    }, 1000);
}

// Gallery modal (fullscreen)
function showImageModal(item) {
    if (!imageModal) return;

    const title = item.getAttribute('data-title') || 'Foto';
    const descEl = item.querySelector('.gallery-overlay p');
    const desc = descEl ? descEl.textContent : '';

    const imgEl = item.querySelector('.gallery-image img');
    const src = imgEl ? imgEl.getAttribute('src') : null;
    const alt = imgEl ? (imgEl.getAttribute('alt') || title) : title;

    // Jika item galeri tidak punya <img> (masih emoji), tampilkan notifikasi saja
    if (!src) {
        showNotification(`🖼️ ${title} (belum ada gambar)`);
        return;
    }

    if (imageModalImg) {
        imageModalImg.src = src;
        imageModalImg.alt = alt;
    }
    if (imageModalTitle) imageModalTitle.textContent = title;
    if (imageModalDesc) imageModalDesc.textContent = desc;

    imageModal.classList.add('active');
    imageModal.setAttribute('aria-hidden', 'false');

    playSound('click');
}

function closeImageModal() {
    if (!imageModal) return;

    imageModal.classList.remove('active');
    imageModal.setAttribute('aria-hidden', 'true');

    // Bersihkan src agar hemat memori (terutama mobile)
    if (imageModalImg) imageModalImg.src = '';

    playSound('click');
}

// Utility Functions
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Add to body
    document.body.appendChild(notification);
    
    // Show notification
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Hide and remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Touch feedback for mobile
function addTouchFeedback() {
    const buttons = document.querySelectorAll('.btn, .nav-btn, .gallery-item, .object-info-btn');
    
    buttons.forEach(button => {
        button.addEventListener('touchstart', () => {
            button.classList.add('touch-active');
        });
        
        button.addEventListener('touchend', () => {
            setTimeout(() => {
                button.classList.remove('touch-active');
            }, 150);
        });
    });
}

// Sound effects
function playSound(soundType) {
    // Check if audio is supported and enabled
    if (!window.AudioContext && !window.webkitAudioContext) return;
    
    try {
        // Create audio context
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioCtx = new AudioContext();
        
        // Create oscillator
        const oscillator = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        
        // Set frequency based on sound type
        switch(soundType) {
            case 'navigate':
                oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
                oscillator.frequency.setValueAtTime(550, audioCtx.currentTime + 0.1);
                break;
            case 'click':
                oscillator.frequency.setValueAtTime(800, audioCtx.currentTime);
                break;
            case 'popup':
                oscillator.frequency.setValueAtTime(660, audioCtx.currentTime);
                oscillator.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1);
                break;
            default:
                oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
        }
        
        // Set gain and duration
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        
        // Start and stop
        oscillator.start(audioCtx.currentTime);
        oscillator.stop(audioCtx.currentTime + 0.2);
        
        // Close context after sound
        setTimeout(() => {
            audioCtx.close();
        }, 300);
    } catch (error) {
        console.warn('Sound playback failed:', error);
    }
}

// Handle device orientation for AR
window.addEventListener('deviceorientation', (event) => {
    if (currentPage === 'ar' && arSceneReady) {
        // Handle orientation changes if needed
        // This can be expanded for more complex AR interactions
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    // Adjust layout if needed
    // Particularly useful for responsive design
});

// Prevent context menu on long press (mobile)
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

// Add loading state for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('load', () => {
        img.classList.add('loaded');
    });
    
    img.addEventListener('error', () => {
        console.warn('Image failed to load:', img.src);
        img.classList.add('error');
    });
});

// Smooth scrolling for better UX
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// AR object animation
function animateARObject(object) {
    if (!object) return;
    
    // Simple bounce animation
    object.setAttribute('animation', {
        property: 'position',
        to: `${object.object3D.position.x} ${object.object3D.position.y + 0.2} ${object.object3D.position.z}`,
        dur: 500,
        dir: 'alternate',
        loop: 2
    });
}

//  Add AR instruction overlay
// function showARInstructions() {
//     const instructions = document.createElement('div');
//     instructions.className = 'ar-instructions';
//     instructions.innerHTML = `
//         <div class="instruction-content">
//             <h3>Cara Menggunakan AR</h3>
//             <ol>
//                 <li>Arahkan kamera ke area yang cukup terang</li>
//                 <li>Tunggu hingga objek 3D muncul</li>
//                 <li>Tap objek untuk melihat informasi</li>
//                 <li>Gunakan pinch untuk zoom</li>
//             </ol>
//             <button class="btn btn-primary" onclick="this.parentElement.parentElement.remove()">
//                 Mengerti
//             </button>
//         </div>
//     `;
    
//     document.body.appendChild(instructions);
    
//     // Auto remove after 10 seconds
//     setTimeout(() => {
//         if (instructions.parentElement) {
//             instructions.remove();
//         }
//     }, 10000);
// }

// Show instructions when entering AR page
function onEnterARPage() {
    showARInstructions();
}

// Add page change observer
const pageObserver = new MutationObserver((mutations) => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            const element = mutation.target;
            if (element.id === 'ar-page' && element.classList.contains('active')) {
                onEnterARPage();
            }
        }
    });
});

// Observe AR page for class changes
if (arPage) {
    pageObserver.observe(arPage, { attributes: true });
}

// Add error handling for AR
function handleARError(error) {
    console.error('AR Error:', error);
    showNotification('❌ AR tidak dapat dijalankan. Pastikan perangkat mendukung AR.');
    navigateToPage('guide');
}

// Check AR support
function checkARSupport() {
    // Basic AR support check
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showNotification('❌ Perangkat tidak mendukung akses kamera.');
        return false;
    }
    
    // Check for WebXR support
    if ('xr' in navigator) {
        navigator.xr.isSessionSupported('immersive-ar').then(supported => {
            if (!supported) {
                console.warn('WebXR AR not supported');
            }
        });
    }
    
    return true;
}

// Initialize AR support check
checkARSupport();

// Add performance monitoring
let performanceMetrics = {
    loadTime: 0,
    interactionCount: 0,
    errorCount: 0
};

// Track page load time
window.addEventListener('load', () => {
    performanceMetrics.loadTime = performance.now();
    console.log('Page load time:', performanceMetrics.loadTime);
});

// Track interactions
document.addEventListener('click', () => {
    performanceMetrics.interactionCount++;
});

// Track errors
window.addEventListener('error', () => {
    performanceMetrics.errorCount++;
});

// Debug function (can be removed in production)
function debugInfo() {
    console.log('Current page:', currentPage);
    console.log('AR ready:', arSceneReady);
    console.log('Performance metrics:', performanceMetrics);
}

// Add keyboard shortcuts for debugging (development only)
document.addEventListener('keydown', (e) => {
    // ESC to close popup / modal
    if (e.key === 'Escape') {
        if (infoPopup.classList.contains('active')) closePopup();
        if (imageModal && imageModal.classList.contains('active')) closeImageModal();
    }
    
    // H for home
    if (e.key === 'h' || e.key === 'H') {
        navigateToPage('splash');
    }
    
    // G for gallery
    if (e.key === 'g' || e.key === 'G') {
        if (currentPage !== 'splash') {
            navigateToPage('gallery');
        }
    }
});

// Performance monitoring
function logPerformance() {
    console.log('=== Performance Report ===');
    console.log('Load time:', performanceMetrics.loadTime);
    console.log('Interactions:', performanceMetrics.interactionCount);
    console.log('Errors:', performanceMetrics.errorCount);
}

// Log performance report every 5 minutes
setInterval(logPerformance, 300000);

// Cleanup function
function cleanup() {
    pageObserver.disconnect();
    clearInterval(logPerformance);
}

// Cleanup on page unload
window.addEventListener('beforeunload', cleanup);
