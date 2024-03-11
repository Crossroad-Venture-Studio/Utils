// Imports.
import './functionUtils';
import './numberUtils';
import './objectUtils';
import './stringUtils';

// Exports.
export { default as asyncify } from './asyncify';
export { default as clock } from './clock';
export { default as debounce } from './debounce';
export { default as promisify } from './promisify';
export { default as sleep } from './sleep';
export { default as throttle } from './throttle';

// Node.js exports.
try {
  require('./numberUtils');
  require('./objectUtils');
  require('./stringUtils');
  module.exports = {
    asyncify: require('./asyncify'),
    clock: require('./clock'),
    debounce: require('./debounce'),
    promisify: require('./promisify'),
    sleep: require('./sleep'),
    throttle: require('./throttle')
  }
} catch {}
