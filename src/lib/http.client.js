import { _appConfig } from "@/config/config";
import axios from "axios";

class HttpClient {
  constructor() {
    this.axiosInstance = this.createAxiosInstance();
    this.setupInterceptors();
  }

  createAxiosInstance() {
    const config = _appConfig;
    const baseURL = config.appBaseUrl;

    return axios.create({
      baseURL,
      timeout: 30000,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": config.appApiKey,
      },
      withCredentials: true,
    });
  }

  setupInterceptors() {
    // Add request/response interceptors here if needed
  }

  get(url, config) {
    return this.axiosInstance.get(url, config);
  }

  post(url, data, config) {
    return this.axiosInstance.post(url, data, config);
  }

  put(url, data, config) {
    return this.axiosInstance.put(url, data, config);
  }

  patch(url, data, config) {
    return this.axiosInstance.patch(url, data, config);
  }

  delete(url, config) {
    return this.axiosInstance.delete(url, config);
  }

  getInstance() {
    return this.axiosInstance;
  }
}

export const httpClient = new HttpClient();

export const axiosInstance = httpClient.getInstance();
