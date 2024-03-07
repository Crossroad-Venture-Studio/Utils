'use strict';

const DEFAULT_TIMEOUT = 200;

// Utility function to throttle a function call
// involved in an intensive process.
// Very useful for exmple with onmousemove and onscroll event.
const debounce = (func, timeout = DEFAULT_TIMEOUT) => {
  let timer;
  return timeout > 0 && ((...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  }) || func;
}

// Exports.
Object.defineProperty(debounce, 'DEFAULT_TIMEOUT', {
  value: DEFAULT_TIMEOUT
});
export default Object.freeze(Object.defineProperty(debounce, 'debounce', {
  value: debounce
}));

// Node.js exports.
try {
  module.exports = debounce;
} catch {}