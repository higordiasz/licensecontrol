import Mongoose from 'mongoose';
import moment from 'moment';
const Schema = Mongoose.Schema;

const LicenseSchema = new Schema({
  token: {
    type: String,
    required: true
  },
  create: {
    type: String,
    required: true
  },
  end: {
    type: String,
    required: true
  }
});

LicenseSchema.methods.check = function () {
  let now = moment(new Date());
  let end = moment(this.end, "DD/MM/YYYY");
  if (now.isAfter(end, 'days')) return false;
  return true;
}

export default Mongoose.model('License', LicenseSchema);
