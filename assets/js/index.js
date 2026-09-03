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