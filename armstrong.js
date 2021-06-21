var n=153;
var temp=n;
var arm=0;
var rem;
while(n>0)
{
rem=n%10;
arm=arm+(rem*rem*rem);
n=parseInt(n/10);

}

if(temp==arm)
{
    console.log("given number is armstrong")
}else{
    console.log("given number is not armstrong")
}

