function absoluteValuesSumMinimization(a: number[]): number {
if (a.length % 2 === 0) {
        return a[Math.floor((a.length - 1) / 2)];
    }
     return a[Math.round((a.length - 1) / 2)];
}

// console.log(absoluteValuesSumMinimization([2, 4, 7]));
//console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
// console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));