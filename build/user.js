'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = exports.User = function () {
  function User(json) {
    _classCallCheck(this, User);

    this.id = json.id;
    this.name = json.name;
    this.age = json.age;
    this.gender = json.gender;
  }

  _createClass(User, [{
    key: 'toJson',
    value: function toJson() {
      var result = {
        id: this.id,
        name: this.name,
        age: this.age,
        gender: this.gender
      };

      return result;
    }
  }]);

  return User;
}();