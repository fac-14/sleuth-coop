// bit of WET code here, very similar to filterData
// could probably reformat that to work for both

const filterQuestions = data => {
  const filtered = {};
  data.forEach((el, index) => {
    if (!filtered[el.category]) {
      // create category
      filtered[el.category] = [];
      filtered[el.category].push(el);
    } else {
      // add to category
      filtered[el.category].push(el);
    }
  });
  return filtered;
};

export default filterQuestions;
