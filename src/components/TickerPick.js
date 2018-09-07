import React, { Component } from 'react';

class TickerPick extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
      };
    }
  
    handleChange = (event) => {
      this.setState({value: event.target.value});
    }
  
    handleSubmit = (event) => { 
      if (event.keyCode === 13) {
        this.props.submitText(this.state.value, this.state.reportType);
        this.setState({value: ''});
      }
    };

    render() {
      return (
        <div id="tickerpick">
          <label>
          <span>
            Ticker: 
          </span>      
            <input 
              type="text" value={this.state.value} 
              onChange={(e) => this.handleChange(e)} 
              onKeyDown={this.handleSubmit} 
              /> 
          </label>
        </div>
      );
    }
}


export default TickerPick;