// STRUMFI TECH SRL Website JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initNavigation()
  initContactForm()
  initScrollEffects()
  initAnimations()
  initBackToTop()
  initImageLazyLoading()
  console.log("STRUMFI TECH SRL Website loaded successfully!")
})

// Navigation functionality
function initNavigation() {
  const navbar = document.querySelector(".navbar")
  const navLinks = document.querySelectorAll(".nav-link")

  // Add scroll effect to navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled")
    } else {
      navbar.classList.remove("navbar-scrolled")
    }
  })

  // Update active nav link based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  navLinks.forEach((link) => {
    const href = link.getAttribute("href")
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.classList.add("active")
    } else {
      link.classList.remove("active")
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
}

// Contact form functionality
function initContactForm() {
  const contactForm = document.getElementById("contactForm")
  if (!contactForm) return

  // Enhanced form submission
  contactForm.addEventListener("submit", (e) => {
    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Validate form
    if (!validateForm(data)) {
      e.preventDefault()
      return false
    }

    // Create email body
    const emailBody = createEmailBody(data)

    // Update mailto link
    const mailtoLink = `mailto:strumfitech@gmail.com?subject=Cerere de contact - ${data.serviciu || "General"}&body=${encodeURIComponent(emailBody)}`
    contactForm.action = mailtoLink

    // Show success message after a short delay
    setTimeout(() => {
      showSuccessMessage()
    }, 1000)
  })
}

// Create email body from form data
function createEmailBody(data) {
  const body = `Salut,

Am completat formularul de contact de pe site-ul STRUMFI TECH SRL cu următoarele informații:

DETALII CONTACT:
- Nume: ${data.nume}
- Email: ${data.email}
- Telefon: ${data.telefon || "Nu a fost specificat"}
- Companie: ${data.companie || "Nu a fost specificată"}

SERVICIU DE INTERES:
${data.serviciu ? getServiceName(data.serviciu) : "Nu a fost specificat"}

MESAJ:
${data.mesaj}

---
Acest mesaj a fost trimis prin formularul de contact de pe site-ul STRUMFI TECH SRL.
Data: ${new Date().toLocaleDateString("ro-RO")}
Ora: ${new Date().toLocaleTimeString("ro-RO")}
`

  return body
}

// Get service name from value
function getServiceName(value) {
  const services = {
    "website-prezentare": "Website de prezentare",
    "magazin-online": "Magazin online",
    "aplicatie-web": "Aplicație web",
    mentenanta: "Mentenanță & Suport",
    seo: "Optimizare SEO",
    consultanta: "Consultanță IT",
    altele: "Altele",
  }
  return services[value] || value
}

