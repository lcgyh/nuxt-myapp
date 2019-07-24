'use strict';
// app.js
module.exports = app => {
  app.beforeStart(async () => {
    await app.model.sync({ force: true });
    const initData = true;
    if (initData) {
      const initUsers = require('./app/data/user.json');
      const ctx = app.createAnonymousContext();
      ctx.model.User.create(initUsers, err => {
        if (err) {
          app.coreLogger.console.warn('[egg-app-beforeStart] init user data fail %s', err);
        }
      });
    }
  });
};
