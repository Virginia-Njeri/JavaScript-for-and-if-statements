// number 1
for ( var i = 1; i <= 100; i++ )
{
  if ( i%3 === 0 && i%5 === 0 )
  {
    console.log( i ," FizzBuzz" );
  }
  else if ( i%3 === 0 ) 
  {
    console.log(i," Fizz" );
  }
  else if ( i%5 === 0 ) 
  {
    console.log(i," Buzz" );
  }
  else
  {
    console.log(i);
  }
}
// number 2
var sum = 0;
for (var x= 0; x < 1000; x++)
{
    if (x % 3 === 0 && x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);
// No 6
for( let year=2000; year<=2022; year++){ 
  if (year%4==0 && year%100!=0){

  
  console.log(year)
}

}

/* 5. Using conditional statements, write a JavaScript program to find the largest of the
# following two numbers: 10 & 40  */  

var a=40;
var b=10;
if (a>b){
  console.log(a,"is greater than b")
}
else{
  console.log(b,"is greater than a")
}

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output

// number 3
for (i=0;i<=20; i++){
  if (i%2!=0){
  console.log(i,"is odd")
  }

  if(i%2==0){
    console.log(i,"is even")

  }
}
//  Write a JavaScript conditional statement to find the largest of five numbers in the
//given array.
//Let num = [-2, 4,-5, 6,0]
// number 4 
let num = [-2, 4,-5, 6,0];
let great_number=[0]
for (let n=0;n<numbers.length;n++){
  if(num[n]>great_number){
    console.log(n,"is the largest number")
  }
  

}





 








