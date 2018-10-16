import React from "react";

export default class VideoInput extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <fieldset className="video-add">
        <label htmlFor={content.id}>
          <h4>{content.question}</h4>
        </label>
        <p>{content.helper_text}</p>
        <input
          id={content.id}
          onChange={this.props.onChange}
          className="file-upload-input video"
          type="text"
        />
      </fieldset>
    );
  }
}