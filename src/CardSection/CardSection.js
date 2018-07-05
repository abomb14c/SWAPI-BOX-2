import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';

const CardSection = ({people, planets, vehicles}) => {
  let displayCards;

  if (people.length) {
    displayCards = people.map((person, index) => {
      return <PeopleCard key={index} {...person}/>;
    });
  } else if (planets.length) { 
    displayCards = planets.map((planet, index) => {
      return <PlanetCard key={index} {...planet} />;
    });
  } else if (vehicles.length) {
    displayCards = vehicles.map((vehicle, index) => {
      return <VehicleCard key={index} {...vehicle} />;
    });
  }
  return (
    <div>
      {displayCards}
    </div>
  );
};

export default CardSection;