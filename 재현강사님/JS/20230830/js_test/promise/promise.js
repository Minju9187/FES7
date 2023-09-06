function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello!!!");
  });
}

async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}
test();

// sayHello()
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .then((resolvedData) => {
//     console.log(resolvedData);
//     return resolvedData;
//   })
//   .catch((error) => {
//     console.log(error);
//   });
