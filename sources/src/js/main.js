document.addEventListener("DOMContentLoaded", function (event) {
  doHeaderInit();
  doPanelInit();
  doToggleFooterAccordion();
  doShowAuth();
  doShowRegistration();
  doHideAuth();
  doInitMaskInput();
  checkAuthForm();

  // init GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // main page

  const index_page = document.querySelector(".index");
  if (index_page) {
    doStartFirstScreenAnimation();

    doAnimationByScrollMainPage();
    doFooterAnimationByScroll();
    // doRemoveMapOverlayByClick();
    doInitMapStoresSelect();
    // doAddMapStoresListener();
    doHideMapDescription();
    doToggleFavoritesIcons();

    // animation by scroll
    initParallaxPromotionsSection();
    initAnimateTextPromotionsSection();

    // slider in promotions section
    initPromotionsSectionSlider();

    // sliders in goodsCard sections
    initAllGoodsSectionsSliders();

    doCreateMapScript(doInitMap);
    // if (typeof ymaps !== "undefined" && ymaps !== null) {
    //   setTimeout(doInitMap, 0);
    // }
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

  // catalog-item page

  const catalog_item_page = document.querySelector(".catalog-item");

  if (catalog_item_page) {
    doInitCatalogItemSlider();
    doSelectValueButton();
    doToggleDetailsValuesAppearance();
    doCheckSetValueAmount();
    doChangeToggleBtnAmountByResize();
    doToggleAddToFavoritesBtn(".details__add-to-favorites", ".item");
    doToggleInfoTabs();
    doChangeGoodsAmount(".goods-amount", false);
    doToggleReviewsPanel();
    checkNewCommentForm();
    doShowOneclick();
    doHideOneclick();
    checkOneclickForm();
    // doInitMaskInput();
    doSetCursorToEnd();
    initAllGoodsSectionsSliders();
    doToggleFavoritesIcons();
    doResetEmptyInputByBlur();
    doToggleAddToCartButton();
    addListernerToRemoveBtn();
    doInitFileRead();
    doShowFullscreen();
  }

  // cart page
  const cart_page = document.querySelector(".cart-page");

  if (cart_page) {
    doToggleAddToFavoritesBtn(".cart__add-to-favorites", ".cart__regular-row");
    doChangeGoodsAmount(".goods-amount", true);
    doAddListenersToAllAmountInput();
    doRemoveGoodFromCart();
    doClearCart();
    doResetEmptyInputByBlur();
  }

  // brands page
  const brands_page = document.querySelector(".brands-page");

  if (brands_page) {
    doInitBrandsSearch();
  }

  // order-placement page
  const order_placement_page = document.querySelector(".order-placement-page");

  if (order_placement_page) {
    // doInitMaskInput();
    // doRemoveMapOverlayByClick();
    doInitMapStoresSelect();
    // doAddMapStoresListener();
    doChooseStore();
    doHideMapDescription();
    doSwitchOrderStep();

    doCreateMapScript(doInitMap);

    // if (typeof ymaps !== "undefined" && ymaps !== null) {
    //   setTimeout(doInitMap, 0);
    // }
  }

  // cabinet favorites page
  const cabinet_favorites_page = document.querySelector(
    ".cabinet-favorites-page"
  );

  if (cabinet_favorites_page) {
    doToggleFavoritesIcons();
  }

  // cabinet-user-orders page
  const cabinet_user_orders_page = document.querySelector(
    ".cabinet-user-orders-page"
  );

  if (cabinet_user_orders_page) {
    doToggleCabinetNav();
  }

  // cabinet-personal-data page
  const cabinet_personal_data_page = document.querySelector(
    ".cabinet-personal-data-page"
  );

  if (cabinet_personal_data_page) {
    doInitMaskInput();
    checkRequiredFormInputs();
    doChangeInputState();
    doClearInput();
  }

  // cabinet-personal-data page
  const cabinet_orders_item_page = document.querySelector(
    ".cabinet-orders-item-page"
  );

  if (cabinet_orders_item_page) {
    doToggleCabinetAccordion();
  }

  // news-item page
  const news_item_page = document.querySelector(".news-item-page");
  if (news_item_page) {
    doInitContentSlider();
    initAllGoodsSectionsSliders();
  }

  // promotions-item page
  const promotions_item_page = document.querySelector(".promotions-item-page");
  if (promotions_item_page) {
    initAllGoodsSectionsSliders();
    doToggleFavoritesIcons();
  }

  // company page
  const company_page = document.querySelector(".company-page");
  if (company_page) {
    doInitCompanySlider();
    doInitMaskInput();
    checkRequiredFormInputs();
    doShowCertificatesFullscreen();
  }

  // stores page
  const stores_page = document.querySelector(".stores-page");
  if (stores_page) {
    doInitMapStoresSelect();
    doHideMapDescription();
    doCreateMapScript(doInitMap);
  }

  // contacts page
  const contacts_page = document.querySelector(".contacts-page");
  if (contacts_page) {
    doCreateMapScript(doInitContatcsMap);
  }

  // ====== END OF DOMContentLoaded LISTENERS ========
});

// ========== FUNCTIONS =============

// start animation
function doStartFirstScreenAnimation() {
  const TL = gsap.timeline();
  TL.set(
    ".header",
    {
      opacity: 1,
    },
    0
  )
    .set(
      ".intro",
      {
        opacity: 1,
      },
      0
    )
    .from(".header__container", {
      delay: 0.5,
      opacity: 0,
      y: "-10px",
      duration: 0.4,
    })
    .from(".header__container .container", {
      opacity: 0,
      y: 5,
      duration: 0.8,
    })
    .from(
      ".panel__line",
      {
        width: 0,
        duration: 0.5,
      },
      "-=0.4"
    )
    .from(
      ".panel__title",
      {
        opacity: 0,
        y: -5,
        // scale: 1.3,
        duration: 0.4,
      },
      "-=0.4"
    )
    .from(
      ".panel__nav",
      {
        opacity: 0,
        x: -30,
        duration: 0.7,
      },
      "-=0.1"
    )
    .from(
      ".panel__menu",
      {
        opacity: 0,
        x: 30,
        duration: 0.7,
      },
      "<"
    )
    .from(
      ".intro__block--center",
      {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 0.7,
      },
      "<"
    )
    .from(
      ".intro__block--left",
      {
        opacity: 0,
        x: -50,
        duration: 0.4,
      },
      "-=0.2"
    )
    .from(
      ".intro__block--right",
      {
        opacity: 0,
        x: 50,
        duration: 0.4,
      },
      "<"
    )
    .from(
      ".intro__nav",
      {
        opacity: 0,
        duration: 0.4,
        onComplete: () => initIntroSlider(),
      },
      3
    )
    .from(".intro__pagination", {
      opacity: 0,
      y: 10,
      duration: 0.4,
    });
}

//=== header logic

function doHeaderInit() {
  const header_container = document.querySelector(".header__container");
  const header_menu = document.querySelector(".header__menu");
  const header_btn = document.querySelector(".header__btn");
  const header_overlay = document.querySelector(".header__overlay");

  header_btn.addEventListener("click", () => {
    requestAnimationFrame(doHeaderToggle);
  });

  function doHeaderToggle() {
    const isHeaderContainerActive =
      header_container.classList.contains("active");
    if (isHeaderContainerActive) {
      header_container.classList.remove("active");
      header_menu.style.maxHeight = 0;
      header_overlay.classList.remove("show");
    } else {
      header_container.classList.add("active");
      header_menu.style.maxHeight = header_menu.scrollHeight + "px";
      header_menu.style.opacity = 1;
      header_overlay.classList.add("show");
    }
  }

  header_overlay.addEventListener("click", () => {
    header_container.classList.remove("active");
    header_menu.style.maxHeight = 0;
    header_overlay.classList.remove("show");
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

  const body = document.body;
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
      body.classList.toggle("lock");
      panel_input.forEach((el) => doResetSearchInput(el));
    });
  });

  menu_overlay.addEventListener("click", () => {
    requestAnimationFrame(() => {
      [menu_overlay, menu, show_categories_button].forEach((el) =>
        el.classList.remove("active")
      );
      body.classList.remove("lock");
      panel_input.forEach((el) => doResetSearchInput(el));
    });
  });

  function doCategoriesMenuToggle(btn) {
    btn.classList.toggle("active");
  }
}

