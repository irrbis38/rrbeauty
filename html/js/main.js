document.addEventListener("DOMContentLoaded", function (event) {
  doHeaderInit();
  doPanelInit();
  doToggleFooterAccordion();

  // init GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // main page

  const intro_section = document.querySelector(".intro");
  if (intro_section) {
    doIntroSectionInit();
    if (typeof ymaps !== "undefined" && ymaps !== null) {
      doInitMap();
    }
    doRemoveMapOverlayByClick();
    doInitMapStoresSelect();
    doAddMapStoresListener();
    doHideMapDescription();
    doParallaxPromotionsSection();
  }

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
    // hashNavigation: {
    //   watchState: true,
    // },

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
    // hashNavigation: {
    //   watchState: true,
    // },

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
    // hashNavigation: {
    //   watchState: true,
    // },

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

  // addToFavorite button

  const goodsCard_addToFavorites_buttons = document.querySelectorAll(
    ".goodsCard__addToFavorites"
  );

  goodsCard_addToFavorites_buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const button = e.target.closest(".goodsCard__addToFavorites");
      button.classList.toggle("addedToFavorites");
    })
  );

  // init autoscroll blocks

  const brandsSection_autoscroll = document.querySelector(
    ".brandsSection__autoscroll"
  );
  const promotionsSection_autoscroll = document.querySelector(
    ".promotionsSection__autoscroll"
  );
  const map_autoscroll = document.querySelector(".map__autoscroll");

  [brandsSection_autoscroll].forEach((slider) => {
    new Splide(slider, {
      type: "loop",
      arrows: false,
      pagination: false,
      perPage: 3,
      gap: "800px",
      breakpoints: {
        1700: {
          gap: "900px",
        },
        1600: {
          gap: "400px",
        },
        1400: {
          gap: "600px",
        },
        992: {
          gap: "200px",
          perPage: 2,
        },
        767: {
          perPage: 3,
          gap: "100px",
        },
        650: {
          gap: "150px",
        },
        575: {
          perPage: 2,
          gap: "100px",
        },
        400: {
          gap: "170px",
        },
      },

      autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
    }).mount(window.splide.Extensions);
  });

  [promotionsSection_autoscroll].forEach((slider) => {
    new Splide(slider, {
      type: "loop",
      arrows: false,
      pagination: false,
      perPage: 3,
      gap: "400px",
      breakpoints: {
        1700: {
          gap: "600px",
        },
        1600: {
          gap: "200px",
        },
        1300: {
          gap: "300px",
        },
        1150: {
          gap: "500px",
        },
        992: {
          gap: "350px",
        },
        767: {
          gap: "60px",
        },
        575: {
          // perPage: 2,
          gap: "230px",
        },
      },

      autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
    }).mount(window.splide.Extensions);
  });

  [map_autoscroll].forEach((slider) => {
    new Splide(slider, {
      type: "loop",
      arrows: false,
      pagination: false,
      perPage: 2,
      gap: "1700px",
      breakpoints: {
        1600: {
          gap: "1000px",
        },
        1400: {
          gap: "1100px",
        },
        1300: {
          gap: "1200px",
        },
        1100: {
          // perPage: 1,
          gap: "1250px",
        },
        992: {
          // perPage: 1,
          gap: "950px",
        },
        767: {
          gap: "500px",
        },
      },
      autoScroll: {
        speed: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
      },
    }).mount(window.splide.Extensions);
  });
}

// init map on main page

function doInitMap() {
  const mark_link = "images/map-current-mark.svg";
  function init() {
    let center = [51.158562572612595, 71.43921449999996];
    if (ymaps) {
      let map = new ymaps.Map("map-section-wrapper", {
        center: center,
        zoom: 17,
      });

      let mark = new ymaps.Placemark(
        center,
        {},
        {
          iconLayout: "default#image",
          iconImageHref: mark_link,
          iconImageSize: [40, 40],
          iconImageOffset: [-15, -5],
        }
      );

      map.controls.remove("geolocationControl"); // удаляем геолокацию
      map.controls.remove("searchControl"); // удаляем поиск
      map.controls.remove("trafficControl"); // удаляем контроль трафика
      map.controls.remove("typeSelector"); // удаляем тип
      map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
      map.controls.remove("zoomControl"); // удаляем контрол зуммирования
      map.controls.remove("rulerControl"); // удаляем контрол правил
      //map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

      map.geoObjects.add(mark);
    }
  }

  ymaps.ready(init);
}

