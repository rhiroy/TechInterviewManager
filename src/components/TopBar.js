import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Timer from 'material-ui-icons/Timer';
import Switch from 'material-ui/Switch';
import { withStyles } from 'material-ui/styles';
import moment from 'moment';

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
  applicantName, interviewDate, toggleEvent, classes, startTimer, elapsed, darkMode,
}) => (
  <AppBar position="static" color="primary">
    <Toolbar>
      <IconButton className={classes.icon} onClick={toggleEvent('showSidebar')}>
        <MenuIcon />
      </IconButton>
      <Typography type="title">{applicantName}</Typography>
      <Typography type="subheading" className={classes.title}>
        {`${interviewDate.month() + 1}/${interviewDate.date()}/${interviewDate.year()}`}
      </Typography>
      <Switch checked={darkMode} onChange={toggleEvent('darkMode')} />
      <Button raised color="accent" onClick={startTimer}>
        <Timer style={{ paddingRight: 10 }} />
        <Typography>{elapsed ? moment(elapsed).format('m:ss') : 'Start Timer'}</Typography>
      </Button>
    </Toolbar>
  </AppBar>
);

TopBar.propTypes = {
  toggleEvent: PropTypes.func.isRequired,
  applicantName: PropTypes.string.isRequired,
  interviewDate: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopBar);
