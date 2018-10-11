import React from "react";

export default class CheckBox extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.id}>
        {this.props.content.question}
        <input
          id={this.props.id}
          onChange={this.props.content.onChange}
          className="checkbox"
          type="checkbox"
        />
      </label>
    );
  }
}