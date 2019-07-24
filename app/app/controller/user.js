'use strict';
const { LoginValidator, getUserinfoValidator, createUserValidator } = require('../validate/user');
const { Success } = require('../validate/http-exception');
const Controller = require('egg').Controller;


class UserController extends Controller {
  async index() {
    const { ctx } = this;
    const data = await ctx.service.user.index();
    throw new Success(data);
  }

  async login() {
    const { ctx } = this;
    const v = await new LoginValidator().validate(ctx);
    const validateData = {
      username: v.get('body.username'),
      password: v.get('body.password'),
    };
    const data = await ctx.service.user.login(validateData);
    throw new Success(data);
  }

  async getUserInfo() {
    const { ctx } = this;
    const v = await new getUserinfoValidator().validate(ctx);
    const validateuserId = v.get('query.userId');
    const data = await ctx.service.user.getUserInfo(validateuserId);
    throw new Success(data);
  }

  async getUserList() {
    const { ctx } = this;
    const query = ctx.query;
    const data = await ctx.service.user.getUserList(query);
    throw new Success(data);
  }

  async createUser() {
    const { ctx } = this;
    // 参数校验
    const v = await new createUserValidator().validate(ctx);
    const query = v.get('body');
    const data = await ctx.service.user.createUser(query);
    throw new Success(data);
  }
}

module.exports = UserController;
