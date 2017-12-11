import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import moment from 'moment';
import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Main from './components/Main';
import TimeStampNotes from './components/TimeStampNotes';
import script from './data/script';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
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
    lastStep: 1,
    prompt: '',
    notes: '',
    timer: {
      start: null,
      elapsed: null,
    },
  };

  componentWillMount() {
    console.log(moment())
    this.setState({ script, lastStep: Object.keys(script).length });
  }

  componentDidUpdate() {
    let notes = this.state.notes;
    if ( this.state.timer.elapsed && notes.includes('/t')) {
      notes = notes.replace('/t', `[${moment(this.state.timer.elapsed).format('m:ss')}]: `);
      this.setState({ notes });
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

  changeStep = direction => {
    const step = direction === 'back' ? -1 : 1;
    this.setState({ currentStep: this.state.currentStep + step });
  };

  tick = () => {
    this.setState({ 
      ...this.state,
      timer: {
        ...this.state.timer,
        elapsed: moment() - this.state.timer.start
      }
    })
  }

  startTimer = () => {
    this.setState({
      timer: {
        start: moment()
      }
    })
    this.timer = setInterval(this.tick, 500);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <TopBar
          toggleEvent={this.toggleEvent}
          interviewDate={this.state.interviewDate}
          applicantName={this.state.applicantName}
          startTimer={this.startTimer}
          elapsed={this.state.timer.elapsed}
        />
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <SideBar show={this.state.showSidebar} />
          {/* <div className="App" style={{ flexDirection: 'column', display: 'flex' }}> */}
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
        {/* </div> */}
      </MuiThemeProvider>
    );
  }
}

export default App;
