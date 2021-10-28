// validation handler for the validator middleware
const boom = require('@hapi/boom');

/**
 * 
 * @param {*} schema Data Transfer Object
 * @param {*} property (body, header, params, query)
 * @param {*} abortEarly false - Show all errors instead one by one
 * @returns 
 */

function validationHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validationHandler;