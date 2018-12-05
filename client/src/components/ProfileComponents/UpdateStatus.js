import React from "react";
// import deactivate from "../../assets/deactivate.svg";
// import reactivate from "../../assets/reactivate.svg";

export default class deleteBtn extends React.Component {
  state = {
    deleted: true,
    color: "#009900",
    text: "Reactivate account",
    img: "reactivate"
  };
  componentWillMount() {
    const data = { compId: this.props.compId };
    fetch("/getStatus", {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: "post",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(jsonData => {
        if (jsonData[0].deleted === false)
          this.setState({
            deleted: false,
            color: "#FF0000",
            text: "Deactivate account",
            img: "deactivate"
          });
      })
      .catch(err => console.log(err));
  }
  changeStatus = () => {
    if (this.state.deleted === false) {
      this.setState({
        deleted: true,
        color: "#009900",
        text: "Reactivate account",
        img: "reactivate"
      });
    } else if (this.state.deleted === true) {
      this.setState({
        deleted: false,
        color: "#FF0000",
        text: "Deactivate account",
        img: "deactivate"
      });
    }
    const data = { compId: this.props.compId, status: this.state.deleted };
    fetch("/delete", {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: "post",
      body: JSON.stringify(data)
    })
      .then(res => res.json().then(res => console.log(res)))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state);
    return (
      <button
        id="home-btn"
        onClick={this.changeStatus}
        id="change-status-btn"
        style={{ backgroundColor: this.state.color }}
      >
        {/* <img src={deactivate} alt="add icon" /> */}
        {this.state.text}
      </button>
    );
  }
}
