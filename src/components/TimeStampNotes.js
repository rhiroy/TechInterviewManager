import React from 'react';
import PropTypes from 'prop-types';
import Input from 'material-ui/Input';
import Typography from 'material-ui/Typography';
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from 'material-ui/es/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  container: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    backgroundColor: theme.palette.secondary[300],
    padding: 0,
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

const TimeStampNotes = ({ classes, notes, handleChange }) => (
  <ExpansionPanel className={classes.container}>
    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} >
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
);

TimeStampNotes.propTypes = ({
  classes: PropTypes.object.isRequired,
});

export default withStyles(styles)(TimeStampNotes);
