function findingBadData(arr) {
    let emptyArr = [];
    for (let i = 0; i < arr.length; i++) {
        let numbers = arr[i];
        // console.log(numbers);
        if (numbers >= 0 || numbers < 0) {

            if (numbers < 0) {
                emptyArr = emptyArr + numbers;
                // const digit = emptyArr.length;
                // console.log(emptyArr);
                // console.log(digit);
                let length = emptyArr.length();
                console.log(length);



            }
            // console.log(numbers);
        }




    }
    // return emptyArr;
    console.log(emptyArr);


}
let arrNumber = [2, -5, -7, -13, 1];
let output = findingBadData(arrNumber);
// console.log(output);