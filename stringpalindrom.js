var str="madam";
let len=str.length;
var rev="";
for(var i=len-1 ;i>=0;i--)
{
    rev+=str[i];
}
console.log(str,rev)
if(str==rev){
    console.log("string is palindrom")
}else{
    console.log("string is not palindrom")
}