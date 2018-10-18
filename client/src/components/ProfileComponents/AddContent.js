import React from "react";
import { Link } from "react-router-dom";

import add from "../../assets/add.svg";

export default class AddContent extends React.Component {
  render() {
    return (
      <Link to={`/profile/${this.props.compId}/add`} className="link-component">
        <button id="add-content-btn">
          <img src={add} alt="add icon" />
          Add Content
        </button>
      </Link>
    );
  }
}
