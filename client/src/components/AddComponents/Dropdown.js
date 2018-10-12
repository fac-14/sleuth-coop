import React from "react";

export default class Dropdown extends React.Component {
  render() {
    const { content } = this.props;
    const options = content.options;
    return (
      <fieldset>
        <h4>{content.question}</h4>
        <input type="text" value={this.props.value}/>
        <ul>
          {options.map((item, index) => {
            return <li key={index} className={content.id} onClick={this.props.dropdownSelect}>{item}</li>;
          })}
        </ul>
      </fieldset>
    );
  }
}
