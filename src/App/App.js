import React, { Component } from 'react';
import './App.css';
import {fetchCrawlData} from '../utils/ApiCalls/ApiCalls';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      crawlText: {}
    };

  }

  async componentDidMount() {
    try {
      const crawlText =  await fetchCrawlData();
  
      this.setState({crawlText});

    } catch (Error){
      throw new Error('something went wrong');
    }
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
