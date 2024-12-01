console.log("************** DELIVERABLE 03 *********************");

console.log("*** Clone ***");

const clone = <T extends object>(source: T = {} as T): T => {
  const copy: T = { ...(source ?? ({} as T)) };

  return copy;
};




const obj1 = {
  name: "Rodrigo",
  age: 32,
  address: { city: "Madrid", zip: 28019 },
};

const obj2 = {
  user: "Rodrigo27",
  password: 123456,
  email: "rodrigo@email.com",
  administrator: true,
};

const copyObj1 = clone(obj1);
const copyObj2 = clone(obj2);

console.log("obj1 === copyObj1 ? ", copyObj1 === obj1);
console.log("obj2 === copyObj2 ? ", copyObj2 === obj2);

const emptyObj = clone(undefined);
console.log(emptyObj);

console.log("*** Merge ***");

const merge = <T extends object, U extends object>(
  source: T = {} as T,
  target: U = {} as U
): T & U => {
  return { ...(target ?? {}), ...(source ?? {}) } as T & U;
};

const a = {name: "Maria", surname: "Ibañez", country: "SPA"}
const b = {name: "Luisa", age: 31, married: true}

console.log(merge(a,b))

const objSource = { a: 1, b: 2 };
const objTarget = { b: 3, c: 4 };

const mergedObjects = merge(objSource, objTarget);
console.log(mergedObjects);
console.log(merge({}, {}));
console.log(merge({ a: null }, { b: undefined }));
