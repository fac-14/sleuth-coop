import React from "react";
import { Link } from "react-router-dom";

import FileUpload from "./AddComponents/FileUpload";
import getQuestions from "../utils/getQuestions";

export default class Add extends React.Component {
  state = {
    file: "",
    questions: ""
  };
  componentDidMount() {
    getQuestions()
      .then(res => this.setState({questions: res}))
      .catch(err => console.log(err));
  }
  handleFileUpload = e => {
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
          {questions.map(el => {
            return <h3>{el.question}</h3>;
          })}
          <FileUpload onChange={this.handleFileUpload} />

          <button type="submit">Save changes</button>
        </form>
      </div>
    );
  }
}
