const express = require('express');
const router = express.Router();
const service = require('../service');

router.get('/user-data/user-id/:userId/case-1', service.getByUserIdCase1);
router.get('/user-data/user-id/:userId/case-2', service.getByUserIdCase2);
router.get('/user-data/user-id/:userId/case-3', service.getByUserIdCase3);
router.post('/user-data/', service.postById);

module.exports = router