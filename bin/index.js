#! /usr/bin/env node

/**
 * 命令行工具
 * 
 * 参考文档：https://github.com/tj/commander.js/blob/master/Readme_zh-CN.md
 */
const { program } = require('commander')
/**
 * 命令行输出美化
 */
const chalk = require('chalk')
/**
 * 简易的智能匹配引擎
 */
const didYouMean = require('didyoumean')

const pkg = require('../package.json')

const init = require('../lib/init')

didYouMean.threshold = 0.6

/**
 * 查询版本号
 */
program
  .version(pkg.version, '-V, --version', 'output the current version')
  .usage('<command> [options]')

/**
 * 初始化项目模板
 */
program
  .command('init <projectName>')
  .description('init a new project from a template')
  .action(init)

program.parseAsync(process.argv);