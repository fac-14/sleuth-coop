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
    const { content } = this.props;
    return (
      <fieldset>
        <h4>{content.question}</h4>
        <p>{content.helper_text}</p>
        <ul>
          <li>placeholder link list</li>
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
        <button onClick={() => this.props.getLinks(this.state)}>Add</button>
      </fieldset>
    );
  }
}
