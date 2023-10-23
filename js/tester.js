const dayFunc = (() => {
	let day = 1;
	console.log(`Day ${day}`);
	return () => {
		day += 1;
		console.log(`Day ${day}`);
	};
})();
