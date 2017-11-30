const script = {
  1: {
    title: 'Introduce Yourself',
    readAloudText: "Hello! I'm ____, [briefly introduce yourself]. How’s your day going? \n Welcome to " +
          "your technical interview with Hack Reactor! I’m looking forward to coding together. A" +
          "lthough we have to keep introductions brief, I’d love to get to know you. \n Can you " +
          "tell me about yourself and your journey to Hack Reactor?",
    readToYourselfText: "This is a hint for the interviewer.\n It is not to be read aloud.",
    response: {
      type: 'text',
      multi: true,
      required: true,
      question: 'Desribe your journey to Hack Reactor',
      key: 'INTRO_0',
      response: '',
    },
  },
  2: {
    title: 'Consent to Recording',
    readAloudText: "Great!  It’s nice to meet you. \n Before we get too far - FYI, we record all these interviews in order to make our decision. I just want to make sure that's cool with you.",
    response: {
      type: 'consent',
      question: 'Consent to being filmed?',
      required: true,
      key: 'INTRO_1',
      response: '',
    },
  },
  3: {
    title: 'CopyPasta',
    readAloudText: "Here is a helper function we gon' use",
    clipboardText: "function() { \n  console.log('test');\n}",
  },
};

export default script;
