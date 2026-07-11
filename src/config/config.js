import { z } from "zod";
import { ResendConfig } from "./resend/resend.config";

const resendConfig = new ResendConfig();

const resendConfigSchema = z.object({
  key: z.string().min(1, "Resend API key is required"),
});

export const _appConfig = {
  resend: resendConfigSchema.parse(resendConfig.getResendKey()),
};
