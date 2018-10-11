import React from "react";

export default class CheckBox extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.content.id}>
        {this.props.content.question}
        <input
          id={this.props.content.id}
          onChange={this.props.onChange}
          className="checkbox"
          type="checkbox"
        />
      </label>
    );
  }
}