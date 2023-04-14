// Task 1:
// дан список целых чисел.Подсчитать количество отрицательных элементов


var arr = [2, 5, 9, 15, 0, 4, -9, -5 ];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0){
        sum++;
    }
}
console.log(sum);

// Task 2:
// дан список целый чисел. Получить новый список, состоящий из элементов старого списка, 
//циклически сдвинутых вправо на одну позицию. 
// Пример: [1, 2, 3], [3, 1, 2]

var arr = [1, 2, 3]
var k = 1;
for (i = 0; i < k; i++) arr.unshift(arr.pop());
console.log(arr);

// Task 3: 
// дан список целых чисел. Найти индекс и значение минимального элемента

indexOfSmallest ([3, 2, 4, 1]);
 
 function indexOfSmallest(a) {
        let lowest = 0;
        let value = 0;
        for (var i = 1; i < a.length; i++) {
            if (a[i] < a[lowest])
                lowest = i;
                value = a[i];
        }
        console.log("index is: " + lowest + " value is: " + value);
    }


// Task 4: 
// Дан массив целых чисел. Необходимо удалить все четные числа

let arr = [2, 5, 9, 15, 0, 4, -9, -5 ];
var withoutEven = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0){
        withoutEven = `${withoutEven},${arr[i]}`;
    }
}
console.log(withoutEven);


// Task 5: 
// Дан массив целых чисел. Необходимо вычислить сумму целых положительных чисел

let arr = [2, 5, 9, 15, 3.5, 4, -9, -5 ];
var sumPositive = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && Number.isInteger(arr[i])){
        sumPositive = `${sumPositive},${arr[i]}`;
    }
}
console.log(sumPositive.match(/\-?\d+/g).reduce((sum, el) => sum + +el, 0));

// Task 6: 
// Напишите функцию сортировки пузырьком для массива целых чисел

const bubbleSort = (coll) => {
    let stepsCount = coll.length - 1;
    // Значение переменной swapped показывает был ли
    // совершен обмен элементов во время перебора массива
    let swapped;
    do {
      swapped = false;
      // Перебираем массив
      for (let i = 0; i < stepsCount; i += 1) {
        // и меняем местами элементы, если предыдущий больше, чем следующий
        if (coll[i] > coll[i + 1]) {
          const temp = coll[i];
          coll[i] = coll[i + 1];
          coll[i + 1] = temp;
          // Если была совершена перестановка, присваиваем swapped значение true
          swapped = true;
        }
      }
      // Уменьшаем счетчик на 1, т.к. самый большой элемент уже находится
      // в конце массива
      stepsCount -= 1;
    } while (swapped); // продолжаем, пока swapped === true
  
    return coll;
  };
  
  console.log(bubbleSort([3, 2, 10, -2, 0])); 

  // Task 7: 
// Напишите функцию, которая возвращает произведение всех отрицательных чисел в массиве
// Написать решение в 1-у строку

let arr = [2, 5, 9, 15, 3.5, 4, -9, -5, -3 ];
var sumNegative = 1;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0 && Number.isInteger(arr[i])){
        sumNegative = sumNegative * arr[i];
    }
}
console.log(sumNegative);

// Task 8:
// Дан массив целых чисел. Напишите функцию, которая проверяет есть ли в нем два одинаковых числа подряд. 

function check(a) {
    for (var q = 1; q < a.length; ++q) {
      if (a[q] === a[q - 1]) {
        return true;
      }
    }
    
    return false;
  }
  
  console.log(check([3, 1, 1, 12]) ? "true" : "false");
  

// Task 9:
// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
var arr = [1, 2, 3, 4, 5];
 
for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// Task 10:
// Дан массив с числами. Выведите последовательно его элементы используя рекурсию и не используя цикл
var arr = [1, 2, 3, 4, 5];
 
