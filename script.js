
let slideIndex = 0;
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const slidesPerView = 4; 

function showSlide(index) {
  if (index >= slides.length) slideIndex = 0;
  else if (index < 0) slideIndex = slides.length - slidesPerView;
  else slideIndex = index;

  slidesContainer.style.transform = `translateX(-${slideIndex * (100 / slidesPerView)}%)`;

  dots.forEach(dot => dot.classList.remove('active'));
  const dotIndex = Math.floor(slideIndex / slidesPerView);
  if (dots[dotIndex]) dots[dotIndex].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i * slidesPerView);
  });
});

showSlide(slideIndex);

const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    const bg = slide.style.backgroundImage;
    const url = bg.slice(5, -2);
    lightboxImg.src = url;
    lightbox.classList.add('show');
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});


function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
    const cname = name + "=";
    const decoded = decodeURIComponent(document.cookie).split(';');
    for (let c of decoded) {
        c = c.trim();
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}

document.addEventListener("DOMContentLoaded", () => {
    if (!getCookie("visited")) {
        setCookie("visited", "true", 7);
        alert("Grazie per averci scelto!");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formMessage.textContent = "Per favore, compila tutti i campi!";
            formMessage.style.color = "red";
            return;
        }

        formMessage.textContent = "Messaggio inviato correttamente!";
        formMessage.style.color = "green";

        form.reset();
    });
});

