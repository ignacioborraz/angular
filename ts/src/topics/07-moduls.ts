import { Product, taxCalc } from "./06-fdestructuring";

const shoppingCart: Product[] = [
  { description: "Motorola", price: 150 },
  { description: "Lenovo", price: 140 },
];

const [total, taxTotal] = taxCalc({ products: shoppingCart, tax: 0.15 });
console.log(total);
console.log(taxTotal);
