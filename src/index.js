// Imports.
import asyncify from './asyncify';
import clock from './clock';
import './functionUtils';
import './numberUtils';
import './objectUtils';
import promisify from './promisify';
import sleep from './sleep';
import './stringUtils';
import throttle from './throttle';

// Exports.
export default {
  asyncify,
  clock,
  promisify,
  sleep,
  throttle
};

// Node.js exports.
try {
  require('./numberUtils');
  require('./objectUtils');
  require('./stringUtils');
  module.exports = {
    asyncify: require('./asyncify'),
    clock: require('./clock'),
    promisify: require('./promisify'),
    sleep: require('./sleep'),
    throttle: require('./throttle')
  }
} catch {}
