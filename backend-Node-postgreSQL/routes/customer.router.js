const express = require('express');

const CustomerService = require('./../services/customer.service');
const validationHandler = require('./../middlewares/validator.handler');
const { createCustomerSchema, updatedCustomerSchema, getCustomerSchema } = require('./../schemas/customer.schema');

const router = express.Router();
const service = new CustomerService();

router.get('/', async (req, res, next) => {
  try {
    const customers = await service.find();
    res.json(customers);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await service.findOne(id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validationHandler(createCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newCustomer = await service.create(body);
      res.status(201).json(newCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validationHandler(getCustomerSchema, 'params'),
  validationHandler(updatedCustomerSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedCustomer = await service.update(id, body);
      res.status(200).json(updatedCustomer);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validationHandler(getCustomerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const deletedCustomer = await service.delete(id);
      res.status(200).json(deletedCustomer);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;