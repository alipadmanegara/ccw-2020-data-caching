const userDataModel = require('../../model/accountList');

const getByUserId = async (req, res) => {
  const { userId } = req.params;

  const userData = await userDataModel.find({ userId });

  res.status(200).send({
    data: userData
  });
};

module.exports = {
  getByUserId
};