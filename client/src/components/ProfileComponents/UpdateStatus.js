import React from "react";
// import deactivate from "../../assets/deactivate.svg";
// import reactivate from "../../assets/reactivate.svg";

export default class deleteBtn extends React.Component {
  state = {
    color: "grey",
    text: "account status loading..",
    img: ""
  };

  getStatus = compId => {
    const data = {
      compId
    };
    return fetch("/getStatus", {
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      method: "post",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(jsonData => {
        return jsonData[0].deleted;
      })
      .catch(err => console.log("error in updateState: " + err));
  };

  hydrateState = compId => {
    this.getStatus(compId).then(statusBool => {
      if (statusBool === false) {
        this.setState({
          color: "#FF0000",
          text: "Deactivate account",
          img: "deactivate"
        });
      } else {
        this.setState({
          color: "#009900",
          text: "Reactivate account",
          img: "reactivate"
        });
      }
    });
  };

  updateStatus = status => {
    const data = { compId: this.props.compId, status: !status };
    fetch("/delete", {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: localStorage.getItem("jwt")
      },
      method: "post",
      body: JSON.stringify(data)
    })
      .then(res => {
        return res.text();
      })
      .then(text => {
        console.log(text);
        return text;
      })
      .catch(err => console.log(err));
  };

  changeStatus = () => {
    this.getStatus(this.props.compId)
      .then(statusBool => {
        this.updateStatus(statusBool);
        if (statusBool === false) {
          this.setState({
            color: "#009900",
            text: "Reactivate account",
            img: "reactivate"
          });
        } else if (statusBool === true) {
          this.setState({
            color: "#FF0000",
            text: "Deactivate account",
            img: "deactivate"
          });
        }
      })
      .catch(err => console.log(err));
  };

  componentWillMount() {
    this.hydrateState(this.props.compId);
  }
  render() {
    // console.log(this.state);
    while (this.state.deleted === null) {
      return <h3>Loading...</h3>;
    }
    return (
      <button
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
