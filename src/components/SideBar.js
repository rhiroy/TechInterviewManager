import React from 'react';
import Paper from 'material-ui/Paper';
import PropTypes from 'prop-types';

const SideBar = ({ show }) => {
  if (show) {
    return (
      <div style={styles.container}>
        <Paper style={styles.paper}>
          {"sidebar here. maybe useless? not sure if we'll keep this"}
        </Paper>
      </div>
    );
  }
  return null;
};

const styles = {
  container: {
    width: 240,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  paper: {
    padding: 10,
  },
};

SideBar.propTypes = {
  show: PropTypes.bool,
};

SideBar.defaultProps = {
  show: false,
};

export default SideBar;
