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
router.get("/api/v1/tags", function (req, res, next) {
  const { page = 1, size = 10, kpiKey } = req.query;

  const tags = {
    code: 1212,
    msg: "",
    data: [
      { id: 1, name: "sports", name_chs: "体育" },
      { id: 2, name: "history", name_chs: "历史" },
      { id: 3, name: "military", name_chs: " 军事" },
    ],
  };

  res.json(tags);
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
