import React from "react";

export default class FileUpload extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.id}>
        {this.props.question}
        <input
          id={this.props.id}
          onChange={this.props.onChange}
          className="file-upload-input"
          type="file"
        />
      </label>
    );
  }
}
