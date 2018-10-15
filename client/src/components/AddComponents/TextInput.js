import React from "react";
import arrow from "../../assets/dropdown-arrow.svg";

export default class TextInput extends React.Component {
  render() {
    const { content, answers } = this.props;
    return (
      <fieldset className="text-input-section">
        <label htmlFor={content.id}>
          <h4>{content.question}</h4>
        </label>
        {/* <button>
          <img src={arrow} alt="down arrow" />
        </button> */}
        <p>{content.helper_text}</p>
        <input
          id={content.id}
          onChange={this.props.onChange}
          className="text-input"
          type="text"
          value={answers[content.id] ? answers[content.id] : null}
        />
      </fieldset>
    );
  }
}
