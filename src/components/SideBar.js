import React from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Progress from './Progress';

const styles = theme => ({
  list: {
    width: 250,
  },
});


const SideBar = ({
  show,
  toggleEvent,
  classes,
  progressStep,
  changeStep,
}) => {
  const list = ['Thing 1', 'Thing 2', 'Thing 3', 'Thing B'];
  const sideList = list.map((item, index) => (
    <div className={classes.list} key={index} >
      <ListItem>{item}</ListItem>
    </div>
  ));
  return (
    <Drawer open={show} onRequestClose={toggleEvent('showSidebar')}>
      <div
        tabIndex={0}
        role="button"
        onClick={toggleEvent('showSidebar')}
        onKeyDown={toggleEvent('showSidebar')}
      >
        <List>
          {sideList}
          <Divider />
        </List>
        <Progress progressStep={progressStep} changeStep={changeStep} />
      </div>
    </Drawer>
  );
};

SideBar.propTypes = {
  show: PropTypes.bool,
  toggleEvent: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  progressStep: PropTypes.number.isRequired,
  changeStep: PropTypes.func.isRequired,
};

SideBar.defaultProps = {
  show: false,
};

export default withStyles(styles)(SideBar);
