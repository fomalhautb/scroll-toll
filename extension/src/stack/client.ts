import { StackClientApp } from "@stackframe/react";

export const stackClientApp = new StackClientApp({
  tokenStore: "cookie",

  // get your Stack Auth API keys from https://app.stack-auth.com and store them in a safe place (eg. environment variables)
  publishableClientKey: "pck_vhrp8a9ktxyr4hvrsx7bnhq8pw7pq6py0c9xh0v28pajg",
  projectId: "e9e822c9-d59e-4674-adee-98210eb3f5e3",
});
