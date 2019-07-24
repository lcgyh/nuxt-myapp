'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const userRouter = require('./routers/user');
const merchantRouter = require('./routers/merchant');

module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // user
  userRouter(app);
  // merchant
  merchantRouter(app);

};
