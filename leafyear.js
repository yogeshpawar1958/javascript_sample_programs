var year=2023;
if(year%4==0)
{
    if(year%100==0)
    {
        if(year%400==0){
            console.log(year+"this is leap year")
        }else{
            console.log("this is not leaf year")
        }
    }else{
        console.log(year+"this is leap year")
    }
}else{
    console.log("this is not leaf year")
        }
