import { Auth } from '@auth/core';
import { parseString } from 'set-cookie-parser';
import Twitch from '@auth/core/providers/twitch';

const defineConfig = (config) => {
  config.prefix ??= "/api/auth";
  return config;
};

const authConfig = defineConfig({
  providers: [
    Twitch({
      clientId: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.veracines.es", "ASSETS_PREFIX": undefined}.TWITCH_CLIENT_ID,
      clientSecret: {"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.veracines.es", "ASSETS_PREFIX": undefined}.TWITCH_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: ({ session, token }) => ({
      ...session,
      user: {
        ...session.user,
        id: token.sub
      }
    })
  }
});

const actions = [
  "providers",
  "session",
  "csrf",
  "signin",
  "signout",
  "callback",
  "verify-request",
  "error"
];
function AstroAuthHandler(prefix, options = authConfig) {
  return async ({ cookies, request }) => {
    const url = new URL(request.url);
    const action = url.pathname.slice(prefix.length + 1).split("/")[0];
    if (!actions.includes(action) || !url.pathname.startsWith(prefix + "/"))
      return;
    const res = await Auth(request, options);
    if (["callback", "signin", "signout"].includes(action)) {
      res.headers.getSetCookie().forEach((cookie) => {
        const { name, value, ...options2 } = parseString(cookie);
        cookies.set(name, value, options2);
      });
      res.headers.delete("Set-Cookie");
    }
    return res;
  };
}
function AstroAuth(options = authConfig) {
  const { AUTH_SECRET, AUTH_TRUST_HOST, VERCEL, NODE_ENV } = Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://www.veracines.es", "ASSETS_PREFIX": undefined}, { NODE: process.env.NODE, _: process.env._, NODE_ENV: process.env.NODE_ENV });
  options.secret ??= AUTH_SECRET;
  options.trustHost ??= !!(AUTH_TRUST_HOST ?? VERCEL ?? NODE_ENV !== "production");
  const { prefix = "/api/auth", ...authOptions } = options;
  const handler = AstroAuthHandler(prefix, authOptions);
  return {
    async GET(context) {
      return await handler(context);
    },
    async POST(context) {
      return await handler(context);
    }
  };
}

const { GET, POST } = AstroAuth();

export { GET, POST };
