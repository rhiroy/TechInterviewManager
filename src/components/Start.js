import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import InterviewDate from './InterviewDate';

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
  input: {
    maxWidth: 650,
    width: '100%',
  },
  textArea: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    maxWidth: 700,
    width: '100%',
  },
  avatar: {
    backgroundColor: 'white',
    marginRight: 15,
  },
};

const Start = ({
  applicantName,
  interviewDate,
  toggleInterview,
  selectPrompt,
  setInterviewDate,
  setApplicantName,
  handleChange,
}) => (
  <Paper style={styles.container}>
    <h2>New Interview</h2>
    <div style={styles.textArea}>
      <TextField
        value={applicantName}
        label="Applicant Name"
        autoFocus
        required
        style={styles.input}
        onChange={handleChange('applicantName')}
      />

      <Typography type="subheading" style={styles.title}>
        <InterviewDate interviewDate={interviewDate} setInterviewDate={setInterviewDate} />
      </Typography>

      <Button raised>Begin Interview</Button>
    </div>
  </Paper>
);

Start.propTypes = {
  applicantName: PropTypes.string.isRequired,
  interviewDate: PropTypes.object.isRequired,
  toggleInterview: PropTypes.func.isRequired,
  selectPrompt: PropTypes.func.isRequired,
  setInterviewDate: PropTypes.func.isRequired,
  setApplicantName: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Start;
