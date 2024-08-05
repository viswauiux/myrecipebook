import { Schema, model, models } from 'mongoose';

const SignUpSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  fullname: {
    type: String,
    required: [true, 'Fullname is required!'],
},
password: {
    type: String,
    required: [true, 'password is required!'],
  }
});

const SignUp =  models.SignUp || model("SignUp", SignUpSchema);

export default SignUp;
