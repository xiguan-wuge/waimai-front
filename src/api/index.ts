import axios from "axios";
import qs from "qs";
import { apiMap } from "./apiMap";

export const baseURL = "http://192.168.31.158:5173/";

const instance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

type apiMap = {
  get: Function
  post: Function
}
const api:apiMap = {};

const methods = ["get", "post"];
methods.forEach((method: string) => {
  api[method] = (url:string, data: Object | undefined, header?:Object) => {

    return new Promise((resolve, reject) => {
      let opt;
      if (method === "fet") {
        opt = { params: data };
      } else {
        opt = qs.stringify();
      }

      instance({
        method,
        url: baseURL + apiMap[url],
        data: opt,
      })
        .then((res) => {
          let data
          if(res.status === 200) {
            if(res.data && res.data.data) {
              data = res.data
            } else if(res.data) {
              data = res.data
            }
          }
          resolve(data);
        })
        .catch((err) => {
          console.error("api-err", err);
          if(err.data) {
            reject(err.data)
          } else if(err.response) {
            const {status, statusText, data} = err.response
            reject({
              code:  status,
              message: statusText,
              data,
            });
          }
          
        });
    });
  };
});

export default api;
