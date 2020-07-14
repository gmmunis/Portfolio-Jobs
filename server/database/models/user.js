const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: String,
  email: {
    type: String,
    required: 'Email é obrigatório!',
    lowercase: true,
    index: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  name: {
    type: String,
    minlength: [6, 'Nome deve conter no mínimo 6 caracteres!']
  },
  username: {
    type: String,
    required: true,
    minlength: [6, 'Nome do usuário deve conter no mínimo 6 caracteres!']
  },
  password: {
    type: String,
    minlength: [6, 'Senha deve conter no mínimo 6 caracteres!'],
    maxlength: [32, 'Senha deve conter no máximo 6 caracteres!'],
    required: true
  },
  role: {
    enum: ['guest', 'admin', 'instructor'],
    type: String,
    required: true,
    default: 'guest'
  },
  info: String,
  createdAt: { type: Date, default: Date.now }
})

userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.genSalt(10, function (err, salt) {
    if(err) { return next(err) }

    bcrypt.hash(user.password, salt, function (err, hash) {
      if(err) { return next(err) }
      
      user.password = hash;
      next();
    });
  });
})

module.exports = mongoose.model('User', userSchema);