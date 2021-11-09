const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const lastName = Joi.string().min(3).max(15);
const phone = Joi.string().min(10).max(10);
const userId = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string().min(6).max(15);

const createCustomerSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  phone: phone.required(),
  user: Joi.object({
    email: email.required(),
    password: password.required(),
  })
});

const updatedCustomerSchema = Joi.object({
  name: name,
  lastName: lastName,
  phone: phone,
  userId
});

const getCustomerSchema = Joi.object({
  id: id.required()
});

module.exports = {
  createCustomerSchema,
  updatedCustomerSchema,
  getCustomerSchema
};