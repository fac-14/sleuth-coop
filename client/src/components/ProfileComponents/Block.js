import React from "react";
import download from "../../assets/download.svg";
import star from "../../assets/star.svg";
import eyeIcon from "../../assets/Eye button.svg";

let url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://sleuth-sme.herokuapp.com";
export default class Block extends React.Component {
  // download() {
  //   // fake server request, getting the file url as response
  //   // setTimeout(() => {
  //   //   const response = {
  //   //     file: `/static/3-london-borough-profiles.xlsx`
  //   //   };
  //   //   // server sent the url to the file!
  //   //   // now, let's download:
  //   //   window.location.href = response.file;
  //   //   // you could also do:
  //   //   // window.open(response.file);
  //   // }, 100);
  //   fetch("/download")
  //     // .then(res => res.json())
  //     .then(res => console.log(res.body));
  // }

  render() {
    const { type } = this.props;
    if (type === "checkbox") {
      if (this.props.answer[0] === "yes") {
        return (
          <div className="star-badge profile-block">
            <div className="icon-wrapper">
              <img src={star} alt="star" />
            </div>
            <h3>{this.props.heading}</h3>
          </div>
        );
      } else {
        return null;
      }
    } else if (type === "file_upload") {
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <a
            href={`${url}/download/${this.props.compId}/${
              this.props.answer[0]
            }`}
            target="_blank"
            rel="noopener noreferrer"
            download={this.props.answer[0]}
            className="download-badge"
          >
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
          <iframe
            title="demo video"
            width="560"
            height="315"
            src={this.props.answer}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          />
        </div>
      );
    } else if (type === "image") {
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <img src={this.props.answer} alt="content" />
        </div>
      );
    } else if (type === "dropdown") {
      
        if(this.props.answer.length === 0){
          return (
            ""
          )
        } else {
          return (
        <div className="tagged-list profile-block">
        
          <h3>{this.props.heading}</h3>
          <ul>
            {this.props.answer.map((el, index) => { 
              return (
                <li key={index} className="tag">
                  {el}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
    } else if (type === "url_inputs") {
      return (
        <div className="link-list profile-block">
          <h3>{this.props.heading}</h3>

          {this.props.answer.map((el, index) => {
            return (
              <div id="links" key={index}>
                <img id="eye-icon" src={eyeIcon} alt="question mark" />
                <a
                  href={el.split(":-:")[1]}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <p>{el.split(":-:")[0]}</p>
                </a>
              </div>
            );
          })}
        </div>
      );
    } else {
      if(this.props.answer[0].trim() === "") {
        return (
          ""
       )
       } else{
      return (
        <div className={this.props.type + " profile-block"}>
          <h3>{this.props.heading}</h3>
          <p>{this.props.answer}</p>
        </div>
      );
     }
    }
  }
}
