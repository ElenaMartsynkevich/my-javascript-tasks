//подсчитать кол-во вхождений символа "h" в строке

const hasChar = (str, letter) => {
    let i = 0;
    let count = 0;
    while (i < str.length) {
      if (str[i] === letter) {
        count++;
      }
      i++;
    }
    return count;  
  }
  console.log(hasChar("Lenhhah", "h"));

//подсчитать кол-во слов в строке(словом считается группа символов, отделенная от другой такой же пробелом)

function calculateTheWords(message) {

    const splitMessage = message.split(" ");
    const wordsNumber = splitMessage.length;
  
  return wordsNumber;
  }
  console.log(calculateTheWords("hgjfhjd gfd jghd fdhgjdf"));
  
  //определить длину самого длинного слова в строке
 function longestWord(text) {
    let array1 = text.match(/\w[a-z]{0,}/gi);
    let result = array1[0];
  
    for(let x = 1 ; x < array1.length ; x++) {
      if(result.length < array1[x].length)
      {
      result = array1[x];
      }
    }
    return result.length;
  }
  
   console.log(longestWord("one three four fivefivefivefive"));

   // Task 4:
// Дана строка. Если длина строки меньше 10 символов, то вывести ее, иначе вывести ошибку.
// Реализовать метод в 1-у строку

function moreThanTenSymbols (text){
    console.log(text.length > 10 ? "error": `${text}`)
  }
  console.log(moreThanTenSymbols("oiuh"))

  // Task 5:
// Дана строка. Если длина строки меньше 10 символов, то вывести его, иначе вывести 10 символов и '...'.
// Реализовать метод в 1-у строку

function moreThanTenSymbols (text){
    console.log(text.length < 10 ? `${text}`: `${text.substr(0, 10)}${"..."}`);
  }
  console.log(moreThanTenSymbols("oiuhhqwertyuiop["))

// Task 6:
// Дана строка. Замените все цифры на пробелы

function changeNumbers (text){
    console.log(text.replace( /\d/g, " "));
  }
  console.log(changeNumbers("hjghj 8 change56it"));

  // Task 7:
// Дана строка 'I need icecream'. Вырежите из нее слово 'icecream'. тремя разными способами

function cutText (text){
    console.log(text.slice(0, 6));
  }
  console.log(cutText("I need icecream"));

  function cutText (text){
    console.log(text.replace("icecream", " "));
  }
  console.log(cutText("I need icecream"));

  function cutText (text){
    console.log(text.substring(0, 6));
  }
  console.log(cutText("I need icecream"));

  // Task 8:
// В переменной date лежит дата в формате '2019-12-16'. Преобразуйте эту дату в формат '16/12/2019'.

function dateFormat (date){
    let yearDate = date.substr(0,4);
    let yearMonth = date.substr(5,2);
    let yearDay = date.substr(8,2);
    return `${yearDay}/${yearMonth}/${yearDate}`;
   }
   console.log(dateFormat("2019-12-16"));


   // Task 9:
// Дана строка 'dfvrg erge rt4t3 4t34g 34g'. Найдите количество символов в этой строке.  Необходимый символ передаем как параметер

function countChars (text, symbol) {
    let i = 0;
    let count = 0;
    while (i < text.length ) {
      if (text[i] === symbol) {
        count = count + 1;
      }
      i = i + 1;
    }
    return count
  
  }
  console.log(countChars("dfvrg erge rt4t3 4t34g 34g", "a"));

// Task 10:
//Дана строка 'I-am-a-good-engineer!'. Замените все '-' на '!'

function replaceSymbols (text) {
    return (text.replaceAll("-", "!"));
  }
  
  console.log(replaceSymbols("I-am-a-good-engineer!"));

  // Task 11:
// Дана строка. Преобразуйте первую букву каждого слова строки в верхний регистр.

function upperFirstChar (text) {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
   return words.join(" ");
   
  }
  
  console.log(upperFirstChar("hjgfh ghjf"));

  // Task 12:
