import axios from "axios";

export const url = "http://192.168.185.156:80";

export const httpRequest = (config) => {
  return axios({
    ...config,
  });
};
