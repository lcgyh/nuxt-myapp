'use strict';

const { LinValidator, Rule } = require('./base-validator');

// login
class LoginValidator extends LinValidator {
  constructor() {
    super();
    this.username = [
      new Rule('isLength', '昵称不符合长度规范', {
        min: 4,
        max: 32,
      }),
    ];
    this.password = [
      new Rule('isLength', '密码至少6个字符，最多32个字符', {
        min: 6,
        max: 32,
      }),
      new Rule(
        'matches',
        '密码不符合规范',
        '^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]'
      ),
    ];
  }
}

// get userinfo
class getUserinfoValidator extends LinValidator {
  constructor() {
    super();
    this.userId = [
      new Rule('isInt', '需要是正整数', {
        min: 1,
      }),
    ];
  }
}

// get userlist
class getUserlistValidator extends LinValidator {
  constructor() {
    super();
    this.mobile = [
      new Rule('isLength', '请填写正确的手机号', {
        min: 11,
        max: 11,
      }),
    ];
  }
}

// create user
class createUserValidator extends LinValidator {
  constructor() {
    super();
    this.username = [
      new Rule('isLength', '昵称不符合长度规范', {
        min: 4,
        max: 32,
      }),
    ];
    this.mobile = [
      new Rule('isLength', '请填写正确的手机号', {
        min: 11,
        max: 11,
      }),
    ];
  }
}


module.exports = {
  LoginValidator,
  getUserinfoValidator,
  getUserlistValidator,
  createUserValidator,
};
