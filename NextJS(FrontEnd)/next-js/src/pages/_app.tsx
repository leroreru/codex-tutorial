import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "./shared/layout";
import store from "./redux/store";
import { Provider } from "react-redux";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  const router = useRouter();
  if (router.pathname.startsWith("/login")) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  if (router.pathname.startsWith("/register")) {
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
