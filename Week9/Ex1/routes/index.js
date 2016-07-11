var express = require('express');
var router = express.Router();
/* 路由到登录页 */
router.get('/', function(req, res, next) {
  res.render('login.html',{});
});

module.exports = router;
