module.exports = {
  prompt: ({ prompter, args }) => {
    const questions = [
      {
        type: 'input',
        name: 'component',
        message: "What's your component?",
      },
      {
        type: 'input',
        name: 'category',
        message: "choose category (atoms/molecules/organisms)",
      },
    ];
    return prompter.prompt(questions).then((answers) => {
      const { component, category } = answers;
      const path = `src/components/${category}`;

      return { ...answers, path };
    });
  },
};
