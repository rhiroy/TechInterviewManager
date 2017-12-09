import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Select from 'material-ui/Select';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Typography from 'material-ui/Typography';
import InterviewDate from './InterviewDate';

const styles = {
  container: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 25,
    maxWidth: 800,
  },
  input: {
    textAlign: 'center',
    maxWidth: 350,
    width: '100%',
  },
  button: {
    margin: 20,
  },
  div: {
    margin: 20,
  },
};

const Start = ({
  applicantName, interviewDate, handleChange, toggleEvent, prompt, codestitchUrl,
}) => (
  <Paper style={styles.container}>
    <Typography type="headline">Begin a New Interview...</Typography>
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
      <div style={styles.div}>
        <TextField
          value={applicantName}
          label="Applicant Name"
          autoFocus
          required
          style={styles.input}
          onChange={handleChange('applicantName')}
        />
      </div>
      <div style={styles.div}>
        <InterviewDate
          interviewDate={interviewDate}
          setInterviewDate={handleChange('interviewDate')}
        />
      </div>
      <div style={styles.div}>
        <FormControl style={{ minWidth: 350 }}>
          <InputLabel htmlFor="prompt">Select a prompt</InputLabel>
          <Select
            value={prompt}
            onChange={handleChange('prompt')}
            input={<Input name="prompt" id="prompt" />}
          >
            <MenuItem value="mrp">MRP</MenuItem>
            <MenuItem value="book library">Book Library</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div style={styles.div}>
        <TextField
          value={codestitchUrl}
          label="Codestitch URL"
          style={styles.input}
          onChange={handleChange('codestitchUrl')}
        />
      </div>
    </div>
    <Button
      raised
      color="primary"
      onClick={toggleEvent('interviewInProgress')}
      disabled={applicantName.length <= 0 || prompt.length <= 0}
    >
      Begin Interview
    </Button>
  </Paper>
);

Start.propTypes = {
  applicantName: PropTypes.string.isRequired,
  interviewDate: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleEvent: PropTypes.func.isRequired,
  codestitchUrl: PropTypes.string.isRequired,
};

export default Start;
