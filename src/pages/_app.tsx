import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Store from "@/Redux/Store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}
