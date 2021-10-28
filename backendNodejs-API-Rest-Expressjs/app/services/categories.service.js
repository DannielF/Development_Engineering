"categories services"
const faker = require('faker');

class CategoriesService {
  constructor() {
    this.categories = [];
    this.generate();
  }

  generate() {
    for (let i = 0; i < 20; i++) {
      this.categories.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.department(),
        description: faker.lorem.sentence(),
        image: faker.image.imageUrl()
      });
    }
  }

  create(data) {
    const newCategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.categories.push(newCategory);
    return newCategory;
  }

  find() {
    return this.categories;
  }

  findOne(id) {
    return this.categories.find(category => category.id === id);
  }

  update(id, data) {
    const index = this.categories.findIndex(category => category.id === id);
    if (!index) {
      throw new Error('Category not found');
    }
    const category = this.categories[index];
    this.categories[index] = {
      ...category,
      ...data
    }
    return this.categories[index];
  }

  delete(id) {
    const index = this.categories.findIndex(category => category.id === id);
    if (!index) {
      throw new Error('Category not found');
    }
    this.categories.splice(index, 1);
    return { id };
  }
}

module.exports = CategoriesService;