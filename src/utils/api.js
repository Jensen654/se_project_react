const baseUrl = "http://localhost:3001";

const handleResponse = (res) => {
  if (res.ok) {
    const repo = res.json();
    // console.log(repo);
    return repo;
  }
  return Promise.reject(`Error: ${res.status}`);
};

const handleErrorResponse = (error) => {
  console.log(`Oh no! ${error} happened`);
};

const getItems = () => {
  return fetch(`${baseUrl}/items`)
    .then((res) => handleResponse(res))
    .catch((error) => handleErrorResponse(error));
};

const postItem = (postBody) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postBody),
  })
    .then((res) => handleResponse(res))
    .catch((error) => handleErrorResponse(error));
};

const deleteItem = (id) => {
  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
  })
    .then((res) => handleResponse(res))
    .catch((error) => handleErrorResponse(error));
};

export { getItems, postItem, deleteItem };
