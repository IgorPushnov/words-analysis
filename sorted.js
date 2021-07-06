function sortedStatistic(list) {
	const sortedList = {};
	Object.keys(list).sort((a, b) => list[b] - list[a]).forEach((key) => {
		sortedList[key] = list[key];
	});
	return sortedList;
}

module.exports = sortedStatistic;