// Дана строка в camel case ( e.g.  "IGoToTheBeach!"), преобразуйте в предложение, каждое слово должно быть разделено пробелом, 
//только первое слово должно начинаться с заглавной буквы

function spaceBetweenWords (text) {
 
    let divideText = text.replace(/([A-Z])/g, ' $1');
    const words = divideText.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toLowerCase() + words[i].substr(1);
    }
     let smallWords = words.join(" ");
     return `${smallWords[0].toUpperCase()}${smallWords.substr(0)}`
  }
  
  
  console.log(spaceBetweenWords("hjgfhKhjf"));

  // Task 13:
//Дана строка "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";  .  Удалить все  не буквенно-цифровых символов.

function deleteSymbols (text) {
    return text.replace(/[^a-zа-яё\s 0-9]/gi, '');
  }
  
  
  console.log(deleteSymbols("every., -/ 4hunter #! wishes ;: {} to $ % ^ & * know /;" ));

  // Task 14:
//Напишите функцию addZeros, которая дополняет нулями до указаной длины числовое значение
// с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

function addNumbers (number, zeroNumber) {
    let i = Math.abs(zeroNumber);
    result = number.toString();
    while (i > number.toString().length) {
      result = `${result}${0}`;
      i--;
    }
    return zeroNumber > 0 ? result: -result;
  
  }
  
  
  console.log(addNumbers(9, 7));

  // Task 15:
//Напишите функцию, которая преобразует строку в CamelCase

function camelCase (text) {
    return text.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(m){
    return m.toUpperCase().replace(/\s+/g, "");
    })
  }
  
  console.log(camelCase("Transform to camel case"));

  // Task 16:
//Напишите функцию, которая преобразует строку из CamelCase в snake_case, 
//при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

function snakeCase (text) {
    return text.replace(/\b([A-Z][a-z]*)+\b/g, n => n.replace(/([A-Z])/g, '_$1').replace(/^-/, '').toLowerCase());
  }
  
  console.log(snakeCase("TransformToSnakeCase"));

  
  // Task 17:
//"Напишите функцию, которая вовращает имя файла из полного пути к файлу.
//E.g:  ""/D:/user/test/file.txt""   =>  file.txt"

function fileName (text) {
    
  var name = text.split("/").pop();
  return name;


}

console.log(fileName("/D:/user/test/file.txt"));

// Task 18:
//Напишите функцию, которая возвращает строку, очищенную от всех HTML-тегов:
//<figcaption class=""block w-full""><h5 class=""text-ui-text-hc my-0 font-bold"">Earn extra honor and gain new allies!</h5><div>Honor is earned for each new who joins.</div><a class=""btn is-dark mt-15px"" id=""tell_me_more_referrals""></figcaption>    => Honor is earned for each new  who joins."

function cutTegs(str) {
   
  const regex = /( |<([^>]+)>)/ig;
  return str.replace(regex, " ");
   

}

console.log(cutTegs('<figcaption class=""block w-full""><h5 class=""text-ui-text-hc my-0 font-bold"">Earn extra honor and gain new allies!</h5><div>Honor is earned for each new who joins.</div><a class=""btn is-dark mt-15px"" id=""tell_me_more_referrals""></figcaption>'));

// Task 19:
//Напишите функцию , которая удаляет все лишние пробелы из строки str:  "     Honor    is earned   for   each new  who joins.   "
function cutExtraSpaces(str) {
   
  const trimmedStr = str.trim();
   return trimmedStr.replaceAll(/\s+/g, " ");
    

}

console.log(cutExtraSpaces("     Honor    is earned   for   each new  who joins.   "));

// Task 20:
//Напишите функцию, которая удаляет из строки определенное количество слов
function deleteDefiniteNUmbersOfWords(str, number) {
  let words = str.split(" ");
  return words.slice(0, words.length - (number + 1)).join(" ");
}

console.log(deleteDefiniteNUmbersOfWords("Honor is earned for each new  who joins", 3));

// Task 21:
//Напишите функцию), которая возвращает строку, отсортировав её символы в алфавитном порядке.

