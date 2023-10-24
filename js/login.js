const email = window.prompt("Enter your Email ? ");
const password = window.prompt("Enter your password ? ");

if (email && password) {
	const params = {
		email,
		password,
	};
	const sync = async function () {
		const handler = await fetch("./backend/password-validation.php", {
			headers: {
				"Content-type": "application/json",
			},
			method: "POST",
			body: JSON.stringify(params),
		});
		const response = await handler.text();
		return response;
	};
	const handleReply = async function () {
		try {
			const response = await sync();
			console.log(response);
		} catch (error) {
			console.error(error);
		}
	};
	handleReply();
} else {
	console.log("Please enter required credentials ");
}
