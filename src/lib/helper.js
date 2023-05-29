const BASE_URL = process.env.VERCEL_URL ?? 'http://localhost:3000';

//all users
export const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/api/users`);
  const json = await response.json();
  return json;
};

//single user
export const getUser = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/users/${userId}`);
  const json = await response.json();

  if (json) return json;
  return {};
};

//posting a new user
export const addUser = async (formData) => {
  try {
    const Options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    };
    const response = await fetch(`${BASE_URL}/api/users`, Options);
    const json = await response.json();
    return json;
  } catch (error) {
    return error;
  }
};

//updating a user
export const updteUser = async (userId, formData) => {
  const Options = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  };

  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const json = await response.json();
  return json;
};

//deleting a user
export const deleteUser = async (userId) => {
  const Options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options);
  const json = await response.json();
  return json;
};
