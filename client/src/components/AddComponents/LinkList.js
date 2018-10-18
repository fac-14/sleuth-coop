import React from "react";

export default class LinkList extends React.Component {
  state = {
    qId: this.props.content.id,
    description: "",
    link: ""
  };

  onChange = e => {
    const value = e.target.value;
    const type = e.target.id;
    this.setState({ [type]: value });
  };

  render() {
    const { content, answers } = this.props;
    const selected = answers[content.id] || [];
    return (
      <fieldset className="link-section">
        <h4>{content.question}</h4>
        <p>{content.helper_text}</p>
        <ul>
          {selected.map((link, index) => {
            return <li key={index}>{link.split("-")[0]}</li>;
          })}
        </ul>
        <label htmlFor="description">
          Link description:
          <input
            type="text"
            className={content.id}
            id="description"
            onChange={this.onChange}
          />
        </label>
        <label htmlFor="link">
          Url:
          <input
            type="url"
            className={content.id}
            id="link"
            onChange={this.onChange}
          />
        </label>
        <button
          onClick={() => this.props.getLinks(this.state)}
          id="add-link-btn"
        >
          Add
        </button>
      </fieldset>
    );
  }
}
