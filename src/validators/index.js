// Imports.
import validateEmail from './validateEmail';
import validatePhoneNumber from './validatePhoneNumber';
import validateAccountId from './validateAccountId';
import { validatePassword, getPasswordFormatErrors } from './validatePassword';

// Exports.
export default {
  validateEmail,
  validatePhoneNumber,
  validateAccountId,
  validatePassword,
  getPasswordFormatErrors
};

// Node.js exports.
try {
  const validateEmail = require('./validateEmail'),
  validatePhoneNumber = require('./validatePhoneNumber'),
  validateAccountId = require('./validateAccountId'),
  { validatePassword, getPasswordFormatErrors } = require('./validatePassword');
  module.exports = {
    validateEmail,
    validatePhoneNumber,
    validateAccountId,
    validatePassword,
    getPasswordFormatErrors
  }
}
catch {}