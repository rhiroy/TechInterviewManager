import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { blue } from 'material-ui/colors'; 
const styles = {
  container: {
    bottom: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    justifyItems: 'space-between',
    paddingLeft: 40,
    paddingRight: 40,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 25,
    maxWidth: 800,
    minHeight: 200,
    backgroundColor: blue[500],
  },
};

class TimeStampNotes extends Component {
  state = {
    notes: {},
  };

  render() {
    return (
      <Paper style={styles.container}>
        <div>
          <Typography type="subheading">
            Time-Stamped Notes
          </Typography>
        </div>
      </Paper>
    );
  }
}

export default TimeStampNotes;
