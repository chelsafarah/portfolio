//untuk toggle hamburger

const toggleButton = document.getElementsByClassName("toggle-menu")[0];
const navbarLink = document.getElementsByClassName("navbar-link")[0];
const link = document.querySelectorAll(".link");

toggleButton.addEventListener("click", () => {
  navbarLink.classList.toggle("active");
});

link.forEach((item) => {
  item.addEventListener("click", (event) => {
    navbarLink.classList.toggle("active");
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//slide gambar
var slideIndex = [1, 1];
var slideId = ["slide1", "slide2"];
showDivs(1, 0);
showDivs(1, 1);

function plusDivs(n, no) {
  showDivs((slideIndex[no] += n), no);
}

function showDivs(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
  }
}
