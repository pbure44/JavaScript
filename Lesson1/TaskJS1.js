// Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
// Вивести кожну змінну за допомогою: console.log
let text1="hello";
let text2="owu";
let text3="com";
let text4="ua";
let num1=1;
let num2=10;
let num3=-999;
let num4=123;
let num5=3.14;
let num6=2.7;
let num7=16;
let bull1=true;
let bull2=false;

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);
console.log(num5);
console.log(num6);
console.log(num7);
console.log(bull1);
console.log(bull2);
console.log("------------------");

// Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName="Pavel";
let middleName="Vadimovich";
let lastName="Burenok";
let person=lastName+" "+firstName+" "+middleName;
console.log(person);
console.log("------------------");

// За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log("a is "+typeof a);
console.log("b is "+typeof b);
console.log("c is "+typeof c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let fName = prompt("Ім'я?");
let mName = prompt("По-батькові?");
let age = +prompt("Вік?");
alert(`Привіт :) ${fName} ${mName}, ${age} років`);
