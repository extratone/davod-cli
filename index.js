#!/usr/bin/env node

/**
 * davod-cli
 * This is an experimental, educational command line interface written by David Blue. https://davidblue.wtf/contact
 *
 * @author David Blue <https://github.com/extratone>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;

(async () => {
	init({ clear });
	input.includes(`help`) && cli.showHelp(0);

	debug && log(flags);
})();
