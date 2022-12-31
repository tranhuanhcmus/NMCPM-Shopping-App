import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWQ3ZWJlYTQzODIxYTFiMmIyYTFhNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzI0NjQ3NTMsImV4cCI6MTY3MjcyMzk1M30.bfv1nRl6HLR6p0o5RjOPa16CxP0hZ1Xojji4t_LcLSk";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}`, Authorization: `Bearer ${TOKEN}` },
});
