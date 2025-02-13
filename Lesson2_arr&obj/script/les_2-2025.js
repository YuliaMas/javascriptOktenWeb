// Масиви та об'єкти

// #67kfznmiMl
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

const arr = [23, "life", true, false, {name: 'Yulia'}, '', 0, [1, 2, 3], 3.2, -1];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[arr.length-1]);

// #LARqoUj5I
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book1 = {
    title: 'A' ,
    pageCount: 23,
    genre: 'comedy'
}
const book2 = {
    title: 'B' ,
    pageCount: 123,
    genre: 'fantasy'
}
const book3 = {
    title: 'C' ,
    pageCount: 98,
    genre: 'family'
}
console.log(book1);
console.log(book2);
console.log(book3);

//     #sA3Gg1sCp
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

const arrBooks = [
    {
        title: 'A' ,
        pageCount: 23,
        genre: 'comedy',
        authors: [{name: 'F', age: 45}, { name: 'G', age: 28}]
    },
    {
        title: 'B' ,
        pageCount: 123,
        genre: 'fantasy',
        authors: [{name: 'FD', age: 32}, {name:'GD', age: 46}, {name:'KD', age: 29}]
    },
    {
        title: 'C' ,
        pageCount: 98,
        genre: 'family',
        authors: [{name: 'BF', age: 87}]
    }
]
console.log(arrBooks);

//     #jCHFnEbdmFd
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

const user = [
    {
        name: 'Ya',
        username: 'lapsha',
        password: 'dwnffjYYU111'
    },
    {
        name: 'Yaryk',
        username: 'den',
        password: 'sffjk9999w1'
    },
    {
        name: 'Yaryna',
        username: 'heard',
        password: 'hhdu652nna'
    },
    {
        name: 'Lena',
        username: 'serce',
        password: 'dsswnffjYYU4551'
    },
    {
        name: 'Yura',
        username: 'balet',
        password: 'dsfffjYYU332231'
    },
    {
        name: 'Yanina',
        username: 'lavka',
        password: 'eewYYU111'
    },
    {
        name: 'Yasha',
        username: 'havka',
        password: 'dwnffjew332'
    },
    {
        name: 'Lana',
        username: 'dron',
        password: 'edtyjyQW@3'
    },
    {
        name: 'Dana',
        username: 'duet',
        password: 'fgttyh555443ddddf'
    },
    {
        name: 'Valia',
        username: 'love',
        password: 'vxjj2yewn'
    }
]

console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);
console.log(user[7].password);
console.log(user[8].password);
console.log(user[9].password);

// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив -
// вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

const weatherWeek = [
    {
        id: 'mon',
        temp: [ 2, 8, -1]
    },
    {
        id: 'tue',
        temp: [ -2, 3, -6]
    },
    {
        id: 'wed',
        temp: [ -4, 4, -1]
    },
    {
        id: 'thu',
        temp: [ 2, 5, -2]
    },
    {
        id: 'fri',
        temp: [ 0, 3, -3]
    },
    {
        id: 'sat',
        temp: [ -2, -4, -8]
    },
    {
        id: 'sun',
        temp: [ -6, -10, -15]
    }
];
console.log(weatherWeek);

// Логічні розгалуження:

//     #bAUsaq6LI
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = -3;
if(x!==0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}

console.log(x!==0 ? 'Вірно': 'Невірно' );


// #3ckURgvs
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('Write number 0 to 59');
if(time >= 0 && time < 60) {
    switch (true) {
        case time>=0 && time<=15 :
            console.log("It's 1 part of hour");
            break;
        case time>15 && time<=30 :
            console.log("It's 2 part of hour");
            break;
        case time>30 && time<=45 :
            console.log("It's 3 part of hour");
            break;
        default:
            console.log("It's 4 part of hour");
    }
} else {
    alert("It's not right number");
}

// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('Write number 1 to 31');
switch (true) {
    case day>=1 && day<=10:
        console.log('Dekada 1');
        break;
    case day>10 && day<=20:
        console.log('Dekada 2');
        break;
    case day>20 && day<=31:
        console.log('Dekada 3');
        break;
    default:
        console.log("It's not right number");
}

// #KzrtqyQ
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа
// що заплановано на цей день (можна замість плану на день, назву дня англійською).
const schedule = [
    {
        id: 1,
        day: 'Monday'
    },
    {
        id: 2,
        day: 'Tuesday'
    },
    {
        id: 3,
        day: 'Wednesday'
    },
    {
        id: 4,
        day: 'Thursday'
    },
    {
        id: 5,
        day: 'Friday'
    },
    {
        id: 6,
        day: 'Saturday'
    },
    {
        id: 7,
        day: 'Sunday'
    },
];

let id = +prompt("Write number 1-7 for a day of week");

switch (true) {
    case id>0 && id<8:
        console.log(schedule[id-1].day);
        break;
    default:
        console.log("It's wrong");
}

//     #uwsz1RnTQJ1
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

const number1 = Math.floor(Math.random() * 100);
const number2 = Math.floor(Math.random() * 100);

switch (true){
    case number1>number2:
        console.log('Max is number 1 -', number1 + " > " + number2 );
        break;
    case number2>number1:
        console.log('Max is number 2 -', number2 + " > " + number1 );
        break;
    default:
        console.log('The numbers are the same', number1 + " = " + number2 );
}

//         #iBvqtjEm
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті,
//         які приводиться до false, а це 0 null undefined і тд).

let x1 =  false;
switch  (!!x1) {
    case true :
        console.log('It is true - ' + x1 );
        break;
    default:
        console.log(`It is false - ${x1}`);
}


//     #awLXL6TBzg
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент
//     на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (let course of coursesAndDurationArray) {
    if (course.monthDuration > 5) {
        console.log("Super " + course.title);
    }
}