for (var i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

// Task 11:
// Дан массив строк. Отсортируйте строки в алфавитном порядке
var arr = ['apple', 'orange', 'pineapple', 'banan'];
 console.log(arr.sort())


 // Task 12:
// Напишите функцию сортировки  со вставками для массива целых чисел



// Task 13:
// Дан массив с числами. Напишите функцию, которая вставляет число на место N в массиве
let arr = [1, 2, 5];

// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4
arr.splice(-1, 0, 3, 4);

console.log( arr ); 

// Task 14:
// Дан массив с числами. Напишите функцию, которая удаляет число на месте N в массиве


let arr = [1, 2, 3];
console.log( arr.splice(0, 2) ); 

// Task 15:
// Дан массив с числами. Напишите функцию, которая находит второй наименьший элемент в массиве.


let arr = [4, 1, 2, 3];
let sort = arr.sort()
console.log(sort[1])

// Task 16:
// Даны 2 массива. Напишите функцию, которая возвращает массив, который содержит разницу между 2-мя массивами

let firstArr = [4, 1, 2, 3];
let secondArr = [4, 5, 6, 3];
var difference1 = firstArr.filter(x => secondArr.indexOf(x) === -1);
var difference2 = secondArr.filter(x => firstArr.indexOf(x) === -1);
const all = [...difference1, ...difference2]
console.log(all);

// Task 17:
// Напишите функцию, которая клонирует заданный массив

let arr = [4, 1, 2, 3];
var clone = arr.slice(0);
console.log(clone);

// Task 18:
// Напишите функцию, которая удаляет повторяющиеся элементы массива


let arr = [4, 1, 1, 2, 3];
function removeDuplicates(arr) {
    return [...new Set(arr)]; //Эта функция использует объект Set, который хранит только уникальные значения, 
    //и затем преобразует его обратно в массив, используя оператор расширения ....
  }

console.log(removeDuplicates(arr));

// Task 19:
// Даны 2 массива. Напишите функцию, которая возвращает объедененный массив, который не содержит дублированных элементов


let firstArr = [4, 1, 2, 3];
let secondArr = [4, 5, 6, 3];
const all = [...firstArr, ...secondArr]
function removeDuplicates(all) {
    return [...new Set(all)];
  }

console.log(removeDuplicates(all));

// Task 20:
// Дан массив с числами. Выведите массив, который содержит квадраты всех элементов


let firstArr = [4, 1, 2, 3];
const map = firstArr.map(x => x ** 2);

console.log(map);

// Task 21:
// Напишите функцию, которая очищает массив от ложных значений: false, null, undefined, 0, –0, NaN и "" 


let arr = [4, 1, NaN, 2, null, 3, 0];
function cleanArray(arr) {
    return arr.filter(Boolean);
  }

console.log(cleanArray(arr));

// Task 22:
// Дан массив объектов. Напишите функцию, которая отсортирует массив объектов book по значению свойства title.
// books = [
// { author: "Хэленка", title: "Улетела" },
// { author: "Коул", title: "Аркан" },
// { author: "Райчел М", title: "Золотая" },
// ];

books = [
  { author: "Хэленка", title: "Улетела" },
  { author: "Коул", title: "Аркан" },
  { author: "Райчел М", title: "Золотая" },
  ];
  function byField(field) {
      return (a, b) => a[field] > b[field] ? 1 : -1;
    }

  books.sort(byField('title'));
  books.forEach(book => console.log(book.title));

  // Task 23:
// Дан массив объектов. Напишите функцию, которая принимает название свойства и возвращает массив,
// который содержит все значения данного свойства. !! Предусмотреть ситуацию, когда такое свойство не найдено
// books = [
// { author: "Хэленка", title: "Улетела" },
// { author: "Коул", title: "Аркан" },
// { author: "Райчел М", title: "Золотая" },
// ];
const books = [
  { author: "Хэленка", title: "Улетела" },
  { author: "Коул", title: "Аркан" },
  { author: "Райчел М", title: "Золотая" },
];
function getPropValues(books, propName) {
  const propValues = books.map(book => book[propName]).filter(value => value !== undefined);
  if (propValues.length === 0) {
    console.log(`Свойство "${propName}" не найдено`);
  }
  return propValues;
}

const authors = getPropValues(books, "author");
console.log(authors); // ["Хэленка", "Коул", "Райчел М"]

const genres = getPropValues(books, "genre");
// Свойство "genre" не найдено
console.log(genres); // []

// Task 24:
// Дан массив. Напишите функцию, которая удаляет все вхождения значения N



// Task 25:
// Дан массив. Напишите функцию, которая возвращает случайный элемент из массива
let arr = [4, 1, 2, 3, 0];
var rand = Math.floor(Math.random() * arr.length);
console.log(arr[rand]);

// Task 26:
// Напишите функцию, которая возвращает случайный элемент из массива

let arr = [4, 1, 2, 3, 0];
function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}
console.log(arrayRandElement(arr));

