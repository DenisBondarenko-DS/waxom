document.addEventListener('DOMContentLoaded', function() {

	let menuTrigger     = document.querySelector('.menu-toggle'),
		siteBody        = document.querySelector('body');

	menuTrigger.addEventListener('click', function(e) {
		e.preventDefault();
		siteBody.classList.toggle('menu-is-open');
	});

	siteBody.addEventListener('click', function(e) {
		const classNames = ['menu', 'menu__content', 'menu-toggle', 'menu-toggle__line'];
		if (!classNames.some(className => e.target.classList.contains(className))) {
			siteBody.classList.remove('menu-is-open');
		}
	});

	const anchors = document.querySelectorAll('.menu__link');

	for (let anchor of anchors) {
		anchor.addEventListener('click', function(e) {
			e.preventDefault();

			const blockID = anchor.getAttribute('href');

			document.querySelector(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	}

	const swiper = new Swiper('.swiper-container', {
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	wow = new WOW({
		mobile: false
	});
	wow.init();

});

window.onload = function () {

	let grid = new Isotope('.projects__row', {
		itemSelector: '.projects__column',
		percentPosition: true
	});

	let filterBtn = document.querySelectorAll('.filter .filter__item');
	for (let i = 0; i < filterBtn.length; i++) {
		filterBtn[i].onclick = function(e) {
			document.querySelector('.filter__item--active').classList.remove('filter__item--active');
			this.classList.add('filter__item--active');

			e.preventDefault();
			let filterData = e.target.getAttribute('data-filter');
			grid.arrange({
				filter: filterData
			});
		};
	}
};