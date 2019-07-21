$(document).ready(function () {


	$WIN = $(window);

	/* Menu on Scrolldown - Меню при прокрутке вниз
	 * ------------------------------------------------------ */
	var ssMenuOnScrolldown = function () {

		var menuTrigger = $('#header-menu-trigger');

		$WIN.on('scroll', function () {

			if ($WIN.scrollTop() > 150) {
				menuTrigger.addClass('opaque');
			} else {
				menuTrigger.removeClass('opaque');
			}

		});
	};


	/* OffCanvas Menu - Меню при нажатии на которое вылазиет
	 * ------------------------------------------------------ */
	var ssOffCanvas = function () {

		var menuTrigger = $('#header-menu-trigger'),
			nav = $('#menu-nav-wrap'),
			closeButton = nav.find('.header__nav-close'),
			siteBody = $('body'),
			mainContents = $('section, footer');

		// open-close menu by clicking on the menu icon (открыть-закрыть меню, нажав на значок меню)
		menuTrigger.on('click', function (e) {
			e.preventDefault();
			menuTrigger.toggleClass('is-clicked');
			siteBody.toggleClass('menu-is-open');
		});

		// close menu by clicking the close button (закрыть меню, нажав кнопку закрытия)
		closeButton.on('click', function (e) {
			e.preventDefault();
			menuTrigger.trigger('click');
		});

		// close menu clicking outside the menu itself (закрыть меню, щелкнув за пределами самого меню)
		siteBody.on('click', function (e) {
			if (!$(e.target).is('#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span')) {
				menuTrigger.removeClass('is-clicked');
				siteBody.removeClass('menu-is-open');
			}
		});

	};

	/* Initialize
	 * ------------------------------------------------------ */
	(function ssInit() {
		ssMenuOnScrolldown();
		ssOffCanvas();
	})();


	// Кнопка поднятия страницы вверх
	$(window).scroll(function () {
		if ($(this).scrollTop() > 700) { // Сколько должен прокрутить чтобы появилась кнопка
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});

	$('.scrollToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 2000); // Скорость поднятия
		return false;
	});
	//



});