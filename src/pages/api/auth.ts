import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({ redirect }) => {
  const redirectUri = `${import.meta.env.PUBLIC_BASE_URL}/api/callback`;

  const githubAuthURL = `https://github.com/login/oauth/authorize?client_id=${import.meta.env.PUBLIC_GITHUB_CLIENT_ID}&scope=repo,user&redirect_uri=${encodeURIComponent(redirectUri)}`;

  return redirect(githubAuthURL, 302);
};
