export function whatsMyType<T>(argument: T): T {
  return argument;
}

const amIString = whatsMyType<string>("Hola Mundo");
console.log(amIString.split(" "));

const amINumber = whatsMyType<number>(123);
console.log(amINumber * 123);

const amIArray = whatsMyType<string[]>(["Hola", "Mundo"]);
console.log(amIArray.join(""));
