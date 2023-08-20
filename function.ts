

function sum(num1:number, num2:number){
    let result = num1 +num2
    console.log('The Sum of '+num1 +' and ' +num2 +' is '+ result);
}



sum(12,34)
sum(24,54)

let arrowfunc = (a:number, b:number)=>{

    var result = a+b
    console.log(result)
}

arrowfunc(12,21)

let multiply = (x:number, y:number):number =>{

    return x*y;
}

console.log("Multiply is "+multiply(2,5))



let divide = (x1:number, y1:number) => x1/y1;

console.log("Divide is "+divide(10,5))