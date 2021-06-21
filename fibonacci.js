let first=0;
let second=1;
console.log(first);
console.log(second);

for(let i=1;i<=10;i++)
{
    var next=first+second;
    console.log(next);
    first=second;
    second=next;

}