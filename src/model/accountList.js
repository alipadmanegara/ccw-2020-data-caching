const mongoose = require('mongoose');

const accountListsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    index: true,
  },
  accountNumber: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },  
  accountName: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  }
}, { collection: 'accountLists' });

const accountList = mongoose.model("accountLists", accountListsSchema);

module.exports = accountList;