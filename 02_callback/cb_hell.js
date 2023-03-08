// @ts-check

function funchell(callback) {
  callback();
}

funchell(() => {
  console.log('1번 인척 하는 새로 만든 익명 함수');
  funchell(() => {
    console.log('2번 인척 하는 새로 만든 익명 함수');
    funchell(() => {
      console.log('3번 인척 하는 새로 만든 익명 함수');
    });
  });
});
