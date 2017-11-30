import React from 'react';
import PropTypes from 'prop-types';
import Step from './Step';

const Main = ({
  script,
  currentStep,
  lastStep,
  handleInput,
  changeStep,
}) => (
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
  script: PropTypes.object.isRequired,
  currentStep: PropTypes.number.isRequired,
  lastStep: PropTypes.number.isRequired,
  handleInput: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
});

export default Main;
