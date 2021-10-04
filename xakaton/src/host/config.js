import { httpRequest, url } from "./host";

export const getApi = () => {
  var config = {
    url: `${url}/api/quest`,
    method: "get",
  };
  return httpRequest(config);
};
