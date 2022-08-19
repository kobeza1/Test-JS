// МОДУЛЬ 1-2

function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = "Insufficient funds!";
  } else {
    message = `You ordered ${orderedQuantity} droids, you have ${
      customerCredits - totalPrice
    } left`;
  }
  // Change code above this line
  return message;
}

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(500, 10, 5000));

function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
  } else result = message.slice(0, maxLength) + "...";

  /// Change code above this line
  return result;
}

//console.log(formatMessage("Curabitur ligula sapien", 16));
//console.log(formatMessage("Vestibulum facilisis purus nec", 20));
//console.log(formatMessage("Vestibulum facilisis purus nec", 30));

function checkForSpam(message) {
  let result;
  // Change code below this line
  message = message.toLowerCase();
  result = message.includes("spam") || message.includes("sale");

  // Change code above this line
  return result;
}

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

function getExtremeElements(array) {
  // Change code below this line
  const firstElement = array[0];
  const lastElement = array[array.length - 1];

  return [firstElement, lastElement];

  // Change code above this line
}

//console.log(getExtremeElements([1, 2, 3, 4, 5]));

function calculateEngravingPrice(message, pricePerWord) {
  // Change code below this line

  return message.split(" ").length * pricePerWord;

  // Change code above this line
}

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));

function slugify(title) {
  // Change code below this line
  const titleNormalize = title.toLowerCase().split(" ");
  const slug = titleNormalize.join("-");
  return slug;

  // Change code above this line
}
// console.log(slugify("Arrays for begginers"));

// function makeArray(firstArray, secondArray, maxLength) {
//   // Change code below this line
//   const newArray = firstArray.concat(secondArray);
//   if (newArray.length > maxLength) {
//     newArray.length = maxLength;
//     return newArray;
//   }

//   return newArray;
//   // Change code above this line
// }

function makeArray(firstArray, secondArray, maxLength) {
  // Change code below this line
  const newArray = firstArray.concat(secondArray);
  if (newArray.length > maxLength) {
    return newArray.slice(0, maxLength);
  }

  return newArray;
  // Change code above this line
}

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4));

// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }

//   return total;
// }

// const r1 = calculateTotal(18);
// console.log(r1);

// function findLongestWord(string) {
//   const words = string.split(" ");
//   let longestWord = words[0];

//   for (const word of words) {
//     console.log(word);

//     if (word.length >= longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }

//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3));

// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }

//   return newArray;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));

// function getEvenNumbers(start, end) {
//   let arrayEvenNumbers = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       arrayEvenNumbers.push(i);
//     }
//   }
//   return arrayEvenNumbers;
// }
// console.log(getEvenNumbers(2, 5));

// function includes(array, value) {
//   for (let i = 0; i < array.length; i += 1) {
//     if (value === array[i]) {
//       return true;
//     }
//   }
//   return false;
// }

// МОДУЛЬ 3. ОБЪЕКТЫ;

// console.log(includes([1, 2, 3, 4, 5], 3));
// console.log(includes([1, 2, 3, 4, 5], 17));

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   console.log(key);
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);

// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
//   const keys = Object.keys(object);
//   propCount = keys.length;

//   // for (const key of keys) {
//   //   propCount += 1;
//   // }

//   return propCount;
//   // Change code above this line
// }

// console.log(countProps({ name: "Mango", age: 2 }));

// const animal = {
//   legs: 4,
//   name: "Richard",
//   country: "Ukraine",
// };

// const dog = Object.create(animal);
// dog.type = "animal";
// dog.size = "medium";
// console.log(dog);

// for (const key in dog) {
//   const a = dog.hasOwnProperty(key);
//   console.log(a);
// }

// const keys = Object.keys(dog);
// const values = Object.values(dog);
// const entries = Object.entries(dog);
// console.log(keys);
// console.log(values);
// console.log(entries);

// const array = [1, 7, 0, null, undefined, 8];
// console.log(array);
// const arrayX = array;
// array.push(9);
// const arrayY = [...array];
// array.push(9);
// array.pop();
// array.shift();
// array.unshift(5, 6);
// array.splice(4, 1);
// array.splice(4, 2, 6, 7);
// const b = array.join("");
// console.log(arrayX);
// console.log(arrayY);
// console.log(array);
// console.log(b);

// console.log(arrayX === array);
// console.log(arrayY === array);

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salaryArray = Object.values(salaries);

//   for (const salary of salaryArray) {
//     totalSalary += salary;
//   }

