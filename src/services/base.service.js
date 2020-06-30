// TODO: Improve services

const API_URL = 'http://localhost:8000/api';

export const get = (path) => {
  const fullPath = `${API_URL}/${path}`;
  return request(fullPath)
    .then(res => res.json());
};

export const post = (path, body) => {
  const fullPath = `${API_URL}/${path}`;
  const options = { method: 'POST', body };
  return request(fullPath, options);
};

export const patch = (path, body) => {
  const fullPath = `${API_URL}/${path}`;
  const options = { method: 'PATCH', body };
  return request(fullPath, options);
};

export const remove = (path) => {
  const fullPath = `${API_URL}/${path}`;
  const options = { method: 'DELETE' };
  return request(fullPath, options);
};

function request(path, options = {}) {
  options.headers = { 'Content-Type': 'application/json' };
  options.body = options.body && JSON.stringify(options.body);
  return fetch(path, options);
}
