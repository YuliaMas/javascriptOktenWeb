// 1 - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, lastname , email, phone) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.phone = phone;
}

// 2 - створити пустий масив, наповнити його 10 об'єктами new User(....)
let user1 = new User(1,'Michal', 'Club', 'asd@gmail.com', 8900022883);
let user2 = new User(2, 'Milka', 'Club', 'asd@gmail.com', 8900022884);
let user3 = new User(3, 'Marysia', 'Club', 'asd@gmail.com', 8900022885);
let user4 = new User(4, 'Monika', 'Club', 'asd@gmail.com', 8900022886);
let user5 = new User(5, 'Milana', 'Club', 'asd@gmail.com', 8900022887);
let user6 = new User(6, 'Mesia', 'Club', 'asd@gmail.com', 8900022888);
let user7 = new User(7, 'Lara', 'Club', 'asd@gmail.com', 8900022889);
let user8 = new User(8, 'Milena', 'Club', 'asd@gmail.com', 8900022893);
let user9 = new User(9, 'Mila', 'Club', 'asd@gmail.com', 8900022983);
let user10= new User(10, 'Petya', 'Club', 'asd@gmail.com', 8900023883);

function newUsers(...objects) {
    let newUsersArr = [];
    newUsersArr.push(...objects);
    return newUsersArr;
}

let newUsersArr = newUsers(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
console.log(newUsersArr);

// 3- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

Array.prototype.getOddId = function (callback) {
    return this.filter(callback);
}

let arrUsersOddId= newUsersArr.getOddId(obj => obj.id%2 === 0);
console.log(arrUsersOddId);

// 4 - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (відсортовано по спаданню)(sort)

Array.prototype.sortedUsersId = function (callback){
    return this.sort(callback);
}

console.log(arrUsersOddId.sortedUsersId((userA, userB) => userB.id - userA.id));

// 5 - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, lastname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// 6 - створити пустий масив, наповнити його 10 об'єктами Client
let client1 = new Client(1, 'Yulia', 'Hnat', '123@gmail.com', 4231444214, ['banana', 'apple']);
let client2 = new Client(2, 'Yurij', 'Hnat', '12d123@gmail.com', 423144452, ['bread', 'apple']);
let client3 = new Client(3, 'Nastya', 'Lucyk', 'dsa123@gmail.com', 4231444262, ['water', 'apple','bread']);
let client4 = new Client(4, 'Eva', 'Love', 'cxb123@gmail.com', 4231444576, ['banana', 'apple', 'raspberry']);
let client5 = new Client(5, 'Lilia', 'Master', 'qeq123@gmail.com', 4231444377, ['banana', 'apple', 'blueberry','raspberry']);
let client6 = new Client(6, 'Ira', 'Mas', 'hdfh123@gmail.com', 4231444848, ['water', 'bread']);
let client7 = new Client(7, 'Taras', 'Velychko', 'ew123@gmail.com', 4231444335, ['water','milk', 'sweets', 'butter']);
let client8 = new Client(8, 'Nina', 'Lalak', '12qrrq3@gmail.com', 42314445113, ['banana',  'blueberry', 'mango', 'cocos','apple']);
let client9 = new Client(9, 'Yulia', 'Mino', '1qq2qfq3@gmail.com', 4231444789, ['bread', 'water', 'banana', 'apple']);
let client10= new Client(10, 'Sergij', 'Melnyk', '1qqrt23@gmail.com', 4231444266, ['bread', 'banana', 'apple']);

let arrClients = newUsers(client1, client2,  client3, client4, client5, client6, client7, client8, client9, client10);
console.log(arrClients);

// 7 - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

Array.prototype.sortedOrderProducts = function (arr) {
    return this.sort(arr);
}

console.log(arrClients.sortedOrderProducts((clientA, clientB) =>{
    let a =clientA.order.length;
    let b = clientB.order.length;
    return((a > b)?1:(a<b)?-1:0);
    // if (clientA.order.length > clientB.order.length){
    //     return 1;
    // } else
    // if (clientA.order.length < clientB.order.length){
    //     return -1;
    // } else
    // if (clientA.order.length === clientB.order.length){
    //     return 0;
    // }
}));

// 8 - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

 function Car(model, prod, year, maxSpeed, engineV ) {
     this.model = model;
     this.prod = prod;
     this.year = year;
     this.maxSpeed = maxSpeed;
     this.engineV = engineV;
     // this.driver = [];
     this.driver = null;

     this.drive = function () {
       return(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
     }

     this.info = function () {
         let arr = [];
         for (const item in this) {
             if (typeof this[item] === 'object' || typeof this[item] === 'function') continue;
             console.log(item + " - " + this[item]);
             arr.push(item + " - " + this[item]);
         }
         return arr;
     }

     this.increaseMaxSpeed = function(newSpeed){
         this.maxSpeed += newSpeed;
         return this.maxSpeed;
     }

     this.changeYear = function(newValue) {
         this.year = newValue;
         return this.year ;
     }

     this.addDriver = function (obj){
         // this.driver.push(obj);
         this.driver = obj;
         console.log(this.model, this.prod, this.year, this.maxSpeed, this.engineV, this.driver[0]);
         console.log(this.driver)
         return this.driver;
     }

     this.infoAll = function () {
        for (const name in this) {
            if (typeof this[name] !== 'function' && this[name] !== null) {
                console.log(`${name} - ${typeof this[name] === 'object'? JSON.stringify(this[name]): this[name] }`);
            }
        }
     }

 }

let car1 = new Car('Kamiq', 'Skoda', 2021, 250, 15);
let car2 = new Car('Octavia', 'Skoda', 2022, 260, 16);
 console.log(car1);
 console.log(car2);
 console.log(car1.drive());
 console.log(car2.drive());
 console.log(car1.info());
 console.log(car1.increaseMaxSpeed(20));
console.log(car1);
console.log(car2.increaseMaxSpeed(30));
console.log(car2);
console.log(car1.drive());
console.log(car2.drive());
console.log(car1.changeYear(2023));
console.log(car2.changeYear(2024));
console.log(car1.info());
console.log(car2.info());
console.log(car1.addDriver(user1));
console.log(car2.addDriver(user2));
car1.infoAll();
car2.infoAll();

//       (Те саме, тільки через клас)
//  9 - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість,
// об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class newCar  {
    constructor(model, prod, year, maxSpeed, engineV) {
        this.model = model;
        this.prod = prod;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineV = engineV;
        this.driver = [];
    }
    drive(){
        return(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info(){
        let arr = [];
        for (const name in this) {
            if(typeof this[name] === 'object') continue;
            console.log(`${name} - ${this[name]}`);
            arr.push(`${name} - ${this[name]}`);
        }
        return arr;
    }
    increaseMaxSpeed (newSpeed){
        return this.maxSpeed += newSpeed;
    }
    changeYear (newValue){
        return this.year = newValue;
    }
    addDriver(driver){
        this.driver.push(driver);
        console.log(this.driver[0]);
        return this.driver[0];
    }
}

let newCar1 = new newCar('Kamiq', 'Skoda', 2021, 250, 15);

console.log(newCar1.drive());
console.log(newCar1);
console.log(newCar1.info());
console.log(newCar1.increaseMaxSpeed(10));
console.log(newCar1.drive());
console.log(newCar1);
console.log(newCar1.changeYear(2024));
console.log(newCar1);
console.log(newCar1.addDriver(user4));
console.log(newCar1);

// 10 -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Popeluwka {
    constructor(name, age, legSize) {
        this.name = name;
        this.age = age;
        this.legSize = legSize;
    }

}

let popeluwka1 = new Popeluwka('Lesia', 23, 38);
let popeluwka2 = new Popeluwka('Olivia', 20, 36);
let popeluwka3 = new Popeluwka('Popeluwka', 18, 35);
let popeluwka4 = new Popeluwka('Mila', 25, 39);
let popeluwka5 = new Popeluwka('Elsa', 24, 38);
let popeluwka6 = new Popeluwka('Victoria', 22, 37);
let popeluwka7 = new Popeluwka('Olia', 25, 36);
let popeluwka8 = new Popeluwka('Yulia', 21, 35);
let popeluwka9 = new Popeluwka('Lilia', 19, 36);
let popeluwka10= new Popeluwka('Iryna', 18, 38);

function addGirls(...obj) {
    let allGirls = [];
    allGirls.push(...obj);
    return allGirls;
}
console.log(addGirls(popeluwka1, popeluwka2, popeluwka3, popeluwka4, popeluwka5, popeluwka6, popeluwka7, popeluwka8, popeluwka9, popeluwka10));

let allGirls = [popeluwka1, popeluwka2, popeluwka3, popeluwka4, popeluwka5, popeluwka6, popeluwka7, popeluwka8, popeluwka9, popeluwka10];
console.log(allGirls);

// 11 - Створити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, sizeShoes) {
        this.name = name;
        this.age = age;
        this.sizeShoes = sizeShoes;
    }
}

