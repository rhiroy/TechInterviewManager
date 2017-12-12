import React from 'react';
import Drawer from 'material-ui/Drawer';
import List, { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Progress from './Progress';

const styles = theme => ({
  list: {
    width: 250,
  },
});

const SideBar = ({
  show, toggleEvent, classes, progressStep, progressStepMap, changeStep,
}) => {
  const list = ['Helpful Resource #1', 'Helpful Resource #2', 'Helpful Resouce #3'];
  const sideList = list.map((item, index) => (
    <div className={classes.list} key={item}>
      <ListItem>
        <Typography>
          <a href="http://yahoo.com" target="_blank" rel="noopener noreferrer">
            {item}
          </a>
        </Typography>
      </ListItem>
    </div>
  ));
  return (
    <Drawer open={show} onRequestClose={toggleEvent('showSidebar')}>
      <div >
        <List>
          {sideList}
          <Divider />
        </List>
        <Progress
          progressStep={progressStep}
          progressStepMap={progressStepMap}
          changeStep={changeStep}
        />
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
  progressStepMap: PropTypes.object.isRequired,
};

SideBar.defaultProps = {
  show: false,
};

export default withStyles(styles)(SideBar);
