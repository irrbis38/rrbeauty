document.addEventListener("DOMContentLoaded", function (event) {
  const body = document.body;
  const header_container = document.querySelector(".header__container");
  const header_menu = document.querySelector(".header__menu");
  const header_btn = document.querySelector(".header__btn");

  header_btn.addEventListener("click", () => {
    const isHeaderContainerActive =
      header_container.classList.contains("active");
    if (isHeaderContainerActive) {
      header_container.classList.remove("active");
      header_menu.style.maxHeight = 0;
    } else {
      header_container.classList.add("active");
      header_menu.style.maxHeight = header_menu.scrollHeight + "px";
      header_menu.style.opacity = 1;
    }
  });

  const mq1300 = window.matchMedia("(max-width: 1300px)");

  mq1300.addEventListener("change", handleMQ);

  function handleMQ(e) {
    if (!e.matches) {
      header_container.classList.remove("active");
      header_menu.style.maxHeight = header_menu.scrollHeight + "px";
      header_menu.style.opacity = 1;
    } else {
      header_menu.style.maxHeight = 0;
      header_menu.style.opacity = 0;
    }
  }
});

// Your functions here
