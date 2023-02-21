import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Html } from "next/document";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    // <Html>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
    // </Html>
  );
};

export default api.withTRPC(MyApp);
