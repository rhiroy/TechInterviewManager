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
      showSidebar: true,
      applicantName: 'Johny Testtaker',
      interviewDate: moment(),
      script: {},
      currentStep: 0,
      lastStep: 0,
    };
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.setInterviewDate = this.setInterviewDate.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentWillMount() {
    this.setState({ script });
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

  handleInput(input) {
    console.log('********* ********** 8*******', input);
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
            handleInput={this.handleInput}
            changeStep={this.changeStep}
          />
        </div>
      </div>
    );
  }
}

export default App;
