import React from "react";

export default class VideoInput extends React.Component {
  render() {
    const { content, answers } = this.props;
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
          pattern="(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\-_]+)"
        />
        <p>
          Current Link: {answers[content.id] ? answers[content.id] : "None"}
        </p>
      </fieldset>
    );
  }
}