//   // Change code above this line
//   return totalSalary;
// }
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (productName === product.name) {
//       return product.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar"));
// console.log(getProductPrice("Scanner"));
// console.log(getProductPrice("Droid"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   let valuesArray = [];

//   for (const product of products) {
//     const productKeyArray = Object.keys(product);
//     for (const productKey of productKeyArray) {
//       if (propName === productKey) {
//         valuesArray.push(product[productKey]);
//       }
//     }
//   }
//   return valuesArray;
// }

// function getAllPropValues(propName) {
//   let propValuesArray = [];
//   for (const product of products) {
//     if (propName === p) propValuesArray.push(product.propName);
//   }
//   return propValuesArray;
// }
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// function makeTask(data) {
//   const defaultData = {
//     completed: false,
//     category: "General",
//     priority: "Normal",
//   };

//   return { ...defaultData, ...data };
// }

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   const defaultData = {
//     completed,
//     category,
//     priority,
//   };
//   return { ...defaultData, ...data };
// }

// console.log(
//   makeTask({
//     category: "Homemade",
//     priority: "Low",
//     text: "Take out the trash",
//   })
// );

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const index = this.books.indexOf(oldName);
//     if (this.books.includes(oldName)) {
//       this.books.splice(index, 1, newName);
//     }
//     return this.books;
//   },
// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         if (potionIndex === -1) {
//           return `Potion ${potionName} is not in inventory!`;
//         }
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name = newName;
//       }
//     }
//   },
// };
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));

// МОДУЛЬ 4

// const numbers = [2, 6, 8, 1, 7];
// numbers.forEach((number) => console.log(number));

// console.log(numbers);
// const players = [
//   { id: 908, name: "Poly", score: 20 },
//   { id: 698, name: "Mango", score: 10 },
//   { id: 104, name: "Robert", score: 15 },
// ];
// const playerToFind = 908;
// const functionFind = players.find((({player})) => ({ id } === playerToFind));
// console.log(functionFind);

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(
//       `There is no pizza with the name ${pizzaName} in the assortment.`
//     );
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   let arrayItems = [1, 2, 3];

//   orderedItems.forEach(function (orderedItems, index, arrayItems) {
//     totalPrice += orderedItems;
//     const doubledItems = orderedItems * 2;
//     console.log(doubledItems);
//     arrayItems.push(1);
//   });
//   console.log(totalPrice);
//   console.log(arrayItems);
// }

// calculateTotalPrice([12, 85, 37, 4]);

// function changeEven(numbers, value) {
//   const pureAray = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       element += value;
//     }
//     pureAray.push(element);
//   });

//   return pureAray;

// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);
// console.log(titles);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     skills: ["ipsum", "lorem"],
//     gender: "male",
//     age: 37,
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     skills: ["tempor", "mollit", "commodo", "veniam", "laborum"],
//     gender: "female",
//     age: 34,
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     skills: ["nulla", "anim", "proident", "ipsum", "elit"],
//     gender: "male",
//     age: 24,
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     skills: ["adipisicing", "irure", "velit"],
//     gender: "female",
//     age: 21,
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     skills: ["ex", "culpa", "nostrud"],
//     gender: "male",
//     age: 27,
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     skills: ["non", "amet", "ipsum"],
//     gender: "male",
//     age: 38,
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     skills: ["lorem", "veniam", "culpa"],
//     gender: "female",
//     age: 39,
//   },
// ];

// const getUserNames = (users) => users.map((user) => user.name);

// console.log(getUserNames(usersArray));
// getUserNames(usersArray);

// const getUsersWithFriend = (users, friendName) =>
//   users.filter((user) => user.friends.includes(friendName));

// console.log(getUsersWithFriend(users, "Briana Decker"));

// const getFriends = (users) => {
//   const friends = users.flatMap((user) => user.friends);
//   const uniqueFriends = friends.filter(
//     (friend, index) => friends.indexOf(friend) === index
//   );
//   return uniqueFriends;
// };

// console.log(getFriends(users));

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];

// const eachElementInFirstIsEven = firstArray.every(element => element % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(element => element % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(element => element % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(element => element % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(element => element % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(element => element % 2 !== 0);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const playtimeArray = players.map((player) => player.playtime);
// const playtimeTotal = playtimeArray.reduce(
//   (previousPlaytime, playtime) => previousPlaytime + playtime
// );
// const gamesPlayedArray = players.map((player) => player.gamesPlayed);
// const gamesPlayedTotal = gamesPlayedArray.reduce(
//   (previousValue, value) => previousValue + value
// );
// const totalAveragePlaytimePerGame = playtimeTotal / gamesPlayedTotal;
// console.log(totalAveragePlaytimePerGame);

