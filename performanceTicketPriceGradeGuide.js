let VIPPrice = 15;
let RPrice = 13;
let SPrice = 10;
let APrice = 8;

function checkPrice(grade) {
  switch(grade) {
    case 'R':
      console.log(`${grade}석은 ${RPrice}만원 입니다.`);
      break;
    case 'VIP':
      console.log(`${grade}석은 ${VIPPrice}만원 입니다.`);
      break;
    case 'S':
      console.log(`${grade}석은 ${SPrice}만원 입니다.`);
      break;
    case 'A':
      console.log(`${grade}석은 ${APrice}만원 입니다.`);
      break;
    default:
      console.log(`VIP, R, S, A 중에서 하나를 선택해 주세요.`);
  }
}

checkPrice('R');
checkPrice('VIP');
checkPrice('S');
checkPrice('A');
checkPrice('B');