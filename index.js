// codigo que oculta los iconos de hamburguresa y "X" que deberian cambiar de acuerdo a
// si está contraido o desplegado el menu

let burgerIndex = 1;
burgerSwaper(burgerIndex);

function plusSlides(n) {
	burgerSwaper((burgerIndex += n));
}

function burgerSwaper(n) {
	let slides = document.getElementsByClassName("mc-swap");
	if (n > slides.length) {
		burgerIndex = 1;
	}
	if (n < 1) {
		7;
		burgerIndex = slides.length;
	}
	for (const slider of slides) {
		("");
		slider.style.display = "none";
	}

	slides[burgerIndex - 1].style.display = "";
}

// codigo que deberia ejecutarse con un click para desplegar o contraer el menú

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

// ya existe un click en los dos svg que oculta la "X" y la "hamburguesa"
// aun no tengo el click que hace ejecutar "myfunction() porque no supe que hacer"
