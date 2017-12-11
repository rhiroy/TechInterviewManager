import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.secondary[500],
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    display: 'flex',
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
  input: {
    maxWidth: 650,
    width: '100%',
    color: 'black',
  },
});

const ReadAloud = ({ text, classes }) => (
  <Paper className={classes.container}>
    <Avatar className={classes.avatar}>
      <Icon color="primary">record_voice_over</Icon>
    </Avatar>
    <div className={classes.textArea}>
      <Input value={text} disabled multiline disableUnderline className={classes.input} />
    </div>
  </Paper>
);

ReadAloud.propTypes = {
  text: PropTypes.string,
  classes: PropTypes.object.isRequired,
};

ReadAloud.defaultProps = {
  text: '',
};

export default withStyles(styles)(ReadAloud);
