//var a=41;

for(var j=1;j<=100;j++)
{
    var flag=true;
for( var i=2;i<=j/2;i++)
{
    if(j%i==0){
        flag=false;
        break;
    }
}
if(flag==true){
    console.log(j)
}

}