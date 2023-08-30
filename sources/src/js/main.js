document.addEventListener("DOMContentLoaded", function (event) {
  const body = document.body;
  const header_container = document.querySelector(".header__container");
  const header_menu = document.querySelector(".header__menu");
  const header_btn = document.querySelector(".header__btn");

  header_btn.addEventListener("click", () => {
    requestAnimationFrame(doHeaderToggle);
  });

  function doHeaderToggle() {
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
  }

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

  // panel logic

  const panel_search = document.getElementById("panel-search");
  const clear_panel_search_btn = document.getElementById("panel-search-clear");

  panel_search.addEventListener("input", (e) => {
    const isInputNotEmpty = Boolean(e.target.value);
    if (!isInputNotEmpty) {
      panel_search.classList.remove("active");
      clear_panel_search_btn.classList.remove("visible");
    } else {
      panel_search.classList.add("active");
      clear_panel_search_btn.classList.add("visible");
    }
  });

  clear_panel_search_btn.addEventListener("click", () => {
    panel_search.value = "";
    panel_search.classList.remove("active");
    panel_search.focus();
    clear_panel_search_btn.classList.remove("visible");
  });

  // menu logic

  const show_menu_button = document.getElementById("show-menu");
  const menu_overlay = document.getElementById("menu-overlay");
  const menu = document.getElementById("menu");
  const show_categories_button = document.querySelector(
    ".panel__showCategories"
  );

  show_menu_button.addEventListener("click", () => {
    requestAnimationFrame(
      [menu_overlay, menu, show_categories_button].forEach((el) =>
        el.classList.toggle("active")
      )
    );
  });

  menu_overlay.addEventListener("click", () => {
    requestAnimationFrame(
      [menu_overlay, menu, show_categories_button].forEach((el) =>
        el.classList.remove("active")
      )
    );
  });

  // ====== end of DOMContentLoaded listener ========
});

// ========== functions =============

function doCategoriesMenuToggle(btn) {
  btn.classList.toggle("active");
}
