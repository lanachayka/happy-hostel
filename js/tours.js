
function hidden() {
  if (document.documentElement.clientWidth > 750) {
    document.getElementById("bicycle").hidden = true;
    document.getElementById("walk").hidden = true;
    document.getElementById("tapas").hidden = true;
    document.getElementById("tour-bicycle").onmouseover = function (event) {
      document.getElementById("bicycle").hidden = false;
    };
    document.getElementById("tour-walk").onmouseover = function (event) {
      document.getElementById("walk").hidden = false;
    };
    document.getElementById("tour-tapas").onmouseover = function (event) {
      document.getElementById("tapas").hidden = false;
    };
  }
}

function unhidden() {
  if (document.documentElement.clientWidth > 750) {
    document.getElementById("tour-bicycle").onmouseout = function (event) {
      document.getElementById("bicycle").hidden = true;
    };
    document.getElementById("tour-walk").onmouseout = function (event) {
      document.getElementById("walk").hidden = true;
    };
    document.getElementById("tour-tapas").onmouseout = function (event) {
      document.getElementById("tapas").hidden = true;
    };
  }
}

hidden()
unhidden()


