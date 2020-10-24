const userDataModel = require('../../model/accountList');
const { sleep } = require('../../util')
const redisConf = require('../../client/redis');
const redisClient = redisConf.redisClient;

const getByUserId = async (req, res) => {
  const { userId } = req.params;
  const redisKey = "accountList_" + userId.toLowerCase();
  const redisResult = await redisClient.get(redisKey);

  if (redisResult) {
    userData = JSON.parse(redisResult);
  } else {
    userData = await userDataModel.find({ userId });
    await sleep(3000);
    redisClient.setex(redisKey, 3600, JSON.stringify(userData));
  }

  res.status(200).send({
    data: userData
  });
};

module.exports = {
  getByUserId
};