"user service"
const faker = require('faker');

class UserService {
  constructor() {
    this.users = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 50; i++) {
      this.users.push({
        id: faker.datatype.uuid(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
      })
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newUser);
    return newUser;
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(user => user.id === id);
  }

  update(id, changes) {
    const index = this.users.find(user => user.id === id);
    if (!index) {
      throw new Error('User not found');
    }
    const user = this.products[index];
    this.users[index] = {
      ...user,
      ...changes
    };
    return this.users[index];
  }

  delete(id) {
    const index = this.users.find(user => user.id === id);
    if (!index) {
      throw new Error('User not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UserService;