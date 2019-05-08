import React from "react";
import PropTypes from "prop-types";

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

Child1.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number
};

export default Child1;
