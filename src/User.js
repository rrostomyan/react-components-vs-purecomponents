import React from "react";
import PropTypes from "prop-types";

class User extends React.PureComponent {
  static propTypes = {
    user: PropTypes.any.isRequired
  };

  render() {
    const { user } = this.props;
    console.log("user name is ", user.userName);
    return <div>name is {user.userName}</div>;
  }
}

// User.propTypes = {
//   user: PropTypes.any.isRequired
// };

export default User;
