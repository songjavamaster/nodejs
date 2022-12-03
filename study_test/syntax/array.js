//CRUD 배열

var arr = ['A','B','C','D'];
console.log(arr[1]); //배열은 0번째 부터 시작! 0 1 2 3

//배열 안에 있는 값을 바꾸려면
arr[2] = 3; // 3번쨰 자리에 있는 C가 3으로 변경
console.log(arr)

//length는 0번째부터가 아닌 1부터 시작
console.log(arr.length);

//배열 안에 넣을 때는 push 사용
arr.push('E');
console.log(arr);
