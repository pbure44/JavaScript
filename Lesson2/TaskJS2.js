// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let array = [1, 'book', true, 'surame', 1000, false, 35.5, 222, 'yes', 'no'];
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);
console.log(array[10]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
  title: '20,000 Leagues Under the Sea',
  pageCount: 250,
  genre: 'adventures'
}
let book2 = {
  title: 'Romeo and Juliet',
  pageCount: 180,
  genre: 'tragedy'
}
let book3 = {
  title: 'The Hound of the Baskervilles',
  pageCount: 220,
  genre: 'detective'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
  title: '20,000 Leagues Under the Sea',
  pageCount: 250,
  genre: 'adventures',
  autors: [{name: 'Jules Verne', age: 77}]
}
let book5 = {
  title: 'Romeo and Juliet',
  pageCount: 180,
  genre: 'tragedy',
  autors: [{name: 'William Shakespeare', age: 52}]
}
let book6 = {
  title: 'The Hound of the Baskervilles',
  pageCount: 220,
  genre: 'detective',
  autors: [{name: 'Arthur Conan Doyle', age: 71}]
}
console.log('------------------------------')
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
  {
    name: 'Viktoria',
    username: 'CyberWhite',
    password: '1-yn8X6C9Q',
  },
  {
    name: 'Dariya',
    username: 'BestRiku',
    password: '2-6n8E7UN8',
  },
  {
    name: 'Mykhaylo',
    username: 'UraniumDog',
    password: '3-P2ppz75h'
  },
  {
    name: 'Vsevolod',
    username: 'XNever',
    password: '4-V8s86tWw'
  },
  {
    name: 'Bohdan',
    username: 'CookieSnake',
    password: '5-E4ha54Fs'
  },
  {
    name: 'Yaroslav',
    username: 'GeekBlood',
    password: '6-j6Z58Rjc'
  },
  {
    name: 'Maksym',
    username: 'CaptainCar',
    password: '7-Fg884vv9'
  },
  {
    name: 'Julia',
    username: 'SapphireFish',
    password: '8-3W4m5Vsq'
  },
  {
    name: 'Lexi',
    username: 'RealityTwo',
    password: '9-At963kNN'
  },
  {
    name: 'Nataliya',
    username: 'GoldLuck',
    password: '10-5Uy8WTz6'
  }
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
console.log('------------------------------')
// Логічні розгалуження:
//   - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = -3;
if (a !== 0) {
  console.log('Вірно');
} else {
  console.log('Невірно');
}
console.log('------------------------------')

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 12;

if (time > 0 && time <= 15) {
  console.log('Перша чверть');
} else if (time > 15 && time <= 30) {
  console.log('Друга чверть');
} else if (time > 30 && time <= 45) {
  console.log('Третя чверть');
} else if (time > 45 && time <= 59) {
  console.log('Четверта чверть');
} else {
  console.log('Введено невірне число, введіть від 0 до 59 включно');
}
console.log('------------------------------')
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = 21;

if (day > 0 && day <= 10) {
  console.log('Перша декада');
} else if (day > 10 && day <= 20) {
  console.log('Друга декада');
} else if (day > 20 && day <= 31) {
  console.log('Третя декада');
} else {
  console.log('Введено невірне число, введіть від 1 до 31 включно');
}
console.log('------------------------------')
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let weekDay = 7;
switch (weekDay) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  case 6:
    console.log('Saturday');
    break;
  case 7:
    console.log('Sunday');
    break;
  default:
    console.log('Введено невірне число, введіть від 1 до 7 включно')
}
console.log('------------------------------')
//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

// let num1 = +prompt("Введіть перше число");
// let num2 = +prompt("Введіть друге число");
// console.log("Введено числа: "+num1+" та "+num2);
// if (num1>num2){
//   console.log("Перше число більше другого");
// }else if (num1<num2){
//   console.log("Друге число більше першого");
// }else {
//   console.log("Перше число дорівнює другому");
// }
// console.log('------------------------------')

//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x;
if (x){
}else {
  x="default";
}
console.log(x);
console.log('------------------------------');

//   - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration>5){
  console.log("Супер");
}
if (coursesAndDurationArray[1].monthDuration>5){
  console.log("Супер");
}
if (coursesAndDurationArray[2].monthDuration>5){
  console.log("Супер");
}
if (coursesAndDurationArray[3].monthDuration>5){
  console.log("Супер");
}
if (coursesAndDurationArray[4].monthDuration>5){
  console.log("Супер");
}
if (coursesAndDurationArray[5].monthDuration>5){
  console.log("Супер");
}
console.log('------------------------------')
let z=5;
z>8?console.log("Більше"):console.log("Менше")

switch (z){
  case (z<5):
    console.log("Less than 5");
    break;
  case (5):
    console.log("Equals 5");
    break;
  case (z>5):
    console.log("more than 5");
    break;
}
