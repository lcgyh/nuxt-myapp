/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1562931131158_7557';
  config.secretKey = '_1562931131158_7557opsenli';
  // add your middleware config here
  // config.middleware = [ 'loginRequire' ];
  // config.loginRequire = {
  //   enable: true,
  // };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  config.sequelize = {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    database: 'senli', // 数据库民
    username: 'root', // 数据库的用户名
    password: '12345678', //
    // 是否自动进行下划线转换（这里是因为DB默认的命名规则是下划线方式，而我们使用的大多数是驼峰方式）
    underscored: true,
    // 时区，sequelize有很多自动时间的方法，都是和时区相关的，记得设置成东8区（+08:00）
    timezone: '+08:00',
  };

  config.security = {
    csrf: {
      enable: false,
    },
  };
  config.validate = {
    convert: true,
    widelyUndefined: true,
  };
  config.onerror = {
    all(err, ctx) {
      console.log('err', err);
      // 在此处定义针对所有响应类型的错误处理方法
      // 注意，定义了 config.all 之后，其他错误处理方法不会再生效
      const errdata = {
        code: err.errorCode,
        data: err.data,
      };
      if (err.msg) {
        errdata.msg = err.msg;
      }
      ctx.body = JSON.stringify(errdata);
      ctx.status = err.status;

    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
