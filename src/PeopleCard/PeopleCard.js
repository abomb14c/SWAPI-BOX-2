import React from 'react'; 
import './people-card.css';

const PeopleCard = ({name, species, homeworld, population}) => {
  return (
    <div className="people-card">
      <div className="people-header">
        <h1 className="people-name">{name}</h1>
      </div>
      <div className="content-div species-div"> 
        <p className="description-title">Species</p>
        <h3 className="description-content">{species}</h3>
      </div>
      <hr></hr>
      <div className="content-div"> 
        <p className="description-title">Homeworld</p>
        <h3 className="description-content">{homeworld}</h3>
      </div>
      <hr></hr>
      <div className="content-div"> 
        <p className="description-title">Population</p>
        <h3 className="description-content">{population}</h3>
      </div>
    </div>
  );

};

export default PeopleCard;