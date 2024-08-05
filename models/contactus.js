import { Schema, model, models } from 'mongoose';

const ContactUsSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  fullname: {
    type: String,
    required: [true, 'Username is required!'],
},
description: {
    type: String,
    required: [true, 'Description is required!'],
  }
});

const ContactUs = model("ContactUs", ContactUsSchema);

export default ContactUs;
