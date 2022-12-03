const testCRUD = async (req, res) => {
  try {
    console.log(req.body, "testapi 실행");
    return res.json({ msg: "Test" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = testCRUD;
