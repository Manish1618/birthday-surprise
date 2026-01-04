// ========== CONFIGURATION DATA ==========

// Quotes for the story page
const quotes = [
    "You didn't just enter my life... you changed it.",
    "Every smile of yours feels like home.",
    "This is not just a birthday surprise. It's my heart.",
    "With you, every moment becomes a memory worth keeping.",
    "You are my reason to believe in beautiful things."
];

// Memory photos and captions
const memories = [
    { image: "images/memory1.jpg", caption: "The smile that lights up my world" },
    { image: "images/memory2.jpg", caption: "Every moment with you is precious" },
    { image: "images/memory3.jpg", caption: "Your laughter is my favorite sound" },
    { image: "images/memory4.jpg", caption: "18 was beautiful because of you" },
    { image: "images/memory5.jpg", caption: "Every day with you is a gift" },
    { image: "images/memory6.jpg", caption: "You make ordinary moments extraordinary" }
];

// Promises for the promises page
const promises = [
    { icon: "💖", text: "I promise to always make you smile" },
    { icon: "🌟", text: "I promise to support every dream you chase" },
    { icon: "🌈", text: "I promise to be your safe place" },
    { icon: "✨", text: "I promise to love you more each day" }
];

// ========== STATE MANAGEMENT ==========

let currentQuote = 0;
let currentMemory = 0;

// ========== MUSIC MANAGEMENT ==========

// Music tracks for different sections
const musicTracks = {
    'entry-page': 'bgMusic1',
    'story-page': 'bgMusic1', 
    'promises-page': 'bgMusic1',
    'memories-page': 'bgMusic2',
    'gratitude-page': 'bgMusic2',
    'newbegin-page': 'bgMusic2',
    'final-page': 'bgMusic3'
};

// Current playing music
let currentMusic = null;

// ========== INITIALIZATION ==========

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    generateHearts();
});

// ========== MUSIC FUNCTIONS ==========

// Switch background music based on current page
function switchMusic(pageId) {
    const newTrackId = musicTracks[pageId];
    if (!newTrackId) return;
    
    // Stop current music if playing
    if (currentMusic && currentMusic !== newTrackId) {
        const currentAudio = document.getElementById(currentMusic);
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
    }
    
    // Play new music if different
    if (currentMusic !== newTrackId) {
        const newAudio = document.getElementById(newTrackId);
        if (newAudio) {
            newAudio.play().catch(e => console.log('Music autoplay prevented by browser'));
            currentMusic = newTrackId;
        }
    }
}
    const container = document.getElementById('hearts-container');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.fontSize = (20 + Math.random() * 30) + 'px';
        heart.style.animationDelay = Math.random() * 3 + 's';
        heart.style.animationDuration = (3 + Math.random() * 4) + 's';
        container.appendChild(heart);
    }
}

// Start the experience
function startExperience() {
    switchMusic('entry-page');
    
    transitionToPage('entry-page', 'story-page', 'slide-up');
    setTimeout(() => {
        typeQuote();
        createQuoteDots();
    }, 300);
}

// ========== STORY/QUOTES PAGE FUNCTIONS ==========

// Typewriter effect for quotes
function typeQuote() {
    const quoteElement = document.getElementById('typed-quote');
    const text = quotes[currentQuote];
    let index = 0;
    quoteElement.textContent = '';

    const timer = setInterval(() => {
        if (index < text.length) {
            quoteElement.textContent += text[index];
            index++;
        } else {
            clearInterval(timer);
        }
    }, 50);
}

// Navigate to next quote
function nextQuote() {
    if (currentQuote < quotes.length - 1) {
        currentQuote++;
        typeQuote();
        updateQuoteDots();
        document.getElementById('quote-btn-text').textContent = 'Next';
    } else {
        transitionToPage('story-page', 'promises-page', 'slide-left');
        setTimeout(showPromises, 300);
    }
    
    if (currentQuote === quotes.length - 1) {
        document.getElementById('quote-btn-text').textContent = 'Continue';
    }
}

// Create quote progress dots
function createQuoteDots() {
    const container = document.getElementById('quote-dots');
    container.innerHTML = '';
    quotes.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        container.appendChild(dot);
    });
}

