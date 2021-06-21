var arr=[2,4,22,66,77,33,12,54,76,90,2,900,-2,-100];

var max=Number.MIN_VALUE;

var min=Number.MAX_SAFE_INTEGER
for(i=0;i<=arr.length-1;i++)
{
  if(arr[i]>=max)
  {
    max=arr[i];
  }
  
  if(arr[i]<=min)
  {
    min=arr[i];
  }
}
console.log("min number "+min)
console.log("max number "+max)