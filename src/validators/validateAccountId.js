'use strict';

// Helper function to validate an account id string.
// Example:
// validateAccounId('1234567890') will return false (i.e. not validated)
const re = /[A-Fa-f0-9]{24}/,
validateAccounId = accountId => (
  accountId && typeof accountId === 'string' && re.test(accountId.replace(/s+/g, ''))
);

// Exports.
export default Object.freeze(Object.defineProperty(validateAccounId, 'validateAccounId', {
  value: validateAccounId
}));

// Node.js exports.
try {
  module.exports = validateAccounId;
} catch {}