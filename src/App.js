import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import moment from 'moment';
import { blue, orange } from 'material-ui/colors';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Main from './components/Main';
import TimeStampNotes from './components/TimeStampNotes';
import prompts from './data/prompts';

let type = 'light';
const theme = createMuiTheme({
  palette: {
    type,
    primary: blue,
    secondary: orange,
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
    interviewInProgress: false,
    script: {},
    prompt: '',
    currentStep: 0,
    progressStep: 0,
    progressStepMap: {},
    lastStep: 0,
    notes: '',
    timer: {
      start: null,
      elapsed: null,
    },
    darkMode: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const {
      notes, darkMode, currentStep, prompt,
    } = this.state;
    if (notes !== prevState.notes) {
      this.insertTimestamp();
    }
    if (darkMode !== prevState.darkMode) {
      this.toggleDarkMode();
    }
    if (currentStep !== prevState.currentStep) {
      this.changeProgressStep();
    }
    if (prompt !== prevState.prompt) {
      this.loadScript();
    }
  }

  handleChange = prop => (event) => {
    const value = event.target ? event.target.value : event;
    this.setState({ [prop]: value });
  };


  handleInput = (event) => {
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

  changeStep = (step) => {
    let newStep;
    if (step === 'end') {
      newStep = this.state.lastStep;
    } else if (step === 'back') {
      newStep = this.state.currentStep - 1;
    } else if (step === 'next') {
      newStep = this.state.currentStep + 1;
    } else if (typeof step === 'number') {
      if (step >= 0 && step <= this.state.lastStep) {
        newStep = step;
      }
    }
    this.setState({ currentStep: newStep });
  };

  changeProgressStep = () => {
    const { currentStep, progressStepMap, lastStep } = this.state;
    let progressStep = parseInt(Object.keys(progressStepMap).find(key =>
      currentStep < progressStepMap[parseInt(key, 10) + 1]), 10);
    if (currentStep === lastStep) {
      progressStep = 5;
    }
    this.setState({ progressStep });
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

  // TODO: make this work
  toggleDarkMode = () => {
    type = this.state.darkMode ? 'light' : 'dark';
    this.forceUpdate();
  };

  // checks for a /t and replaces it with the current timer value
  insertTimestamp = () => {
    let { notes } = this.state;
    const replacementText = this.state.timer.elapsed
      ? `[${moment(this.state.timer.elapsed).format('m:ss')}]: `
      : '[START TIMER!]';
    if (notes.includes('/t')) {
      notes = notes.replace('/t', replacementText);
      this.setState({ notes });
    }
  };

  // loads script based on technical prompt selection on start page
  // also sets the progressStepMap and lastStep values
  loadScript = () => {
    const { prompt } = this.state;
    const index = Object.keys(prompts).find(key => prompts[key].title === prompt);
    const { script } = prompts[index];

    const lastStep = Object.keys(script).length - 1;
    const progressStepMap = { 0: 0 };
    Object.keys(script).forEach((key) => {
      if (script[key].beginPhase) {
        progressStepMap[script[key].beginPhase] = parseInt(key, 10);
      }
    });
    this.setState({ script, progressStepMap, lastStep });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <SideBar
          show={this.state.showSidebar}
          toggleEvent={this.toggleEvent}
          progressStep={this.state.progressStep}
          changeStep={this.changeStep}
          progressStepMap={this.state.progressStepMap}
          interviewInProgress={this.state.interviewInProgress}
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
            prompt={this.state.prompt}
            script={this.state.script}
            loadScript={this.loadScript}
            currentStep={this.state.currentStep}
            lastStep={this.state.lastStep}
            handleChange={this.handleChange}
            handleInput={this.handleInput}
            changeStep={this.changeStep}
            toggleEvent={this.toggleEvent}
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
