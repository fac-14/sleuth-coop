import React from "react";

export default class CheckBox extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <fieldset>
        <h4>{content.question}</h4>
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
              />
            </label>
          );
        })}
      </fieldset>
    );
  }
}
