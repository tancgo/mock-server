const Mock = require("mockjs");
const Random = Mock.Random;
var express = require("express");
var router = express.Router();

router.get("/v1/t/:type/video/*", (req, res) => {
  const data = Mock.mock({
    "videos|15": [
      {
        id: () => Random.id(),
        name: () => Random.word(),
        url: "https://www.youtube.com/watch?v=-OoXMpJKAuo",
        thumbnail_url: () => Random.image(),
        "status|1": ["updating", "updated", "failed"],
        size: 1048576,
        updated_at: 1649421816,
      },
    ],
    total: 35,
  });
  res.json(data);
});

module.exports = router;
