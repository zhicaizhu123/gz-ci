/**
 * npm的语义版本包
 * 
 * 参考文档: https://github.com/npm/node-semver#readme
 */
const semver = require('semver')
/**
 * 命令行输出美化
 * 
 * 参考文档：https://github.com/chalk/chalk#readme
 */
const chalk = require('chalk')

function checkNodeVersion(expect, cliName) {
	if (!semver.satisfies(process.version, expect)) {
		console.log(chalk.red(`the current Node version is v${process.version}, but cli ${cliName} except Node version is v${expect}, please upgrade your Node version`))
		process.exit(1)
	}
}

module.exports = checkNodeVersion