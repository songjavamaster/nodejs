//이파일에 있는 위치가 아니고 내가 실행할려고 하는 위치의 기준으로 해서 데이터라는 dir경로를 './data/'에 값을 넣어주면 됨
var testFolder = '../study_test/data';
var fs = require('fs');

fs.readdir(testFolder, function(error, filelist){
   console.log(filelist);
})