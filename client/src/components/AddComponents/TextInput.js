import React from "react";
// import arrow from "../../assets/dropdown-arrow.svg";

export default class TextInput extends React.Component {
  render() {
    const { content, answers } = this.props;
    return (
      <fieldset className="text-input-section">
        <label htmlFor={content.id}>
          <h4>{content.question}</h4>
          <p>{content.helper_text}</p>
        </label>
        {/* <button>
          <img src={arrow} alt="down arrow" />
        </button> */}

        <textarea
          id={content.id}
          onChange={this.props.onChange}
          className="text-input"
          type="text"
          rows="5"
          value={answers[content.id] ? answers[content.id] : ""}
        />
        {/* <input
          id={content.id}
          onChange={this.props.onChange}
          className="text-input"
          type="text"
          value={answers[content.id] ? answers[content.id] : ""}
        /> */}
      </fieldset>
    );
  }
}
