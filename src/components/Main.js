import React from 'react';
import PropTypes from 'prop-types';
import Step from './Step';
import Start from './Start';

const Main = ({
  applicantName,
  interviewDate,
  interviewInProgress,
  script,
  currentStep,
  lastStep,
  handleInput,
  changeStep,
  toggleInterview,
  selectPrompt,
  setApplicantName,
  setInterviewDate,
  handleChange,
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
      </div>
    );
  }
  return (
    <div style={styles.container}>
      <Start
        applicantName={applicantName}
        interviewDate={interviewDate}
        setInterviewDate={setInterviewDate}
        toggleInterview={toggleInterview}
        selectPrompt={selectPrompt}
        setApplicantName={setApplicantName}
        handleChange={handleChange}
      />
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

Main.propTypes = ({
  applicantName: PropTypes.string.isRequired,
  interviewDate: PropTypes.object.isRequired,
  script: PropTypes.object.isRequired,
  currentStep: PropTypes.number.isRequired,
  lastStep: PropTypes.number.isRequired,
  handleInput: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
  interviewInProgress: PropTypes.bool.isRequired,
  toggleInterview: PropTypes.func.isRequired,
  selectPrompt: PropTypes.func.isRequired,
  setApplicantName: PropTypes.func.isRequired,
  setInterviewDate: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
});

export default Main;