// init map on main page

function doCreateMapScript(cb) {
  setTimeout(function () {
    var script = document.createElement("script");
    script.async = false;
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=key&lang=ru_RU";
    document.body.appendChild(script);
    script.onload = () => cb();
  }, 2000);
}

var marks = {};
// map markers url
var mark_link = "images/map-mark.svg";
var mark_current_link = "images/map-current-mark.svg";

// map initialization for pages: home, stores, order-placement
function doInitMap() {
  const stores_coordinats = [
    [51.158562572612595, 71.43921449999996],
    [51.159952, 71.441514],
    [51.157783, 71.442053],
  ];

  function init() {
    let center = stores_coordinats[0];
    if (ymaps) {
      let map = new ymaps.Map("map-section-wrapper", {
        center: center,
        zoom: 17,
      });

      const map_description = document.querySelector(".map__description");

      marks = stores_coordinats.map(
        (coord) =>
          new ymaps.Placemark(
            coord,
            {},
            {
              iconLayout: "default#image",
              iconImageHref: mark_link,
              iconImageSize: [32, 32],
              iconImageOffset: [-15, -5],
            }
          )
      );

      marks.forEach((mark) => map.geoObjects.add(mark));

      marks.forEach((item) =>
        item.events.add("click", (e) => {
          // map_description.classList.remove("show");

          changeMapMarks(e, marks);

          var isSelected =
            e.get("target").options.get("iconImageHref") ===
            "images/map-current-mark.svg";

          if (!isSelected) {
            map_description.classList.remove("show");
          } else {
            // show store card
            map_description.classList.add("show");
            const TL = gsap.timeline();
            TL.from(
              [".map__storeName", ".map__data", ".map__choose", ".map__close"],
              {
                autoAlpha: 0,
                x: 20,
                ease: Power4.easeOut,
                duration: 0.5,
                stagger: {
                  each: 0.08,
                },
              }
            );
          }
        })
      );

      configureMap(map);
    }
  }

  ymaps.ready(init);
}

// map initialization for contacts pages
function doInitContatcsMap() {
  const stores_data = [
    {
      coord: [51.158562572612595, 71.43921449999996],
      content: "Краснодар, В. Головатого, 313",
    },
    { coord: [51.159952, 71.441514], content: "Краснодар, В. Головатого, 310" },
    {
      coord: [51.157783, 71.442053],
      content: "Краснодар, В. Головатого, 200",
    },
  ];

  function init() {
    var center = stores_data[0].coord;
    if (ymaps) {
      var map = new ymaps.Map("map-section-wrapper", {
        center: center,
        zoom: 17,
      });

      // Создание макета содержимого балуна.
      // Макет создается с помощью фабрики макетов с помощью текстового шаблона.
      var BalloonContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="balloon-root ">' +
          '<a class="close" href="#">&times;</a>' +
          '<div class="arrow balloon-pin"></div>' +
          '<div class="balloon-body balloon">$[properties.balloonContent]</div>' +
          "</div>",
        {
          //Формирование макета
          build: function () {
            this.constructor.superclass.build.call(this);
            this._$element = $(".balloon-root", this.getParentElement());
            this.applyElementOffset();
            this._$element
              .find(".close")
              .on("click", $.proxy(this.onCloseClick, this));
          },
          //удаление макета из DOM
          clear: function () {
            this._$element.find(".close").off("click");
            this.constructor.superclass.clear.call(this);
          },
          //закрытие балуна
          onCloseClick: function (e) {
            e.preventDefault();
            this.events.fire("userclose");
          },

          //Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
          applyElementOffset: function () {
            this._$element.css({
              left: -(this._$element[0].offsetWidth / 2 - 5),
              top: -this._$element[0].offsetHeight - 36,
            });
          },
        }
      );

      var marks = stores_data.map(
        (item) =>
          new ymaps.Placemark(
            item.coord,
            {
              balloonContent: item.content,
            },
            {
              iconLayout: "default#image",
              iconImageHref: mark_link,
              iconImageSize: [32, 32],
              iconImageOffset: [-15, -5],
              zIndexActive: 11,
              balloonShadow: false,
              balloonLayout: BalloonContentLayout,
              // Запретим замену обычного балуна на балун-панель.
              // Если не указывать эту опцию, на картах маленького размера откроется балун-панель.
              balloonPanelMaxMapArea: 1,
              // Не скрываем иконку при открытом балуне.
              hideIconOnBalloonOpen: false,
            }
          )
      );

      marks.forEach((mark) => map.geoObjects.add(mark));

      marks.forEach((item) =>
        item.events.add("click", (e) => {
          changeMapMarks(e, marks);
        })
      );

      configureMap(map);
    }
  }

  ymaps.ready(init);
}

// change map markers by click
function changeMapMarks(e, marks) {
  var isSelected =
    e.get("target").options.get("iconImageHref") ===
    "images/map-current-mark.svg";

  if (isSelected) {
    e.get("target").options.set("iconImageHref", mark_link);
    e.get("target").options.set("iconImageSize", [32, 32]);
  } else {
    // reset icon to default for all marks
    marks.forEach((mark) => mark.options.set("iconImageHref", mark_link));
    marks.forEach((mark) => mark.options.set("iconImageSize", [32, 32]));
    // set new icon to current mark
    e.get("target").options.set("iconImageHref", mark_current_link);
    e.get("target").options.set("iconImageSize", [40, 40]);
  }
}

// set map settings
function configureMap(map) {
  map.controls.remove("geolocationControl"); // удаляем геолокацию
  map.controls.remove("searchControl"); // удаляем поиск
  map.controls.remove("trafficControl"); // удаляем контроль трафика
  map.controls.remove("typeSelector"); // удаляем тип
  map.controls.remove("fullscreenControl"); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove("zoomControl"); // удаляем контрол зуммирования
  map.controls.remove("rulerControl"); // удаляем контрол правил
  map.behaviors.disable(["scrollZoom"]); // отключаем скролл карты (опционально)

  // отключаем скролл карты на малых экранах

  if (window.innerWidth <= 767) {
    map.behaviors.disable("drag");
  }

  const mq767 = window.matchMedia("(max-width: 767px)");

  mq767.addEventListener("change", (e) => {
    // became less than 767px
    if (e.matches) {
      map.behaviors.disable("drag");
    }
    // became larger than 767px
    else {
      map.behaviors.enable("drag");
    }
  });
}

// function doRemoveMapOverlayByClick() {
//   const mapSection_overlay = document.querySelector(".mapSection__overlay");

//   mapSection_overlay.addEventListener("click", () => {
//     mapSection_overlay.classList.add("hidden");
//   });
// }

// init map__stores select

function doInitMapStoresSelect() {
  const select = document.querySelector(".map__stores");
  const choices = new Choices(select, {
    silent: false,
    searchEnabled: false,
    itemSelectText: "",
  });
}

// add listeners to .map__stores select element

// function doAddMapStoresListener() {
//   const select = document.querySelector(".map__stores");
//   const map_description = document.querySelector(".map__description");

