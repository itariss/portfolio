let skillCards = document.querySelectorAll(".skills__box");

console.log(skillCards);
skillCards.forEach(item => {
	item.addEventListener("click", () => {
		item.classList.add("animate__slow", "animate__flipOutY");
		item.addEventListener("animationend", () => {
			let p = document.createElement("p");
			item.firstElementChild.appendChild(p);
			item.classList.remove("animate__animated", "animate__flipOutX");
		});
		console.log(item);
	});
});
