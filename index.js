// Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// function clock() {
//     for (let i = 1; i <= 2; i++) {
//         console.log(`${i} хвилина`);
//
//         for (let j = 1; j < 60; j++) {
//             console.log(`${j} секунда`);
//         }
//     }
// }
//
// clock();

// Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// function clock2() {
//     let mins = 60;
//
//     for (let i = 1; i <= 3; i++) {
//         if (i === 3) {
//             mins = 20;
//         }
//
//         for (let j = 1; j < mins; j++) {
//             console.log(`${j} хвилина`);
//
//             for (let k = 1; k < 60; k++) {
//                 console.log(`${k} секунда`);
//             }
//         }
//
//         if (i !== 3) {
//             console.error(`${i} година`);
//         }
//     }
// }
//
// clock2();

// Відтворити роботу годинника, відрахувавши час, який передає користувач у форматі clock(hour, minute, second) {

function logHours(hour) {
    for (let i = 0; i < hour; i++) {
        logMinutes()
        console.error(`${i + 1} година`)
    }
}

function logMinutes(minute = 60) {
    for (let i = 0; i < minute; i++) {
        logSeconds()
        if(i+1!==60) {
            console.warn(`${i + 1} хвилина`)
        }
    }
}

function logSeconds(second = 60) {
    for (let i = 0; i < second; i++) {
        if(i+1!==60){
            console.log(`${i + 1} секунда`)
        }
    }
}

function clock(hour, minute, second) {
    hour = hour || 0;
    minute = minute || 0;
    second = second || 0;

    if ((hour >= 0 && hour < 24) && (minute >= 0 && minute < 60) && (second >= 0 && second < 60)) {
        hour && logHours(hour);
        minute && logMinutes(minute)
        second && logSeconds(second)
    } else {
        console.error("Не валідні дані")
    }
}

clock(1,2,12);


// __________________________________________________________

// Дано відсортований масив (мінімум 10 елементів)
// Необхідно модифікувати масив так, що б дублікати зустрічалися не більше 2х разів підряд.
//
//     Example:
// [1, 1, 1, 2, 3, 3, 3, 3] -> [ 1, 1, 2, 3, 3, 1, 3, 3]
//
//     [0, 0, 1, 1, 1, 2, 2] -> [0, 0, 1, 1, 2, 2, 1]
//
// function sortNums(arr) {
//     const arr2 = [];
//     const arr3 = [];
//
//     while (arr.length) {
//         if (arr[0] === arr[1] && arr[0] === arr[2]) {
//             let item = arr.shift();
//             arr3.push(item);
//
//         } else {
//             let item = arr.shift();
//             arr2.push(item);
//
//         }
//     }
//     return arr2.concat(arr3);
// }
//
// console.log(sortNums([1, 1, 1, 2, 3, 3, 3, 3]));

// ____________________________________________________________

// Створити функцію, яка приймає число і повертає текст як у прикладі:
//     3275  —>  "3000 + 200 + 70 + 5"
//
// function getDecimals(number, res = []) {
//     const d = +`1${'0'.repeat((number + '').length - 1)}`;
//
//     if (number) {
//         res.push(Math.trunc(number / d) * d);
//         getDecimals(number - Math.trunc(number / d) * d, res);
//     }
//
//     return res.join(' + ');
// }
//
// console.log(getDecimals(3275));

// ____________________________________________________________

//Дано масив цілих чисел. Знайдіть той, який зустрічається непарну кількість разів. Завжди буде тільки одне ціле число, яке зустрічається непарну кількість разів
//     [1,2,3,4,5,2,4,1,3] -> 5
//
//version 1
// function getNum(numbers) {
//     let obj = {};
//
//     for (const number of numbers) {
//         obj[number] = obj[number] + 1 || 0;
//     }
//
//     for (const key in obj) {
//         if (!obj[key]) {
//             return +key;
//         }
//     }
// }
//
// console.log(getNum([1, 2, 3, 4, 5, 2, 4, 1, 3]));
//
//version 2
// console.log([1, 2, 3, 4, 5, 2, 4, 1, 3].reduce((acc, item, _, array) => {
//     if (!(array.length-array.filter(i => i !== item).length-1)){
//         return item;
//     }
//     return acc;
// }));


// _____________________________________________________________

// Знайти анаграму. Перевірити чи слово має в собі такі самі літери як і поеперднє слово.
//
//     ANAGRAM | MGANRAA -> true
// EXIT | AXET -> false
// GOOD | DOGO -> true
//
// function isAnagram(str1,str2) {
//     return [...str1].sort().join('') ===[...str2].sort().join('');
// }
//
// console.log(isAnagram('ANAGRAM', 'MGANRAA'));
// console.log(isAnagram('EXIT', 'AXET'));
// console.log(isAnagram('GOOD', 'DOGO'));

// _______________________________________________________________

