function menuSelect() {
  const menu = [
    { name: "아메리카노", price: 2000 },
    { name: "카페라떼", price: 2500 },
    { name: "카페모카", price: 2800 },
    { name: "핫초코", price: 3000 },
    { name: "과일주스", price: 3500 },
  ];

  console.log(`----------------메뉴판----------------`);

  for (let i = 0; i < menu.length; i++) {
    console.log(`${i + 1} : 음료 : ${menu[i].name} 가격 : ${menu[i].price}원`);
  }
  while (true) {
    let a = prompt(
      "원하는 음료 번호를 눌러주세요. 종료하고 싶으면 -1을 눌러주세요"
    );
    if (a >= 1 && a <= 5) {
      console.log(`${menu[a - 1].name}음료는 ${menu[a - 1].price}원입니다.`);
    } else if (a == -1) {
      console.log("종료됩니다.");
      break;
    } else {
      console.log("숫자를 잘못입력하셨습니다. 제대로 입력해주세요");
    }
  }
}
menuSelect();

// const menu = [
//   { name: "아메리카노", price: 2000 },
//   { name: "카페라떼", price: 2500 },
//   { name: "카페모카", price: 2800 },
//   { name: "핫초코", price: 3000 },
//   { name: "과일주스", price: 3500 },
// ];

// let input = 0;

// while (input !== -1) {
//   input = parseInt(prompt(' 메뉴를 선택해주세요 : 아메리카노 : 1 / 카페라떼 : 2 / 카페모카 : 3 / 핫초코 : 4 / 과일주스 : 5 / 종료하기 : -1 '));

//   switch (input) {
//       case 1:
//           console.log(`${menu[0].name} : ${menu[0].price}`);
//           break;
//       case 2:
//           console.log(`${menu[1].name} : ${menu[1].price}`);
//           break;
//       case 3:
//           console.log(`${menu[2].name} : ${menu[2].price}`);
//           break;
//       case 4:
//           console.log(`${menu[3].name} : ${menu[3].price}`);
//           break;
//       case 5:
//           console.log(`${menu[4].name} : ${menu[4].price}`);
//           break;
//       case -1:
//           console.log(`종료합니다.`);
//           break;
//       default:
//           console.log('잘못된 입력입니다.');
//   }
// }
