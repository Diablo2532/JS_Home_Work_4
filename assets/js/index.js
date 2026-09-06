/**
 * Порівнює два значення та повертає більше з них.
 *
 * Функція приймає значення будь-яких типів.
 * Якщо типи різні, значення не є скінченними числами
 * або значення рівні — повертає null.
 *
 * @param {*} first Перше значення.
 * @param {*} second Друге значення.
 * @returns {*} Більше значення або null.
 */
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
/**
 * Перевіряє функцію funcMinMax
 * на різних типах даних.
 *
 * Користувач вводить два значення,
 * а програма самостійно визначає їх тип.
 *
 * @returns {*} Результат виконання функції.
 */
function testFuncMinMax() {
  const input_1 = prompt("Введіть перше значення:");
  const input_2 = prompt("Введіть друге значення:");

  function convertValue(input) {
    if (input === null) {
      return null;
    }

    if (input === "true") {
      return true;
    }

    if (input === "false") {
      return false;
    }

    if (input.trim() !== "" && Number.isFinite(Number(input))) {
      return Number(input);
    }

    return input;
  }

  const first = convertValue(input_1);
  const second = convertValue(input_2);

  const result = funcMinMax(first, second);

  console.log("Результат funcMinMax:", result);

  return result;
}

// Перевірка funcMinMax
testFuncMinMax();


/**
 * Перевіряє введене користувачем значення.
 *
 * @param {string|null} input Значення, отримане від prompt.
 * @returns {number|null} Число або null, якщо введення некоректне.
 */
function getNumber(input) {
  if (input === null || input.trim() === "") {
    return null;
  }

  const value = Number(input);

  if (!Number.isFinite(value)) {
    return null;
  }

  return value;
}

/**
 * Визначає знак числа.
 *
 * @param {number} value Число для перевірки.
 * @returns {string} Додатнє, від'ємне або нуль.
 */
function nameOfNumber(value) {
  if (value > 0) {
    return "Додатнє";
  }

  if (value < 0) {
    return "Від'ємне";
  }

  return "Нуль";
}

/**
 * Перевіряє, чи є число дільником 100.
 *
 * @param {number} number Число для перевірки.
 * @returns {boolean} true, якщо число є дільником 100.
 */
function isDivisorOf100(number) {
  return (
    Number.isFinite(number) &&
    number !== 0 &&
    100 % number === 0
  );
}

/**
 * Перевіряє, чи можна побудувати трикутник
 * з трьома заданими сторонами.
 *
 * @param {number} a Перша сторона.
 * @param {number} b Друга сторона.
 * @param {number} c Третя сторона.
 * @returns {boolean} true, якщо трикутник існує.
 */
function canFormTriangle(a = 3, b = 4, c = 5) {
  return (
    Number.isFinite(a) &&
    Number.isFinite(b) &&
    Number.isFinite(c) &&
    a > 0 &&
    b > 0 &&
    c > 0 &&
    a + b > c &&
    a + c > b &&
    b + c > a
  );
}

/**
 * Перевіряє функцію, яка приймає одне число.
 *
 * @param {string} message Повідомлення для prompt.
 * @param {Function} callback Функція, яку потрібно перевірити.
 * @returns {*} Результат виконання функції.
 */
function testFunction(message, callback) {
  const input = prompt(message);
  const value = getNumber(input);

  if (value === null) {
    console.log("Помилка: введено некоректне число.");
    return null;
  }

  const result = callback(value);

  console.log("Результат:", result);

  return result;
}

// Перевірка nameOfNumber
testFunction(
  "Введіть число для визначення знака:",
  nameOfNumber
);

// Перевірка isDivisorOf100
testFunction(
  "Введіть число для перевірки дільника 100:",
  isDivisorOf100
);


/**
 * Перевіряє функцію, яка приймає три числа.
 *
 * @param {Function} callback Функція, яку потрібно перевірити.
 * @returns {*} Результат виконання функції.
 */
function testTriangle(callback) {
  const a = getNumber(prompt("Введіть першу сторону:"));
  const b = getNumber(prompt("Введіть другу сторону:"));
  const c = getNumber(prompt("Введіть третю сторону:"));

  if (a === null || b === null || c === null) {
    console.log("Помилка: введено некоректну сторону.");
    return null;
  }

  const result = callback(a, b, c);

  console.log("Результат:", result);

  return result;
}

// Перевірка canFormTriangle
testTriangle(canFormTriangle);