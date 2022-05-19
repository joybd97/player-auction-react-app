import { Button } from 'bootstrap';
import React from 'react';
import { Card } from 'react-bootstrap';

const PlayerCard = (props) => {
    //console.log(props);
     const {name,price,img}=props.player;
    const handelAdded=props.handelAdded;
    return (
        <div>
        <Card>
        
        <Card.Body>
            <img src={require(`../../data/picture/${img}`)} alt="" />
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            Price of player: {price} <br />
            <button onClick={()=>handelAdded(props.player)} >Add Player</button>
            </Card.Text>
             
        </Card.Body>
        </Card>
        </div>
    );
};

export default PlayerCard;