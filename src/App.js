import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import moment from 'moment';
import blue from 'material-ui/colors/blue';
import deepPurple from 'material-ui/colors/deepPurple';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Main from './components/Main';
import TimeStampNotes from './components/TimeStampNotes';
import script from './data/script';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: deepPurple,
  },
  status: {
    danger: 'orange',
  },
});

class App extends Component {
  state = {
    showSidebar: false,
    applicantName: '',
    interviewDate: moment(),
    interviewInProgress: true,
    script: {},
    currentStep: 1,
    progressStep: 0,
    lastStep: 1,
    prompt: '',
    notes: '',
    timer: {
      start: null,
      elapsed: null,
    },
    darkMode: false,
  };

  componentWillMount() {
    this.setState({ script, lastStep: Object.keys(script).length });
  }

  componentDidUpdate(prevProps, prevState) {
    const { notes, darkMode, currentStep } = this.state;
    if (notes !== prevState.notes) {
      this.insertTimestamp();
    }
    if (darkMode !== prevState.darkMode) {
      this.toggleDarkMode();
    }
    if (currentStep !== prevState.currentStep) {
      let progressStep;
      if (currentStep < 5) {
        progressStep = 0;
      } else if (currentStep < 19) {
        progressStep = 1;
      } else if (currentStep < this.state.lastStep) {
        progressStep = 2;
      } else {
        progressStep = 3;
      }
      this.setState({ progressStep })
    }
  }

  handleChange = prop => {
    return event => {
      const value = event.target ? event.target.value : event;
      this.setState({ [prop]: value });
    };
  };

  handleInput = event => {
    this.setState({
      script: {
        ...this.state.script,
        [this.state.currentStep]: {
          ...this.state.script[this.state.currentStep],
          response: {
            ...this.state.script[this.state.currentStep].response,
            response: event.target.value,
          },
        },
      },
    });
  };

  toggleEvent = prop => () => {
    this.setState({ [prop]: !this.state[prop] });
  };

  changeStep = step => {
    let newStep;
    if (step === 'end') {
      newStep = this.state.lastStep;
    } else if (step === 'back') {
      newStep = this.state.currentStep - 1;
    } else if (step === 'next') {
      newStep = this.state.currentStep + 1;
    } else if (typeof step === 'number') {
      if (step > 0 && step < this.state.lastStep) {
        newStep = step;
      }
    }
    this.setState({ currentStep: newStep });
  };

  tick = () => {
    this.setState({
      ...this.state,
      timer: {
        ...this.state.timer,
        elapsed: moment() - this.state.timer.start,
      },
    });
  };

  startTimer = () => {
    this.setState({
      timer: {
        start: moment(),
      },
    });
    this.timer = setInterval(this.tick, 500);
  };

  //TODO: make this work
  toggleDarkMode = () => {
    const setting = this.state.darkMode ? 'light' : 'dark';
    console.log(theme);
    theme.palette.type = setting;
    this.forceUpdate();
  };

  insertTimestamp = () => {
    let notes = this.state.notes;
    const replacementText = this.state.timer.elapsed
      ? `[${moment(this.state.timer.elapsed).format('m:ss')}]: `
      : `[START TIMER!]`;
    if (notes.includes('/t')) {
      notes = notes.replace('/t', replacementText);
      this.setState({ notes });
    }
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SideBar
          show={this.state.showSidebar}
          toggleEvent={this.toggleEvent}
          progressStep={this.state.progressStep}
          changeStep={this.changeStep}
        />
        <TopBar
          toggleEvent={this.toggleEvent}
          interviewDate={this.state.interviewDate}
          interviewInProgress={this.state.interviewInProgress}
          applicantName={this.state.applicantName}
          startTimer={this.startTimer}
          elapsed={this.state.timer.elapsed}
          phase={this.state.phase}
          darkMode={this.state.darkMode}
        />
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <Main
            applicantName={this.state.applicantName}
            interviewDate={this.state.interviewDate}
            interviewInProgress={this.state.interviewInProgress}
            script={this.state.script}
            currentStep={this.state.currentStep}
            lastStep={this.state.lastStep}
            handleChange={this.handleChange}
            handleInput={this.handleInput}
            changeStep={this.changeStep}
            toggleEvent={this.toggleEvent}
            prompt={this.state.prompt}
            notes={this.state.notes}
          />
        </div>
        <TimeStampNotes
          handleChange={this.handleChange}
          notes={this.state.notes}
          show={this.state.interviewInProgress}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
