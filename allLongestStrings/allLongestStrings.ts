function allLongestStrings(inputArray: string[]): string[] {
    let longestWord = inputArray.reduce((a, b) => a.length > b.length ? a : b);
    let arr = [];

    for (let i = 0; i < inputArray.length; i++){
        if (inputArray[i].length === longestWord.length){
            arr.push(inputArray[i]);
        }
    }
    return arr;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));