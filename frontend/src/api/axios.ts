import axios from "axios";

const instance = axios.create({
  baseURL: "http://100.49.50.236/api", // 여기서 한 번만 바꾸면 끝!
  timeout: 5000, // 5초 동안 응답 없으면 에러 처리
});

export default instance;