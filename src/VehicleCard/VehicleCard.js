import React from 'react';
import './vehicle-card.css';

const VehicleCard = ({name, id, favorite, model, vehicleClass, passengers, findFavoriteVehicle}) => {
  return (
    <div className="card-container">
      <div className="vehicle-card">
        <div className="vehicle-header">
          <h1 className="vehicle-name">{name}</h1>
        </div>
        <div className="content-div model-div"> 
          <p className="description-title">Model</p>
          <h3 className="description-content">{model}</h3>
        </div>
        <hr></hr>
        <div className="content-div"> 
          <p className="description-title">Class</p>
          <h3 className="description-content">{vehicleClass}</h3>
        </div>
        <hr></hr>
        <div className="content-div"> 
          <p className="description-title">Passengers</p>
          <h3 className="description-content">{passengers}</h3>
        </div>
      </div>
      <button onClick={findFavoriteVehicle} value={id} className="favorite">Favorite</button>
    </div>
  );
};

export default VehicleCard;