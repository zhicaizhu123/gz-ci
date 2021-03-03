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
const validateProjectName = require('validate-npm-package-name')

