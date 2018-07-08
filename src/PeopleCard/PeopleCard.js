import React from 'react'; 
import './people-card.css';

const PeopleCard = ({name, species, homeworld, population, findFavoritePerson}) => {
  return (
    <div className="card-container">
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
      <button  onClick={findFavoritePerson} className="favorite">Favorite</button>
    </div>
  );

};

export default PeopleCard;