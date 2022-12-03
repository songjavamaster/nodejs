//배열과 반복문(while)

var number = [1, 400, 12, 34];
//반복문을 몇번 반복하겠다라고 하면 i라고 하는 관습적인 이름의 변수를써서
//초기화를 시키고 반복문을 실행될때마다 i 값을 기존의 i값에다가 1씩 증가.
var i = 0;
var total = 0;
while(i < number.length){
    total = total + number[i];
    i = i + 1;
}
console.log(`total : ${total}`);