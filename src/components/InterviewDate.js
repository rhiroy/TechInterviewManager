import React from 'react';
import { DatePicker } from 'material-ui-pickers';
import PropTypes from 'prop-types';

const InterviewDate = ({ interviewDate, setInterviewDate }) => (
  <div key="basic_day" className="picker">
    <DatePicker
      value={interviewDate}
      onChange={setInterviewDate}
      animateYearScrolling={false}
    />
  </div>
);

InterviewDate.propTypes = ({
  interviewDate: PropTypes.object.isRequired,
  setInterviewDate: PropTypes.func.isRequired,
});

export default InterviewDate;
