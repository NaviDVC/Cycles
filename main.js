// 1. Вивести на сторінку в один рядок через кому числа від 10 до 20

let firstTaskNumber = 10;
let someEmptySrting = '';
while (firstTaskNumber < 21) { // выводит 0, затем 1, затем 2
  someEmptySrting += firstTaskNumber + ', ';
  firstTaskNumber++;
}
alert(someEmptySrting);