//   select.addEventListener("choice", () =>
//     map_description.classList.remove("hidden")
//   );
// }

// choose current store

function doChooseStore() {
  var map_description = document.querySelector(".map__description");
  var choose_btn = document.querySelector(".map__choose");

  choose_btn.addEventListener("click", () =>
    map_description.classList.toggle("checked")
  );
}

// hide map__description

function doHideMapDescription() {
  const map_description = document.querySelector(".map__description");
  const map_close_btn = document.querySelector(".map__close");

  map_close_btn.addEventListener("click", () => {
    map_description.classList.remove("show");
    marks.forEach((mark) => {
      mark.options.set("iconImageHref", mark_link);
      mark.options.set("iconImageSize", [32, 32]);
    });
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
      // const button = e.target.closest(".goodsCard__item");
      const button = e.target.closest(".goodsCard__descr");
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
        TL.from(goods_card_items[0], {
          y: "-232px",
          ease: Power1.easeOut,
          scrollTrigger: {
            trigger: ".goodsCard__wrapper",
            // markers: true,
            start: "top 90%",
            end: "bottom 90%",
            scrub: true,
          },
        }).from(
          goods_card_items[2],
          {
            y: "-98px",
            ease: Power4.easeOut,
            scrollTrigger: {
              trigger: ".goodsCard__wrapper",
              // markers: true,
              start: "+=200px bottom",
              end: "bottom+=200px bottom",
              scrub: true,
            },
          },
          "-=2"
        );
      }

      return () => {
        // optionally return a cleanup function that will be called when the media query no longer matches
      };
    }
  );
}

function doAnimationByScrollMainPage() {
  const animated__title = Array.from(
    document.querySelectorAll(".animated__title")
  );
  const popularCategories__img = Array.from(
    document.querySelectorAll(".popularCategories__img")
  );
  const popularCategories__name = Array.from(
    document.querySelectorAll(".popularCategories__name")
  );
  const brandsSection__item = Array.from(
    document.querySelectorAll(".brandsSection__item")
  );
  const over = Array.from(document.querySelectorAll(".over"));
  const promotionsSection_block_first = Array.from(
    document.querySelectorAll(".promotionsSection__block--first")
  );
  const promotionsSection_block_second = Array.from(
    document.querySelectorAll(".promotionsSection__block--second")
  );
  const promotionsSection_item_first = Array.from(
    document.querySelectorAll(
      ".promotionsSection__block--first .promotionsSection__item:first-child"
    )
  );
  const promotionsSection_item_second = Array.from(
    document.querySelectorAll(
      ".promotionsSection__block--second .promotionsSection__item"
    )
  );

  const goods_slides = Array.from(
    document.querySelectorAll(".goodsSection .goodsCard__slide")
  );

  const footer_main_wrapper = Array.from(
    document.querySelectorAll(".footer__main-wrapper")
  );

  const animated_elements = [].concat(
    animated__title,
    popularCategories__img,
    popularCategories__name,
    brandsSection__item,
    over,
    promotionsSection_block_first,
    promotionsSection_block_second,
    promotionsSection_item_first,
    promotionsSection_item_second,
    goods_slides,
    footer_main_wrapper
  );
  animated_elements.forEach((trigger, i) => {
    ScrollTrigger.create({
      trigger: trigger,
      start: "top 90%",
      once: true,
      //toggleActions: "play complete complete complete",
      toggleClass: "animate",
    });
  });
}

