import React, { Component } from 'react';
import './App.css';
import {fetchCrawlData, fetchPeopleData, fetchPlanetData} from '../utils/ApiCalls/ApiCalls';
import CrawlText  from '../CrawlText/CrawlText';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
// import {fetchPeopleData} from '../utils/ApiCalls/ApiCalls';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      crawlText: [],
      peopleData: []
    };

  }

  setPeopleData = async () => {
    try {
      const peopleData = await fetchPeopleData();

      this.setState({peopleData});
    } catch (error){
      throw new Error("something went wrong");
    }
  }

  async componentDidMount() {
    const planetData = await fetchPlanetData();
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
