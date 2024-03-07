'use strict';

// Define special characters and password format regular expression tests.
// Password validation must pass the following:
// - At least 1 uppercase letter
// - At least 1 lowercase letter
// - At least 1 number
// - At least 1 special character
// - At least 8 characters

const special = '#@$!?.%*&/\\:|^_-=+',
  specialRe = new RegExp(`[${special.replace(/([^A-Za-z0-9\s])/g, '\\$1')}]`),
  tests = [
  [/[A-Z]/, '1 uppercase letter'],
  [/[a-z]/, '1 lowercase letter'],
  [/[0-9]/, '1 number'],
  [specialRe, `1 special character: ${special}`],
  [/.{8,}/, '8 characters']
];

// Helper function to get password format errors.
// Example:
// getPasswordFormatErrors('1234567890')
// will output:
// ['1 uppercase letter', '1 lowercase letter', '1 special character: #@$!?.%*&/\\:|^_-=+']
const getPasswordFormatErrors = (password, s = password = str.replace(/s+/g, '')) => (
  tests.reduce((output, [re, error]) => {
    re.test(s) || output.push(error);
    return output;
  }, [])
);

// Validate pasword format.
// Example:
// validatePassword('1234567890') will return false (i.e. not validated)
const validatePassword = password => !getPasswordFormatErrors(password).length;

// Exports.
Object.defineProperty(validatePassword, 'getPasswordFormatErrors', {
  value: getPasswordFormatErrors
});
export default Object.freeze(Object.defineProperty(validatePassword, 'validatePassword', {
  value: validatePassword
}));

// Node.js exports.
try {
  module.exports = validatePassword;
} catch {}