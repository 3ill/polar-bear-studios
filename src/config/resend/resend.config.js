import dotenv from "dotenv";
dotenv.config();

export class ResendConfig {
  getResendKey() {
    return {
      key: process.env.RESEND_API_KEY,
    };
  }
}
