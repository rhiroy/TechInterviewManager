const script = {
  1: {
    title: `Confirm Interviewee is Present`,
    clipboard: {
      code: false,
      text:
        `Hi - if you are present, please input your name in the field below and press enter to join the chat. Then post a message so I know you’re here!`,
    },
    readToYourselfText:
      `Join the tlk.io chat included in your gCal event. If the student is not visible at the meeting time, paste the snippet into the tlk.io chat`,
  },
  2: {
    title: `Confirm Interviewee is Set Up with Zoom`,
    clipboard: {
      code: false,
      text: `Hi! We’ll get started in a few minutes. If you haven’t already, please sign up for and download zoom. I’ll send you a link to our video room shortly.`,
    },
    readToYourselfText: `Once the applicant appears, make sure they are set up with Zoom.`,
  },
  3: {
    title: `Connect to Codestitch`,
    clipboard: {
      code: false,
      text:
        `Hi! We’ll get started in a few minutes. If you haven’t already, please sign up for and download zoom. I’ll send you a link to our video room shortly. \n \n To get us started, can you please write your name and email in a comment in this codestitch.io pad? __LINK_HERE__`
    },
    readToYourselfText: `Paste the snippet into the tlk.io chat`,
  },
  4: {
    title: `Connect to Zoom`,
    clipboard: {
      code: false,
      text: `Here’s the link to our video room: ___URL___HERE___. Once you have Zoom downloaded please click the link to join.`,
    },
    readToYourselfText: `In the Zoom app, Click ‘Meetings’. Find the meeting you created for this applicant and click ‘Start’. Start your video & unmute your mic.
    
    Meeting URL should automatically copy when you start the meeting. If not, click “Invite” and then “Copy URL.” Send the URL to the applicant with this message`,
  },
  5: {
    title: `Introduce Yourself`,
    readAloudText:
      `Hello! I'm ____, [briefly introduce yourself]. How’s your day going? 

Welcome to your technical interview with Hack Reactor! I’m looking forward to coding together. Although we have to keep introductions brief, I’d love to get to know you.
      
Can you tell me about yourself and your journey to Hack Reactor?`,
    readToYourselfText: `This is a hint for the interviewer.\n It is not to be read aloud.`,
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
      `Great!  It’s nice to meet you. \n Before we get too far - FYI, we record all these interviews in order to make our decision. I just want to make sure that's cool with you.`,
    response: {
      type: 'consent',
      question: 'Consent to being filmed?',
      required: true,
      key: 'INTRO_1',
      response: '',
    },
  },
  7: {
    title: 'CopyPasta',
    readAloudText: "Here is a helper function we gon' use",
    clipboard: {
      code: true,
      text: "function() { \n  console.log('test');\n}",
    },
  },
};

export default script;
