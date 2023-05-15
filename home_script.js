let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const toggle = document.getElementsByClassName("toggle")[0];
const nav = document.getElementsByClassName("nav-links")[0];

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

var currentPage = 1;
var numPages = 4;

function showPage(pageNumber) {
  // Hide all pages
  for (var i = 1; i <= numPages; i++) {
    document.getElementById("page" + i).classList.remove("active");
  }
  // Show current page
  document.getElementById("page" + pageNumber).classList.add("active");
  currentPage = pageNumber;
}

function nextPage() {
  if (currentPage < numPages) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}
