module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": "eslint:recommended",
	"overrides": [
		{
			files: ["*.js"],
			excludedFiles: "babel.config.js",
		},
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"rules": {
		indent: [2, "tab"],
		"no-tabs": 0,
	}
}
