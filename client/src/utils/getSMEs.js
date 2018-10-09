const getSMEs = async () => {
  const response = await fetch(`/smes`);

  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};

export default getSMEs;