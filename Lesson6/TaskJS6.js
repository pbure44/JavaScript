// - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let text1 = 'hello world';
let text2 = 'lorem ipsum';
let text3 = 'javascript is cool';

console.log(`length of text '${text1}' is ${text1.length}`);
console.log(`length of text '${text2}' is ${text2.length}`);
console.log(`length of text '${text3}' is ${text3.length}`);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log(text1.toUpperCase());
console.log(text2.toUpperCase());
console.log(text3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let text4 = 'HELLO WORLD';
let text5 = 'LOREM IPSUM';
let text6 = 'JAVASCRIPT IS COOL';

console.log(text4.toLowerCase());
console.log(text5.toLowerCase());
console.log(text6.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let text7 = ' dirty string   ';
console.log(text7.trim());

// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//   let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';
let stringToArray = (str) => str.split(" ");
console.log(stringToArray(str));

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNum1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arrNum1.map((item) => item.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let arrNum2 = [11, 21, 3];
let sortNums = (array, direction) => {
  if (direction === 'ascending') {
    return array.sort((item1, item2) => item1 - item2);
  } else if (direction === 'descending') {
    return array.sort((item1, item2) => item2 - item1);
  } else {
    return array;
  }
};
console.log(sortNums(arrNum2, 'ascending'));

// - є масив
let coursesAndDurationArray = [
  {title: 'JavaScript Complex', monthDuration: 5},
  {title: 'Java Complex', monthDuration: 6},
  {title: 'Python Complex', monthDuration: 6},
  {title: 'QA Complex', monthDuration: 4},
  {title: 'FullStack', monthDuration: 7},
  {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let sortedArr = coursesAndDurationArray.sort((item1, item2) => item2.monthDuration - item1.monthDuration);
console.log(sortedArr);
let filterArr = coursesAndDurationArray.filter((item) => item.monthDuration > 5);
console.log(filterArr);
let newArr2 = coursesAndDurationArray.map(((item, index) => {
  item.id = index + 1000;
  return {id: item.id, title: item.title, monthDuration: item.monthDuration};
}));
console.log(newArr2);


printArray = (array) => {
  document.write(`<ul>`);
  for (let element of array) {
    document.write(`<li>${element.id} - ${element.title} - ${element.monthDuration}</li>`);
  }
  document.write(`</ul>`);
}

printArray(sortedArr);
printArray(filterArr);
printArray(newArr2);

// описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
// }
let playingCards = [
  {cardSuit: 'spade', value: 6, color: 'black'},
  {cardSuit: 'spade', value: 7, color: 'black'},
  {cardSuit: 'spade', value: 8, color: 'black'},
  {cardSuit: 'spade', value: 9, color: 'black'},
  {cardSuit: 'spade', value: 10, color: 'black'},
  {cardSuit: 'spade', value: 'Jack', color: 'black'},
  {cardSuit: 'spade', value: 'Queen', color: 'black'},
  {cardSuit: 'spade', value: 'King', color: 'black'},
  {cardSuit: 'spade', value: 'Ace', color: 'black'},
  {cardSuit: 'diamond', value: 6, color: 'red'},
  {cardSuit: 'diamond', value: 7, color: 'red'},
  {cardSuit: 'diamond', value: 8, color: 'red'},
  {cardSuit: 'diamond', value: 9, color: 'red'},
  {cardSuit: 'diamond', value: 10, color: 'red'},
  {cardSuit: 'diamond', value: 'Jack', color: 'red'},
  {cardSuit: 'diamond', value: 'Queen', color: 'red'},
  {cardSuit: 'diamond', value: 'King', color: 'red'},
  {cardSuit: 'diamond', value: 'Ace', color: 'red'},
  {cardSuit: 'heart', value: 6, color: 'red'},
  {cardSuit: 'heart', value: 7, color: 'red'},
  {cardSuit: 'heart', value: 8, color: 'red'},
  {cardSuit: 'heart', value: 9, color: 'red'},
  {cardSuit: 'heart', value: 10, color: 'red'},
  {cardSuit: 'heart', value: 'Jack', color: 'red'},
  {cardSuit: 'heart', value: 'Queen', color: 'red'},
  {cardSuit: 'heart', value: 'King', color: 'red'},
  {cardSuit: 'heart', value: 'Ace', color: 'red'},
  {cardSuit: 'clubs', value: 6, color: 'black'},
  {cardSuit: 'clubs', value: 7, color: 'black'},
  {cardSuit: 'clubs', value: 8, color: 'black'},
  {cardSuit: 'clubs', value: 9, color: 'black'},
  {cardSuit: 'clubs', value: 10, color: 'black'},
  {cardSuit: 'clubs', value: 'Jack', color: 'black'},
  {cardSuit: 'clubs', value: 'Queen', color: 'black'},
  {cardSuit: 'clubs', value: 'King', color: 'black'},
  {cardSuit: 'clubs', value: 'Ace', color: 'black'},
]
console.log(playingCards.find((element) => element.cardSuit === 'spade' && element.value === 'Ace'));
console.log(playingCards.filter((element) => element.value === '6'));
console.log(playingCards.filter((element) => element.color === 'red'));
console.log(playingCards.filter((element) => element.cardSuit === 'diamond'));
console.log(playingCards.filter((element) => element.cardSuit === 'clubs' && element.value > '9'));

// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }
let reducedCardsArr=playingCards.reduce((accum, card)=>{

  switch (card.cardSuit) {
    case 'spade':
      accum[0].push(card);
      break;
    case 'diamond':
      accum[1].push(card);
      break;
    case 'heart':
      accum[2].push(card);
      break;
    case 'clubs':
      accum[3].push(card);
      break;
    default:
      console.log("Error no such cards");
  }
  return accum;
},[[],[],[],[]]);
console.log(reducedCardsArr);

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