function doFooterAnimationByScroll() {
  const footer_copyright = Array.from(
    document.querySelectorAll(".footer__copyright")
  );

  const footer_elements = [].concat(footer_copyright);
  footer_elements.forEach((trigger, i) => {
    ScrollTrigger.create({
      trigger: trigger,
      start: "top bottom",
      once: true,
      //toggleActions: "play complete complete complete",
      toggleClass: "animate",
    });
  });
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

// === INTRO SLIDER

function initIntroSlider() {
  const intro = document.querySelector(".intro");
  const intro_sliders = intro.querySelectorAll(".intro__slider");
  const prev_btn = intro.querySelector(".intro__prev");
  const next_btn = intro.querySelector(".intro__next");

  // set class 'current-slide' to every slide with index "2"
  intro_sliders.forEach((slider) => {
    const currentSlide = slider.querySelectorAll(".intro__slide")[2];
    currentSlide.classList.add("current-slide");

    // add basic settings to every slide
    doAddInitSettingsToIntroSlider(slider);
  });

  // group all nesessary elements to object
  const params = {
    intro,
    intro_sliders,
    prev_btn,
    next_btn,
  };

  // base parameters of intro slider
  const direction = "to_left";
  const duration = 5;

  function doAnimatePagination() {
    const TL = gsap.timeline();
    return TL.to(
      ".intro__paginationItem.active span",
      {
        x: "0%",
        duration: duration,
      },
      0
    ).to(".intro__paginationItem span", {
      x: "-100%",
      duration: 0,
      onComplete: () => handleIntroBtn(direction, params),
    });
  }

  let autoPagination = doAnimatePagination();

  autoPagination.repeat(-1);

  // add listeners to sliders nav button
  [prev_btn, next_btn].forEach((btn) => {
    let direction = "";
    if (btn.classList.contains("intro__next")) {
      direction = "to_left";
    } else {
      direction = "to_right";
    }
    btn.addEventListener("click", () => {
      requestAnimationFrame(() => {
        handleIntroBtn(direction, params);
      });

      autoPagination.restart();
    });
  });
}

function handleIntroBtn(direction, params) {
  const { intro_sliders } = params;

  intro_sliders.forEach((slider) => {
    // start animation
    doIntroSliderAnimation(slider, params, direction);
  });
}

function doReplaceIntroSliderElements(...props) {
  const [slider, direction] = props;
  const wrapper = slider.querySelector(".intro__sliderWrapper");
  const slides = Array.from(slider.querySelectorAll(".intro__slide"));

  if (direction === "to_left") {
    const clonedElement = slides[2];
    const clone = clonedElement.cloneNode(true);
    clone.classList.remove("current-slide");
    const deletedElement = slides[0];
    deletedElement.remove();
    wrapper.append(clone);
  } else {
    const clonedElement = slides[3];
    const clone = clonedElement.cloneNode(true);
    clone.classList.remove("current-slide");
    const deletedElement = slides[slides.length - 1];
    deletedElement.remove();
    wrapper.prepend(clone);
  }
}

// prepare of slider settings
function doAddInitSettingsToIntroSlider(slider) {
  const slides = Array.from(slider.querySelectorAll(".intro__slide"));

  slides.forEach((slide, idx) => {
    if (idx < 2) {
      slide.style.left = "-100%";
      slide.children[0].style.transform = "translate(90%, 0)";
    } else if (idx === 2) {
      slide.style.left = "0";
      slide.children[0].style.transform = "translate(0, 0)";
    } else {
      slide.style.left = "100%";
      slide.children[0].style.transform = "translate(-90%, 0)";
    }
  });
}

// performing slider animation
function doIntroSliderAnimation(slider, params, direction) {
  const { prev_btn, next_btn } = params;

  const currentSlide = slider.querySelector(".current-slide");
  const slides = slider.querySelectorAll(".intro__slide");
  const currentSlideInner = currentSlide.children[0];
  let newSlide = null,
    newSlideInner = null;

  let firstCurrentSlideOffsset,
    lastCurrentSlideOffset,
    lastCurrentSlideInnerOffset;

  if (direction === "to_left") {
    newSlide = currentSlide.nextElementSibling;
    newSlideInner = newSlide.children[0];
    firstCurrentSlideOffsset = "-5%";
    lastCurrentSlideOffset = "-100%";
    lastCurrentSlideInnerOffset = "90%";
  } else {
    newSlide = currentSlide.previousElementSibling;
    newSlideInner = newSlide.children[0];
    firstCurrentSlideOffsset = "5%";
    lastCurrentSlideOffset = "100%";
    lastCurrentSlideInnerOffset = "-90%";
  }

  const props = {
    slider,
    direction,
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

  gsapAnimationIntroSlider(props);

  // change current slide
  slides.forEach((slide) => slide.classList.remove("current-slide"));

  newSlide.classList.add("current-slide");
}

function gsapAnimationIntroSlider(props) {
  const {
    slider,
    direction,
    prev_btn,
    next_btn,
    currentSlide,
    currentSlideInner,
    newSlide,
    newSlideInner,
    firstCurrentSlideOffsset,
    lastCurrentSlideOffset,
    lastCurrentSlideInnerOffset,
  } = props;

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
    .call(doRemoveClassToButtons, [prev_btn, next_btn])
    .call(doReplaceIntroSliderElements, [slider, direction])
    .call(doAddInitSettingsToIntroSlider, [slider]);
}

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

  const news_item_page = document.querySelector(".news-item-page");

  // amount of slides that leave after resize from 768px< to >=768px
  var slidesToLeave = 4;

  news_item_page ? (slidesToLeave = 3) : (slidesToLeave = 4);

  if (discounted_products_section) {
    sections = [].concat(goods_sections, [discounted_products_section]);
  } else {
    sections = goods_sections;
  }

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
      slidesToLeave,
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
    slidesToLeave,
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
      slidesToLeave,
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
    slidesToLeave,
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
      doRemoveAllAddedElements(section_items, slidesToLeave);

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
  // buttons.forEach((btn) => btn.classList.add("disabled"));
  buttons.forEach((btn) => btn.setAttribute("disabled", true));
}

function doRemoveClassToButtons(...buttons) {
  // buttons.forEach((btn) => btn.classList.remove("disabled"));
  buttons.forEach((btn) => btn.removeAttribute("disabled"));
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

  // == for news-item page
  const news_item_page = document.querySelector(".news-item-page");
  // ===

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
  } else if (news_item_page) {
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
    gsapAnimationForNewsItemPage(params);
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

  const price = currentSlide.querySelector(".goodsCard__price");
  const name = currentSlide.querySelector(".goodsCard__name");
  const about = currentSlide.querySelector(".goodsCard__about");
  const addToCart = currentSlide.querySelector(".goodsCard__addToCart");

  const elements = [price, name, about, addToCart];

  const TL = gsap.timeline();
  return TL.call(doAddClassToButtons, [prev_btn, next_btn], 0)
    .call(() =>
      document
        .querySelectorAll(".goodsSection")
        .forEach((section) => section.classList.add("nodelay"))
    )
    .set(currentSlide, { zIndex: 1 })
    .set(newSlide, { zIndex: 2 })
    .set(elements, { opacity: 0 })
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
    .set(elements, {
      opacity: 1,
    })
    .set(currentSlideInner, {
      x: lastCurrentSlideInnerOffset,
    })
    .call(() =>
      document
        .querySelectorAll(".goodsSection")
        .forEach((section) => section.classList.remove("nodelay"))
    )
    .call(doRemoveClassToButtons, [prev_btn, next_btn]);
}

function gsapAnimationForNewsItemPage(params) {
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

  const title = currentSlide.querySelector(".news__title");
  const subtitle = currentSlide.querySelector(".news__subtitle");
  const bottom = currentSlide.querySelector(".news__bottom");

  const elements = [title, subtitle, bottom];

  const TL = gsap.timeline();
  return TL.call(doAddClassToButtons, [prev_btn, next_btn], 0)
    .call(() =>
      document
        .querySelectorAll(".goodsSection")
        .forEach((section) => section.classList.add("nodelay"))
    )
    .set(currentSlide, { zIndex: 1 })
    .set(newSlide, { zIndex: 2 })
    .set(elements, { opacity: 0 })
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
    .set(elements, {
      opacity: 1,
    })
    .set(currentSlideInner, {
      x: lastCurrentSlideInnerOffset,
    })
    .call(() =>
      document
        .querySelectorAll(".goodsSection")
        .forEach((section) => section.classList.remove("nodelay"))
    )
    .call(doRemoveClassToButtons, [prev_btn, next_btn]);
}

// === END OF SLIDER LOGIC ===

// === CATALOG-ITEM PAGE ===

function doInitCatalogItemSlider() {
  var swiperSmall = new Swiper(".view__small", {
    direction: "vertical",
    spaceBetween: 9,
    slidesPerView: 3,
    breakpoints: {
      768: {
        spaceBetween: 23,
      },
    },
  });
  var swiperFull = new Swiper(".view__full", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: false,

    thumbs: {
      swiper: swiperSmall,
    },
  });
}

// select details__value in '.details__feature-weight' on catalog-item page

function doSelectValueButton() {
  var detalis_blocks = Array.from(
    document.querySelectorAll(".details__feature")
  );

  detalis_blocks.forEach((block) => {
    var buttons = Array.from(block.querySelectorAll(".details__set-value"));
    var currentValue = block.querySelector(".details__current");

    buttons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        var currentBtn = e.currentTarget;
        var isWeightBlock = block.classList.contains("details__feature-weight");
        var isColorBlock = block.classList.contains("details__feature-color");
        var newValue = "";

        if (isWeightBlock) {
          newValue = currentBtn.textContent + " гр";
        } else if (isColorBlock) {
          newValue = currentBtn.dataset.colorName;
        } else {
          return;
        }

        requestAnimationFrame(() =>
          handleSetValueButton(currentBtn, buttons, currentValue, newValue)
        );
      });
    });
  });
}

function handleSetValueButton(currentBtn, buttons, currentValue, newValue) {
  var isSelected = currentBtn.classList.contains("selected");

  if (!isSelected) {
    buttons.forEach((btn) => btn.classList.remove("selected"));
    currentBtn.classList.add("selected");
    currentValue.textContent = newValue;
  }
}

// change the appearance of the '.details__values'

function doToggleDetailsValuesAppearance() {
  var details_toggle_btn = Array.from(
    document.querySelectorAll(".details__toggle-btn")
  );

  details_toggle_btn.forEach((btn) => {
    var details_feature_block = btn.closest(".details__feature");
    btn.addEventListener("click", () =>
      handleDetailsToggleBtn(details_feature_block)
    );
  });
}

function handleDetailsToggleBtn(block) {
  requestAnimationFrame(() => {
    block.classList.toggle("active");
  });
}

// set '.details__toggle-btn' value
function doCheckSetValueAmount() {
  const feature_color_blocks = Array.from(
    document.querySelectorAll(".details__feature-color")
  );

  feature_color_blocks.forEach((block) => {
    var btn = block.querySelector(".details__toggle-btn");
    var btnValue = btn.children[0];
    var len = block.querySelectorAll(".details__set-value").length;

    if (window.innerWidth > 1300) {
      doSetToggleBtnAmount(len, btn, btnValue, 18);
    } else if (window.innerWidth >= 768 && window.innerWidth <= 1300) {
      doSetToggleBtnAmount(len, btn, btnValue, 14);
    } else {
      doSetToggleBtnAmount(len, btn, btnValue, 12);
    }
  });
}

function doSetToggleBtnAmount(len, btn, btnValue, amount) {
  if (len > amount) {
    btn.classList.remove("non-overflow");
    btnValue.textContent = `+${len - amount + 1}`;
  } else {
    btn.classList.add("non-overflow");
  }
}

