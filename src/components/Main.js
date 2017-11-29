import React from 'react';
import Step from './Step';

const Main = ({ script, currentStep, lastStep, handleInput, changeStep }) => {
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
