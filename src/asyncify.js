"use strict";

// Utility function to make a function async.
const asyncify = func => (
  typeof func === 'function'
  && !func.constructor.name.toLowerCase().includes('async')
  && async function(...args) { return func(...args); }
  || func
);

// Exports.
Object.defineProperty(asyncify, 'asyncify', {
  value: asyncify
});
try {
  module.exports = asyncify;
} catch {}
export default Object.freeze(asyncify);
