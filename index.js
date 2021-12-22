function parallax() {
    var parallax = document.getElementById("parallax");
    parallax.style.top = -(window.pageYOffset / 4)+'px';
  }
  
  window.addEventListener("scroll", parallax, false);