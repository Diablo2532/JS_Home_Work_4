function funcMinMax(first, second) {
  if (typeof first !== typeof second) {
    return null;
  }
  if (
    typeof first === "number" &&
    (!Number.isFinite(first) || !Number.isFinite(second))
  ) {
    return null;
  }
  if (first > second) {
    return first;
  }
  if (first < second) {
    return second;
  }
  return null;
}
const firstVal = Number(prompt("Введіть число перше:"));
const secondVal = Number(prompt("Введіть число друге :"));

const result_1 = funcMinMax(firstVal,secondVal);
console.log('result_1:', result_1);

function nameOfNumber() {
  const input = prompt("Прошу подати число:");
  const value = Number(input);

  if (input === null || input.trim() === "" || !Number.isFinite(value)) {
    alert("Це не число");
  } else if (value > 0) {
    alert("Додатнє");
  } else if (value < 0) {
    alert("Від'ємне");
  } else {
    alert("Нуль");
  }
}

nameOfNumber();
function isDivisorOf100(number) {
  const status = Number.isFinite(number) && number !== 0 && 100 % number === 0;
  return status;
}

const value = Number(prompt("Подайте число:"));
const result_2 = isDivisorOf100(value);

console.log("Число є дільником 100:", result_2);
function canFormTriangle(a = 3, b = 4, c = 5) {
  return (Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c) &&a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a);
}
const firstSide = Number(prompt("Введіть першу сторону:"));
const secondSide = Number(prompt("Введіть другу сторону:"));
const thirdSide = Number(prompt("Введіть третю сторону:"));

const result_3 = canFormTriangle(firstSide, secondSide, thirdSide);

console.log("Трикутник існує:", result_3);
