//problem-3
// Here isLGSeven(number) function first we need to find the difference between the input value and 7 then if this difference is smaller than 7,  return the subtraction or  return double of the input. 
function isLGSeven(number) {

    if (number < 7) {
        let value = number - 7;

        return value;
    } else {
        return number * 2;
    }







}
let inputNumber = -15;
let result = isLGSeven(inputNumber);
console.log(result);