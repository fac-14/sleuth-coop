const filterQuestions = data => {
  const filtered = {};
  data.forEach((el, index) => {
    if (!filtered[el.category]) {
      filtered[el.category] = [];
      filtered[el.category].push(el);
    } else {
      filtered[el.category].push(el);
    }
  });
  return filtered;
};

export default filterQuestions;
