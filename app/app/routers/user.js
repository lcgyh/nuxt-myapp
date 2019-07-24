'use strict';

module.exports = app => {
  const { router, controller } = app;
  const loginRequire = app.middleware.loginRequire();

  // router.post('/op/api/v1/user/register', controller.user.index);
  router.post('/op/api/v1/user/login', controller.user.login);
  router.post('/op/api/v1/user/add', loginRequire, controller.user.createUser);
  router.get('/op/api/v1/user/list', loginRequire, controller.user.getUserList);
  router.del('/op/api/v1/user/delete', controller.user.index);
  router.put('/op/api/v1/user/update', controller.user.index);
  router.get('/op/api/v1/user/info', loginRequire, controller.user.getUserInfo);
};
