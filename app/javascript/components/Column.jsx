import React, { Component } from "react";

class Column extends Component {
  render() {
    const { provided, innerRef, children } = this.props;
    return (
      <div className={"m-3 border border-secondary rounded"}>
        <h3 className={"p-3"}>{this.props.column.title}</h3>
        {/* Droppable expects its child to be a function, as it
        utilized the 'render-props' pattern; this way react-Beau-dnd doesn't 
        need to create any DOM nodes: it just merges with the structure you
        already have*/}
        {/* first arg is 'provided'=> Object 
          droppableProps :: props that need to be applied to the compoment that
          you want to designate as your droppable **See docs
          innerRef :: a function that is used to supply a DOM node of your componenet
          to react-Beau-dnd   */}
        <div
          {...provided.droppableProps}
          key={this.props.column.id}
          ref={innerRef}
          className={"p-3"}
        > 
        {children}
          {/* placeholder is used to expand available spce while a doppable
              is being dragged; needs to be added as a child of the component that
              you designate as a droppable */}
        </div>
      </div>
    );
  }
}

export default Column;
