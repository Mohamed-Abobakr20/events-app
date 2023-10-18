import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Navbar from "@/components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Navbar />
      <div className="container my-5 pt-5">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
