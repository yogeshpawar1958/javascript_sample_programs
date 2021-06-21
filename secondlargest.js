var arr=[23,21,11,6,5,90,65,2,91];
var max=Number.MIN_VALUE;
var second=Number.MIN_VALUE;

for(i=0;i<arr.length;i++){
    if(arr[i]>max){
        second=max;
        max=arr[i];
    }else if(arr[i]>second){
       
        
    second=arr[i]
    }
}
console.log("second largest number= "+second)
console.log(" largest number= "+max)