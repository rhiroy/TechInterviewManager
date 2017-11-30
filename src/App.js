import React, { Component } from 'react';
import moment from 'moment';
import SideBar from './components/SideBar';
import TopBar from './components/TopBar';
import Main from './components/Main';
import script from './data/script';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSidebar: false,
      applicantName: 'Johny Testtaker',
      interviewDate: moment(),
      script: {},
      currentStep: 1,
      lastStep: 1,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.setInterviewDate = this.setInterviewDate.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.changeStep = this.changeStep.bind(this);
  }

  componentWillMount() {
    this.setState({ script, lastStep: Object.keys(script).length });
  }

  setInterviewDate(date) {
    this.setState({ interviewDate: date });
  }

  toggleSidebar() {
    this.setState({ showSidebar: !this.state.showSidebar });
  }

  changeStep(direction) {
    if (direction === 'back') {
      this.setState({ currentStep: this.state.currentStep - 1 });
    } else {
      this.setState({ currentStep: this.state.currentStep + 1 });
    }
  }

  handleInput(event) {
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

  render() {
    return (
      <div>
        <TopBar
          toggleSidebar={this.toggleSidebar}
          interviewDate={this.state.interviewDate}
          applicantName={this.state.applicantName}
          setInterviewDate={this.setInterviewDate}
        />
        <div className="App" style={{ flexDirection: 'row', display: 'flex' }}>
          <SideBar
            show={this.state.showSidebar}
            style={{ flex: 1 }}
          />
          <Main
            script={this.state.script}
            currentStep={this.state.currentStep}
            lastStep={this.state.lastStep}
            handleInput={this.handleInput}
            changeStep={this.changeStep}
          />
        </div>
      </div>
    );
  }
}

export default App;
