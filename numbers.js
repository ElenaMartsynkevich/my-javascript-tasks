// Task 1:
// Даны 2 целых числа, найти сумму их цифр (не приводить к строке)
// Например:  235 и 654  => 2 + 3 + 5 + 6 + 5 +4

function sumNumbers(num1, num2) {
    let firstNum1 = Math.floor(num1 / 100);
    let firstNum2 = Math.floor((num1 - (firstNum1 * 100)) / 10);
    let firstNum3 = (Math.floor((num1 - (firstNum1 * 100)))) - ((Math.floor((num1 - (firstNum1 * 100))/ 10)) * 10);
    let secondNum1 = Math.floor(num2 / 100);
    let secondNum2 = Math.floor((num2 - (secondNum1 * 100)) / 10);
    let secondNum3 = (Math.floor((num2 - (secondNum1 * 100)))) - ((Math.floor((num2 - (secondNum1 * 100))/ 10)) * 10);
 
    return firstNum1 + firstNum2 + firstNum3 + secondNum1 + secondNum2 + secondNum3
 
 }
 console.log(sumNumbers(235, 654));


 // Task 2:
// Даны 2 целых числа, найти минимальную цифру 
// Например:  235 и 654  => 2

function minNumber(num1, num2) {
    let firstNum1 = Math.floor(num1 / 100);
    let firstNum2 = Math.floor((num1 - (firstNum1 * 100)) / 10);
    let firstNum3 = (Math.floor((num1 - (firstNum1 * 100)))) - ((Math.floor((num1 - (firstNum1 * 100))/ 10)) * 10);
    let secondNum1 = Math.floor(num2 / 100);
    let secondNum2 = Math.floor((num2 - (secondNum1 * 100)) / 10);
    let secondNum3 = (Math.floor((num2 - (secondNum1 * 100)))) - ((Math.floor((num2 - (secondNum1 * 100))/ 10)) * 10);
    
 
    if (firstNum1 <= firstNum2 && firstNum1 <= firstNum3 && firstNum1 <= secondNum1 && firstNum1 <= secondNum2 && firstNum1 <= secondNum3) {
       
       return firstNum1;
    } else if (firstNum2 <= firstNum1 && firstNum2 <= firstNum3 && firstNum2 <= secondNum1 && firstNum2 <= secondNum2 && firstNum2 <= secondNum3) {
       return firstNum2;
    } else if (firstNum3 <= firstNum1 && firstNum3 <= firstNum2 && firstNum3 <= secondNum1 && firstNum3 <= secondNum2 && firstNum3 <= secondNum3) {
       return firstNum3;
    } else if (secondNum1 <= firstNum1 && secondNum1 <= firstNum2 && secondNum1 <= firstNum3 && secondNum1 <= secondNum2 && secondNum1 <= secondNum3) {
       return secondNum1;
    }else if (secondNum2 <= firstNum1 && secondNum2 <= firstNum2 && secondNum2 <= firstNum3 && secondNum2 <= secondNum1 && secondNum2 <= secondNum3) {
       return secondNum1;
    }else if (secondNum3 <= firstNum1 && secondNum3 <= firstNum2 && secondNum3 <= firstNum3 && secondNum3 <= secondNum2 && secondNum3 <= secondNum1) {
       return secondNum1;
    }
 
 }
 console.log(minNumber(235, 654));

 // Task 3:
// Даны 2 целых числа, посчитать количнство максимальных цифр в числах 
// Например:  265 и 654  => 2 (т.к  max = 6)

