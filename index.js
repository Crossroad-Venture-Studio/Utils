// Imports / exports
export * from './src';

// Node.js exports.
try {
  module.exports = {
    ...require('./src')
  }
} catch {}
