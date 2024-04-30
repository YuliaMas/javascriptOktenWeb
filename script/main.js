// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let greeting = 'hello';
let title = 'owu';
let part1 = 'com';
let part2 ='ua';
let firstNum = 1;
let numDecimal = 10;
let numMinus = -999;
let oddNum = 123;
const PI = 3.14;
let floatNum = 2.7;
let evenNum = 16;
let isTrue = true;
let isNotTrue = false;
console.log(greeting, title, part1, part2, firstNum, numDecimal, numMinus, oddNum, PI, floatNum, evenNum, isTrue, isNotTrue);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person
// (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Yuliya';
let middleName = 'Gennadiivna';
let lastName = 'Masechko';
const fullName = firstName + ' ' + middleName + ' ' + lastName;
const fullName1 = `${firstName} ${middleName} ${lastName}`;
console.log(fullName);
console.log(fullName1);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof  a);
console.log(typeof  b);
console.log(typeof  c);

// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt("Як вас звати? Введіть своє ім'я..");
let nameMiddle = prompt('Як вас називають по-батькові? Введіть свою відповідь..');
let age = prompt('Скільки вам років? Введіть свій вік..');
console.log(name);
console.log(nameMiddle);
console.log(age);