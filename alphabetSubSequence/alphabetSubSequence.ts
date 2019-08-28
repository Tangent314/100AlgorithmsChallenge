function alphabetSubsequence(s: string): boolean {
return Array.from(new Set(s.split('').sort())).join('') === s;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
