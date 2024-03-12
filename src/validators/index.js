// Exports.
export { default as validateEmail } from './validateEmail';
export { default as validatePhoneNumber } from './validatePhoneNumber';
export { default as validateAccountId } from './validateAccountId';
export { validatePassword, getPasswordFormatErrors } from './validatePassword';

// Node.js exports.
try {
  const { validatePassword, getPasswordFormatErrors } = require('./validatePassword');
  module.exports = {
    validateEmail: require('./validateEmail'),
    validatePhoneNumber: require('./validatePhoneNumber'),
    validateAccountId: require('./validateAccountId'),
    validatePassword,
    getPasswordFormatErrors
  }
}
catch {}