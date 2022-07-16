import React, { useState } from "react";
import Game from "../Components/Game/Game";
import List from "../Components/List";
const axios = require("axios");

// class
const Main = (props) => {
  const [running, setRunning] = useState(false);

  const handleButton = () => {
    setRunning(!running);
    axios.post("/run").then();
  };

  return (
    <>
      <h1>Main</h1>
      <button onClick={handleButton}>{!running ? "Start" : "Stop"}</button>
      <List></List>
    </>
  );
};
export default Main;
