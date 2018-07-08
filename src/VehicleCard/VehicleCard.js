import React from 'react';
import './vehicle-card.css';

const VehicleCard = ({name, model, vehicleClass, passengers}) => {
  return (
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
  );
};

export default VehicleCard;