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