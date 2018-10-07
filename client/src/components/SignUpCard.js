import React from 'react';
import Arrow from './Arrow';

export default class SignUpCard extends React.Component {
  render() {
    return (
      <div className="carousel-slot">
        {this.props.position !== 0 ? (
          <Arrow
            direction="left"
            clickFunction={this.props.prev}
            glyph="&#9664;"
          />
        ) : (
          <React.Fragment />
        )}
        <div className="sign-up">
          <label htmlFor={this.props.name}>
            Please enter {this.props.text}:
          </label>
          <input
            id={this.props.name}
            name={this.props.name}
            type={this.props.type}
            value={this.props.value}
            autoComplete="off"
            onChange={this.props.change}
            placeholder={this.props.value}
            required
          />
        </div>
        {this.props.position !== this.props.lastQ ? (
          <Arrow
            direction="right"
            clickFunction={this.props.next}
            glyph="&#9654;"
          />
        ) : (
          <React.Fragment />
        )}
      </div>
    );
  }
}
