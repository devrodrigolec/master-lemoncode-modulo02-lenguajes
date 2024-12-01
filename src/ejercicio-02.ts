console.log("************** DELIVERABLE 02 *********************");

const concat = <T1, T2>(a: T1[] = [], b: T2[] = []): (T1 | T2)[] => [
  ...(a ?? []),
  ...(b ?? []),
];
const numbers2: number[] = [1, 2, 3];
const strings2: string[] = ["a", "b", "c"];
console.log(concat<number, string>(numbers2, strings2));

const booleans: boolean[] = [true, false, true];
const objects: object[] = [{ id: 1 }, { id: 2 }];
console.log(concat<boolean, object>(booleans, objects));

const emptyArray = undefined;
const notArray = null;
console.log(concat(emptyArray, notArray));
console.log(concat());
