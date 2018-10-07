import React from 'react';
import SignUpCard from './SignUpCard';
import questions from './formQuestions';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
  state = {
    position: 0,
    email: '',
    name: '',
    jobtitle: '',
    company: '',
    website: '',
    description: ''
  };

  handleChange = e => {
    const target = e.target;
    const value = target.value;
    this.setState({ [target.name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const data = JSON.stringify(this.state);
    // post req will go here (see fetch example below)
    fetch('/signup', {
      method: 'post',
      body: data
    });

    this.setState({
      email: '',
      name: '',
      jobtitle: '',
      company: '',
      website: '',
      description: ''
    });
  };

  nextSlide = () => {
    const { position } = this.state;
    const lastItem = questions.length - 1;
    const newPos1 = position === lastItem ? lastItem : position + 1;
    this.setState({
      position: newPos1
    });
  };

  prevSlide = () => {
    const { position } = this.state;
    const newPos2 = position === 0 ? 0 : position - 1;
    this.setState({ position: newPos2 });
  };

  render() {
    const { position } = this.state;
    const q = questions[position];
    const lastQ = questions.length - 1;
    return (
      <React.Fragment>
        <form className="form-carousel" onSubmit={this.handleSubmit}>
          <SignUpCard
            position={position}
            lastQ={questions.length - 1}
            name={q.name}
            type={q.type}
            text={q.text}
            change={this.handleChange}
            key={q.id}
            value={this.state[q.name]}
            next={() => this.nextSlide()}
            prev={() => this.prevSlide()}
          />
          {position === lastQ ? (
            <button className="carousel-submit" type="submit">
              Submit
            </button>
          ) : (
            <React.Fragment />
          )}
        </form>
      </React.Fragment>
    );
  }
}
