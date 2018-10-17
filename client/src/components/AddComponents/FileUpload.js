import React from "react";
// import arrow from "../../assets/dropdown-arrow.svg";

export default class FileUpload extends React.Component {
  render() {
    const { content, answers } = this.props;
    // this will need to get the file from the database and assign to value
    return (
      <fieldset className="upload-section">
        <label htmlFor={content.id}>
          <h4>{content.question}</h4>
        </label>
        {/* <button>
          <img src={arrow} alt="down arrow" />
        </button> */}
        <p>{content.helper_text}</p>
        <input
          id={content.id}
          onChange={this.props.onChange}
          className="file-upload-input"
          type="file"
        />
        <p>Current File: {answers[content.id] ? answers[content.id] : "None"}</p>
      </fieldset>
    );
  }
}
