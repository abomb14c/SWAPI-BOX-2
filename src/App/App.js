import React, { Component } from 'react';
import './App.css';
import {fetchCrawlData, fetchPeopleData, fetchPlanetData, fetchVehicleData} from '../utils/ApiCalls/ApiCalls';
import CrawlText  from '../CrawlText/CrawlText';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardSection from '../CardSection/CardSection';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      crawlText: [],
      peopleData: [],
      planetData: [],
      vehicleData: [],
      favorites: [],
      favorite: false
    };
  }

  setPeopleData = async () => {
    try {
      const peopleData = await fetchPeopleData();

      this.setState({peopleData,
        crawlText: [],
        planetData: [],
        vehicleData: []
      });
    } catch (error){
      throw new Error("something went wrong");
    }
  }

  findFavoritePerson = (id) => {
    const favoritePerson = this.state.peopleData.find(person => 
      person.id === id);
    this.setState({
      favorites:[...this.state.favorites, favoritePerson]
    });
  }

  setPlanetData = async () => {
    try {
      const planetData = await fetchPlanetData();

      this.setState({planetData,
        crawlText: [],
        peopleData: [],
        vehicleData:[]
      });
    } catch (error){
      throw new Error("something went wrong");
    }
  }

  findFavoritePlanet = (id) => {
    const favoritePlanet = this.state.planetData.find(planet => 
      planet.id === id);
    this.setState({
      favorites:[...this.state.favorites, favoritePlanet]
    });
  }

  setVehicleData = async () => {
    try {
      const vehicleData = await fetchVehicleData();

      this.setState({vehicleData,
        crawlText: [],
        peopleData: [],
        planetData: []
      });
    } catch (error){
      throw new Error("something went wrong");
    }
  }

  findFavoriteVehicle = (id) => {
    const favoriteVehicle = this.state.vehicleData.find(vehicle => 
      vehicle.id === id);
    this.setState({
      favorites:[...this.state.favorites, favoriteVehicle]
    });
  }

  setFavorites = () => {
    this.setState({
      crawlText: [],
      peopleData: [],
      planetData: [],
      vehicleData: [],
      favorite:true
    });
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
        <header className="App-header">
          <div className="logo"></div>
        </header>
        <ButtonContainer 
          setPeopleData={this.setPeopleData}
          setPlanetData={this.setPlanetData}
          setVehicleData={this.setVehicleData}
          setFavorites={this.setFavorites}
        />
        <CardSection 
          people={this.state.peopleData}
          findFavoritePerson={this.findFavoritePerson}
          planets={this.state.planetData}
          findFavoritePlanet={this.findFavoritePlanet}
          vehicles={this.state.vehicleData}
          findFavoriteVehicle={this.findFavoriteVehicle}
          favorites={this.state.favorites}
          favorite={this.state.favorite}
        />
        {this.state.crawlText &&
          <CrawlText crawlText={this.state.crawlText} />
        } 
      </div>
    );
  }
}

export default App;
