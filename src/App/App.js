import React, { Component } from 'react';
import './App.css';
import {fetchCrawlData} from '../utils/ApiCalls/ApiCalls';
import CrawlText  from '../CrawlText/CrawlText';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      crawlText: []
    };

  }

  async componentDidMount() {
    try {
      const crawlText =  await fetchCrawlData();
  
      this.setState({crawlText});

    } catch (error){
      throw new Error('something went wrong');
    }
  }

  render() {
    return (
      <div className="App">
        <header className="header">
        </header>
        {this.state.crawlText &&
          <CrawlText crawlText={this.state.crawlText} />
        } 
      </div>
    );
  }
}

export default App;
