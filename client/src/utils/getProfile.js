const getProfile = async url => {
  const response = await fetch(`${url}/get`);

  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};

export default getProfile;
