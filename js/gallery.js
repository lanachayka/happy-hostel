function addActiveClass(number) {
  document.getElementById("gallery-carousel-1").classList.remove("active");
  document.getElementById("gallery-carousel-2").classList.remove("active");
  document.getElementById("gallery-carousel-3").classList.remove("active");
  document.getElementById("gallery-carousel-4").classList.remove("active");
  document.getElementById("gallery-carousel-5").classList.remove("active");
  document.getElementById("gallery-carousel-6").classList.remove("active");
  switch (number) {
    case 1:
      document.getElementById("gallery-carousel-1").classList.add("active");
      break;
    case 2:
      document.getElementById("gallery-carousel-2").classList.add("active");
      break;
    case 3:
      document.getElementById("gallery-carousel-3").classList.add("active");
      break;
    case 4:
      document.getElementById("gallery-carousel-4").classList.add("active");
      break;
    case 5:
      document.getElementById("gallery-carousel-5").classList.add("active");
      break;
    case 6:
      document.getElementById("gallery-carousel-6").classList.add("active");
      break;
  }
}

document.getElementById("1").addEventListener("click", addActiveClass1);
document.getElementById("2").addEventListener("click", addActiveClass2);
document.getElementById("3").addEventListener("click", addActiveClass3);
document.getElementById("4").addEventListener("click", addActiveClass4);
document.getElementById("5").addEventListener("click", addActiveClass5);
document.getElementById("6").addEventListener("click", addActiveClass6);

function addActiveClass1() {
  addActiveClass(1);
}

function addActiveClass2() {
  addActiveClass(2);
}

function addActiveClass3() {
  addActiveClass(3);
}

function addActiveClass4() {
  addActiveClass(4);
}

function addActiveClass5() {
  addActiveClass(5);
}

function addActiveClass6() {
  addActiveClass(6);
}
