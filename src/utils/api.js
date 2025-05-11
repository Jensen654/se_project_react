const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.jensenbeanwtwr.twilightparadox.com"
    : "http://localhost:3001";

const handleResponse = (res) => {
  if (res.ok) {
    const repo = res.json();
    return repo;
  }
  return Promise.reject(`Error: ${res.status}`);
};

const getItems = () => {
  return fetch(`${baseUrl}/items`).then((res) => handleResponse(res));
};

const postItem = (postBody, token) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(postBody),
  }).then((res) => handleResponse(res));
};

const deleteItem = (id, token) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));
};

const addCardLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));
};

const removeCardLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  }).then((res) => handleResponse(res));
};

const getUserLocation = () => {
  return fetch(
    "https://api.ipgeolocation.io/ipgeo?apiKey=0e151d23369d4fe7995c8a495435e606"
  ).then((res) => handleResponse(res));
};

export {
  handleResponse,
  getItems,
  postItem,
  deleteItem,
  baseUrl,
  addCardLike,
  removeCardLike,
  getUserLocation,
};
