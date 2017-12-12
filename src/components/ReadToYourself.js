import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    display: 'flex',
  },
  textArea: {
    backgroundColor: 'white',
    borderRadius: 5,
    maxWidth: 700,
    width: '100%',
    color: 'grey',
  },
  avatar: {
    backgroundColor: 'white',
    marginRight: 15,
  },
  input: {
    maxWidth: 650,
    width: '100%',
    color: 'grey',
    fontSize: '0.8rem',
  },
});

const ReadToYourself = ({ text, classes }) => (
  <Paper className={classes.container}>
    <Avatar className={classes.avatar}>
      <Icon color="primary">info</Icon>
    </Avatar>
    <div className={classes.textArea}>
      <Input value={text} disabled multiline disableUnderline className={classes.input} />
    </div>
  </Paper>
);

ReadToYourself.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

ReadToYourself.defaultProps = {
  text: '',
};

export default withStyles(styles)(ReadToYourself);
