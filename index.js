// Specify the logger for this file.
const logger = require('./services/logger').logger().getLogger('index.js');
(function() {
	logger.info(`Hello World`);
})();