function maxCountNumber(num1, num2) {
    let firstNum1 = Math.floor(num1 / 100);
    let firstNum2 = Math.floor((num1 - (firstNum1 * 100)) / 10);
    let firstNum3 = (Math.floor((num1 - (firstNum1 * 100)))) - ((Math.floor((num1 - (firstNum1 * 100))/ 10)) * 10);
    let secondNum1 = Math.floor(num2 / 100);
    let secondNum2 = Math.floor((num2 - (secondNum1 * 100)) / 10);
    let secondNum3 = (Math.floor((num2 - (secondNum1 * 100)))) - ((Math.floor((num2 - (secondNum1 * 100))/ 10)) * 10);
    
 let maxNumber = 0;
 let maxNumberCount = 0;
 if (firstNum1 >= firstNum2 && firstNum1 >= firstNum3 && firstNum1 >= secondNum1 && firstNum1 >= secondNum2 && firstNum1 >= secondNum3) {
    maxNumber = firstNum1;    
    maxNumberCount++;
 } else if (firstNum2 >= firstNum1 && firstNum2 >= firstNum3 && firstNum2 >= secondNum1 && firstNum2 >= secondNum2 && firstNum2 >= secondNum3) {
    maxNumber = firstNum2;   
    maxNumberCount++;
 } else if (firstNum3 >= firstNum1 && firstNum3 >= firstNum2 && firstNum3 >= secondNum1 && firstNum3 >= secondNum2 && firstNum3 >= secondNum3) {
    maxNumber = firstNum3;   
    maxNumberCount++;
 } else if (secondNum1 >= firstNum1 && secondNum1 >= firstNum2 && secondNum1 >= firstNum3 && secondNum1 >= secondNum2 && secondNum1 >= secondNum3) {
    maxNumber = secondNum1;   
    maxNumberCount++;
 }else if (secondNum2 >= firstNum1 && secondNum2 >= firstNum2 && secondNum2 >= firstNum3 && secondNum2 >= secondNum1 && secondNum2 >= secondNum3) {
    maxNumber = secondNum2;
    maxNumberCount++;
 }else if (secondNum3 >= firstNum1 && secondNum3 >= firstNum2 && secondNum3 >= firstNum3 && secondNum3 >= secondNum2 && secondNum3 >= secondNum1) {
    maxNumber = secondNum3;
    maxNumberCount++;
 }
 console.log (maxNumberCount)
 }
 console.log(maxCountNumber(265, 634));


 // Task 4:
// Получить N-ое число последовательности фибоначи

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
 }
 console.log(fib(7));

 // Task 5:
// Возвести число N в степень M

function multiply(n1, n2) {
    return n1 ** n2;
 }
 console.log(multiply(7, 2));

 // Task 6:
// Найти факториал числа N

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
 }
 console.log(factorial(5));

 // Task 7:
// Дано число N. Если число меньше 100, то вывести его, иначе вывести ошибку.
// Реализовать метод в 1-у строку


function whatIsNumber(n) {
    return (n <= 100) ? n : "error" ;
 }
 console.log(whatIsNumber(109));

 // Task 8:
// Реализовать метод калькулятор для 2-х целых чисел. Калькулятор должен поддерживать:
// - сложение
// - вычитание
// - деление
// - умножение
// Реализовать 2-мя способами: через if и switch





// Task 9:
// Напишите функцию, которая переворачивает число


function reverseNum(num) {
    return (
       parseFloat(
         num
           .toString()
           .split('')
           .reverse()
           .join('')
       ) * Math.sign(num)
     )                 
 }
 console.log(reverseNum(107));

 // Task 10:
// Напишите функцию, которая проверяет, является ли число простым или нет.


function simpleNum(n) {
    if (n===1)  {
       return false;
     }
     else if(n === 2)  {
       return true;
     } else   {
       for(var x = 2; x < n; x++)  {
         if(n % x === 0) {
           return false;
         }
       }
       return true;  
     }              
 }
 console.log(simpleNum(10));

 // Task 11:
// Напишите функцию, которая проверяет, является ли число идеальным или нет.
//https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D0%B5_%D1%87%D0%B8%D1%81%D0%BB%D0%BE


function idealNum(number) {
    var temp = 0;
    for(var i=1;i<=number/2;i++) {
          if(number%i === 0) {
             temp += i;
           }
      }
   
      if(temp === number && temp !== 0) {
        console.log("Это идеальное число.");
         }  
       else {
        console.log("Это не идеальное число.");
         }            
 }
 console.log(idealNum(6));

 // Task 12:
