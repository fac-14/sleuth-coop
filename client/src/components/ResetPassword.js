import React from "react";
import HomeBtn from "./HomeBtn";

export default class ResetPassword extends React.Component {
  state = {
    password: "",
    confirmPassword: "",
    errorMsg: "",
    allowFetchSubmit: false,
    token: ""
  };

  componentDidMount() {
    const url = window.location.href;
    const token = url.split("reset/")[1];
    this.setState({ token: token });
  }

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.state.allowFetchSubmit) {
      const { password, confirmPassword } = this.state;

      if (password !== confirmPassword) {
        this.setState({ errorMsg: "Passwords do not match" });
      } else if (password.length < 4 || confirmPassword.length < 4) {
        this.setState({ errorMsg: "Password is too short" });
      } else {
        this.setState({ errorMsg: "" });
        this.setState({ allowFetchSubmit: true });
        this.allowSubmit();
      }
    } else {
      this.allowSubmit();
    }
  };

  allowSubmit = () => {
    const data = JSON.stringify(this.state);
    fetch("/reset", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: data
    })
      .then(res => {
        return res.text();
      })
      .then(res2 => {
        this.setState({ errorMsg: res2 });
      })
      .catch(err => console.log("err=", err));
  };

  handleKey = e => {
    this.setState({ allowFetchSubmit: false });
    const key = e.key.toLowerCase();
    const { password, confirmPassword } = this.state;

    if (key === "tab" || key === "enter") {
      if (password !== "" && confirmPassword !== "") {
        if (password !== confirmPassword) {
          e.preventDefault();
          this.setState({ errorMsg: "Passwords do not match" });
        } else {
          this.setState({ errorMsg: "" });
        }
      } //if one of them is empty
      else if (password === "" || confirmPassword === "") {
        if (password.length < 4) {
          e.preventDefault();
          this.setState({ errorMsg: "Password is too short" });
        } else {
          this.setState({ errorMsg: "" });
        }
      } else {
        //remove the error message when user starts to type character other than enter or tab
        this.setState({ errorMsg: "" });
        this.setState({ allowFetchSubmit: true });
      }
    } else {
      this.setState({ errorMsg: "" });
    }
  };

  render() {
    return (
      <React.Fragment>
        <HomeBtn color="dark" />
        <div className="landing-content">
          <h1>Reset Password</h1>

          <form id="reset-password-form" onSubmit={this.handleSubmit}>
            <label htmlFor="password">
              <h3>new password</h3>
            </label>
            <input
              className="input"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              onKeyDown={this.handleKey}
              required
              autofocus
            />
            <label htmlFor="confirmPassword">
              <h3>confirm new password</h3>
            </label>
            <input
              className="input"
              name="confirmPassword"
              value={this.state.confirmPassword}
              type="password"
              onChange={this.handleChange}
              onKeyDown={this.handleKey}
              required
            />

            <div
              className={
                this.state.errorMsg || this.state.serverError
                  ? "error"
                  : "hidden"
              }
            >
              {this.state.errorMsg} {this.state.serverError}
            </div>

            <button
              className="large-home-btn2 default-btn"
              type="submit"
              onClick={this.handleSubmit}
            >
              submit
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
