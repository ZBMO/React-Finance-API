import React, { Component } from 'react';

class ReportPick extends React.Component {

    render() {
      return (
        <div id="reportpick">
            Report Type: 
        
            <button 
                className="btn" 
                id="company"
                onClick={(e) => this.props.submitReport(e.target.id)}>
                Company Info
                </button> 
            <button
                className="btn"
                id="financials"
                onClick={(e) => this.props.submitReport(e.target.id)}>
                Quarterly Report
                </button>
            <button
            className="btn" 
              id="chart/1y"
              onClick={(e) => this.props.submitReport(e.target.id)}>
              1y Chart
              </button>

            <button
            className="btn" 
              id="OneYearGraph"
              onClick={() => this.props.getGraph("chart/1y")}>
              1y Graph
              </button>

            <button
            className="btn" 
              id="get News"
              onClick={() => this.props.getNews()}>
              Get News
              </button>
         
        </div>
      );
    }
}


export default ReportPick;