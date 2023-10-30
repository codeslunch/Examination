const load__exam = async function () {
	const handler = await fetch("./json/rand.json");
	const response = await handler.json();
	return response;
};
const display__exam = async function () {
	const prev = document.querySelector("#backward");
	const next = document.querySelector("#forward");
	const demo = document.querySelector("#demo");
	let key;
	const handler = await load__exam();
	key = 0;
	demo.innerText = handler[key].question;

	prev.addEventListener("click", function () {
		if (key > 0) {
			key -= 1;
			demo.innerText = handler[key].question;
		}
	});

	next.addEventListener("click", () => {
		const totalQuestionsCount = handler.length - 1;
		if (key < totalQuestionsCount) {
			key += 1;
			demo.innerText = handler[key].question;
		}
	});
};
display__exam();
