console.log("************** DELIVERABLE 01 *********************");
const numbers = [1, 2, 3, 4, 5];
const strings = ["a", "b", "c", "d"];
const mixed = [true, "text", 42, { id: 2 }];

console.log("***ARRAY OPERATIONS***");

type ErrorMessage = 'A parameter cannot be "null"';
const errorMessage: ErrorMessage = 'A parameter cannot be "null"';
console.log("--------* Head *--------");

const head = <T>(array: T[] | null = []): T | ErrorMessage => {
  if (!array) return errorMessage;

  const [firstElement] = array ?? [];
  return firstElement;
};

console.log("head(numbers) :", head<number>(numbers));
console.log("head(strings) :", head<string>(strings));
console.log("head(mixed): ", head(mixed));
console.log("head(null): ", head(null));
console.log("head(undfined): ", head(undefined));
console.log("head()", head());

console.log("--------* Tail *--------");

const tail = <T>(array: T[] | null = []): T[] | ErrorMessage => {
  if (!array) return errorMessage;
  const [, ...rest] = array ?? [];
  return rest;
};

console.log("tail(numbers) :", tail<number>(numbers));
console.log("tail(strings) :", tail<string>(strings));
console.log("tail(mixed): ", tail(mixed));
console.log("tail(null): ", tail(null));
console.log("tail(undfined): ", tail(undefined));
console.log("tail()", tail());

console.log("--------* Init *--------");

const init = <T>(array: T[] | null = []): T[] | ErrorMessage => {
  if (!array) return errorMessage;

  const arrayLastItemIndex = array?.length - 1;

  return array?.filter((_element, index) => index !== arrayLastItemIndex);
};

console.log("init(numbers) :", init<number>(numbers));
console.log("init(strings) :", init<string>(strings));
console.log("init(mixed): ", init(mixed));
console.log("init(null): ", init(null));
console.log("init(undfined): ", init(undefined));
console.log("init()", init());

console.log("--------* Last *--------");

const last = <T>(array: T[] | null = []): T | ErrorMessage => {
  if (!array) return errorMessage;

  return array?.[array.length - 1];
};

console.log("last(numbers) :", last<number>(numbers));
console.log("last(strings) :", last<string>(strings));
console.log("last(mixed): ", last(mixed));
console.log("last(null): ", last(null));
console.log("last(undfined): ", last(undefined));
console.log("last()", last());
