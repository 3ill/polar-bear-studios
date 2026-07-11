import { _appConfig } from "@/config/config";
import { Resend } from "resend";
import { ISendEmail } from "./interface/resend.interface";

function getResendClient() {
  return new Resend(_appConfig.resend.key);
}

export async function sendEmail(ctx: ISendEmail) {
  const resendClient = getResendClient();

  try {
    const result = await resendClient.emails.send({
      from: "Athanasius@polarbearxr.com",
      to: ctx.to,
      subject: "Access Request Received",
      html: ctx.html,
    });
    return result;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
