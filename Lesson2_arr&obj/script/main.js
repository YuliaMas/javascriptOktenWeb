// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array_1 =
    ["like", 10, true, "sun", {name: 'Yuliya'}, "good day", [11, 22, 33], ['name','lastname'], null, 1];

console.log(array_1);
console.log(array_1[0]);
console.log(array_1[1]);
console.log(array_1[2]);
console.log(array_1[3]);
console.log(array_1[4]);
console.log(array_1[5]);
console.log(array_1[6][0]);
console.log(array_1[6][1]);
console.log(array_1[6][array_1[6].length-1]);
console.log(array_1[array_1.length - 3][0] + " " + array_1[array_1.length - 3][1]);
console.log(array_1[array_1.length - 2]);
if (array_1.length > 0) {
    console.log(array_1[array_1.length - 1]);
} else {
    console.log(null);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

const book_Harry_Potter = {
    title: "Harry Potter and the Half-Blood Prince",
    pageCount: 652,
    genre: "fantasy"
};

const book_Inferno = {
    title: "Inferno",
    pageCount: 642,
    genre: "fantasy novel"
}

const book_Da_Vinci_Code= {
    title: "The Da Vinci Code",
    pageCount: 689,
    genre: " thriller",
    authors: [ {name : "Den Braun"}, { age: 60} ]
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" -
// являється  масивом. Кожен автор має поля name та age.

book_Harry_Potter.authors = [
    {
        name : "J.K.Rowling",
        age: 58
    }
];
book_Inferno.authors = [
    {
        name : "Den Braun",
        age: 59
    }
];
book_Da_Vinci_Code.authors = [
    {
        name : "Den Braun",
        age: 59
    }
];

console.log(book_Harry_Potter);
console.log(book_Inferno);
console.log(book_Da_Vinci_Code);

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль' +
// ' пароль кожного користувача

const user = [
    {
        name : 'Yuliya',
        username: 'YuliaM',
        password: 'ascer1234@'
    },
    {
        name : 'Vanessa',
        username : "likeHeard",
        password: '156634@U',
    },
    {
        name : 'Luda',
        username : "likes",
        password: '1234@Y',
    },
    {
        name : 'Vanya',
        username : "horror",
        password: 'a35335olia',
    },
    {
        name : 'Sanya',
        username : "hero",
        password: 'a35122HJ',
    },
    {
        name : 'Anna',
        username : "sweet",
        password: 'sajh09765',
    },
    {
        name : 'Olia',
        username : "Good_day",
        password: 's233olia',
    },
    {
        name : 'Vanya',
        username : "angel",
        password: 'angel1234',
    },
    {
        name : 'Lilia',
        username : "lila",
        password: '12334lilia',
    },
    {
        name : 'Iryna',
        username : "bad_angel",
        password: 'iryna1990@Like',
    }
];

console.log(user[0].password);
console.log(user[1].password);
console.log(user[2].password);
console.log(user[3].password);
console.log(user[4].password);
console.log(user[5].password);
console.log(user[6].password);

console.log(user[user.length-3].password);
console.log(user[user.length-2].password);
console.log(user[user.length-1].password);


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//     Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний
// масив з 21 значенням виключаємо одразу

const temperatureForecast = [
    { "Monday":
            {
                tempMorning: 10,
                tempDay: 20,
                tempEvening: 15,
            }
    },
    { "Tuesday":
            {
                tempMorning: 15,
                tempDay: 24,
                tempEvening: 18,
            }
    },
    { "Wednesday":
            {
                tempMorning: 8,
                tempDay: 16,
                tempEvening: 12,
             }
    },
    { "Thursday":
            {
                tempMorning: 8,
                tempDay: 18,
                tempEvening: 15,
             }
    },
    { "Friday":
            {
                tempMorning: 15,
                tempDay: 24,
                tempEvening: 19,
            }
    },
    { "Saturday":
            {
                tempMorning: 17,
                tempDay: 25,
                tempEvening: 20,
            }
    },
    { "Sunday":
            {
                tempMorning: 16,
                tempDay: 26,
                tempEvening: 21,
            }
    }
];

console.log(temperatureForecast);

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює
// 1, 0, -3

let x = +prompt("Введіть число...");
if (x !== 0) {
    console.log('Вірно');
}else {
    console.log('Невірно');
}

console.log( x !== 0  ? 'Вірно' : 'Невірно' );

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає
// число
// (в першу, другу, третю или четверту частину години).

const time = +prompt("Ввести число від 0 до 59");

if  (time >= 0 && time < 15) {
    console.log("перша частина години");
}
if (time >= 15 && time < 30) {
    console.log("друга частина години");
}
if (time >= 30 && time < 45) {
    console.log("третя частина години");
}
if (time >=45 && time < 60) {
    console.log("четверта частина години");
}
if(!!!time || time > 60 || time < 0) {
    console.log("Невірно");
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число
// (у першу, другу чи третю).

const day = +prompt("Ввести число від 1 до 31");
if (day > 0 && day <= 10) {
    console.log("Перша декада місяця");
} else if (day > 10 && day <= 20) {
    console.log("Друга декада місяця");
} else if (day > 20 && day <= 31)  {
    console.log("Третя декада місяця");
}else {
    console.log('false');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
//     інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let code = 3;
let code = +prompt("Ввести число від 1 до 7 - weekday");
switch (code) {
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
        console.log('It is not a weekday');
}

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.

let firstNum = +prompt("Ввести перше число");
let secondNum = +prompt("Ввести друге число");

if (firstNum > secondNum ) {
    console.log(`Максимальне число firstNum = ${firstNum}`);
}else if (firstNum < secondNum) {
    console.log(`Максимальне число secondNum = ${secondNum}`);
}else {
   console.log( "firstNum = secondNum = " + firstNum );
}

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні,
//         тобто ті, які приводиться до false, а це 0 null undefined і тд).


x = false;
if (!!x) {
    console.log(x);
} else {
    console.log("default");
}

x = "";
switch (!!x) {
    case true :
        console.log(x);
        break;
    default:
        console.log("default");
}

x = 0;
console.log(x = !!x ? x : "default");

//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен
//     його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log("Супер" + " " + coursesAndDurationArray[0].title);
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log("Супер" + " " + coursesAndDurationArray[1].title);
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log("Супер" + " " + coursesAndDurationArray[2].title);
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log("Супер"  + " " + coursesAndDurationArray[3].title);
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log("Супер" + " " + coursesAndDurationArray[4].title);
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log("Супер" + " " + coursesAndDurationArray[5].title);
}