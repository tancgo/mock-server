var express = require("express");
var router = express.Router();
const Mock = require("mockjs");

const { Random } = Mock;

let dataList = [];

for (let i = 0; i < 150; i++) {
  dataList.push(
    Mock.mock({
      id: Random.guid(),
      name: Random.name(),
      latestUpdateTime: Random.date("yyyy-MM"),
    })
  );
}

/* GET users listing. */
router.get("/v1/dbio/kpiManager/kpi", function (req, res, next) {
  const { page = 1, size = 10, kpiKey } = req.query;

  const data = dataList.slice((page - 1) * size, page * size);

  res.json({
    data,
    count: dataList.length,
    all: dataList.length,
    success: 1,
  });
});

router.delete("/v1/dbio/kpiManager/kpi:id", function (req, res, next) {
  const { id } = req.params;

  dataList = dataList.filter((item) => {
    return id !== item.id;
  });

  res.json({
    kpiId: id,
    success: 1,
  });
});

router.post("/v1/dbio/kpiManager/kpi", function (req, res, next) {
  const { id } = req.query;
  console.log(id, "id");
  const body = req.body;

  res.json({
    id,
    body,
  });
});

module.exports = router;
