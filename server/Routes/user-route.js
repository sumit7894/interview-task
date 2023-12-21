const express = require('express');
const router = express.Router();
const {getInfo} = require('../controllers/user-controller');

router.route('/v1/api').get(getInfo);

module.exports = router;