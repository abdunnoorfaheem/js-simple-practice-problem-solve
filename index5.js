//problem-5 
//Here gemsToDiamond() function  we find how many diamonds you will get in total by combining the gems of all friends.If the number of total diamond is over 1000, then  get as many diamonds as are left by subtracting 2000 from the total diamond.
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