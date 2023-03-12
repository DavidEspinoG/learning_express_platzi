const boom = require('@hapi/boom');
const pool = require('../libs/postgresPool');
const getConnection = require('../libs/postgres');

class UserService {
  constructor() {
    this.pool = pool;
  }

  async create(data) {
    return data;
  }

  async find() {
    const res = await this.pool.query('SELECT * FROM tasks');
    return res.rows;
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