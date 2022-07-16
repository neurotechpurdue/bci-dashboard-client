import React from "react";
import List from "../Components/List";
import { useNavigate } from "react-router-dom";

const Recordings = (props) => {
  let navigate = useNavigate();
  const handleNewRecording = () => {
    navigate("new");
  };
  return (
    <>
      <h1> Recordings</h1>

      <button onClick={handleNewRecording}>New recording</button>
      <List></List>
    </>
  );
};

export default Recordings;
