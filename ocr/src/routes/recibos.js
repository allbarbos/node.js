var express = require('express');
var router = express.Router();
const controller = require('../controller/recibos')

router.post('/', controller.post);

module.exports = router;
