function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
let yourArms = yourLeft + yourRight;
let friendArms = friendsLeft + friendsRight;

return yourArms === friendArms;
}

 console.log(areEquallyStrong(10, 15, 15, 10))
 console.log(areEquallyStrong(15, 10, 15, 10))
 console.log(areEquallyStrong(15, 10, 15, 9))
