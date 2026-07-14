import { z } from "zod";
import { AppConfig } from "./app_config/app.config";

const appConfig = new AppConfig();

const appConfigSchema = z.object({
  key: z.string().min(1, "App API key is required"),
  APP_BASE_URL: z.string().url("Invalid base URL"),
});

export const _appConfig = {
  appApiKey: appConfigSchema.parse(appConfig.getAppConfig()).key,
  appBaseUrl: appConfigSchema.parse(appConfig.getAppkey()).APP_BASE_URL,
};
