import React, { Component } from 'react';
import './App.css';
import {fetchCrawlData} from '../utils/ApiCalls/ApiCalls';

class App extends Component {


    componentDidMount() {
     const crawlData = fetchCrawlData();

     console.log(crawlData);
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
      </div>
    );
  }
}

export default App;
