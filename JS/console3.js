import users from "./users.js";

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   showOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   },
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.table(account.showOrders()); // ['order-1', 'order-2', 'order-3', 'order-4']

// const inventory = {
//   items: ["Knife", "Gas mask"],
//   add(itemName) {
//     console.log(`Adding ${itemName} to inventory`);

//     this.items.push(itemName);
//   },
//   remove(itemName) {
//     console.log(`Removing ${itemName} from inventory`);

//     this.items = this.items.filter((item) => item !== itemName);
//   },
// };

// const invokeInventoryAction = function (itemName, action) {
//   console.log(`Invoking action on ${itemName}`);
//   action(itemName); //или action.call(inventory, itemName) и без bind ниже
// };

// invokeInventoryAction("Medkit", inventory.add.bind(inventory));
// // Invoking action on Medkit
// // Adding Medkit to inventory

// console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

// invokeInventoryAction("Gas mask", inventory.remove.bind(inventory));
// // Invoking action on Gas mask
// // Removing Gas mask from inventory

// console.log(inventory.items); // ['Knife', 'Medkit']

// const stones = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];

// function calcTotalPrice(stones, stonesName) {
//   return stones.reduce((total, { name, price, quantity }) => {
//     return name === stonesName ? (total += price * quantity) : total;
//   }, 0);
// }
// console.log(calcTotalPrice(stones, "Сапфир"));

const cars = [
  {
    make: "Honda",
    model: "CR-V",
    type: "suv",
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: "Honda",
    model: "Accord",
    type: "sedan",
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: "Mazda",
    model: "Mazda 6",
    type: "sedan",
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: "Mazda",
    model: "CX-9",
    type: "suv",
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: "Toyota",
    model: "4Runner",
    type: "suv",
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Sequoia",
    type: "suv",
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: "Toyota",
    model: "Tacoma",
    type: "truck",
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: "Ford",
    model: "F-150",
    type: "truck",
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Fusion",
    type: "sedan",
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: "Ford",
    model: "Explorer",
    type: "suv",
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

const car = {
  make: "Ford",
  model: "Explorer",
  type: "suv",
  amount: 6,
  price: 31660,
  onSale: false,
};

const car2 = {
  make: "Toyota",
  model: "Tacoma",
  type: "truck",
  amount: 4,
  price: 24320,
  onSale: true,
};

console.log({ ...car, keyD: "sedan" });
// console.log([car]);

// function sortCarsBy(cars) {
//   return cars.reduce((acc, car) => {
//     !acc.hasOwnProperty(car.type)
//       ? (acc[car.type] = [car])
//       : (acc[car.type] = [...acc[car.type], car]);
//     return acc;
//   }, {});
// }

const callback = (acc, car) => {
  return acc.hasOwnProperty(car.type)
    ? { ...acc, [car.type]: [...acc[car.type], car] }
    : { ...acc, [car.type]: [car] };
};

function sortCarsByType(arr) {
  return arr.reduce(callback, {});
}

// console.log(sortCarsBy(cars));
// console.log(sortCarsByType(cars));

// { 'suv': [{...}, {...}], 'sedan': [...], 'truck': [...] }

//   return cars.reduce((acc, car) => {
//     if (!acc.hasOwnProperty(car.type)) {
//       acc[car.type] = [car];
//       return acc;
//     }
//     acc[car.type] = [...acc[car.type], car];
//     return acc;
//   }, {});
// }

// console.log(sortCarsByType(cars));
// console.log(users);

// Получить массив всех умений всех пользователей (поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

// const getSortedUniqueSkills = (users) => {
//   const skills = users.flatMap((user) => user.skills);
//   const arrayResult = Array.from(new Set(skills));
//   return arrayResult.sort();
// };

// const getSortedUniqueSkills = (users) => [
//   ...new Set(users.flatMap((el) => el.skills).sort()),
// ];

// const getSortedUniqueSkills = (users) => [
//   ...new Set(users.flatMap(({ skills }) => skills).sort()),
// ];

// console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
