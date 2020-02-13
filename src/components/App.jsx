import React, { Component } from 'react';
import '../css/App.css';
import FactModel from '../factModel.js';
// import components
import Header from './Header.jsx';
import Facts from './Facts.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factNumber: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  getFact() {

  }

  handleClick() {
    this.setState({factNumber:this.state.factNumber+1});
  }

  render() {
    console.log(this.props.data);
    let fact = new FactModel(this.props.data[this.state.factNumber], this.state.factNumber);
    return (
      <div className="app">
        <Header/>
        <Facts fact={fact}/>
        <button onClick={this.handleClick}>Next</button>
      </div>
    );
  }
}

export default App;
