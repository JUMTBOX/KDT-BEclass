// @ts-check

// function func1(callback) {
//   console.log('1번 함수');
//   callback();
// }

// function func2(callback) {
//   console.log('2번 함수');
//   callback();
// }

// function func3() {
//   console.log('3번 함수');
// }

// func1(function () {
//   console.log('2번 인척하는 새로 만든 익명 함수');
// });

// function multiplication(num, callback) {
//   let answer = 0;
//   setTimeout(() => {
//     answer = num ** 2;
//     callback(answer);
//   }, 2000);
// }

// function say(result) {
//   console.log(result);
// }

// multiplication(3, say);

function buySync(item, price, quantity, callback) {
  console.log(`${item} 상품을 ${quantity} 개 골라서 점원에게 주었습니다.`);
  setTimeout(() => {
    console.log('계산이 필요합니다.');
    const total = price * quantity;
    callback(total);
  }, 1000);
}

// function pay(tot) {
// console.log(`${tot} 원을 지불하였습니다.`);
// }

buySync('포켓몬빵', 1000, 5, (total) => {
  console.log(`${total}원을 지불하였습니다.`);
});
