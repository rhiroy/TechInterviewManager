const mrp = {
  title: 'MRP',
  script: {
    0: {
      beginPhase: 0,
      title: 'Setup & Prep',
      subtitle: 'Confirm Applicant is Present',
      clipboard: {
        code: false,
        text:
          'Hi - if you are present, please input your name in the field below and press enter to join the chat. Then post a message so I know you’re here!',
      },
      readToYourselfText:
        'Join the tlk.io chat included in your gCal event. If the student is not visible at the meeting time, paste the snippet into the tlk.io chat',
    },
    1: {
      title: 'Setup & Prep',
      subtitle: 'Set Up Zoom',
      clipboard: {
        code: false,
        text:
          'Hi! We’ll get started in a few minutes. If you haven’t already, please sign up for and download zoom. I’ll send you a link to our video room shortly.',
      },
      readToYourselfText: 'Once the applicant appears, make sure they are set up with Zoom.',
    },
    2: {
      title: 'Setup & Prep',
      subtitle: 'Connect to Codestitch',
      clipboard: {
        code: false,
        text:
          'To get us started, can you please write your name and email in a comment in this codestitch.io pad? __LINK_HERE__',
      },
      readToYourselfText: 'Fill in your codestitch URL. Then paste the snippet into the tlk.io chat',
    },
    3: {
      title: 'Setup & Prep',
      subtitle: 'Connect to Zoom',
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
      title: 'General Questions',
      subtitle: 'Introduce Yourself',
      readAloudText:
        "Hello! I'm ____, [briefly introduce yourself]. How’s your day going?\n\nWelcome to your technical interview with Hack Reactor! I’m looking forward to coding together. Although we have to keep introductions brief, I’d love to get to know you.\n\nCan you tell me about yourself and your journey to Hack Reactor?",
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
      title: 'General Questions',
      subtitle: 'Consent to Recording',
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
        'If applicant gives consent, begin recording in Zoom and start the timer. If they do not consent,  the interview cannot proceed.',
    },
    6: {
      title: 'General Questions',
      subtitle: 'Boot Camp Prep Courses',
      readAloudText:
        'Can you tell me a little bit about your prior coding experience, and how you prepared for this interview?',
      readToYourselfText: `* Ask follow up questions if not all questions are answered.
      
  * Share your own background. It is great if you can relate to the student.`,
      response: {
        type: 'text',
        question: 'Boot camp prep courses taken',
        required: true,
        key: 'EXP_1',
        response: '',
      },
    },
    7: {
      title: 'General Questions',
      subtitle: 'Other Coding Courses',
      readAloudText:
        'Can you tell me a little bit about your prior coding experience, and how you prepared for this interview?',
      response: {
        type: 'text',
        question: 'Other coding courses taken',
        required: false,
        key: 'EXP_2',
        response: '',
      },
      readToYourselfText: `* Ask follow up questions if not all questions are answered.
      
  * Share your own background. It is great if you can relate to the student.`,
    },
    8: {
      title: 'General Questions',
      subtitle: 'Prior Professional Experience',
      readAloudText:
        'Can you tell me a little bit about your prior coding experience, and how you prepared for this interview?',
      response: {
        type: 'text',
        question: 'Prior professional experience in software industry',
        required: false,
        key: 'EXP_3',
        response: '',
      },
      readToYourselfText: `* Ask follow up questions if not all questions are answered.
      
  * Share your own background. It is great if you can relate to the student.`,
    },
    9: {
      title: 'General Questions',
      subtitle: 'Additional Interview Prep',
      readAloudText:
        'Can you tell me a little bit about your prior coding experience, and how you prepared for this interview?',
      response: {
        type: 'text',
        question: "Help they've gotten preparing for interview",
        required: false,
        key: 'EXP_4',
        response: '',
      },
      readToYourselfText: `* Ask follow up questions if not all questions are answered.
      
  * Share your own background. It is great if you can relate to the student.`,
    },
    10: {
      title: 'General Questions',
      subtitle: 'Goal in Taking Course',
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
      title: 'General Questions',
      subtitle: 'Employment Eligibility',
      readAloudText: 'Are you authorized to work in the US?',
      response: {
        type: 'multi',
        question: 'Authorized to work in the US',
        required: false,
        key: 'OUT_2',
        response: '',
      },
      readToYourselfText: `Note one of the following Options:
      
  1. US citizen
  2. Permanent resident of US
  3. Other Visa
  4. International resident looking to job-search outside the US`,
    },
    12: {
      title: 'General Questions',
      subtitle: 'Outcomes & Job Search',
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
      title: 'General Questions',
      subtitle: 'Other Schools',
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
      title: 'General Questions',
      subtitle: 'Preferred Start Date',
      readAloudText: 'What is your preferred start date?',
      response: {
        type: 'date',
        question: 'Preferred start date?',
        key: 'OTHER_2',
        response: '',
      },
    },
    15: {
      title: 'General Questions',
      subtitle: 'Other Start Dates',
      readAloudText: "Are there any other start dates you'd consider?",
      response: {
        type: 'text',
        question: 'Other viable start dates?',
        key: 'OTHER_3',
        response: '',
      },
    },
    16: {
      title: 'General Questions',
      subtitle: 'Preferred Campus',
      readAloudText:
        'We have several campuses and this interview will be forwarded to your preferred campus for assessment. It’s important that we get that right. What is your preferred campus?',
      response: {
        type: 'multi',
        question: 'Preferred campus?',
        key: 'OTHER_4',
        response: '',
      },
    },
    17: {
      title: 'General Questions',
      subtitle: 'Non-disclosure Consent',
      readAloudText: `Let’s proceed with the technical portion of the interview! 
      
  We ask all candidates not to share any information about the content or structure of this interview.  It’s really important, and in fact, when people share it with their friends, it can create really bad consequences.  Can you agree not to share about this interview?`,
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
      title: 'Technical Prompt',
      subtitle: 'Introduce Codestitch',
      readAloudText:
        'Great. We’re going to get started with the technical portion of the interview.  Here we have a JavaScript environment where can write JavaScript on the left hand side of the screen and when we click on the “RUN” button, or use “command + enter” we see it evaluate on the right hand side of the screen.',
      readToYourselfText: 'Print something in Codestitch using console.log',
    },
    19: {
      title: 'Technical Prompt',
      subtitle: 'Ground Rules',
      readAloudText: `The purpose of this exercise is to test your current level of coding ability, your communication skills, and your ability to problem-solve and get unstuck when faced with challenges. 
      
  Here are some ground rules:

  1. Please think out loud as you work (within reason). You’ll be given bonus points for being articulate about your thinking, especially when you are unsure of how to proceed.  I’m very interested in hearing you articulate how the computer will understand your code before you run the code.

  2. If you don't know how to do something, or if you’re not sure about your code, try reasoning aloud or using console.log.  You can also use Google, just let me know first.  

  3. If you’re really stuck, you can ask me questions. It counts against you somewhat, but it’s much better than just being stuck. Got it?`,
    },
    20: {
      title: 'Technical Prompt',
      subtitle: 'Warm Up',
      readAloudText:
        'We are going be utilizing arrays and objects in our prompt. Let’s start with a warm up. Write a function which returns true if the target is in the array and false if it is not. Here is the specification and array to guide you:',
      clipboard: {
        code: true,
        text: `// Write a function which returns true if the title is in the array and false if it is not.

  var titles = ['The Hobbit', 'The Great Gatsby', 'Gone with the Wind']`,
      },
      readToYourselfText: `After the function is complete, have the applicant confirm the function is working properly. They should know to how to execute the function and use console.log to confirm the output.
      
  The applicant should not need any support with this warm up. They might have several ideas about how to do it and may ask you which is best, but you can let them know that they can do whichever they think is best.

  If an applicant is having a very hard time at this point of the interview, steer them towards a successful implementation of the function and let them know you can see they are in need of more practice. Be very kind and supportive about this, close down the interview, and let them know that our Admissions department will be reaching out to them for next steps.`,
    },
    21: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem',
      readAloudText:
        "Great! Continuing along, we are going to be building a book library application. We'll start with search functionality and build out more features from there. Arrays and objects are commonly used to store various types of data. We'll start out with an array of book objects which have a title attribute. Please implement what I’ve described in the comment.",
      clipboard: {
        code: true,
        text: `var library = [
    {title: 'The Hobbit'},
    {title: 'The Great Gatsby'},
    {title: 'Gone with the Wind'}
  ];

  function searchLibrary(title) {
    // your code here
  };

  // searchLibrary should:
  //   - return "false" if the book is not found.
  //   - return the book object if it is found.`,
      },
      readToYourselfText:
        'Copy and paste the following snippet into the editor, then move to the next step.',
    },
    22: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: Introduce TDD',
      readAloudText: `I’ve given you an assert function, please take a moment to look at it.

  We use 'assert' to write tests that make sure our functions, given certain inputs, return the expected value. Test driven development is when we write a single initially failing test about the expected behavior of a function or program, before we actually write the functionality that will make the test pass. 

  Using test driven development is beneficial for several reasons:

  1. It forces us to think clearly about the behavior of our function
  2. It forces us to write code in small chunks, which reduces debugging time
  3. By running already existing tests any time we, or others, change the codebase, we can find out immediately if new changes cause our existing code to behave in problematic ways`,
      clipboard: {
        code: true,
        text: `function assert(expectedBehavior, descriptionOfCorrectBehavior) {
    if (!expectedBehavior) {
      console.log(descriptionOfCorrectBehavior);
    } else {
      console.log('test passed');
    }
  }`,
      },
      readToYourselfText: 'After the applicant finishes their `searchLibrary` function, whether it is correct or not, paste in the above code snippet.',
    },
    23: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: Testing searchLibrary with assert',
      readAloudText: `In this call to assert, we say that we expect searchLibrary, when given input of “1984”, to return false. If searchLibrary does not do this, it will print a helpful message telling us how searchLibrary should behave. What do you expect to happen when we run the code on this screen? 
      
  Okay let’s see what happens!`,
      readToYourselfText:
        'Copy and paste the snippet into the editor. Wait for their response, then move to the next step.',
      clipboard: {
        code: true,
        text:
          "assert(searchLibrary('1984') === false, 'return \"false\" if the book is not found.');",
      },
    },
    24: {
      title: 'Technical Prompt',
      subtitle: "Main Problem: Testing searchLibrary with assert (cont'd)",
      readAloudText: 'Do you have any questions before we proceed?',
      readToYourselfText: `If there are bugs, wait for them to debug. Give them a verbal nudge if they don’t go about debugging.

  If there are no bugs and the test passes, edit the body of their searchLibrary function so that it will not return the correct result and run the test again. Revert their searchLibrary function to working condition and run the test again.

  If there are any questions about this, you should direct them to explain what is happening in the call to assert you already wrote for their function. Whether or not they grasp this new content is very telling.`,
    },
    25: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: Write your own assertion',
      readAloudText: `Okay, we are going to use test driven development throughout the remainder of this interview. That means you should write one failing test at a time and make it pass before writing another test and making it pass.

  Now it’s your turn. Two specifications were provided for your searchLibrary function. We are already testing the function returns false when a book is not in the library. I want you to write a second assert statement testing the function returns the book object if the book is in the library.`,
      readToYourselfText:
        'Applicants may have trouble writing an assert statement to test if the correct book object is returned. If they are trying to compare objects directly, explain that even though the objects look the same they in fact are allocated to different locations in memory and thus cannot be compared directly. This helper function may be provided to the applicant. Give them a demonstration and ask them what the output should be before running the code:',
      clipboard: {
        code: true,
        text: `function equalObjects(object1, object2) {
    return JSON.stringify(object1) === JSON.stringify(object2);
  }

  var o1 = {a: 'apple', b: 'banana'};
  var o2 = {a: 'apple', b: 'banana'};
  var o3 = {a: 'apple', c: 'cantaloupe'};

  console.log(equalObjects(o1, o2));
  console.log(equalObjects(o1, o3));
  `,
      },
    },
    26: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: checkoutBook',
      readAloudText: `Good job! Let’s implement the ability to check a book out of our library.
  
  As you will notice, we have provided a new library array and modified the book objects inside it by adding an 'available' property to each one.  We can now use the book object’s 'available' property to track whether a book is available to be checked out.

  Don’t forget to use your 'searchLibrary' function inside your 'checkoutBook' function and make sure to use Test Driven Development.`,
      clipboard: {
        code: true,
        text: `var library = [
    { title: 'The Hobbit', available: true },
    { title: 'The Great Gatsby', available: true },
    { title: 'Gone with the Wind', available: true },
  ];

  function checkoutBook(title) {
    // your code here
  }

  /*
  Utilize 'searchLibrary' inside the 'checkoutBook' function.

  'checkoutBook' should:
  - return "Book not found." if the book doesn't exist in the library.
  - return "Book checked out." if book is checked out successfully.
  - return "Book already checked out." if book is not available.
  */`,
      },
      readToYourselfText: 'Copy and paste the snippet into the editor and move to the next step.',
    },
    27: {
      title: 'Technical Prompt',
      subtitle: "Main Problem: checkoutBook (cont'd)",
      readToYourselfText: `NOTE: The 'available' attribute should only be programmatically manipulated inside the function. The applicant should NOT manually manipulate any of the book objects inside the library array.
      
      For this section of the interview you should really be hands off, playing the role of observer and note taker.
      
      * If the applicant asks you any design questions tell them they can do as they see fit, but that also they are under time constraint. They will have to deal with the consequences of their actions.
      
      * If the applicant runs into any bugs watch how they react and let them know they will have to fix it. You should try really hard not to help them as it robs the applicant of the chance to demonstrate their problem solving skills.
      
      * If the applicant is really stuck with a bug you might ask them how they could investigate what is going wrong.
      
      When finished, write the following timestamped note: MINIMUM MAIN PROBLEM BAR COMPLETE`,
    },
    28: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: checkinBook',
      readAloudText:
        'Nice work! If we can check out a book, we also need the ability to check it in. As before, write failing tests using following the specifications provided in the comments and make them pass.',
      clipboard: {
        code: true,
        text: `function checkinBook(title) {
    // your code here
  }

  /*
    Utilize \`searchLibrary\` inside the \`checkinBook\` function.

    \`checkinBook\` should:
    - return "Book not found." if the book doesn't exist in the library.
    - return "Book checked in." if book is checked in successfully.
    - return "Book not checked out." if book is already available.
  */
  `,
      },
      readToYourselfText: 'Copy and paste the snippet into the editor',
    },
    29: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: Refactor to replace "Book" with the book\'s title',
      readAloudText:
        "We want to continue to expand the functionality of our library application. But, before we add another attribute to our book objects we need to do a little refactoring. Let's refactor our previous functions to replace 'Book' with the book's title. You will also need to refactor your existing assert statements accordingly.",
      clipboard: {
        code: true,
        text: `/* 
    - Refactor your previous \`assert\` statements to replace 'Book' with the book's title. 
    - Refactor your functions to replace 'Book' with the book's title. 
  */`,
      },
      readToYourselfText: `Before:

  assert(checkinBook('The Great Gatsby') === 'Book checked in', 'return "Book checked in." if book is checked in successfully.')

  After:

  assert(checkinBook('The Great Gatsby') === 'The Great Gatsby checked in.', 'return "The Great Gatsby checked in." if book is checked in successfully.')`,
    },
    30: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: Refactoring to store messages in log',
      readAloudText:
        "Splendid! You will see that we have added yet another attribute to our book objects. The `log` attribute is an array and will be utilized to store the messages returned from our functions. Let's refactor our `checkinBook` and `checkoutBook` functions to store the returned messages in the book's log array. Note, you will want to create at least one book transaction to populate the `log` before testing its functionality.",
      readToYourselfText: `Copy and paste the snippet into the editor.
      
  Example transactions may look like:

  checkoutBook('The Hobbit');
  checkinBook('Gone with the Wind');`,
      clipboard: {
        code: true,
        text: `var library = [
    {title: 'The Hobbit', available: true, log: []},
    {title: 'The Great Gatsby', available: true, log: []},
    {title: 'Gone with the Wind', available: true, log: []}
  ]

  /*
  Specs:
  - A book object's \`log\` attribute should have a length of 1 after \`checkinBook\` or \`checkoutBook\` transaction has been executed on the book one time.
  */`,
      },
    },
    31: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: Implement users',
      readAloudText: `Our library application is looking great. It would be even better if we implemented users and recorded their names in each book transaction. 
      
  Let's refactor our \`checkoutBook\` and \`checkinBook\` functions by passing it a second argument \`user\` and concatenating the \`user\` to the beginning of our string. Don't forget to create at least one book transaction to test the  functionality of our log attribute.`,
      readToYourselfText: `Copy and paste the snippet into the editor.

  Applicants may be unfamiliar with the use of the method \`.indexOf()\` to check for the \`user\` within a string. If so, teach them about the \`.indexOf()\` method and show the applicant how it's used.`,
      clipboard: {
        code: true,
        text: `var users = ['Sally', 'Tom', 'Alex'];

  /*
  Specs:
  - Write one assert statement to verify a user's name is present in a book object's log message
  */`,
      },
    },
    32: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: Rank titles by popularity',
      readAloudText:
        "Excellent! Now that we are storing book titles and users in every message we can do some analysis on our library's books and users. Devise a way to utilize the `log` attributes of all book objects to rank book titles by popularity (from most popular to least popular). Create at least 5 transactions in order to populate the logs.",
      readToYourselfText: `It’s up to the applicant how to implement and test the functionality. 

  If applicant is unsure how to implement these functionalities tell them to consider using the methods \`filter\`, \`map\` and/or \`reduce\`.`,
    },
    33: {
      title: 'Technical Prompt',
      subtitle: 'Main Problem: Rank most active users',
      readAloudText: 'Outstanding! Now, let\'s do some user analysis. Again, utilize the `log` attribute of all books to rank most active users (from most active to least active).',
      readToYourselfText: 'Again, it’s up to the applicant how to implement and test the functionality.',
    },
    // ///////////////////////
    // End of technical prompt
    // ///////////////////////
    34: {
      beginPhase: 3,
      title: 'Wrap Up',
      subtitle: 'Exit Codestitch',
      readAloudText:
        "Let’s exit the codestitch and wrap up. After this call, I'll compile my notes and pass them on with the video for review. The admissions team should follow up with you about next steps within a week, OK?",
      readToYourselfText:
        "If they ask about their interview performance, say you can't talk about results because more staff still have to review the interview. Feel free to share strengths, weaknesses and specific skills to work on, but steer clear of results.",
    },
    35: {
      title: 'Wrap Up',
      subtitle: 'Talk About the Program',
      readAloudText: `Let spend the last few minutes talking about the immersive. What do you know about our student expectations and the program experience?

  Great. The program is intense and puts a lot of responsibility on you.`,
    },
    36: {
      title: 'Wrap Up',
      subtitle: 'Expectations: Long Hours',
      readAloudText: 'You should be prepared to make this your only focus and not take time off.',
      response: {
        type: 'bool',
        required: true,
        question: 'Knows about long hours and bootcamp nature of the program?',
        key: 'WRAP_UP_1',
        response: '',
      },
    },
    37: {
      title: 'Wrap Up',
      subtitle: 'Expectations: Autonomy',
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
    38: {
      title: 'Wrap Up',
      subtitle: 'Expectations: Gating Assessment',
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
    39: {
      title: 'Wrap Up',
      subtitle: 'Applicant Questions About the Program',
      readAloudText:
        "Awesome. That's all we need to cover! Do you have any questions? As a former student, I was in your position not long ago. I'd love to answer any questions you have.",
      response: {
        type: 'text',
        multi: true,
        question: 'Applicant Questions or Feedback',
        key: 'WRAP_UP_4',
        response: '',
      },
      readToYourselfText: `Note questions they ask, or other interesting information about this portion of the interview. Also note any students comments that could help our marketing team improve our marketing message or positioning.

  When applicant has disconnected from Zoom, proceed to the next section for evaluation.`,
    },
    40: {
      beginPhase: 4,
      title: 'Evaluate',
      subtitle: 'Enter Final Code',
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
    41: {
      title: 'Evaluate',
      subtitle: 'Warm Up Bar',
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
    42: {
      title: 'Evaluate',
      subtitle: 'Main Problem Bar',
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
    43: {
      title: 'Evaluate',
      subtitle: 'Basic Level Techniques',
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
    44: {
      title: 'Evaluate',
      subtitle: 'Intermediate Level Techniques',
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
    45: {
      title: 'Evaluate',
      subtitle: 'Horsepower',
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
    46: {
      title: 'Evaluate',
      subtitle: 'Autonomy',
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
    47: {
      title: 'Evaluate',
      subtitle: 'Decision',
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
    48: {
      beginPhase: 5,
      title: 'Review & Submit',
    },
  },
};

export default mrp;
