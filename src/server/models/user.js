import Mongoose from 'mongoose';
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export default Mongoose.model('User', UserSchema);
