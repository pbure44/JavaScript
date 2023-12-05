// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// Округлення до сотих
let roundTo2 = (num) => +(Math.round(num + "e+2") + "e-2");

//   - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let areaRectangle = (a, b) => roundTo2(a * b);
console.log(areaRectangle(3, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let areaCircle = (r) => roundTo2(Math.PI * Math.pow(r, 2));
console.log(areaCircle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let areaCylinder = (r, h) => roundTo2(Math.PI * (Math.pow(r, 2) + 2 * r * h));
console.log(areaCylinder(3, 6));

// - створити функцію яка приймає масив та виводить кожен його елемент
let arrToLog = (array) => {
  for (const arrayElement of array) {
    console.log(arrayElement);
  }
}
arrToLog([2, 5, 8, 0]);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraf = (arguments) => document.write('<p>' + arguments + '</p>');
createParagraf('Hello world!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = (...rest) => {
  document.write('<ul>');
  document.write('<li>' + rest + '</li>');
  document.write('<li>' + rest + '</li>');
  document.write('<li>' + rest + '</li>');
  document.write('<ul>');
}
createUl('Hello Ul-Li');
document.write('<h2>----------------------------------</h2>');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUlLi = (text, n) => {
  document.write('<ul>');
  for (let i = 0; i < n; i++) {
    document.write('<li>' + text + '</li>');
  }
  document.write('</ul>');
}
createUlLi('Hi, I like ice-cream', 3);
document.write('<h2>----------------------------------</h2>');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrList = (array) => {
  document.write('<ul>');
  for (const arrayElement of array) {
    document.write(`<li>${arrayElement}</li>`);
  }
  document.write('</ul>');
}
arrList([4, true, 'hello', null]);
document.write('<h2>----------------------------------</h2>');
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrToBlock = (array) => {
  document.write('<ul>');
  for (const arrayElement of array) {
    document.write(`<li>${arrayElement.id} - ${arrayElement.name} - ${arrayElement.age}</li>`);
  }
  document.write('</ul>');
}
const users = [
  {id: 1, name: 'vasya', age: 31},
  {id: 2, name: 'petya', age: 30},
  {id: 3, name: 'kolya', age: 29},
  {id: 4, name: 'olya', age: 28},
  {id: 5, name: 'max', age: 30},
  {id: 6, name: 'anya', age: 31},
]
arrToBlock(users);
document.write('<h2>----------------------------------</h2>');
// - створити функцію яка повертає найменьше число з масиву
let minFromArr = (array) => {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < min) {
      min = array[i + 1];
    }
  }
  return min;
}
console.log('Мінімальне число: ' + minFromArr([11, 5, 12, 22, 14, 3]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
  let x = 0;
  for (const sumElement of arr) {
    x += sumElement;
  }
  return x;
}
console.log(sum([2, 4, 6]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах. Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swapArray = (array, index1, index2) => {
  let x1 = array[index1];
  array[index1] = array[index2];
  array[index2] = x1;
  return array;
}
console.log(swapArray([2, 7, 5, 9, 0, 3], 0, 2));

//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
  for (const element of currencyValues) {
    if (element.currency === exchangeCurrency) {
      return sumUAH / element.value;
    }
  }
  return console.log("Невірна валюта");
}
let currency = [
  {currency: 'USD', value: 40},
  {currency: 'EUR', value: 42}
]
console.log(exchange(10000, currency, 'USD'));
console.log(exchange(10000, currency, 'EUR'));
