import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';
import ReadAloud from './ReadAloud';
import ReadToYourself from './ReadToYourself';
import Response from './Response';
import Clipboard from './Clipboard';

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
    maxWidth: 800,
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 20,
  },
};

class Step extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clipboardText: '',
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount() {
    this.setState({ clipboardText: this.props.step.clipboard.text });
  }

  shouldComponentUpdate(newProps) {
    return newProps.currentStep !== this.props.currentStep;
  }

  handleInput(e) {
    this.setState({ clipboardText: e.target.value });
  }

  render() {
    const { step, currentStep, lastStep, handleInput, changeStep } = this.props;

    const readAloudText = step.readAloudText ? (
      <ReadAloud text={step.readAloudText} />
    ) : null;
    const response = step.response ? (
      <Response response={step.response} handleInput={handleInput} />
    ) : null;
    const readToYourselfText = step.readToYourselfText ? (
      <ReadToYourself text={step.readToYourselfText} />
    ) : null;
    const clipboardText = step.clipboard ? (
      <Clipboard
        text={this.state.clipboardText}
        code={step.clipboard.code}
        handleInput={this.handleInput}
      />
    ) : null;

    return (
      <Paper style={styles.container}>
        {<h2>{step.title}</h2>}
        {readAloudText}
        {clipboardText}
        {response}
        {readToYourselfText}
        <div style={styles.buttonContainer}>
          <Button
            color="accent"
            onClick={() => {
              changeStep("back");
            }}
            disabled={currentStep === 1}
            style={{ flex: 1 }}
          >
            <Icon color="accent">navigate_before</Icon>
            PREVIOUS
          </Button>
          <Button
            color="primary"
            onClick={changeStep}
            style={{ flex: 1 }}
            disabled={currentStep === lastStep}
          >
            NEXT
            <Icon color="primary">navigate_next</Icon>
          </Button>
        </div>
      </Paper>
    );
  }
}

Step.propTypes = {
  step: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  changeStep: PropTypes.func.isRequired,
  currentStep: PropTypes.number.isRequired,
  lastStep: PropTypes.number.isRequired,
};

export default Step;
