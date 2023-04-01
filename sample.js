// let a= prompt("enter the any number");
// var b=Math.sqrt(a);
// console.log(a);
// console.log(b)


//swap two variable  using third variable
let a=2;
let b=5;
console.log("before swapping"+"   a=  "+a+"  b=  "+b)

// var temp=a;
// a=b;
// b=temp;
// console.log("after swapping"+"a=  "+a+"b=  "+b)


//using destructuring
a=a^b;
b=a^b;
a=a^b;
console.log("after swapping"+"a=  "+a+"b=  "+b)




// for (let i = 1; i <= 5; i++) {
//   let f = i % 3 == 0,    
//     b = i % 5 == 0;
//   console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
// }
