'use strict';

const Service = require('egg').Service;

class MerchantService extends Service {
  async index() {
    return 'hi, merchant serve';
  }
  // findHot() {
  //   const hotArticle = [
  //     {
  //       title: 'Title 0001',
  //       desc: 'This is hot article 0001',
  //     },
  //     {
  //       title: 'Title 0002',
  //       desc: 'This is hot article 0002',
  //     },
  //   ];
  //   return hotArticle;
  // }
  // findHeart() {
  //   const heartArticle = [
  //     {
  //       title: 'Title 0001',
  //       desc: 'This is heart article 0001',
  //     },
  //     {
  //       title: 'Title 0002',
  //       desc: 'This is heart article 0002',
  //     },
  //   ];
  //   return heartArticle;
  // }
}

module.exports = MerchantService;
