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
      favorite: false,
      category: ''
    };
  }

  setPeopleData = async () => {
    try {
      const peopleData = await fetchPeopleData();

      this.setState({peopleData,
        category: 'people',
        crawlText: []
      });
    } catch (error){
      throw new Error("something went wrong");
    }
  }

  findFavoritePerson = (event) => {
    const id = event.target.value;
    const PeopleCard = this.state.peopleData.find(object => object.id === id);

    PeopleCard.favorite = !PeopleCard.favorite;

    if (PeopleCard.favorite === true){
      this.setState({favorites: [...this.state.favorites, PeopleCard]});
    } else {
      const filteredFavorites = this.state.favorites.filter(favorite => favorite !== PeopleCard);
      this.setState({favorites: filteredFavorites});
    }
  }

  setPlanetData = async () => {
    try {
      const planetData = await fetchPlanetData();

      this.setState({planetData,
        category: 'planets',
        crawlText: []
      });
    } catch (error){
      throw new Error("something went wrong");
    }
  }

  findFavoritePlanet = (event) => {
    const id = event.target.value;
    const PlanetCard = this.state.planetData.find(object => object.id === id);

    PlanetCard.favorite = !PlanetCard.favorite;

    if (PlanetCard.favorite === true){
      this.setState({favorites: [...this.state.favorites, PlanetCard]});
    } else {
      const filteredFavorites = this.state.favorites.filter(favorite => favorite !== PlanetCard);
      this.setState({favorites: filteredFavorites});
    }
  }


  setVehicleData = async () => {
    try {
      const vehicleData = await fetchVehicleData();

      this.setState({vehicleData,
        category:"vehicles",
        crawlText: []
      });
    } catch (error){
      throw new Error("something went wrong");
    }
  }

  findFavoriteVehicle = (event) => {
    const id = event.target.value;
    const vehicleCard = this.state.vehicleData.find(object => object.id === id);

    vehicleCard.favorite = !vehicleCard.favorite;
    if (vehicleCard.favorite === true){
      this.setState({favorites: [...this.state.favorites, vehicleCard]});
    } else {
      const filteredFavorites = this.state.favorites.filter(favorite => favorite !== vehicleCard);
      this.setState({favorites: filteredFavorites});
    }
  }


  setFavorites = () => {
    this.setState({
      crawlText: [],
      category: 'favorites'
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
          category={this.state.category}
        />
        {this.state.crawlText &&
          <CrawlText crawlText={this.state.crawlText} />
        } 
      </div>
    );
  }
}

export default App;
