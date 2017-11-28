import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';

const styles = {
  container: {
    backgroundColor: 'lightblue',
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
    color: 'blue',
  },
};

const ReadAloud = ({ text }) => (
  <Paper style={styles.container}>
    <Avatar style={styles.avatar}>
      <Icon>record_voice_over</Icon>
    </Avatar>
    <div style={styles.textArea}>{text}</div>
  </Paper>
);

ReadAloud.propTypes = {
  text: PropTypes.string,
};

ReadAloud.defaultProps = {
  text: '',
};

export default ReadAloud;
