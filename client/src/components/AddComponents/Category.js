import React from "react";

import FileUpload from "./FileUpload";
import TextInput from "./TextInput";
import CheckBox from "./CheckBox";
import Dropdown from "./Dropdown";
import LinkList from "./LinkList";
import VideoInput from "./VideoInput";

export default class Category extends React.Component {
  render() {
    const questions = this.props.questions;
    return (
      <React.Fragment>
        {/* loops through all questions relating to one category and 
        produces the correct element for the input type */}

        {questions.map((el, index) => {
          if (el.input_type === "short_text" || el.input_type === "long_text") {
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
                answers={this.props.state.formState}
                alreadyAnswered={this.props.alreadyAnswered}
              />
            );
          } else if (el.input_type === "checkbox") {
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
                dropdownRemove={this.props.dropdownRemove}
                value={this.props.state.formState[el.id]}
                answers={this.props.state.formState}
                alreadyAnswered={this.props.alreadyAnswered}
              />
            );
          } else if (el.input_type === "url_inputs") {
            return (
              <LinkList
                key={index}
                content={el}
                getLinks={this.props.getLinks}
                answers={this.props.state.formState}
              />
            );
          } else if (el.input_type === "video") {
            return (
              <VideoInput
                key={index}
                content={el}
                answers={this.props.state.formState}
                onChange={this.props.change}
              />
            );
          }
          return "";
        })}
      </React.Fragment>
    );
  }
}