// Точний ступінь двійки
// Дано натуральне число N.
//     Виведіть слово YES, якщо число N є точним ступенем двійки або слово NO в протилежному випадку.
//     Операцией піднесення в ступінь користуватись заборонено!
//
// function isExDegree(n) {
//
//     while (n / 2 >= 2) {
//         n /= 2;
//     }
//
//     if (n === 2 || n === 0) {
//         return 'YES';
//     }
//
//     return 'NO';
// }
//
// console.log(isExDegree(256));


// ______________________________________________________________

// Сума цифр числа
// Дано натуральне число N. Порахуйте суму його цифр.
//     При вирішенні цього завдання не можна використовувати стрічки,
//     списки, масиви і цикли.
//     Рекурсія)
//
// function sum(n) {
//     if (n){
//         return n+sum(n-1);
//     }
//     return n;
// }
//
// console.log(sum(9));

// ______________________________________________________________

// Паліндром
// Дано слово, яке складається із латинських букв. Перевірте, чи є це слово паліндромом. Виведіть YES или NO.
//     При вирішенні цієї задачі не можна користуватись циклами.
//
// function checkForPalindrome(str) {
//
//     if (str.toLowerCase() === str.toLowerCase().split('').reverse().join('')){
//         return 'YES'
//     }
//     return 'NO';
//     //АБО
//     // return str.toLowerCase() === str.toLowerCase().split('').reverse().join('') ? 'YES' : 'NO';
// }
//
// console.log(checkForPalindrome('madam'));

// _______________________________________________________________

// Кількість одиниць
// Дана послідовність натуральных чисел в рядку, який закінчується двома числами 0 підряд.
// Визначте, скільки разів у цій послідовності зустрічається число 1. Числа, які після двох нулів, ігноруйте.
//
// 2176491947586100 -> 3
//
// function countOnes(number) {
//     const numbersWithoutZeros = number.toString().split('00')[0];
//     const arrWithOnes = numbersWithoutZeros.split('').filter(i => i === '1');
//     return arrWithOnes.length;
// }
//
// console.log(countOnes(217649194758610011111));

// _________________________________________________________________

// Вирівняти багаторівневий масив в однорівневий
//     [1,3, ['Hello, World', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, World', 9, 6, 1, 'oops', 9]
// flat використовувати заборонено.
//
// const arr = [1, 3, ['Hello, World', [9, 6, 1]], ['oops'], 9];
// /**
//  * This method creates a new array with all sub-array elements concatenated into it recursively.
//  *
//  * @param startArray- Initial array that you want to join resulting array with.
//  * @returns A new array with all sub-elements included.
//  */
// Array.prototype.customFlat = function (startArray = []) {
//
//     for (const item of this) {
//         if (!Array.isArray(item)) {
//             startArray.push(item);
//         } else {
//             item.customFlat(startArray);
//         }
//     }
//
//     return startArray;
// }
//
// console.log(arr.customFlat([1,2,3]));

//     ___________________________________________________________________

// Знайти найбільший елемент в масиві за допомогою reduce
//     [1,6,9,0,17,88,4,7] -> 88
//
// console.log([1,6,9,0,17,88,4,7].reduce((acc, item) =>  (item > acc) ? item : acc));

// ____________________________________________________________________

// Отримати масив лише унікальних значень за допомогою reduce
//   [1, 9, 0, 1, 5, 9, 1, 6] -> [1, 9, 0, 5, 6]
//
//console.log([1, 9, 0, 1, 5, 9, 1, 6].reduce((acc, item) => acc.includes(item) ? acc : [...acc, item], []));

// ____________________________________________________________________

// Знайти найбільше число паліндром, яке утворюється завдяки добутку двох простих п'ятизначних чисел.
//
// const checkForPalindrome = num => num.toString() === num.toString().split('').reverse().join('')
//
// function getPalindrome() {
//     for (let i = 99999; i > 10000; i--) {
//
//         for (let j = 99999; j > 10000; j--) {
//
//             if (i % i === 0 && j % j === 0) {
//                 if (checkForPalindrome(i * j)) {
//
//                     return i * j;
//                 }
//
//             }
//         }
//     }
// }
//
// console.time('test');
//
// console.log(getPalindrome());
//
// console.timeEnd('test');

//     ____________________________________________________________________

// Реалізувати друкарську машинку.
//     У вас є текст "Hello World".
//     Ваша функція має друкувати цей текст по 1 символу в браузері.
//     КОЖНА нова буква має бути з РАНДОМНОЮ затримкою від 0.1 до 1 секунди.
//     Цим самим ви маєте симулювати написання даного тексту юзером.
//     Приклад: "Hello"
// Затримки:
//     H (затримка 0.6)
// e (затримка 0.1)
// l (затримка 0.3)
// l (затримка 0.7)
// о (затримка 1)
//
// function typeLetter(letter) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve(letter);
//         }, Math.ceil(Math.random() * 1000));
//     });
// }
//
// async function typewriter(text) {
//     for (const el of text) {
//         console.log(await typeLetter(el));
//     }
// }
//
// typewriter("Hello World");
