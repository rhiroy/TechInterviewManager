import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    backgroundColor: theme.palette.secondary[500],
    padding: 10,
    marginTop: 20,
    justifyContent: 'center',
    display: 'flex',
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
});

const Response = ({ response, handleInput, classes }) => (
  <Paper className={classes.container}>
    <Avatar className={classes.avatar}>
      <Icon color="primary">keyboard</Icon>
    </Avatar>
    <div className={classes.textArea}>
      <TextField
        key={response.key}
        value={response.response}
        multiline={response.multi || false}
        label={response.question}
        autoFocus
        required={response.required}
        className={classes.input}
        onChange={handleInput}
        rowsMax={5}
      />
    </div>
  </Paper>

);

Response.propTypes = ({
  response: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
});

export default withStyles(styles)(Response);
