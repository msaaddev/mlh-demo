#!/usr/bin/env node

/**
 *
 *
 *
 * @author Saad Irfan
 * @twitter <https://twitter.com/msaaddev>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const end = require('./utils/end');

(() => {
	init();
	cli();
	end();
})();
