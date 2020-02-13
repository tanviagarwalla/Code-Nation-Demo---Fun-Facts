import React, { Component } from 'react';

export default class Facts extends Component {
  
  render() {
    console.log(this.props.fact);
    return (
      <div>
        
        {this.props.fact.getFact()}
      </div>
    );
  }
}

