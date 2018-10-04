import React from 'react';

export default class SignUp extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label htmlFor="email">Please enter your contact email:</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="full-name">Please enter your contact name:</label>
          <input
            id="full-name"
            name="full-name"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="comp-name">Please enter your company name:</label>
          <input
            id="comp-name"
            name="comp-name"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="comp-site">Please enter your company website:</label>
          <input
            id="comp-site"
            name="comp-site"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="comp-site">Please enter your company website:</label>
          <input
            id="comp-site"
            name="comp-site"
            type="text"
            autoComplete="off"
            required
          />
        </div>
        <div>
          <label htmlFor="comp-site">Please enter your company website:</label>
          <input
            id="comp-site"
            name="comp-site"
            type="text"
            autoComplete="off"
            required
          />
        </div>
      </form>
    );
  }
}