//  Напишите функцию, которая проверяет является ли число четным или нет


function evenNum(number) {
    if (number % 2 === 0) {
     return true
    } else {
     return false
    }        
  }
  console.log(evenNum(5));

  // Task 13:
// Дано целое число. Напишите функцию, которая рисует n строк по след шаблону
// *  
//* *  
//* * *  
//* * * *  
//* * * * * 


function drawLine(number) {
    let i = 0;
    let result = "";
    while (i <= number){
      result = `${result}${"*"}`;
      console.log( result);
      i++;
    }       
   }
   console.log(drawLine(5));


   // Task 14:
// Дано целое число. Напишите функцию, которая рисует n строк по след шаблону
//    *  
//   * *  
//  * * *  
// * * * *  
//* * * * * 





// Task 15:
// Напишите функцию, которая преобразует двоичного числа в десятичное число



function digit(number) {
    return parseInt((number + '')
     .replace(/[^01]/gi, ''), 2);   
 }
 console.log(digit(110011));

 
 // Task 16:
// ННапишите функцию, которая генерирует случайное целое число в диапазоне от N до M


function randomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
 }
 console.log(randomNum(10, 15));


 // Task 17:
// ННапишите функцию, которая генерирует случайное дробное число в диапазоне от N до M


function randomNum(min, max) {
   
    return  Math.random() * (max - min) + min;
 }
 console.log(randomNum(10, 15));


 // Task 18:
// Напишите функцию, которая генерирует случайное число с точностью до указанного десятичного знака


function randomNum(min, max, count) {
   
    let num = Math.random() * (max - min) + min;
    return num.toFixed(count)
 }
 console.log(randomNum(10, 15, 3));

 
 // Task 19:
//  Напишите функцию, которая определяет является ли число степенью N


// Task 20:
// Даны 3 целых числа. Напишите функцию, которая определяет какой треугольник из 
//этих чисел получится: равносторонний, равнобедренный или обычный. Предусмотреть валидацию, в случае невалидных значений


function triangle(a, b, c) {
    if ( (a + b > c) || (a + c > b) || (b + c > a)) {
       if (a === b && b === c){
          return "equilateral triangle"
       } else if ((a === b && b !== c) || (b === c && b !== c) || (a === c && c !== b)){
          return "isosceles triangle"
       } else {
          return "usual"
       }
 
    } else {
       return "invalid triangle"
    }
    
 }
 console.log(triangle(7, 29, 12));

 // Task 21:
// Дана цена товара в рублях.  Переведите ее в доллары.  Курс должен передаваться, как параметр функции


function dollars(rub) {
    let course = 50;
    return Math.round(rub / course)
 }
 console.log(dollars(1052));

 // Task 22:
// Напишите функцию, которая находит площадь треугольника


function triangleSquare(a, b, c) {
    //Определяем площадь треугольника, по двум параметрам a и b - длины треугольника, c - угол между ними в градусах.
   
       return Math.round(1 / 2 * a * b * Math.sin((c * Math.PI) / 180));
   }
   
   console.log(triangleSquare(10, 16, 35));

   // Task 23:
// Каждый месяц банк начисляет к сумме вклада 4% от суммы. Напишите функцию, которая по заданной сумме и количество месяцев, 
//вычисляет конечную сумму вклада с учетом начисления процентов за каждый месяц.


function deposit(sum, month) {
    let i = month;
    let result = sum;
    while (i <= 12 ) {
      result = (result / 100 * 4) + result;
      i++;
    }
    return Math.round(result);
   }
   
   console.log(deposit(1500, 1));

   // Task 24:
// Напишите функцию, которая принимает параметром число от 1 до 7, и возвращает день недели на русском языке.


