import React, { useEffect, useState } from 'react';
import playersData from '../../data/fakedata.json';
import PlayerCard from '../PlayerCard/PlayerCard';

const Players = (props) => {
    const handelAdded = props.handelAdded;
    const [players,setPlayers]=useState([]);

    useEffect(()=>{
         
         setPlayers(playersData);
    },[])
    return (
        <div>
            <h4>Player List</h4>
            {
                players.map(player =><PlayerCard
                    key={player.id}
                    player={player}
                    handelAdded={handelAdded}
                    ></PlayerCard>)
            }
        </div>
    );
};

export default Players;