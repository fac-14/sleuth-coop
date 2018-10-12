import React from "react";
import { Link } from "react-router-dom";

import Category from "./AddComponents/Category";

import getQuestions from "../utils/getQuestions";
import filterQuestions from "../utils/filterQuestions";

export default class Add extends React.Component {
  state = {
    formState: {},
    questions: ""
  };
  componentDidMount() {
    getQuestions()
      .then(res => {
        const filtered = filterQuestions(res);
        this.setState({ questions: filtered });
      })
      .catch(err => console.log(err));
  }
  handleChange = e => {
    const questionId = e.target.id;
    let answer;
    if (e.target.type === "checkbox") {
      answer = e.target.checked;
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
  dropdownSelect = e => {
    // console.log(e.target.textContent);
    // console.log(e.target.className);
    const questionId = e.target.className;
    const selected = e.target.textContent;
    const state = this.state.formState;
    if (!this.state.formState[questionId]) {
      state[questionId] = [selected];
    } else {
      state[questionId].push(selected);
    }
    this.setState({ formState: state });
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
      })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.questions) {
      return <h3>Loading...</h3>;
    }
    const { questions } = this.state;
    const categories = Object.entries(questions);
    // console.log(this.state.formState);
    return (
      <div className="container">
        <Link to={"/profile/123/SME"}>
          <button>Back</button>
        </Link>
        <form onSubmit={this.handleSubmit}>
          {categories.map((el, index) => {
            return (
              <div key={index}>
                <h2 className={el[0].toLowerCase().replace(/ /g, "-")}>
                  {el[0]}
                </h2>
                <Category
                  questions={el[1]}
                  change={this.handleChange}
                  dropdownSelect={this.dropdownSelect}
                  state={this.state}
                />
              </div>
            );
          })}
          <button type="submit">Save changes</button>
        </form>
      </div>
    );
  }
}

{
  /*{questions.map((el, index) => {
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
                  dropdownSelect={this.dropdownSelect}
                  value={this.state.formState[el.id]}
                />
              );
            }
            return "";
          })} */
}
