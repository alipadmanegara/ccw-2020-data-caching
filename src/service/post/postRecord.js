const userDataModel = require('../../model/accountList');
const redisConf = require('../../client/redis');
const redisClient = redisConf.redisClient;

const postById = async (req, res) => {
  const userData = new userDataModel(req.body);
  try {
    //invalidate redis key
    const { userId } = req.body;
    redisClient.del("accountList_" + userId.toLowerCase());

    await userData.save();
    res.send({
      message: "Save successfully",
      userData: userData
    });
  } catch (err) {
    res.status(500).send({
      error: err.message
    });
  }
};

module.exports = {
  postById
};