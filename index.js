let hamburger = document.querySelectorAll(".swapper");

for (let i = 0; i < hamburger.length; i++) {
	hamburger[i].addEventListener("click", () => {
		let toggable = document.getElementById("myTopnav");
		if (toggable.className === "topnav") {
			toggable.className += " responsive";
		} else {
			toggable.className = "topnav";
		}
	});
}

let svgIndex = 1;
showSvg(svgIndex);

function plusIndex(n) {
	showSvg((svgIndex += n));
}
function showSvg(n) {
	let svg = document.getElementsByClassName("swapper");
	if (n > svg.length) {
		svgIndex = 1;
	}
	if (n < 1) {
		svgIndex = svg.length;
	}
	for (const slider of svg) {
		slider.style.display = "none";
	}

	svg[svgIndex - 1].style.display = "";
}
