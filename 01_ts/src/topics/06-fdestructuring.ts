export interface Product {
  description: string;
  price: number;
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

const phone: Product = {
  description: "Nokia",
  price: 100,
};
const tablet: Product = {
  description: "Samsung",
  price: 200,
};

const shoppingCart = [phone, tablet];
const tax = 0.15;

export const taxCalc = (options: TaxCalculationOptions): [number, number] => {
  const { products, tax } = options;
  let total = 0;
  products.forEach(({ price }) => (total += price));
  return [total, total * tax];
};

const [total, taxTotal] = taxCalc({
  products: shoppingCart,
  tax,
});
console.log(total);
console.log(taxTotal);