let prince = new Prince('Ken', 19, 35);
console.log(prince);

//  12 -   За допомоги циклу знайти ,яка попелюшка повинна бути з принцом.
Array.prototype.findPopeluwka = function (prince){
    for (const girl of this) {
        if(girl.age <= prince.age && girl.legSize === prince.sizeShoes){
            return girl;
        }
    }
}

console.log(allGirls.findPopeluwka(prince));

// 13 -   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
Array.prototype.findPopeluwka2 = function (callback) {
    console.log(this.find(callback));
    // return (this.find(callback));
}
allGirls.findPopeluwka2((girl) => {
    return (girl.legSize === prince.sizeShoes && girl.age <= prince.age ) ;
});

// 14 - Через Array.prototype. створити власний foreach, filter, map
Array.prototype.ownMap = function(callback) {
    let arr =[];
    for (const item of this) {
        arr.push(callback(item, item.id = arr.length + 1));
    }
    return arr;
}
console.log(allGirls.ownMap(girl => girl));

let ownMaping = allGirls.ownMap( girl => {
    console.log(girl);
    return({...girl});
})
console.log(ownMaping);

Array.prototype.ownFilter = function(callback) {
    for (const item of this) {
        if(callback(item)) {
            console.log(item);
            console.log(`The young girl's name is ${item.name}`);
        }
    }
}
allGirls.ownFilter(girl => girl.age < 20);

Array.prototype.ownForEach = function (callback) {
    for (const item of this) {
        callback(item);
    }
}
allGirls.ownForEach((girl) => console.log(girl));


