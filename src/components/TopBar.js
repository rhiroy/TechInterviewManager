import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Timer from 'material-ui-icons/Timer';
import InterviewDate from './InterviewDate';

const TopBar = ({
  toggleSidebar,
  applicantName,
  interviewDate,
  setInterviewDate,
  toggleEvent
}) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <IconButton
        style={styles.icon}
        onClick={toggleEvent('showSidebar')}
      >
        <MenuIcon />
      </IconButton>
      <Typography type="title">
        {applicantName}
      </Typography>
      <Typography type="subheading" style={styles.title}>
        <InterviewDate interviewDate={interviewDate} setInterviewDate={setInterviewDate} />
      </Typography>

      <Button raised style={styles.timer}>
        <Timer style={{ paddingRight: 10 }} />
        <Typography>START TIMER</Typography>
      </Button>
    </Toolbar>
  </AppBar>
);

TopBar.propTypes = ({
  toggleSidebar: PropTypes.func.isRequired,
  applicantName: PropTypes.string.isRequired,
  interviewDate: PropTypes.object.isRequired,
  setInterviewDate: PropTypes.func.isRequired,
});

export default TopBar;

const styles = {
  title: {
    flex: 1,
    marginLeft: 20,
  },
  timer: {
    backgroundColor: 'red',
    float: 'right',
  },
  icon: {
    marginLeft: -12,
    marginRight: 20,
  },
};
