console.log("************** DELIVERABLE 01 *********************");
const numbers = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d"];
const mixed = [true, "text", 42, null];

console.log("***ARRAY OPERATIONS***");
console.log("numbers[]: ", numbers);
console.log("strings[]: ", strings);
console.log("mixed[]: ", mixed);

console.log("--------* Head *--------");

const head = <T>(array: T[]): T => {
  const [firstElement] = array;
  return firstElement;
};

console.log("head(numbers) :", head<number>(numbers));
console.log("head(strings) :", head<string>(strings));
console.log("head(mixed): ", head(mixed));

console.log("--------* Tail *--------");

const tail = <T>(array: T[]): T[] => {
  const [, ...rest] = array;
  return rest;
};

console.log("tail(numbers) :", tail<number>(numbers));
console.log("tail(strings) :", tail<string>(strings));
console.log("tail(mixed): ", tail(mixed));

console.log("--------* Init *--------");

const init = <T>(array: T[]): T[] => {
  const arrayLastItemIndex = array.length - 1;

  return array.filter((_element, index) => index !== arrayLastItemIndex);
};

console.log("init(numbers) :", init<number>(numbers));
console.log("init(strings) :", init<string>(strings));
console.log("init(mixed): ", init(mixed));

console.log("--------* Last *--------");

const last = <T>(array: T[]): T => {
  return array.findLast((_element, index) => index === array.length - 1);
};

console.log("last(numbers) :", last<number>(numbers));
console.log("last(strings) :", last<string>(strings));
console.log("last(mixed): ", last(mixed));
