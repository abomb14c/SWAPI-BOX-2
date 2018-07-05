import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';

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
  }
  return (
    <div>
      {displayCards}
    </div>
  );
};

export default CardSection;