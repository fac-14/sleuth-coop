import React from "react";

export default class Header extends React.Component {
  render() {
    const { compName, website, desc, answers } = this.props;
    const categories = Object.keys(answers);
    return (
      <div className="header">
        <h1>{compName}</h1>
        <h2>{website}</h2>
        <div id="logo-div">
          <img src="" alt="logo" id="logo-img" />
        </div>
        <ul className="profile-links">
          {categories.map((cat, index) => (
            <li 
            key={index} 
            onClick={() => document.getElementById(cat.toLowerCase().replace(/ /g, "-")).scrollIntoView({ block: 'start',  behavior: 'smooth' })}
            >{cat}</li>
          ))}
        </ul>
      </div>
    );
  }
}
