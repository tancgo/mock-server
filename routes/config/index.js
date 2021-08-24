var express = require("express");
var router = express.Router();

router.get("/config", function (req, res, next) {
  const conf = {
    configURL: "http://10.180.1.118:3000/config",
    env: {
      agoraAppId: "64ba6efd8bc84d40918ae218849bf5b1",
      appId: "darwin",
      appVersion: "8.24.0",
      baseBackendURL: "http://alix-agora.llsapp.com",
      deviceID: "dd9b7e8cc8f812f3",
      frontendEntranceURL: "https://alix-demo-feat.llssite.com/vr",
      isStaging: false,
      sDeviceID: "dd9b7e8cc8f812f3",
    },
    russell: {
      appIdKind: "DARWIN",
      baseURL: "http://dev-account.thellsapi.com",
      poolID: "290933eccd2e3d11a90f66c6dbfbb0dd",
    },
    user: {
      password: "aaa11111",
      userName: "alixtest6@163.com",
    },
  };

  res.json(conf);
});

module.exports = router;
