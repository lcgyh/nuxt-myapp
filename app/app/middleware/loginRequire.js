'use strict';

const auth = require('basic-auth');
const jwt = require('jsonwebtoken');
const { TokenException } = require('../validate/http-exception');

module.exports = () => {

  let decode = {};
  return async function loginRequire(ctx, next) {
    // token 检测
    const usertoken = auth(ctx.req);
    if (!usertoken || !usertoken.name) {
      throw new TokenException();
    }
    try {
      decode = jwt.verify(usertoken.name, '_1562931131158_7557opsenli');
    } catch (error) {
      throw new TokenException();
    }
    // token 合法,
    ctx.auth = {
      uid: decode.uid,
      scope: decode.scope,
    };
    await next();
  };
};


// class Auth {
//   constructor() {

//   }
//   get m() {
//     return async (ctx, next) => {
//       // token 检测
//       const usertoken = basicAuth(ctx.req);
//       if (!usertoken || !usertoken.name) {
//         throw new Error('无效的token');
//       }

//       try {
//         const decode = jwt.verify(usertoken, '_1562931131158_7557opsenli');
//       } catch (error) {
//         throw new Error('无效的token');
//       }
//       // token 合法,
//       // ctx.auth={
//       //   uid:decode.uid,
//       //   scope:decode.scope,
//       // }
//       await next();
//     };
//   }
// }
