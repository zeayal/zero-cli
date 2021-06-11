const inquirer = require('inquirer');
const DownloadGitRepo = require('download-git-repo');
const path = require('path');
const ora = require('ora');

const spinner = ora('加载中\n');

const waitFnLoading = async (fn, text) => {
  spinner.start(text);
  await fn();
  spinner.stop();
};

module.exports = async (projectName, opts) => {
  // 获取用户输入
  const { description, author } = await inquirer.prompt([
    {
      name: 'description',
      message: '请输入项目描述',
    },
    {
      name: 'author',
      message: '请输入项目作者',
      default: 'robot',
    },
  ]);
  spinner.start('下载仓库中');
  // 下载 git 仓库
  DownloadGitRepo('zeayal/react-typescript-template#main', path.resolve(process.cwd(), projectName), (err) => {
    console.log(err ? 'Error' : 'Success');
    spinner.stop();
  });
};
