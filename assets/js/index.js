function canFormTriangle(a = 3, b = 4, c = 5) {
  return (Number.isFinite(a) && Number.isFinite(b) && Number.isFinite(c) &&a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a);
}
const firstSide = Number(prompt("Введіть першу сторону:"));
const secondSide = Number(prompt("Введіть другу сторону:"));
const thirdSide = Number(prompt("Введіть третю сторону:"));

const result = canFormTriangle(firstSide, secondSide, thirdSide);

console.log("Трикутник існує:", result);
