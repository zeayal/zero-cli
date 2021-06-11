const { program } = require('commander');
const path = require('path');

program.version('0.0.1');

// 封装命令列表
const programCommandList = [
  {
    command: 'create <name>',
    description: 'create a project',
    option: '-t, --type <type> type of the project to init',
    action: 'create',
  },
];

// 注册命令
programCommandList.forEach((item) => {
  const actionPath = path.resolve(__dirname, `command/${item.action}`);
  program
    .command(item.command)
    .description(item.description)
    .option(item.option)
    .action(require(actionPath));
});

program.parse(process.argv);
