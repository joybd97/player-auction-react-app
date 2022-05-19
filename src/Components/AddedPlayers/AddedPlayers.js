import React from 'react';

const AddedPlayers = (props) => {
    const addedPlayer=props.addedPlayer;
    console.log(addedPlayer);
    let totalSpend = 0;
      for (let i = 0; i < addedPlayer.length; i++) {
         let player = addedPlayer[i];
        totalSpend += player.price;
        
     }
    return (

        <div>
            <p>------------------------------</p>
            {
                addedPlayer.map(player=><div>
                    <h5>{player.name}</h5>
                    <p>salary:{player.price} Tk</p>
                    </div>)
            }
            <p>-------------------------------</p>
            Total Budget: {totalSpend} Tk
        </div>
    );
};

export default AddedPlayers;