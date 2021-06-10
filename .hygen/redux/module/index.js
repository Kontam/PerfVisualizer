module.exports = {
  prompt: ({ prompter, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'module',
        message: "What's your module?",
      },
      {
        type: 'input',
        name: 'section',
        message: "Whitch section of state?(can be empty)",
      },
      {
        type: 'list',
        name: 'actions',
        message: "Type comma-separated actions (capital and snake-cased):",
      },
    ];
    return prompter.prompt(questions).then((answers) => {
      return { ...answers };
    });
  },
};
