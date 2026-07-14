import dotenv from "dotenv";
dotenv.config();

export class AppConfig {
  getAppConfig() {
    return {
      key: process.env.APP_API_KEY,
      BASE_URL: process.env.APP_BASE_URL,
    };
  }
}
