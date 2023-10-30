const show__options = document.querySelector("#options");
const prev = document.querySelector("#backward");
const next = document.querySelector("#forward");
const demo = document.querySelector("#demo");
let key;
const yourAnswers = [];

const random__code = function () {
	const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
	const code = [];
	for (let a = 0; a < 6; a++) {
		code.push(chars[Math.floor(Math.random() * chars.length)]);
	}
	return code.join("");
};

const myCode = random__code();

const load__exam = async function () {
	const handler = await fetch("./json/db-exam-template-question.json");
	const response = await handler.json();
	return response;
};
const display__exam = async function () {
	const handler = await load__exam();
	key = 0;
	demo.innerText = handler[key].question;
	const display__options = function () {
		const wrapper = document.createElement("ul");
		let label, input, text;
		let i = 0;
		const options = handler[key].options;
		const len = options.length;
		while (i < len) {
			label = document.createElement("label");
			input = document.createElement("input");
			text = document.createTextNode(`${options[i]}`);
			input.setAttribute("type", "radio");
			input.setAttribute("name", myCode);
			input.setAttribute("class", myCode);
			label.appendChild(input);
			label.appendChild(text);
			wrapper.appendChild(label);
			show__options.appendChild(wrapper);
			i++;
		}
	};
	display__options();

	const allow_choices = () => {
		const classes = document.getElementsByClassName(`${myCode}`);
		for (let i = 0; i < classes.length; i++) {
			classes[i].addEventListener("change", function () {
				const check_answers = () => {
					const yourChoice = this.parentElement.textContent;
					yourAnswers[key] = {
						questionId: key,
						question: handler[key].question,
						yourChoice,
						correctAnswer: handler[key].correctAnswer,
					};
					const attempted = yourAnswers.filter((answer) => answer !== null);
					const unAttempted = Number(yourAnswers.length - attempted.length);
				};
				check_answers();
			});
		}
	};

	allow_choices();

	prev.addEventListener("click", function () {
		if (key > 0) {
			key -= 1;
			demo.innerText = handler[key].question;
			show__options.innerHTML = "";
			display__options();
			allow_choices();
		}
	});

	next.addEventListener("click", () => {
		const totalQuestionsCount = handler.length - 1;
		if (key < totalQuestionsCount) {
			key += 1;
			demo.innerText = handler[key].question;
			show__options.innerHTML = "";
			display__options();
			allow_choices();
		} else {
			// console.log(yourAnswers);
			const corr = yourAnswers.filter(
				(answer) => answer.yourChoice === answer.correctAnswer
			);
			console.log(corr);
		}
	});
};
display__exam();
