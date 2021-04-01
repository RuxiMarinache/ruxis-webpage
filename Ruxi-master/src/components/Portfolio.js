import React from "react";
import "../App.css";
// import CardItem from "./CardItem";
import Cards from "./Cards";
import "./Portfolio.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    root: {
        maxWidth: 345
    },
    media: {
        height: 140
    }
});

export default function Portfolio() {
    const classes = useStyles();

    return (
        // <div className="cards">
        //     <h1>Some of my illustrations:</h1>
        //     <div className="cards__container">
        //         <div className="cards__wrapper">
        //             <ul className="cards__items">
        //                 <Card className={classes.root}>
        //                     <CardActionArea>
        //                         <CardMedia
        //                             className={classes.media}
        //                             image="../../public/images/no-9.png"
        //                             title=""
        //                         />
        //                     </CardActionArea>
        //                 </Card>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <Cards />
    );
}
