import React from "react";

export default class FileUpload extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.onChange}
        className="file-upload-input"
        type="file"
      />
    );
  }
}
