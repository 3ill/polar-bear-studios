import { presignUrl, issueSignedToken } from "@vercel/blob";

export async function POST(request) {
  const body = await request.json();
  const { pathname } = body;

  try {
    const token = await issueSignedToken({
      operations: ["put"],
    });

    const { presignedUrl } = await presignUrl(token, {
      pathname: pathname || "file.zip",
      operation: "put",
      validUntil: Date.now() + 15 * 60 * 1000, // 15 minutes
    });

    return new Response(JSON.stringify({ presignedUrl }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Presign error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}
