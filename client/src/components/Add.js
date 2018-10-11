import React from "react";
import { Link } from "react-router-dom";

import FileUpload from "./AddComponents/FileUpload";
import TextInput from "./AddComponents/TextInput";
import CheckBox from "./AddComponents/CheckBox";
import Dropdown from "./AddComponents/Dropdown";
import getQuestions from "../utils/getQuestions";

export default class Add extends React.Component {
  state = {
    formState: {},
    questions: ""
  };
  componentDidMount() {
    getQuestions()
      .then(res => this.setState({ questions: res }))
      .catch(err => console.log(err));
  }
  handleChange = e => {
    const questionId = e.target.id;
    let answer;
    if (e.target.type === "checkbox") {
      answer = e.target.checked;
      console.log(e.target);
    } else if (e.target.type === "file") {
      answer = e.target.files[0];
    } else {
      answer = e.target.value;
    }
    const state = this.state.formState;
    state[questionId] = answer;
    this.setState(() => {
      return { formState: state };
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const data = new FormData();
    const { formState } = this.state;
    for (let key in formState) {
      data.append(key, formState[key]);
    }
    fetch("/upload", {
      method: "POST",
      body: data
    })
      .then(res => {
        this.setState({ formState: {} });
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.questions) {
      return <h3>Loading...</h3>;
    }
    const { questions } = this.state;
    console.log(this.state.formState);
    return (
      <div className="container">
        <Link to={"/profile/123/SME"}>
          <button>Back</button>
        </Link>

        <h2>Edit</h2>
        <form onSubmit={this.handleSubmit}>
          {questions.map((el, index) => {
            if (el.input_type === "short_text") {
              return (
                <TextInput
                  key={index}
                  content={el}
                  onChange={this.handleChange}
                />
              );
            } else if (el.input_type === "file_upload") {
              return (
                <FileUpload
                  key={index}
                  content={el}
                  onChange={this.handleChange}
                />
              );
            } else if (el.input_type === "checkbox") {
              return (
                <CheckBox
                  key={index}
                  content={el}
                  onChange={this.handleChange}
                />
              );
            } else if (el.input_type === "dropdown") {
              return (
                <Dropdown
                  key={index}
                  content={el}
                  onChange={this.handleChange}
                />
              );
            }
            return "";
          })}
          <button type="submit">Save changes</button>
        </form>
      </div>
    );
  }
}
