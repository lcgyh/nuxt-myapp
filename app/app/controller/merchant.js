'use strict';

const Controller = require('egg').Controller;

class MerchantController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.merchant.index();
  }
}

module.exports = MerchantController;
