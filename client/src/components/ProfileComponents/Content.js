import React from "react";
import Block from "./Block";
export default class Content extends React.Component {
  render() {
    const categories = Object.entries(this.props.answers);

    return (
      <div>
        {categories.map((el, index) => {
          return (
            <div className={"category category-" + el[0]} key={index}>
              <h2>{el[0]}</h2>
              {el[1].map((e, index) => {
                return (
                  <Block
                    key={index}
                    type={e.input_type}
                    heading={e.question}
                    answer={e.answer}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
