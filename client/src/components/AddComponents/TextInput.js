import React from "react";

export default class TextInput extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.content.id}>
        {this.props.content.question}
        <input
          id={this.props.content.id}
          onChange={this.props.onChange}
          className="text-input"
          type="text"
        />
      </label>
    );
  }
}
