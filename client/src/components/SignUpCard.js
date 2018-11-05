import React from "react";

export default class SignUpCard extends React.Component {

  render() {
    if (this.props.inputType === "textarea") {
      return (
        <div className="form-text">
          <label htmlFor={this.props.name}>
            <h3>Please enter {this.props.text}:</h3>
          </label>
          <textarea
            className="input"
            id={this.props.name}
            name={this.props.name}
            type={this.props.type}
            value={this.props.value}
            autoComplete="off"
            onChange={this.props.change}
            onBlur={this.props.validator}
            placeholder={this.props.placeholder}
            required
          />
        </div>
        
      );
    } 
    else if(this.props.inputType.toLowerCase().includes("confirm")){
      return (
        <div className="form-text">
          <label htmlFor={this.props.name}>
            <h3>Please enter {this.props.text}:</h3>
          </label>
          <input
            className="input"
            id={this.props.name}
            name={this.props.name}
            type={this.props.type}
            value={this.props.value}
            autoComplete="off"
            onChange={this.props.change}
            onBlur={this.props.validator}
            onKeyDown={this.props.keyHandler} 
            placeholder={this.props.placeholder}
            required
          />
          <input
            className="input"
            name={this.props.confirmName}
            type={this.props.type}
            value={this.props.confirmValue}
            autoComplete="off"
            onChange={this.props.change}
            onBlur={this.props.validator}
            onKeyDown={this.props.keyHandler}
            placeholder={this.props.confirmPlaceholder} 
            required
          />
        </div>
      );
    }
    return (
      <div className="form-text">
        <label htmlFor={this.props.name}>
          <h3>Please enter {this.props.text}:</h3>
        </label>
        <input
          className="input"
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          value={this.props.value}
          autoComplete="off"
          onChange={this.props.change}
          onBlur={this.props.validator}
          onKeyDown={this.props.keyHandler} 
          placeholder={this.props.placeholder}
          required
        />
      </div>
    );
  }
}
