import React from "react";
// import { Link } from "react-router-dom";

import BackBtn from "./BackBtn";
import Category from "./AddComponents/Category";
import BasicInfo from "./AddComponents/BasicInfo";
import ContactHilary from "./ContactHilary";
import SaveSuccess from "./SaveSuccess";

import getQuestions from "../utils/getQuestions";
import getProfile from "../utils/getProfile";
import filterQuestions from "../utils/filterQuestions";
import videoLinkFormatter from "../utils/videoLinkFormatter";

import helpBtn from "../assets/question-btn-new.svg";
import dropBtn from "../assets/dropdown-arrow.svg";

export default class Add extends React.Component {
  state = {
    formState: {},
    questions: "",
    files: {},
    basicInfo: {},
    help: "",
    save: "",
    expanded: ""
  };

  selectExpandedItem = elementId => {
    if (elementId === this.state.expanded) {
      return "q-category expand";
    }
    if (elementId === "basic-info") {
      document.getElementById("basic-id").classList.toggle("expand");
      this.setState({ expanded: "" });
    } else {
      return "q-category";
    }
  };

  expandedState = el => {
    const elementId = el[0].toLowerCase().replace(/ /g, "-");
    if (this.state.expanded === elementId) {
      this.setState({ expanded: "" });
    } else {
      this.setState({ expanded: elementId });
      document.getElementById("basic-id").classList.remove("expand");
    }
  };

  componentDidMount() {
    const profile = this.props.location.pathname;
    const profileUrl = profile.replace(/add/gi, "sme");
    getProfile(profileUrl).then(res => {
      const profileData = res[0][0];
      this.setState({ basicInfo: profileData });
    });

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
    let questionId = e.target.id;
    let answer;
    let file;
    let profileAnswer;
    if (e.target.className.includes("basic-info")) {
      if (e.target.type === "file" && e.target.files[0] !== undefined) {
        profileAnswer = e.target.files[0].name;
        file = e.target.files[0];
      } else if (e.target.type === "text") {
        profileAnswer = e.target.value;
      }
    } else {
      if (e.target.type === "checkbox") {
        if (e.target.checked === true) {
          answer = [e.target.name];
        } else {
          answer = [e.target.value];
        }
      } else if (e.target.type === "file" && e.target.files[0] !== undefined) {
        answer = [e.target.files[0].name];
        file = e.target.files[0];
      } else if (e.target.className.includes("video")) {
        answer = [videoLinkFormatter(e.target.value)];
      } else {
        answer = [e.target.value];
      }
    }
    const state = this.state.formState;
    state[questionId] = answer;
    const fileObj = this.state.files;
    fileObj[questionId] = file;

    const basicInfoObj = this.state.basicInfo;
    basicInfoObj[questionId] = profileAnswer;

    this.setState(() => {
      return {
        formState: state,
        files: fileObj,
        basicInfo: basicInfoObj
      };
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
    const linkArray = `${description}-${link}`;
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
    const { files } = this.state;
    for (let key in files) {
      data.append(key, files[key]);
    }
    fetch("/upload-files", {
      method: "POST",
      body: data
    })
      .catch(err => console.log(err))
      .then(
        fetch("/upload", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(this.state.formState)
        })
      )
      .catch(err => console.log(err))
      .then(
        fetch("/updateBasicInfo", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(this.state.basicInfo)
        })
      )
      .then(this.setState({ save: "yes", help: "hello" }))
      .then(
        setTimeout(() => {
          this.setState({ save: "" });
        }, 1200)
      )
      // .then(res => {
      // // INSTEAD OF CLEARING FORM HERE, WE COULD SHOW THAT THEY'VE SAVED SUCCESSFULLY WITH A TEMP MODAL OR SOMETHING...
      //   this.setState({ formState: {} });
      // })
      .catch(err => console.log(err));
  };
  getHelp = () => {
    if (this.state.help === "yes") {
      this.setState({ help: "" });
    } else {
      this.setState({ help: "yes" });
    }
  };

  render() {
    if (!this.state.questions) {
      return <h3>Loading...</h3>;
    }
    const { questions, basicInfo } = this.state;
    const categories = Object.entries(questions);
    const url = `/profile/${basicInfo.id}/sme`;
    return (
      <div className="edit-page-container">
        {this.state.save === "yes" ? <SaveSuccess /> : null}
        <BackBtn url={url} color="dark" />

        <button id="help-btn" onClick={this.getHelp}>
          <img src={helpBtn} alt="help" />
        </button>
        {this.state.help === "yes" ? <ContactHilary /> : null}

        <form id="edit-form" onSubmit={this.handleSubmit}>
          <BasicInfo
            onChange={this.handleChange}
            profileData={this.state.basicInfo}
            expand={this.selectExpandedItem}
          />

          {categories.map((el, index) => {
            return (
              <div
                key={index}
                className={this.selectExpandedItem(
                  el[0].toLowerCase().replace(/ /g, "-")
                )}
                id={el[0].toLowerCase().replace(/ /g, "-")}
              >
                <div className="cat-header">
                  <h2>{el[0]}</h2>
                  <button
                    type="button"
                    id="toggle-button"
                    onClick={() => this.expandedState(el)}
                  >
                    <img src={dropBtn} alt="dropdown" />
                  </button>
                </div>
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
          <button id="add-submit-btn" type="submit">
            Save changes
          </button>
        </form>
      </div>
    );
  }
}
