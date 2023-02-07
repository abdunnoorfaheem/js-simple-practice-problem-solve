// problem-1
//mindGame(number) function : here We  multiply that parameter number by 3, then add 10, then divide by 2, then subtract 5, and return the value.

function mindGame(number) {

    if (number > 0) {
        const multiple = ((number * 3) + 10) / 2;
        let subtraction = multiple - 5;

        return subtraction;

    } else {


        return 'Enter valid Number';

    }




}
let numberInput = 33;
let result = mindGame(numberInput);
console.log(result);


//problem-2 

//Here we write function then function  have string parameter input then the output should be given based on the total number of characters in the String,return output will be even or odd

function evenOdd(strInput) {
    let input = strInput;

    if (input >= 0 || input < 0) {

        return 'invalid input';
    }

    if (input.length % 2 == 0) {

        return 'even';
    } else {

        return 'odd';
    }



}
let stringInput = 'chatgpt';
const resultStr = evenOdd(stringInput);
console.log(resultStr);
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
let output = isLGSeven(inputNumber);
console.log(output);