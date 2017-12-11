import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import moment from 'moment';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Main from './components/Main';
import script from './data/script';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
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
  };

  componentWillMount() {
    this.setState({ script, lastStep: Object.keys(script).length });
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

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <TopBar
            toggleEvent={this.toggleEvent}
            interviewDate={this.state.interviewDate}
            applicantName={this.state.applicantName}
            />
          <div className="App" style={{ flexDirection: 'row', display: 'flex' }}>
            <SideBar show={this.state.showSidebar} style={{ flex: 1 }} />
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
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
