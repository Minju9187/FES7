// var
var hello = "hello";

function sayHello() {
  var hello = "hello hello"; // function스코프를 가지기 때문에.
  // 함수 내에서만 작동함.
  console.log(hello); // hello hello
}
sayHello;
console.log(hello); // hello
