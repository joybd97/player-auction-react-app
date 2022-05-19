import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import Players from './Components/Players/Players';
import { useState } from 'react';
import AddedPlayers from './Components/AddedPlayers/AddedPlayers';

function App() {

  const [addedPlayer,setAddedPlayer]= useState([]);
  const handelAdded= (player)=>{
    const newPlayers = [...addedPlayer,player];
    setAddedPlayer(newPlayers);
  }
  return (
    <div className="App">
    <Container style={{padding: '40px'}}>
    <Row>
      <Col>
        <Players handelAdded={handelAdded}></Players>
        <hr />
      </Col>
      <Col>
       <h4>No of Player: {addedPlayer.length}</h4>
       <AddedPlayers addedPlayer={addedPlayer} ></AddedPlayers>
      </Col>
    </Row>
  </Container>
    </div>
  );
}

export default App;
