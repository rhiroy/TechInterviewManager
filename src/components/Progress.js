import React from 'react';
import Stepper, { Step, StepLabel } from 'material-ui/Stepper';
import PropTypes from 'prop-types';

const steps = [
  'Setup & Prep',
  'General Questions',
  'Technical Prompt',
  'Wrap Up',
  'Evaluate',
  'Finalize & Submit',
];

const styles = {
  progress: {
    cursor: 'pointer',
  },
};

const Progress = ({ progressStep, progressStepMap, changeStep }) => (
  <Stepper activeStep={progressStep} orientation="vertical">
    {steps.map((label, index) => (
      <Step key={label}>
        <StepLabel
          onClick={() => {
            changeStep(progressStepMap[index]);
          }}
          style={styles.progress}
        >
          {label}
        </StepLabel>
      </Step>
    ))}
  </Stepper>
);

Progress.propTypes = {
  progressStep: PropTypes.number.isRequired,
  changeStep: PropTypes.func.isRequired,
  progressStepMap: PropTypes.object.isRequired,
};

export default Progress;
