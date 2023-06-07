// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20

let firstArray = [];
for (let i = 10; i <= 20; i++) {
    if (i + 1 <= 21) {
        firstArray.push(i);
    }
}
document.write(`<pre>1. Вивести на сторінку в один рядок через кому числа від 10 до 20\n</pre>`)
document.write(`<pre>${firstArray.join(', ')}\n------------------------------------------------------------------------------------------------</pre>`);


// 2. Вивести квадрати чисел від 10 до 20
document.write(`<pre>2. Вивести квадрати чисел від 10 до 20\n</pre>`)
for (let i = 10; i <= 20; i++) {
    let result = i ** 2;
    document.write(`<pre>${i}² = ${result}\n</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

// 3. Вивести таблицю множення на 7
document.write(`<pre>3. Вивести таблицю множення на 7\n</pre>`)
for (let i = 1; i <= 10; i++) {
    let result = i * 7;
    document.write(`<pre>${i} * 7 = ${result}\n</pre>`);
  }
  document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')
  

// 4. Знайти суму всіх цілих чисел від 1 до 15
document.write(`<pre>4. Знайти суму всіх цілих чисел від 1 до 15\n</pre>`)
let fourthStartNumber = 1;
let fourthndNumber = 15;
let fourthResult = 0;

while (fourthStartNumber <= fourthndNumber) {
    fourthResult += fourthStartNumber;
    fourthStartNumber++;
}

document.write(`<pre> ${fourthResult}\n----------------------------------------------------------------------------------------------------</pre>`)

// 5. Знайти добуток усіх цілих чисел від 15 до 35
document.write(`<pre>5. Знайти добуток усіх цілих чисел від 15 до 35\n</pre>`)

let fifthStartNumber = 15;
let fifthEndNumber = 35;
let fifthResult = 1;

while (fifthStartNumber <= fifthEndNumber) {
    fifthResult *= fifthStartNumber;
    fifthStartNumber++;
}

document.write(`<pre>Multiplication of all numbers from 15 to 35 - ${fifthResult}\n----------------------------------------------------------------------------------------------------</pre>`)

// 6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500
document.write(`<pre>6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500\n</pre>`)
let sixthNumber = 500;
let sixthResult = 0
for (let i = 1; i <= sixthNumber; i++) {
    sixthResult += i / sixthNumber;
}
document.write(`<pre>${sixthResult}\n</pre>`)
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

// 7. Вивести суму лише парних чисел у діапазоні від 30 до 80
document.write(`<pre>7. Вивести суму лише парних чисел у діапазоні від 30 до 80\n</pre>`)
let seventhResult = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        seventhResult += i;
    }
}
document.write(`<pre>${seventhResult}</pre>`);
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')
// 8. Вивести всі числа в діапазоні від 100 до 200 кратні 3
document.write(`<pre>8. Вивести всі числа в діапазоні від 100 до 200 кратні 3\n</pre>`)
let eighthArray = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        eighthArray.push(i);
    }
}
    document.write(`<pre>${eighthArray.join(', ')}</pre>`);


document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

// 9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники. Визначити кількість його парних дільників. Знайти суму його парних дільників

document.write(`<pre>9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники. Визначити кількість його парних дільників. Знайти суму його парних дільників.</pre>`)
let ninthNumber = prompt("Write a natural number: ");
let ninthArray = [];
let ninthEven = 0;
let ninthEvenSum = 0;
for (let i = 0; i <= ninthNumber; i++) {
    if (ninthNumber % i === 0) {
        ninthArray.push(i);
     if (i % 2 === 0) {
        ninthEven++;
        if (i % i === 0 && i % 2 === 0) {
            ninthEvenSum += i;
    }
}
}
}
    document.write(`<pre>The dividers ot the number ${ninthNumber} are : ${ninthArray.join(', ')}!\n-------------------\nQuantity of even dividers: ${ninthEven}!\n-------------------\nSum of pair divisors: ${ninthEvenSum}!<\/pre>`);
    document.write('<pre>----------------------------------------------------------------------------------------------------</pre>');

// 10. Надрукувати повну таблицю множення від 1 до 10

document.write(`<pre>10. Надрукувати повну таблицю множення від 1 до 10</pre>`);
let firstTableResult = 0;
for (let i = 1; i <= 10; i++) {
    firstTableResult = i * 1;
    document.write(`<pre>${i} * 1 = ${firstTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

let secondTableResult = 0;
for (let i = 1; i <= 10; i++) {
    secondTableResult = i * 2;
    document.write(`<pre>${i} * 2 = ${secondTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

let thirdTableResult = 0;
for (let i = 1; i <= 10; i++) {
    thirdTableResult = i * 3;
    document.write(`<pre>${i} * 3 = ${thirdTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

let fourthTableResult = 0;
for (let i = 1; i <= 10; i++) {
    fourthTableResult = i * 4;
    document.write(`<pre>${i} * 4 = ${fourthTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

let fifthTableResult = 0;
for (let i = 1; i <= 10; i++) {
    fifthTableResult = i * 5;
    document.write(`<pre>${i} * 5 = ${fifthTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

let sixthTableResult = 0;
for (let i = 1; i <= 10; i++) {
    sixthTableResult = i * 6;
    document.write(`<pre>${i} * 6 = ${sixthTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

let seventhTableResult = 0;
for (let i = 1; i <= 10; i++) {
    seventhTableResult = i * 7;
    document.write(`<pre>${i} * 7 = ${seventhTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

let eighthTableResult = 0;
for (let i = 1; i <= 10; i++) {
    eighthTableResult = i * 8;
    document.write(`<pre>${i} * 8 = ${eighthTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

let ninthTableResult = 0;
for (let i = 1; i <= 10; i++) {
    ninthTableResult = i * 9;
    document.write(`<pre>${i} * 9 = ${ninthTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')

let tenthTableResult = 0;
for (let i = 1; i <= 10; i++) {
    tenthTableResult = i * 10;
    document.write(`<pre>${i} * 10 = ${tenthTableResult}</pre>`);
}
document.write('<pre>----------------------------------------------------------------------------------------------------</pre>')