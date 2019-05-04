import React from "react";

class Child2 extends React.Component {
  render() {
    const { z } = this.props;
    console.log("child2 rendered with ", z);
    return <div>z = {z}</div>;
  }
}

export default Child2;
