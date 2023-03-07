


function knockDoor(num, name , callback) {
    console.log(`노크를 하고 기다립니다.`);
    setTimeout(() => {
        callback(name,num);
    }, num*1000)
}


function callName(name,num) {
  console.log(`${name}이가 ${num}초 만에 문을 열고 나왔습니다...`);
}   

knockDoor(2,"호식", callName);

