import React from "react";
import arrow from "../../assets/dropdown-arrow.svg";

export default class CheckBox extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <fieldset className="checkbox-section">
        <h4>{content.question}</h4>
        {/* <button>
          <img src={arrow} alt="down arrow" />
        </button> */}
        <p>{content.helper_text}</p>
        {content.options.map((box, index) => {
          return (
            <label key={index} htmlFor={content.id}>
              {box}
              <input
                id={content.id}
                onChange={this.props.onChange}
                className="checkbox"
                type="checkbox"
                name={box}
                checked={
                  box === this.props.alreadyAnswered(content.id) ||
                  box === this.props.answers[content.id]
                }
              />
            </label>
          );
        })}
      </fieldset>
    );
  }
}
