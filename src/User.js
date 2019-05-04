import React from "react";

class User extends React.PureComponent {
  render() {
    const { user } = this.props;
    console.log("user name is ", user.userName);
    return <div>name is {user.userName}</div>;
  }
}

export default User;
