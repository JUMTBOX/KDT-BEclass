// @ts-check

function butSync(item,price,quantity,callback) {
    console.log(`${item}상품을 ${quantity}개 골라서 점원에게 주었습니다.`);
 setTimeout(()=>{
    console.log(`계산이 필요합니다.`);
    const total = price * quantity;
    
    callback(total);   
 },500)
 
}

function pay (total) {
    console.log(`${total}원을 지불하였습니다.`);
}

const totalMoney = butSync("포켓몬빵",1000, 5 , pay);
