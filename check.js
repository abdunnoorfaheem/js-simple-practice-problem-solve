// problem-1
//mindGame(number) function : here We multiply that parameter number by 3, then add 10, then divide by 2, then subtract 5, and return the value.
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
//Here we write function then function have string parameter input then the output should be given based on the total number of characters in the String,return output will be even or odd
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
// Here isLGSeven(number) function first we need to find the difference between the input value and 7 then if this difference is smaller than 7, return the subtraction or return double of the input.
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
//problem-4
//Here we declare function findingBadData() this function find the negative array number and return the value
let arrInput = [2, -5, -7, -13];
let count = 0;

function findingBadData(array) {
    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        if (Array.isArray(number) !== false) {
            return "Input is not valid";
        } else if (number < 0) {
            count = count + 1;
        }
    }
    return count;
}
let resultBadData = findingBadData(arrInput);
console.log(resultBadData);
//problem-5
//Here gemsToDiamond() function we find how many diamonds you will get in total by combining the gems of all friends,the number of total diamond is over 1000, then get as many diamonds as are left by subtracting 2000 from the total diamond.
function gemsToDiamond(forFirstFriend, forSecondFriend, forThirdFriend) {
    let firstFriendGemsPower = 21 * forFirstFriend;
    let secondFriendGemsPower = 32 * forSecondFriend;
    let thirdFriendGemsPower = 43 * forThirdFriend;
    let totalGems = firstFriendGemsPower + secondFriendGemsPower + thirdFriendGemsPower;
    if (totalGems > 0) {
        if (totalGems >= 2000) {
            let total = totalGems - 2000;
            return total;
        } else {
            return totalGems;
        }
    } else {
        return 'Enter valid input';
    }
}
let inputOne = 20;
let inputTwo = 200;
let inputThree = 50;
let resultOfGems = gemsToDiamond(inputOne, inputTwo, inputThree);
console.log(resultOfGems);