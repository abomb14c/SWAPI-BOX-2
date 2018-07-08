import React from 'react';
import './planet-card.css';

const PlanetCard = ({name, terrain, population, climate, residents}) => {
  return (
    <div className="card-container">
      <div className="planet-card">
        <div className="planet-header">
          <h1 className="planet-name">{name}</h1>
        </div>
        <div className="content-div model-div"> 
          <p className="description-title">Terrain</p>
          <h3 className="vehicle-content">{terrain}</h3>
        </div>
        <hr></hr>
        <div className="content-div"> 
          <p className="description-title">Population</p>
          <h3 className="vehicle-content">{population}</h3>
        </div>
        <hr></hr>
        <div className="content-div"> 
          <p className="description-title">Climate</p>
          <h3 className="vehicle-content">{climate}</h3>
        </div>
        <hr></hr>
        <div className="content-div"> 
          <p className="description-title">Residents</p>
          <h3 className="vehicle-content">{residents}</h3>
        </div>
      </div>
      <button className="favorite vehicle-favorite">Favorite</button>
    </div>
  );
};

export default PlanetCard;