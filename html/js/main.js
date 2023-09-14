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
      setTimeout(doInitMap, 0);
    }
    doRemoveMapOverlayByClick();
    doInitMapStoresSelect();
    doAddMapStoresListener();
    doHideMapDescription();
    doToggleFavoritesIcons();

    // animation by scroll
    initParallaxPromotionsSection();
    initAnimateTextPromotionsSection();

    // slider in promotions section
    initPromotionsSectionSlider();

    // slider in popularGoods section
    initAllGoodsSectionsSliders();
  }

  // catalog page
  const catalog_page = document.querySelector(".catalog-page");

  if (catalog_page) {
    doToggleFavoritesIcons();
    doSortMenuLogic();
    doFiltersMenuLogic();
    handleAllInputRange();
  }

  // catalog brand page
  const catalog_brand_page = document.querySelector(".catalog-brand-page");

  if (catalog_brand_page) {
    doToggleFavoritesIcons();
    doSortMenuLogic();
    doFiltersMenuLogic();
    handleAllInputRange();
    doToggleBrandDescription();
  }

  // catalog favorites page
  const catalog_favorites_page = document.querySelector(
    ".catalog-favorites-page"
  );

  if (catalog_favorites_page) {
    doToggleFavoritesIcons();
  }

  // catalog favorites page
  const catalog_search_result_page = document.querySelector(
    ".catalog-search-result-page"
  );

  if (catalog_search_result_page) {
    doToggleFavoritesIcons();
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

async function doInitMap() {
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

// toggle addToFavorites buttons

function doToggleFavoritesIcons() {
  // addToFavorite button

  const goodsCard_addToFavorites_buttons = document.querySelectorAll(
    ".goodsCard__addToFavorites"
  );

  goodsCard_addToFavorites_buttons.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const button = e.target.closest(".goodsCard__item");
      button.classList.toggle("addedToFavorites");
    })
  );
}

// sort menu logic

function doSortMenuLogic() {
  const body = document.body;
  const options_sort_toggle_btn = document.querySelector(
    ".options__sortToggleBtn"
  );
  const options_overlay = document.querySelector(".options__overlay");
  const options_buttons = Array.from(
    document.querySelectorAll(".options__sortList li button")
  );
  const elements = [].concat(options_overlay, ...options_buttons);
  const options_current = document.querySelector(".options__current");

  // init functions
  doOpenSortMenu();

  // show sort menu
  function doOpenSortMenu() {
    options_sort_toggle_btn.addEventListener("click", () => {
      body.classList.add("sort-list-open");
      elements.forEach((el) =>
        el.addEventListener("click", handleHideSortMenu)
      );
      doChangeCurrentSortOption();
    });
  }

  // hide sort menu
  function handleHideSortMenu() {
    body.classList.remove("sort-list-open");
    elements.forEach((el) =>
      el.removeEventListener("click", handleHideSortMenu)
    );
  }

  // change current sort option
  function doChangeCurrentSortOption() {
    options_buttons.forEach((btn) =>
      btn.addEventListener("click", handleSortButtons)
    );
  }

  function handleSortButtons(e) {
    let currentSortType = options_sort_toggle_btn.dataset.sortType;
    const clickedSortButton = e.target.closest(".options__sortList button");
    let newSortType = clickedSortButton.dataset.sortType;

    if (currentSortType !== newSortType) {
      // place to send a request when changing sort type

      options_current.textContent = clickedSortButton.children[0].textContent;
      options_sort_toggle_btn.dataset.sortType = newSortType;
    }
  }
}

// filters menu logic

function doFiltersMenuLogic() {
  const options_nav = document.querySelector(".options__nav");
  const options_filters_toggle_btn = document.querySelector(
    ".options__filtersToggleBtn"
  );
  const filters_buttons = Array.from(
    document.querySelectorAll(".filters__button")
  );
  const filters = document.querySelector(".filters");

  options_filters_toggle_btn.addEventListener("click", () => {
    options_nav.classList.toggle("filters-opened");
    filters.classList.toggle("filters-opened");
  });

  filters_buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      const filter_block = btn.closest(".filters__block");
      const filter_wrapper = filter_block.querySelector(".filters__wrapper");

      // toggle filters_list
      filter_block.classList.toggle("filters-block-opened");

      if (filter_block.classList.contains("filters-block-opened")) {
        filter_wrapper.style.maxHeight = filter_wrapper.scrollHeight + "px";
      } else {
        filter_wrapper.style.maxHeight = null;
      }
    })
  );
}