function stringOntheContrary(str) {
  let i = str.length - 1;
  let result = '';
  while (i >= 0) {
   result = `${result}${str[i]}`;
   i = i - 1;
  }
  return result
}

console.log(stringOntheContrary("Honor is earned for each new  who joins"));

// Task 22:
//Напишите функцию, которая возвращает строку, очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.
function removeDuplicate(str) {
  str = str.split(" ");
  var result = [];
  for(var i = 0; i < str.length ; i++) {
      if(result.indexOf(str[i]) == -1) result.push(str[i]);
  }
return result = result.join(" ");
}

console.log(removeDuplicate("Honor is earned Honor for each new  who joins"));

// Task 23:
// Дана строка. Преобразуйте ее в массив слов

function stringToArray(str) {
  return str.split(' ');
}

console.log(stringToArray("Honor is earned Honor for each new who joins"));

// Task 24:
// Дана строка с почтой. Напишите функцию, которая заменяет все символы после 3-го в имени на "..."
// Например: late_fire@example.com  =>  lat...@example.com

function threeDotsReplace(str) {
  let result = `${str.substr(0, 3)}${"..."}`+ str.split("@").pop();
 
  return result 
}

console.log(threeDotsReplace("late_fire@example.com"));

// Task 25:
// Дана строка. Напишите функцию, которая преобразует строчные буквы в строчные, а строчные - в прописные

function replaceChar(str) {
  
 
  let letter = str.toUpperCase().split('');
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] == str[i])
      letter[i] = letter[i].toLowerCase();
  }
  return letter.join("");
}
console.log(replaceChar("HellO"));

// Task 26:
// Дана строка. Напишите функцию, которая возвращает данную строку n раз (по умолчанию 1)

function returnStr(str, number) {
  let i = 0;
  result = "";
  while (i <= number){
     result = `${str} ${result}`;
     i++;
  }
  return result;
  }
  
  console.log(returnStr("HellO", 1 ));
  
// Task 27:
// Напишите функцию, которая вставляет строки в строку в определенной позиции (по умолчанию 1).



// Task 28:
// Напишите функцию, которая удаляет начальные и конечные пробелы из строки

function trimSpaces(str) {
  return str.trim();
}

console.log(trimSpaces(" HellO Mike "));
// Task 29:
// Напишите функцию, которая возвращает количество вхождений слово в строке

function countWordsString(string){

  var counter = 1;
  string=string.replace(/[\s]+/gim, ' ');
  string.replace(/(\s+)/g, function (a) {
     counter++;
  });

  return counter;
}
console.log(countWordsString("HellO Mike"));

// Task 30:
// Напишите функцию, которая возвращает true если строка заканчивается указанным суффиксом




// Task 31:
// Дана строка. Напишите функцию, которая удаляет определенный символ из строки

function filterString(str, symbol){
  let i = 0;
  let result = '';
  while ( i < str.length) {
     if (str[i] !== symbol) {
        result = `${result}${str[i]}`;
     }
     i++;
  }
  
     return result;
  }
  console.log(filterString("Hel!lO Mike", "k"));

  // Task 32:
// Дана строка. Напишите функцию для удаления несловесных символов (e.g. ~!@ # $% ^ & * () + `- = {} [] | \:";' /?)

function filterString(str){
  return str.replace(/[^a-zа-яё]/gi, ' ');
  }
  console.log(filterString("Hell?!O Mike"));


// Task 33:
// ДанЫ 2 числа и операция, которую необходимо произвести. Напишите функцию, которая дает решение в развернутом виде
// Например:  2, 3, +  =>  "Решение: 2 + 3 = 5"

function aggregateFunction(number, number2, mark){
 
  switch (mark) {
    case "*":
      return number * number2;
    case "+":
      return number + number2;
    case "-":
      return number - number2;
    case "/":
      if (number2 !== 0) {
        return number1 / number2;
      } else {
        return "can't divide";
      }
  }

}
console.log(aggregateFunction(2, 3, "*"));
