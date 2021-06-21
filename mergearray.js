var arr1=[2,45,32,12,2];
var arr2=[44,65,1,54,2,32];
var arr3=[...arr1];
arr3=arr3.push(...arr2)
console.log(arr3);
//remove duplicate element
var res =new Set(arr3);
console.log(res)
// var r= new Set(arr1);
// console.log(r)