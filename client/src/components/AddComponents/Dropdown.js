import React from "react";
// import arrow from "../../assets/dropdown-arrow.svg";

export default class Dropdown extends React.Component {
  render() {
    const { content, answers } = this.props;
    const options = content.options;
    const selected = answers[content.id] || [];
    return (
      <fieldset className="dropdown-section">
        <h4>{content.question}</h4>
        {/* <input type="text" value={this.props.value} /> */}
        <h3>Selected items:</h3>
        <ul>
          {selected.map((item, index) => {
            return (
              <li
                key={index}
                className={content.id}
                onClick={this.props.dropdownRemove}
              >
                {item}
              </li>
            );
          })}
        </ul>
        <h3>Select Options:</h3>
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

        <div />
      </fieldset>
    );
  }
}
