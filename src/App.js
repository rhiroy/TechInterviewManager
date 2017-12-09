import React, { Component } from 'react';
import moment from 'moment';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Main from './components/Main';
import script from './data/script';

class App extends Component {
  state = {
    showSidebar: false,
    applicantName: '',
    interviewDate: moment(),
    interviewInProgress: false,
    script: {},
    currentStep: 1,
    lastStep: 1,
    prompt: '',
  }

  componentWillMount() {
    this.setState({ script, lastStep: Object.keys(script).length });
  }
 
  handleChange = (prop) => {
    return (event) => {
      const value = event.target ? event.target.value : event;
      this.setState({ [prop]: value });
    };
  }

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
  }

  toggleEvent = (prop) => () => {
    this.setState({ [prop]: !this.state[prop] })
  }

  changeStep = (direction) => {
    const step = direction === 'back' ? -1 : 1;
    this.setState({ currentStep: this.state.currentStep + step });
  }

  selectPrompt = (prompt) => {
    //TODO: make this update the script based on selected prompt.
    console.log(prompt);
  }

  render() {
    return (
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
            selectPrompt={this.selectPrompt}
            toggleEvent={this.toggleEvent}
            prompt={this.state.prompt}
          />
        </div>
      </div>
    );
  }
}

export default App;
