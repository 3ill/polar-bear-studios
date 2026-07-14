import { httpClient } from "./http_client";

/**
 * API Client - Simplified interface for making HTTP requests
 * Automatically handles authentication and provides consistent error handling
 */
export class ApiClient {
  static async get(url, config) {
    try {
      const response = await httpClient.get(url, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async post(url, data, config) {
    try {
      const response = await httpClient.post(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async put(url, data, config) {
    try {
      const response = await httpClient.put(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async patch(url, data, config) {
    try {
      const response = await httpClient.patch(url, data, config);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static async delete(url, data, config) {
    try {
      const response = await httpClient.delete(url, {
        ...config,
        data,
      });

      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  static handleError(error) {
    return error;
  }
}

export { httpClient };
