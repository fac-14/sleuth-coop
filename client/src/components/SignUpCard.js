import React from 'react';

export default class SignUpCard extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>Please enter {this.props.text}:</label>
        <input
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          autoComplete="off"
          required
        />
      </div>
    );
  }
}
