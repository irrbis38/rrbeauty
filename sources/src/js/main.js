document.addEventListener("DOMContentLoaded", function (event) {
  doHeaderInit();
  doPanelInit();

  // main page

  const intro_section = document.querySelector(".intro");
  if (intro_section) {
    doIntroSectionInit();
  }

  new Splide(".brandsSection__autoscroll", {
    type: "loop",
    perPage: 2,
    arrows: false,
    pagination: false,
    autoScroll: {
      speed: 1,
    },
  }).mount(window.splide.Extensions);

  // ====== END OF DOMContentLoaded LISTENERS ========
});

// ========== FUNCTIONS =============

//=== header logic

function doHeaderInit() {
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
}

//=== panel and menu logic

function doPanelInit() {
  // panel logic

  const panel_input = document.querySelectorAll(".panel__input");
  const clear_search_btn = document.querySelectorAll(".panel__clear");

  panel_input.forEach((el) =>
    el.addEventListener("input", (e) =>
      requestAnimationFrame(() => doSearchInputHandle(e))
    )
  );

  function doSearchInputHandle(e) {
    const isInputNotEmpty = Boolean(e.target.value);
    const current_panel_input = e.target;
    const current_clear_btn = current_panel_input.nextElementSibling;
    if (!isInputNotEmpty) {
      current_panel_input.classList.remove("active");
      current_clear_btn.classList.remove("visible");
    } else {
      current_panel_input.classList.add("active");
      current_clear_btn.classList.add("visible");
    }
  }

  function doResetSearchInput(input) {
    const button = input.nextElementSibling;
    input.value = "";
    input.classList.remove("active");
    button.classList.remove("visible");
  }

  clear_search_btn.forEach((el) =>
    el.addEventListener("click", (e) =>
      requestAnimationFrame(() => doClearSearchInput(e))
    )
  );

  function doClearSearchInput(e) {
    const current_clear_btn = e.target.closest(".panel__clear");
    const current_panel_input = current_clear_btn.previousElementSibling;

    current_panel_input.value = "";
    current_panel_input.classList.remove("active");
    current_panel_input.focus();
    current_clear_btn.classList.remove("visible");
  }

  // menu logic

  const show_menu_button = document.getElementById("show-menu");
  const menu_overlay = document.getElementById("menu-overlay");
  const menu = document.getElementById("menu");
  const show_categories_button = document.querySelector(
    ".panel__showCategories"
  );

  show_menu_button.addEventListener("click", () => {
    requestAnimationFrame(() => {
      [menu_overlay, menu, show_categories_button].forEach((el) =>
        el.classList.toggle("active")
      );
      panel_input.forEach((el) => doResetSearchInput(el));
    });
  });

  menu_overlay.addEventListener("click", () => {
    requestAnimationFrame(() => {
      [menu_overlay, menu, show_categories_button].forEach((el) =>
        el.classList.remove("active")
      );
      panel_input.forEach((el) => doResetSearchInput(el));
    });
  });

  function doCategoriesMenuToggle(btn) {
    btn.classList.toggle("active");
  }
}

//=== intro section logic

function doIntroSectionInit() {
  // separate initialization of each individual slider for correct operation of sliders
  const intro_slider_left = new Swiper("#intro-slider-left", {
    // Optional parameters
    loop: true,
    grab: false,
    allowTouchMove: false,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    hashNavigation: {
      watchState: true,
    },

    // pagination
    pagination: {
      el: ".intro__pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".intro__next",
      prevEl: ".intro__prev",
    },
  });

  const intro_slider_center = new Swiper("#intro-slider-center", {
    // Optional parameters
    loop: true,
    grab: false,
    allowTouchMove: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    hashNavigation: {
      watchState: true,
    },

    // pagination
    pagination: {
      el: ".intro__pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".intro__next",
      prevEl: ".intro__prev",
    },

    breakpoints: {
      1301: {
        allowTouchMove: false,
      },
    },
  });

  const intro_slider_right = new Swiper("#intro-slider-right", {
    // Optional parameters
    loop: true,
    grab: false,
    allowTouchMove: false,

    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    hashNavigation: {
      watchState: true,
    },

    // pagination
    pagination: {
      el: ".intro__pagination",
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: ".intro__next",
      prevEl: ".intro__prev",
    },
  });

  const intro_pagination = Array.from(
    document.querySelectorAll(".intro__pagination span")
  );
  // add listeners to central slider
  intro_slider_center.on("slideChange", doUpdateActiveIntroSliderBullet);

  function doUpdateActiveIntroSliderBullet() {
    // get index of current slide
    const realIndex = intro_slider_center.realIndex;

    // reset current active bullet
    intro_pagination.forEach((bullet) => {
      bullet.classList.remove("swiper-pagination-bullet-active");
    });

    // set new active bullet
    intro_pagination[realIndex].classList.add(
      "swiper-pagination-bullet-active"
    );
  }

  // create mediaQuery
  const mq1300 = window.matchMedia("(max-width: 1300px)");

  // update left and right sliders after risize from '1300px<=' size to '>1300px' size
  mq1300.addEventListener("change", (e) => {
    if (!e.matches) {
      const realIndex = intro_slider_center.realIndex;
      intro_slider_center.slideToLoop(realIndex, 0);
      intro_slider_right.slideToLoop(realIndex, 0);
      intro_slider_left.slideToLoop(realIndex, 0);
    }
  });
}
