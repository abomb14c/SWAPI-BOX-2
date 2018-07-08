import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import './card-section.css';

const CardSection = ({people, 
  findFavoritePerson, 
  planets, 
  findFavoritePlanet, 
  vehicles,
  findFavoriteVehicle,
  favorites,
  favorite}) => {
  let displayCards;

  if (people.length) {
    displayCards = people.map((person, index) => {
      return <PeopleCard 
        key={index} 
        {...person} 
        findFavoritePerson={findFavoritePerson}
      />;
    });
  } else if (planets.length) { 
    displayCards = planets.map((planet, index) => {
      return <PlanetCard 
        key={index} 
        {...planet} 
        findFavoritePlanet={findFavoritePlanet} 
      />;
    });
  } else if (vehicles.length) {
    displayCards = vehicles.map((vehicle, index) => {
      return <VehicleCard 
        key={index} 
        {...vehicle} 
        findFavoriteVehicle={findFavoriteVehicle} 
      />;
    });
  } else if (favorite === true){
    displayCards = favorites.map(favorite => {
      if (favorite.category === "people"){
        return <PeopleCard {...favorite} findFavoritePerson={findFavoritePerson}/>;
      } else if (favorite.category === "planets"){
        return <PlanetCard {...favorite} findFavoritePlanet={findFavoritePlanet}/>;
      } else if (favorite.category === "vehicles"){
        return <VehicleCard {...favorite} findFavoriteVehicle={findFavoriteVehicle} />;
      }
      return displayCards;
    });
  }

  return (
    <div className="card-section">
      {displayCards}
    </div>
  );
};

export default CardSection;