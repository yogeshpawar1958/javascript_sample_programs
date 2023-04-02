var a=[23,32,56,3,12,7];
var b=a.sort((a,b)=>{
   return a-b; //for descending order b-a
})
console.log(b)


//usingbubble sort 
const arr=[1,22,12,45,32,65,33]

for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
    if(arr[i]>arr[j]){
        let temp=arr[i]
        arr[i]=arr[j]
        arr[j]=temp
    }
}
}
console.log(arr)
