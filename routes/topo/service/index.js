var express = require("express");
var router = express.Router();
const Mock = require("mockjs");

const { Random } = Mock;

let dataList = [];

for (let i = 0; i < 150; i++) {
  dataList.push(
    Mock.mock({
      "id|1-100": 100,
      dateTime: Random.now(),
      "name|1": ["AMD", "CMD", "UMD"],
    })
  );
}

/* GET service listing. */
router.get("/v1/dbio/kpiManager/service", function (req, res, next) {
  const { page = 1, size = 10, kpiKey } = req.query;

  const data = dataList.slice((page - 1) * size, page * size);

  res.json({
    data,
    count: dataList.length,
    all: dataList.length,
    success: 2,
  });
});

module.exports = router;
