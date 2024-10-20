import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "I'm an Artificial Intelligence Engineer",
          "Also A Generalist Engineer from Ecole Centrale de Lyon x Casablanca",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
