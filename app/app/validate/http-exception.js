'use strict';

// 1 成功
// 10000 服务器异常
// 10001 资源未找到
// 10002 授权失败
// 10003 禁止访问
// 10004 参数错误


// 10005 用户名不存在
// 10006 账号或密码错误
// 10007 无效的token

class HttpException extends Error {
  constructor(msg = '服务器异常', errorCode = 10000, status = 400, data = {}) {
    super();
    this.errorCode = errorCode;
    this.status = status;
    this.msg = msg;
    this.data = data;
  }
}

class Success extends HttpException {
  constructor(data) {
    super();
    this.status = 200;
    this.errorCode = 1;
    this.data = data;
    this.msg = null;
  }
}

class SuccessError extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.status = 201;
    this.msg = msg || '服务器异常';
    this.errorCode = errorCode || 10000;
  }
}

class NotFound extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || '资源未找到';
    this.errorCode = errorCode || 10001;
    this.status = 404;
  }
}

class AuthFailed extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || '授权失败';
    this.errorCode = errorCode || 10002;
    this.status = 401;
  }
}

class Forbbiden extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.msg = msg || '禁止访问';
    this.errorCode = errorCode || 10003;
    this.status = 403;
  }
}

class ParameterException extends HttpException {
  constructor(msg, errorCode) {
    super();
    this.status = 400;
    this.msg = msg || '参数错误';
    this.errorCode = errorCode || 10004;
  }
}

class TokenException extends HttpException {
  constructor() {
    super();
    this.status = 401;
    this.msg = '无效的token';
    this.errorCode = 10007;
  }
}


module.exports = {
  HttpException,
  ParameterException,
  Success,
  NotFound,
  AuthFailed,
  Forbbiden,
  SuccessError,
  TokenException,
};
