const script = {
  1: {
    title: 'Confirm Interviewee is Present',
    clipboard: {
      code: false,
      text:
        'Hi - if you are present, please input your name in the field below and press enter to join the chat. Then post a message so I know you’re here!',
    },
    readToYourselfText:
      'Join the tlk.io chat included in your gCal event. If the student is not visible at the meeting time, paste the snippet into the tlk.io chat',
  },
  2: {
    title: 'Set Up Zoom',
    clipboard: {
      code: false,
      text:
        'Hi! We’ll get started in a few minutes. If you haven’t already, please sign up for and download zoom. I’ll send you a link to our video room shortly.',
    },
    readToYourselfText: 'Once the applicant appears, make sure they are set up with Zoom.',
  },
  3: {
    title: 'Connect to Codestitch',
    clipboard: {
      code: false,
      text:
        'To get us started, can you please write your name and email in a comment in this codestitch.io pad? __LINK_HERE__',
    },
    readToYourselfText: 'Fill in your codestitch URL. Then paste the snippet into the tlk.io chat',
  },
  4: {
    title: 'Connect to Zoom',
    clipboard: {
      code: false,
      text:
        'Here’s the link to our video room: ___URL___HERE___. Once you have Zoom downloaded please click the link to join.',
    },
    readToYourselfText:
      `In the Zoom app, Click "Meetings". Find the meeting you created for this applicant and click "Start". Start your video & unmute your mic.
      
Meeting URL should automatically copy when you start the meeting. If not, click “Invite” and then “Copy URL.” Send the URL to the applicant with this message`,
  },
  5: {
    title: 'Introduce Yourself',
    readAloudText:
      "Hello! I'm ____, [briefly introduce yourself]. How’s your day going?\n\nWelcome to your technical interview with Hack Reactor! I’m looking forward to coding together. Although we have to keep introductions brief, I’d love to get to know you.\n\nCan you tell me about yourself and your journey to Hack Reactor?",
    readToYourselfText: 'This is a hint for the interviewer. It is not to be read aloud.',
    response: {
      type: 'text',
      multi: true,
      required: true,
      question: 'Desribe your journey to Hack Reactor',
      key: 'INTRO_0',
      response: '',
    },
  },
  6: {
    title: 'Consent to Recording',
    readAloudText:
      "Great!  It’s nice to meet you.\n\nBefore we get too far - FYI, we record all these interviews in order to make our decision. I just want to make sure that's cool with you.",
    response: {
      type: 'bool',
      question: 'Consent to being filmed?',
      required: true,
      key: 'INTRO_1',
      response: '',
    },
  },
  7: {
    title: 'Experience & Preparation',
    readAloudText:
      'Can you tell me a little bit about your prior coding experience, and how you prepared for this interview?  [Ask follow up questions if not all questions are answered]',
    readToYourselfText: 'Share your own background. It is great if you can relate to the student.',
    response: {
      type: 'annother',
      question: 'Boot camp prep courses taken',
      required: true,
      key: 'EXP_1',
      response: '',
    },
  },
  8: {
    title: "Experience & Preparation (cont'd)",
    readAloudText:
      'Can you tell me a little bit about your prior coding experience, and how you prepared for this interview?  [Ask follow up questions if not all questions are answered]',
    response: {
      type: 'text',
      question: 'Other coding courses taken',
      required: false,
      key: 'EXP_2',
      response: '',
    },
    readToYourselfText: 'Share your own background. It is great if you can relate to the student.',
  },
  9: {
    title: "Experience & Preparation (cont'd)",
    readAloudText:
      'Can you tell me a little bit about your prior coding experience, and how you prepared for this interview?  [Ask follow up questions if not all questions are answered]',
    response: {
      type: 'text',
      question: 'Prior professional experience in software industry',
      required: false,
      key: 'EXP_3',
      response: '',
    },
    readToYourselfText: 'Share your own background. It is great if you can relate to the student.',
  },
  10: {
    title: "Experience & Preparation (cont'd)",
    readAloudText:
      'Can you tell me a little bit about your prior coding experience, and how you prepared for this interview?  [Ask follow up questions if not all questions are answered]',
    response: {
      type: 'text',
      question: "Help they've gotten preparing for interview",
      required: false,
      key: 'EXP_4',
      response: '',
    },
    readToYourselfText: 'Share your own background. It is great if you can relate to the student.',
  },
  11: {
    title: 'Outcomes',
    readAloudText:
      "Most applicants are interested in finding full-time work as a software engineer afterwards.  Does that describe you, or do you have other goals you're aiming for?",
    response: {
      type: 'text',
      question: 'Goal in taking the course',
      required: false,
      key: 'OUT_1',
      response: '',
    },
  },
  12: {
    title: "Outcomes (cont'd)",
    readAloudText: 'Are you authorized to work in the US?',
    response: {
      type: 'multi',
      question: 'Authorized to work in the US',
      required: false,
      key: 'OUT_2',
      response: '',
    },
  },
  13: {
    title: "Outcomes (cont'd)",
    readAloudText:
      'Our program outcomes are among the strongest in the industry. That being said, time to find a job differs by individual. To be safe, you should be prepared to face up to 6 months of job search after graduation. Are you logistically and financially prepared for this?',
    response: {
      type: 'bool',
      question: 'Prepared for a long job search?',
      required: false,
      key: 'OUT_3',
      response: '',
    },
  },
  14: {
    title: 'Other Schools',
    readAloudText: "Other than Hack Reactor, are there any other schools you're considering?",
    response: {
      type: 'text',
      question: "Other schools they're considering",
      required: false,
      key: 'OTHER_1',
      response: '',
    },
    readToYourselfText:
      'If you feel comfortable and able to sway the student, feel free to share your own story on how you evaluated options and choose Hack Reactor',
  },
  15: {
    title: 'Preferred Start Date',
    readAloudText: 'What is your preferred start date?',
    response: {
      type: 'date',
      question: 'Preferred start date',
      key: 'OTHER_2',
      response: '',
    },
  },
  16: {
    title: 'Other Start Dates?',
    readAloudText: "Are there any other start dates you'd consider?",
    response: {
      type: 'text',
      question: 'Other viable start dates',
      key: 'OTHER_3',
      response: '',
    },
  },
  17: {
    title: 'Preferred Campus',
    readAloudText:
      'We have several campuses and this interview will be forwarded to your preferred campus for assessment. It’s important that we get that right. What is your preferred campus?',
    response: {
      type: 'multi',
      question: 'Preferred campus',
      key: 'OTHER_4',
      response: '',
    },
  },
  18: {
    title: 'Non-disclosure Consent',
    readAloudText:
      'Let’s proceed with the technical portion of the interview! We ask all candidates not to share any information about the content or structure of this interview.  It’s really important, and in fact, when people share it with their friends, it can create really bad consequences.  Can you agree not to share about this interview?',
    response: {
      type: 'bool',
      question:
        'Applicant explicitly agrees not to share information about this interview? (yes/no)',
      key: 'OTHER_5',
      response: '',
    },
  },
  19: {
    title: 'Begin Technical Prompt',
    readAloudText:
      'Great. We’re going to get started with the technical portion of the interview.  Here we have a JavaScript environment where can write JavaScript on the left hand side of the screen and when we click on the “RUN” button, or use “command + enter” we see it evaluate on the right hand side of the screen.',
    readToYourselfText: `Print something in Codestitch using console.log`,
  },
  20: {
    title: `Begin Technical Prompt (cont'd)`,
    readAloudText: `The purpose of this exercise is to test your current level of coding ability, your communication skills, and your ability to problem-solve and get unstuck when faced with challenges. 
    
Here are some ground rules:

1. Please think out loud as you work (within reason). You’ll be given bonus points for being articulate about your thinking, especially when you are unsure of how to proceed.  I’m very interested in hearing you articulate how the computer will understand your code before you run the code.

2. If you don't know how to do something, or if you’re not sure about your code, try reasoning aloud or using console.log.  You can also use Google, just let me know first.  

3. If you’re really stuck, you can ask me questions. It counts against you somewhat, but it’s much better than just being stuck. Got it?`,
  },
/////////////////////////
// Begin technical prompt
/////////////////////////
  21: {
    title: 'CopyPasta',
    readAloudText: "Here is a helper function we gon' use",
    clipboard: {
      code: true,
      text: "function() { \n  console.log('test');\n}",
    },
  },
/////////////////////////
// End of technical prompt
/////////////////////////

};

export default script;
