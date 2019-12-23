import React, { Component } from "react";

class Task extends Component {
  render() {
    /*Draggable has two required props:
      draggableId: assigned as task id
      index: take the index from map in column which renders Task's

      same with droppable, expect child to be a function which returns
      a react component
    */
   const { provided, innerRef, task} = this.props;
    return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        key={task.id}
        ref={innerRef}
        className={"border border-secondary p-3 mb-2 rounded"}
      >
        {task.content}
      </div>
    );
  }
}

export default Task;
