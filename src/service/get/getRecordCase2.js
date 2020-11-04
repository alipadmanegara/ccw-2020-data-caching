const userDataModel = require('../../model/accountList');
const { sleep } = require('../../util')

const getByUserId = async (req, res) => {
  const { userId } = req.params;

  const userData = await userDataModel.find({ userId });
  await sleep(10000);

  res.status(200).send({
    data: userData
  });
};

module.exports = {
  getByUserId
};