const getRecord1 = require('./get/getRecordCase1');
const getRecord2 = require('./get/getRecordCase2');
const getRecord3 = require('./get/getRecordCase3');
const postRecord = require('./post/postRecord');

module.exports = {
  getByUserIdCase1: getRecord1.getByUserId,
  getByUserIdCase2: getRecord2.getByUserId,
  getByUserIdCase3: getRecord3.getByUserId,
  postById: postRecord.postById
};