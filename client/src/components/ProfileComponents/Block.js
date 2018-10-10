import React from "react";
import download from "../../assets/download.svg";

export default class Block extends React.Component {
  render() {
    const { type } = this.props;
    if (type === "file_upload") {
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <a href={this.props.answer} download className="download-badge">
            <div className="icon-wrapper">
              <img src={download} alt="download" />
            </div>
            {this.props.answer}
          </a>
        </div>
      );
      } else if (type === "video") {
        return (
          <div className={this.props.type + " profile-block"}>
            <h3>{this.props.heading}</h3>
            <iframe title="demo video" width="560" height="315" src={this.props.answer} frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
          </div>
        );
    } else if (type === "image") {
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <img src={this.props.answer} alt="content" />
        </div>
      );
    } else {
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <p>{this.props.answer}</p>
        </div>
      );
    }
  }
}
