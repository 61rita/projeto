document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('expanded');
});

// Active links and pages styles
var anchor = document.querySelector('.nav-links').querySelectorAll('a');
for (var i = 0; i < anchor.length; i++) {
  if (window.location.href === anchor[i].href) {
    anchor[i].classList.add("active");
  }
}