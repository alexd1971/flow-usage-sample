'use strict';

var _user = require('./user');

var user = new _user.User({
  id: 12,
  name: 'Vasya',
  age: 100,
  gender: 'male'
});


console.log(user.toJson());