// https://www.youtube.com/watch?v=OFKBep95lb4
window.onload = function () {
	window.addEventListener('scroll', function (e) {
		if (window.pageYOffset > 50) {
			document.querySelector("header").classList.add('is-scrolling');
		} else {
			document.querySelector("header").classList.remove('is-scrolling');
		}
	});
	
	// const menu_btn = document.querySelector('.hamburger');
	// const mobile_menu = document.querySelector('.mobile-nav');

	// menu_btn.addEventListener('click', function () {
	// 	menu_btn.classList.toggle('is-active');
	// 	mobile_menu.classList.toggle('is-active');
	// });

// deze aangepaste code is medemogelijk gemaakt door chat gpt
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');
const hamburger_icon = document.getElementById('hamburgericon');

let isMenuOpen = false;

menu_btn.addEventListener('click', function () {
    isMenuOpen = !isMenuOpen; // Toggle de status van het menu

    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');

    // Wijzig de bron van de afbeelding op basis van de status van het menu
    if (isMenuOpen) {
        hamburger_icon.src = 'media/hamburgerwit.svg'; // Nieuwe afbeelding wanneer het menu open is
    } else {
        hamburger_icon.src = 'media/hamburgerblauw.svg'; // Terug naar de oorspronkelijke afbeelding wanneer het menu gesloten is
    }
});


}

// melding wanneer je klikt op button
document.getElementById("vertalen").addEventListener("click", function() {
  alert("Er word nog gezocht naar een poezen vertaler kom later terug!");
});

