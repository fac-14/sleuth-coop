const filter = data => {
  const transformed = {};
  transformed["basic_info"] = data[0][0];
  transformed.answers = {};
  data[1].forEach(element => {
    if (!transformed.answers[element.category]) {
      // create category
      transformed.answers[element.category] = [];
      transformed.answers[element.category].push(element);
    } else {
      // add to category
      transformed.answers[element.category].push(element);
    }
  });
  return transformed;
};

export default filter;
