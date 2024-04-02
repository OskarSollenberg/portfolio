// pages/_app.js
import { useEffect } from "react";
import "./globals.css";
import setDocumentHeight from "../utils/documentHeight";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const cleanup = setDocumentHeight();

    return cleanup;
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
