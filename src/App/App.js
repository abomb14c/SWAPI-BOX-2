import React, { Component } from 'react';
import './App.css';
import {fetchCrawlData, fetchPeopleData} from '../utils/ApiCalls/ApiCalls';
import CrawlText  from '../CrawlText/CrawlText';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
// import {fetchPeopleData} from '../utils/ApiCalls/ApiCalls';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      crawlText: []
    };

  }

  async componentDidMount() {
    const peopleData = await fetchPeopleData();
    console.log(peopleData);
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
        <header className="App-header">
          <div className="logo"></div>
        </header>
        <ButtonContainer />
        {this.state.crawlText &&
          <CrawlText crawlText={this.state.crawlText} />
        } 
      </div>
    );
  }
}

export default App;