function handleAllInputRange() {
  // handle all input range in filters

  const filters_range_inputs = document.querySelectorAll(".filters__range");

  filters_range_inputs.forEach((rangeInput) =>
    rangeInput.addEventListener("input", doHandleRangeInputs)
  );

  function doHandleRangeInputs(e) {
    // get current inputs - min and max
    let minInputRange, maxInputRange;
    const isMinInputRange = e.target.classList.contains("filters__inputMin");
    const isMaxInputRange = e.target.classList.contains("filters__inputMax");
    if (isMinInputRange) {
      minInputRange = e.target;
      maxInputRange = minInputRange.nextElementSibling;
    } else if (isMaxInputRange) {
      maxInputRange = e.target;
      minInputRange = maxInputRange.previousElementSibling;
    }

    // get elements
    const filter_wrapper = minInputRange.closest(".filters__wrapper");
    const track = filter_wrapper.querySelector(".filters__track");
    const min = filter_wrapper.querySelector(".filters__valueMin");
    const max = filter_wrapper.querySelector(".filters__valueMax");

    // convert values to number
    let minValue = parseInt(minInputRange.value);
    let maxValue = parseInt(maxInputRange.value);

    // minDifference is the minimum value by which min and max can converge
    let minDifference;

    if (parseInt(maxInputRange.max) - parseInt(minInputRange.min) <= 10) {
      minDifference = 1;
    } else if (
      parseInt(maxInputRange.max) - parseInt(minInputRange.min) <=
      100
    ) {
      minDifference = 10;
    } else {
      minDifference = 50;
    }

    // if the input cannot be moved further
    if (maxValue - minValue < minDifference) {
      if (isMinInputRange) {
        minInputRange.value = maxValue - minDifference;
      } else {
        maxInputRange.value = minValue + minDifference;
      }
    } else {
      // otherwise calculates the value of the  two curret inputs and displays their values
      min.value = `${minValue}`;
      max.value = `${maxValue}`;
      let left =
        ((minValue - minInputRange.min) * 100) /
          (minInputRange.max - minInputRange.min) +
        "%";
      let right =
        ((maxInputRange.max - maxValue) * 100) /
          (maxInputRange.max - maxInputRange.min) +
        "%";
      track.style.left = left;
      track.style.right = right;
    }
  }

  // handle all min and max value
  const filters_value_min = Array.from(
    document.querySelectorAll(".filters__valueMin")
  );

  const filters_value_max = Array.from(
    document.querySelectorAll(".filters__valueMax")
  );

  filters_value_min.forEach((input) =>
    input.addEventListener("change", handleInputMinMax)
  );

  filters_value_max.forEach((input) =>
    input.addEventListener("change", handleInputMinMax)
  );

  filters_value_min.forEach((input) =>
    input.addEventListener("blur", handleInputMinMax)
  );

  filters_value_max.forEach((input) =>
    input.addEventListener("blur", handleInputMinMax)
  );

  function handleInputMinMax(e) {
    const input = e.target;
    const filters_wrapper = input.closest(".filters__wrapper");
    const input_min_range = filters_wrapper.querySelector(".filters__inputMin");
    const input_max_range = filters_wrapper.querySelector(".filters__inputMax");
    let input_range = null;

    const isMinFiltersInput = input.classList.contains("filters__valueMin");
    const isMaxFiltersInput = input.classList.contains("filters__valueMax");

    const track = filters_wrapper.querySelector(".filters__track");

    // minDifference is the minimum value by which min and max can converge
    let minDifference;

    if (input_max_range.max - input_min_range.min <= 10) {
      minDifference = 1;
    } else if (input_max_range.max - input_min_range.min <= 100) {
      minDifference = 10;
    } else {
      minDifference = 50;
    }

    let value = parseInt(input.value);

    // for min
    if (isMinFiltersInput) {
      if (value < input.min || Number.isNaN(value)) {
        // input.value = parseInt(input.min);
        input.value = "";
        input_min_range.value = parseInt(input.min);
        track.style.left = 0;
      } else if (value > input_max_range.value - minDifference) {
        input.value = parseInt(input_max_range.value) - minDifference;
        input_min_range.value = parseInt(input_max_range.value) - minDifference;
        doSetTrackLeft();
      } else {
        input.value = value;
        input_min_range.value = value;
        doSetTrackLeft();
      }
    }

    function doSetTrackLeft() {
      let left =
        ((value - input_min_range.min) * 100) /
          (input_min_range.max - input_min_range.min) +
        "%";
      track.style.left = left;
    }

    // for max
    if (isMaxFiltersInput) {
      if (value > parseInt(input.max) || Number.isNaN(value)) {
        input.value = "";
        input_max_range.value = parseInt(input.max);
        track.style.right = "0";
      } else if (value < parseInt(input_min_range.value) + minDifference) {
        input.value = parseInt(input_min_range.value) + minDifference;
        input_max_range.value = parseInt(input_min_range.value) + minDifference;
        doSetTrackRight();
      } else {
        input.value = value;
        input_max_range.value = value;
        doSetTrackRight();
      }
    }

    function doSetTrackRight() {
      let right =
        ((input_max_range.max - value) * 100) /
          (input_max_range.max - input_max_range.min) +
        "%";
      track.style.right = right;
    }
  }
}

