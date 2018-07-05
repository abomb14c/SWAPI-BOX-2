import React from 'react';
import './button-container.css';

const ButtonContainer = ({setPeopleData, setPlanetData}) => {
  return (
    <div className="button-container">
      <button onClick={setPlanetData}>Planets</button>
      <button onClick={setPeopleData}>People</button>
      <button>Vehicles</button>
    </div>
  );
};

export default ButtonContainer;