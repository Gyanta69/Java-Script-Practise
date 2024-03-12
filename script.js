let javascriptIsFun = true ;
console.log(javascriptIsFun);
// avoid using var for assigning variable 
// const is used to make same variable name unuseable for multiple time
// same variable name starting with let can be used multiple time
// const pragyan = "is a good boy";

// console.log(pragyan)

// const firstName ='Pragyan';
// const lastName ='Khadka';
// const birthYear ='1998';
// const year = 2024;

// const hh =2039;
/* 
const age = 6;
const isOldEnough = age >= 18;
if(isOldEnough){
    console.log("sarah can strat for driving liscence");
}else{
    const yearsLeft = 18 - age;
    console.log(`sarah is too young.wait another ${yearsLeft} years`);
}

const birthYear = 1991;
let century;
if(birthYear<=2000){
    century = 20;
} else {
    century = 21;
}
console.log(century)*/



/*
const massMark = 95;
const heightMark =1.88;
const massJohn = 85;
const heightJohn =1.76;
const BMIMark = massMark/heightMark ** 2;
const BMIJohn = massJohn/(heightJohn * heightJohn);
console.log(BMIMark,BMIJohn);

if(BMIJohn > BMIMark){
    console.log(`John's BMI ${BMIJohn} is greater than the Mark's BMI ${BMIMark}`)
} else{
    console.log(`Mark's BMI ${BMIMark} is greater than the John's BMI ${BMIJohn}`)
}
*/
/*Type conversion and Type coercion in js

  Type conversion in Js
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(23));

  Type coercion
console.log('I am '+ 23 + 'years old');
console.log( '23' - '10');
console.log('21'/'3');

let n = '1'+ 1;
n = n - 1;
console.log(n);
 */

/*falsey value in Javascripts
console.log(Boolean(0));// 0 returns false by defult
console.log(Boolean(undefined));// undefine returns false by defult
console.log(Boolean('Pragyan'));
console.log(Boolean({}));
console.log(Boolean(''));// empty string is also a false by defult

1.for example,if we interchange the value of money then we can see different outputs due to falsey property of 0
const money = 0;
if (money){
    console.log("Don't spend it all!")
} else{
    console.log("You should get a job!")
}

2.for an undefined variable
let height;
if (height){
    console.log("The height is defined")
} else {
    console.log("The height is not defined")
}
*/


/**/
//Operators == and ===
// === returns the value strictly as false if the assigned number is in string format
const age = 18
if(age === 18){
    console.log("You just became an adult(Strict)")
}
// == returns the value  as true even if the assigned number is in string format
if(age == 18){
    console.log("You just became an adult(loose)")
}

