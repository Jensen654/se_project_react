const baseUrl = "http://localhost:3001";

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

const postItem = (postBody) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postBody),
  }).then((res) => handleResponse(res));
};

const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  }).then((res) => handleResponse(res));
};

export { handleResponse, getItems, postItem, deleteItem };
