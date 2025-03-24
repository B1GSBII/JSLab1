function isInteger(num) {
    if (num % 1 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isInteger(1));    
console.log(isInteger(1.5)); 
console.log(isInteger(-0.5)); 

let first = Number(prompt("Введіть перше число"));
let second = Number(prompt("Введіть друге число"));
function findPrimes(a, b) {
    if (a % 1 === 0 & b % 1 === 0) {
         for (let i = a; i <= b; i++) {
            if (isPrime(i)) {
                console.log(i);
         }
    }
    } else {
        console.log("Числа не цілі");
    }
}
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
findPrimes(first, second);