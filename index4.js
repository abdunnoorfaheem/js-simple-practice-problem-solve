//problem-4 
//Here we declare function findingBadData()  this function find the negative array number and return the value
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
let result = findingBadData(arrInput);
console.log(count);