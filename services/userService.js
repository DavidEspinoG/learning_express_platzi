const boom = require('@hapi/boom');
const pool = require('../libs/postgresPool');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {
    this.pool = pool;
  }

  async create(data) {
    return data;
  }

  async find() {
    const res = await models.User.findAll();
    return res;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;