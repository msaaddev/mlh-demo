const clipboardy = require('clipboardy');
const handleError = require('node-cli-handle-error');
const chalk = require('chalk');

module.exports = async () => {
	let password = '';
	let characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*abcdefghijklmnopqrstuvwxyz0123456789';
	let charactersLength = characters.length;
	for (let i = 0; i < 15; i++) {
		password += characters.charAt(
			Math.floor(Math.random() * charactersLength)
		);
	}

	console.log(
		`${chalk.green.inverse(` PASSWORD `)} ${chalk.dim(password)}\n`
	);

	try {
		await clipboardy.write(password);
	} catch (error) {
		console.log(error);
		handleError(`Something went wrong`, error);
	}
};
