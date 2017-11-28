import React from 'react';
import Step from './Step';

const Main = ({ script, handleInput, changeStep }) => {
  return (
    <div style={styles.container}>
      <Step
        step={
          {
            title: 'Introduce Yourself',
            readAloudText: "Hello! I'm ____, [briefly introduce yourself]. How’s your day going? \n Welcome to " +
              'your technical interview with Hack Reactor! I’m looking forward to coding together. A' +
              'lthough we have to keep introductions brief, I’d love to get to know you. \n Can you ' +
              'tell me about yourself and your journey to Hack Reactor?',
            readToYourselfText: 'This is a hint for the interviewer. It is not to be read aloud.',
            response: {
              type: 'text',
              multi: true,
              required: true,
              question: 'Desribe your journey to Hack Reactor',
              key: 'INTRO_0',
              response: '',
            },
          }
        }
        handleInput={handleInput}
      />
      {/* {Object.keys(script).map((key) => {
        const step = script[key];
        if (step.type === 'response') {
          return (
            <Response
              title={step.title}
              readAloudText={step.readAloudText}
              readToYourselfText={step.readToYourselfText}
              response={step.response}
              handleInput={handleInput}
            />
          );
        }
        return 'Something else';
      })} */}
    </div>
  );
};

const styles = {
  container: {
    flex: 2,
    justifyContent: 'center',
    textAlign: 'center',
  },
  paper: {
    padding: 10,
  },
};

export default Main;
