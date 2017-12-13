import React, { Component } from 'react';

class Test extends Component {
  state = {
    name: 'pete',
    age: 12,
  };

  variable = 'test';

  render() {
    return (
      <div style={{ backgroundColor: 'red' }}>
        {this.state.name}
        {this.variable}
      </div>
    );
  }
}

export default Test;