// const totalAveragePlaytimePerGame = players.reduce(
//   (total, player) => total + player.playtime / player.gamesPlayed,
//   0
// );
// console.log(totalAveragePlaytimePerGame);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// console.log(totalScore);

// const averageScore = totalScore / students.length;

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };

// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// console.log(playtimes);
// const totalPlayTime = playtimes.reduce(
//   (previousValue, number) => previousValue + number,
//   0
// );
// console.log(totalPlayTime);

// const calculateTotalBalance = (users) => {
//   return users.reduce((total, user) => total + user.balance, 0);
// };
// console.log(calculateTotalBalance(users));

// const getTotalFriendCount = (users) => {
//   return users.reduce((total, user) => total + user.friends.length, 0);
// };
// console.log(getTotalFriendCount(users));

// const sortByDescendingFriendCount = (users) => {
//   newArray = users.sort((user1, user2) => user1.balance - user2.balance);
//   return newArray;
// };

// console.log(sortByDescendingFriendCount);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .sort((book1, book2) => book1.author.localeCompare(book2.author))
//   .map((book) => book.author);

// console.log(names);

// const getSortedFriends = (users) => {
//   const friends = users.flatMap((user) => user.friends);
//   return friends
//     .filter((user, index) => friends.indexOf(user) === index)
//     .sort((friend1, friend2) => friend1.localeCompare(friend2));
// };
// console.log(getSortedFriends(users));

// PRACTICE 30.07.2022

// const findBestEmployee = (employees) =>
//   Object.entries(employees).sort((a, b) => b[1] - a[1])[0][0];

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );
// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// );
// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// );

// const cars = [
//   {
//     make: "Honda",
//     model: "CR-V",
//     type: "suv",
//     amount: 14,
//     price: 24045,
//     onSale: true,
//   },
//   {
//     make: "Honda",
//     model: "Accord",
//     type: "sedan",
//     amount: 2,
//     price: 22455,
//     onSale: true,
//   },
//   {
//     make: "Mazda",
//     model: "Mazda 6",
//     type: "sedan",
//     amount: 8,
//     price: 24195,
//     onSale: false,
//   },
//   {
//     make: "Mazda",
//     model: "CX-9",
//     type: "suv",
//     amount: 7,
//     price: 31520,
//     onSale: true,
//   },
//   {
//     make: "Toyota",
//     model: "4Runner",
//     type: "suv",
//     amount: 19,
//     price: 34210,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Sequoia",
//     type: "suv",
//     amount: 16,
//     price: 45560,
//     onSale: false,
//   },
//   {
//     make: "Toyota",
//     model: "Tacoma",
//     type: "truck",
//     amount: 4,
//     price: 24320,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "F-150",
//     type: "truck",
//     amount: 11,
//     price: 27110,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Fusion",
//     type: "sedan",
//     amount: 13,
//     price: 22120,
//     onSale: true,
//   },
//   {
//     make: "Ford",
//     model: "Explorer",
//     type: "suv",
//     amount: 6,
//     price: 31660,
//     onSale: false,
//   },
// ];

// const fn = (carsArray) => {
//   const newObject = cars.reduce((accum, car) => {
//     if (!accum.hasOwnProperty(car.type)) {
//       accum[car.type] = [car];
//     } else accum[car.type] = [...accum[car.type], car];
//     return accum;
//   }, {});
// };

// console.log(fn(cars));
// { 'suv': [{...}, {...}], 'sedan': [...], 'truck': [...] }

// Напиши функцию getAllPropValues(arr, prop), которая получает массив
// объектов и имя свойства. Возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function (arr, prop) {
//   return arr.reduce(
//     (accum, product) =>
//       product.hasOwnProperty(prop) ? [...accum, product[prop]] : accum,
//     []
//   );
// };

// console.log(getAllPropValues(products, "name")); // ['Радар', 'Сканер', 'Дроид', 'Захват']
// console.log(getAllPropValues(products, "quantity")); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, "category")); // []

//Напишите функцию caculculateAverage()
//которая принимает произвольное количество
//аргументов и возвращает их среднее значение.
//Добавить проверку, что аргументы это числа.

// const calculateAverage = (...args) => {
//   return (
//     args.reduce((total, number) => {
//       return typeof number === "number" ? total + number : total;
//     }, 0) / args.filter((number) => typeof number === "number").length;
//   );
// };

// console.log(calculateAverage(12, 43, 654, 23, 54, 78, "hello", "abchsakjbc"));

