function addActiveClass(number) {
  if (
    document.getElementById("gallery-carousel-1").classList.contains("active")
  ) {
    document.getElementById("gallery-carousel-1").classList.remove("active");
  }
  if (
    document.getElementById("gallery-carousel-2").classList.contains("active")
  ) {
    document.getElementById("gallery-carousel-2").classList.remove("active");
  }
  if (
    document.getElementById("gallery-carousel-3").classList.contains("active")
  ) {
    document.getElementById("gallery-carousel-3").classList.remove("active");
  }
  if (
    document.getElementById("gallery-carousel-4").classList.contains("active")
  ) {
    document.getElementById("gallery-carousel-4").classList.remove("active");
  }
  if (
    document.getElementById("gallery-carousel-5").classList.contains("active")
  ) {
    document.getElementById("gallery-carousel-5").classList.remove("active");
  }
  if (
    document.getElementById("gallery-carousel-6").classList.contains("active")
  ) {
    document.getElementById("gallery-carousel-6").classList.remove("active");
  }
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

document.getElementById("1").addEventListener("click", addActiveClass(1));
document.getElementById("2").addEventListener("click", addActiveClass(2));
document.getElementById("3").addEventListener("click", addActiveClass(3));
document.getElementById("4").addEventListener("click", addActiveClass(4));
document.getElementById("5").addEventListener("click", addActiveClass(5));
document.getElementById("6").addEventListener("click", addActiveClass(6));
