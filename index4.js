//problem-4 
//findingBadData() this function find the negative array number and return the value
function findingBadData(array) {

    for (let i = 0; i < array.length; i++) {
        let number = array[i];
        // if (number < 0 || number >= 0) {}
        if (Array.isArray(number) !== false) {
            console.log("Input is not valid");
            // return "Input is not valid";


        } else if (number < 0) {
            count = count + 1;
            // console.log(emptyArr);

        }
    }
    return count;






}
let count = 0;
let arrInput = [2, -5, -7, -13];
let result = findingBadData(arrInput);
console.log(count);