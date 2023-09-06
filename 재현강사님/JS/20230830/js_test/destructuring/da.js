const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);

const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a, b);

// 비효율적
// const a = object.a;
// const b = object.b;

// console.log(a);
// console.log(b);
