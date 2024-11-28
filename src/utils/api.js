const baseUrl = "http://localhost:3001";

const getItems = () => {
  return fetch(`${baseUrl}/items`);
};

const postItem = (postBody) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postBody),
  });
};

const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  });
};

export { getItems, postItem, deleteItem };
