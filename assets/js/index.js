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

const result = funcMinMax(firstVal,secondVal);
console.log('result:', result);
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