// Update quote dots
function updateQuoteDots() {
    const dots = document.querySelectorAll('#quote-dots .dot');
    dots.forEach((dot, i) => {
        if (i === currentQuote) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// ========== PROMISES PAGE FUNCTIONS ==========

// Show promises with staggered animation
function showPromises() {
    const container = document.getElementById('promises-container');
    container.innerHTML = '';
    
    promises.forEach((promise, index) => {
        const card = document.createElement('div');
        card.className = 'promise-card';
        card.innerHTML = `
            <p class="promise-text">
                <span class="promise-icon">${promise.icon}</span>
                ${promise.text}
            </p>
        `;
        container.appendChild(card);
        
        setTimeout(() => {
            card.classList.add('show');
        }, index * 200);
    });
}

// Go to memories page
function goToMemories() {
    transitionToPage('promises-page', 'memories-page', 'slide-up');
    setTimeout(() => {
        updateMemory();
        createMemoryDots();
    }, 300);
}

// ========== MEMORIES PAGE FUNCTIONS ==========

// Update memory display
function updateMemory() {
    const imageContainer = document.getElementById('memory-image');
    const captionElement = document.getElementById('memory-caption');
    const memory = memories[currentMemory];
    
    // Try to load the actual image, fallback to placeholder
    const img = new Image();
    img.onload = function() {
        imageContainer.style.backgroundImage = `url('${memory.image}')`;
        imageContainer.innerHTML = '';
    };
    img.onerror = function() {
        // Show placeholder if image doesn't exist
        imageContainer.style.backgroundImage = 'linear-gradient(135deg, #f472b6, #a855f7)';
        imageContainer.innerHTML = `
            <div class="memory-placeholder">
                <div class="heart-icon">❤️</div>
                <p>Memory ${currentMemory + 1} of ${memories.length}</p>
                <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 0.5rem;">(Add your photo: ${memory.image})</p>
            </div>
        `;
    };
    img.src = memory.image;
    
    captionElement.textContent = memory.caption;
    updateMemoryDots();
}

// Navigate to next memory
function nextMemory() {
    if (currentMemory < memories.length - 1) {
        currentMemory++;
        updateMemory();
        document.getElementById('memory-btn-text').textContent = 'Next Memory';
    } else {
        transitionToPage('memories-page', 'gratitude-page', 'slide-up');
    }
    
    if (currentMemory === memories.length - 1) {
        document.getElementById('memory-btn-text').textContent = 'Continue';
    }
}

// Create memory progress dots
function createMemoryDots() {
    const container = document.getElementById('memory-dots');
    container.innerHTML = '';
    memories.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        container.appendChild(dot);
    });
}

// Update memory dots
function updateMemoryDots() {
    const dots = document.querySelectorAll('#memory-dots .dot');
    dots.forEach((dot, i) => {
        if (i === currentMemory) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// ========== GRATITUDE PAGE FUNCTIONS ==========

// Go to new beginning page
function goToNewBegin() {
    transitionToPage('gratitude-page', 'newbegin-page', 'slide-left');
}

// ========== NEW BEGINNING PAGE FUNCTIONS ==========

// Go to final birthday page
function goToFinal() {
    transitionToPage('newbegin-page', 'final-page', 'slide-up');
    setTimeout(() => {
        createConfetti();
        showWishes();
    }, 300);
}

// ========== FINAL PAGE FUNCTIONS ==========

// Create confetti animation
function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confetti.style.animationDelay = Math.random() * 3 + 's';
        confetti.style.animationDuration = (3 + Math.random() * 2) + 's';
        container.appendChild(confetti);
    }
}

// Show wishes with staggered animation
function showWishes() {
    const wishes = document.querySelectorAll('.wish-text');
    wishes.forEach((wish, index) => {
        setTimeout(() => {
            wish.classList.add('show');
        }, index * 300);
    });
}

// Replay the entire experience
function replayExperience() {
    currentQuote = 0;
    currentMemory = 0;
    
    // Remove all wish animations
    const wishes = document.querySelectorAll('.wish-text');
    wishes.forEach(wish => wish.classList.remove('show'));
    
    transitionToPage('final-page', 'entry-page', 'fade-out');
}

// ========== UTILITY FUNCTIONS ==========

// Page transition helper function
function transitionToPage(fromId, toId, animation) {
    const fromPage = document.getElementById(fromId);
    const toPage = document.getElementById(toId);
    
    // Fade out current page
    fromPage.classList.add('fade-out');
    
    setTimeout(() => {
        // Hide current page
        fromPage.classList.add('hidden');
        fromPage.classList.remove('fade-out');
        
        // Show and animate new page
        toPage.classList.remove('hidden');
        toPage.classList.add(animation);
        
        // Switch music for the new page
        switchMusic(toId);
        
        // Remove animation class after animation completes
        setTimeout(() => {
            toPage.classList.remove(animation);
        }, 700);
    }, 500);
}

// ========== CUSTOMIZATION TIPS ==========

/*
HOW TO CUSTOMIZE THIS WEBSITE:

1. CHANGE QUOTES:
   Edit the 'quotes' array at the top of this file.
   Add or remove quotes as needed.

2. CHANGE MEMORY CAPTIONS:
   Edit the 'memories' array.
   Make sure image paths match your actual image files.

3. CHANGE PROMISES:
   Edit the 'promises' array.
   Change icons and text as you like.

4. ADD MORE QUOTES/MEMORIES:
   Just add more items to the arrays:
   
   quotes.push("Your new quote here");
   
   memories.push({
       image: "images/memory7.jpg",
       caption: "Another beautiful moment"
   });

5. CHANGE ANIMATION SPEED:
   Find the setTimeout() delays and adjust milliseconds.
   Example: setTimeout(() => { ... }, 300); // Change 300 to your preferred delay

6. DISABLE MUSIC:
   Comment out or remove the music.play() line in startExperience()

7. CHANGE PAGE ORDER:
   Modify the function calls in goToMemories(), goToNewBegin(), etc.
   to change which page comes after which.
*/