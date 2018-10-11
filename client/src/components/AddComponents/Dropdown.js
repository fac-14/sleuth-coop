import React from "react";

export default class Dropdown extends React.Component {
  render() {
    const { content } = this.props;
    const options = content.options;
    return (
      <fieldset>
        <h2>{content.question}</h2>
        <ul>
          {options.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
      </fieldset>
    );
  }
}
