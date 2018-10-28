function sumOfOther(arr) {
	const sum = arr.reduce((acc, item) => acc + item);
	return arr.map(item => sum - item);
}
sumOfOther([2, 3, 4, 1]);