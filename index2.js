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
const result = evenOdd(stringInput);
console.log(result);