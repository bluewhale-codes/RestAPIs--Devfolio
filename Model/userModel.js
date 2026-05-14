const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  avatar: {
    public_Id:{
            type:String,
            default:"#default"
    },
    url:{
          type:String,
          default:"https://res.cloudinary.com/dycjjaxsk/image/upload/v1776766615/Avatars/307ce493-b254-4b2d-8ba4-d12c080d6651_ongsfb.jpg"
    }
  },
  provider: {
    type: String,
    enum: ['local', 'google'],
    default: 'local',
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },

  password: {
    type: String,
   required: function () {
    return this.provider === 'local'; // ✅ only required for manual signup
    },
  },



}, {
  timestamps: true   // automatically adds createdAt & updatedAt
});

userSchema.methods.camparePassword = async function(enteredPassword){
   return await bcrypt.compare(enteredPassword,this.password);
}

module.exports = mongoose.model("User",userSchema);