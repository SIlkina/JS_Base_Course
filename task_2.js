/* Напишите программу, 
которая выводит на экран числа от 1 до 100. 
При этом вместо чисел, кратных трем, 
программа должна выводить слово Fizz, 
а вместо чисел, кратных пяти — слово Buzz. 
Если число кратно пятнадцати, 
то программа должна выводить слово FizzBuzz.
Задача может показаться очевидной, 
но нужно получить наиболее простое и красивое решение. */

for(var NUM = 1; NUM <= 100; NUM += 1)  {
    if(NUM % 15 === 0) {
        console.log('FizzBuzz');    
    } if(NUM % 5 === 0) {
        console.log('Buzz');
    } if(NUM % 3 === 0) {
        console.log('Fizz'); 
    }
    console.log(NUM);
    
}


/* var NUM = 1;
while(NUM <= 100) {
console.log(NUM);
NUM += 1;
if(NUM % 3 === 0) {
    console.log('Fizz');        
}if (NUM % 5 === 0) {
    console.log('Buzz');
}if(NUM % 15 === 0){
    console.log('FizzBuzz');
    
}
} */