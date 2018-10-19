import React from "react";
import Block from "./Block";
export default class Content extends React.Component {
  render() {
    const categories = Object.entries(this.props.answers);

    return (
      <React.Fragment>
        {categories.map((el, index) => {
          return (
            <div
              className="category"
              id={el[0].toLowerCase().replace(/ /g, "-")}
              key={index}
            >
              <div className="vert-center">
                <h2>{el[0]}</h2>
                {el[1].map((e, index) => {
                  return (
                    <Block
                      key={index}
                      type={e.input_type}
                      heading={e.question}
                      answer={e.answer}
                      compId={this.props.compId}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
