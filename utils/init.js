const welcome = require('cli-welcome');
const pkgJSON = require('../package.json');

module.exports = () => {
	welcome({
		title: `${pkgJSON.name}`,
		tagLine: `by Saad Irfan`,
		bgColor: `#FADC00`,
		description: `${pkgJSON.description}`,
		color: `#000000`,
		bold: true,
		clear: true,
		version: `${pkgJSON.version}`
	});
};
