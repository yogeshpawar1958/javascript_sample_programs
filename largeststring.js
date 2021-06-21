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