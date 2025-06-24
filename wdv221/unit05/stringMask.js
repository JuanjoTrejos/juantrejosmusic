// stringMask.js

function maskValue(str) {
  if (str.length <= 2) return "*".repeat(str.length);
  return "*".repeat(str.length - 2) + str.slice(-2);
}