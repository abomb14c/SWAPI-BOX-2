import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';

const CardSection = ({people, planets, vehicles}) => {
  let displayCards;

  if (people.length) {
    displayCards = people.map(person => {
      return <PeopleCard {...person}/>
    });
  }
  return (
    <div>
      {displayCards}
    </div>
  );
};

export default CardSection;