// Task 27:
// Напишите функцию, которая перемещает элемент из позиции N в позиции M

let arr = [4, 1, 2, 3, 0];
function moveElement(arr, from, to) {
    arr.splice(to,0,arr.splice(from,1)[0]);
  return arr;
}
console.log(moveElement(arr, 1, 3));

// Task 28:
// Напишите функцию, которая возвращает массив c заданной длинной из случайных чисел от N до M
let arr = [4, 1, 2, 3, 0];

function chooseElement(arr, from, to) {
  let removed = arr.splice(from, to);
  return removed;
}

let removedElements = chooseElement(arr, 1, 3);
console.log(removedElements); // [1, 2, 3]


// Task 29:
// Дан массив строк. Напишите функцию, которая возвращает массив длин строк.
let arr = ['Яблоко', 'Банан'];

function getStringsLengths(arr){
    return map = arr.map(x => x.length);
}
  
console.log(getStringsLengths(arr)); 

// Task 30:
// Дана строка слов. Напишите функцию, которая возвращает массив из первых букв .
let arr = ['Яблоко', 'Банан'];

function getFirstLetter(arr){
    return map = arr.map(x => x[0]);
}
  
console.log(getFirstLetter(arr)); 

// Task 31:
// Напишите функцию, которая проверяет, является ли значение массивом или нет
let arr = ['Яблоко', 'Банан'];

function isArray(arr) {
    return Array.isArray(arr);
  }
  
console.log(isArray(arr)); 

// Task 32:
//Напишите функцию, которая находит наиболее частый элемент массива
// Результат в виде:  "элемент = 'B' встречается 5 раз"
// Учтите различие в слове "раз":  2 раза, 3 раза,  6 раз ....

function mostCommonElement(arr) {
  let counter = {};
  let maxCount = 0;
  let mostCommon = null;
  
  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];
    if (counter[elem] == null) {
      counter[elem] = 1;
    } else {
      counter[elem]++;
    }
    
    if (counter[elem] > maxCount) {
      maxCount = counter[elem];
      mostCommon = elem;
    }
  }
  
  if (maxCount === 1) {
    return `элемент = '${mostCommon}' встречается 1 раз`;
  } else if (maxCount % 10 === 1 && maxCount !== 11) {
    return `элемент = '${mostCommon}' встречается ${maxCount} раз`;
  } else if (2 <= maxCount % 10 && maxCount % 10 <= 4 && !(12 <= maxCount % 100 && maxCount % 100 <= 14)) {
    return `элемент = '${mostCommon}' встречается ${maxCount} раза`;
  } else {
    return `элемент = '${mostCommon}' встречается ${maxCount} раз`;
  }
}





// Task 33:
// Напишите функцию, которая удаляет дублирующие элементы из массива 


let firstArr = [4, 1, 2, 4, 3];

function removeDuplicates(firstArr) {
    return [...new Set(firstArr)];
  }

  
console.log(removeDuplicates(firstArr)); 


// Task 34:
// Найдите високосные годы в заданном диапазоне лет

function findLeapYears(startYear, endYear) {
  let leapYears = [];
  for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      leapYears.push(year);
    }
  }
  return leapYears;
}
// Task 35:
// Напишите функцию, которая заполняет новый массив предоставленным значением.
// Описание задачи: Напишите функцию, которая заполняет новый массив предоставленным значением.
// Например: (3, 'a') => ['a', 'a', 'a']

function fillArray(length, value) {
  return Array(length).fill(value);
}
  console.log(fillArray(3, "a"))

// Task 36:
// Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.

var first = [ 1, [3, 4, 5] ];
var second = [ 1, 2, [3, 4, 5] ];
 
var isEqual = JSON.stringify(first) === JSON.stringify(second); // преобразование в строку json 
console.log(isEqual);


// Task 37:
// Напишите функцию, которая преобразует глубокий массив в одномерный.
// Например: [1, 2, [3, 4, [5]]] => [1, 2, 3, 4, 5]

const arr = [1, 2, [3, 4, [5, 6]]];

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

console.log(flatDeep(arr, Infinity));

// Task 38:
// Напишите функцию, которая разделяет массив на части заданного размера
// Например: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

const arr = [1, 2, 3, 4, 5, 6];
let newArr = [];

