let inputName = document.querySelector("#nome");
let inputEmail = document.querySelector("#email");
let inputAssunto = document.querySelector("#assunto");
let inputMessage = document.querySelector("#mensagem");

inputName.addEventListener("input", () => {
	inputName.setAttribute("autocomplete", "on");
	if (inputName.value === "") {
		inputName.setAttribute("autocomplete", "off");
	}
	if (inputName.value.length > 50) {
		inputName.setCustomValidity("Precisa ter menos que 50 caracteres");
	} else {
		inputName.setCustomValidity("");
	}
	console.log(inputName.value.length);
});

inputEmail.addEventListener("input", () => {
	inputEmail.setAttribute("autocomplete", "on");
	if (inputEmail.value === "") {
		inputEmail.setAttribute("autocomplete", "off");
	}
});

inputAssunto.addEventListener("input", () => {
	if (inputAssunto.value.length > 50) {
		inputAssunto.setCustomValidity("Precisa ter menos que 50 caracteres");
	} else {
		inputAssunto.setCustomValidity("");
	}
});

inputMessage.addEventListener("input", () => {
	if (inputMessage.value.length > 300) {
		inputMessage.setCustomValidity("Precisa ter menos que 300 caracteres");
	} else {
		inputMessage.setCustomValidity("");
	}
});
