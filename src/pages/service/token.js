export const setToken = (token) => {
  window.localStorage.setItem("mixelToken", token);
};

export const getToken = () => {
  return window.localStorage.getItem("mixelToken");
};

export const deleteToken = () => {
  return window.localStorage.clear("mixelToken");
};
