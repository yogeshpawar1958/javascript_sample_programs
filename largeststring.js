 var str="par yogesh aba sai ram om"

var max=Number.MIN_VALUE
var min=Number.MAX_VALUE
large=""
small=""
 var str2=str.split(' ')
  for(i=0;i<str2.length;i++)
  {
    if(str2[i].length>max)
    {
      max=str2[i].length
      large=str2[i]
      
    }else if(str2[i].length<min){
        min=str2[i].length;
        small=str2[i]
    }
  }
  console.log("largest string==  "+large)
  console.log("smallest string==  "+small)


*******************************************OR*********************************************
   var str="par yogesh aba sai ram om sangamner bolao m"
str=str.split(" ");
largest=str[0]
small=str[0]
for(let i=0;i<str.length;i++){
    if(str[i].length>largest.length){
        largest=str[i]
    }
    if(str[i].length<small.length){
        small=str[i]
    }
}
console.log("largest==>",largest)
console.log("smallest string is ",small)
