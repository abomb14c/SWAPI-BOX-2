import React from 'react';
import './planet-card.css';

const PlanetCard = ({name, id,  terrain, population, climate, residents, findFavoritePlanet}) => {
  return (
    <div className="card-container">
      <div className="planet-card">
        <div className="planet-header">
          <h1 className="planet-name">{name}</h1>
        </div>
        <div className="content-div model-div"> 
          <p className="description-title">Terrain</p>
          <h3 className="planet-content">{terrain}</h3>
        </div>
        <hr></hr>
        <div className="content-div"> 
          <p className="description-title">Population</p>
          <h3 className="planet-content">{population}</h3>
        </div>
        <hr></hr>
        <div className="content-div"> 
          <p className="description-title">Climate</p>
          <h3 className="planet-content">{climate}</h3>
        </div>
        <hr></hr>
        <div className="content-div"> 
          <p className="description-title">Residents</p>
          <h3 className="planet-content">{residents}</h3>
        </div>
      </div>
      <button onClick={findFavoritePlanet} value={id} className="favorite">Favorite</button>
    </div>
  );
};

export default PlanetCard;