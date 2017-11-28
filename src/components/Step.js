import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import ReadAloud from './ReadAloud';
import ReadToYourself from './ReadToYourself';
import Response from './Response';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 25,
    maxWidth: 800
  },
};

const Step = ({ step, handleInput }) => {
  const readAloudText = step.readAloudText ? (
    <ReadAloud text={step.readAloudText} />
  ) : null;
  const response = step.response ? (
    <Response response={step.response} handleInput={handleInput} />
  ) : null;
  const readToYourselfText = step.readToYourselfText ? (
    <ReadToYourself text={step.readToYourselfText} />
  ) : null;

  return (
    <Paper style={styles.container}>
      {<h2>{step.title}</h2>}
      {readAloudText}
      {response}
      {readToYourselfText}
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          color="accent"
          onClick={() => {
            handleInput('back');
          }}
          style={{ flex: 1 }}
        >
          <Icon color="accent">navigate_before</Icon>
          PREVIOUS
        </Button>
        <Button color="primary" onClick={handleInput} style={{ flex: 1 }}>
          NEXT
          <Icon color="primary">navigate_next</Icon>
        </Button>
      </div>
    </Paper>
  );
};

Step.propTypes = {
  step: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
};

export default Step;
