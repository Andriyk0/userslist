const API = 'https://jsonplaceholder.typicode.com/';

export const getUsers = async () => {
  const response = await fetch(`${API}users`);

  return response.json();
};

export const getUserPosts = async (id:number) => {
  const response = await fetch(`${API}posts?userId=${id}`);

  return response.json();
};
