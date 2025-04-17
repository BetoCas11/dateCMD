const dateFormatter = require('./src/index.js');

console.log(`Timestamp: ${dateFormatter.getTimestamp()}; Long Time (fecha español): ${dateFormatter.getLongTime()}`);