// const str = "aaabbbbbccccccc";

// function calculate(str) {
//   return str
//     .split("")
//     .reduce(
//       (acum, item) =>
//         !acum.hasOwnProperty(item)
//           ? { ...acum, [item]: 1 }
//           : { ...acum, [item]: (acum[item] += 1) },
//       {}
//     );
// }

// console.log(calculate(str));

// const arr = [
//   [23, 11, ["hello", "world", "Vasya"]],
//   "some str",
//   [
//     777,
//     "word",
//     [
//       "Привет",
//       ["как сюда добраться"],
//       ["John", [{ name: "Vasya", age: 18 }, ["finish"]]],
//     ],
//   ],
// ];

// const oneArray = arr.flat(Infinity);
// console.log(oneArray);

// function descendingOrder(n) {
//   return parseInt(String(n).split("").sort().reverse().join(""));
// }

// console.log(descendingOrder(0));

// Codewars

// function lovefunc(flower1, flower2) {
//   return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//     (flower1 % 2 !== 0 && flower2 % 2 == 0)
//     ? true
//     : false;
// }

// function lovefunc(flower1, flower2) {
//   return flower1 % 2 !== flower2 % 2;
// }
// console.log(lovefunc(9, 2));

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//     default:
//       return 0;
//   }
// }

// function invert(array) {
//   let arrayResult = [];
//   for (let number of array) {
//     number === 0 ? (number = -0) : (number -= number * 2);
//     arrayResult.push(number);
//   }
//   return arrayResult;
// }

// function invert(array) {
//   return array.map((x) => -x);
// }

// console.log(invert([1, 2, 3, 4, 5]));
// console.log(invert([-8, 9, -3, 0]));

// function points(games) {
//   let teamPoints = 0;
//   for (const game of games) {
//     const gameScore = game.split("");
//     if (gameScore[0] > gameScore[2]) {
//       teamPoints += 3;
//     } else if (gameScore[0] < gameScore[2]) {
//       teamPoints += 0;
//     } else if (gameScore[0] === gameScore[2]) {
//       teamPoints += 1;
//     }
//   }
//   return teamPoints;
// }

// const points = (games) =>
//   games.reduce((output, current) => {
//     return (output +=
//       current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
//   }, 0);

// console.log(points(["3:1", "2:2", "0:1"]));

// function getGrade(s1, s2, s3) {
//   const score = Math.round((s1 + s2 + s3) / 3);
//   console.log(score);
//   if (90 <= String(score) <= 100) {
//     return "A";
//   } else if (80 <= String(score) <= 90) {
//     return "B";
//   } else if (70 <= score <= 80) {
//     return "C";
//   } else if (60 <= score <= 70) {
//     return "D";
//   } else if (0 <= score <= 60) {
//     return "F";
//   } else return 0;
// }
// console.log(getGrade(80, 75, 65));

// class Storage {
//   constructor(array = []) {
//     this.items = array;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     if (this.items.includes(itemToRemove)) {
//       const indexOfElement = this.items.indexOf(itemToRemove);
//       this.items.splice(indexOfElement, 1);
//     }
//   }
// }

// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems());
// storage.addItem("Droid");
// console.log(storage.getItems());
// storage.removeItem("Prolonger");
// console.log(storage.getItems());

// class StringBuilder {
//   constructor(initialValue = "") {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value += str;
// let newArray = [];
// newArray = this.value.split("");
// newArray.push(str);
// this.value = newArray.join("");
// }
// padStart(str) {
//   this.value = str + this.value;
// }
// padBoth(str) {
// let newArray = [];
// newArray = this.value.split("");
// newArray.splice(0, 0, str);
// newArray.push(str);
// this.value = newArray.join("");
//     this.value = str + this.value + str;
//   }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel, blacklistedEmails = [] }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = blacklistedEmails;
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//     // Change code above this line
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const obj = {
//   testKey: "testValue",
// };
// obj["newProp"] = "prop";
// // console.log(obj["testKey"]);

// const a = Object.values(obj);
// console.log(a);
// const b = Object.entries(obj);
// console.log(b);
// const c = Object.keys(obj);
// console.log(c);
// const d = obj.hasOwnProperty("testKey");
// console.log(d);
// // console.log(obj);

// function sum(numbers) {
//   return numbers.length === 0
//     ? 0
//     : numbers.reduce((element, nextElement) => element + nextElement, 0);
// }

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// console.log(sum([1, 5, 4, -2, 6.4]));
// console.log(sum([]));

// function abbrevName(name) {
//   var nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }
