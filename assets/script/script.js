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
// =============== word-editor =============
var editor = CKEDITOR.replace("editor1", {
  width: "100%",
  height: "700",
  contentsCss: "",
  //removePlugins : 'pastefromword',
  extraAllowedContent:
      "h1;div{border,background-color};table[align,cellspacing]{margin,width,border,border-*};tr;td{border-color,height,vertical-align,width};tbody;th;span{background-color,background,color,font-size,font-family};p{margin-left,margin-right,margin-top,margin-bottom}"
});

editor.on("pluginsLoaded", function (evt) {
  evt.editor.filter.addTransformations([
      [
          {
              element: "td",
              left: function (el) {
                  return el.name == "td";
              },
              right: function (el, tools) {
                  if (el.attributes && el.attributes.valign) {
                      el.styles["vertical-align"] = el.attributes.valign;
                      delete el.attributes.valign;
                  }
              }
          }
      ],
      [
          {
              element: "div",
              left: function (el) {
                  return el.name == "div";
              },
              right: function (el, tools) {
                  if (el.styles && el.styles["background"]) {
                      el.styles["background-color"] = el.styles["background"];
                      delete el.styles["background"];
                  }
              }
          }
      ]
  ]);
});