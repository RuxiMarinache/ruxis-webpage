import React from 'react';
import '../App.css';
// import CardItem from './CardItem';
import './Portfolio.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


export default function Portfolio() {
  const classes = useStyles();
  return (

    <div className="cards">
        <h1>
          Some of my illustrations:
        </h1>
        <div className="cards__container">
          {/* <div className="cards__wrapper"> 
            <ul className="cards__items"> */}
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="../public/images/no-9.png"
                  title="poster queen"
                />
        
              </CardActionArea>
      
            </Card>
      	      {/* <CardItem 
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
            /> */}
            {/* </ul>
          </div> */}
        </div>

      </div>
    // <div>
    // <h1 className='portfolio'>Portfolio</h1>
    // <h2>Ne place viata</h2>
    // </div>
  )
}