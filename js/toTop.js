let myBtn = document.getElementById("toTop");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    myBtn.style.display = "inline";
  } else {
    myBtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
