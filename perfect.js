var val=4996;
var count=0;
for(i=1;i<=val/2;i++){
    if(val%i==0)
    {
        count+=i
    }
}
if(count==val)
{
    console.log("perfect number")
}else{
    console.log("number is not perfect")
}