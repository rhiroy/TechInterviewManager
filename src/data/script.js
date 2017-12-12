const script = {
  0: {
    beginPhase: 0,
    title: 'Confirm Interviewee is Present',
    clipboard: {
      code: false,
      text:
        'Hi - if you are present, please input your name in the field below and press enter to join the chat. Then post a message so I know you’re here!',
    },
    readToYourselfText:
      'Join the tlk.io chat included in your gCal event. If the student is not visible at the meeting time, paste the snippet into the tlk.io chat',
  },
  1: {
    title: 'Set Up Zoom',
    clipboard: {
      code: false,
      text:
        'Hi! We’ll get started in a few minutes. If you haven’t already, please sign up for and download zoom. I’ll send you a link to our video room shortly.',
    },
    readToYourselfText: 'Once the applicant appears, make sure they are set up with Zoom.',
  },
  2: {
    title: 'Connect to Codestitch',
    clipboard: {
      code: false,
      text:
        'To get us started, can you please write your name and email in a comment in this codestitch.io pad? __LINK_HERE__',
    },
    readToYourselfText: 'Fill in your codestitch URL. Then paste the snippet into the tlk.io chat',
  },
  3: {
    title: 'Connect to Zoom',
    clipboard: {
      code: false,
      text:
        'Here’s the link to our video room: ___URL___HERE___. Once you have Zoom downloaded please click the link to join.',
    },
    readToYourselfText: `In the Zoom app, Click "Meetings". Find the meeting you created for this applicant and click "Start". Start your video & unmute your mic.
      
Meeting URL should automatically copy when you start the meeting. If not, click “Invite” and then “Copy URL.” Send the URL to the applicant with this message`,
  },
  4: {
    beginPhase: 1,
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
  5: {
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
    readToYourselfText:
      'If interviewee gives consent, begin recording in Zoom and start the timer. If they do not consent,  the interview cannot proceed.',
  },
  6: {
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
  7: {
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
  8: {
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
  9: {
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
  10: {
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
  11: {
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
  12: {
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
  13: {
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
  14: {
    title: 'Preferred Start Date',
    readAloudText: 'What is your preferred start date?',
    response: {
      type: 'date',
      question: 'Preferred start date',
      key: 'OTHER_2',
      response: '',
    },
  },
  15: {
    title: 'Other Start Dates?',
    readAloudText: "Are there any other start dates you'd consider?",
    response: {
      type: 'text',
      question: 'Other viable start dates',
      key: 'OTHER_3',
      response: '',
    },
  },
  16: {
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
  17: {
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
  // ///////////////////////
  // Begin technical prompt
  // ///////////////////////
  18: {
    beginPhase: 2,
    title: 'Begin Technical Prompt',
    readAloudText:
      'Great. We’re going to get started with the technical portion of the interview.  Here we have a JavaScript environment where can write JavaScript on the left hand side of the screen and when we click on the “RUN” button, or use “command + enter” we see it evaluate on the right hand side of the screen.',
    readToYourselfText: 'Print something in Codestitch using console.log',
  },
  19: {
    title: "Begin Technical Prompt (cont'd)",
    readAloudText: `The purpose of this exercise is to test your current level of coding ability, your communication skills, and your ability to problem-solve and get unstuck when faced with challenges. 
    
Here are some ground rules:

1. Please think out loud as you work (within reason). You’ll be given bonus points for being articulate about your thinking, especially when you are unsure of how to proceed.  I’m very interested in hearing you articulate how the computer will understand your code before you run the code.

2. If you don't know how to do something, or if you’re not sure about your code, try reasoning aloud or using console.log.  You can also use Google, just let me know first.  

3. If you’re really stuck, you can ask me questions. It counts against you somewhat, but it’s much better than just being stuck. Got it?`,
  },
  20: {
    title: 'CopyPasta',
    readAloudText: "Here is a helper function we gon' use",
    clipboard: {
      code: true,
      text: "function() { \n  console.log('test');\n}",
    },
  },
  // ///////////////////////
  // End of technical prompt
  // ///////////////////////
  21: {
    beginPhase: 3,
    title: 'Wrap Up',
    readAloudText:
      "Let’s exit the codestitch and wrap up. After this call, I'll compile my notes and pass them on with the video for review. The admissions team should follow up with you about next steps within a week, OK?",
    readToYourselfText:
      "If they ask about their interview performance, say you can't talk about results because more staff still have to review the interview. Feel free to share strengths, weaknesses and specific skills to work on, but steer clear of results.",
  },
  22: {
    title: "Wrap Up (cont'd)",
    readAloudText: `Let spend the last few minutes talking about the immersive. What do you know about our student expectations and the program experience?
    
Great. The program is intense and puts a lot of responsibility on you.`,
  },
  23: {
    title: "Wrap Up (cont'd)",
    readAloudText: 'You should be prepared to make this your only focus and not take time off.',
    response: {
      type: 'bool',
      required: true,
      question: 'Knows about long hours and bootcamp nature of the program?',
      key: 'WRAP_UP_1',
      response: '',
    },
  },
  24: {
    title: "Wrap Up (cont'd)",
    readAloudText:
      "You'll be pushed to learn and solve problems autonomously, versus relying on handholding (a critical skill for software engineers).",
    response: {
      type: 'bool',
      required: 'true',
      question: 'Knows about how we optimize for autonomy?',
      key: 'WRAP_UP_2',
      response: '',
    },
  },
  25: {
    title: "Wrap Up (cont'd)",
    readAloudText:
      "There'll be a very positive and friendly environment - but ultimately you'll responsible your own success: During the job search, you'll need to be persistent and overcome rejection. Same with the program - there are checkpoints and assessments you'll need to pass. If you fall behind significantly and it becomes clear the program isn't working for you, you could be removed. Is this something you're on board for?",
    response: {
      type: 'bool',
      required: 'true',
      question: 'Knows about the gating assessment, possibility of failure, and being kicked out?',
      key: 'WRAP_UP_3',
      response: '',
    },
  },
  26: {
    title: "Wrap Up (cont'd)",
    readAloudText:
      "Awesome. That's all we need to cover! Do you have any questions? As a former student, I was in your position not long ago. I'd love to answer any questions you have.",
    response: {
      type: 'text',
      multi: true,
      question: 'Interviewee Questions or Feedback',
      key: 'WRAP_UP_4',
      response: '',
    },
    readToYourselfText: `Note questions they ask, or other interesting information about this portion of the interview. Also note any students comments that could help our marketing team improve our marketing message or positioning.
    
When applicant has disconnected from Zoom, proceed to the next section for evaluation.`,
  },
  27: {
    beginPhase: 4,
    title: 'Enter Final Code',
    response: {
      type: 'text',
      key: 'FINAL_CODE',
      multi: 'true',
      question: 'Paste final code for the problem:',
      required: true,
      response: '',
    },
    readToYourselfText: `1. End your Zoom call.
    
2. Click “Make pad private” on the coder pad you’re using to ensure candidates cannot revisit and/or share the link. Your recording is automatically stored at zoom.us/recording and will begin processing once you’ve ended the call.`,
  },
  28: {
    title: 'Warm Up Bar',
    response: {
      type: 'text',
      key: 'WARM_UP_BAR',
      question: 'Did applicant get past warm up problem bar?',
      required: true,
      response: '',
    },
    readToYourselfText: `1. End your Zoom call.
    
2. Click “Make pad private” on the coder pad you’re using to ensure candidates cannot revisit and/or share the link. Your recording is automatically stored at zoom.us/recording and will begin processing once you’ve ended the call.`,
  },
  29: {
    title: "Main Problem Bar",
    response: {
      type: 'text',
      key: 'MAIN_PROBLEM_BAR',
      question:
        'Did applicant get past minimum main problem bar OR would they have given more time?',
      required: true,
      response: '',
    },
    readToYourselfText: `1. End your Zoom call.
    
2. Click “Make pad private” on the coder pad you’re using to ensure candidates cannot revisit and/or share the link. Your recording is automatically stored at zoom.us/recording and will begin processing once you’ve ended the call.`,
  },
  30: {
    title: "Basic Level Techniques",
    response: {
      type: 'text',
      key: 'BASIC_TECHNIQUES',
      question: 'Did applicant use almost all basic level techniques?',
      required: true,
      response: '',
    },
    readToYourselfText: `Basic Level Techniques:

* declare variable
* write function definition
* write function that accepts arguments
* write function that returns value
* write function that returns value based on passed in values
* use un nested if / else if / else statement
* use math operators
* use logical operators
* use array
* use object
* use for loop
* use while loop`,
  },
  31: {
    title: "Intermediate Level Techniques",
    response: {
      type: 'text',
      key: 'INTERMEDIATE_TECHNIQUES',
      question: 'Did applicant use at least 2 intermediate level techniques?',
      required: true,
      response: '',
    },
    readToYourselfText: `Intermediate Level Techniques:

* use array methods correctly
* use string methods correctly
* use object methods correctly
* write function that accepts function as argument
* write function that evaluates an expression as an argument
* write function that returns a function
* offload work to helper function
* use arrays or objects to make code more readable, DRY, or efficient
* use logical operators inside of if statements
* use nested if / else if / else statement`,
  },
  32: {
    title: "Horsepower",
    response: {
      type: 'multi',
      key: 'HORSEPOWER',
      question: "Applicant's Horsepower traits (mostly negative/positive?)",
      required: true,
      response: '',
    },
    readToYourselfText: `Horsepower:

Ability to work quickly and correctly, especially when faced with new content and conceptual challenges. The narrative of horsepower could be observed if you were to silently scrub through the applicant writing their code.

Positive
  * Fixes own bugs quickly
  * Displays clear case-based reasoning (e.g., via writing a good test suite)
  * Keeps their test suite running clean
  * Writes working code on the first go (or very rapidly fixes minor initial warts)
  * Makes reasonable, useful decisions when faced with new content

Negative
  * Makes same mistake more than once
  * Not understanding the problem statement
  * Can’t understand errors
  * Freezes`,
  },
  33: {
    title: "Autonomy",
    response: {
      type: 'multi',
      key: 'AUTONOMY',
      question: "Applicant's Autonomy traits (mostly negative/positive?)",
      required: true,
      response: '',
    },
    readToYourselfText: `Autonomy:

Ability to work autonomously while pairing with the interviewer, representing their work to the interviewer accurately and relying on the interviewer lightly and efficiently. The narrative of autonomy could be seen by watching and listening to the actual video, especially how the applicant interacted with the interviewer.

Positive
  * Clearly explains their reasoning
  * Quickly understands and applies corrections and suggestions
  * Acts correctly without additional prompting
  * Uses mutual time well
  * Listens well
  * Asks succinct, useful questions
  * Displays confidence (doesn’t crumble under delivery pressure)

Negative
  * Can’t understand corrections and suggestions
  * Uses interviewer to answer whether code or decision is correct, especially after being told they should answer such questions themselves
  * Makes excuses
  * Speaks inarticulately
  * Needs more hints than the problem scaffolding allows
  * Can’t handle the overhead of pairing (e.g., freaks out if interrupted)`,
  },
  34: {
    title: 'Decision',
    response: {
      type: 'text',
      key: 'DECISION',
      required: true,
      question: 'Recommendation:',
      response: '',
    },
    readToYourselfText: `Recommendation Options:
    
1. Accept
2. 2 week study
3. 4 week study
4. 6 week study
5. Hard Reject

See the decision system document in the sidebar for further guidance`,
  },
  35: {
    beginPhase: 5,
    title: 'Review & Submit',
  },
};

export default script;
