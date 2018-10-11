import React from "react";
import { Link } from "react-router-dom";

import FileUpload from "./AddComponents/FileUpload";
import TextInput from "./AddComponents/TextInput";
import CheckBox from "./AddComponents/CheckBox";
import getQuestions from "../utils/getQuestions";

export default class Add extends React.Component {
  state = {
    file: "",
    questions: ""
  };
  componentDidMount() {
    getQuestions()
      .then(res => this.setState({ questions: res }))
      .catch(err => console.log(err))
  }
  handleChange = e => {
    this.setState({ file: e.target.value });
  };
  handleFileChange = e => {
    this.setState({ file: e.target.files[0] });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", this.state.file);
    fetch("/upload", {
      method: "POST",
      body: data
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.questions) {
      return <h3>Loading...</h3>;
    }
    const { questions } = this.state;
    return (
      <div className="container">
        <Link to={"/profile/123/SME"}>
          <button>Back</button>
        </Link>

        <h2>Edit</h2>
        <form onSubmit={this.handleSubmit}>
          {questions.map((el, index) => {
            if (el.input_type === "short_text") {
              return <TextInput key={index} id={index} content={el} onChange={this.handleChange} />;
            } else if (el.input_type === "file_upload") {
              return <FileUpload key={index} id={index} content={el} onChange={this.handleFileChange} />
            } else if (el.input_type === "checkbox") {
              return <CheckBox key={index} id={index} content={el} onChange={this.handleChange} />;
            }
            return "";
          })}
          <button type="submit">Save changes</button>
        </form>
      </div>
    );
  }
}
