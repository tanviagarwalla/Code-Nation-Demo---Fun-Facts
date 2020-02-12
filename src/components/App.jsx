import React, { Component } from 'react';
import '../css/App.css';
// import components


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factNumber: 0
    }
  }

  getFact() {

  }

  handleClick() {

  }

  render() {
    console.log(this.props.data);
    return (
      <div className="app">
        <Header/>
        <Facts/>
        <button>Next</button>
      </div>
    );
  }
}

export default App;
