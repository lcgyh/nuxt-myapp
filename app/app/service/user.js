'use strict';

const bcrypt = require('bcryptjs');
const Service = require('egg').Service;
const { generateToken } = require('../utils/util');
const { SuccessError } = require('../validate/http-exception');

class UserService extends Service {
  async index() {
    const { ctx } = this;
    const query = { id: 1 };
    const userInfo = await ctx.model.User.findItem(query);
    return userInfo;
  }

  async login(data) {
    const { ctx } = this;
    // 判断username 在数据库中是否存在，
    const query = { username: data.username };
    const exclude = [];
    const userInfo = await ctx.model.User.findItem(query, exclude);
    if (!userInfo) {
      throw new SuccessError('用户名不存在', 10005);
    }

    const correct = bcrypt.compareSync(data.password, userInfo.password);
    if (!correct) {
      throw new SuccessError('账号或密码错误', 10006);
    }
    // 存在则生成token返回
    return { token: generateToken(userInfo.id, '2'), id: userInfo.id };
  }

  // 查询用户信息
  async getUserInfo(userId) {
    const { ctx } = this;
    const query = { id: userId };
    const exclude = [ 'password' ];
    const userInfo = await ctx.model.User.findItem(query, exclude);
    return userInfo;
  }

  // 查询用户列表
  async getUserList(query) {
    const { ctx } = this;
    const exclude = [ 'password' ];
    const userList = await ctx.model.User.findUsers(query, exclude);
    return {
      list: userList.rows || [],
      total: userList.count || 0,
      current: query.current || 1,
      pageSize: query.pageSize || 10,
    };
  }

  // 创建用户
  async createUser(query) {
    const { ctx } = this;
    await ctx.model.User.createUser(query);
    return {};
  }

  // 删除用户
  async deleteUser(query) {
    const { ctx } = this;
    await ctx.model.User.deleteUser(query);
    return {};
  }

  // 更新用户
  async updateUser(query) {
    const { ctx } = this;
    await ctx.model.User.updateUser(query);
    return {};
  }
}

module.exports = UserService;