// change '.details__toggle-btn' value by resize
function doChangeToggleBtnAmountByResize() {
  var mq767 = window.matchMedia("(max-width: 767px)");
  var mq1300 = window.matchMedia("(max-width: 1300px)");

  mq767.addEventListener("change", doCheckSetValueAmount);
  mq1300.addEventListener("change", doCheckSetValueAmount);
}

// toggle add-to-favorites button

function doToggleAddToFavoritesBtn(buttonClassName, containerClassName) {
  const add_to_favorites_btns = document.querySelectorAll(buttonClassName);

  add_to_favorites_btns.forEach((btn) => {
    const item = btn.closest(containerClassName);

    btn.addEventListener("click", () => {
      item.classList.toggle("addedToFavorites");
    });
  });
}

// toggle info-tabs on catalog-item page

function doToggleInfoTabs() {
  var info_buttons = document.querySelectorAll(".info__heading-btn");
  var info_tabs = document.querySelectorAll(".info__tab");

  info_buttons.forEach((btn) =>
    btn.addEventListener("click", (e) =>
      handleInfoButtons(e, info_tabs, info_buttons)
    )
  );
}

function handleInfoButtons(e, tabs, buttons) {
  var selectedButton = e.currentTarget;
  var dataHeadingOfSelectedButton = selectedButton.dataset.heading;
  var dataTabOfCurrentTab = "";

  // get value of data-tab attribute of current tab
  tabs.forEach((tab) =>
    tab.classList.contains("hidden")
      ? null
      : (dataTabOfCurrentTab = tab.dataset.tab)
  );

  var isCurrentTabSeleting =
    dataHeadingOfSelectedButton === dataTabOfCurrentTab;

  // if not the current tab is selected, switch to
  if (!isCurrentTabSeleting) {
    buttons.forEach((btn) => btn.classList.remove("active"));
    selectedButton.classList.add("active");
    tabs.forEach((tab) =>
      tab.dataset.tab === dataHeadingOfSelectedButton
        ? tab.classList.remove("hidden")
        : tab.classList.add("hidden")
    );
  }
}

// === '.info__reviews-add' block toggle logic

function doToggleReviewsPanel() {
  // open reviews panel
  var info_reviews_btn = document.querySelector(".info__reviews-btn");
  var add_block = document.querySelector(".add");
  body = document.body;

  info_reviews_btn.addEventListener("click", (e) => {
    handleInfoReviewsBtn(e, body, add_block);
  });

  // change reviews panel height by resize
  var mq767 = window.matchMedia("(max-width: 767px)");

  mq767.addEventListener("change", (e) => {
    handleResizeForAddBlock(e, body, add_block);
  });

  // close reiviews panel
  var close_buttons = document.querySelectorAll(".reviews-close");

  close_buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      handleAddBlockCloseBtn(body, add_block);
    })
  );
}

//  start onload behavior
function handleInfoReviewsBtn(e, body, add_block) {
  add_block.classList.add("active");

  if (window.innerWidth <= 767) {
    add_block.style.maxHeight = "100vh";
    body.classList.add("noscroll");
  } else {
    add_block.style.maxHeight = add_block.scrollHeight + "px";
  }
}

// change add block height by window resize
function handleResizeForAddBlock(e, body, add_block) {
  if (add_block.classList.contains("active")) {
    e.matches
      ? doSetTo100vh(body, add_block)
      : doSetToScrollHeight(body, add_block);
  }
}

// set '.info__reviews-add' block height to scrollHeight
function doSetToScrollHeight(body, add_block) {
  body.classList.remove("noscroll");
  add_block.style.maxHeight = add_block.scrollHeight + "px";
}

// set '.info__reviews-add' block height to 100vh
function doSetTo100vh(body, add_block) {
  body.classList.add("noscroll");
  add_block.style.maxHeight = "100vh";
}

// close reviews panel
function handleAddBlockCloseBtn(body, add_block) {
  add_block.style.maxHeight = "0";
  add_block.classList.remove("active");
  body.classList.remove("noscroll");
}

// check new comment form on catalog-item page
function checkNewCommentForm() {
  var form = document.querySelector(".add__form");
  var rating_inputs = Array.from(form.querySelectorAll(".rating__input"));
  var user_name = form.elements.user_name;
  var email = form.elements.email;
  var rating_fieldset = form.elements.raitng;
  var comment = form.elements.comment;

  var elements = [user_name, email, rating_fieldset, comment];

  // add listener to submit form button
  form.addEventListener("submit", (e) => {
    if (user_name.validity.valueMissing) {
      user_name.classList.add("error");
    }
    if (email.validity.typeMismatch || email.validity.valueMissing) {
      email.classList.add("error");
    }
    if (!doCheckRatingInputs(rating_inputs)) {
      rating_fieldset.classList.add("error");
    }
    if (comment.validity.valueMissing) {
      comment.classList.add("error");
    }

    checkContainingErrorClassName(elements)
      ? e.preventDefault()
      : form.submit();
  });

  // adds listeners to all elements that can have an error className
  doRemoveErrorClassNameByInput(elements);
}

// checks for the presence of the error className
function checkContainingErrorClassName(elements) {
  return elements.some((el) => el.classList.contains("error"));
}

// checks if the selected item exists
function doCheckRatingInputs(inputs) {
  var isRatingChecked = inputs.some((input) => input.checked);

  return isRatingChecked;
}

// remove 'error' class by input
function doRemoveErrorClassNameByInput(elements) {
  var { 0: user_name, 1: email, 2: rating_fieldset, 3: comment } = elements;

  [user_name, email, comment].forEach((el) =>
    el.addEventListener("input", (e) => e.target.classList.remove("error"))
  );

  rating_fieldset.addEventListener("input", (e) =>
    e.target.closest(".rating__fieldset").classList.remove("error")
  );
}

// add images to reviews on the catalog-page

function doInitFileRead() {
  var container = document.querySelector(".add__images");
  var add_images_btn = document.querySelector(".add__img-btn");
  var file_input = document.querySelector("#images_input");

  file_input.addEventListener("change", () => handleFiles(file_input.files));

  function handleFiles(files) {
    var queuedImagesArray = [];

    for (file of files) {
      // check type of uploaded file
      if (!file.type.startsWith("image/")) {
        continue;
      }

      queuedImagesArray.push(file);
    }

    queuedImagesArray.forEach((image) => {
      if (container.children.length < 6) {
        // create image item and add className
        var img_item = document.createElement("DIV");
        img_item.classList.add("add__img");

        // add innerHTML to image item
        img_item.innerHTML = `<img src="${URL.createObjectURL(
          image
        )}" alt="фото отзыва"><button class="add__img-remove" type="button" aria-label="Удалить фото отзыва"></button>`;

        // add image item to the DOM
        add_images_btn.before(img_item);

        // add listener to remove_btn
        img_item
          .querySelector(".add__img-remove")
          .addEventListener("click", (e) =>
            handleRemoveImage(e, add_images_btn, file_input)
          );
      } else {
        // disable input 'file'
        add_images_btn.classList.add("disabled");
        file_input.setAttribute("disabled", true);
      }
    });
  }
}

function addListernerToRemoveBtn() {
  var add_images_btn = document.querySelector(".add__img-btn");
  var file_input = document.querySelector("#images_input");
  var remove_btns = document.querySelectorAll(".add__img-remove");

  remove_btns.forEach((btn) =>
    btn.addEventListener("click", (e) =>
      handleRemoveImage(e, add_images_btn, file_input)
    )
  );
}

function handleRemoveImage(e, add_images_btn, file_input) {
  // delete "add__img" item
  var img_item = e.target.closest(".add__img");
  img_item.remove();

  // enable input 'file'
  add_images_btn.classList.remove("disabled");
  file_input.removeAttribute("disabled");
}

