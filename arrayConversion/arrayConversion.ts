function arrayConversion(inputArray: number[]): number {
let arr = [];
let arr2 = [];
for (let i = 0; i < inputArray.length - 1; i+=2) {
    arr.push(inputArray[i] + inputArray[i+1])
}
for (let j = 0; j < arr.length - 1; j+=2) {
    arr2.push(arr[j] * arr[j+1]);
}
return arr2[0]+ arr2[1];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
