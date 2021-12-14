import './App.css';
import Title from "./components/Title";
import PlayerTable from "./components/PlayerTable";
import {useState, useEffect} from "react";

function App() {

  let list = [
    {
      id: 1,
      username: 'player1',
      email: 'player1@email.com',
      experience: 100,
      level: 1
    },
    {
      id: 2,
      username: 'player2',
      email: 'player2@email.com',
      experience: 200,
      level: 2
    },
  ]

  return (
      <div className="App">
        <Title title="Player List"/>
        <PlayerTable list={list}/>
      </div>
  );
}

export default App;