// Form validation
function validateForm(data) {
  const errors = []

  // Required fields validation
  if (!data.nume || data.nume.trim().length < 2) {
    errors.push("Numele trebuie să conțină cel puțin 2 caractere.")
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push("Adresa de email nu este validă.")
  }

  if (!data.mesaj || data.mesaj.trim().length < 10) {
    errors.push("Mesajul trebuie să conțină cel puțin 10 caractere.")
  }

  if (!data.gdpr) {
    errors.push("Trebuie să accepți prelucrarea datelor personale.")
  }

  // Phone validation (if provided)
  if (data.telefon && !isValidPhone(data.telefon)) {
    errors.push("Numărul de telefon nu este valid.")
  }

  // Show errors if any
  if (errors.length > 0) {
    showErrors(errors)
    return false
  }

  return true
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Phone validation
function isValidPhone(phone) {
  const phoneRegex = /^[+]?[0-9\s\-()]{10,}$/
  return phoneRegex.test(phone)
}

// Show validation errors
function showErrors(errors) {
  // Remove existing error alerts
  const existingAlerts = document.querySelectorAll(".alert-danger")
  existingAlerts.forEach((alert) => alert.remove())

  // Create error alert
  const alertDiv = document.createElement("div")
  alertDiv.className = "alert alert-danger alert-dismissible fade show mt-3"
  alertDiv.innerHTML = `
        <strong>Erori de validare:</strong>
        <ul class="mb-0 mt-2">
            ${errors.map((error) => `<li>${error}</li>`).join("")}
        </ul>
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  // Insert alert before form
  const contactForm = document.getElementById("contactForm")
  contactForm.parentNode.insertBefore(alertDiv, contactForm)

  // Scroll to alert
  alertDiv.scrollIntoView({ behavior: "smooth", block: "center" })
}

// Show success message
function showSuccessMessage() {
  // Remove existing alerts
  const existingAlerts = document.querySelectorAll(".alert")
  existingAlerts.forEach((alert) => alert.remove())

  // Create success alert
  const alertDiv = document.createElement("div")
  alertDiv.className = "alert alert-success alert-dismissible fade show mt-3"
  alertDiv.innerHTML = `
        <strong><i class="fas fa-check-circle me-2"></i>Succes!</strong>
        Aplicația ta de email s-a deschis cu mesajul pregătit. Verifică și trimite email-ul pentru a finaliza contactarea.
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `

  // Insert alert before form
  const contactForm = document.getElementById("contactForm")
  contactForm.parentNode.insertBefore(alertDiv, contactForm)

  // Scroll to alert
  alertDiv.scrollIntoView({ behavior: "smooth", block: "center" })

  // Reset form after showing success
  setTimeout(() => {
    contactForm.reset()
  }, 2000)
}

// Scroll effects
function initScrollEffects() {
  // Fade in elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in")
      }
    })
  }, observerOptions)

  // Observe elements
  const elementsToObserve = document.querySelectorAll(
    ".service-card, .service-preview-card, .feature-icon, .contact-item",
  )
  elementsToObserve.forEach((el) => {
    el.classList.add("fade-in-element")
    observer.observe(el)
  })
}

// Animation effects
function initAnimations() {
  // Add CSS for fade-in animation
  const style = document.createElement("style")
  style.textContent = `
        .fade-in-element {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in-element.fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .navbar-scrolled {
            background-color: rgba(13, 110, 253, 0.95) !important;
            backdrop-filter: blur(10px);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
    `
  document.head.appendChild(style)

  // Typing effect for hero title (only on home page)
  const heroTitle = document.querySelector(".hero-section h1")
  if (
    heroTitle &&
    (window.location.pathname.includes("index.html") ||
      window.location.pathname === "/" ||
      window.location.pathname === "")
  ) {
    // Don't apply typing effect on mobile for better performance
    if (window.innerWidth > 768) {
      typeWriter(heroTitle)
    }
  }
}

// Typing effect
function typeWriter(element) {
  const text = element.innerHTML
  element.innerHTML = ""
  element.style.opacity = "1"

  let i = 0
  const timer = setInterval(() => {
    if (i < text.length) {
      if (text.charAt(i) === "<") {
        // Handle HTML tags
        const tagEnd = text.indexOf(">", i)
        if (tagEnd !== -1) {
          element.innerHTML += text.substring(i, tagEnd + 1)
          i = tagEnd + 1
        } else {
          element.innerHTML += text.charAt(i)
          i++
        }
      } else {
        element.innerHTML += text.charAt(i)
        i++
      }
    } else {
      clearInterval(timer)
    }
  }, 50)
}

// Back to top button
function initBackToTop() {
  // Create back to top button
  const backToTopBtn = document.createElement("button")
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>'
  backToTopBtn.className = "btn btn-primary back-to-top"
  backToTopBtn.setAttribute("aria-label", "Înapoi sus")
  backToTopBtn.title = "Înapoi sus"

  document.body.appendChild(backToTopBtn)

  // Show/hide button based on scroll position
  window.addEventListener(
    "scroll",
    debounce(() => {
      if (window.pageYOffset > 300) {
        backToTopBtn.style.display = "block"
      } else {
        backToTopBtn.style.display = "none"
      }
    }, 100),
  )

  // Scroll to top on click
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })
}

// Image lazy loading
function initImageLazyLoading() {
  const images = document.querySelectorAll("img")

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.classList.add("fade-in")
        observer.unobserve(img)
      }
    })
  })

  images.forEach((img) => {
    imageObserver.observe(img)
  })
}

// Utility functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Phone number formatting
function formatPhoneNumber(input) {
  const phoneNumber = input.value.replace(/\D/g, "")
  const formattedNumber = phoneNumber.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3")
  input.value = formattedNumber
}

// Add phone formatting to phone input
document.addEventListener("DOMContentLoaded", () => {
  const phoneInput = document.getElementById("telefon")
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      formatPhoneNumber(this)
    })
  }
})

// Error handling
window.addEventListener("error", (e) => {
  console.error("JavaScript Error:", e.error)
  // You can add error reporting here
})

// Performance monitoring
window.addEventListener("load", () => {
  // Log page load time
  const loadTime = performance.now()
  console.log(`Page loaded in ${Math.round(loadTime)}ms`)
})

// Console welcome message
console.log(`
🚀 STRUMFI TECH SRL Website
📧 Contact: strumfitech@gmail.com
📱 Telefon: +40 752 367 977
💻 Dezvoltat cu ❤️ de STRUMFI TECH SRL

Site-ul este complet funcțional și optimizat!
`)

// Service worker registration (optional for PWA features)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    // Uncomment the following lines if you want to add PWA features
    // navigator.serviceWorker.register('/sw.js')
    //     .then(function(registration) {
    //         console.log('ServiceWorker registration successful');
    //     })
    //     .catch(function(err) {
    //         console.log('ServiceWorker registration failed');
    //     });
  })
}
