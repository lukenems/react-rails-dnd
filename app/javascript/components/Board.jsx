import React, { Component } from "react";
import Square from "./Square";
import Knight from "./Knight";

class Board extends Component {


  render() {
    return (
      <div>
        <Square black>
          <Knight />
        </Square>
      </div>
    );
  }
}

export default Board;