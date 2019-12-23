import React, { Component } from "react";
import initialData from "../packs/beau-data";
import Column from "./Column";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";

class BeautifulDnD extends Component {
  constructor(props) {
    super(props);
    this.state = initialData;
  }

  // its the responsibility of onDragEnd function to synchronously
  //update state to reflect the drag n drop result
  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    //Check if item was placed in the same spot
    if ( destination.index === source.index ) return;

    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);

    //possible refactor double-splice?
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId)

    const updatedColumn = {
      ...column,
      taskIds: newTaskIds
    };

    this.setState({
      ...this.state,
        columns: {
          ...this.state.columns,
          [updatedColumn.id]: updatedColumn
        }
    })
  };

  render() {
    const column = this.state.columns["column-1"];
    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
    return (
      <DragDropContext
        //when drag starts
        //onDragStart
        //when drag updates => when item is moved into new position
        //onDragUpdate
        //called when drag ends **only required callback**
        onDragEnd={this.onDragEnd}
      >
        <Droppable droppableId={column.id} key={column.id}>
          {provided => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks}
              provided={provided}
              innerRef={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Draggable draggableId={task.id} index={index} key={task.id}>
                  {provided => (
                    <Task
                      key={task.id}
                      provided={provided}
                      innerRef={provided.innerRef}
                      task={task}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Column>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default BeautifulDnD;
