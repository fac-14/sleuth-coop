import React from "react";

import FileUpload from "./FileUpload";
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";

export default class Category extends React.Component {
  render() {
    const questions = this.props.questions;
    return (
      <React.Fragment>
        {/* loops through all questions relating to one category and 
        produces the correct element for the input type */}

        {questions.map((el, index) => {
          if (el.input_type === "short_text") {
            return (
              <TextInput
                key={index}
                content={el}
                onChange={this.props.change}
                answers={this.props.state.formState}
                alreadyAnswered={this.props.alreadyAnswered}
              />
            );
          } else if (el.input_type === "file_upload") {
            return (
              <FileUpload
                key={index}
                content={el}
                onChange={this.props.change}
              />
            );
          } else if (el.input_type === "checkbox") {
            console.log("category answers", this.props.state.formState);
            return (
              <CheckBox
                key={index}
                content={el}
                onChange={this.props.change}
                answers={this.props.state.formState}
                alreadyAnswered={this.props.alreadyAnswered}
              />
            );
          } else if (el.input_type === "dropdown") {
            return (
              <Dropdown
                key={index}
                content={el}
                onChange={this.props.change}
                dropdownSelect={this.props.dropdownSelect}
                value={this.props.state.formState[el.id]}
              />
            );
          }
          return "";
        })}
      </React.Fragment>
    );
  }
}
