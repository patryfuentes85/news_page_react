import React, { Component } from "react";
import {Link} from 'react-router-dom';


class Nav extends Component {
  render() {
    return <div className='nav'>
      <Link  className='nav__element' to='/home'>Home</Link>
      <br/>
      <Link className='nav__element' to='/form'>Form</Link>
      <br/>
      <Link className='nav__element' to='/list'>ListNews</Link>
      <br/>

    </div>
  }
}

export default Nav;