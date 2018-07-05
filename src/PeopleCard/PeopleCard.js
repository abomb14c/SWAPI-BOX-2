import React from 'react'; 

const PeopleCard = ({name, species, homeworld, population}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{species}</h3>
      <h3>{homeworld}</h3>
      <h3>{population}</h3>
    </div>
  );

};

export default PeopleCard;