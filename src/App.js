import React from "react";
import "./App.css";
import Child1 from "./Child1";
import Child2 from "./Child2";
import User from "./User";

class App extends React.Component {
  state = {
    x: 0,
    y: 0,
    z: 0,
    user: {
      userName: "Pepe"
    }
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      const { z, user } = this.state;
      user.userName = 'Aram' + Math.random() * 1000;
      this.setState({ z: z + 1 });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { x, y, z, user } = this.state;
    return (
      <>
        <Child1 x={x} y={y} />
        <Child2 z={z} />
        <User user={user} />
      </>
    );
  }
}

export default App;
