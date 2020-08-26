(function() {
	this.logger = () => {
		const log4js = require('log4js');
		log4js.configure({
			appenders: {
				logs: {type: 'file', filename: 'system.log'},
				console: {type: 'console'},
			},
			categories: {
				default: {appenders: ['logs', 'console'], level: 'trace'},
			},
		});
		return log4js;
	};
}).apply(module.exports);
