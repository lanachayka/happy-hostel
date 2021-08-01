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

const photo1 = document.getElementById("1");
photo1.addEventListener("click", addActiveClass(1));

const photo2 = document.getElementById("2");
photo1.addEventListener("click", addActiveClass(2));

const photo3 = document.getElementById("3");
photo1.addEventListener("click", addActiveClass(3));

const photo4 = document.getElementById("4");
photo1.addEventListener("click", addActiveClass(4));

const photo5 = document.getElementById("5");
photo1.addEventListener("click", addActiveClass(5));

const photo6 = document.getElementById("6");
photo1.addEventListener("click", addActiveClass(6));
