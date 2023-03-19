const boom = require('@hapi/boom');
const pool = require('../libs/postgresPool');
const { models } = require('../libs/sequelize');

class UserService {
  constructor() {}

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    const res = await models.User.findAll();
    return res;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user) {
      throw boom.notFound('user not found')
    }
    return user;
  }

  async update(id, changes) {
    const user = this.findOne(id);
    const res = (await user).update(changes);
    return res;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;