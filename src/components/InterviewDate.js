import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from 'material-ui-pickers';

const styles = {
  input: {
    maxWidth: 350,
    width: '100%',
  },
};

const InterviewDate = ({ interviewDate, setInterviewDate }) => (
  <DatePicker
    value={interviewDate}
    onChange={setInterviewDate}
    animateYearScrolling={false}
    format="MM/DD/YYYY"
    style={styles.input}
  />
);

InterviewDate.propTypes = {
  interviewDate: PropTypes.object.isRequired,
  setInterviewDate: PropTypes.func.isRequired,
};

export default InterviewDate;
