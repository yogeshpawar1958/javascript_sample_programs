var n=131;
var rem=0;
rev=0;
temp=n;
while(n>0){
    rem=n%10;
     rev=rev*10+rem;
     n=parseInt(n/10);

}
if(rev==temp){
    console.log("number is palindrom")
}else{
    console.log("number is not palindrom")
}
