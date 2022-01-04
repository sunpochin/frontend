import classes from './User.module.css';

import React, { Component } from 'react'

class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}


// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
