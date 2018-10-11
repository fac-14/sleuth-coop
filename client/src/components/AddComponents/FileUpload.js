import React from "react";

export default class FileUpload extends React.Component {
  render() {
    return (
      <label htmlFor={this.props.content.id}>
        {this.props.question}
        <input
          id={this.props.content.id}
          onChange={this.props.onChange}
          className="file-upload-input"
          type="file"
        />
      </label>
    );
  }
}
