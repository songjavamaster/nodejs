const testRouter = require("express").Router();
const routes = require("./routes");
const testController = require("./testController");

// testRouter.get("/testapi", (req, res) => {
//   res.send("hi");
// }); 1

testRouter.post(routes.testapi, testController);

module.exports = testRouter;
