import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
    return (    
      <div className="cards">
        <h1>
          Some of my illustrations:
        </h1>
        <div className="cards__container">
          <div className="cards__wrapper"> 
            <ul className="cards__items">
      	      <CardItem 
              src="images/no-27.png"
              label="Poster #1"
              text="word of the day: bubble" 
              path="/Portfolio"
            />
            <CardItem 
              src="images/no-9.png"
              label="Poster #2"
              text="word of the day: uncool" 
              path="/Portfolio"
            />
            <CardItem 
              src="images/no-13.png"
              label="Poster #3"
              text="word of the day: queen" 
              path="/Portfolio"
            />
            </ul>
          </div>
        </div>

      </div>

    );  
  }
  
  export default Cards;