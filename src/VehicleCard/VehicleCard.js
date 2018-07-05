import React from 'react';

const VehicleCard = ({name, model, vehicleClass, passengers}) => {
  return (
    <div>
      <h1>{name}</h1>
      <h3>{model}</h3>
      <h3>{vehicleClass}</h3>
      <h3>{passengers}</h3>
    </div>
  );
};

export default VehicleCard;