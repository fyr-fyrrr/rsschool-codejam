module.exports = function sumOfOther(arr) {
  if (arr.length < 1) {
    return arr;
  }
  const sum = arr.reduce((acc, item) => acc + item);
  return arr.map(item => sum - item);
};
