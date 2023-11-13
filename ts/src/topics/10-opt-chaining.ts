export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: "igna",
};

const passenger2: Passenger = {
  name: "marta",
  children: ["igna", "beli", "juanchi", "juli"],
};

const printChildren = (passenger: Passenger): number => {
  let quantity = passenger.children?.length || 0;
  console.log(quantity);
  return quantity;
};

printChildren(passenger1);
printChildren(passenger2);
