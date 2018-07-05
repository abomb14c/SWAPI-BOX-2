import React from 'react';
import './button-container.css';

const ButtonContainer = ({setPeopleData}) => {
  return (
    <div className="button-container">
      <button>Planets</button>
      <button onClick={setPeopleData}>People</button>
      <button>Vehicles</button>
    </div>
  );
};

export default ButtonContainer;