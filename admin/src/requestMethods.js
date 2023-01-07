import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";

const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
  //const TOKEN ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTcyMTBkN2RhNjU3YjNiYmUwZGM4MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzAyMzgzMiwiZXhwIjoxNjczMjgzMDMyfQ.h7NmTI0Rdyx2HxlLOCpNsOKzyVcif9y1SCc-W3QIleY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
