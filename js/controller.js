const questionDOM = document.querySelector("#question");
const pragma = async function () {
	const handler = await fetch("rand.json");
	const response = await handler.json();
	return response;
};

const processPragma = async function () {
	const response = await pragma();
	const loadExamInterface = function () {
		let index = localStorage.setItem("index", 0) || 2;
		const question = response[index].question;
		const options = response[index].options;
		const createOptions = () => {
			let i = 0;
			while (i < options.length) {
				const label = document.createElement("label");
				const inputRadios = document.createElement("input");
				inputRadios.setAttribute("type", "radio");
				inputRadios.setAttribute("name", `question${index}`);
				label.appendChild(inputRadios);
				i++;
			}
		};
		console.log(createOptions());
		questionDOM.textContent = question;
	};

	loadExamInterface();
};

processPragma();
