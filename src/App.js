import React, { Component } from 'react';
import './App.css';
import Company_Report from './components/Company_Report';
import Quarterly_Report from './components/Quarterly_Report';
import OneYear_Report from './components/OneYear_Report';
import OneYearGraph_Report from './components/OneYearGraph_Report';
import News_Report from './components/News_Report';
import TickerPick from './components/TickerPick';
import ReportPick from './components/ReportPick';


class App extends Component {
constructor(props) {
  super(props)
  this.state = {
    data: {},
    reportType: "company",
    lastTicker: "",
    lastCoName: "",
    news: "",
    graph: false,
  };
}

  fetchOnTicker = async (tickerinput) => {const response = await fetch(`https://api.iextrading.com/1.0/stock/${tickerinput}/${this.state.reportType}`);
    if (response.ok) {
      const data = await response.json();
      this.setState({data});
      this.setState({lastTicker: tickerinput});
        (data.companyName === undefined) ? "" : ""
        this.setState({lastCoName: this.state.lastTicker});
    
    
    
    } else {
      alert("invalid ticker");
    };
  }
  handleTicker = (tickerinput) => {
    this.fetchOnTicker(tickerinput);
  }


    fetchOnReport = async (reportinput) => {const response = await fetch(`https://api.iextrading.com/1.0/stock/${this.state.lastTicker}/${reportinput}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      this.setState({data});
      this.setState({reportType: reportinput});
      this.setState({graph: false})
    } else {
      alert("No ticker entered");
    };
  }

  handleReport = (reportinput) => {
    this.fetchOnReport(reportinput);
  }

  fetchNews = async () => {const response = await fetch(`https://api.iextrading.com/1.0/stock/${this.state.lastTicker}/news`);
    if (response.ok) {
      const data = await response.json();
      console.log(data)
      this.setState({data});
      console.log(this.state.data);
    } else {
      alert("No ticker entered");
    };
  }

  handleNews = () => {
    this.fetchNews();
  }


  fetchGraph = async (reportinput) => {const response = await fetch(`https://api.iextrading.com/1.0/stock/${this.state.lastTicker}/${reportinput}`);
  if (response.ok) {
    const data = await response.json();
    console.log(data)
    this.setState({data});
    this.setState({reportType: reportinput});
    this.setState({graph: true})
  } else {
    alert("No ticker entered");
  };
}

  handleGraph = (reportinput) => {
    console.log(reportinput)
    this.fetchGraph(reportinput);
  }


  render() {
    
    return (
      
      <div className="App">
      <h3 id="header">Finance API Project</h3>
      <body>
          
          <TickerPick
          submitText={this.handleTicker}
          submitReport={this.handleReport}
          />

          <ReportPick
          submitReport={this.handleReport}
          getNews={this.handleNews}
          getGraph={this.handleGraph}
          />

          {(this.state.data.companyName == undefined) ? 
          "" : 
          <Company_Report
          data={this.state.data}
          /> }

          {(this.state.data.financials == undefined) ? 
          "" : 
          <Quarterly_Report
          financials={this.state.data.financials}
          ticker={this.state.lastTicker}
          company={this.state.lastCoName}
          />}

          {(this.state.graph === true) ?
          "" :
          (this.state.data[0] === undefined) ? 
          "" :
          (this.state.data[0].low === undefined) ?
          "" :
          <OneYear_Report
          ticker={this.state.lastTicker}
          data={this.state.data}
          company={this.state.lastCoName}
          /> }

          {(this.state.data[0] === undefined) ? 
          "" :
          (this.state.data[0].url === undefined) ?
          "" :
          <News_Report
          news={this.state.data}
          company={this.state.lastCoName}
          /> }

          {(this.state.graph === false) ?
          "" :
          (this.state.data[0] === undefined) ? 
          "" :
          (this.state.data[0].low === undefined) ?
          "" :
          <OneYearGraph_Report
          data={this.state.data}
          graphBool={this.state.graph}
          company={this.state.lastCoName}
          /> }


      </body>
      <div className="footer">
          <p>Table by <a href="https://react-table.js.org/#/story/readme">React Table</a></p>
          <p>Graph by <a href="https://www.npmjs.com/package/react-easy-chart">React Easy Chart</a></p>
          <p>Data provided for free by IEX. <a href="https://iextrading.com/api-terms/">View IEX’s Terms of Use</a></p>
          </div>
      </div>
    );
  }
}

export default App;
