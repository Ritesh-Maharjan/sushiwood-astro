import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ url, redirect }) => {
  const code = url.searchParams.get("code");

  if (!code) {
    return new Response(JSON.stringify({ error: "No code provided" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const tokenResponse = await fetch(
    "https://github.com/login/oauth/access_token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        client_id: import.meta.env.PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      }),
    }
  );

  const tokenData = await tokenResponse.json();

  if (tokenData.error) {
    return new Response(
      JSON.stringify({ error: tokenData.error_description }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  return redirect(
    `${import.meta.env.PUBLIC_BASE_URL}/auth-callback?access_token=${tokenData.access_token}`,
    302
  );
};
