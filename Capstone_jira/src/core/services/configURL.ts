import axios from "axios";
import { LOCAL_SERVICE } from "./localServ";

const BASE_URL = "https://jiranew.cybersoft.edu.vn";

const BASE_USER_URL = `${BASE_URL}/api/Users/`;
const BASE_TASK_TYPE_URL = `${BASE_URL}/api/TaskType/`;
const BASE_STATUS_URL = `${BASE_URL}/api/Status/`;
const BASE_PROJECT_CATEGORY_URL = `${BASE_URL}/api/ProjectCategory`;
const BASE_PROJECT_URL = `${BASE_URL}/api/Project/`;
const BASE_PRIORITY_URL = `${BASE_URL}/api/Priority/`;
const BASE_COMMENT_URL = `${BASE_URL}/api/Comment/`;

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlanMgMjgiLCJIZXRIYW5TdHJpbmciOiIwNi8wOC8yMDIzIiwiSGV0SGFuVGltZSI6IjE2OTEyODAwMDAwMDAiLCJuYmYiOjE2NzI5MzgwMDAsImV4cCI6MTY5MTQyNzYwMH0.1IXShq-PS4U5xC7QUMQLQcPPHNDmZrXfqvEBkJOEvEw";

const AXIOS_INSTANCE_GENERATOR = (BASE_URL: string, accessToken = false) => {
  let config = {
    baseURL: BASE_URL,
    headers: {
      TokenCybersoft: TOKEN_CYBERSOFT,
      Authorization: "Bearer " + LOCAL_SERVICE.user.get()?.accessToken,
    },
  };

  return axios.create(config);
};

export {
  TOKEN_CYBERSOFT,
  AXIOS_INSTANCE_GENERATOR,
  BASE_USER_URL,
  BASE_TASK_TYPE_URL,
  BASE_STATUS_URL,
  BASE_PRIORITY_URL,
  BASE_PROJECT_URL,
  BASE_PROJECT_CATEGORY_URL
};
