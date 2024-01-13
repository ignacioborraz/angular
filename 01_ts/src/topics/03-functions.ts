function addNumbers(a: number, b: number): number {
  return a + b
}
const result = addNumbers(1, 2)
console.log(result);

const addNumbersArrow = (a: number, b: number): string => {
  const result = a + b
  return "result: " + result
}
const resultArrow = addNumbersArrow(1, 2)
console.log(resultArrow);

function multiply(n1: number, n2?: number, base: number = 2): number {
  return n1 * base
}
const resultMultiply = multiply(2)
console.log(resultMultiply);

interface Character {
  name: string;
  hp: number;
  showHp: () => void
}

const strider: Character = {
  name: "Strider",
  hp: 50,
  showHp() {
    console.log("Puntos de vida: "+this.hp);
    
  }
}
strider.showHp()

const healChar = (char: Character, amount: number) => {
  char.hp += amount
}
healChar(strider,20)
strider.showHp()
healChar(strider,20)
strider.showHp()
healChar(strider,20)
strider.showHp()

export { }