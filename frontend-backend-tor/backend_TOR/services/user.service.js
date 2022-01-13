/**
 * @class UserService - Service for user
 * @method getDataUser - Get data user from API
 */

const boom = require('@hapi/boom');
const axios = require('axios');

class UserService {
  constructor() { }

  async getDataUser(id) {
    const user = await axios.get(`https://torre.bio/api/bios/${id}`);
    if (!user) {
      throw boom.notFound('Username not found');
    }
    return user;
  }

}

module.exports = UserService;