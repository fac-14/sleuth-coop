import React from "react";
import arrow from "../../assets/dropdown-arrow.svg";

export default class Dropdown extends React.Component {
  render() {
    const { content } = this.props;
    const options = content.options;
    return (
      <fieldset className="dropdown-section">
        <h4>{content.question}</h4>
        {/* <button>
          <img src={arrow} alt="down arrow" />
        </button> */}
        <input type="text" value={this.props.value} />
        <ul>
          {options.map((item, index) => {
            return (
              <li
                key={index}
                className={content.id}
                onClick={this.props.dropdownSelect}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </fieldset>
    );
  }
}
