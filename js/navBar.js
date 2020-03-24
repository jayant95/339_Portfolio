var topPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (currentScrollPos >= 50) {
    this.document.getElementById("main-navigation-home").style.height = "70px";
    this.document.getElementById("main-navigation-home").style.visibility = "visible";
    this.document.getElementById("main-navigation-home").style.opacity = "1";
} else {
    this.document.getElementById("main-navigation-home").style.opacity = "0";
    this.document.getElementById("main-navigation-home").style.visibility = "hidden";
    this.document.getElementById("main-navigation-home").style.height = "0";
  }
}