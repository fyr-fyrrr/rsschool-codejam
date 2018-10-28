make(15)(34, 21, 666)(41)(sum);
function sum(a, b) {
    return a + b;
}
function make(firstValue) {
    return function (secondValue, thirdValue, fourthValue) {
        return function (fifthValue) {
            return function (sum) {
                return [firstValue, secondValue, thirdValue, fourthValue, fifthValue].reduce(sum);
            }
        }
    }
}