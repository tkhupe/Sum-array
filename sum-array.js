// Write code to add all the numbers in `arr` and return the total

var sumArray = function(arr) {
    let sumArray= 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i];
        sumArray += sum;
    }
    return sumArray;

};
