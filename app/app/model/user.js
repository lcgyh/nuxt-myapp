'use strict';

const bcrypt = require('bcryptjs');

module.exports = app => {
  const { STRING, INTEGER, BOOLEAN } = app.Sequelize;

  const User = app.model.define(
    'user',
    {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      username: STRING(50),
      password: {
        type: STRING(250),
        set(val) {
          // 密码加密
          const salt = bcrypt.genSaltSync(10);
          // 加密后的密码
          const psw = bcrypt.hashSync(val, salt);
          this.setDataValue('password', psw);
        },
      },
      sex: INTEGER(4),
      mobile: STRING(32),
      email: STRING(50),
      isMaster: BOOLEAN(),
    },
    {
      freezeTableName: true, // Model 对应的表名将与model名相同
      timestamps: true,
      tableName: 'users',
      underscored: true,
    }
  );

  User.findItem = async function(query, exclude) {
    return await this.findOne({
      where: query,
      attributes: { exclude },
    });
  };

  User.findUsers = async function(query, exclude) {
    return await this.findAndCountAll({
      where: query,
      attributes: { exclude },
      limit: query.limit || 10, // 查询记录条数限制
      offset: (Number(query.current) - 1) * query.limit || 0, // 查询时的偏移/起始位置，一般用于分页查询时
    });
  };

  User.createUser = async function(query) {
    return await this.create(query);
  };

  User.updateUser = async function(query) {
    return await this.update({
      where: query,
    });
  };

  User.deleteUser = async function(query) {
    return await this.destroy({
      where: query,
    });
  };

  return User;
};
