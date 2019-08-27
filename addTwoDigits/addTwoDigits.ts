function addTwoDigits(n: any): number {
const arr = n.toString().split('');

return arr.reduce((a,b) => parseInt(a) + parseInt(b));
}

 console.log(addTwoDigits(29));