# 📱 PWA Setup Guide

Your portfolio is now a **Progressive Web App (PWA)**!

## ✨ Features

- ✅ **Installable**: Users can install your portfolio as an app
- ✅ **Offline Support**: Works without internet connection
- ✅ **Fast Loading**: Cached assets load instantly
- ✅ **App-like Experience**: Runs in standalone mode
- ✅ **Mobile Optimized**: Perfect for mobile devices

## 📋 What's Included

### 1. **manifest.json**
App configuration file that defines:
- App name and icons
- Theme colors
- Display mode
- Start URL

### 2. **sw.js** (Service Worker)
Handles offline functionality:
- Caches important files
- Serves cached content when offline
- Updates cache automatically

### 3. **PWA Meta Tags** (in index.html)
```html
<meta name="theme-color" content="#7843e9" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<link rel="manifest" href="/manifest.json" />
```

## 🎨 Generating PWA Icons

You need icons in these sizes:
- 72x72, 96x96, 128x128, 144x144
- 152x152, 192x192, 384x384, 512x512

### Option 1: Online Tool (Recommended)
1. Go to https://realfavicongenerator.net/
2. Upload `assets/png/aakash-1.png`
3. Download generated icons
4. Place them in `assets/icons/`

### Option 2: Using ImageMagick
```bash
# Install ImageMagick first
brew install imagemagick  # macOS
# or
sudo apt install imagemagick  # Linux

# Generate icons
for size in 72 96 128 144 152 192 384 512; do
  convert assets/png/aakash-1.png -resize ${size}x${size} assets/icons/icon-${size}x${size}.png
done
```

### Option 3: Use PWA Builder
https://www.pwabuilder.com/imageGenerator

## 🧪 Testing Your PWA

### Desktop (Chrome/Edge)
1. Open your site in Chrome
2. Look for install icon in address bar
3. Click "Install"

### Mobile (Android)
1. Open your site in Chrome
2. Tap menu (⋮) → "Add to Home Screen"
3. App will appear on home screen

### Mobile (iOS)
1. Open your site in Safari
2. Tap Share button
3. Select "Add to Home Screen"

## 🔍 Verify PWA Status

### Lighthouse Audit
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit (check "Progressive Web App")
4. Should score 100% ✅

### Application Tab
1. Open Chrome DevTools (F12)
2. Go to "Application" tab
3. Check:
   - ✅ Manifest loaded
   - ✅ Service Worker registered
   - ✅ Cache Storage populated

## 📝 Customization

### Update App Name
Edit `manifest.json`:
```json
{
  "name": "Your Name - Portfolio",
  "short_name": "Your Portfolio"
}
```

### Change Theme Color
Edit `manifest.json` and `index.html`:
```json
{
  "theme_color": "#your-color"
}
```

```html
<meta name="theme-color" content="#your-color" />
```

### Add More URLs to Cache
Edit `sw.js`:
```javascript
const urlsToCache = [
  '/',
  '/index.html',
  '/your-new-page.html'  // Add here
];
```

### Update Cache Version
When you make changes, update the version in `sw.js`:
```javascript
const CACHE_NAME = 'aakash-portfolio-v2';  // Increment
```

## 🚀 Deployment

When deploying to Netlify:
1. ✅ `manifest.json` is deployed
2. ✅ `sw.js` is deployed
3. ✅ Icons are in `assets/icons/`
4. ✅ HTTPS is enabled (required for PWA)

## 🎯 PWA Checklist

- [x] manifest.json created
- [x] Service worker registered
- [x] Meta tags added
- [ ] Icons generated (see steps above)
- [ ] Test on mobile device
- [ ] Run Lighthouse audit
- [ ] Verify offline functionality

## 📖 Resources

- [PWA Documentation](https://web.dev/progressive-web-apps/)
- [Service Workers Guide](https://developers.google.com/web/fundamentals/primers/service-workers)
- [Manifest Generator](https://www.simicart.com/manifest-generator.html/)
- [Icon Generator](https://realfavicongenerator.net/)

## ⚠️ Important Notes

1. **HTTPS Required**: PWAs only work on HTTPS (Netlify provides this)
2. **Icons**: Generate all icon sizes for best experience
3. **Testing**: Test on actual mobile devices
4. **Updates**: Increment cache version when making changes

---

**🎉 Congratulations!** Your portfolio is now a fully functional PWA!

Users can install it on their devices and use it offline.
