import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const styles = {
  container: {
    backgroundColor: 'lavender',
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
  avatar: {
    backgroundColor: 'white',
    marginRight: 15,
  },
  code: {
    maxWidth: 650,
    width: '100%',
    fontFamily: 'monospace',
  },
  input: {
    maxWidth: 650,
    width: '100%',
    color: 'grey',
  },
};

const Clipboard = ({ text, code, handleInput }) => (
  <Paper style={styles.container}>
    <Avatar style={styles.avatar}>
      <Icon color="action">content_copy</Icon>
    </Avatar>
    <div style={styles.textArea}>
      <Input
        value={text}
        disabled={code}
        multiline
        rowsMax={10}
        style={code ? styles.code : styles.input}
        onChange={handleInput}
      />
    </div>
    <CopyToClipboard text={text}>
      <Button>Copy</Button>
    </CopyToClipboard>
  </Paper>
);


Clipboard.propTypes = ({
  text: PropTypes.string,
  code: PropTypes.bool,
  handleInput: PropTypes.func.isRequired,
});

Clipboard.defaultProps = ({
  text: '',
  code: false,
});

export default Clipboard;
