import React from "react";
import { Link } from 'react-router-dom';

import home from '../assets/home.svg';

export default class HomeBtn extends React.Component {
  render() {
    return (
      <Link to={'/'}>
        <button><img src={home} alt="home"/></button>
      </Link>  
    )
  }
}