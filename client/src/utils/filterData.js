const filter = data => {
  const transformed = {};
  transformed["basic_info"] = data.basic_info;
  transformed.answers = {};
  data.answers.forEach(element => {
    if (!transformed.answers[element.category]) {
      // create category
      transformed.answers[element.category] = [];
      transformed.answers[element.category].push(element);
    } else {
      // add to category
      transformed.answers[element.category].push(element);
    }
  });
  // console.log("data", transformed);
  return transformed;
};

export default filter;