function weekDay(num) {
    if (num === 1){
      return "понедельник"
    }else if (num === 2){
      return "вторник"
    }else if (num === 3){
      return "среда"
    }else if (num === 4){
      return "четверг"
    }else if (num === 5){
      return "пятница"
    }else if (num === 6){
      return "суббота"
    }else if (num === 7){
      return "воскресенье"
    }
   }
   
   console.log(weekDay(1));

// Task 25:
// Напишите функцию, которая проверяет, что это число не делится ни на одно другое число кроме себя самого и единицы.


function simpleNumber(n) {
    if (n===1)  {
       return false;
     }
     else if(n === 2)  {
       return true;
     } else   {
       for(var x = 2; x < n; x++)  {
         if(n % x === 0) {
           return false;
         }
       }
       return true;  
     }  
 }
 
 console.log(simpleNumber(5));


 // Task 26:
// Известны количество жителей в государстве и площадь его территории. Определить плотность населения в этом государстве.


function densityOfPopulation(human, square) {
    return human / square
   }
   console.log(densityOfPopulation(60, 230));

   // Task 27:
//  Составить программу решения линейного уравнения ax+b=0 (a ≠ 0).


function equation(a, b) {
    let x = 0;
 if (a !== 0) {
  return (0 - b) / a
 }
 }
 console.log(equation(4, 20));
 // Task 28:
//Возраст Тани — X лет, а возраст Мити — Y лет. Найти их средний возраст, 
//а также определить, на сколько отличается возраст каждого ребенка от среднего значения. 


function ageChildren(a, b) {
    let middleAge = (a + b) / 2
  console.log ("middle age is " + middleAge) 
  console.log ( "Difference with Tany's age is " + Math.abs(middleAge - a))
  console.log ( "Difference with Mitya's age is " + Math.abs(middleAge - b))
 }
 console.log(ageChildren(4, 20));

 // Task 29:
// Два автомобиля едут навстречу друг другу с постоянными скоростями V1 и  V2 км/час. 
//Определить, через какое время автомобили встретятся, если расстояние между ними было S км.


function carMeet(a, b, s) {
    return (s / (a + b)).toFixed(2);
 }
 console.log(carMeet(10, 20, 100));

 // Task 30:
//Рассчитать значение у при заданном значении х:
//y=sin(x) при x>0 или y=cos(x) в противном случае.


// Task 31:
//Дано трехзначное число. Определить, какая из его цифр больше


function bigNumber(num1) {
   let firstNum1 = Math.floor(num1 / 100);
    let firstNum2 = Math.floor((num1 - (firstNum1 * 100)) / 10);
    let firstNum3 = (Math.floor((num1 - (firstNum1 * 100)))) - ((Math.floor((num1 - (firstNum1 * 100))/ 10)) * 10);
    if (firstNum1 >= firstNum2 && firstNum1 >= firstNum3){
      return firstNum1;
   } else if (firstNum2 >= firstNum1 && firstNum2 >= firstNum3 ) {
      return firstNum2;
   } else if (firstNum3 >= firstNum1 && firstNum3 >= firstNum2) {
      return firstNum3;
   }
}
console.log(bigNumber(299));

// Task 32:
//Мастям игральных карт условно присвоены следующие порядковые номера: масти «пики» — 1, масти «трефы» — 2, масти бубны» — 3,
// масти «червы» — 4. По заданному номеру масти m (1 <= m <= 4) определить название соответствующей масти


function suitCard(num1) {
    switch (num1) {
      case 1:
         return "пики";
      case 2:
         return "трефы";
      case 3:
            return "бубны";
      case 4:
            return "червы";
   
    }
   }
   console.log(suitCard(4));

   // Task 33:
//  сумму всех целых чисел от 100 до 500;


function sum(min, max) {
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  }
 
 
 console.log(sum(1, 5));

 
 // Task 34:
// Написать в функцию, в которую передается неизвестное количество целых чисел. Функция возвращает их сумму


function sum(...args) {
    let sum = 0;
   for (let arg of args) sum += arg;
   return sum; 
  }
 console.log(sum(1, 5));