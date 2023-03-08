// @ts-check

const promise = new Promise((resolve, reject) => {
  const tetz = 'young';
  if (tetz === 'old') {
    setTimeout(() => {
      resolve('tetz is old');
    }, 3000);
  } else {
      reject('tetz is getting old');
  }
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((data) => {
    console.log(data);
  });
