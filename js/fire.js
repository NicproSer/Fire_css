//Fire Css: Framework Css Version 2.0.0
//@author: Nicolás Gómez
//Copyright © 2023
//Licencia: MIT

//Configuración

const body = document.querySelector("body"),
  //Nav
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  sidebarClose = document.querySelector(".sidebarClose"),
  //Dropdown
  dropdownList = document.querySelector(".dropdown"),
  //Carrusel
  carouselSlide = document.querySelector(".carousel-slides"),
  carouselImages = document.querySelectorAll(".carousel-slides img"),
  nextSlide = document.querySelector("#nextSlide"),
  prevSlide = document.querySelector("#prevSlide"),
  currentSlide = document.querySelector(".current-slide"),
  allSlides = document.querySelector(".all-slides"),
  //Pagination
  ulTag = document.querySelector(".ul-tag"),
  //Alertas
  buttonAlert = document.querySelector(".button-alert"),
  toast = document.querySelector(".toast"),
  closeIcon = document.querySelector(".toast-close"),
  progressAlert = document.querySelector(".alert-progress");

//Toggle dark-light mode and Search Box

let getMode = localStorage.getItem("mode");
if (getMode && getMode === "light-mode") {
  body.classList.add("light");
}

//Dark and Light
modeToggle.addEventListener("click", () => {
  modeToggle.classList.toggle("active");
  body.classList.toggle("dark");
  nav.classList.toggle("nav-dark");

  if (!body.classList.contains("dark")) {
    localStorage.setItem("mode", "dark-mode");
  } else {
    localStorage.setItem("mode", "light-mode");
  }
});
//Search Box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//Toggle Sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

sidebarClose.addEventListener("click", () => {
  nav.classList.remove("active");
});

//Dropdown
function show(anything) {
  document.querySelector(".textBox").value = anything;
}

dropdownList.addEventListener("click", () => {
  dropdownList.classList.toggle("active");
});

//Scroll Up

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {
  var currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;

  if (currentScroll > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, currentScroll - currentScroll / 10);
    buttonUp.style.transform = "scale(0)";
  }
}
///
buttonUp = document.getElementById("button-up");

window.onscroll = function () {
  var scroll = document.documentElement.scrollTop;
  if (scroll > 500) {
    buttonUp.style.transform = "scale(1)";
  } else if (scroll < 500) {
    buttonUp.style.transform = "scale(0)";
  }
};

//MODAL
const toggleModal = () => {
  const { classList } = document.body;
  if (classList.contains("open")) {
    classList.remove("open");
    classList.add("closed");
  } else {
    classList.remove("closed");
    classList.add("open");
  }
};

//CARRUSEL
let counter = 0;

const size = carouselImages[0].clientWidth;

nextSlide.addEventListener("click", () => {
  if (counter >= carouselImages.length - 1) return;
  //Add 1 to the counter
  counter++;
  //Move carousel
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  //Current Slide
  currentSlide.textContent = counter + 1;
});

prevSlide.addEventListener("click", () => {
  if (counter <= 0) return;
  counter--;
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
  currentSlide.textContent = counter + 1;
});

allSlides.textContent = carouselImages.length;

//Pagination
let totalPages = 10;
function element(totalPages, page) {
  let liTag = "";
  let activeLi;
  let beforePages = page - 1;
  let afterPages = page + 1;
  if (page > 1) {
    liTag += ` <li class="btn prev" onclick="element(totalPages, ${
      page - 1
    })"><span><i class='bx bx-chevron-left'></i> Prev</span></li>`;
  }
  if (page > 2) {
    liTag += `<li class="numb" onclick="element(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }

  if (page == totalPages) {
    beforePages = beforePages - 2;
  } else if (page == totalPages - 1) {
    beforePages = beforePages - 1;
  }

  if (page == 1) {
    afterPages = afterPages + 2;
  } else if (page == 2) {
    afterPages = afterPages + 1;
  }

  for (let pageLength = beforePages; pageLength <= afterPages; pageLength++) {
    if (pageLength > totalPages) {
      continue;
    }
    if (pageLength == 0) {
      pageLength = pageLength + 1;
    }
    if (page === pageLength) {
      activeLi = "active";
    } else {
      activeLi = "";
    }
    liTag += `<li class="numb ${activeLi}" onclick="element(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
  }

  if (page < totalPages - 1) {
    if (page < totalPages - 2) {
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="numb" onclick="element(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }

  if (page < totalPages) {
    liTag += `<li class="btn next" onclick="element(totalPages, ${
      page + 1
    })"><span>Next <i class='bx bx-chevron-right'></i></span></li>`;
  }
  ulTag.innerHTML = liTag;
}

element(totalPages, 1);

//Alertas

buttonAlert.addEventListener("click", () => {
  toast.classList.add("active");
  progressAlert.classList.add("active");

  setTimeout(() => {
    toast.classList.remove("active");
  }, 5000);
  setTimeout(() => {
    progressAlert.classList.remove("active");
  }, 5300);
});

closeIcon.addEventListener("click", () => {
  toast.classList.remove("active");

  setTimeout(() => {
    progressAlert.classList.remove("active");
  }, 300);
});