function doRemoveMapOverlayByClick() {
  const mapSection_overlay = document.querySelector(".mapSection__overlay");

  mapSection_overlay.addEventListener("click", () => {
    mapSection_overlay.classList.add("hidden");
  });
}

// init map__stores select

function doInitMapStoresSelect() {
  const select = document.querySelector(".map__stores");
  const choices = new Choices(select, {
    silent: false,
    searchEnabled: false,
  });
}

// add listeners to .map__stores select element

function doAddMapStoresListener() {
  const select = document.querySelector(".map__stores");
  const map_description = document.querySelector(".map__description");

  select.addEventListener("change", (e) => {
    map_description.classList.remove("hidden");
  });
}

// hide map__description

function doHideMapDescription() {
  const map_description = document.querySelector(".map__description");
  const map_close_btn = document.querySelector(".map__close");

  map_close_btn.addEventListener("click", () => {
    map_description.classList.add("hidden");
  });
}

// footer accordion for <= 767px

function doToggleFooterAccordion() {
  // check on load
  if (window.innerWidth <= 575) {
    doAddListenersToFooterAccordions();
  }

  // check by resize
  const mq575 = window.matchMedia("(max-width: 575px)");

  mq575.addEventListener("change", (e) => {
    // console.log("asdfasg;qweoqwhe");
    if (e.matches) {
      doAddListenersToFooterAccordions();
    } else {
      doRemoveListenersToFooterAccordions();
    }
  });
}

// footer accordion handler

function handleFooterAccordions(e) {
  const column = e.target.closest(".footer__column");
  const wrapper = column.children[1];

  column.classList.toggle("active");
  const isColumnActive = column.classList.contains("active");

  if (isColumnActive) {
    wrapper.style.maxHeight = wrapper.scrollHeight + "px";
  } else {
    wrapper.style.maxHeight = null;
  }
}

// add listeners to footer accordions

function doAddListenersToFooterAccordions() {
  const footer_columns = document.querySelectorAll(".footer__column");

  footer_columns.forEach((column) => {
    const title = column.children[0];

    title.addEventListener("click", handleFooterAccordions);
  });
}

// remove listeners to footer accordions

function doRemoveListenersToFooterAccordions() {
  const footer_columns = document.querySelectorAll(".footer__column");

  footer_columns.forEach((column) => {
    const title = column.children[0];
    const wrapper = column.children[1];

    title.removeEventListener("click", handleFooterAccordions);

    column.classList.remove("active");
    wrapper.style.maxHeight = null;
  });
}

// parallax for 'discountedProducts' on main page

function doParallaxPromotionsSection() {
  const discounted_products = document.querySelector(".discountedProducts");
  const goods_card_items =
    discounted_products.querySelectorAll(".goodsCard__item");
  // console.log(goods_card_items);
  const TL = gsap.timeline();

  TL.from(".textLline__first", {
    x: "200px",
    scrollTrigger: {
      trigger: ".discountedProducts",
      // markers: true,
      start: "top bottom",
      end: "bottom bottom",
      scrub: true,
    },
  })
    .from(
      ".textLline__second",
      {
        x: "-200px",
        scrollTrigger: {
          trigger: ".discountedProducts",
          // markers: true,
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
        },
      },
      0
    )
    .from(
      goods_card_items[0],
      {
        y: "-232px",
        ease: Power2.easeOut,
        scrollTrigger: {
          trigger: ".goodsCard__wrapper",
          // markers: true,
          start: "+=200px bottom",
          end: "bottom+=400px bottom",
          scrub: true,
        },
      },
      0
    )
    .from(
      goods_card_items[2],
      {
        y: "-98px",
        ease: Power2.easeOut,
        scrollTrigger: {
          trigger: ".goodsCard__wrapper",
          // markers: true,
          start: "+=200px bottom",
          end: "bottom+=200px bottom",
          scrub: true,
        },
      },
      0
    );
}
