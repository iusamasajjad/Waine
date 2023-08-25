// FAQ functions-Methods ===============

function toggle1(e) {
    console.log("triger")
    var product = e.target.parentElement;
    let iconShow = product.getElementsByClassName("plusicon-hide")[0];
    let iconHide = product.getElementsByClassName("minusicon-hide")[0];
    let toggleDiv = product.getElementsByClassName("toggle-1")[0];
    if (toggleDiv.classList.contains("disply-none")) {
      toggleDiv.classList.remove("disply-none");
      iconShow.style.display = "none";
      iconHide.style.display = "flex";
    }
    else {
      toggleDiv.classList.add("disply-none");
      iconShow.style.display = "flex";
      iconHide.style.display = "none";
    }
  }
  // ============ mobile-hamburger-function
function menuToggle() {
  var x = document.getElementById("mobile-menu");
  x.style.width = "100%";
}
function menuClose() {
  var x = document.getElementById("mobile-menu");
  x.style.width = "0%";
}