import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';

const styles = {
  container: {
    backgroundColor: 'beige',
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
};

const Response = ({ response, handleInput }) => (
  <Paper style={styles.container}>
    <Avatar style={styles.avatar}>
      <Icon color="primary">keyboard</Icon>
    </Avatar>
    <div style={styles.textArea}>
      <TextField
        value={response.response}
        multiline={response.multi || false}
        label={response.question}
        style={styles.input}
        onChange={handleInput}
      />
    </div>
  </Paper>
);

Response.propTypes = ({
  response: PropTypes.object.isRequired,
  handleInput: PropTypes.func.isRequired,
});

export default Response;
