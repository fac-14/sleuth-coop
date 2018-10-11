import React from "react";

export default class TextInput extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.id}>
        {this.props.content.question}
        <input
          id={this.props.id}
          onChange={this.props.content.onChange}
          className="text-input"
          type="text"
        />
      </label>
    );
  }
}
