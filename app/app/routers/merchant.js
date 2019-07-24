'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post('/op/api/v1/merchant/add', controller.merchant.index);
  router.del('/op/api/v1/merchant/delete', controller.merchant.index);
  router.put('/op/api/v1/merchant/update', controller.merchant.index);
  router.get('/op/api/v1/merchant/list', controller.merchant.index);
  router.get('/op/api/v1/merchant/info', controller.merchant.index);
};
