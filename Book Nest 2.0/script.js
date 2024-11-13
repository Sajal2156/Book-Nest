// Menu toggle functionality
const menuBtn = document.getElementById('menubtn');
const navLinks = document.querySelector('.navlinks');

menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll to top functionality
const topButton = document.querySelector('.top-button');

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {   
    topButton.style.display = 'block';
  } else {
    topButton.style.display = 'none';
  }
};

topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation
const contactForm = document.querySelector('.form');
const nameInput = contactForm.querySelector('input[placeholder="Name"]');
const phoneInput = contactForm.querySelector('input[placeholder="phone Number"]');
const emailInput = contactForm.querySelector('input[placeholder="Email"]');
const messageInput = contactForm.querySelector('input[placeholder="Message"]');
const sendButton = document.querySelector('.contact button');

sendButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (nameInput.value === '' || phoneInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all the fields.');
  } else if (!validateEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
  } else {
    alert('Form submitted successfully!');
  }
});

// Email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

// Smooth scroll to sections
const links = document.querySelectorAll('.navlinks a');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Newsletter subscription
const subscribeButton = document.querySelector('.media .col-3 button');
const emailInputNewsletter = document.querySelector('.media .col-3 input');

subscribeButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (!validateEmail(emailInputNewsletter.value)) {
    alert('Please enter a valid email address.');
  } else {
    alert('Thank you for subscribing!');
    emailInputNewsletter.value = '';
  }
});

// Social media icon hover effect
const socialIcons = document.querySelectorAll('.social i, .media .links i');

socialIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.style.transform = 'scale(1.2)';
    icon.style.transition = 'transform 0.3s ease-in-out';
  });
  icon.addEventListener('mouseleave', () => {
    icon.style.transform = 'scale(1)';
  });
});

// Book Carousel (Slideshow for book section)
let currentBookIndex = 0;
const bookImages = document.querySelectorAll('.book-row .col-1 img');

function showBook(index) {
  bookImages.forEach((img, idx) => {
    img.style.display = idx === index ? 'block' : 'none';
  });
}

function nextBook() {
  currentBookIndex = (currentBookIndex + 1) % bookImages.length;
  showBook(currentBookIndex);
}

function prevBook() {
  currentBookIndex = (currentBookIndex - 1 + bookImages.length) % bookImages.length;
  showBook(currentBookIndex);
}


showBook(currentBookIndex);

// Event listeners for carousel buttons
document.querySelector('.next-book-btn').addEventListener('click', nextBook);
document.querySelector('.prev-book-btn').addEventListener('click', prevBook);

// Dynamic content updates (for sections like 'Our Library' and 'About Us')
const librarySectionText = document.querySelector('.library .text');
const aboutUsSectionText = document.querySelector('.about .text');

// Change text dynamically based on some criteria (e.g., user activity, time of day)
function updateLibraryText() {
  const hour = new Date().getHours();
  if (hour < 12) {
    librarySectionText.textContent = "Start your day with a good book from our vast collection!";
  } else if (hour < 18) {
    librarySectionText.textContent = "Afternoon reads are best with a cup of coffee and a book.";
  } else {
    librarySectionText.textContent = "End your day with a relaxing read from our library.";
  }
}

function updateAboutUsText() {
  const day = new Date().getDay();
  if (day === 0 || day === 6) {
    aboutUsSectionText.textContent = "Welcome to BookNest, your weekend escape into a world of books.";
  } else {
    aboutUsSectionText.textContent = "Discover, rent, and enjoy books any day of the week at BookNest.";
  }
}

// Call the dynamic update functions
updateLibraryText();
updateAboutUsText();

// Newsletter Email storage (local storage example)
const newsletterForm = document.querySelector('.media .col-3 form');
const newsletterEmail = document.querySelector('.media .col-3 input[type="text"]');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateEmail(newsletterEmail.value)) {
    localStorage.setItem('subscribedEmail', newsletterEmail.value);
    alert('Thank you for subscribing! Check your inbox for updates.');
  } else {
    alert('Invalid email address. Please try again.');
  }
});

// Load subscribed email if any
document.addEventListener('DOMContentLoaded', () => {
  const subscribedEmail = localStorage.getItem('subscribedEmail');
  if (subscribedEmail) {
    newsletterEmail.value = subscribedEmail;
  }
});

