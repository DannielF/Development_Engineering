const boom = require('@hapi/boom');
const { default: axios } = require('axios');

class UserService {
  constructor() { }

  async findOne(id) {
    const user = await axios.get(`https://torre.bio/api/bios/${id}`);
    if (!user) {
      throw boom.notFound('Username not found');
    }
    return user;
  }

}

module.exports = UserService;