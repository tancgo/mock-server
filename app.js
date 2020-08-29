var createError = require("http-errors");
var express = require("express");
var path = require("path");
var glob = require("glob");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

// 匹配路由，** 即 globstar 模式，匹配 /routes 路径下所有文件夹中的.js文件
// glob 异步执行会导致注册路由失败404，采用glob.sync 同步执行glob搜索
var routers = glob.sync(path.join(__dirname, `/routes/**/*.js`));

var app = express();

// app.all("*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
//   next();
// });

// 处理跨域
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

console.log(routers, "routers");

// 注册路由
routers.forEach((path) => {
  app.use("/", require(path));
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
