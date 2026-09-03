function isDivisorOf100(number) {
  const status = Number.isFinite(number) && number !== 0 && 100 % number === 0;
  return status;
}

const value = Number(prompt("Подайте число:"));
const result = isDivisorOf100(value);

console.log("Число є дільником 100:", result);