import React from 'react';
import PropTypes from 'prop-types';
import Step from './Step';
import Start from './Start';
import TimeStampNotes from './TimeStampNotes';

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

const Main = ({
  applicantName,
  interviewDate,
  interviewInProgress,
  script,
  currentStep,
  lastStep,
  handleChange,
  handleInput,
  changeStep,
  toggleEvent,
  prompt,
  notes,
}) => {
  if (interviewInProgress) {
    return (
      <div style={styles.container}>
        <Step
          step={script[currentStep]}
          currentStep={currentStep}
          lastStep={lastStep}
          handleInput={handleInput}
          changeStep={changeStep}
        />
        <TimeStampNotes
          handleChange={handleChange}
          notes={notes}
        />
      </div>
    );
  }
  return (
    <div style={styles.container}>
      <Start
        applicantName={applicantName}
        interviewDate={interviewDate}
        handleChange={handleChange}
        toggleEvent={toggleEvent}
        prompt={prompt}
      />
    </div>
  );
};


Main.propTypes = ({
  applicantName: PropTypes.string.isRequired,
  interviewDate: PropTypes.object.isRequired,
  interviewInProgress: PropTypes.bool.isRequired,
  script: PropTypes.object.isRequired,
  currentStep: PropTypes.number.isRequired,
  lastStep: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
  toggleEvent: PropTypes.func.isRequired,
  prompt: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
});

export default Main;
