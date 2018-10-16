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
        <h5>Selected items:</h5>
        <ul className="dropdown-selected">
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
        <h5>Select Options:</h5>
        <div className="dropdown">
          <button className="dropdown-btn">Select here</button>
          <ul className="select-items">
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
        </div>
        <div />
      </fieldset>
    );
  }
}
