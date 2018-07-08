import React from 'react';
import './button-container.css';

const ButtonContainer = ({setPeopleData, setPlanetData, setVehicleData, setFavorites}) => {
  return (
    <div className="button-container">
      <button onClick={setPlanetData}>Planets</button>
      <button onClick={setPeopleData}>People</button>
      <button onClick={setVehicleData}>Vehicles</button>
      <button onClick={setFavorites}>Favorites</button>
    </div>
  );
};

export default ButtonContainer;