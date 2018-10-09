const getProfile = async id => {
  const response = await fetch(`/profile/${id}`);

  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};

export default getProfile;
