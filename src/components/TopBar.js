import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Timer from 'material-ui-icons/Timer';

const styles = {
  title: {
    flex: 1,
    marginLeft: 20,
  },
  icon: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const TopBar = ({
  applicantName,
  interviewDate,
  toggleEvent,
}) => (
  <AppBar position="static" color="primary">
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
        {`${interviewDate.month() + 1}/${interviewDate.date()}/${interviewDate.year()}`}
      </Typography>

      <Button raised color="accent">
        <Timer style={{ paddingRight: 10 }} />
        <Typography>START TIMER</Typography>
      </Button>
    </Toolbar>
  </AppBar>
);

TopBar.propTypes = ({
  toggleEvent: PropTypes.func.isRequired,
  applicantName: PropTypes.string.isRequired,
  interviewDate: PropTypes.object.isRequired,
});

export default TopBar;

