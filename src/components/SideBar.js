import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    width: 240,
    height: 700,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'red',
  },
  paper: {
    padding: 10,
  },
};

const SideBar = ({ show }) => {
  if (show) {
    return (
      <div style={styles.container}>
        {"sidebar here.\nmaybe useless?\nnot sure if we'll keep this"}
      </div>
    );
  }
  return null;
};

SideBar.propTypes = {
  show: PropTypes.bool,
};

SideBar.defaultProps = {
  show: false,
};

export default SideBar;
