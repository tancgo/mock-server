const Mock = require("mockjs");
const Random = Mock.Random;
var express = require("express");
var router = express.Router();

router.get("/v1/assets/picture/*", (req, res) => {
  const data = Mock.mock({
    "details|25": [
      {
        id: () => Random.id(),
        name: () => Random.word(),
        url: () => Random.image(),
        size: 1048576,
        updated_at: () => Random.datetime(),
      },
    ],
    total: 25,
  });
  res.json(data);
});

module.exports = router;