// === ONECLICK

function doShowOneclick() {
  var show_oneclick_btn = document.querySelector(".details__one-click");
  var oneclick = document.querySelector(".oneclick");
  var body = document.body;

  show_oneclick_btn.addEventListener("click", () => {
    requestAnimationFrame(() => {
      oneclick.classList.add("active");
      body.classList.add("noscroll");
    });
  });
}

function doHideOneclick() {
  var close_oneclick_buttons = document.querySelectorAll(".oneclick-close");
  var oneclick = document.querySelector(".oneclick");
  var body = document.body;

  close_oneclick_buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      requestAnimationFrame(() => {
        oneclick.classList.remove("active", "submited");
        body.classList.remove("noscroll");
      });
    })
  );
}

// === ONECLICK FORM CHECK

// check new comment form on catalog-item page
function checkOneclickForm() {
  var oneclick_block = document.querySelector(".oneclick");
  var form = document.querySelector(".oneclick__form");
  var user_name = form.elements.customer_name;
  var phone = form.elements.customer_phone;

  var elements = [user_name, phone];

  // add listener to submit form button
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    user_name.validity.valueMissing && user_name.classList.add("error");

    minPhoneLen = parseInt(phone.dataset.minPhoneLength);
    phone.value.length < minPhoneLen && phone.classList.add("error");

    !checkContainingErrorClassName(elements) && clearFormInputs();

    function clearFormInputs() {
      oneclick_block.classList.add("submited");
      const elements = Array.from(form.elements);
      elements.forEach((el) => {
        el.classList.contains("oneclick__input") && (el.value = "");
      });
    }
  });

  // adds listeners to all elements that can have an error className
  doRemoveErrorClassNameInOneclick(elements);
}

// remove 'error' class in oneclick form
function doRemoveErrorClassNameInOneclick(elements) {
  elements.forEach((el) =>
    el.addEventListener("input", (e) => e.target.classList.remove("error"))
  );
}

// oneclick maska

function doInitMaskInput() {
  const { MaskInput } = Maska;

  const maskIinput = new MaskInput("[data-maska]");
}

function doSetCursorToEnd() {
  var oneclick_phone = document.querySelector(".oneclick__phone");
  oneclick_phone.addEventListener("click", (e) => {
    var input = e.target;
    var end = input.value.length;
    input.setSelectionRange(end, end);
  });
}

// === change goods amount

function doChangeGoodsAmount(amount_block_class, isCartPage) {
  var blocks = Array.from(document.querySelectorAll(amount_block_class));

  blocks.forEach((block) => {
    var decrease_btn = block.querySelector(".goods-decrease");
    var increase_btn = block.querySelector(".goods-increase");
    var input = block.querySelector("input");

    decrease_btn.addEventListener("click", () => {
      var value = parseInt(input.value);
      value > 1 ? (input.value = value - 1) : null;
      isCartPage ? doChangeSum(input) : null;
    });

    increase_btn.addEventListener("click", () => {
      var value = parseInt(input.value);
      input.value = value + 1;
      isCartPage ? doChangeSum(input) : null;
    });
  });
}

function doAddListenersToAllAmountInput() {
  var inputs = document.querySelectorAll(".goods-amount input");

  inputs.forEach((input) =>
    input.addEventListener("input", () => {
      // doResetEmptyInputByBlur();
      doChangeSum(input);
    })
  );
}

function doChangeSum(input) {
  var cart_row = input.closest(".cart__regular-row");
  var new_price = cart_row.querySelector(".cart__price-new");
  var old_price = cart_row.querySelector(".cart__price-old");
  var new_sum = cart_row.querySelector(".cart__sum-new");
  var old_sum = cart_row.querySelector(".cart__sum-old");

  if (input.value === "") {
    new_sum.textContent = 0 + " ₸";
    old_sum && (old_sum.textContent = 0 + " ₸");
  } else {
    var amount = parseInt(input.value);

    var new_num =
      parseInt(input.value) *
      parseInt(new_price.textContent.replaceAll(" ", ""));

    new_sum.textContent = new Intl.NumberFormat("ru-RU").format(new_num) + "₸";

    if (old_price && old_sum) {
      old_sum.textContent =
        amount * parseInt(old_price.textContent.replaceAll(" ", "")) + "₸";

      var old_num =
        amount * parseInt(old_price.textContent.replaceAll(" ", ""));

      old_sum.textContent =
        new Intl.NumberFormat("ru-RU").format(old_num) + "₸";
    }
  }
}

// remove good-item from cart

function doRemoveGoodFromCart() {
  var remove_buttons = Array.from(document.querySelectorAll(".cart__remove"));

  remove_buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      var cart_item = btn.closest(".cart__regular-row");
      var cart_removing_block = cart_item.querySelector(".cart__removing");
      var cart_cancel_btn = cart_item.querySelector(".cart__cancel");
      var cart_forced_delete_btn = cart_item.querySelector(
        ".cart__delete-anyway"
      );

      cart_item.classList.add("deleting");

      cart_cancel_btn.addEventListener("click", () =>
        cart_item.classList.remove("deleting")
      );

      cart_removing_block.addEventListener("animationend", () =>
        cart_item.remove()
      );

      cart_forced_delete_btn.addEventListener("click", () =>
        cart_item.remove()
      );
    })
  );
}

// cart clear
function doClearCart() {
  var cart_clear_btn = document.querySelector(".cart__reset");
  var cart_list = document.querySelector(".cart__list");

  cart_clear_btn.addEventListener("click", () => {
    cart_list.innerHTML = "";
  });
}

// SEARCH ON THE BRANDS PAGE

function doInitBrandsSearch() {
  const input = document.querySelector(".brands-search__input");
  const clear_search_btn = document.querySelector(".brands-search__clear");

  input.addEventListener("input", () =>
    requestAnimationFrame(doSearchInputHandle)
  );

  function doSearchInputHandle() {
    const isInputNotEmpty = Boolean(input.value);
    if (!isInputNotEmpty) {
      input.classList.remove("active");
      clear_search_btn.classList.remove("visible");
    } else {
      input.classList.add("active");
      clear_search_btn.classList.add("visible");
    }
  }

  clear_search_btn.addEventListener("click", () =>
    requestAnimationFrame(doClearSearchInput)
  );

  function doClearSearchInput() {
    input.value = "";
    input.classList.remove("active");
    input.focus();
    clear_search_btn.classList.remove("visible");
  }
}

function doResetEmptyInputByBlur() {
  var goods_amout_inputs = document.querySelectorAll(".goods-amout");

  goods_amout_inputs.forEach((input) =>
    input.addEventListener("blur", () => {
      if (input.value === "") {
        // set input to start value
        input.value = 1;

        // if this is cart-page, reset sum to start value
        var cart_item = input.closest(".cart__regular-row");
        if (cart_item) {
          cart_item.querySelector(".cart__sum-new").textContent =
            cart_item.querySelector(".cart__price-new").textContent;

          var sum_old = cart_item.querySelector(".cart__sum-old");

          sum_old &&
            (sum_old.textContent =
              cart_item.querySelector(".cart__price-old").textContent);
        }
      }
    })
  );
}

function doToggleAddToCartButton() {
  var add_to_cart_btn = document.querySelector(".details__add-to-cart");

  add_to_cart_btn.addEventListener("click", () =>
    document.body.classList.toggle("added-to-cart")
  );
}

// AUTH / REGISTRATION

// === ONECLICK

