"use strict";

const DEFAULT_MS = 0;

// Helper function for sync sleep.
const sleep = (milliseconds = DEFAULT_MS) => {
  const t = Date.now();
  while (Date.now() - t < milliseconds);
  return true;
}

// Helper function for async sleep.
sleep.asyncSleep = async (milliseconds = DEFAULT_MS) => (
  new Promise(resolve => setTimeout(resolve, milliseconds))
);

// Exports.
Object.defineProperty(sleep, 'sleep', {
  value: sleep
});
Object.defineProperty(sleep, 'DEFAULT_MS', {
  value: DEFAULT_MS
});
try {
  module.exports = sleep;
} catch {}
export default sleep;