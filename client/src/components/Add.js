import React from "react";
import { Link } from "react-router-dom";

import Category from "./AddComponents/Category";

import getQuestions from "../utils/getQuestions";
import filterQuestions from "../utils/filterQuestions";
import videoLinkFormatter from "../utils/videoLinkFormatter";

export default class Add extends React.Component {
  state = {
    formState: {},
    questions: ""
  };
  componentDidMount() {
    getQuestions()
      .then(res => {
        const answersArr = res[2];
        const state = this.state.formState;
        answersArr.forEach(function(element) {
          state[element.question_id] = element.answer;
        });

        this.setState(() => {
          return { formState: state };
        });

        const filtered = filterQuestions(res[1]);
        this.setState({ questions: filtered });
      })
      .catch(err => console.log(err));
  }

  alreadyAnswered = contentId => {
    const answers = this.state.formState;
    if (answers.hasOwnProperty(contentId)) {
      return answers[contentId];
    }
  };

  handleChange = e => {
    const questionId = e.target.id;
    let answer;
    if (e.target.type === "checkbox" && e.target.checked === true) {
      answer = e.target.name;
    } else if (e.target.type === "file") {
      answer = e.target.files[0];
    } else if (e.target.className.includes("video")) {
      answer = videoLinkFormatter(e.target.value);
    } else {
      answer = e.target.value;
    }
    const state = this.state.formState;
    state[questionId] = [ answer ];
    this.setState(() => {
      return { formState: state };
    });
  };
  dropdownSelect = e => {
    const questionId = e.target.className;
    const selected = e.target.textContent;
    const state = this.state.formState;
    if (!this.state.formState[questionId]) {
      state[questionId] = [selected];
    } else if (!state[questionId].includes(selected)) {
      state[questionId].push(selected);
    }
    this.setState({ formState: state });
  };

  dropdownRemove = e => {
    const questionId = e.target.className;
    const selected = e.target.textContent;
    const state = this.state.formState;
    if (state[questionId].includes(selected)) {
      const index = state[questionId].indexOf(selected);
      state[questionId].splice(index, 1);
    }
    this.setState({ formState: state });
  };

  getLinks = linkState => {
    const { qId, description, link } = linkState;
    const newState = this.state.formState;
    const linkArray = [description, link];
    if (!newState[qId]) {
      newState[qId] = [linkArray];
    } else {
      newState[qId].push(linkArray);
    }
    this.setState({ formState: newState });
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
      // .then(res => {
      // // INSTEAD OF CLEARING FORM HERE, WE COULD SHOW THAT THEY'VE SAVED SUCCESSFULLY WITH A TEMP MODAL OR SOMETHING...
      //   this.setState({ formState: {} });
      // })
      .catch(err => console.log(err));
  };

  render() {
    if (!this.state.questions) {
      return <h3>Loading...</h3>;
    }
    // console.log(this.state.formState)
    const { questions } = this.state;
    const categories = Object.entries(questions);
    return (
      <div className="edit-page-container">
        <Link to={"/profile/1/SME"}>
          <button>Back</button>
        </Link>
        <form id="edit-form" onSubmit={this.handleSubmit}>
          {categories.map((el, index) => {
            return (
              <div
                key={index}
                className={"q-category "}
                id={el[0].toLowerCase().replace(/ /g, "-")}
              >
                <h2>{el[0]}</h2>
                <Category
                  questions={el[1]}
                  change={this.handleChange}
                  dropdownSelect={this.dropdownSelect}
                  dropdownRemove={this.dropdownRemove}
                  getLinks={this.getLinks}
                  state={this.state}
                  alreadyAnswered={this.alreadyAnswered}
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
