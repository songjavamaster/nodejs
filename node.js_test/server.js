const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors"); //cors 설치
const morgan = require("morgan"); //api 실행 된 log찍힘

const routes = require("./routes"); //api 따로 분리
const testRouter = require("./testRouter");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev")); //서버 로그관리

app.post(routes.testapi, testRouter);

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
