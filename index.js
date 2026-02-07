// ---
// Configuration
const CONFIG = {
  enableSplashScreen: false  // Set to true to enable splash screen
}

// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// ---
// Splash Screen with rotating greetings
document.addEventListener('DOMContentLoaded', function() {
  // Check if splash screen is enabled
  if (!CONFIG.enableSplashScreen) {
    const splashScreen = document.getElementById('splashScreen')
    if (splashScreen) {
      splashScreen.remove()  // Remove splash screen immediately if disabled
    }
    return
  }
  
  const splashScreen = document.getElementById('splashScreen')
  const greetingElement = document.getElementById('splashGreeting')
  
  if (!splashScreen || !greetingElement) return
  
  // Lock body scroll
  document.body.classList.add('splash-active')
  
  // Greetings in multiple languages
  const greetings = [
    'Hello',        // English
    'नमस्ते',       // Hindi
    'नमस्कार',      // Marathi
    'Bonjour'       // French (global developer audience)
  ]
  
  let currentIndex = 0
  
  // Rotate greetings very fast (200ms interval)
  const rotateGreeting = setInterval(() => {
    currentIndex = (currentIndex + 1) % greetings.length
    greetingElement.style.opacity = '0'
    
    setTimeout(() => {
      greetingElement.textContent = greetings[currentIndex]
      greetingElement.style.opacity = '1'
    }, 100)
  }, 200)
  
  // Auto-dismiss after 0.5 seconds (500ms)
  setTimeout(() => {
    clearInterval(rotateGreeting)
    splashScreen.classList.add('splash-screen--hidden')
    document.body.classList.remove('splash-active')
    
    // Remove from DOM after animation completes (shorter fade)
    setTimeout(() => {
      splashScreen.remove()
    }, 400)
  }, 500)
})


