import React from "react";

export default class FileUpload extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <fieldset>
        <label htmlFor={content.id}>
          <h4>{content.question}</h4>
        </label>
        <p>{content.helper_text}</p>
        <input
          id={content.id}
          onChange={this.props.onChange}
          className="file-upload-input"
          type="file"
        />
      </fieldset>
    );
  }
}
