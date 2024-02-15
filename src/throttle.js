"use strict";

const DEFAULT_DELAY = 50;

// Utility function to throttle a function call
// involved in an intensive process.
// Very useful for exmple with onmousemove and onscroll event.
const throttle = (
  func,
  delay = DEFAULT_DELAY,
  wait = false,
  queued = false
) => delay > 0 && (
  (...args) => {
    if (wait) {
      queued = true;
      return;
    }

    func(...args);
    wait = true;
    setTimeout(() => {
      queued && func(...args);
      queued = wait = false;
    }, delay);
  }
) || func;

// Exports.
Object.defineProperty(throttle, 'throttle', {
  value: throttle
});
Object.defineProperty(throttle, 'DEFAULT_DELAY', {
  value: DEFAULT_DELAY
});
try {
  module.exports = throttle;
} catch {}
export default throttle;