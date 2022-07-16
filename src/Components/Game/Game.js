import { React, useEffect, useCallback, useState } from "react";

const Character = require("./character.png");

const Game = (props) => {
  const [arr, setArr] = useState([]);
  const [input, setInput] = useState([]);
  const [timeStamps, setTimeStamps] = useState([]);
  const [start, setStart] = useState(true);
  var nTrials = 30;
  var left = 37;
  var right = 39;
  const [padding, setPadding] = useState(100);
  const [currentDirection, setCurrentDirection] = useState("START");
  const [index, setIndex] = useState(0);
  //https://stackoverflow.com/questions/55565444/how-to-register-event-with-useeffect-hooks
  const handleUserKeyPress = useCallback((event) => {
    const { key, keyCode } = event;
    console.log("keypress! index:", arr[index], index);
    setCurrentDirection(arr[index]);
    setIndex(index + 1);
    var time = Date();
    if (keyCode === 37) {
      move(left);
      setInput((input) => [...input, "left"]);
      setTimeStamps((timeStamps) => [...timeStamps, time]);
    } //left arrow
    else if (keyCode === 39) {
      move(right);
      setInput((input) => [...input, "right"]);
      setTimeStamps((timeStamps) => [...timeStamps, time]);
    } else if (keyCode === 33) {
      setInput((input) => [...input, "start"]);
      // input.push("start");
      setTimeStamps((timeStamps) => [...timeStamps, time]);
    }
  });

  const move = (direction) => {
    if (direction == left) {
      console.log("left");
      setPadding(padding - 20);
    } else {
      //right
      console.log("right");
      setPadding(padding + 20);
    }
  };
  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    console.log(input);
    console.log(timeStamps);
  }, [input]);

  const startRecording = () => {
    //
  };

  function initializeGame() {
    for (var i = 0; i < nTrials; i++) {
      var n = Math.random() * 10;
      if (n > 5) {
        setArr((arr) => [...arr, "left"]);

        // arr.push("left");
      } else {
        setArr((arr) => [...arr, "right"]);

        // arr.push("right");
      }
    }
    console.log("arr: " + arr);

    //display and wait for a keypress
    //record keypress
  }

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <>
      <h1>Go {currentDirection}</h1>
      <img
        src={Character}
        style={{
          width: 200,
          height: 200,
          position: "absolute",

          left: padding,
        }}
      ></img>
      <div>Hello</div>
      <button
        onClick={() => {
          setStart(!start);
        }}
      >
        {start ? "Start" : "Stop"} game and recording
      </button>
    </>
  );
};

export default Game;
