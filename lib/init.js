const path = require('path')
const fs= require('fs')
const exec = require('child_process').exec
const { program } = require('commander')
const chalk = require('chalk')
/**
 * 交互式命令
 * 
 * 参看文档：https://github.com/SBoudrias/Inquirer.js#readme
 */
const inquirer = require('inquirer')
const ora = require('ora')
const validateProjectName = require('validate-npm-package-name')
const templates = require('../config/templates')
const { to } = require('./helper')
const downloadGitRepo = require('./download')

async function init(projectName) {
  // 待创建目录已经存在
	const { repoUrl } = await inquirer.prompt([
		{
			name: 'repoUrl',
			type: 'list',
			message: `Pick a template to init ${projectName}`,
			choices: templates,
		}
	]);
	
	const spinner = ora('downloading template from remote repository...').start()
	const [err, res] = await to(downloadGitRepo(repoUrl, projectName))
	if (err) {
		spinner.fail('下载失败')
		console.log(chalk.red(err))
		process.exit(1)
	}
	spinner.succeed('下载成功')
}

module.exports = init
