// @flow
import {User} from './user';

const user: User = new User({
  id: 12,
  name: 'Vasya',
  age: 100,
  gender: 'male',
});

console.log(user.toJson());