function divideArray(arr, number) {
  for (let i = 0; i < arr.length; i += number) {
    let subArr = [];
    for (let j = i; j < i + number && j < arr.length; j++) {
      subArr.push(arr[j]);
    }
    newArr.push(subArr);
  }
  return newArr;
}

console.log(divideArray(arr, 4));


// Task 39:
// Напишите функцию, которая находит среднее арифметическое всех значений в массиве

let arr = [2, 5, 9, 15, 4, 9, 5 ];
var sumPositive = 0;
let number = 0;
for (var i = 0; i <= arr.length; i++) {
    sumPositive = `${sumPositive},${arr[i]}`;
    number ++;
    
}
let averageNumber = (sumPositive.match(/\-?\d+/g).reduce((sum, el) => sum + +el, 0))/ number
console.log(averageNumber);

// Task 40:
// Напишите функцию, которая находит количество элементов между максимальным и минимальным элементом.

indexOfArray ([6, 4, 1, 5 ]);
 
 function indexOfArray(a) {
        let lowest = 0;
        let value = 0;
        let biggest = 0;
      let value2 = 0;
      
        for (var i = 1; i < a.length; i++) {
            if (a[i] < a[lowest])
                lowest = i;
                value = a[i];
        }
        for (var i = 1; i < a.length; i++) {
          if (a[i] > a[biggest]){
              biggest = i;
              value2 = a[i];
          }
      }
      if (biggest > lowest) {
        console.log ((Math.abs(biggest - lowest)) - 1)}
        else (console.log (Math.abs(biggest - lowest)) )
    }
  
    // Task 41:
// Напишите функцию, которая принимает 2 массива и возвращает true если количество элементов в первом массиве больше второго

var first = [ 1, 2,[3, 4, 5, 6] ];
var second = [ 1, 2, [3, 4, 5] ];
function flatDeep(first, d = 1) {
  return d > 0 ? first.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
               : first.slice();
};
function flatDeepSecond(second, d = 1) {
  return d > 0 ? second.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeepSecond(val, d - 1) : val), [])
               : second.slice();
};
var flattenedFirst = flatDeep(first);
var flattenedSecond = flatDeepSecond(second);

function isBigger(flattenedFirst, flattenedSecond){
  if (flattenedFirst.length > flattenedSecond.length){
    return true;
  } else {return false};
}
console.log(isBigger(flattenedFirst, flattenedSecond));

// Task 42:
// Напишите функцию, которая принимает 2 аргумента и возвращает true если element есть среди элементов массива и false в ином случае.

var arr = [ 1, 2,[3, 4, 5, 6] ];

function isInArray(arr, num) {

  for (var i = 0; i <= arr.length; i++) {
    if (num === arr[i]){
      return true;
    } 
}
return false
}

console.log(isInArray(arr, 2));

// Task 43:
// Дан массив. Напишите функцию, которая уменьшить на число А все его элементы

var arr = [ 1, 2,3, 4, 5, 6 ];
var newArray = [];

function reduceElement(arr, num) {
  
  for (var i = 0; i < arr.length; i++) {
    newArray.push(arr[i] - num);
}
return newArray;
}

console.log(reduceElement(arr, 10));

// Task 44:
// В массиве хранятся сведения о количестве осадков, выпавших за каждый день января. Определить общее количество осадков за январь.
// Не использовать цикл

var arr = [ 1, 2,3, 4, 5, 6, 9 ];
 let precipitation = arr.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
console.log(precipitation);

// Task 45:
// В массиве хранится информация о массе каждого из 30 предметов, загружаемых в грузовой автомобиль, 
//грузоподъемность которого известна. Определить, не превышает ли общая масса всех предметов грузоподъемность автомобиля.
// Не использовать цикл

let arr = [ 1, 2,3, 4, 5, 6, 9 ];
let rubbleLifting = 35;
let arrLiftingSum = arr.reduce(function(previousVal, currentVal) {
  return previousVal + currentVal;
}, 0);
function checkLiftingCapacity(arrSum, rubbleLifting) {
  return arrSum < rubbleLifting ? true : false;
}
console.log(checkLiftingCapacity(arrLiftingSum, rubbleLifting));


// Task 46:
//Рост 22 учеников класса представлен в виде массива. Рост мальчиков условно задан отрицательными числами. 
//Определить средний рост мальчиков и средний рост девочек.
// Не использовать цикл
let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, -1, -2, -3, -4, -5, -6, -7, -8, -9, -9, -9 ];
let isPositiveCount = 0; 
let isNegativeCount = 0;
function countPositive(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      isPositiveCount++;
    }
  }
}

