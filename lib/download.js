const download = require('download-git-repo')
const ora = require('ora')

/**
 * 下载远程仓库模板
 *
 * @param {*} repoUrl 目标远程地址
 * @param {*} projectName 项目名称
 * @returns
 */
function downloadGitRepo(repoUrl, projectName) {
  return new Promise((resolve, reject) => {
    download(repoUrl, projectName, { clone: true }, (err) => {
      if (err) {
        return reject(err)
      }
      resolve(projectName)
    })
  })
}

module.exports = downloadGitRepo