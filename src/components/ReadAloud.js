import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';

const styles = {
  container: {
    backgroundColor: 'skyblue',
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
};

const ReadAloud = ({ text }) => (
  <Paper style={styles.container}>
    <Avatar style={styles.avatar}>
      <Icon color="action">record_voice_over</Icon>
    </Avatar>
    <div style={styles.textArea}>
      <Input value={text} disabled multiline disableUnderline style={styles.input} />
    </div>
  </Paper>
);

ReadAloud.propTypes = {
  text: PropTypes.string,
};

ReadAloud.defaultProps = {
  text: '',
};

export default ReadAloud;
