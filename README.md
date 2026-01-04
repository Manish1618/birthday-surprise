# 💖 Birthday Surprise Website

A beautiful, emotional storytelling website that unfolds chapter by chapter through clicks. A digital love letter for your special someone.

## ✨ Features

- 7 Emotional Pages with smooth transitions
- Typewriter text animations
- Photo memory slideshow
- Background music support
- Confetti celebration
- Fully responsive design
- Modern animations and effects

## 🚀 Quick Start

### Step 1: Download/Create the Folder Structure

birthday-surprise/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── music/
│   └── romantic.mp3
└── images/
├── memory1.jpg
├── memory2.jpg
├── memory3.jpg
├── memory4.jpg
├── memory5.jpg
└── memory6.jpg

### Step 2: Add Your Content

1. **Add Photos**: Place 6 photos in the `images/` folder named `memory1.jpg` through `memory6.jpg`
2. **Add Music**: Place 3 romantic songs in the `music/` folder as `romantic1.mp3`, `romantic2.mp3`, and `romantic3.mp3`
3. **Customize Text**: Edit the `js/main.js` file to change quotes, captions, and promises

### Step 3: Customize Messages

Open `js/main.js` and edit these sections:
```javascript
// Change the quotes
const quotes = [
    "Your custom quote here...",
    // Add more quotes
];

// Change memory captions
const memories = [
    { image: "images/memory1.jpg", caption: "Your caption here" },
    // Add more memories
];

// Change promises
const promises = [
    { icon: "💖", text: "Your promise here" },
    // Add more promises
];
```

### Step 4: Deploy

**Option 1: Local Testing**
- Simply open `index.html` in your browser

**Option 2: Online Hosting (Recommended)**
- Upload to [Netlify](https://www.netlify.com/) (Free)
- Upload to [Vercel](https://vercel.com/) (Free)
- Upload to [GitHub Pages](https://pages.github.com/) (Free)

#### How to Deploy on Netlify:
1. Create account on Netlify
2. Drag and drop the `birthday-surprise` folder
3. Get your link and share!

## 🎨 Customization Guide

### Change Colors

Edit `css/style.css` to change gradient backgrounds:
```css
#entry-page {
    background: linear-gradient(135deg, #YOUR_COLOR1, #YOUR_COLOR2, #YOUR_COLOR3);
}
```

### Change Animations

Adjust animation speeds in `css/style.css`:
```css
@keyframes fadeIn {
    /* Modify duration in animation property */
}
```

### Add More Pages

1. Add new HTML section in `index.html`
2. Style it in `css/style.css`
3. Add navigation function in `js/main.js`

## 🎵 Music Recommendations

Choose 3 romantic instrumental or soft songs for different sections:
- **romantic1.mp3**: For the first 3 sections (entry, story, promises) - gentle and romantic
- **romantic2.mp3**: For the next 3 sections (memories, gratitude, new beginning) - emotional and heartfelt  
- **romantic3.mp3**: For the final birthday section - celebratory and joyful

Each track should be:
- Under 5MB for faster loading
- MP3 format
- Instrumental music is less distracting

**Where to find music:**
- YouTube Audio Library (Free, no copyright)
- Pixabay Music (Free)
- Epidemic Sound (Paid but high quality)

## 📱 Mobile Optimization

The website is fully responsive and works on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones
- ✅ All modern browsers

## 🎁 Tips for Best Experience

1. **Test Before Sharing**: Open the website and go through the entire experience
2. **Check Images**: Make sure all 6 photos are loaded
3. **Test Music**: Ensure music plays (some browsers block autoplay)
4. **Share at Right Time**: Send the link at midnight or during a quiet moment
5. **Add Privacy**: Use a hosting platform that doesn't index your site

## 🐛 Troubleshooting

### Music Not Playing
- Some browsers block autoplay until user interaction
- The music starts after the first button click
- Make sure files are named `romantic1.mp3`, `romantic2.mp3`, and `romantic3.mp3` in `music/` folder
- Music automatically switches between sections

### Images Not Showing
- Check file names match exactly: `memory1.jpg`, `memory2.jpg`, etc.
- Check images are in the `images/` folder
- Try using lowercase file extensions (.jpg not .JPG)

### Website Not Working
- Open browser console (F12) to see errors
- Make sure all files are in correct folders
- Test in another browser (Chrome, Firefox, Safari)

## 📝 License

This is a personal project. Feel free to use and modify for your personal use.

## 💝 Final Touch

Tell her to open the link when she's alone. This is a deeply personal experience, and she'll appreciate the privacy.

**Message suggestion:**
"I made something special for you. Open this when you're alone ❤️ [link]"

---

Made with ❤️ for someone special
