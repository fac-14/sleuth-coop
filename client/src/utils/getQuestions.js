const getQuestions = async () => {
  const response = await fetch(`/questions`);

  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};

export default getQuestions;