
var width:number = 5;
var length:number = 10;

var areaOfRectangle:number = width * length;


// Output the results
console.log("Area of rectangle: " + areaOfRectangle);

// Volume of cube

var sideLength: number = 5;
var volume: number = sideLength ** 3;

console.log(`The volume of the cube with side length ${sideLength} is: ${volume}`);

//Even or Odd

var numb:number = 2
if(numb % 2 == 0){
  console.log(" Its even.")
}
else{
  console.log(" Its odd.")
}

//Mathematical expresssions
var result = ((10 + 5) * 3 - 2) / (4 % 3) - 7 - 5;

console.log(`The result of the expression is: ${result}`);

//Exercise 5:  Write a program that determines if a person is 
//eligible to vote based on their age.

var age:number = 20;

if(age >= 18) {
  console.log('Yes you are eligible to voting')
}else{
  console.log('orry, you not are eligible to voting')
}

// is Positive ar negative

var x:number = -2
if(x >= 0){
  console.log('number is positive.')
}else if(x == 0){
  console.log('number is  zero.')
}
else{
  console.log('number is  negative.')

}


// for(var i = 0; i <= 5; i++){
//   if(i == 2){
//   console.log(' Index is', i, ' value print')
// }
// else if(i == 3){
//     console.log(' Index is', i, ' value print')
//     }
// }


// if conditions

// var a:number = 12;
// var b:number = 12;

// if( a != b){
//   console.log("Hello World")  // false
  
// }
// if( a == b ){
//   console.log("Hello World")  // true
  
// }

// if(1<2){
//   console.log("Parent")
//   if(2>1){
//   console.log("child")
//   if(3 <= 1){
//     console.log("leaf")
//     }
//   }
// }

// var check = (3 <= 1) ? "True" : "False";
// console.log(check)