const navbar = document.getElementById("navbar");
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 50) {
    navbar.classList.add("bg-danger");
  } else {
    navbar.classList.remove("bg-danger");
  }
});
new WOW().init();