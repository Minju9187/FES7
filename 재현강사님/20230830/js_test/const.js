// const는 한번 사용 후 바뀌지 않는것에 사용
const hello = "first hello";
if (true) {
  const hello = "second hello";
  console.log(hello);
}

console.log(hello);
