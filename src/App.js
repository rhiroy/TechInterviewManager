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
  }

  componentWillMount() {
    this.setState({ script, lastStep: Object.keys(script).length });
  }

  setInterviewDate = (date) => {
    this.setState({ interviewDate: date });
  }
 
  handleChange = (prop) => {
    return (event) => {
      this.setState({ [prop]: event.target.value });
    };
  }

  handleInput = (event) =>{
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

  toggleSidebar = () => {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  toggleInterview = () => {
    this.setState({ interviewInProgress: !this.state.interviewInProgress });
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
          toggleSidebar={this.toggleSidebar}
          toggleEvent={this.toggleEvent}
          interviewDate={this.state.interviewDate}
          applicantName={this.state.applicantName}
          setInterviewDate={this.setInterviewDate}
        />
        <div className="App" style={{ flexDirection: 'row', display: 'flex' }}>
          <SideBar show={this.state.showSidebar} style={{ flex: 1 }} />
          <Main
            applicantName={this.state.applicantName}
            interviewDate={this.state.interviewDate}
            setInterviewDate={this.setInterviewDate}
            interviewInProgress={this.state.interviewInProgress}
            script={this.state.script}
            currentStep={this.state.currentStep}
            lastStep={this.state.lastStep}
            handleInput={this.handleInput}
            changeStep={this.changeStep}
            toggleInterview={this.toggleInterview}
            selectPrompt={this.selectPrompt}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default App;