function doShowAuth() {
  var panel_user_btn = document.querySelector(".panel__user");
  var auth = document.querySelector(".auth");
  var body = document.body;

  panel_user_btn.addEventListener("click", () => {
    requestAnimationFrame(() => {
      auth.classList.add("active");
      body.classList.add("noscroll");
    });
  });
}

function doShowRegistration() {
  var show_registration_btn = document.querySelector(".auth__to-registration");
  var auth = document.querySelector(".auth");

  show_registration_btn.addEventListener("click", () => {
    requestAnimationFrame(() => {
      auth.classList.remove("signin");
      auth.classList.add("registration");
    });
  });
}

function doHideAuth() {
  var close_buttons_buttons = document.querySelectorAll(".auth-close");
  var auth = document.querySelector(".auth");
  var body = document.body;
  var auth_inputs = document.querySelectorAll(".auth__input");

  close_buttons_buttons.forEach((btn) =>
    btn.addEventListener("click", () => {
      requestAnimationFrame(() => handleHideAuth(auth, body, auth_inputs));
    })
  );
}

function handleHideAuth(auth, body, auth_inputs) {
  auth.classList.remove("active", "registration");
  auth.classList.add("signin");
  body.classList.remove("noscroll");
  clearFormInputs(auth_inputs);
  auth_inputs.forEach((input) => input.classList.remove("error"));
}

// === AUTH and REGISTRATION FORMS CHECK

function checkAuthForm() {
  var auth = document.querySelector(".auth");
  var body = document.body;
  var forms = Array.from(document.querySelectorAll(".auth__form"));

  forms.forEach((form) => {
    var all_inputs = Array.from(form.querySelectorAll(".auth__input"));
    var required_inputs = all_inputs.filter((input) =>
      input.classList.contains("auth__input--required")
    );

    // add listener to submit form button
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      required_inputs.forEach((input) => doCheckForm(input, all_inputs));

      !checkContainingErrorClassName(required_inputs) &&
        doSubmitAuth(auth, body, all_inputs);
    });

    // adds listeners to all elements that can have an error className
    doRemoveErrorClassNameInAuth(required_inputs);
  });
}

// clear all form inputs
function clearFormInputs(inputs) {
  inputs.forEach((el) => (el.value = ""));
}

// remove 'error' class in oneclick form
function doRemoveErrorClassNameInAuth(inputs) {
  inputs.forEach((el) =>
    el.addEventListener("input", (e) => e.target.classList.remove("error"))
  );
}

function doSubmitAuth(auth, body, auth_inputs) {
  handleHideAuth(auth, body, auth_inputs);

  console.log("form submited");

  // HERE DO SOMETHING TO AUTH OR REGISTRATION FORM SUBMIT
}

// ===== CABINET =====
function doToggleCabinetNav() {
  var cabinet_nav_buttons = Array.from(
    document.querySelectorAll(".cabinet__nav-btn")
  );

  cabinet_nav_buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      var curr_btn = e.target;
      !btn.classList.contains("active") &&
        handleCabinetNav(cabinet_nav_buttons, curr_btn);
    });
  });
}

function handleCabinetNav(buttons, curr_btn) {
  buttons.forEach((btn) => btn.classList.remove("active"));
  curr_btn.classList.add("active");

  // HERE CHANGE CONTENT OF ORDER LIST ON THE CABINET-USER-ORDERS PAGE
}

function doSavePersonalData() {
  console.log("all changes saved");
  // HERE DO LOGIC TO SAVE PERSONAL DATA
}

// accordion in cabinet

function doToggleCabinetAccordion() {
  var accordions = Array.from(document.querySelectorAll(".cabinet__accordion"));

  accordions.forEach((acc) => {
    var acc_toggle_btn = acc.querySelector(".cabinet__orders-top");

    acc_toggle_btn.addEventListener("click", () =>
      acc.classList.toggle("show")
    );
  });
}

// FORM VALIDATION

function checkRequiredFormInputs() {
  var forms = Array.from(document.querySelectorAll(".form"));

  forms.forEach((form) => {
    var all_inputs = Array.from(form.querySelectorAll(".input"));
    var required_inputs = all_inputs.filter((input) =>
      input.classList.contains("input-required")
    );

    // add listener to submit form button
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      required_inputs.forEach((input) => doCheckForm(input, all_inputs));

      !checkContainingErrorClassName(required_inputs) && doSavePersonalData();
    });

    // adds listeners to all elements that can have an error className
    doRemoveErrorClassNameInAuth(required_inputs);
  });
}

function doCheckForm(input, all_inputs) {
  // check 'user_phone' input
  if (input.name === "user_phone") {
    var len = parseInt(input.dataset.minPhoneLength);
    minPhoneLen = !Number.isNaN(len) && len > 7 ? len : 18;
    input.value.length < minPhoneLen && input.classList.add("error");
  }
  // check 'user_email' input
  else if (input.name === "user_email") {
    !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(input.value) &&
      input.classList.add("error");
  }
  // check 'user_password' input
  else if (input.name === "user_password") {
    input.value.length < 5 && input.classList.add("error");
  }
  // check 'user_password_repeat' input
  else if (input.name === "user_password_repeat") {
    var input_pass = all_inputs.filter(
      (input) => input.name === "user_password"
    )[0];
    var pass = input_pass.value;
    (input.value < 5 || input.value !== pass) && input.classList.add("error");
  }
  // check another required input
  else {
    input.validity.valueMissing && input.classList.add("error");
  }
}

// change inputs state on the cabinet-personal-data page

function doChangeInputState() {
  var inputs = document.querySelectorAll(".cabinet__input");

  inputs.forEach((input) =>
    input.addEventListener("input", () => {
      var input_wrapper = input.parentElement;
      input_wrapper.parentElement.classList.remove("focus");
      input.value.length > 0
        ? input_wrapper.classList.add("non-empty")
        : input_wrapper.classList.remove("non-empty");
    })
  );

  inputs.forEach((input) =>
    input.addEventListener("blur", (e) => {
      var input_wrapper = input.parentElement;
      input_wrapper.classList.remove("focus");
    })
  );

  inputs.forEach((input) =>
    input.addEventListener("focus", () => {
      var input_wrapper = input.parentElement;
      input_wrapper.classList.add("focus");
    })
  );
}

function doClearInput() {
  var clear_btns = document.querySelectorAll(".cabinet__clear");

  clear_btns.forEach((btn) =>
    btn.addEventListener("click", () => {
      var input_wrapper = btn.parentElement;
      input_wrapper.classList.remove("non-empty");
      input = btn.previousElementSibling;
      input.focus();
      input.value = "";
      // input_wrapper.classList.remove("clicked");
    })
  );

  clear_btns.forEach((btn) =>
    btn.addEventListener("mouseenter", () =>
      btn.parentElement.classList.add("clicked")
    )
  );
  clear_btns.forEach((btn) =>
    btn.addEventListener("mouseleave", () =>
      btn.parentElement.classList.remove("clicked")
    )
  );
}

// ORDER-PLACEMENT PAGE

function doSwitchOrderStep() {
  var order_info = document.querySelector(".order__info");
  var steps = Array.from(document.querySelectorAll(".order__step"));
  var prev_btn = document.querySelector(".order__prev");
  var next_btn = document.querySelector(".order__next");

  next_btn.addEventListener("click", () =>
    handleOrderNextBtn(order_info, steps)
  );

  prev_btn.addEventListener("click", () =>
    handleOrderPrevBtn(order_info, steps)
  );
}

