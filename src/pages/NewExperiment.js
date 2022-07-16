import React from "react";
import Layout from "./../Components/Game/Layout/Layout";

const NewExperiment = (props) => {
  return;
  <Layout>
    <h2>
      {" "}
      <input type="text" placeholder="untitled"></input>
    </h2>
    <div class="col">
      <p>Board Configuration</p>
      <p>Last Edited</p>
      <p>Electrodes Positions</p>
      <p>Electrodes types</p>
      <p>Comments</p>
      <p>Game</p>
    </div>
    <form>
      <div class="col">
        <select name="configuration">
          <option value="Cyton (8 electrodes)"></option>
          <option value="Cyton+Daisy (16 electrodes)"></option>
          <option value="Galea (4 electrodes)"></option>
        </select>
        <input type="date" value={new Date()}></input>
        <input type="text" placeholder="Oz, Cz, FP8..."></input>
        <input
          type="text"
          placeholder="Spikey, flat, disposable, gold cup..."
        ></input>
        <input
          type="text"
          placeholder="high humidity, may impact impedance..."
        ></input>
        <select name="game">
          <option value="Left-right game"></option>
          <option value="Forbidden game"></option>
        </select>
      </div>
      <button>Submit</button>
    </form>
  </Layout>;
};

export default NewExperiment;
