const navbar = document.getElementById("navvy");
function changeNavbarColorOnScroll() {

  if (window.scrollY > 200) {
    navbar.classList.add('navbar-scroll');
    navbar.classList.remove('navbar-toppy');
  } else {
    navbar.classList.remove('navbar-scroll');
    navbar.classList.add('navbar-toppy');
  }
}
window.addEventListener('scroll', changeNavbarColorOnScroll);