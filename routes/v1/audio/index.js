const Mock = require("mockjs");
const Random = Mock.Random;
var express = require("express");
var router = express.Router();

router.post("/v1/t/:type/audio/tts/:name", (req, res) => {
  const data = Mock.mock({
    code: 200,
    msg: "ok",
    data: {
      file: { audio_count: 4, name: "tanchao", lesson_type: "alix", id: 1 },
      "audios|4": [
        {
          id: () => Random.id(),
          text: () => Random.sentence(),
          "cdn_url|1": [
            "",
            "https://projectq-prod.llscdn.com/audio/27f7c6ce-2f4a-49e2-963d-b8c61eb6cb42",
          ],
        },
      ],
    },
  });
  res.json(data);
});

router.get("/v1/t/:type/audio/list/audio", (req, res) => {
  const data = Mock.mock({
    code: 200,
    msg: "ok",
    data: {
      "audios|4": [
        {
          id: () => Random.id(),
          text: () => Random.sentence(),
          "cdn_url|1": [
            "https://projectq-prod.llscdn.com/audio/27f7c6ce-2f4a-49e2-963d-b8c61eb6cb42",
            "https://projectq-prod.llscdn.com/audio/27f7c6ce-2f4a-49e2-963d-b8c61eb6cb42",
          ],
        },
      ],
    },
  });
  res.json(data);
});

router.post("/v1/t/:type/audio/update/:id", (req, res) => {
  setTimeout(() => {
    res.json({
      code: 200,
      msg: "ok",
    });
  }, 3000);
});

router.post("/v1/t/:type/audio/confirm/:id", (req, res) => {
  setTimeout(() => {
    res.json({
      code: 200,
      msg: "ok",
    });
  }, 3000);
});

module.exports = router;
