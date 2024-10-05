const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timeStamps = require('mongoose-timestamps');
const UserSchema = new Schema({
     firstName: { type: String },
     lastName: { type: String },
     email: { type: String },
     password: { type: String },
     mobileNo: { type: String },
     createdAt: Date,
     updatedAt: Date
})
UserSchema.plugin(timeStamps, {index: true});
module.exports = mongoose.model('User', UserSchema);