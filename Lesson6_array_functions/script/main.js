// 1 - Знайти та вивести довжину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
const findStringLength = (str) => str.length;
console.log(findStringLength('hello world'));
console.log(findStringLength('lorem ipsum'));
console.log(findStringLength('javascript is cool'));

// 2 - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let arrStr = ['hello world', 'lorem ipsum', 'javascript is cool'];
const strToUpperCase = (arr) => {
    let arrStrUp = [];
    for (const str of arr) {
      arrStrUp.push(str.toUpperCase());
    }
    // arr.map(str => arrStrUp.push(str.toUpperCase()));
    return arrStrUp;
}
console.log(strToUpperCase(arrStr));

// 3 - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
const stringToLowerCase = (arr) => arr.map(str => str.toLowerCase());
console.log(stringToLowerCase(['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']));

// 4 - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
const cleanStr = (str) => str.trim();
console.log(cleanStr(str))

// 5 - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str1 = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
const stringToArray = str => str.split(',');
console.log(stringToArray(str1));

// 6 - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const numToString = (arr) => arr.map(num => num.toString());
console.log(numToString( [10, 8, -7, 55, 987, -1011, 0, 1050, 0]));

// 7 - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
const sortNums = (arrNums, direction) => arrNums.toSorted((direction === 'ascending') ? (a,b) => a-b : (a,b)=> b-a);
console.log(sortNums(nums,'descending')); // [21,11,3]
console.log(sortNums(nums,'ascending'));  // [3,11,21]

// ==========================
// 8 - є масив
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


const newArrMaxDuration = (array) => {
    let newArr = array.sort((a, b) => b - a).filter(arr => arr.monthDuration > 5);
    console.log(newArr);
    return newArr.map((obj, index) =>({id: index + 1, ...obj})) ;
}
console.log(newArrMaxDuration(coursesAndDurationArray));

// =========================

//   9 -  описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let cardSuits= ['spade' , 'diamond', 'heart', 'clubs'];
let values= ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
let colors = ['red', 'black'];

let findCards = cardSuits.reduce((acc, cardSuit)  => {
    values.forEach(name => {
        const color = (cardSuit === 'diamond' || cardSuit === 'heart')? colors[0] : colors[1];
        acc.push({cardSuit, name, color})
    })
    return acc;
}, [] );

console.log(findCards);
// 9a- знайти піковий туз
console.log(findCards.filter((card) => (card.name === 'ace' && card.cardSuit === 'spade')));
// 9b - всі шістки
console.log(findCards.filter(card => card.name === '6'));
// 9c - всі червоні карти
console.log(findCards.filter((card) => card.color === 'red'));
// 9d - всі буби
console.log(findCards.filter((card) => card.cardSuit === 'diamond'));
// 9e - всі трефи від 9 та більше
console.log(findCards.filter(card => (card.cardSuit === 'clubs' && !(card.name < 9) )))

// 9a- знайти піковий туз
let findSpadeAce = (cardSuits, values, colors) => {
    for(const cardSuit of cardSuits) {
        for (const value of values) {
            let color;
            (cardSuit === 'spade' || cardSuit === 'clubs')? color = colors[1]: color = colors[0];
            if(cardSuit === 'spade' && value === 'ace') {
                return value + " " + cardSuit + " " + color;
            }
        }
    }
}
console.log(findSpadeAce(cardSuits, values, colors));

// 9b - всі шістки
let findSixAll= (cardSuits, values) => {
    let arr = [];
    for(const cardSuit of cardSuits) {
        for (const value of values) {
            if(value.includes('6')){
                console.log (value + " " + cardSuit);
                arr.push({value: value , cardSuit: cardSuit});
            }
        }
    }
    return( arr);
}
console.log(findSixAll(cardSuits, values));

// 9c - всі червоні карти
let findAllRedCards = (cardSuits, values ) => {
    let arr = [];
    for(const cardSuit of cardSuits) {
        for(const value of values) {
            if (cardSuit === 'diamond' || cardSuit === 'heart'){
                arr.push({value: value , cardSuit: cardSuit, color: 'red'});
            }
        }
    }
    return arr;
}
console.log(findAllRedCards(cardSuits, values, colors));

// 9d - всі буби
let findAllDiamonds = (cardSuits, values) => {
    let arr = [];
    for(const cardSuit of cardSuits) {
        for(const value of values) {
            if(cardSuit === 'diamond'){
                arr.push({value: value , cardSuit: cardSuit});
            }
        }
    }
    return arr;
}
console.log(findAllDiamonds(cardSuits, values));

// 9e - всі трефи від 9 та більше
let allClubsMoreEight = (cardSuits, values) => {
    let arr = [];
    for(const cardSuit of cardSuits) {
        for (const value of values) {
           if(cardSuit === 'clubs' && value !== '6' && value !== '7' && value !== '8'){
               arr.push(value + " " + cardSuit);
           }
        }
    }
    return arr;
}
console.log(allClubsMoreEight(cardSuits, values));
// =========================

//   10 -  Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let getSuitCards = cardSuits.reduce((acc , card) => {
    console.log(card);
    acc[card] = values;
    acc.push();
    return acc;
}, [{}]);
console.log(getSuitCards);
// =========================

//   11 -  взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let findObjects = (arr, findValue) => arr.filter(obj => obj.modules.includes(findValue));

console.log(findObjects(coursesArray, 'sass'));
console.log(findObjects(coursesArray, 'docker'));

let findObjects2 = (arr) => {
    let newArrSass = [];
    let newArrDocker = [];
    arr.forEach(obj => (obj["modules"].includes('sass')) ?  newArrSass.push(obj) : (obj["modules"].includes('docker'))? newArrDocker.push(obj) : null);
    return ( [newArrSass, newArrDocker] );
}
console.log(findObjects2(coursesArray));