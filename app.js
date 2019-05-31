//Impure Function
//The below function is impure as it takes same value X every time it's being called and returns a different value.
let x = 1;

let impureInc= () => {
 x +=1
console.log(x)

return x
}

impureInc()
impureInc()
impureInc()


//Pure Function
//The below function is pure as it takes same value 'num' every time it's being called and returns same value.

let pureInc = num => {

num +=1
console.log(num)
return num
}
pureInc(1)
pureInc(1)
pureInc(1)
