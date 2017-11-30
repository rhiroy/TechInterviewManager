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

class Clipboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clipboardText: '',
      code: true,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount() {
    this.setState({
      clipboardText: this.props.clipboardText.text,
      code: this.props.clipboardText.code,
    });
  }

  handleInput(event) {
    this.setState({
      clipboardText: event.target.value,
    });
  }

  render() {
    return (
      <Paper style={styles.container}>
        <Avatar style={styles.avatar}>
          <Icon color="action">content_copy</Icon>
        </Avatar>
        <div style={styles.textArea}>
          <Input
            defaultValue={this.state.clipboardText}
            disabled={this.state.code}
            multiline
            rowsMax={10}
            style={this.state.code ? styles.code : styles.input}
            onChange={this.handleInput}
          />
        </div>
        <CopyToClipboard text={this.state.clipboardText}>
          <Button>Copy</Button>
        </CopyToClipboard>
      </Paper>
    );
  }
}

Clipboard.propTypes = ({
  clipboardText: PropTypes.shape({
    code: PropTypes.bool,
    text: PropTypes.string,
  }).isRequired,
});

export default Clipboard;
