import React from 'react';
import PropTypes from 'prop-types';
import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/es/ExpansionPanel';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    backgroundColor: theme.palette.secondary[500],
  },
  input: {
    width: '100%',
    color: '#000',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    fontSize: '0.8rem',
  },
});

const TimeStampNotes = ({
  classes,
  notes,
  handleChange,
  show,
}) => {
  return show ? (
    <ExpansionPanel className={classes.container}>
      <ExpansionPanelSummary expandIcon={<ExpandLessIcon />} >
        <Typography type="subheading">Interviewer Notes</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Input
          value={notes}
          multiline
          className={classes.input}
          rowsMax={5}
          onChange={handleChange('notes')}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  ) : null;
};

TimeStampNotes.propTypes = ({
  classes: PropTypes.object.isRequired,
  notes: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
});

export default withStyles(styles)(TimeStampNotes);
