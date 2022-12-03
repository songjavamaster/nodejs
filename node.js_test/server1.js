const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const app = express();
// const port = process.env.PORT || 3001;

app.get("/testapi", (req, res) => {
  res.send("Hello World!");
});

app.listen(5000);
