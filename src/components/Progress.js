import React from 'react';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

const steps = ['Introduction', 'General Questions', 'Technical Prompt', 'Wrap Up'];

const Progress = ({ progressStep }) => (
  <Stepper activeStep={progressStep} orientation="vertical">
    {steps.map(label => (
      <Step key={label}>
        <StepLabel>{label}</StepLabel>
      </Step>
    ))}
  </Stepper>
);

Progress.propTypes = {
  progressStep: PropTypes.number.isRequired,
  changeStep: PropTypes.func.isRequired,
};

export default Progress;