// accordion for brandDescription on catalog-brand-page
function doToggleBrandDescription() {
  const brand_description = document.querySelector(".brandDescription");
  const brand_description_title = document.querySelector(
    ".brandDescription__title"
  );
  const brand_description_info = document.querySelector(
    ".brandDescription__info"
  );

  brand_description_title.addEventListener("click", () => {
    brand_description.classList.toggle("brand-description-opened");

    if (brand_description.classList.contains("brand-description-opened")) {
      brand_description_info.style.maxHeight =
        brand_description_info.scrollHeight + "px";
    } else {
      brand_description_info.style.maxHeight = null;
    }
  });
}

// parallax for 'discountedProducts' on main page

function initParallaxPromotionsSection() {
  const discounted_products = document.querySelector(".discountedProducts");
  const goods_card_items =
    discounted_products.querySelectorAll(".goodsCard__item");

  let mm = gsap.matchMedia(),
    breakPoint = 992;

  mm.add(
    {
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
      isMobile: `(max-width: ${
        breakPoint - 1
      }px) and (prefers-reduced-motion: no-preference)`,
    },
    (context) => {
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let { isDesktop, isMobile } = context.conditions;

      const TL = gsap.timeline();
      if (isDesktop) {
        TL.from(
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
        ).from(
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

      return () => {
        // optionally return a cleanup function that will be called when the media query no longer matches
      };
    }
  );
}

// animate text for 'discountedProducts' on main page

function initAnimateTextPromotionsSection() {
  let mm = gsap.matchMedia(),
    breakPoint = 768;

  mm.add(
    {
      // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
      isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
      isMobile: `(max-width: ${
        breakPoint - 1
      }px) and (prefers-reduced-motion: no-preference)`,
    },
    (context) => {
      // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
      let { isDesktop, isMobile } = context.conditions;

      const TL = gsap.timeline();
      if (isDesktop) {
        TL.from(".textLline__first", {
          x: "200px",
          scrollTrigger: {
            trigger: ".discountedProducts",
            // markers: true,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
          },
        }).from(
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
        );
      }
    }
  );
}

// ===== SLIDERS =====

// init promotionsSection slider

function initPromotionsSectionSlider() {
  let counter = 0;
  const section = document.querySelector(".promotionsSection");
  const sectionItemsClassName = ".promotionsSection__item";
  const sliders_wrappers = Array.from(
    document.querySelectorAll(".promotionsSection__sliderWrapper")
  );
  const prev_btn = document.querySelector(
    ".promotionsSection__nav .intro__prev"
  );
  const next_btn = document.querySelector(
    ".promotionsSection__nav .intro__next"
  );

  const params = {
    counter,
    section,
    sectionItemsClassName,
    sliders_wrappers,
    prev_btn,
    next_btn,
  };

  doCheckSlidesAmount(params);
}

// init popularGoods slider

function initAllGoodsSectionsSliders() {
  const goods_sections = Array.from(document.querySelectorAll(".goodsSection"));
  // const section = document.querySelector(".popularGoods");
  const discounted_products_section = document.querySelector(
    ".discountedProducts"
  );

  sections = [].concat(goods_sections, [discounted_products_section]);

  sections.forEach((section) => {
    let counter = 0;
    const sectionItemsClassName = ".goodsCard__item";
    const sliders_wrappers = Array.from(
      section.querySelectorAll(".goodsCard__sliderWrapper")
    );
    const prev_btn = section.querySelector(".intro__prev");
    const next_btn = section.querySelector(".intro__next");

    const params = {
      counter,
      section,
      sectionItemsClassName,
      sliders_wrappers,
      prev_btn,
      next_btn,
    };

    doCheckSlidesAmount(params);
  });
}

// === SLIDER LOGIC ===

function doCheckSlidesAmount(params) {
  let {
    counter,
    section,
    sectionItemsClassName,
    sliders_wrappers,
    prev_btn,
    next_btn,
  } = params;

  let slidesAmount = 0;
  let slidesAmountsArray = [];
  sliders_wrappers.forEach((wrapper) => {
    slidesAmountsArray.push(wrapper.children.length);
  });
  let minSlidesAmount = Math.min(...slidesAmountsArray);

  if (minSlidesAmount > 1) {
    slidesAmount = minSlidesAmount;
    const params = {
      counter,
      section,
      sliders_wrappers,
      prev_btn,
      next_btn,
      slidesAmount,
      sectionItemsClassName,
    };

    doInitGeneralSliderLogic(params);
  } else {
    section.classList.add("slider-start", "slider-finish");
  }
}

function doInitGeneralSliderLogic(params) {
  let {
    counter,
    section,
    sliders_wrappers,
    prev_btn,
    next_btn,
    slidesAmount,
    sectionItemsClassName,
  } = params;

  if (window.innerWidth >= 768) {
    // set inline style to correct sliders work
    sliders_wrappers.forEach((wrapper) => doSetInitSettings(wrapper));
    // init slider
    doAddSliderListeners();
  }

  const mq767 = window.matchMedia("(max-width: 767px)");

  mq767.addEventListener("change", (e) => {
    // became less than 767px
    if (e.matches) {
      // reset all slides offsets
      counter = 0;
      section.classList.add("slider-start");
      section.classList.remove("slider-finish");
      sliders_wrappers.forEach((wrapper) => doSetInitSettings(wrapper));
      // remove all listeners
      doRemoveSliderListeners();
    }
    // became larger than 767px
    else {
      // remove all items, that have been added by ".showmore__btn" button
      const section_items = Array.from(
        section.querySelectorAll(sectionItemsClassName)
      );
      doRemoveAllAddedElements(section_items, 4);

      // init slider
      doAddSliderListeners();
    }
  });

  // add listeners for next and prev buttons
  function doAddSliderListeners() {
    next_btn.addEventListener("click", handleSliderButtonClick);
    prev_btn.addEventListener("click", handleSliderButtonClick);
  }

  // remove listeners for next and prev buttons
  function doRemoveSliderListeners() {
    next_btn.removeEventListener("click", handleSliderButtonClick);
    prev_btn.removeEventListener("click", handleSliderButtonClick);
  }

  // handle prev and next button
  function handleSliderButtonClick(e) {
    // if next button clicked
    if (e.currentTarget.classList.contains("intro__next")) {
      const typeOfButton = "next";
      sliders_wrappers.forEach((wrapper) =>
        handleSliderNavButtons(
          wrapper,
          counter,
          prev_btn,
          next_btn,
          typeOfButton
        )
      );
      counter += 1;
      doCheckCounter(counter, section, slidesAmount);
    } else if (e.currentTarget.classList.contains("intro__prev")) {
      const typeOfButton = "prev";
      sliders_wrappers.forEach((wrapper) =>
        handleSliderNavButtons(
          wrapper,
          counter,
          prev_btn,
          next_btn,
          typeOfButton
        )
      );
      counter -= 1;
      doCheckCounter(counter, section, slidesAmount);
    }
  }
}

// remove all added elements by resize from '<=767px' to '>767px'
function doRemoveAllAddedElements(items, index) {
  // wrapper is container with slides which need to remove
  // index is the index of the element from which the deletion starts
  items.forEach((item, idx) => {
    if (idx >= index) {
      item.remove();
    }
  });
}

function doSetInitSettings(wrapper) {
  const slides = Array.from(wrapper.children);
  slides.forEach((slide, idx) => {
    if (idx === 0) {
      slide.style.left = "0%";
      Array.from(slide.children).forEach(
        (item) => (item.style.transform = "translate(0, 0)")
      );
    } else {
      slide.style.left = "100%";
      Array.from(slide.children).forEach(
        (item) => (item.style.transform = "translate(-90%, 0)")
      );
    }
  });
}

// show / hide slider nav buttons depend what slide is current

function doCheckCounter(counter, section, slidesAmount) {
  if (counter === 0) {
    section.classList.add("slider-start");
    section.classList.remove("slider-finish");
  } else if (counter > 0 && slidesAmount === 2) {
    section.classList.add("slider-finish");
    section.classList.remove("slider-start");
  } else if (counter > 0 && counter < slidesAmount - 1) {
    section.classList.remove("slider-start", "slider-finish");
  } else {
    section.classList.remove("slider-start");
    section.classList.add("slider-finish");
  }
}

// disable / enable nav buttons

function doAddClassToButtons(...buttons) {
  buttons.forEach((btn) => btn.classList.add("disabled"));
}

function doRemoveClassToButtons(...buttons) {
  buttons.forEach((btn) => btn.classList.remove("disabled"));
}

// slider animation
function handleSliderNavButtons(
  wrapper,
  counter,
  prev_btn,
  next_btn,
  typeOfButton
) {
  const slides = wrapper.children;
  const currentSlide = slides[counter];
  const currentSlideInner = currentSlide.children;
  const currentSlideName = currentSlideInner[1];

  let newSlide = null;
  let firstCurrentSlideOffsset,
    lastCurrentSlideOffset,
    lastCurrentSlideInnerOffset;

  if (typeOfButton === "next") {
    newSlide = slides[counter + 1];
    firstCurrentSlideOffsset = "-5%";
    lastCurrentSlideOffset = "-100%";
    lastCurrentSlideInnerOffset = "90%";
  } else {
    newSlide = slides[counter - 1];
    firstCurrentSlideOffsset = "5%";
    lastCurrentSlideOffset = "100%";
    lastCurrentSlideInnerOffset = "-90%";
  }
  const newSlideInner = newSlide.children;

  if (currentSlideName) {
    const params = {
      prev_btn,
      next_btn,
      currentSlideName,
      currentSlide,
      currentSlideInner,
      newSlide,
      newSlideInner,
      firstCurrentSlideOffsset,
      lastCurrentSlideOffset,
      lastCurrentSlideInnerOffset,
    };
    gsapAnimationForPromotionsSlider(params);
  } else {
    const params = {
      prev_btn,
      next_btn,
      currentSlide,
      currentSlideInner,
      newSlide,
      newSlideInner,
      firstCurrentSlideOffsset,
      lastCurrentSlideOffset,
      lastCurrentSlideInnerOffset,
    };
    gsapAnimationForGoodsSectionSlider(params);
  }
}

function gsapAnimationForPromotionsSlider(params) {
  const {
    prev_btn,
    next_btn,
    currentSlideName,
    currentSlide,
    currentSlideInner,
    newSlide,
    newSlideInner,
    firstCurrentSlideOffsset,
    lastCurrentSlideOffset,
    lastCurrentSlideInnerOffset,
  } = params;

  const TL = gsap.timeline();
  return TL.call(doAddClassToButtons, [prev_btn, next_btn], 0)
    .set(currentSlideName, {
      opacity: 0,
    })
    .set(currentSlide, { zIndex: 1 })
    .set(newSlide, { zIndex: 2 })
    .to(currentSlide, {
      left: firstCurrentSlideOffsset,
      duration: 0.4,
    })
    .to(
      newSlide,
      {
        left: "0%",
        duration: 0.4,
      },
      0
    )
    .to(
      newSlideInner,
      {
        x: "0%",
        duration: 0.4,
      },
      0
    )
    .set(currentSlide, {
      left: lastCurrentSlideOffset,
    })
    .set(currentSlideName, {
      opacity: 1,
    })
    .set(currentSlideInner, {
      x: lastCurrentSlideInnerOffset,
    })
    .call(doRemoveClassToButtons, [prev_btn, next_btn]);
}

function gsapAnimationForGoodsSectionSlider(params) {
  const {
    prev_btn,
    next_btn,
    currentSlide,
    currentSlideInner,
    newSlide,
    newSlideInner,
    firstCurrentSlideOffsset,
    lastCurrentSlideOffset,
    lastCurrentSlideInnerOffset,
  } = params;

  const TL = gsap.timeline();
  return TL.call(doAddClassToButtons, [prev_btn, next_btn], 0)
    .set(currentSlide, { zIndex: 1 })
    .set(newSlide, { zIndex: 2 })
    .to(currentSlide, {
      left: firstCurrentSlideOffsset,
      duration: 0.4,
    })
    .to(
      newSlide,
      {
        left: "0%",
        duration: 0.4,
      },
      0
    )
    .to(
      newSlideInner,
      {
        x: "0%",
        duration: 0.4,
      },
      0
    )
    .set(currentSlide, {
      left: lastCurrentSlideOffset,
    })
    .set(currentSlideInner, {
      x: lastCurrentSlideInnerOffset,
    })
    .call(doRemoveClassToButtons, [prev_btn, next_btn]);
}

// === END OF SLIDER LOGIC ===
