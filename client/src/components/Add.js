import React from "react";
import { Link } from 'react-router-dom';

import FileUpload from './AddComponents/FileUpload';

export default class Add extends React.Component {
  state = {
    file: ""
  }
  handleFileUpload = e => {
    this.setState({file: e.target.files[0]})
  }
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
    return (
      <div className="container">
        <Link to={"/profile/123/SME"}>
          <button>Back</button>
        </Link>
        <h2>Edit</h2>
        <form onSubmit={this.handleSubmit}>
          <FileUpload onChange={this.handleFileUpload} />
          
          <button type="submit">
            Save changes
          </button>
        </form>
      </div>
    );
  }
}
