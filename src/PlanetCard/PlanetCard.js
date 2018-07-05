import React from 'react';

const PlanetCard = ({name, terrain, population, climate, residents}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{terrain}</h3>
      <h3>{population}</h3>
      <h3>{climate}</h3>
      <h3>{residents}</h3>
    </div>
  );
};

export default PlanetCard;