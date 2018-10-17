import React from "react";
// import arrow from "../../assets/dropdown-arrow.svg";

export default class CheckBox extends React.Component {
  render() {
    const { content, answers } = this.props;
    return (
      <fieldset className="checkbox-section">
        <h4>{content.question}</h4>
        {/* <button>
          <img src={arrow} alt="down arrow" />
        </button> */}
        <p>{content.helper_text}</p>

        <label htmlFor={content.id}>
          yes
          <input
            id={content.id}
            onChange={this.props.onChange}
            className="checkbox"
            type="checkbox"
            name="yes"
            checked={answers[content.id] && answers[content.id][0] === "yes"}
            // checked={answers[content.id] === "yes"}
          />
        </label>
      </fieldset>
    );
  }
}
