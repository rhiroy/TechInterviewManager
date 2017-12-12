import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';
import Icon from 'material-ui/Icon';
import Avatar from 'material-ui/Avatar';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const styles = theme => ({
  container: {
    // backgroundColor: theme.palette.action.disabled,
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
});

class Clipboard extends React.Component {
  state = {
    clipboardText: '',
    code: true,
  };

  componentWillMount() {
    this.setState((prevState, newProps) => { //eslint-disable-line
      return {
        ...prevState,
        clipboardText: newProps.clipboardText.text,
        code: newProps.clipboardText.code,
      };
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      clipboardText: nextProps.clipboardText.text,
      code: nextProps.clipboardText.code,
    });
  }

  handleInput = (event) => {
    this.setState({
      clipboardText: event.target.value,
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.container}>
        <Avatar className={classes.avatar}>
          <Icon color="primary">content_copy</Icon>
        </Avatar>
        <div className={classes.textArea}>
          <Input
            value={this.state.clipboardText}
            disabled={this.state.code}
            multiline
            disableUnderline
            rowsMax={10}
            className={this.state.code ? classes.code : classes.input}
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
  classes: PropTypes.object.isRequired,
});

export default withStyles(styles)(Clipboard);
