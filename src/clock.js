"use strict";

const clock = () => performance.now();

// Exports.
Object.defineProperty(clock, 'clock', {
  value: clock
});
try {
  module.exports = clock;
} catch {}
export default Object.freeze(clock);