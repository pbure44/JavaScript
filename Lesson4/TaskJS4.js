// Округлення до сотих
function roundTo2(num) {
  return +(Math.round(num + "e+2") + "e-2");
}

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function areaRectangle(a, b) {
  return roundTo2(a * b);
}

// let a=+prompt('first side')
// let b=+prompt('second side')
// alert(`area of the rectangle:  ${areaRectangle(a,b)}`)

console.log('area of the rectangle: ', areaRectangle(3, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function areaCircle(r) {
  return roundTo2(Math.PI * Math.pow(r, 2));
}

console.log('area of the circle: ', areaCircle(10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let r=+prompt('Радіус основи циліндра');
// let h=+prompt('Висота цилінра');
function areaCylinder(r, h) {
  return roundTo2(2 * areaCircle(r) + h * 2 * Math.PI * r);
}

console.log('Площа циліндра: ', areaCylinder(5, 6));

//- створити функцію яка приймає масив та виводить кожен його елемент
function arrToLog(array) {
  for (const arrayElement of array) {
    console.log(arrayElement);
  }
}

let arr = [1, 5, 7, 2];
arrToLog(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraf(arguments) {
  document.write('<p>' + arguments + '</p>');
}

let text = 'Наверняка вы задумались о том, как можно изменить стандартный вид флажков (чекбоксов), чтобы они выглядели привлекательней с учетом дизайна вашего сайта или задач одной конкретной страницы. В этой статье вы найдете ряд практических примеров, которые помогут вам стилизовать элементы "<code>&lt;input type="checkbox"&gt;</code>".'
createParagraf(text);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUl(arguments) {
  document.write('<ul>');
  document.write('<li>' + arguments + '</li>');
  document.write('<li>' + arguments + '</li>');
  document.write('<li>' + arguments + '</li>');
  document.write('<ul>');
}

createUl('Hello Me');
document.write('<h2>----------------------------------</h2>');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUlLi(arguments, n) {
  document.write('<ul>');
  for (let i = 0; i < n; i++) {
    document.write('<li>' + arguments + '</li>');
  }
  document.write('</ul>');
}

createUlLi('Hello -Li-', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrToList(array) {
  for (const arrayElement of array) {

  }
}

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// - створити функцію яка повертає найменьше число з масиву
function minFromArr(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] < min) {
      min = array[i + 1];
    }
  }
  return  min;
}

console.log('Мінімальне число: '+minFromArr([11, 5, 12, 22, 14, 3]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
  let x=0;
  for (const sumElement of arr) {
    x = x + sumElement;
  }
  return x;
}

console.log('Сума чисел масиву: '+sum([2,5,3]));