function countNegative(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      isNegativeCount++;
    }
  }
}
countPositive(arr);
countNegative(arr);

let sumPositive = 0;
let sumNegative = 0;
for (var i = 0; i < arr.length; i++) {
  if (Number.isInteger(arr[i]) && arr[i] > 0) {
    sumPositive += arr[i];
  } else if (Number.isInteger(arr[i]) && arr[i] < 0) {
    sumNegative += arr[i];
  }
}
let girlAverage = sumPositive / isPositiveCount
 let boyAverage = sumNegative / isNegativeCount


console.log(girlAverage.toFixed(2), Math.abs(boyAverage.toFixed(2)));

// Task 47:
// Дан одномерный массив из 20 элементов. 
//Напишите функцию, которая вернет массив из первых трех и последних трех элементов, сохранив порядок их следования.
// Не использовать цикл
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function firstLastThreeCharacters(arr) {
  let first = "";
  let last = "";
  for (var i = 0; i < arr.length; i++) {
    if (i < 3) {
      if (arr[i] < arr[first] || first === "") {
        first = i;
      }
    } else if (i >= arr.length - 3) {
      if (arr[i] < arr[last] || last === "") {
        last = i;
      }
    }
  }
  return `${arr[first]},${arr[last-2]},${arr[last-1]},${arr[last]}`;
}

console.log(firstLastThreeCharacters(arr));

// Task 48:
//Удалить из массива максимальный элемент

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function indexOfBiggest(arr) {
  let biggest = 0;
  let value = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > arr[biggest]) {
      biggest = i;
      value = arr[biggest];
    }

  }
  const index = arr.indexOf(biggest);
  if (index!== -1) {
    return arr.splice(0, biggest);
  } 
}
console.log(indexOfBiggest(arr));

// Task 49
// Дан массив
// ['| Sofia | 300', '| Veliko Tarnovo | 500', '| Yambol | 275']
// Напишите функцию, которая выводит "Sofia, Veliko Tarnovo, Yambol = 1075"


var arr = ['Sofia', 300, 'Veliko Tarnovo', 500, 'Yambol', 275];
var numbers = arr.filter(function(number) {
    return !isNaN(Number(number));
});
let totalNumber = numbers.reduce((acc, curr) => acc + curr, 0);
let stringNumbers = numbers.join(',');
let stringNoNumbers = arr.filter(function(word) {
    return isNaN(Number(word));
}).join(', ');
console.log(stringNoNumbers + " = " + totalNumber);

// Task 50
// Напишите функцию, которая из массива с покупками и их ценами выводит следующее сообщение
// You purchased Beer Zagorka, Tripe soup, Lasagna for a total sum of 16.14
// Входной массив выглядит: ['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']

var arr = ['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'];
var numbers = arr.filter(function(number) {
    return !isNaN(Number(number));
});
let numbersInt = numbers.map(string => +string);
let totalNumber = numbersInt.reduce((acc, curr) => acc + curr, 0);
let stringNumbers = numbersInt.join(',');
let stringNoNumbers = arr.filter(function(word) {
    return isNaN(Number(word));
}).join(', ');
console.log("You purchased " + stringNoNumbers + " for a total sum of " + totalNumber);

function generateUsernames(emails) {
  let usernames = [];
  for (let email of emails) {
    let [username, domain] = email.split('@');
    username = username.replace('.', '').replace('_', '');
    let domainParts = domain.split('.');
    if (domainParts.length > 1) {
      domain = domainParts[0];
    }
    usernames.push(username + '.' + domain);
  }
  return usernames;
}
console.log(generateUsernames(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com']))

// Task 52
//Напишите функцию, которая будет подвергать цензуре новостные статьи. 
//Вам будет предоставлен текст, а затем список строк, которые необходимо вычеркнуть из текста. 
//Замените все вхождения строк дефисами той же длины, что и строка. 
// ['roses are red, violets are blue', ' , violets are', ' red']	=>  "roses are ---------------- blue"


function censorText(text, words) {
  for (let word of words) {
    let censor = '-'.repeat(word.length);
    text = text.replace(word, censor);
  }
  return text;
}

let text = 'roses are red, violets are blue';
let words = [', violets are', 'red'];
let censoredText = censorText(text, words);
console.log(censoredText);
