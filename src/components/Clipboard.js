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
  input: {
    maxWidth: 650,
    width: '100%',
    fontFamily: 'monospace',
  },
};

const Clipboard = ({ text }) => (
  <Paper style={styles.container}>
    <Avatar style={styles.avatar}>
      <Icon color="primary">content_copy</Icon>
    </Avatar>
    <div style={styles.textArea}>
      <Input value={text} disabled multiline style={styles.input} />
    </div>
    <CopyToClipboard text={text}>
      <Button>Copy</Button>
    </CopyToClipboard>
  </Paper>
);

Clipboard.propTypes = ({
  text: PropTypes.string,
  copyText: PropTypes.string,
});

Clipboard.defaultProps = ({
  text: '',
  copyText: '',
});

export default Clipboard;
