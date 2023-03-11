const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const valdata = require('validator');
const userSchema = mongoose.Schema({

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
}, { timestamps: true });


userSchema.statics.signup = async function (req) {
    const { email , password} = req.body;
    const isExist = await this.findOne({ email })

      //tekshirish 
      if(!valdata.isEmail(email))
      {
          throw Error("bunday email  mavjud");
      }
      if(!valdata.isStrongPassword(password))
      {
          throw Error("bunday parol  talabga javob bermaydi");
      }

    if (isExist) {
        throw Error("bunday email yoki password mavjud");
    }

  
    
    //password ni sherfrlash
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    const newUser = await this.create({...req.body, password:encryptedPassword} );
    return newUser;
}
userSchema.statics.login = async function (req) {
    const { email, password } = req.body;
    const user = await this.findOne({ email })
    if (!user) {
        throw Error("bunday email yoki password mavjud");
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match) {
        throw Error("bunday email yoki password mavjud");
    }
  return user;
}
module.exports = mongoose.model('User', userSchema);

