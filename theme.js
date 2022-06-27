let themeDark = document.querySelector(".dark");
let themeLight = document.querySelector(".light");
let root = document.querySelector(":root");

themeDark.addEventListener("click", () => {
	root.style.cssText =
		"--bg-white: #464646;" +
		"--text-color: #E5E5E5;" +
		"--bg-lightblue: #BB7711;" +
		"--pure-white: #1A1A1A70;" +
		"--btn-color: #D5851B;" +
		"--btn-hover-prim: #AA6A16;" +
		"--btn-hover-sec: #BB881120;" +
		"--academic-bg-img: none;" +
		"--form-border-focus: #464646;";

	themeDark.classList.add("none");
	themeLight.classList.remove("none");
});

themeLight.addEventListener("click", () => {
	root.style.cssText =
		"--bg-white: #F5F5F5;" +
		"--bg-lightblue: #EAF2FD;" +
		"--text-color: #464646;" +
		"--btn-color: #2A7AE4;" +
		"--btn-hover-prim: #5595E9;" +
		"--btn-hover-sec: #D4E4FA;" +
		"--pure-white: #FFFFFF;" +
		"--academic-bg-img: #B20101;" +
		"--form-border-focus: #2A7AE4;";

	themeLight.classList.add("none");
	themeDark.classList.remove("none");
});
