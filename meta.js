// meta.js 示例
module.exports = {
    prompts: {
      name: {
        type: 'string',
        required: true,
        message: 'archiweb_project',
      },
      description: {
        type: 'string',
        required: false,
        message: 'A quickstart template of archiweb vue project produced by inst.aaa',
        default: 'A Vue.js project',
      },
      author: {
        type: 'string',
        message: 'Inst.AAA',
      },
    },
    completeMessage: "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run serve",
  };
  