function handleOrderNextBtn(order_info, steps) {
  var max_idx = steps.length - 1;
  var curr_idx = steps.findIndex((step) => step.classList.contains("current"));
  var curr = steps[curr_idx];
  var next = steps[curr_idx + 1];

  // first step
  var first_step = document.querySelector(".step-first");
  var all_inputs = Array.from(first_step.querySelectorAll(".input"));
  var required_inputs = all_inputs.filter((input) =>
    input.classList.contains("input-required")
  );

  // check

  if (curr_idx === 0 && curr_idx !== max_idx) {
    required_inputs.forEach((input) => doCheckForm(input, all_inputs));

    if (!checkContainingErrorClassName(required_inputs)) {
      order_info.classList.remove("first-step-is-current");
      doSetNextStep(curr, next);
    }
    // adds listeners to all elements that can have an error className
    doRemoveErrorClassNameInAuth(required_inputs);
  } else if (curr_idx > 0 && curr_idx < max_idx - 1) {
    doSetNextStep(curr, next);
  } else if (curr_idx === max_idx - 1) {
    order_info.classList.add("last-step-is-current");
    doSetNextStep(curr, next);
  } else {
    return;
  }
}

function doSetNextStep(curr, next) {
  curr.classList.add("collapse");
  curr.classList.remove("current");
  next.classList.add("current");

  var curr_content = curr.children[1];
  var next_content = next.children[1];

  const TL = gsap.timeline();
  TL.to(curr_content, {
    opacity: 0,
    duration: 0.2,
  })
    .to(curr_content, {
      height: 0,
      duration: 0.2,
    })
    .to(
      next,
      {
        opacity: 1,
        height: "auto",
        overflow: "visible",
        duration: 0.2,
        onStart: () => next.classList.remove("hidden"),
      },
      0
    )
    .set(
      curr,
      {
        overflow: "hidden",
      },
      0
    );
}

function handleOrderPrevBtn(order_info, steps) {
  var max_idx = steps.length - 1;
  var curr_idx = steps.findIndex((step) => step.classList.contains("current"));
  var curr = steps[curr_idx];
  var next = steps[curr_idx - 1];

  if (curr_idx === max_idx && curr_idx !== 0) {
    order_info.classList.remove("last-step-is-current");
    doSetPrevStep(curr, next);
  } else if (curr_idx > 1 && curr_idx < max_idx) {
    doSetPrevStep(curr, next);
  } else if (curr_idx === 1) {
    order_info.classList.add("first-step-is-current");
    doSetPrevStep(curr, next);
  } else {
    return;
  }
}

function doSetPrevStep(curr, prev) {
  // curr.classList.add("hidden");
  curr.classList.remove("current");
  prev.classList.add("current");
  prev.classList.remove("collapse");

  var prev_content = prev.children[1];

  const TL = gsap.timeline();
  TL.to(curr, {
    opacity: 0,
    duration: 0.2,
  })
    .to(curr, {
      duration: 0.2,
      height: 0,
      onComplete: () => curr.classList.add("hidden"),
    })
    .to(
      prev_content,
      {
        opacity: 1,
        height: "auto",
        duration: 0.2,
      },
      0
    )
    .set(
      prev,
      {
        overflow: "visible",
      },
      0
    );
}

function doCheckOrderPlacementFirstStepInputs() {
  var first_step = Array.from(document.querySelectorAll(".step-first"));
  var all_inputs = Array.from(first_step.querySelectorAll(".input"));
  var required_inputs = all_inputs.filter((input) =>
    input.classList.contains("input-required")
  );
  required_inputs.forEach((input) => doCheckForm(input, all_inputs));

  !checkContainingErrorClassName(required_inputs) && doSavePersonalData();
  // adds listeners to all elements that can have an error className
  doRemoveErrorClassNameInAuth(required_inputs);
}

// news-item page

function doInitContentSlider() {
  const contentSlider = new Swiper(".content__slider", {
    spaceBetween: 16,
    slidesPerView: 1.4,
    slidesOffsetAfter: 20,
    navigation: {
      prevEl: ".content__prev",
      nextEl: ".content__next",
    },

    breakpoints: {
      576: {
        slidesPerView: 2,
        slidesOffsetAfter: 0,
      },
      768: {
        spaceBetween: 24,
        slidesPerView: 3,
      },
      1001: {
        spaceBetween: 24,
        slidesPerView: 4,
      },
    },
  });
}

function doInitCompanySlider() {
  const companySlider = new Swiper(".certificates__slider", {
    slidesPerView: 2,
    spaceBetween: 15,
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      768: {
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 4,
      },
      1301: {
        slidesPerView: 5,
      },
      1500: {
        slidesPerView: 6,
      },
    },
    navigation: {
      prevEl: ".certificates__prev",
      nextEl: ".certificates__next",
    },
  });
  var swiperFull = new Swiper(".fullscreen__slider", {
    effect: "fade",
    slidesPerView: 1,
    spaceBetween: 0,
    // autoHeight: true,
    navigation: {
      prevEl: ".certificates__prev",
      nextEl: ".certificates__next",
    },

    thumbs: {
      swiper: companySlider,
    },
  });
}

function doShowCertificatesFullscreen() {
  var slides = document.querySelectorAll(".certificates__slide");
  var fullscreen = document.querySelector(".fullscreen");
  var body = document.body;

  var close_btn = document.querySelector(".fullscreen__close");

  slides.forEach((slide) =>
    slide.addEventListener("click", () => {
      fullscreen.classList.add("show");
      body.classList.add("noscroll");
    })
  );

  close_btn.addEventListener("click", () => doClosePopup());

  function doClosePopup() {
    fullscreen.classList.remove("show");
    body.classList.remove("noscroll");
  }

  window.addEventListener(
    "keydown",
    (e) => e.key === "Escape" && doClosePopup()
  );
}

// reviews slider for catalog-item page

function doShowFullscreen() {
  var body = document.body;
  var all_reviews_images = document.querySelectorAll(".info__reviews-img");
  var swiper_wrapper = document.querySelector(".fullscreen .swiper-wrapper");
  var fullscreen = document.querySelector(".fullscreen");
  var close_btn = document.querySelector(".fullscreen__close");
  var fullscreenSlider = {};

  // add listeners to all ".info__reviews-img"
  all_reviews_images.forEach((img) =>
    img.addEventListener("click", (e) => {
      // create image array of one selected review
      var reviews_images = e.target.closest(".info__reviews-images");
      var single_review_images = Array.from(reviews_images.children);

      // get src of selected 'img'
      var currSrc = e.target.src;

      // create fragment
      var fragment = document.createDocumentFragment();

      // create slides for swiper
      single_review_images.forEach((img) => {
        var slide = document.createElement("DIV");
        slide.classList.add("fullscreen__slide", "swiper-slide");
        slide.innerHTML = img.innerHTML;
        fragment.append(slide);
      });

      // add slides to swiper
      swiper_wrapper.append(fragment);

      // get index of initial slide
      var idx = Array.from(swiper_wrapper.children).findIndex(
        (item) => item.querySelector("img").src === currSrc
      );

      // check: if idx not found than set idx to 0
      idx < 0 && (idx = 0);

      // init swiper-slider
      fullscreenSlider = new Swiper(".fullscreen__slider", {
        initialSlide: idx,
        effect: "fade",
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          prevEl: ".certificates__prev",
          nextEl: ".certificates__next",
        },
      });

      // show fullscreen popup
      fullscreen.classList.add("show");
      body.classList.add("noscroll");

      // add close_btn listener
      close_btn.addEventListener("click", handleCloseFullscreen);

      // add listener to 'Escape' button
      window.addEventListener(
        "keydown",
        (e) => e.key === "Escape" && handleCloseFullscreen()
      );

      function handleCloseFullscreen() {
        fullscreenSlider.destroy(true, true);
        fullscreen.classList.remove("show");
        body.classList.remove("noscroll");
        swiper_wrapper.innerHTML = "";
      }
    })
  );
}
