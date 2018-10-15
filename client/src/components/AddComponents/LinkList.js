import React from "react";

export default class LinkList extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <fieldset>
        <h4>{content.question}</h4>
        <p>{content.helper_text}</p>
        <label htmlFor="description">
          <input type="text" id="description" onChange={this.props.onChange} />
        </label>
        <label htmlFor={content.id}>
          <input type="url" id={content.id} onChange={this.props.onChange} />
        </label>
      </fieldset>
    );
  }
}
