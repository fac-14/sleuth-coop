import React from "react";
import crossIcon from "../../assets/close-icon.svg";

export default class Dropdown extends React.Component {
  render() {
    const { content, answers } = this.props;
    const options = content.options;
    const selected = answers[content.id] || [];
    return (
      <fieldset className="dropdown-section">
        <h4>{content.question}</h4>
        <p>{content.helper_text}</p>
        {selected.length > 0 ? (
          <React.Fragment>
            <h5>Currently selected:</h5>
            <ul className="dropdown-selected">
              {selected.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={content.id}
                    onClick={this.props.dropdownRemove}
                  >
                    {item}
                    <img id="cross-icon" src={crossIcon} alt="question mark" />
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        ) : null}

        <h5>Select Options:</h5>
        <div className="dropdown">
          <button className="dropdown-btn" type="button">
            Select here
          </button>
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
