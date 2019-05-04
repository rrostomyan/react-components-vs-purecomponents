import React from "react";

class Child1 extends React.Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    const { x: newX, y: newY } = nextProps;
    const { x, y } = this.props;
    return !(x === newX && y === newY);
  }

  render() {
    const { x, y } = this.props;
    console.log("child1 rendered with ", x, y);
    return (
      <div>
        x = {x} y = {y}
      </div>
    );
  }
}

export default Child1;
