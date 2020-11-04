let hamburgerIcons = document.querySelectorAll(".burger-icons");
let toggable = document.getElementById("myTopnav");
let svgIndex = 1;

const showSvg = (n) => {
	let svgs = document.getElementsByClassName("burger-icons");
	if (n < svgs.length) {
		svgIndex = 1;
	} else {
		svgIndex = svgs.length;
	}
	for (const svg of svgs) {
		svg.style.display = "none";
	}

	svgs[svgIndex - 1].style.display = "";
};

const plusIndex = (n) => {
	showSvg((svgIndex += n));
};

for (const icon of hamburgerIcons) {
	icon.addEventListener("click", () => {
		toggable.className === "topnav"
			? (toggable.className += " responsive")
			: (toggable.className = "topnav");
	});
}

showSvg(svgIndex);
