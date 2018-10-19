import React from "react";
import AddContent from "./AddContent";

export default class Header extends React.Component {
  render() {
    const { compName, website, answers, editable, logo, compId } = this.props;
    const categories = Object.keys(answers);
    return (
      <div className="header">
        <h1>{compName}</h1>
        <a href={website} target="_blank" rel="noopener noreferrer">
          <h2 id="comp-link">{website}</h2>
        </a>
        {logo && !logo.includes("null") ? (
          <div id="logo-div">
            <img src={`/static/${logo}`} alt="logo" id="logo-img" />
          </div>
        ) : null}
        <ul className="profile-links">
          {categories.map((cat, index) => (
            <li
              key={index}
              onClick={() =>
                document
                  .getElementById(cat.toLowerCase().replace(/ /g, "-"))
                  .scrollIntoView({ block: "start", behavior: "smooth" })
              }
            >
              {cat}
            </li>
          ))}
        </ul>
        {editable ? <AddContent compId={compId} /> : null}
      </div>
    );
  }
}
