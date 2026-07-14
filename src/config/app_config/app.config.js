export class AppConfig {
  getAppConfig() {
    return {
      key: import.meta.env.VITE_APP_API_KEY,
      BASE_URL: import.meta.env.VITE_APP_BASE_URL,
    };
  }
}
